import { pageMetadata } from '@/sanity/lib/pageSeo'

// page.js is a client component and so can't export metadata itself —
// this sibling layout covers the same route segment. It also supplies the
// default for /projects/[slug], which overrides it with its own per-project tags.
export const revalidate = 60

export async function generateMetadata() {
  return pageMetadata('projects', {
    title: 'Projects — Cleo Consulting',
    description:
      'Cisco networking, cloud integration, cybersecurity, Palo Alto, data science and more — the consulting projects Cleo Consulting delivers for clients.',
    path: '/projects',
    image: '/images/server-rack.webp',
  })
}

export default function ProjectsLayout({ children }) {
  return children
}
