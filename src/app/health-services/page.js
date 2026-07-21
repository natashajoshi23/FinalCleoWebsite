import PageBanner from '@/components/PageBanner'
import Link from 'next/link'
export const metadata = { title: 'Health Services — Cleo Consulting' }
export default function HealthServices() {
  return (
    <>
      <link rel="preload" as="image" href="/images/doctor-female.webp" />
      <PageBanner eyebrow="Healthcare Staffing" title="CLEO HEALTH<br>SERVICES" num="05" bgImage="/images/healthservices.webp" />
      <div style={{ maxWidth: '950px', margin: '0 auto', padding: '4rem 2rem 5rem' }}>

        {/* Intro */}
        <p style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: '1.4rem', color: 'var(--paper)', lineHeight: 1.4, marginBottom: '1.25rem' }}>We at Cleo specialize in Direct Placement Services to our Healthcare client/partners across North America providing Nursing staff.</p>
        <p style={{ fontSize: '0.95rem', color: 'var(--fog)', lineHeight: 1.85, marginBottom: '2.5rem' }}>We will partner with you to build healthcare staffing solutions that will address your unique workforce needs by tapping into national &amp; international networks of talent and place qualified professionals faster.</p>

        {/* Images + Specialties side by side */}
        <div className="hs-media-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2.5rem', alignItems: 'center', marginBottom: '3rem' }}>
          <div className="hs-photo-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
            <div className="hs-photo" style={{ height: '150px', overflow: 'hidden', borderRadius: '2px' }}><img src="/images/2nurses.webp" alt="Doctor" className="img-cover" /></div>
            <div className="hs-photo" style={{ height: '150px', overflow: 'hidden', borderRadius: '2px' }}><img src="/images/nurse-scrubs.webp" alt="Nurse" className="img-cover" /></div>
            <div className="hs-photo" style={{ height: '150px', overflow: 'hidden', borderRadius: '2px' }}><img src="/images/lab-microscope.webp" alt="Lab" className="img-cover" /></div>
            <div className="hs-photo" style={{ height: '150px', overflow: 'hidden', borderRadius: '2px' }}><img src="/images/nurse.webp" alt="Doctor" className="img-cover" /></div>
          </div>
          <div>
            <div className="hs-label" style={{ fontFamily: 'var(--display)', fontSize: '1.1rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem', color: 'var(--gold)' }}>We offer nursing staff for these specialties:</div>
            {['Registered Nurse – RN', 'Licensed Practical Nurse – LPN', 'Certified Nursing Assistant – CNA'].map(r => (
              <div key={r} style={{ padding: '1rem 0', borderBottom: '1px solid var(--ghost)', fontSize: '1rem', color: 'var(--paper)', fontFamily: 'var(--serif)', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <span className="hs-gold" aria-hidden="true">{'—'}</span> {r}
              </div>
            ))}
          </div>
        </div>

        {/* Nersify Partnership */}
        <div style={{ padding: '2.5rem', border: '1px solid var(--ghost)', marginBottom: '3rem', position: 'relative' }}>
          <div className="hs-label" style={{ position: 'absolute', top: '-0.7rem', left: '1.5rem', background: 'var(--ink)', padding: '0 0.75rem', fontFamily: 'var(--display)', fontSize: '1.1rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--gold)' }}>Partnership</div>
          <h2 style={{ fontFamily: 'var(--serif)', fontSize: '1.3rem', fontWeight: 700, color: 'var(--paper)', marginBottom: '1rem' }}>Partnered with <span className="hs-gold">Nersify</span></h2>
          <p style={{ fontSize: '0.92rem', color: 'var(--fog)', lineHeight: 1.85, marginBottom: '1.25rem' }}>We at Cleo have recently partnered with a HealthTech platform {'–'} {'“'}Nersify{'”'}. Nersify is a healthtech platform that connects qualified healthcare professionals with top-notch employers. We specialize in Direct Placement services of nursing staff to our Healthcare clients across the globe. Since the inception, Nersify has become a global sourcing hub for nurses and healthcare professionals, collaborating with over 300+ hospitals/care homes worldwide. Our platform hosts more than 20,000+ registered healthcare professionals, ensuring a diverse and highly qualified pool of candidates. We have also successfully expanded our services to the USA, placing numerous nurses in care homes and hospitals.</p>
          <p style={{ fontSize: '0.92rem', color: 'var(--fog)', lineHeight: 1.85 }}>With a robust track record of partnering with major Health Services clients, we are committed to delivering exceptional staffing solutions tailored to meet our client{'’'}s needs. Our experience in the staffing and consulting space has equipped us with the expertise to support healthcare organizations in finding the best talent to meet their operational and patient care goals.</p>
          <div style={{ display: 'flex', gap: '2rem', marginTop: '1.5rem', alignItems: 'center', flexWrap: 'wrap', overflow: 'hidden' }}>
            {[
              { n: '300+', l: 'Hospitals & Care Homes' },
              { n: '20K+', l: 'Registered Professionals' },
            ].map(s => (
              <div key={s.l}>
                <div className="hs-stat-n" style={{ fontFamily: 'var(--display)', fontSize: '2.2rem', color: 'var(--gold)' }}>{s.n}</div>
                <div style={{ fontSize: '0.9rem', color: 'var(--fog)', letterSpacing: '0.05em' }}>{s.l}</div>
              </div>
            ))}
            <img src="/images/nersify-logo.webp" alt="Nersify" className="nersify-logo" />
          </div>
        </div>

        {/* Why Partner - 2x2 grid */}
        <div style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontFamily: 'var(--display)', fontSize: '1.6rem', color: 'var(--gold)', letterSpacing: '0.04em', marginBottom: '1.5rem' }}>WHY PARTNER WITH CLEO</h2>
          <div className="hs-why-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px', background: 'var(--ghost)' }}>
            {[
              { t: 'Specialized Staffing Solutions', p: 'We specialize in only Direct Placement services of Nursing Staff, ensuring flexibility and scalability to match your staffing requirements.' },
              { t: 'Extensive Experience', p: 'We have a proven history of successfully partnering with leading Industry partners, providing them with top-tier talent across multiple industries.' },
              { t: 'Qualified Nursing Staff', p: 'We have a dedicated team focused on sourcing, screening, and placing skilled nursing professionals who are well-equipped to provide exceptional patient care.' },
              { t: 'Our Specialties', p: 'Hospitals, Retirement Living, Long-Term Care, Consulting Services, Management Services, Residential Care, Complex Care, Independent Living, Assisted Living, and Memory Care, IT Consulting Services etc.' },
            ].map(({ t, p }) => (
              <div key={t} style={{ background: 'var(--ink)', padding: '2rem' }}>
                <div className="hs-card-t" style={{ fontFamily: 'var(--display)', fontSize: '1rem', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.75rem', fontWeight: 700, color: 'var(--gold)' }}>{t}</div>
                <p style={{ fontSize: '0.95rem', color: 'var(--paper)', lineHeight: 1.75, margin: 0 }}>{p}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Closing */}
        <div style={{ padding: '2rem', background: 'rgba(200,153,31,0.06)', border: '1px solid rgba(200,153,31,0.2)', marginBottom: '2rem' }}>
          <p style={{ fontSize: '0.95rem', color: 'var(--paper)', lineHeight: 1.8, fontStyle: 'italic', margin: 0 }}>Cleo Consulting Inc. is committed to maintaining the highest standards of quality and service in our staffing solutions. We believe that our expertise and dedication make us an ideal partner for your organization in meeting your nursing staff requirements.</p>
        </div>

        <Link href="/apply" className="btn-fill">Apply Now</Link>

      </div>
    </>
  )
}
