import { pageMetadata } from '@/sanity/lib/pageSeo'

// page.js is a client component and so can't export metadata itself —
// this sibling layout covers the same route segment.
export const revalidate = 60

export async function generateMetadata() {
  return pageMetadata('apply', {
    title: 'Apply Now — Cleo Consulting',
    description:
      'Browse open roles at Cleo Consulting and apply online. We recruit across IT, Finance, Engineering, Admin Support and Sales in the USA, Canada and India.',
    path: '/apply',
    image: '/images/silhouettes-city.webp',
  })
}

export default function ApplyLayout({ children }) {
  return children
}
