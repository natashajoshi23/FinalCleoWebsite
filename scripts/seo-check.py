#!/usr/bin/env python3
"""Developer regression check for page metadata.

This is a DEVELOPER tool, not an SEO tool. It answers one narrow question:
"does every route still emit valid meta tags?" Run it after changing a page.js,
adding a route, or touching anything under src/sanity/.

It is not a substitute for Search Console, Screaming Frog, or Ahrefs — it says
nothing about rankings, indexation, redirects or broken links.

Usage:
    python3 scripts/seo-check.py                          # against localhost:3000
    python3 scripts/seo-check.py https://www.cleoconsult.com
    npm run seo-check                                     # same, localhost

Exits non-zero if any route fails, so it can gate a deploy.

Routes are discovered, not hardcoded: fixed pages come from src/sanity/pages.js,
project and service slugs from their page.js data, and blog slugs from Sanity.
Adding a page to any of those is picked up automatically.
"""

import json
import os
import re
import subprocess
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

# Google truncates around these; outside the range is a warning worth acting on
MIN_DESC, MAX_DESC = 60, 165

SANITY_SLUGS_URL = (
    "https://2geocfye.api.sanity.io/v2026-06-11/data/query/production"
    "?query=%2A%5B_type%3D%3D%22post%22%5D.slug.current"
)


def read(*parts):
    with open(os.path.join(ROOT, *parts), encoding="utf8") as fh:
        return fh.read()


def fetch(url):
    """curl rather than urllib: no dependency on the host's CA bundle."""
    p = subprocess.run(
        ["curl", "-s", "-w", "\n%{http_code}", url], capture_output=True, text=True
    )
    parts = p.stdout.rsplit("\n", 1)
    body = parts[0]
    code = int(parts[1]) if len(parts) > 1 and parts[1].isdigit() else 0
    return code, body


def routes():
    """Every public route, derived from the source rather than hardcoded."""
    fixed = re.findall(r"path:\s*'([^']+)'", read("src", "sanity", "pages.js"))

    def slugs(path, start, end):
        body = read(*path)
        body = body[body.index(start):body.index(end)]
        return re.findall(r"^  '([a-z0-9-]+)':", body, re.M)

    services = slugs(
        ("src", "app", "managed-services", "[slug]", "page.js"),
        "const services = {",
        "const listingSlugs",
    )
    projects = sorted(set(slugs(
        ("src", "app", "projects", "[slug]", "page.js"),
        "const projects = {",
        "const allSlugs",
    )))

    code, body = fetch(SANITY_SLUGS_URL)
    posts = json.loads(body)["result"] if code == 200 else []

    return (
        [p.lstrip("/") for p in fixed]
        + [f"managed-services/{s}" for s in services]
        + [f"projects/{s}" for s in projects]
        + [f"blogs/{s}" for s in posts]
    )


def check(base, path):
    code, html = fetch(f"{base}/{path}")

    def grab(pattern):
        m = re.search(pattern, html, re.S)
        return m.group(1) if m else None

    title = grab(r"<title>(.*?)</title>")
    desc = grab(r'<meta name="description" content="(.*?)"/>')
    canon = grab(r'rel="canonical" href="(.*?)"')
    ogimg = grab(r'property="og:image" content="(.*?)"')
    ogtitle = grab(r'property="og:title" content="(.*?)"')
    twcard = grab(r'name="twitter:card" content="(.*?)"')

    problems = []
    if code != 200:
        problems.append(f"http {code}")
    if not (title or "").strip():
        problems.append("no <title>")
    if not desc:
        problems.append("no description")
    elif len(desc) < MIN_DESC:
        problems.append(f"description only {len(desc)} chars (min {MIN_DESC})")
    elif len(desc) > MAX_DESC:
        problems.append(f"description {len(desc)} chars (max {MAX_DESC})")
    if "\n" in (desc or ""):
        problems.append("newline in description")
    if not canon:
        problems.append("no canonical")
    elif not canon.startswith("http"):
        problems.append(f"canonical is not absolute: {canon}")
    if not ogimg:
        problems.append("no og:image")
    elif not ogimg.startswith("http"):
        problems.append("og:image is not absolute (check metadataBase)")
    if not ogtitle:
        problems.append("no og:title")
    if not twcard:
        problems.append("no twitter:card")

    return problems, title, desc


def check_sitemap(base, paths):
    """sitemap.xml must list every route — a missing page is slower to index."""
    code, xml = fetch(f"{base}/sitemap.xml")
    if code != 200:
        return [f"sitemap.xml returned http {code}"]

    listed = set()
    for loc in re.findall(r"<loc>(.*?)</loc>", xml):
        path = re.sub(r"^https?://[^/]+", "", loc)
        listed.add(path or "/")

    expected = {("/" + p) if p else "/" for p in paths}
    problems = []
    for p in sorted(expected - listed):
        problems.append(f"missing from sitemap.xml: {p}")
    for p in sorted(listed - expected):
        problems.append(f"in sitemap.xml but not a route: {p}")
    return problems


def main():
    base = (
        sys.argv[1]
        if len(sys.argv) > 1
        else os.environ.get("SEO_CHECK_BASE", "http://localhost:3000")
    ).rstrip("/")

    print(f"checking {base}\n")
    paths = routes()
    failures = 0
    titles, descs = {}, {}

    for path in paths:
        problems, title, desc = check(base, path)
        if problems:
            failures += 1
            print(f"  FAIL /{path}: {', '.join(problems)}")
        titles.setdefault(title, []).append(path)
        descs.setdefault(desc, []).append(path)

    # Duplicates across pages are the classic symptom of a missing
    # generateMetadata: several routes silently inheriting one default.
    dup_titles = {k: v for k, v in titles.items() if k and len(v) > 1}
    dup_descs = {k: v for k, v in descs.items() if k and len(v) > 1}

    for k, v in dup_titles.items():
        print(f"  DUPLICATE title {k[:50]!r} on {len(v)} pages: {', '.join(v[:4])}")
    for k, v in dup_descs.items():
        print(f"  DUPLICATE description {k[:50]!r} on {len(v)} pages: {', '.join(v[:4])}")

    sitemap_problems = check_sitemap(base, paths)
    for p in sitemap_problems:
        print(f"  SITEMAP {p}")

    print("-" * 62)
    print(f"routes checked:  {len(paths)}")
    print(f"failures:        {failures}")
    print(f"duplicates:      {len(dup_titles)} titles, {len(dup_descs)} descriptions")
    print(f"sitemap issues:  {len(sitemap_problems)}")

    bad = failures + len(dup_titles) + len(dup_descs) + len(sitemap_problems)
    print("\nPASS" if bad == 0 else f"\nFAIL ({bad} problem(s))")
    return 1 if bad else 0


if __name__ == "__main__":
    sys.exit(main())
