import PageBanner from '@/components/PageBanner'
import Link from 'next/link'
export const metadata = { title: 'Managed Services — Cleo Consulting' }

const featured = { title: 'Information Technology', desc: 'From helpdesk to enterprise architects — we place the right people, fast. IT is where Cleo began, and it remains the foundation of everything we do.', img: '/images/code-php.webp', slug: 'information-technology' }

const svcs = [
  { title: 'Artificial Intelligence', desc: 'Build smarter systems with AI professionals who know how to deliver results in production.', img: '/images/ai-cube.webp', slug: 'artificial-intelligence', imgPosition: 'center 48%' },
  { title: 'Machine Learning', desc: 'Unlock patterns in your data and automate complex decisions with skilled ML engineers.', img: '/images/ML.webp', slug: 'machine-learning' },
  { title: 'Cloud Engineers & Architects', desc: 'Cloud computing has revolutionized the way organizations manage data.', img: '/images/cloud-eng.webp', slug: 'cloud-engineers' },
  { title: 'Cisco Network Engineers', desc: 'Certified Cisco professionals who design, deploy, and manage enterprise-grade network infrastructure.', img: '/images/cisco.webp', slug: 'cisco' },
  { title: 'Cyber Security Consultant', desc: "Cybersecurity has become a crucial component of every organization's risk strategy.", img: '/images/cybersecurity-shield.webp', slug: 'cyber-security' },
  { title: 'Data Scientist', desc: 'Data Scientists analyze and interpret complex data, driving informed business decisions.', img: '/images/datasci.webp', slug: 'data-scientist' },
  { title: 'Java & .Net Developer', desc: 'Highly skilled developers to deliver robust, scalable software solutions.', img: '/images/code-python.webp', slug: 'java-dotnet' },
  { title: 'Salesforce Consultant', desc: "Help your team maximize the potential of the world's leading CRM platform.", img: '/images/network.webp', slug: 'salesforce' },
  { title: 'ServiceNow Consultant', desc: 'Optimize workflows and enhance IT service management processes.', img: '/images/ITSM.webp', slug: 'servicenow', imgPosition: 'center 30%' },
  { title: 'AEM Developer', desc: 'Build and manage exceptional digital experiences at scale.', img: '/images/adobe.webp', slug: 'aem' },
  { title: 'Palo Alto Certified Engineers', desc: 'PCNSE-certified engineers with deep expertise in next-generation firewalls.', img: '/images/pal-alt.webp', slug: 'palo-alto', imgPosition: 'center 44%' },
  { title: 'Engineering & Design', desc: 'Specialized staffing from mechanical engineers to UX designers.', img: '/images/eng&des.webp', slug: 'engineering' },
  { title: 'Finance & Accounting', desc: 'From junior analysts to CFOs — building strong financial teams.', img: '/images/finance.webp', slug: 'finance' },
  { title: 'Business Administration & Customer Care', desc: 'Operations and customer-facing professionals who keep organizations running smoothly.', img: '/images/cust-care.webp', slug: 'business-admin', imgPosition: 'center 33%' },
  { title: 'Sales & Human Resources', desc: 'Revenue-driving and people-first professionals across all levels and industries.', img: '/images/handshake3.webp', slug: 'sales-hr', imgPosition: 'center 72%' },
  { title: 'Executive Search', desc: 'Confidential, high-touch search for senior leaders who move organizations forward.', img: '/images/executive.webp', slug: 'executive-search' },
]

export default function ManagedServices() {
  return (
    <>
      <link rel="preload" as="image" href="/images/diverse-team.webp" />
      <PageBanner eyebrow="Specialist Talent" title="MANAGED<br>SERVICES" num="04" bgImage="/images/diverse-team.webp" />
      <div style={{ padding: '0.5rem 0 5rem', background: 'var(--ink)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>

          {/* Featured IT card — full width */}
          <Link href={`/managed-services/${featured.slug}`} className="svc svc-featured" style={{ textDecoration: 'none', display: 'grid', marginBottom: '1px', overflow: 'hidden' }}>
            <div className="svc-featured-img" style={{ overflow: 'hidden', position: 'relative' }}>
              <img src={featured.img} alt={featured.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div className="svc-featured-text" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '3rem' }}>
              <div style={{ fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '0.75rem' }}>Our Core Service</div>
              <div className="svc-title" style={{ fontSize: '1.6rem', marginBottom: '1rem' }}>{featured.title}</div>
              <p className="svc-text" style={{ marginBottom: '1.5rem' }}>{featured.desc}</p>
              <div className="svc-arrow">→</div>
            </div>
          </Link>

          {/* Rest of services grid */}
          <div className="svcs-grid">
            {svcs.map(({ title, desc, img, slug, imgPosition, imgScale, imgBg }) => (
              <Link href={`/managed-services/${slug}`} className="svc" key={title} style={{ textDecoration: 'none' }}>
                <div className="svc-img" style={imgBg ? { background: imgBg } : undefined}><img src={img} alt={title} style={{ ...(imgPosition ? { objectPosition: imgPosition } : {}), ...(imgScale ? { transform: `scale(${imgScale})`, transformOrigin: 'center center' } : {}) }} /></div>
                <div className="svc-title">{title}</div>
                <p className="svc-text">{desc}</p>
                <div className="svc-arrow">→</div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
