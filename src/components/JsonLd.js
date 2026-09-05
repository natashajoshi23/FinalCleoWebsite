/**
 * Renders a schema.org JSON-LD block.
 *
 * Structured data is invisible to visitors — it describes the page as data so
 * search engines can qualify it for rich results (company knowledge panel,
 * article dates and thumbnails, and so on). It does not affect rankings
 * directly; it makes a page *eligible* for surfaces it otherwise can't appear in.
 *
 * Validate changes at https://search.google.com/test/rich-results
 */
export default function JsonLd({ data }) {
  return (
    <script
      type="application/ld+json"
      // Content is built from our own data, never user input
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

const SITE_URL = 'https://www.cleoconsult.com'

/** Describes the company itself. Rendered site-wide from the root layout. */
export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Cleo Consulting',
  legalName: 'Cleo Consulting Inc.',
  url: SITE_URL,
  logo: `${SITE_URL}/images/logo-dark.webp`,
  image: `${SITE_URL}/images/city-skyscrapers.webp`,
  description:
    'IT Consulting and Recruitment firm operating in USA, Canada and India — placing talent across IT, Finance, Engineering and Healthcare.',
  sameAs: ['https://www.linkedin.com/company/cleo-consulting-inc-/'],
  address: {
    '@type': 'PostalAddress',
    streetAddress: '1879 Whitehaven Road, Suite C',
    addressLocality: 'Grand Island',
    addressRegion: 'NY',
    postalCode: '14072',
    addressCountry: 'US',
  },
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: '+1-866-390-6604',
      email: 'usa@cleoconsult.com',
      contactType: 'customer service',
      areaServed: ['US', 'CA'],
      availableLanguage: ['English'],
    },
    {
      '@type': 'ContactPoint',
      telephone: '+91-80-4333-3655',
      email: 'india@cleoconsult.com',
      contactType: 'customer service',
      areaServed: 'IN',
      availableLanguage: ['English'],
    },
  ],
  // The other two offices, so all three locations are described
  location: [
    {
      '@type': 'Place',
      name: 'Cleo Consulting — Ontario',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '3390 South Service Rd, Suite 301 #24',
        addressLocality: 'Burlington',
        addressRegion: 'ON',
        postalCode: 'L7N 3J5',
        addressCountry: 'CA',
      },
    },
    {
      '@type': 'Place',
      name: 'Cleo Consulting — Bangalore',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '#21178, Tower-21, Prestige Shantiniketan, Whitefield Main Road',
        addressLocality: 'Bangalore',
        postalCode: '560048',
        addressCountry: 'IN',
      },
    },
  ],
}

/**
 * Describes a single blog post. Only fields we actually have are included —
 * an absent author or image is omitted rather than emitted empty, which
 * Google's validator treats as an error.
 */
export function blogPostingSchema({ title, description, slug, image, publishedAt, updatedAt, author }) {
  const url = `${SITE_URL}/blogs/${slug}`
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    ...(description ? { description } : {}),
    ...(image ? { image: [image] } : {}),
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    url,
    ...(publishedAt ? { datePublished: publishedAt } : {}),
    ...(updatedAt || publishedAt ? { dateModified: updatedAt || publishedAt } : {}),
    author: author
      ? { '@type': 'Person', name: author }
      : { '@type': 'Organization', name: 'Cleo Consulting', url: SITE_URL },
    publisher: {
      '@type': 'Organization',
      name: 'Cleo Consulting',
      logo: { '@type': 'ImageObject', url: `${SITE_URL}/images/logo-dark.webp` },
    },
  }
}
