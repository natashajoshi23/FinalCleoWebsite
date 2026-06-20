import { createClient } from 'next-sanity'

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '2geocfye',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2026-06-11',
  useCdn: false,
})

const baseUrl = 'https://www.cleoconsult.com'

export default async function sitemap() {

  // ── Static routes ──────────────────────────────────────────────────────
  const staticRoutes = [
    '/',
    '/team',
    '/social-responsibility',
    '/managed-services',
    '/health-services',
    '/projects',
    '/blogs',
    '/privacy-policy',
    '/contact',
    '/apply',
    '/sitemap',
  ].map(path => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
  }))

  // ── Project sub-pages (static, hardcoded) ─────────────────────────────
  const projectSlugs = [
    'cisco-network-solutions',
    'cloud-integration-services',
    'cyber-security-services',
    'palo-alto-network-solutions',
    'data-science-solutions',
    'it-networking-solutions',
    'salesforce-services',
    'servicenow-service',
    'software-development',
    'aem-development-services',
  ]

  const projectRoutes = projectSlugs.map(slug => ({
    url: `${baseUrl}/projects/${slug}`,
    lastModified: new Date(),
  }))

  // ── Managed services sub-pages (static, hardcoded) ────────────────────
  const serviceSlugs = [
    'cloud-engineers',
    'cyber-security',
    'data-scientist',
    'java-dotnet',
    'palo-alto',
    'salesforce',
    'aem',
    'servicenow',
    'engineering',
    'finance',
    'information-technology',
  ]

  const serviceRoutes = serviceSlugs.map(slug => ({
    url: `${baseUrl}/managed-services/${slug}`,
    lastModified: new Date(),
  }))

  // ── Blog posts (dynamic, from Sanity) ────────────────────────────────
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