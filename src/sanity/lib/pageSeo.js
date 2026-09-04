import { client } from './client'
import { urlFor } from './image'
import { pageSeoDocId } from '../pages'

const SITE_NAME = 'Cleo Consulting'

// Used for social share previews on pages that don't name their own image
const DEFAULT_OG_IMAGE = '/images/city-skyscrapers.webp'

/**
 * Turn a chunk of body copy into a usable meta description: collapse the
 * newlines and runs of spaces that come out of Portable Text, then trim to
 * ~155 characters on a word boundary rather than mid-word.
 */
export function toMetaDescription(text, limit = 155) {
  if (!text) return undefined
  const clean = text.replace(/\s+/g, ' ').trim()
  if (!clean) return undefined
  if (clean.length <= limit) return clean
  const cut = clean.slice(0, limit)
  const lastSpace = cut.lastIndexOf(' ')
  return (lastSpace > limit * 0.6 ? cut.slice(0, lastSpace) : cut).replace(/[,.;:—-]$/, '') + '…'
}

/**
 * Fetch the Page SEO document for a fixed page, if an editor has created one.
 * Returns null on any failure so a Sanity outage can never break a page build.
 */
async function getPageSeo(pageId) {
  try {
    return await client.fetch(
      `*[_id == $id][0].seo`,
      { id: pageSeoDocId(pageId) },
      { next: { revalidate: 60 } }
    )
  } catch {
    return null
  }
}

/**
 * Build a Next.js metadata object for a page, letting the Studio override the
 * values hardcoded here.
 *
 * Precedence is always CMS value -> code default -> omitted. A blank field in
 * the Studio falls through to the default rather than emitting an empty tag,
 * so a half-filled SEO tab still produces sensible output.
 *
 * @param pageId   an id from SEO_PAGES in src/sanity/pages.js
 * @param defaults { title, description, path, image } written by a developer
 */
export async function pageMetadata(pageId, defaults = {}) {
  const seo = (await getPageSeo(pageId)) || {}

  const title = seo.metaTitle || defaults.title
  const description = seo.metaDescription || defaults.description
  const image = seo.ogImage
    ? urlFor(seo.ogImage).width(1200).height(630).fit('crop').auto('format').url()
    : defaults.image || DEFAULT_OG_IMAGE

  return {
    title,
    description,
    keywords: seo.keywords?.length ? seo.keywords : undefined,
    alternates: defaults.path ? { canonical: defaults.path } : undefined,
    robots: seo.noIndex ? { index: false, follow: false } : undefined,
    openGraph: {
      type: 'website',
      title,
      description,
      url: defaults.path,
      siteName: SITE_NAME,
      images: image ? [{ url: image, width: 1200, height: 630, alt: title }] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: image ? [image] : undefined,
    },
  }
}
