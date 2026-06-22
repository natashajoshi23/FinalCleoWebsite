import Link from 'next/link'
import PageBanner from '@/components/PageBanner'
import { client } from '@/sanity/lib/client'
import { PortableText } from '@portabletext/react'

async function getPost(slug) {
  return client.fetch(`
    *[_type == "post" && slug.current == $slug][0] {
      title,
      publishedAt,
      "img": mainImage.asset->url,
      body
    }
  `, { slug })
}

export async function generateStaticParams() {
  const slugs = await client.fetch(`*[_type == "post"].slug.current`)
  return slugs.map(slug => ({ slug }))
}

export default async function BlogPage({ params }) {
  const post = await getPost(params.slug)
  if (!post) return (
    <div className="pg-body">
      <h1>Blog not found</h1>
      <Link href="/blogs">Back to Blogs</Link>
    </div>
  )

  return (
    <>
      <PageBanner eyebrow="Insights" title={post.title} num="" bgImage={post.img || '/images/digital-globe.webp'} />
      <div className="pg-body" style={{ maxWidth: '850px' }}>
        <div style={{ fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '1.5rem' }}>
          {new Date(post.publishedAt).toLocaleDateString('en-GB', { day: '2-digit', month: 'long', year: 'numeric' })}
        </div>
        <h2 style={{ fontFamily: 'var(--serif)', fontSize: '2rem', fontWeight: 700, color: 'var(--paper)', lineHeight: 1.3, marginBottom: '2.5rem' }}>{post.title}</h2>
        {post.img && (
          <div style={{ marginBottom: '3rem' }}>
            <div style={{ height: '350px', overflow: 'hidden', borderRadius: '2px' }}>
              <img src={post.img} alt={post.title} className="img-cover" style={{ filter: 'sepia(20%) saturate(120%) brightness(0.8)' }} />
            </div>
          </div>
        )}
        <div style={{ fontSize: '0.95rem', color: 'var(--fog)', lineHeight: 1.9 }}>
          <PortableText value={post.body} />
        </div>
        <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid var(--ghost)' }}>
          <Link href="/blogs" style={{ fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold)', textDecoration: 'none' }}>← Back to All Insights</Link>
        </div>
      </div>
    </>
  )
}