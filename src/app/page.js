'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'
import RotatingBadge from '@/components/RotatingBadge'
import AnimatedCounter from '@/components/AnimatedCounter'
import StaggerReveal from '@/components/StaggerReveal'

const slides = [
  { eyebrow: 'Welcome to Cleo Consulting', lines: ['IT CONSULTING', '& Recruitment', 'Experts'], desc: 'A hardworking and dedicated firm built by partners with 200+ years of combined experience in IT Consulting and Recruitment.', btn1: { label: 'Contact Us', href: '/contact' }, btn2: { label: 'Meet the Team', href: '/team' }, bg: '/images/city-skyscrapers.webp' },
  { eyebrow: 'Talent Acquisition', lines: ['WE SNIFF', 'OUT THE', 'Best Talent'], desc: 'End-to-end recruitment across IT, Finance, Engineering, Customer Service, Admin Support and Sales — across USA, Canada & India.', btn1: { label: 'Managed Services', href: '/managed-services' }, btn2: { label: 'Apply Now', href: '/apply' }, bg: '/images/silhouettes-city.webp' },
  { eyebrow: 'North America & India', lines: ['OPERATING IN', 'USA, CANADA', '& INDIA'], desc: 'Strategic partnerships for consulting projects with both onshore and offshore delivery models tailored to your needs.', btn1: { label: 'View Projects', href: '/projects' }, btn2: { label: 'Health Services', href: '/health-services' }, bg: '/images/night-city.webp' },
]

const services = [
  { num: '01 / 04', title: 'IT Consulting & Projects', text: 'Strategic partnerships for onshore and offshore delivery. Cloud, networking, cybersecurity, Salesforce, ServiceNow, AEM and more.', href: '/managed-services', img: '/images/code-blue.webp' },
  { num: '02 / 04', title: 'IT Staff Augmentation', text: 'Top-tier contractors placed fast. Cloud architects, Palo Alto engineers, data scientists, Java/.NET developers and beyond.', href: '/managed-services', img: '/images/code-python.webp' },
  { num: '03 / 04', title: 'Permanent Recruitment', text: 'End-to-end recruitment across IT, Finance, Engineering, Customer Service, Admin Support and Sales across three countries.', href: '/managed-services', img: '/images/team-meeting-overhead.webp' },
  { num: '04 / 04', title: 'Health Services', text: 'Direct placement of RNs, LPNs and CNAs across North America. Partnered with Nersify — 300+ hospitals, 20,000+ professionals.', href: '/health-services', img: '/images/doctor-female.webp' },
]

const roles = [
  { name: 'Cloud Engineers & Architects', tag: 'Infrastructure', href: '/managed-services' },
  { name: 'Cyber Security Consultants', tag: 'Security', href: '/managed-services' },
  { name: 'Data Scientists', tag: 'Analytics', href: '/managed-services' },
  { name: 'Palo Alto Certified Engineers', tag: 'PCNSE', href: '/managed-services' },
  { name: 'Salesforce & ServiceNow Consultants', tag: 'CRM / ITSM', href: '/managed-services' },
  { name: 'Java & .NET Developers', tag: 'Engineering', href: '/managed-services' },
  { name: 'Registered Nurses — RN / LPN / CNA', tag: 'Healthcare', href: '/health-services' },
]

const projects = [
  { title: 'Cisco Network Solutions', text: 'Enterprise Cisco network infrastructure design and deployment for clients across North America.', img: '/images/laptop-teamwork.webp' },
  { title: 'Cloud Integration Services', text: 'Multi-cloud integration across Azure, AWS and GCP driving productivity and scalability.', img: '/images/digital-globe.webp' },
  { title: 'Cyber Security Services', text: 'Advanced security consultation protecting digital assets for enterprise clients worldwide.', img: '/images/circuit-board.webp' },
]

const clients = ['CISCO', 'AZURE', 'AWS', 'PALO ALTO', 'SALESFORCE', 'SERVICENOW', 'GOOGLE CLOUD', 'NERSIFY', 'ADOBE AEM']

