import Link from 'next/link'
import PageBanner from '@/components/PageBanner'
export const metadata = { title: 'Sitemap — Cleo Consulting' }
const links = [
  { section: 'Main', pages: [
    { label: 'Home', href: '/' },
    { label: 'Our Team', href: '/team' },
    { label: 'Social Responsibility', href: '/social-responsibility' },
  ]},
  { section: 'Managed Services', pages: [
    { label: 'All Managed Services', href: '/managed-services' },
    { label: 'Cloud Engineers & Architects', href: '/managed-services/cloud-engineers' },
    { label: 'Cyber Security Consultant', href: '/managed-services/cyber-security' },
    { label: 'Data Scientist', href: '/managed-services/data-scientist' },
    { label: 'Java & .NET Developer', href: '/managed-services/java-dotnet' },
    { label: 'Palo Alto Certified Engineers', href: '/managed-services/palo-alto' },
    { label: 'Salesforce Consultant', href: '/managed-services/salesforce' },
    { label: 'AEM Developer', href: '/managed-services/aem' },
    { label: 'ServiceNow Consultant', href: '/managed-services/servicenow' },
    { label: 'Engineering & Design', href: '/managed-services/engineering' },
    { label: 'Finance & Accounting', href: '/managed-services/finance' },
    { label: 'Information Technology', href: '/managed-services/information-technology' },
    { label: 'Artificial Intelligence & Machine Learning', href: '/managed-services/artificial-intelligence' },
  ]},
  { section: 'Projects', pages: [
    { label: 'All Projects', href: '/projects' },
    { label: 'Cisco Network Solutions', href: '/projects/cisco-network-solutions' },
    { label: 'Cloud Integration Services', href: '/projects/cloud-integration-services' },
    { label: 'Cyber Security Services', href: '/projects/cyber-security-services' },
    { label: 'Palo Alto Network Solutions', href: '/projects/palo-alto-network-solutions' },
    { label: 'Data Science Solutions', href: '/projects/data-science-solutions' },
    { label: 'IT Networking Solutions', href: '/projects/it-networking-solutions' },
    { label: 'Salesforce Services', href: '/projects/salesforce-services' },
    { label: 'ServiceNow Service', href: '/projects/servicenow-service' },
    { label: 'Software Development Services', href: '/projects/software-development' },
    { label: 'AEM Development Services', href: '/projects/aem-development-services' },
  ]},
  { section: 'Other Services', pages: [
    { label: 'Health Services', href: '/health-services' },
  ]},
  { section: 'Resources', pages: [
    { label: 'Insights / Blog', href: '/blogs' },
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Accessibility Statement', href: '/accessibility' },
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