/**
 * The fixed pages of the site that can have their SEO edited in the Studio.
 *
 * Single source of truth: the Studio builds its "Page" dropdown from this list,
 * and each page.js looks itself up by the same `id`.
 *
 * To make a NEW page SEO-editable: add an entry here, then call
 * `pageMetadata('<id>', {...defaults})` from that page's generateMetadata.
 * Blog posts are NOT in this list — they carry their own SEO tab on each post.
 */
export const pageSeoDocId = (pageId) => `pageSeo.${pageId}`

export const SEO_PAGES = [
  {id: 'home', title: 'Home', path: '/'},
  {id: 'team', title: 'Our Team', path: '/team'},
  {id: 'contact', title: 'Contact', path: '/contact'},
  {id: 'projects', title: 'Projects', path: '/projects'},
  {id: 'managed-services', title: 'Managed Services', path: '/managed-services'},
  {id: 'health-services', title: 'Health Services', path: '/health-services'},
  {id: 'apply', title: 'Apply / Careers', path: '/apply'},
  {id: 'blogs', title: 'Insights (blog list)', path: '/blogs'},
  {id: 'social-responsibility', title: 'Social Responsibility', path: '/social-responsibility'},
  {id: 'privacy-policy', title: 'Privacy Policy', path: '/privacy-policy'},
  {id: 'accessibility', title: 'Accessibility Statement', path: '/accessibility'},
  {id: 'sitemap', title: 'Sitemap', path: '/sitemap'},
]