export default function Home() {
  const [cur, setCur] = useState(0)
  useEffect(() => { const t = setInterval(() => setCur(c => (c + 1) % slides.length), 6000); return () => clearInterval(t) }, [])
  const slide = slides[cur]

  return (
    <>
      {/* HERO */}
      <div className="hero" style={{ paddingTop: '12rem' }}>
        {slides.map((s, i) => (
          <div key={i} className="hero-bg-img" style={{ opacity: i === cur ? 1 : 0, transition: 'opacity 0.8s ease-in-out' }}>
            <img src={s.bg} alt="" aria-hidden="true" />
          </div>
        ))}
        <div className="hero-grid" />
        <div className="hero-glow" />
        <div className="hero-content">
          <div style={{ display: 'flex', gap: '3rem', alignItems: 'flex-start' }}>
            <div style={{ flex: 1 }}>
              <div className="hero-slider-area">
                <div key={cur} className="hero-slide">
                  <div className="hero-eyebrow"><div className="eyebrow-dash" /><span className="eyebrow-text">{slide.eyebrow}</span></div>
                  <h1 className="hero-title">
                    <span className="line">{slide.lines[0]}</span>
                    <span className="line line-gold">{slide.lines[1]}</span>
                    <span className="line line-gold">{slide.lines[2]}</span>
                  </h1>
                  <p className="hero-desc">{slide.desc}</p>
                  <div className="hero-btns">
                    <Link href={slide.btn1.href} className="btn-fill">{slide.btn1.label}</Link>
                    <Link href={slide.btn2.href} className="btn-ghost-btn">{slide.btn2.label}</Link>
                  </div>
                </div>
              </div>
              <div className="hero-bottom">
                <div className="hero-bottom-left">
                  <div className="hero-stats" style={{ position: 'relative', zIndex: 2 }}>
                    <div className="stat"><div className="stat-n">2013</div><div className="stat-l" style={{ color: 'var(--paper)', opacity: 0.7 }}>Year Founded</div></div>
                    <div className="stat"><div className="stat-n">3</div><div className="stat-l" style={{ color: 'var(--paper)', opacity: 0.7 }}>Countries</div></div>
                    <div className="stat"><div className="stat-n">100%</div><div className="stat-l" style={{ color: 'var(--paper)', opacity: 0.7 }}>Partner-Led</div></div>
                  </div>
                  <div className="hero-dots-wrap">
                    {slides.map((_, i) => <button key={i} className={`hdot${i === cur ? ' active' : ''}`} onClick={() => setCur(i)} aria-label={`Go to slide ${i + 1}`} />)}
                  </div>
                </div>
              </div>
            </div>
            <div className="hero-badge-panel" style={{ position: 'relative', width: '350px', height: '100%', minHeight: '500px', marginTop: '0rem', zIndex: 0 }}>
              <Link href="/projects" className="badge-link float-slow" style={{ textDecoration: 'none', position: 'absolute', top: '0', right: '0', textAlign: 'center' }}>
                <RotatingBadge text="OUR PROJECTS · OUR PROJECTS · OUR PROJECTS · " img="/images/finance-tablet.webp" spacing="1.7" size="170" imgSize="120" />
                <div style={{ fontSize: '1rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--gold)', marginTop: '0.4rem' }}>View Projects →</div>
              </Link>
              <Link href="/managed-services" className="badge-link float-med" style={{ textDecoration: 'none', position: 'absolute', top: '150px', right: '200px', textAlign: 'center' }}>
                <RotatingBadge text="IT STAFFING · IT STAFFING · IT STAFFING · IT STAFFING · " img="/images/code-python.webp" spacing="1" size="260" imgSize="180" />
                <div style={{ fontSize: '1rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--gold)', marginTop: '0.4rem' }}>Our Services →</div>
              </Link>
              <Link href="/health-services" className="badge-link float-slow" style={{ textDecoration: 'none', position: 'absolute', top: '400px', right: '-10px', textAlign: 'center' }}>
                <RotatingBadge text="HEALTH SERVICES · HEALTH SERVICES · HEALTH SERVICES · " img="/images/nurse-scrubs.webp" spacing="0.7" size="200" imgSize="140" />
                <div style={{ fontSize: '1rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--gold)', marginTop: '0.4rem' }}>Learn More →</div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* TICKER */}
      <div className="ticker-wrap"><div className="ticker-inner">
        {['IT CONSULTING','STAFFING SOLUTIONS','CLOUD ENGINEERING','HEALTHCARE STAFFING','CYBER SECURITY','PARTNER-LED','USA · CANADA · INDIA','IT CONSULTING','STAFFING SOLUTIONS','CLOUD ENGINEERING','HEALTHCARE STAFFING','CYBER SECURITY','PARTNER-LED','USA · CANADA · INDIA'].map((t,i) => <span className="ticker-item" key={i}>{t}<span className="ticker-sep" /></span>)}
      </div></div>

      {/* CLIENTS */}
      <div className="clients-section" style={{ padding: '1rem 0' }}>
        <div className="clients-label" style={{ paddingTop: '1.2rem' }}>Trusted Technologies & Partners</div>
        <div className="clients-track">{[...clients,...clients].map((c,i) => <div className="client-logo" key={i}><span>{c}</span></div>)}</div>
      </div>

      {/* MANIFESTO */}
      <div className="manifesto" style={{ paddingBottom: '1rem', paddingTop: '1rem' }}><div className="manifesto-inner">
        <div className="manifesto-left"><ScrollReveal>
          <div className="sec-label" style={{ marginTop: '4rem', marginBottom: '1.5rem' }}>Our Philosophy</div>
          <p className="big-quote" style={{ marginBottom: '1.5rem' }}>&ldquo;Every role filled is <em className="gradient-text" style={{ WebkitTextFillColor: 'transparent' }}>a relationship</em> built. We sniff out the <em className="gradient-text" style={{ WebkitTextFillColor: 'transparent' }}>right talent</em>— not just the nearest available.&rdquo;</p>
          <div className="quote-attr" style={{ marginBottom: '2rem' }}>— Cleo Consulting</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '5rem', marginTop: '3.5rem' }}>
        <div style={{ position: 'relative', display: 'inline-block' }}>
          <div style={{ position: 'absolute', inset: '-8px', border: '1.5px solid var(--gold)', opacity: 0.4, transform: 'rotate(2deg)' }} />
          <div style={{ transform: 'rotate(-1deg)', height: '250px', overflow: 'hidden', borderRadius: '2px', position: 'relative' }}>
            <img src="/images/handshake.webp" alt="Partnership" className="img-cover" style={{ filter: 'sepia(20%) saturate(120%) brightness(0.85)' }} />
          </div>
        </div>
        <div style={{ position: 'relative', display: 'inline-block' }}>
          <div style={{ position: 'absolute', inset: '-8px', border: '1.5px solid var(--gold)', opacity: 0.4, transform: 'rotate(-2deg)' }} />
          <div style={{ transform: 'rotate(1deg)', height: '250px', overflow: 'hidden', borderRadius: '2px', position: 'relative' }}>
            <img src="/images/team-meeting-overhead.webp" alt="Team" className="img-cover" style={{ filter: 'sepia(20%) saturate(120%) brightness(0.85)' }} />
          </div>
        </div>
      </div>       </ScrollReveal></div>
        <div className="cards-col">
          {[
            { num: '01', title: 'Who We Are', text: "We are Cleo Consulting, a hardworking and dedicated IT Consulting and Recruitment firm. Cleo is being built by partners who boast a combined experience of over 200+ years in IT Consulting and Recruitment Industry. Since Cleo's inception, we have partnered with multiple clients in various industries successfully delivering projects.", img: '/images/laptop-teamwork.webp' },
            { num: '02', title: 'What We Do', text: "We have strategic partnerships to deliver various consulting projects with both onshore and offshore delivery models. At the same time, our core business entails providing end to end recruitment services — IT, Finance & Accounting, Engineering, Customer Service, Admin Support and Sales. This allows our clients to focus on what is most important for their company while leaving their hiring needs to us.", img: '/images/desk-bw.webp' },
            { num: '03', title: 'Why Cleo?', text: "We are not a typical projects consulting firm — we serve a limited number of clients to build strong partner relationships. This allows us to deliver a higher level of responsiveness, fewer blocking restrictions, maximum access to the market and personal, partner-led involvement on all assignments. Being small allows us to stay hungry, remain motivated and driven to excel. We are of the \"Action Speaks Louder Than Words\" school of thought.", img: '/images/puzzle-light.webp' },
          ].map(({ num, title, text, img }, i) => (
            <ScrollReveal key={num} delay={i + 1}><div className="m-card">
              <div className="m-num">{num}</div>
              <div><div className="m-title">{title}</div><p className="m-text">{text}</p>
              <div style={{ marginTop: '1.25rem', position: 'relative', display: 'inline-block', width: '100%' }}>
                <div style={{ position: 'absolute', inset: '-6px', border: '1px solid var(--gold)', opacity: 0.3, transform: 'rotate(1.5deg)' }} />
                <div style={{ height: '120px', overflow: 'hidden', borderRadius: '2px', position: 'relative' }} className="img-zoom">
                  <img src={img} alt={title} className="img-cover" style={{ filter: 'sepia(30%) saturate(130%) brightness(0.75)' }} />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(200,153,31,0.12), rgba(0,18,41,0.4))', pointerEvents: 'none' }} />
                </div>
              </div>              </div>
            </div></ScrollReveal>
          ))}
        </div>
      </div></div>

      {/* TESTIMONIAL */}
      <div className="testimonial-section">
        <div className="testimonial-bg"><img src="/images/conference-room.webp" alt="" aria-hidden="true" /></div>        <div className="testimonial-inner"><ScrollReveal>
          <div className="testimonial-mark">&ldquo;</div>
          <p className="testimonial-text">Being small keeps us hungry, motivated and driven to excel. We don&rsquo;t just fill roles — we build lasting partnerships that transform how our clients find and retain talent.</p>
          <div className="testimonial-author">— Cleo Consulting Founding Partners</div>
        </ScrollReveal></div>
      </div>

      {/* TALENT ROLES */}
      <div className="talent-sec" style={{ position: 'relative' }}>
        <div className="text-outline" style={{ left: '-1rem', right: 'auto' }}>TALENT</div>
        <div className="talent-inner">
          <div className="talent-hdr">
            <ScrollReveal><div className="sec-label" style={{ marginBottom: '1.25rem' }}>Specialist Talent</div>
              <div className="talent-title-big"><span>WE PLACE</span> <em>These</em> <span>EXPERTS</span></div></ScrollReveal>
            <ScrollReveal delay={1}><div>
              <p style={{ fontSize: '0.88rem', lineHeight: 1.8, color: 'var(--fog)', maxWidth: '340px', marginBottom: '1.5rem', letterSpacing: '0.02em', opacity: 0.85 }}></p>
              <div style={{ position: 'relative', display: 'inline-block', width: '100%' }}>
                <div style={{ position: 'absolute', inset: '-8px', border: '1px solid var(--gold)', opacity: 0.4, transform: 'rotate(2deg)' }} />
                <div style={{ height: '250px', overflow: 'hidden', borderRadius: '2px', position: 'relative' }} className="img-zoom">
                  <img src="/images/team-fistbump.webp" alt="Team" className="img-cover" style={{ filter: 'sepia(30%) saturate(130%) brightness(0.75)', objectPosition: 'center 32%' }} />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(200,153,31,0.12), rgba(0,18,41,0.4))', pointerEvents: 'none' }} />
                </div>
              </div>            </div></ScrollReveal>
          </div>
          <StaggerReveal className="talent-list">
            {roles.map(({ name, tag, href }) => (
              <Link href={href} className="role stagger-item hover-line" key={name} style={{ textDecoration: 'none' }}>
                <span className="role-name">{name}</span><span className="role-tag">{tag}</span><span className="role-arr">→</span>
              </Link>
            ))}
          </StaggerReveal>
        </div>
      </div>

      {/* NUMBERS
      <ScrollReveal><div className="numbers"><div className="numbers-inner">
        <div className="num-item"><div className="num-val"><AnimatedCounter end="3" /></div><div className="num-label">Global Office Locations</div></div>
        <div className="num-item"><div className="num-val"><AnimatedCounter end="20" suffix="K+" /></div><div className="num-label">Nersify Professionals</div></div>
        <div className="num-item"><div className="num-val"><AnimatedCounter end="10" suffix="+" /></div><div className="num-label">Specialist Disciplines</div></div>
        <div className="num-item"><div className="num-val"><AnimatedCounter end="98" suffix="%" /></div><div className="num-label">Client Retention Rate</div></div>
      </div></div></ScrollReveal> */}

      {/* SPLIT HEALTH */}
      <div className="split-section">
        <div className="split-left"><img src="/images/doctor-female.webp" alt="Healthcare" /></div>
        <div className="split-right"><ScrollReveal>
          <div className="sec-label" style={{ marginBottom: '1.25rem' }}>New Division</div>
          <div className="big-title" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', marginBottom: '1.5rem' }}>CLEO<br /><em style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', color: 'var(--gold)' }}>Health</em><br />SERVICES</div>
          <p style={{ fontSize: '0.9rem', lineHeight: 1.85, color: 'var(--fog)', marginBottom: '1.5rem', maxWidth: '420px' }}>Direct Placement of nursing professionals across North America. Partnered with Nersify — 300+ hospitals, 20,000+ professionals worldwide.</p>
          <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
            {['RN','LPN','CNA','Long-Term Care','Memory Care'].map(p => <span className="pill" key={p}>{p}</span>)}
          </div>
          <Link href="/health-services" className="btn-fill">Learn More</Link>
        </ScrollReveal></div>
      </div>

      {/* PROJECTS */}
      <div className="projects-sec" style={{ position: 'relative' }}>
        <div className="text-outline" style={{ left: '-1rem', right: 'auto' }}>PROJECTS</div>
        <div className="projects-inner">
          <ScrollReveal><div className="projects-hdr">
            <div><div className="sec-label" style={{ marginBottom: '1.8rem' }}>Selected Work</div>
              <h2 className="big-title" style={{ fontSize: 'clamp(3rem, 6vw, 6rem)' }}>KEY<br /><span style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', color: 'var(--gold)' }}>Projects</span></h2></div>
            <Link href="/projects" className="btn-ghost-btn">View All</Link>
          </div></ScrollReveal>
          <ScrollReveal delay={1}><div className="proj-grid">
            {projects.map(({ title, text, img }) => (
              <Link href="/projects" className="proj" key={title} style={{ textDecoration: 'none', display: 'block' }}>
                <div className="proj-card-img"><img src={img} alt={title} /></div>
                <div style={{ padding: '1.5rem 2rem' }}><div className="proj-title">{title}</div><p className="proj-text">{text}</p><div className="proj-link">View More</div></div>
              </Link>
            ))}
          </div></ScrollReveal>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-sec" style={{ position: 'relative' }}>
        <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', zIndex: 0 }}><img src="/images/office-sunset.webp" alt="" aria-hidden="true" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.06 }} /></div>
        <ScrollReveal><div className="cta-label"><div className="cta-dash" />Ready to work together<div className="cta-dash" /></div></ScrollReveal>
        <ScrollReveal delay={1}><h2 className="cta-title">LET&rsquo;S<br /><em>BUILD</em></h2></ScrollReveal>
        <ScrollReveal delay={2}><p className="cta-sub">We respond quickly and partner closely. Tell us what you need — we&rsquo;ll find the right people or build the right solution.</p></ScrollReveal>
        <ScrollReveal delay={3}><div className="cta-btns"><Link href="/contact" className="btn-fill">Start a Conversation</Link><Link href="/managed-services" className="btn-ghost-btn">All Services</Link></div></ScrollReveal>
      </div>
    </>
  )
}
