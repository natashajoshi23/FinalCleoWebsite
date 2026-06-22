import PageBanner from '@/components/PageBanner'
import Link from 'next/link'
import { client } from '@/sanity/lib/client'

export const metadata = { title: 'Insights — Cleo Consulting' }

async function getPosts() {
  return client.fetch(`
    *[_type == "post"] | order(publishedAt desc) {
      title,
      "slug": slug.current,
      publishedAt,
      "img": mainImage.asset->url,
      "excerpt": array::join(string::split(pt::text(body), "")[0..200], "") + "..."
    }
  `)
}

export default async function Blogs() {
  const posts = await getPosts()

  return (
    <>
      <PageBanner eyebrow="Insights" title="LATEST<br>THINKING" num="07" bgImage="/images/business-newspaper.webp" />
      <div className="pg-body" style={{ paddingTop: '0rem' }}>
        <div className="blog-grid">
          {posts.map(({ publishedAt, title, excerpt, img, slug }) => (
            <Link href={"/blogs/" + slug} className="blog" key={slug} style={{ textDecoration: 'none' }}>
              <div className="blog-card-img-real">
                {img && <img src={img} alt={title} />}
              </div>
              <div style={{ padding: '1.5rem' }}>
                <div className="blog-date" style={{ color: 'var(--gold)', fontWeight: 700, fontSize: '0.8rem' }}>
                  {new Date(publishedAt).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}
                </div>
                <div className="blog-title">{title}</div>
                <p className="blog-excerpt">{excerpt}</p>
                <span className="blog-read">Read More →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}