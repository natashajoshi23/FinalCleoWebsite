import PageBanner from '@/components/PageBanner'
import { pageMetadata } from '@/sanity/lib/pageSeo'
// import CTABand from '@/components/CTABand'
export const revalidate = 60

export async function generateMetadata() {
  return pageMetadata('social-responsibility', {
    title: 'Social Responsibility — Cleo Consulting',
    description:
      'How Cleo Consulting gives back — our commitments to our communities, our people and responsible business practice.',
    path: '/social-responsibility',
    image: '/images/social-responsibility.webp',
  })
}
export default function CSR() {
  return (
    <>
      <link rel="preload" as="image" href="/images/social-responsibility.webp" />
      <PageBanner eyebrow="Values" title="SOCIAL<br>RESPONSIBILITY" num="03" bgImage="/images/social-responsibility.webp" />
      <div className="pg-body">
        <div className="csr-intro-grid" style={{ display: 'grid', gridTemplateColumns: '1.4fr 0.6fr', gap: '3rem', alignItems: 'start', marginBottom: '1rem' }}>
          <div>
            <p className="csr-text">Our company got its name from Cleopatra — not the queen of ancient Egypt, but a rescued stray dog that one of the partners adopted a few years back. We draw our inspiration from her: love the employees that work for us, respect the clients we work for, and just be happy and content with the small treats that life has to offer.</p>
            <p className="csr-text" style={{ marginTop: '1.5rem' }}>Advocating the idea of animal welfare, we try to donate a small percentage of the company&rsquo;s earnings towards organizations doing genuine good for our mute friends.</p>
          </div>
          <div style={{ height: '220px', overflow: 'hidden', borderRadius: '2px' }} className="img-zoom"><img src="/images/puzzle.webp" alt="Puzzle" className="img-cover" width={900} height={224} loading="lazy" style={{ transform: 'scale(1.3)', transformOrigin: 'center center' }} /></div>
        </div>
        <h2 style={{ fontFamily: 'var(--display)', fontSize: '2rem', color: 'var(--paper)', margin: '3rem 0 1rem', letterSpacing: '0.04em' }}>ORGANIZATIONS WE SUPPORT</h2>
        <div className="csr-orgs-list">
          {[{ name: 'PeTA', full: 'People for the Ethical Treatment of Animals' },{ name: 'VoSD', full: 'Voice of Stray Dogs' },{ name: 'CUPA', full: 'Compassion Unlimited Plus Action' }, { name: 'ARF', full: 'Animal Relief Fund' }, { name: 'ALAI', full: 'Animal Lives Are Important' }].map(o => (
            <div className="csr-org" key={o.name}><div className="csr-org-name">{o.name}</div><div className="csr-org-full">{o.full}</div></div>
          ))}
        </div>
      </div>
      {/* <CTABand label="Partner with purpose" title="JOIN<br><em>Us</em>" btnText="Contact Us" btnHref="/contact" /> */}
    </>
  )
}
