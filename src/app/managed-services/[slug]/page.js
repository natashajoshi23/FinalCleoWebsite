import Link from 'next/link'
import PageBanner from '@/components/PageBanner'

const services = {
  'cloud-engineers': {
    title: 'Cloud Engineers and Architects',
    subtitle: 'What They Do and Why They Are Important',
    banner: 'CLOUD<br>ENGINEERS',
    img: '/images/laptop-teamwork.webp',
    sections: [
      { heading: '', text: "Cloud computing has revolutionized the way organizations manage and process data. With the increasing adoption of cloud technology, the demand for skilled cloud engineers and architects has grown rapidly. In this article, we will explore the roles and importance of cloud engineers and architects." },
      { heading: 'What is a Cloud Engineer and Architect?', text: "A Cloud Engineer and Architect is a professional who specializes in designing, implementing, and managing cloud-based solutions for organizations. Their responsibilities include assessing an organization\u2019s cloud needs, designing and implementing cloud-based solutions, and ensuring that the solutions are secure, scalable, and efficient. They are required to have a deep understanding of cloud computing technologies, such as Amazon Web Services (AWS), Microsoft Azure, and Google Cloud Platform (GCP)." },
      { heading: 'What Do Cloud Engineers and Architects Do?', text: "Cloud Engineers and Architects perform a range of activities to design, implement, and manage cloud-based solutions." },
      { heading: 'The Importance of Cloud Engineers and Architects', text: "Cloud Engineers and Architects play a critical role in helping organizations leverage the benefits of cloud computing. Cloud-based solutions offer organizations scalability, flexibility, and cost-effectiveness, which are essential for maintaining a competitive edge in today\u2019s fast-paced business environment. Cloud Engineers and Architects help organizations achieve these benefits by designing, implementing, and managing cloud-based solutions that meet their specific needs." },
      { heading: '', text: "In conclusion, Cloud Engineers and Architects are essential professionals for any organization that wants to leverage the benefits of cloud computing. They play a critical role in designing, implementing, and managing cloud-based solutions that meet an organization\u2019s specific needs. With the increasing adoption of cloud technology, the role of Cloud Engineers and Architects has become more critical than ever." },
    ],
    bullets: [
      "Assessing an organization\u2019s cloud needs and recommending appropriate cloud solutions",
      "Designing and implementing cloud-based solutions, including virtual servers, storage, and networking",
      "Ensuring that cloud-based solutions are secure, scalable, and efficient",
      "Migrating on-premise systems and applications to cloud-based solutions",
      "Monitoring and managing cloud-based solutions to ensure optimal performance and cost-effectiveness",
    ],
  },
  'cyber-security': {
    title: 'Cyber Security Consultant',
    subtitle: 'What They Do and Why They Are Important',
    banner: 'CYBER<br>SECURITY',
    img: '/images/code-blue.webp',
    sections: [
      { heading: '', text: "In today\u2019s digital age, cyber threats are becoming increasingly prevalent and sophisticated. Cybersecurity has become a crucial concern for businesses and organizations of all sizes, and the need for expert guidance and support is critical. This is where a Cyber Security Consultant comes in. In this article, we will explore the roles and importance of Cyber Security Consultants." },
      { heading: 'What is a Cyber Security Consultant?', text: "A Cyber Security Consultant is a professional who provides expert advice and guidance to organizations on how to manage and mitigate cyber threats. Their responsibilities include assessing the organization\u2019s cybersecurity risk, identifying vulnerabilities and threats, and recommending appropriate measures to improve the organization\u2019s security posture. They are required to have a deep understanding of cybersecurity technologies and principles, as well as experience with cybersecurity risk management." },
      { heading: 'What Does a Cyber Security Consultant Do?', text: "Cyber Security Consultants perform a range of activities to help organizations manage their cybersecurity risk." },
      { heading: 'The Importance of Cyber Security Consultants', text: "Cyber Security Consultants play a critical role in helping organizations manage their cybersecurity risk. With the increasing sophistication of cyber threats and the growing reliance on technology, organizations need expert guidance and support to protect their sensitive data and systems. Cyber Security Consultants help organizations identify and mitigate cybersecurity risks, which helps to protect the organization\u2019s reputation, finances, and operations." },
      { heading: '', text: "In conclusion, Cyber Security Consultants are essential professionals for any organization that wants to manage its cybersecurity risk effectively. They help organizations identify vulnerabilities and threats, develop and implement cybersecurity solutions, and educate employees on cybersecurity best practices. With the increasing prevalence and sophistication of cyber threats, the role of Cyber Security Consultants has become more critical than ever." },
    ],
    bullets: [
      "Conducting cybersecurity risk assessments to identify vulnerabilities and threats",
      "Developing cybersecurity policies and procedures to protect against cyber threats",
      "Designing and implementing cybersecurity solutions to protect against cyber attacks",
      "Conducting cybersecurity awareness training for employees to educate them on cybersecurity best practices",
      "Monitoring and analyzing cybersecurity threats and trends to keep the organization informed and prepared",
    ],
  },
  'data-scientist': {
    title: 'Data Scientist',
    subtitle: 'Customized Staffing Solutions',
    banner: 'DATA<br>SCIENCE',
    img: '/images/circuit-brain.webp',
    sections: [
      { heading: '', text: "A Data Scientist is an integral part of any organization that deals with large amounts of data. They use their expertise to analyze and interpret data to gain valuable insights that can be used to improve business operations, customer experiences, and overall decision-making. At Cleo Consulting, we understand the importance of having skilled Data Scientists on your team, which is why we provide customized staffing solutions to help you find the right candidate for your organization." },
      { heading: '', text: "Our Data Scientists are experts in data analysis, data mining, and predictive modeling. They have a deep understanding of statistical techniques and machine learning algorithms, which they use to uncover hidden patterns and insights within your data. With their skills and expertise, they can help you make data-driven decisions that can give your organization a competitive edge." },
      { heading: '', text: "Our customized staffing solutions ensure that you find a Data Scientist that is a good fit for your organization. Our recruiters work closely with you to understand your specific needs and requirements, ensuring that the candidate we provide has the right skills and experience to meet your needs. We also provide ongoing support and training to ensure that your Data Scientist stays up-to-date with the latest techniques and tools." },
      { heading: '', text: "Partnering with Cleo Consulting for Data Scientist staffing gives you access to top-tier talent in the industry. Our Data Scientists have a proven track record of success, and they are constantly updating their skills to keep up with the latest trends and technologies. With our expertise and your vision, we can help you achieve your goals and take your organization to new heights." },
      { heading: '', text: "Contact us today to learn more about our customized staffing solutions for Data Scientists and find the right candidate for your organization. With our expert staffing solutions and experienced Data Scientists, you can unlock the potential of your data and gain valuable insights that can transform your business." },
    ],
    bullets: [],
  },
  'java-dotnet': {
    title: 'Java & .Net Developer',
    subtitle: 'Top-Tier JAVA & .NET Developer Staffing Solutions',
    banner: 'JAVA &<br>.NET',
    img: '/images/code-python.webp',
    sections: [
      { heading: '', text: "Are you in need of highly skilled JAVA & .NET Developers to join your team? Look no further than Cleo Consulting! We are a premier staffing agency specializing in IT staffing solutions for companies across diverse industries. Our team of experienced recruiters will work with you to identify the perfect candidate for your organization, ensuring that they possess the right skillset and experience to thrive in your environment." },
      { heading: 'Customized IT Staffing Solutions for JAVA & .NET Developers', text: "At Cleo Consulting, we take a personalized approach to staffing solutions. We understand that every company has unique needs, and we work closely with our clients to understand their specific requirements. Our team of experienced recruiters will identify highly skilled JAVA & .NET Developers who have the right experience and knowledge to meet your needs." },
      { heading: 'Extensive Network of Top-Tier JAVA & .NET Developers', text: "Our vast network of highly skilled JAVA & .NET Developers ensures that we can identify top talent quickly and efficiently. We have deep knowledge of the market\u2019s demands and keep a close eye on emerging trends in the industry, allowing us to provide customized staffing solutions that align with your organization\u2019s goals." },
      { heading: 'Personalized Job Matching', text: "We take the time to understand your organization\u2019s unique culture and requirements to ensure that we find the perfect match for your team. Our experienced recruiters have a deep understanding of the skills and experience required for success in the IT industry, and they work tirelessly to match candidates with job opportunities that align with their career goals." },
      { heading: '', text: "Whether you\u2019re looking for highly skilled JAVA & .NET Developers to join your team on a permanent basis or need short-term contract staff, we can help. Partnering with Cleo Consulting gives you access to top-tier talent in the industry, ensuring that your organization has the expertise it needs to thrive. So, contact us today to learn more about our customized IT staffing solutions and find the right talent for your team!" },
    ],
    bullets: [],
  },
  'palo-alto': {
    title: 'Palo Alto Certified Engineers',
    subtitle: 'What They Do and Why They Are Important',
    banner: 'PALO ALTO<br>ENGINEERS',
    img: '/images/digital-globe.webp',
    sections: [
      { heading: '', text: "Cloud computing has revolutionized the way organizations manage and process data. With the increasing adoption of cloud technology, the demand for skilled cloud engineers and architects has grown rapidly. In this article, we will explore the roles and importance of cloud engineers and architects." },
      { heading: 'What is a Palo Alto Certified Engineer?', text: "A Palo Alto Certified Engineer is a professional who has undergone training and certification to become an expert in using and managing Palo Alto Networks\u2019 products and services. Their responsibilities include designing and implementing cybersecurity solutions that use Palo Alto Networks\u2019 products and services, managing and troubleshooting Palo Alto Networks\u2019 products and services, and ensuring that organizations\u2019 networks are secure from cyber threats. They are required to have a deep understanding of cybersecurity concepts, networking protocols, and Palo Alto Networks\u2019 products and services." },
      { heading: 'What Do Palo Alto Certified Engineers Do?', text: "Palo Alto Certified Engineers perform a range of activities to design, implement, and manage cybersecurity solutions that use Palo Alto Networks\u2019 products and services." },
      { heading: 'The Importance of Palo Alto Certified Engineers', text: "Palo Alto Certified Engineers play a critical role in helping organizations protect their networks from cyber threats. Cyber threats are becoming increasingly sophisticated, and organizations need cybersecurity solutions that are effective, reliable, and scalable. Palo Alto Certified Engineers help organizations achieve these goals by designing, implementing, and managing cybersecurity solutions that use Palo Alto Networks\u2019 products and services. Their expertise ensures that organizations\u2019 networks are secure and that they can respond quickly to cyber threats." },
      { heading: '', text: "In conclusion, Palo Alto Certified Engineers are essential professionals for any organization that wants to protect its networks from cyber threats. They play a critical role in designing, implementing, and managing cybersecurity solutions that use Palo Alto Networks\u2019 products and services. With the increasing sophistication of cyber threats, the role of Palo Alto Certified Engineers has become more critical than ever." },
    ],
    bullets: [
      "Assessing an organization\u2019s cybersecurity needs and recommending appropriate solutions that use Palo Alto Networks\u2019 products and services",
      "Designing and implementing cybersecurity solutions that use Palo Alto Networks\u2019 products and services, including firewalls, intrusion prevention systems, and virtual private networks",
      "Configuring and managing Palo Alto Networks\u2019 products and services to ensure optimal performance and security",
      "Troubleshooting issues with Palo Alto Networks\u2019 products and services and resolving them in a timely manner",
      "Providing technical support to organizations that use Palo Alto Networks\u2019 products and services",
    ],
  },
  'salesforce': {
    title: 'Salesforce Consultant',
    subtitle: 'Premier Salesforce Consultant Staffing Solutions',
    banner: 'SALESFORCE<br>CONSULTING',
    img: '/images/laptop-teamwork.webp',
    sections: [
      { heading: '', text: "Are you in need of highly skilled Salesforce Consultants to join your team? Look no further than Cleo Consulting! We specialize in providing top-tier staffing solutions for IT professionals, and we have a vast network of talented Salesforce Consultants who are ready to take on new challenges." },
      { heading: 'Customized IT Staffing Solutions for Salesforce Consultants', text: "At Cleo Consulting, we understand that every company has unique needs, and we take a personalized approach to staffing solutions. Our team of experienced recruiters works closely with you to understand your requirements and identify highly skilled Salesforce Consultants who possess the right experience and knowledge to succeed in your organization." },
      { heading: 'Extensive Network of Top-Tier Salesforce Consultants', text: "Our vast network of highly skilled Salesforce Consultants ensures that we can identify top talent quickly and efficiently. We have deep knowledge of the market\u2019s demands and keep a close eye on emerging trends in the industry, allowing us to provide customized staffing solutions that align with your organization\u2019s goals." },
      { heading: 'Personalized Job Matching', text: "Our experienced recruiters have a deep understanding of the skills and experience required for success in the IT industry. They work tirelessly to match candidates with job opportunities that align with their career goals and your organization\u2019s needs. We take the time to understand your organization\u2019s unique culture and requirements to ensure that we find the perfect match for your team." },
      { heading: '', text: "Partnering with Cleo Consulting gives you access to top-tier talent in the industry, ensuring that your organization has the expertise it needs to succeed with Salesforce. Whether you need a permanent Salesforce Consultant or a short-term contractor, we can help you find the right candidate for your organization. So, contact us today to learn more about our customized IT staffing solutions and find the right Salesforce Consultant for your team!" },
    ],
    bullets: [],
  },
  'aem': {
    title: 'AEM Developer',
    subtitle: 'Expert AEM Developer Staffing Solutions',
    banner: 'AEM<br>DEVELOPMENT',
    img: '/images/ai-cube.webp',
    sections: [
      { heading: '', text: "Are you looking for a highly skilled AEM Developer to join your team? At Cleo Consulting, we specialize in providing top-tier staffing solutions for IT professionals, and we have a vast network of talented AEM Developers who are ready to take on new challenges." },
      { heading: 'Customized IT Staffing Solutions for AEM Developers', text: "Our team of experienced recruiters works closely with you to understand your unique requirements and identify highly skilled AEM Developers who possess the right skillset and experience to excel in your organization. We take a personalized approach to staffing solutions, ensuring that we find the right candidate who can thrive in your environment." },
      { heading: 'Extensive Network of Top-Tier AEM Developers', text: "We have a vast network of highly skilled AEM Developers who are available to join your team. Our team of experienced recruiters stays up-to-date on emerging trends in the industry, allowing us to provide customized staffing solutions that align with your organization\u2019s goals and needs." },
      { heading: 'Personalized Job Matching', text: "We take the time to understand your organization\u2019s unique culture and requirements to ensure that we find the perfect match for your team. Our experienced recruiters have a deep understanding of the skills and experience required for success in the IT industry, and they work tirelessly to match candidates with job opportunities that align with their career goals." },
      { heading: '', text: "Partnering with Cleo Consulting gives you access to top-tier talent in the industry, ensuring that your organization has the expertise it needs to succeed. Whether you need a permanent AEM Developer or a short-term contractor, we can help you find the right candidate for your organization. So, contact us today to learn more about our customized IT staffing solutions and find the right AEM Developer for your team!" },
    ],
    bullets: [],
  },
  'servicenow': {
    title: 'ServiceNow Consultant',
    subtitle: 'Unlocking the Power of ServiceNow',
    banner: 'SERVICENOW<br>CONSULTING',
    img: '/images/desk-bw.webp',
    sections: [
      { heading: '', text: "ServiceNow is a complex platform that requires expertise to use effectively. It\u2019s not just a tool, it\u2019s a complete framework that can automate and optimize your organization\u2019s workflows. But to achieve the full benefits of this platform, you need the right people on your team." },
      { heading: '', text: "That\u2019s where Cleo Consulting\u2019s ServiceNow Consultants come in. Our team of consultants has a deep understanding of the platform and its capabilities. They can help you integrate ServiceNow into your organization\u2019s workflow and optimize your processes. From incident management to problem management, from change management to service request management, they can help you get the most out of ServiceNow." },
      { heading: '', text: "Our ServiceNow Consultants have worked with organizations of all sizes, from small startups to large enterprises, in various industries. They have helped these organizations streamline their workflows, reduce their costs, and improve their overall efficiency. They have implemented ServiceNow solutions for IT service management, customer service management, human resources management, and more." },
      { heading: '', text: "Working with Cleo Consulting\u2019s ServiceNow Consultants can help your organization save time, reduce costs, and improve the quality of your services. With our customized staffing solutions, you can get the right consultant for your organization and start unlocking the full potential of ServiceNow. So, contact us today to learn more about our IT staffing solutions and how we can help you optimize your IT services and workflows with ServiceNow!" },
      { heading: '', text: "ServiceNow is a powerful platform that can help organizations optimize their IT services and workflows. However, to get the most out of this platform, it\u2019s essential to have the right expertise on your team. That\u2019s where Cleo Consulting\u2019s ServiceNow Consultants come in." },
      { heading: 'Streamline Your Workflows', text: "Our team of highly skilled ServiceNow Consultants can help you streamline your workflows, automate your IT services, and improve your overall efficiency. They have extensive knowledge and experience working with ServiceNow, and they can provide guidance on how to configure the platform to meet your organization\u2019s unique needs." },
      { heading: 'Customized Staffing Solutions for ServiceNow Consultants', text: "At Cleo Consulting, we take a personalized approach to staffing solutions, ensuring that you get the right ServiceNow Consultant who can meet your organization\u2019s unique needs. Our experienced recruiters work closely with you to understand your requirements and identify a consultant who possesses the right skills and experience to succeed in your organization." },
      { heading: '', text: "Partnering with Cleo Consulting gives you access to top-tier talent in the industry, ensuring that your organization has the expertise it needs to succeed with ServiceNow. Whether you need a permanent ServiceNow Consultant or a short-term contractor, we can help you find the right candidate for your organization. So, contact us today to learn more about our customized IT staffing solutions and find the right ServiceNow Consultant for your team!" },
    ],
    bullets: [],
  },
  'engineering': {
    title: 'Engineering and Design Services',
    subtitle: 'Specialized Staffing and Recruitment',
    banner: 'ENGINEERING<br>& DESIGN',
    img: '/images/circuit-board.webp',
    sections: [
      { heading: '', text: "We offer specialized staffing and recruitment solutions in the following job categories:" },
    ],
    bullets: [
      "Aerospace Engineering", "Civil Engineering", "Electrical and Instrumentation Engineering",
      "Engineering Recruiting", "HVAC Specialists", "Industrial and Manufacturing Engineering",
      "Management", "Mechanical Engineering", "Process Engineering", "Project Services",
      "Structural Engineering", "Technical Sales", "Technicians/Trade",
    ],
  },
  'finance': {
    title: 'Finance and Accounting',
    subtitle: 'Building Strong Financial Teams',
    banner: 'FINANCE &<br>ACCOUNTING',
    img: '/images/finance-tablet.webp',
    sections: [
      { heading: '', text: "We recruit for the following roles and many more:" },
    ],
    bullets: [
      "Accountant", "Accounting Manager", "Accounting Supervisor", "Accounting Technician",
      "Accounts Payable Clerk", "Accounts Payable Manager", "Accounts Payable Supervisor",
      "Accounts Receivable Clerk", "Accounts Receivable Manager", "Accounts Receivable Supervisor",
      "Assistant Controller", "Billing Manager", "Billing and Invoicing Clerk", "Book Keeper",
      "Business Analyst", "Controller", "Corporate Finance Manager/Analyst",
      "Corporate Treasury Manager/Analyst", "Data Entry Clerk", "Finance Clerk",
      "Finance Executive", "Financial Analyst", "FX/MM Settlements", "Internal Auditor",
      "Invoicing Specialist", "IT Auditor / Manager", "Finance Manager", "Payroll Manager",
      "Payroll Specialist", "Project Accountant", "Risk Management Analyst / Manager",
      "Tax Accountant", "Tax Manager", "Trade Support Specialist", "Treasury Accountant", "Underwriter",
    ],
  },
  'information-technology': {
    title: 'Information Technology',
    subtitle: 'Tailored IT Recruitment Solutions',
    banner: 'INFORMATION<br>TECHNOLOGY',
    img: '/images/code-php.webp',
    sections: [
      { heading: '', text: "We specialize in delivering tailored IT recruitment solutions to specific business areas. Cleo Consulting provides short-term contractors with specific skills or permanent staff to bring a refreshed focus to your IT divisions. Our team is skilled at matching talented IT professionals with the culture and business goals." },
      { heading: '', text: "Cleo covers virtually all IT roles, levels and platforms, including:" },
    ],
    bullets: [
      "Program / Project Manager", "Project Coordinators",
      "Architects \u2013 Business, Technology, Data, Information, Solutions, Application etc.",
      "Developers \u2013 .NET, JAVA, Mainframe, C/C++, VB etc.",
      "Business Intelligence Specialist \u2013 Siebel, Oracle, MS Dynamics CRM, Cognos, Informatica, Business Objects etc.",
      "Business Analyst/Business System Analyst", "Data Analyst",
      "Database/Backend Developer \u2013 SQL Server, Oracle, MS Access",
      "DBA- Data Modeling/ Data Warehousing",
      "ERP \u2013 Functional & Technical \u2013 SAP, Peoplesoft, Oracle EBS, JD Edwards, Microsoft Dynamics Etc.",
      "Executive Level (Director and above)", "Graphic Designer", "Mobile Developer",
      "Network/System Analysis/Administrator (including Middleware)",
      "Middleware Specialist \u2013 Websphere, Weblogic, Webmethods etc.",
      "Quality Assurance", "Report Writer/Financial Analyst", "Security Analysis",
      "System Analyst", "Technical Writer", "Tester/QA", "Training",
      "UI Developer", "Web Developer/ Web Programmer", "Cloud Computing",
    ],
  },
}

