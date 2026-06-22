import Link from 'next/link'
import PageBanner from '@/components/PageBanner'
export const metadata = { title: 'Sitemap — Cleo Consulting' }
const links = [
  { section: 'Main', pages: [
    { label: 'Home', href: '/' },
    { label: 'Our Team', href: '/team' },
    { label: 'Social Responsibility', href: '/social-responsibility' },
  ]},
  { section: 'Services', pages: [
    { label: 'Managed Services', href: '/managed-services' },
    { label: 'Health Services', href: '/health-services' },
    { label: 'Projects', href: '/projects' },
  ]},
  { section: 'Resources', pages: [
    { label: 'Insights / Blog', href: '/blogs' },
    { label: 'Privacy Policy', href: '/privacy-policy' },
  ]},
  { section: 'Contact', pages: [
    { label: 'Contact Us', href: '/contact' },
    { label: 'Apply Now', href: '/apply' },
  ]},
]
export default function Sitemap() {
  return (
    <>
      <PageBanner eyebrow="Navigation" title="SITE<br>MAP" num="" bgImage="/images/office-sunset.webp" />
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '4rem 2rem' }}>
        {links.map(s => (
          <div key={s.section} style={{ marginBottom: '2.5rem' }}>
            <h2 style={{ fontFamily: 'var(--display)', fontSize: '1rem', letterSpacing: '0.12em', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: '1rem' }}>{s.section}</h2>
            {s.pages.map(p => (
              <Link key={p.href} href={p.href} style={{ display: 'block', padding: '0.6rem 0', borderBottom: '1px solid var(--ghost)', color: 'var(--paper)', textDecoration: 'none', fontSize: '0.95rem' }}>{p.label}</Link>
            ))}
          </div>
        ))}
      </div>
    </>
  )
}