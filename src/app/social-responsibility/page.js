import PageBanner from '@/components/PageBanner'
// import CTABand from '@/components/CTABand'
export const metadata = { title: 'Social Responsibility — Cleo Consulting' }
export default function CSR() {
  return (
    <>
      <PageBanner eyebrow="Values" title="SOCIAL<br>RESPONSIBILITY" num="03" bgImage="/images/puzzle-colorful.webp" />
      <div className="pg-body">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'start', marginBottom: '3rem' }}>
          <div>
            <p className="csr-text">Our company got its name from Cleopatra — not the queen of ancient Egypt, but a rescued stray dog that one of the partners adopted a few years back. We draw our inspiration from her: love the employees that work for us, respect the clients we work for, and just be happy and content with the small treats that life has to offer.</p>
            <p className="csr-text" style={{ marginTop: '1.5rem' }}>Advocating the idea of animal welfare, we try to donate a small percentage of the company&rsquo;s earnings towards organizations doing genuine good for our mute friends.</p>
          </div>
          <div style={{ height: '320px', overflow: 'hidden', borderRadius: '2px' }} className="img-zoom"><img src="/images/puzzle-light.webp" alt="Puzzle" className="img-cover" /></div>
        </div>
        <h3 style={{ fontFamily: 'var(--display)', fontSize: '2rem', color: 'var(--paper)', margin: '3rem 0 1rem', letterSpacing: '0.04em' }}>ORGANIZATIONS WE SUPPORT</h3>
        <div className="csr-orgs-list">
          {[{ name: 'PeTA', full: 'People for the Ethical Treatment of Animals' },{ name: 'VoSD', full: 'Voice of Stray Dogs' },{ name: 'CUPA', full: 'Compassion Unlimited Plus Action' }].map(o => (
            <div className="csr-org" key={o.name}><div className="csr-org-name">{o.name}</div><div className="csr-org-full">{o.full}</div></div>
          ))}
        </div>
      </div>
      {/* <CTABand label="Partner with purpose" title="JOIN<br><em>Us</em>" btnText="Contact Us" btnHref="/contact" /> */}
    </>
  )
}
