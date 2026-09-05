import { createClient } from 'next-sanity'
import { SEO_PAGES } from '@/sanity/pages'
import { allSlugs as serviceSlugs } from './managed-services/[slug]/page'
import { allSlugs as projectSlugs } from './projects/[slug]/page'

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '2geocfye',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2026-06-11',
  useCdn: false,
})

const baseUrl = 'https://www.cleoconsult.com'

/**
 * Every URL here is derived from the same source the pages themselves use, so
 * adding a page can't silently leave it out of the sitemap. This previously
 * held hand-maintained slug lists that drifted — six service pages, including
 * /artificial-intelligence and /machine-learning, went missing.
 *
 * scripts/seo-check.py asserts this file covers every route.
 */
export default async function sitemap() {
  const staticRoutes = SEO_PAGES.map(({ path }) => ({
    url: `${baseUrl}${path === '/' ? '' : path}`,
    lastModified: new Date(),
  }))

  const projectRoutes = projectSlugs.map(slug => ({
    url: `${baseUrl}/projects/${slug}`,
    lastModified: new Date(),
  }))

  const serviceRoutes = serviceSlugs.map(slug => ({
    url: `${baseUrl}/managed-services/${slug}`,
    lastModified: new Date(),
  }))

  // Blog posts (dynamic, from Sanity)
  let blogRoutes = []
  try {
    const posts = await client.fetch(
      `*[_type == "post" && defined(slug.current)]{ "slug": slug.current, _updatedAt }`
    )
    blogRoutes = posts.map(post => ({
      url: `${baseUrl}/blogs/${post.slug}`,
      lastModified: new Date(post._updatedAt),
    }))
  } catch (err) {
    console.error('Sitemap: failed to fetch blog posts from Sanity', err)
  }

  return [...staticRoutes, ...projectRoutes, ...serviceRoutes, ...blogRoutes]
}
