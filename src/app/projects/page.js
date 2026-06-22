'use client'
import PageBanner from '@/components/PageBanner'
import Link from 'next/link'
// export const metadata = { title: 'Projects — Cleo Consulting' }
const projects = [
  { title: 'Cisco Network Solutions', desc: 'Comprehensive Cisco network solutions that empower businesses to build secure, scalable, and reliable network infrastructures.', img: '/images/digital-globe.webp', slug: 'cisco-network-solutions' },
  { title: 'Cloud Integration Services', desc: 'Comprehensive cloud integration solutions that connect and streamline your business processes across all major cloud platforms.', img: '/images/laptop-teamwork.webp', slug: 'cloud-integration-services' },
  { title: 'Cyber Security Services', desc: 'Safeguarding your digital assets with comprehensive and tailored solutions to address your unique security needs.', img: '/images/code-blue.webp', slug: 'cyber-security-services' },
  { title: 'Palo Alto Network Solutions', desc: 'Comprehensive Palo Alto network solutions that empower businesses to secure their networks and mitigate emerging cyber threats.', img: '/images/night-city.webp', slug: 'palo-alto-network-solutions' },
  { title: 'Data Science Solutions', desc: 'Cutting-edge solutions designed to help you leverage the potential of your data and make informed business decisions.', img: '/images/circuit-brain.webp', slug: 'data-science-solutions' },
  { title: 'IT Networking Solutions', desc: 'Cutting-edge IT networking solutions that optimize connectivity, enhance performance, and enable seamless communication.', img: '/images/circuit-board.webp', slug: 'it-networking-solutions' },
  { title: 'Salesforce Services', desc: 'Comprehensive Salesforce services tailored to meet your business needs and maximize the potential of your CRM.', img: '/images/laptop-teamwork.webp', slug: 'salesforce-services' },
  { title: 'ServiceNow Service', desc: 'Top-notch ServiceNow services to optimize workflows, enhance collaboration, and streamline IT service management.', img: '/images/desk-bw.webp', slug: 'servicenow-service' },
  { title: 'Software Development (Java & .NET)', desc: 'Exceptional Java and .NET development services to help businesses build robust and scalable software solutions.', img: '/images/code-python.webp', slug: 'software-development' },
  { title: 'AEM Development Services', desc: 'Top-notch AEM development services to help businesses leverage the power of Adobe Experience Manager.', img: '/images/ai-cube.webp', slug: 'aem-development-services' },
]
export default function Projects() {
  return (
    <>
      {/* Mobile-only: hide description text, shrink title font on project cards */}
      <style jsx global>{`
        @media (max-width: 640px) {
          .proj-grid {
            grid-template-columns: 1fr !important;
          }
          .proj-img-wrap {
            height: 240px !important;
          }
          .proj-content {
            padding: 1.5rem !important;
          }
          .proj-desc {
            display: none !important;
          }
          .proj-title {
            font-size: 1rem !important;
            margin-bottom: 0 !important;
          }
          .proj-title-lg {
            font-size: 1rem !important;
            margin-bottom: 0 !important;
          }
          .proj-view {
            font-size: 0.55rem !important;
            letter-spacing: 0.08em !important;
            white-space: nowrap !important;
          }
        }
      `}</style>

      <PageBanner eyebrow="Onshore or Offshore" title="OUR<br>PROJECTS" num="06" bgImage="/images/laptop-teamwork.webp" />
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '4rem 2rem 5rem' }}>
        <p style={{ fontSize: '0.95rem', color: 'var(--fog)', lineHeight: 1.85, maxWidth: '720px', marginBottom: '3rem', textAlign: 'center', margin: '0 auto 1.5rem' }}>Strategic partnerships delivering consulting projects with both onshore and offshore delivery models.</p>

        {/* Featured first two - large */}
        <div className="proj-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1.5rem' }}>
          {projects.slice(0, 2).map(({ title, desc, img, slug }) => (
            <Link href={"/projects/" + slug} key={slug} style={{ textDecoration: 'none', display: 'block', position: 'relative', overflow: 'hidden', borderRadius: '2px', border: '1px solid var(--ghost)' }}>
              <div className="proj-img-wrap" style={{ height: '320px', overflow: 'hidden', position: 'relative' }}>
                <img src={img} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s, filter 0.5s', filter: 'sepia(20%) saturate(120%) brightness(0.7)' }}
                  onMouseOver={e => { e.currentTarget.style.transform = 'scale(1.05)'; e.currentTarget.style.filter = 'sepia(0%) saturate(100%) brightness(0.8)' }}
                  onMouseOut={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.filter = 'sepia(20%) saturate(120%) brightness(0.7)' }}
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,18,41,0.95) 0%, rgba(0,18,41,0.3) 50%, transparent 100%)', pointerEvents: 'none' }} />
              </div>
              <div className="proj-content" style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '2rem' }}>
                <div className="proj-title-lg" style={{ fontFamily: 'var(--serif)', fontSize: '1.4rem', fontWeight: 700, color: '#fff', marginBottom: '0.5rem', lineHeight: 1.3 }}>{title}</div>
                <p className="proj-desc" style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.75)', lineHeight: 1.6, marginBottom: '0.75rem' }}>{desc}</p>
                <span className="proj-view" style={{ fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold)' }}>View Details {'\u2192'}</span>
              </div>
            </Link>
          ))}
        </div>

        {/* Remaining projects - 3 column grid */}
        <div className="proj-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', marginBottom: '1.5rem' }}>
          {projects.slice(2, 5).map(({ title, desc, img, slug }) => (
            <Link href={"/projects/" + slug} key={slug} style={{ textDecoration: 'none', display: 'block', position: 'relative', overflow: 'hidden', borderRadius: '2px', border: '1px solid var(--ghost)' }}>
              <div className="proj-img-wrap" style={{ height: '220px', overflow: 'hidden', position: 'relative' }}>
                <img src={img} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s, filter 0.5s', filter: 'sepia(20%) saturate(120%) brightness(0.7)' }}
                  onMouseOver={e => { e.currentTarget.style.transform = 'scale(1.05)'; e.currentTarget.style.filter = 'sepia(0%) saturate(100%) brightness(0.8)' }}
                  onMouseOut={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.filter = 'sepia(20%) saturate(120%) brightness(0.7)' }}
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,18,41,0.95) 0%, rgba(0,18,41,0.2) 60%, transparent 100%)', pointerEvents: 'none' }} />
              </div>
              <div className="proj-content" style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '1.5rem' }}>
                <div className="proj-title" style={{ fontFamily: 'var(--serif)', fontSize: '1.1rem', fontWeight: 700, color: '#fff', marginBottom: '0.3rem', lineHeight: 1.3 }}>{title}</div>
                <span className="proj-view" style={{ fontSize: '0.6rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold)' }}>View Details {'\u2192'}</span>
              </div>
            </Link>
          ))}
        </div>

        <div className="proj-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', marginBottom: '1.5rem' }}>
          {projects.slice(5, 8).map(({ title, desc, img, slug }) => (
            <Link href={"/projects/" + slug} key={slug} style={{ textDecoration: 'none', display: 'block', position: 'relative', overflow: 'hidden', borderRadius: '2px', border: '1px solid var(--ghost)' }}>
              <div className="proj-img-wrap" style={{ height: '220px', overflow: 'hidden', position: 'relative' }}>
                <img src={img} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s, filter 0.5s', filter: 'sepia(20%) saturate(120%) brightness(0.7)' }}
                  onMouseOver={e => { e.currentTarget.style.transform = 'scale(1.05)'; e.currentTarget.style.filter = 'sepia(0%) saturate(100%) brightness(0.8)' }}
                  onMouseOut={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.filter = 'sepia(20%) saturate(120%) brightness(0.7)' }}
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,18,41,0.95) 0%, rgba(0,18,41,0.2) 60%, transparent 100%)', pointerEvents: 'none' }} />
              </div>
              <div className="proj-content" style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '1.5rem' }}>
                <div className="proj-title" style={{ fontFamily: 'var(--serif)', fontSize: '1.1rem', fontWeight: 700, color: '#fff', marginBottom: '0.3rem', lineHeight: 1.3 }}>{title}</div>
                <span className="proj-view" style={{ fontSize: '0.6rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold)' }}>View Details {'\u2192'}</span>
              </div>
            </Link>
          ))}
        </div>

        {/* Last two - large again */}
        <div className="proj-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
          {projects.slice(8).map(({ title, desc, img, slug }) => (
            <Link href={"/projects/" + slug} key={slug} style={{ textDecoration: 'none', display: 'block', position: 'relative', overflow: 'hidden', borderRadius: '2px', border: '1px solid var(--ghost)' }}>
              <div className="proj-img-wrap" style={{ height: '320px', overflow: 'hidden', position: 'relative' }}>
                <img src={img} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s, filter 0.5s', filter: 'sepia(20%) saturate(120%) brightness(0.7)' }}
                  onMouseOver={e => { e.currentTarget.style.transform = 'scale(1.05)'; e.currentTarget.style.filter = 'sepia(0%) saturate(100%) brightness(0.8)' }}
                  onMouseOut={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.filter = 'sepia(20%) saturate(120%) brightness(0.7)' }}
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,18,41,0.95) 0%, rgba(0,18,41,0.3) 50%, transparent 100%)', pointerEvents: 'none' }} />
              </div>
              <div className="proj-content" style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '2rem' }}>
                <div className="proj-title-lg" style={{ fontFamily: 'var(--serif)', fontSize: '1.4rem', fontWeight: 700, color: '#fff', marginBottom: '0.5rem', lineHeight: 1.3 }}>{title}</div>
                <p className="proj-desc" style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.75)', lineHeight: 1.6, marginBottom: '0.75rem' }}>{desc}</p>
                <span className="proj-view" style={{ fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold)' }}><span>View Details</span><span className="sr-only"> about {title}</span> →</span>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </>
  )
}