import PageBanner from '@/components/PageBanner'
import Link from 'next/link'
export const metadata = { title: 'Managed Services — Cleo Consulting' }
const svcs = [
  { title: 'Cloud Engineers & Architects', desc: 'Cloud computing has revolutionized the way organizations manage data.', img: '/images/laptop-teamwork.webp', slug: 'cloud-engineers' },
  { title: 'Cyber Security Consultant', desc: "Cybersecurity has become a crucial component of every organization's risk strategy.", img: '/images/code-blue.webp', slug: 'cyber-security' },
  { title: 'Data Scientist', desc: 'Data Scientists analyze and interpret complex data, driving informed business decisions.', img: '/images/circuit-brain.webp', slug: 'data-scientist' },
  { title: 'Java & .Net Developer', desc: 'Highly skilled developers to deliver robust, scalable software solutions.', img: '/images/code-python.webp', slug: 'java-dotnet' },
  { title: 'Palo Alto Certified Engineers', desc: 'PCNSE-certified engineers with deep expertise in next-generation firewalls.', img: '/images/digital-globe.webp', slug: 'palo-alto' },
  { title: 'Salesforce Consultant', desc: "Help your team maximize the potential of the world's leading CRM platform.", img: '/images/laptop-teamwork.webp', slug: 'salesforce' },
  { title: 'AEM Developer', desc: 'Build and manage exceptional digital experiences at scale.', img: '/images/ai-cube.webp', slug: 'aem' },
  { title: 'ServiceNow Consultant', desc: 'Optimize workflows and enhance IT service management processes.', img: '/images/desk-bw.webp', slug: 'servicenow' },
  { title: 'Engineering & Design', desc: 'Specialized staffing from mechanical engineers to UX designers.', img: '/images/circuit-board.webp', slug: 'engineering' },
  { title: 'Finance & Accounting', desc: 'From junior analysts to CFOs — building strong financial teams.', img: '/images/finance-tablet.webp', slug: 'finance' },
  { title: 'Information Technology', desc: 'Short-term contractors or permanent staff for long-term needs.', img: '/images/code-php.webp', slug: 'information-technology' },
]
export default function ManagedServices() {
  return (
    <>
      <PageBanner eyebrow="Specialist Talent" title="MANAGED<br>SERVICES" num="04" bgImage="/images/businessman-suit.webp" />
      <div style={{ padding: '2.5rem 0 5rem', background: 'var(--ink)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
          <p style={{ fontSize: '0.95rem', color: 'var(--fog)', lineHeight: 1.85, maxWidth: '720px', textAlign: 'center', margin: '0 auto 2.5rem' }}></p>
          <div className="svcs-grid">
            {svcs.map(({ title, desc, img, slug }) => (
              <Link href={`/managed-services/${slug}`} className="svc" key={title} style={{ textDecoration: 'none' }}>
                <div className="svc-img"><img src={img} alt={title} /></div>
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