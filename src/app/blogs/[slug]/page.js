import Link from 'next/link'
import PageBanner from '@/components/PageBanner'
import { client } from '@/sanity/lib/client'
import { PortableText } from '@portabletext/react'
import { toMetaDescription } from '@/sanity/lib/pageSeo'
import JsonLd, { blogPostingSchema } from '@/components/JsonLd'

async function getPost(slug) {
  return client.fetch(`
    *[_type == "post" && slug.current == $slug][0] {
      title,
      publishedAt,
      _updatedAt,
      "authorName": author->name,
      "img": mainImage.asset->url + "?w=1200&q=70&auto=format&fit=max",
      body,
      seo,
      "shareImg": coalesce(seo.ogImage.asset->url, mainImage.asset->url) + "?w=1200&h=630&q=75&auto=format&fit=crop",
      // Fallback description: first ~155 characters of the body, used when
      // no SEO description has been written in the Studio
      "autoDescription": pt::text(body)
    }
  `, { slug })
}

export async function generateStaticParams() {
  const slugs = await client.fetch(`*[_type == "post"].slug.current`)
  return slugs.map(slug => ({ slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const post = await getPost(slug)
  if (!post) return { title: 'Blog not found — Cleo Consulting' }

  const seo = post.seo || {}
  const title = seo.metaTitle || post.title
  const description =
    seo.metaDescription || toMetaDescription(post.autoDescription)
  const url = `/blogs/${slug}`

  return {
    title,
    description,
    keywords: seo.keywords?.length ? seo.keywords : undefined,
    alternates: { canonical: url },
    robots: seo.noIndex ? { index: false, follow: false } : undefined,
    openGraph: {
      type: 'article',
      title,
      description,
      url,
      siteName: 'Cleo Consulting',
      publishedTime: post.publishedAt,
      images: post.shareImg ? [{ url: post.shareImg, width: 1200, height: 630, alt: title }] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: post.shareImg ? [post.shareImg] : undefined,
    },
  }
}

// Re-query Sanity at most once per 60s, and render slugs created after build on demand
export const revalidate = 60
export const dynamicParams = true

export default async function BlogPage({ params }) {
  const { slug } = await params
  const post = await getPost(slug)
  if (!post) return (
    <div className="pg-body">
      <h1>Blog not found</h1>
      <Link href="/blogs">Back to Blogs</Link>
    </div>
  )

  return (
    <>
      <JsonLd
        data={blogPostingSchema({
          title: post.seo?.metaTitle || post.title,
          description: post.seo?.metaDescription || toMetaDescription(post.autoDescription),
          slug,
          image: post.shareImg,
          publishedAt: post.publishedAt,
          updatedAt: post._updatedAt,
          author: post.authorName,
        })}
      />
      <PageBanner eyebrow="Insights" title={post.title} num="" bgImage={post.img || '/images/digital-globe.webp'} />
      <div className="pg-body" style={{ maxWidth: '850px' }}>
        <div className="blog-post-date" style={{ fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '1.5rem' }}>
          {new Date(post.publishedAt).toLocaleDateString('en-GB', { day: '2-digit', month: 'long', year: 'numeric' })}
        </div>
        <h2 style={{ fontFamily: 'var(--serif)', fontSize: '2rem', fontWeight: 700, color: 'var(--paper)', lineHeight: 1.3, marginBottom: '2.5rem' }}>{post.title}</h2>
        <div style={{ fontSize: '0.95rem', color: 'var(--fog)', lineHeight: 1.9 }}>
          <PortableText value={post.body} />
        </div>
        <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid var(--ghost)' }}>
          <Link href="/blogs" className="blog-post-back" style={{ fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold)', textDecoration: 'none' }}>← Back to All Insights</Link>
        </div>
      </div>
    </>
  )
}