const allSlugs = Object.keys(services)

export function generateStaticParams() {
  return allSlugs.map(slug => ({ slug }))
}

export default function ServicePage({ params }) {
  const svc = services[params.slug]
  if (!svc) return <div className="pg-body"><h1>Service not found</h1><Link href="/managed-services">Back to Services</Link></div>
  const otherServices = allSlugs.filter(s => s !== params.slug).slice(0, 6)

  return (
    <>
      <PageBanner eyebrow="Managed Services" title={svc.banner} num="" bgImage={svc.img} />
      <div className="pg-body" style={{ maxWidth: '900px' }}>
        <h2 style={{ fontFamily: 'var(--serif)', fontSize: '1.6rem', fontWeight: 700, color: 'var(--gold)', marginBottom: '2.5rem', fontStyle: 'italic', lineHeight: 1.3 }}>{svc.subtitle}</h2>

        {svc.sections.map((s, i) => (
          <div key={i} style={{ marginBottom: '2rem' }}>
            {s.heading && <h3 style={{ fontFamily: 'var(--display)', fontSize: '1.3rem', color: 'var(--paper)', letterSpacing: '0.03em', marginBottom: '0.75rem' }}>{s.heading}</h3>}
            <p style={{ fontSize: '0.95rem', color: 'var(--fog)', lineHeight: 1.85 }}>{s.text}</p>
          </div>
        ))}

        {svc.bullets && svc.bullets.length > 0 && (
          <div style={{ marginBottom: '2.5rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {svc.bullets.map((b, i) => (
                <div key={i} style={{ padding: '0.65rem 0', borderBottom: '1px solid var(--ghost)', fontSize: '0.88rem', color: 'var(--fog)', lineHeight: 1.6, display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <span style={{ color: 'var(--gold)', fontSize: '0.7rem', marginTop: '0.2rem', flexShrink: 0 }}>{'\u2014'}</span> {b}
                </div>
              ))}
            </div>
          </div>
        )}

        <div style={{ position: 'relative', margin: '3rem 0' }}>
          <div style={{ position: 'absolute', inset: '-8px', border: '1px solid var(--gold)', opacity: 0.3, transform: 'rotate(2deg)' }} />
          <div style={{ height: '300px', overflow: 'hidden', borderRadius: '2px', position: 'relative' }}>
            <img src={svc.img} alt={svc.title} className="img-cover" style={{ filter: 'sepia(30%) saturate(130%) brightness(0.75)' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(200,153,31,0.12), rgba(0,18,41,0.4))', pointerEvents: 'none' }} />
          </div>
        </div>

        <div style={{ marginTop: '4rem', paddingTop: '3rem', borderTop: '1px solid var(--ghost)' }}>
          <h3 style={{ fontFamily: 'var(--display)', fontSize: '1.4rem', color: 'var(--paper)', letterSpacing: '0.04em', marginBottom: '1.5rem' }}>OTHER SERVICES</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px', background: 'var(--ghost)' }}>
            {otherServices.map(slug => (
              <Link href={"/managed-services/" + slug} key={slug} style={{ textDecoration: 'none', background: 'var(--ink)', padding: '1.5rem', display: 'block' }}>
                <div style={{ fontFamily: 'var(--serif)', fontSize: '1rem', fontWeight: 700, color: 'var(--paper)', marginBottom: '0.3rem' }}>{services[slug].title}</div>
                <span style={{ fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold)' }}>Learn More {'\u2192'}</span>
              </Link>
            ))}
          </div>
        </div>

        <div style={{ marginTop: '2rem' }}>
          <Link href="/managed-services" style={{ fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold)', textDecoration: 'none' }}>{'\u2190'} Back to All Services</Link>
        </div>
      </div>
    </>
  )
}