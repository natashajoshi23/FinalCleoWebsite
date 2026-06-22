import PageBanner from '@/components/PageBanner'
import Link from 'next/link'
export const metadata = { title: 'Health Services — Cleo Consulting' }
export default function HealthServices() {
  return (
    <>
      <PageBanner eyebrow="Healthcare Staffing" title="CLEO HEALTH<br>SERVICES" num="05" bgImage="/images/doctor-female.webp" />
      <div style={{ maxWidth: '950px', margin: '0 auto', padding: '4rem 2rem 5rem' }}>

        {/* Intro */}
        <p style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: '1.4rem', color: 'var(--paper)', lineHeight: 1.4, marginBottom: '1.25rem' }}>We at Cleo specialize in Direct Placement Services to our Healthcare client/partners across North America providing Nursing staff.</p>
        <p style={{ fontSize: '0.95rem', color: 'var(--fog)', lineHeight: 1.85, marginBottom: '2.5rem' }}>We will partner with you to build healthcare staffing solutions that will address your unique workforce needs by tapping into national & international networks of talent and place qualified professionals faster.</p>

        {/* Images + Specialties side by side */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2.5rem', alignItems: 'center', marginBottom: '3rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
            <div style={{ height: '150px', overflow: 'hidden', borderRadius: '2px' }}><img src="/images/doctor-bp.webp" alt="Doctor" className="img-cover" /></div>
            <div style={{ height: '150px', overflow: 'hidden', borderRadius: '2px' }}><img src="/images/nurse-scrubs.webp" alt="Nurse" className="img-cover" /></div>
            <div style={{ height: '150px', overflow: 'hidden', borderRadius: '2px' }}><img src="/images/lab-microscope.webp" alt="Lab" className="img-cover" /></div>
            <div style={{ height: '150px', overflow: 'hidden', borderRadius: '2px' }}><img src="/images/doctor-writing.webp" alt="Doctor" className="img-cover" /></div>
          </div>
          <div>
            <div style={{ fontFamily: 'var(--display)', fontSize: '1.1rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '1rem' }}>We offer nursing staff for these specialties:</div>
            {['Registered Nurse \u2013 RN', 'Licensed Practical Nurse \u2013 LPN', 'Certified Nursing Assistant \u2013 CNA'].map(r => (
              <div key={r} style={{ padding: '1rem 0', borderBottom: '1px solid var(--ghost)', fontSize: '1rem', color: 'var(--paper)', fontFamily: 'var(--serif)', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <span style={{ color: 'var(--gold)' }}>{'\u2014'}</span> {r}
              </div>
            ))}
          </div>
        </div>

        {/* Nersify Partnership */}
        <div style={{ padding: '2.5rem', border: '1px solid var(--ghost)', marginBottom: '3rem', position: 'relative' }}>
          <div style={{ position: 'absolute', top: '-0.7rem', left: '1.5rem', background: 'var(--ink)', padding: '0 0.75rem', fontFamily: 'var(--display)', fontSize: '1.1rem', letterSpacing: '0.12em', color: 'var(--gold)', textTransform: 'uppercase' }}>Partnership</div>
          <h3 style={{ fontFamily: 'var(--serif)', fontSize: '1.3rem', fontWeight: 700, color: 'var(--paper)', marginBottom: '1rem' }}>Partnered with <span style={{ color: 'var(--gold)' }}>Nersify</span></h3>
          <p style={{ fontSize: '0.92rem', color: 'var(--fog)', lineHeight: 1.85, marginBottom: '1.25rem' }}>We at Cleo have recently partnered with a HealthTech platform {'\u2013'} {'\u201C'}Nersify{'\u201D'}. Nersify is a healthtech platform that connects qualified healthcare professionals with top-notch employers. We specialize in Direct Placement services of nursing staff to our Healthcare clients across the globe. Since the inception, Nersify has become a global sourcing hub for nurses and healthcare professionals, collaborating with over 300+ hospitals/care homes worldwide. Our platform hosts more than 20,000+ registered healthcare professionals, ensuring a diverse and highly qualified pool of candidates. We have also successfully expanded our services to the USA, placing numerous nurses in care homes and hospitals.</p>
          <p style={{ fontSize: '0.92rem', color: 'var(--fog)', lineHeight: 1.85 }}>With a robust track record of partnering with major Health Services clients, we are committed to delivering exceptional staffing solutions tailored to meet our client{'\u2019'}s needs. Our experience in the staffing and consulting space has equipped us with the expertise to support healthcare organizations in finding the best talent to meet their operational and patient care goals.</p>
          <div style={{ display: 'flex', gap: '2rem', marginTop: '1.5rem', alignItems: 'center' }}>
            {[
              { n: '300+', l: 'Hospitals & Care Homes' },
              { n: '20K+', l: 'Registered Professionals' },
            ].map(s => (
              <div key={s.l}>
                <div style={{ fontFamily: 'var(--display)', fontSize: '1.6rem', color: 'var(--gold)' }}>{s.n}</div>
                <div style={{ fontSize: '0.7rem', color: 'var(--fog)', letterSpacing: '0.05em' }}>{s.l}</div>
              </div>
            ))}
            <img src="/images/nersify-logo.webp" alt="Nersify" className="nersify-logo" />
          </div>
        </div>

        {/* Why Partner - 2x2 grid */}
        <div style={{ marginBottom: '3rem' }}>
          <h3 style={{ fontFamily: 'var(--display)', fontSize: '1.6rem', color: 'var(--paper)', letterSpacing: '0.04em', marginBottom: '1.5rem' }}>WHY PARTNER WITH CLEO</h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px', background: 'var(--ghost)' }}>
            {[
              { t: 'Specialized Staffing Solutions', p: 'We specialize in only Direct Placement services of Nursing Staff, ensuring flexibility and scalability to match your staffing requirements.' },
              { t: 'Extensive Experience', p: 'We have a proven history of successfully partnering with leading Industry partners, providing them with top-tier talent across multiple industries.' },
              { t: 'Qualified Nursing Staff', p: 'We have a dedicated team focused on sourcing, screening, and placing skilled nursing professionals who are well-equipped to provide exceptional patient care.' },
              { t: 'Our Specialties', p: 'Hospitals, Retirement Living, Long-Term Care, Consulting Services, Management Services, Residential Care, Complex Care, Independent Living, Assisted Living, and Memory Care, IT Consulting Services etc.' },
            ].map(({ t, p }) => (
              <div key={t} style={{ background: 'var(--ink)', padding: '2rem' }}>
                <div style={{ fontFamily: 'var(--display)', fontSize: '1rem', letterSpacing: '0.08em', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: '0.75rem', fontWeight: 700 }}>{t}</div>
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