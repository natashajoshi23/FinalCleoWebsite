import Link from 'next/link'
import PageBanner from '@/components/PageBanner'
import { toMetaDescription } from '@/sanity/lib/pageSeo'

const services = {
  'artificial-intelligence': {
    title: 'Artificial Intelligence',
    subtitle: 'Building Smarter Systems for a Competitive World',
    banner: 'ARTIFICIAL<br>INTELLIGENCE',
    img: '/images/ai-cube.webp',
    bgPosition: 'center 48%',
    sections: [
      { heading: '', text: "Artificial intelligence is no longer a future-facing concept — it is embedded in how leading organizations hire, forecast, serve customers, and make decisions. Businesses that know how to apply it well are operating faster and at lower cost. The ones that don't are falling behind. At Cleo Consulting, we help you find the people who can actually build and run AI systems that deliver results." },
      { heading: 'What is an AI Professional?', text: "An AI professional designs and builds systems that allow machines to simulate human reasoning — understanding language, recognizing patterns, making decisions, and improving over time. That might mean developing a natural language processing pipeline that reads thousands of contracts in seconds, building a computer vision system for quality control on a manufacturing line, or creating an intelligent recommendation engine that increases customer retention. The work is technically demanding, but the best practitioners also understand the business problem behind the build." },
      { heading: 'What Does the Work Actually Look Like?', text: "Day to day, AI professionals spend time defining the problem clearly, sourcing and preparing data, choosing and testing model architectures, and diagnosing why something is underperforming. They collaborate with product teams, engineers, and business leaders to ensure the output is usable and trustworthy — not just technically impressive. Deployment, monitoring, and ongoing refinement are just as important as the initial model." },
      { heading: 'Why It Matters for Your Organization', text: "The value of AI is not in having it — it is in having people who know how to apply it to your specific context. A strong hire can eliminate repetitive manual work, surface insights in your data that would never be found otherwise, and help your team make faster decisions with more confidence. The gap most organizations face is not access to AI tools — it is finding talent with the judgment to use them well." },
      { heading: '', text: "Whether you need an AI engineer, a deep learning specialist, an NLP researcher, or a technical lead to drive an enterprise AI initiative, Cleo Consulting can help you find the right person. We know the difference between someone who can run a pre-built model and someone who can architect something that works at scale in production. Reach out and let us understand what you need." },
    ],
    bullets: [
      "Designing and deploying AI systems for language understanding, decision support, and process automation",
      "Building computer vision applications for image recognition, inspection, and classification",
      "Developing NLP tools including chatbots, document processing pipelines, and sentiment analysis systems",
      "Applying reinforcement learning and optimization techniques to automate complex decision-making",
      "Integrating AI capabilities into existing business systems, products, and APIs",
      "Monitoring deployed models, detecting performance degradation, and managing retraining cycles",
      "Leading AI strategy and translating business problems into technical solutions",
    ],
  },
  'machine-learning': {
    title: 'Machine Learning Engineers',
    subtitle: 'Turning Data Into Decisions',
    banner: 'MACHINE<br>LEARNING',
    img: '/images/ML.webp',
    bgScale: 1,
    bgPosition: 'center 45%',
    sections: [
      { heading: '', text: "Machine learning sits at the core of most modern data-driven organizations. It is how companies detect fraud before it happens, predict which customers are likely to leave, and automate decisions that used to require teams of analysts. The challenge is not access to ML tools — it is finding people who understand the math, the data, and the business problem well enough to build something that actually works." },
      { heading: 'What is a Machine Learning Engineer?', text: "A machine learning engineer builds and maintains the systems that allow algorithms to learn from data and improve over time. Unlike a data scientist who may focus on exploration and analysis, an ML engineer is responsible for taking models from experiment into production — writing the pipelines, managing the infrastructure, and ensuring that predictions are reliable and scalable. They work at the intersection of software engineering and statistical modeling, and the best ones are comfortable in both worlds." },
      { heading: 'What Does the Work Actually Look Like?', text: "ML professionals spend significant time on data preparation, feature engineering, and model selection. They run experiments, evaluate results, and iterate until the model meets the performance bar required for real-world use. Once deployed, they monitor for data drift and model degradation, retrain as needed, and work with business teams to ensure the output is being interpreted and applied correctly." },
      { heading: 'Why the Right Hire Matters', text: "A strong ML engineer does not just know how to train a model — they know which model to train, why it might fail, and how to build the surrounding infrastructure to support it. That combination of technical rigor and practical judgment is what separates a proof of concept from something that delivers lasting value. Cleo Consulting helps you find professionals at that level, whether you need someone to build from scratch or scale an existing system." },
      { heading: '', text: "From supervised learning and classification models to deep neural networks and recommendation systems, our network includes machine learning professionals across specializations and experience levels. Tell us what you are working on and we will find the right match." },
    ],
    bullets: [
      "Building and training supervised, unsupervised, and semi-supervised machine learning models",
      "Developing and managing ML pipelines from raw data ingestion through model serving",
      "Designing feature stores, data preprocessing workflows, and experiment tracking systems",
      "Deploying models to production environments and maintaining reliability at scale",
      "Evaluating model performance and diagnosing issues with accuracy, bias, or drift",
      "Implementing recommendation systems, ranking models, and personalization engines",
      "Collaborating with data engineers and product teams to align ML outputs with business goals",
    ],
  },
  'cloud-engineers': {
    title: 'Cloud Engineers and Architects',
    subtitle: 'What They Do and Why They Are Important',
    banner: 'CLOUD<br>ENGINEERS',
    img: '/images/cloud-eng.webp',
    bgScale: 1,
    sections: [
      { heading: '', text: "Cloud computing has fundamentally changed how organizations build, deploy, and scale technology. The shift away from on-premise infrastructure is accelerating, and with it comes a growing need for professionals who understand not just how to use the cloud, but how to design systems on it that are secure, cost-efficient, and built to last." },
      { heading: 'What is a Cloud Engineer and Architect?', text: "A Cloud Engineer and Architect is a professional who specializes in designing, implementing, and managing cloud-based solutions for organizations. Their responsibilities include assessing an organization's cloud needs, designing and implementing cloud infrastructure, and ensuring that the solutions are secure, scalable, and efficient. They are required to have a deep understanding of cloud computing platforms such as Amazon Web Services (AWS), Microsoft Azure, and Google Cloud Platform (GCP), as well as the networking, security, and DevOps principles that underpin them." },
      { heading: 'What Do Cloud Engineers and Architects Do?', text: "Cloud professionals handle a wide range of technical work — from designing the architecture of a new cloud environment to migrating legacy systems, managing cost optimization, and responding to incidents. They collaborate with development teams, security teams, and business leadership to ensure cloud systems support the organization's goals without creating unnecessary risk or overhead." },
      { heading: 'The Importance of Cloud Engineers and Architects', text: "The right cloud infrastructure can give an organization meaningful advantages in speed, reliability, and cost. The wrong one can create security vulnerabilities, runaway expenses, or systems that can't scale when the business needs them to. Cloud Engineers and Architects are the professionals who make the difference — building environments that hold up under pressure and evolve alongside the organization." },
      { heading: '', text: "Whether you need someone to lead a cloud migration, build out a DevOps platform, or provide ongoing architectural oversight, Cleo Consulting can connect you with cloud professionals who have done the work in production environments. Reach out to discuss what your team needs." },
    ],
    bullets: [
      "Assessing an organization's cloud needs and recommending appropriate cloud solutions",
      "Designing and implementing cloud-based solutions, including virtual servers, storage, and networking",
      "Ensuring that cloud-based solutions are secure, scalable, and efficient",
      "Migrating on-premise systems and applications to cloud-based solutions",
      "Monitoring and managing cloud-based solutions to ensure optimal performance and cost-effectiveness",
    ],
  },
  'cisco': {
    title: 'Cisco Network Engineers',
    subtitle: 'What They Do and Why They Are Important',
    banner: 'CISCO<br>ENGINEERS',
    img: '/images/cisco.webp',
    bgPosition: 'center 45%',
    sections: [
      { heading: '', text: "Network infrastructure is the backbone of every modern organization. When it performs well, it is invisible. When it doesn't, everything stops. Cisco-certified network engineers are among the most in-demand professionals in enterprise IT — they design, deploy, and manage the systems that keep data moving securely and reliably across an organization's entire environment." },
      { heading: 'What is a Cisco Certified Network Engineer?', text: "A Cisco Certified Network Engineer is a professional who has undergone rigorous training and certification to demonstrate expertise in Cisco networking technologies. Certifications such as CCNA, CCNP, and CCIE represent increasing levels of knowledge in areas including routing and switching, security, wireless, data center, and service provider infrastructure. These professionals are responsible for designing and maintaining network environments that are stable, secure, and optimized for the organization's needs." },
      { heading: 'What Do Cisco Network Engineers Do?', text: "Cisco engineers handle the full lifecycle of network infrastructure — from initial design and hardware deployment to configuration, performance monitoring, and troubleshooting. They work with firewalls, routers, switches, and wireless systems, often in complex multi-site or hybrid cloud environments. Their work requires both deep technical knowledge and the ability to communicate clearly with stakeholders who depend on the network staying up." },
      { heading: 'The Importance of Cisco Network Engineers', text: "Network downtime is expensive and disruptive. Security gaps in network infrastructure can expose an organization to serious risk. Cisco engineers help prevent both — by building resilient architectures, enforcing access controls, and catching issues before they become incidents. For organizations that rely on consistent connectivity and data integrity, having the right network talent in place is not optional." },
      { heading: '', text: "Whether you need a Cisco engineer for a specific project, a long-term contract, or a permanent role, Cleo Consulting has access to certified professionals across experience levels and specializations. Contact us to talk through your requirements." },
    ],
    bullets: [
      "Designing and implementing enterprise network architectures using Cisco hardware and software",
      "Configuring and managing routers, switches, firewalls, and wireless access points",
      "Deploying and maintaining Cisco security solutions including ASA, Firepower, and ISE",
      "Troubleshooting network performance issues and resolving outages in a timely manner",
      "Supporting SD-WAN deployments and cloud-connected network environments",
      "Conducting network assessments and recommending improvements for security and efficiency",
      "Providing technical documentation and support to internal IT teams",
    ],
  },
  'cyber-security': {
    title: 'Cyber Security Consultant',
    subtitle: 'What They Do and Why They Are Important',
    banner: 'CYBER<br>SECURITY',
    img: '/images/cybersecurity-shield.webp',
    bgScale: 1,
    sections: [
      { heading: '', text: "In today's digital age, cyber threats are becoming increasingly prevalent and sophisticated. Cybersecurity has become a crucial concern for businesses and organizations of all sizes, and the need for expert guidance and support is critical. This is where a Cyber Security Consultant comes in. In this article, we will explore the roles and importance of Cyber Security Consultants." },
      { heading: 'What is a Cyber Security Consultant?', text: "A Cyber Security Consultant is a professional who provides expert advice and guidance to organizations on how to manage and mitigate cyber threats. Their responsibilities include assessing the organization's cybersecurity risk, identifying vulnerabilities and threats, and recommending appropriate measures to improve the organization's security posture. They are required to have a deep understanding of cybersecurity technologies and principles, as well as experience with cybersecurity risk management." },
      { heading: 'What Does a Cyber Security Consultant Do?', text: "Cyber Security Consultants perform a range of activities to help organizations manage their cybersecurity risk. That includes conducting risk assessments, developing security policies, designing technical controls, and working with teams across the organization to build a culture of security awareness. They stay current on emerging threats and translate that knowledge into practical actions the organization can take." },
      { heading: 'The Importance of Cyber Security Consultants', text: "Cyber Security Consultants play a critical role in helping organizations manage their cybersecurity risk. With the increasing sophistication of cyber threats and the growing reliance on technology, organizations need expert guidance and support to protect their sensitive data and systems. Cyber Security Consultants help organizations identify and mitigate cybersecurity risks, which helps to protect the organization's reputation, finances, and operations." },
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
    img: '/images/datasci.webp',
    bgPosition: 'center 40%',
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
      { heading: 'Extensive Network of Top-Tier JAVA & .NET Developers', text: "Our vast network of highly skilled JAVA & .NET Developers ensures that we can identify top talent quickly and efficiently. We have deep knowledge of the market's demands and keep a close eye on emerging trends in the industry, allowing us to provide customized staffing solutions that align with your organization's goals." },
      { heading: 'Personalized Job Matching', text: "We take the time to understand your organization's unique culture and requirements to ensure that we find the perfect match for your team. Our experienced recruiters have a deep understanding of the skills and experience required for success in the IT industry, and they work tirelessly to match candidates with job opportunities that align with their career goals." },
      { heading: '', text: "Whether you're looking for highly skilled JAVA & .NET Developers to join your team on a permanent basis or need short-term contract staff, we can help. Partnering with Cleo Consulting gives you access to top-tier talent in the industry, ensuring that your organization has the expertise it needs to thrive. So, contact us today to learn more about our customized IT staffing solutions and find the right talent for your team!" },
    ],
    bullets: [],
  },
  'salesforce': {
    title: 'Salesforce Consultant',
    subtitle: 'Premier Salesforce Consultant Staffing Solutions',
    banner: 'SALESFORCE<br>CONSULTING',
    img: '/images/network.webp',
    bgScale: 1,
    sections: [
      { heading: '', text: "Are you in need of highly skilled Salesforce Consultants to join your team? Look no further than Cleo Consulting! We specialize in providing top-tier staffing solutions for IT professionals, and we have a vast network of talented Salesforce Consultants who are ready to take on new challenges." },
      { heading: 'Customized IT Staffing Solutions for Salesforce Consultants', text: "At Cleo Consulting, we understand that every company has unique needs, and we take a personalized approach to staffing solutions. Our team of experienced recruiters works closely with you to understand your requirements and identify highly skilled Salesforce Consultants who possess the right experience and knowledge to succeed in your organization." },
      { heading: 'Extensive Network of Top-Tier Salesforce Consultants', text: "Our vast network of highly skilled Salesforce Consultants ensures that we can identify top talent quickly and efficiently. We have deep knowledge of the market's demands and keep a close eye on emerging trends in the industry, allowing us to provide customized staffing solutions that align with your organization's goals." },
      { heading: 'Personalized Job Matching', text: "Our experienced recruiters have a deep understanding of the skills and experience required for success in the IT industry. They work tirelessly to match candidates with job opportunities that align with their career goals and your organization's needs. We take the time to understand your organization's unique culture and requirements to ensure that we find the perfect match for your team." },
      { heading: '', text: "Partnering with Cleo Consulting gives you access to top-tier talent in the industry, ensuring that your organization has the expertise it needs to succeed with Salesforce. Whether you need a permanent Salesforce Consultant or a short-term contractor, we can help you find the right candidate for your organization. So, contact us today to learn more about our customized IT staffing solutions and find the right Salesforce Consultant for your team!" },
    ],
    bullets: [],
  },
  'servicenow': {
    title: 'ServiceNow Consultant',
    subtitle: 'Unlocking the Power of ServiceNow',
    banner: 'SERVICENOW<br>CONSULTING',
    img: '/images/ITSM.webp',
    bgPosition: 'center 35%',
    sections: [
      { heading: '', text: "ServiceNow is a complex platform that requires expertise to use effectively. It's not just a tool, it's a complete framework that can automate and optimize your organization's workflows. But to achieve the full benefits of this platform, you need the right people on your team." },
      { heading: '', text: "That's where Cleo Consulting's ServiceNow Consultants come in. Our team of consultants has a deep understanding of the platform and its capabilities. They can help you integrate ServiceNow into your organization's workflow and optimize your processes. From incident management to problem management, from change management to service request management, they can help you get the most out of ServiceNow." },
      { heading: '', text: "Our ServiceNow Consultants have worked with organizations of all sizes, from small startups to large enterprises, in various industries. They have helped these organizations streamline their workflows, reduce their costs, and improve their overall efficiency. They have implemented ServiceNow solutions for IT service management, customer service management, human resources management, and more." },
      { heading: '', text: "Working with Cleo Consulting's ServiceNow Consultants can help your organization save time, reduce costs, and improve the quality of your services. With our customized staffing solutions, you can get the right consultant for your organization and start unlocking the full potential of ServiceNow. So, contact us today to learn more about our IT staffing solutions and how we can help you optimize your IT services and workflows with ServiceNow!" },
      { heading: 'Streamline Your Workflows', text: "Our team of highly skilled ServiceNow Consultants can help you streamline your workflows, automate your IT services, and improve your overall efficiency. They have extensive knowledge and experience working with ServiceNow, and they can provide guidance on how to configure the platform to meet your organization's unique needs." },
      { heading: 'Customized Staffing Solutions for ServiceNow Consultants', text: "At Cleo Consulting, we take a personalized approach to staffing solutions, ensuring that you get the right ServiceNow Consultant who can meet your organization's unique needs. Our experienced recruiters work closely with you to understand your requirements and identify a consultant who possesses the right skills and experience to succeed in your organization." },
      { heading: '', text: "Partnering with Cleo Consulting gives you access to top-tier talent in the industry, ensuring that your organization has the expertise it needs to succeed with ServiceNow. Whether you need a permanent ServiceNow Consultant or a short-term contractor, we can help you find the right candidate for your organization. So, contact us today to learn more about our customized IT staffing solutions and find the right ServiceNow Consultant for your team!" },
    ],
    bullets: [],
  },
  'aem': {
    title: 'AEM Developer',
    subtitle: 'Expert AEM Developer Staffing Solutions',
    banner: 'AEM<br>DEVELOPMENT',
    img: '/images/adobe.webp',
    sections: [
      { heading: '', text: "Are you looking for a highly skilled AEM Developer to join your team? At Cleo Consulting, we specialize in providing top-tier staffing solutions for IT professionals, and we have a vast network of talented AEM Developers who are ready to take on new challenges." },
      { heading: 'Customized IT Staffing Solutions for AEM Developers', text: "Our team of experienced recruiters works closely with you to understand your unique requirements and identify highly skilled AEM Developers who possess the right skillset and experience to excel in your organization. We take a personalized approach to staffing solutions, ensuring that we find the right candidate who can thrive in your environment." },
      { heading: 'Extensive Network of Top-Tier AEM Developers', text: "We have a vast network of highly skilled AEM Developers who are available to join your team. Our team of experienced recruiters stays up-to-date on emerging trends in the industry, allowing us to provide customized staffing solutions that align with your organization's goals and needs." },
      { heading: 'Personalized Job Matching', text: "We take the time to understand your organization's unique culture and requirements to ensure that we find the perfect match for your team. Our experienced recruiters have a deep understanding of the skills and experience required for success in the IT industry, and they work tirelessly to match candidates with job opportunities that align with their career goals." },
      { heading: '', text: "Partnering with Cleo Consulting gives you access to top-tier talent in the industry, ensuring that your organization has the expertise it needs to succeed. Whether you need a permanent AEM Developer or a short-term contractor, we can help you find the right candidate for your organization. So, contact us today to learn more about our customized IT staffing solutions and find the right AEM Developer for your team!" },
    ],
    bullets: [],
  },
  'engineering': {
    title: 'Engineering and Design Services',
    subtitle: 'Specialized Staffing and Recruitment',
    banner: 'ENGINEERING<br>& DESIGN',
    img: '/images/eng&des.webp',
    sections: [
      { heading: '', text: "Engineering and design talent is some of the hardest to find and the most consequential to get right. Whether you need a mechanical engineer to support a product development cycle, a structural engineer for a major infrastructure project, or a UX designer to overhaul a digital experience, the right person has to fit the technical requirements, the project timeline, and the team they'll be working with." },
      { heading: 'Our Approach', text: "At Cleo Consulting, we take the time to understand the specific demands of each engagement before we begin searching. Engineering roles vary enormously in scope and specialization — a process engineer on a refinery project has a very different profile than a project services professional managing timelines across a distributed team. We match carefully, drawing on a broad network of candidates with proven experience across industries including energy, manufacturing, construction, aerospace, and technology." },
      { heading: 'Permanent and Contract Staffing', text: "We place engineering and design professionals in both permanent roles and contract positions. Contract staffing is particularly valuable in engineering, where project-based demand often requires bringing in specialized expertise for a defined period without the overhead of a full-time hire. Our team manages the process from sourcing to onboarding, so your project stays on track." },
      { heading: '', text: "If you need engineering or design talent — whether it's one specialized hire or a larger team build-out — contact Cleo Consulting to discuss your requirements. We recruit across all major engineering disciplines and move quickly to meet project timelines." },
    ],
    bullets: [
      "Aerospace Engineering",
      "Civil Engineering",
      "Electrical and Instrumentation Engineering",
      "Engineering Recruiting",
      "HVAC Specialists",
      "Industrial and Manufacturing Engineering",
      "Management",
      "Mechanical Engineering",
      "Process Engineering",
      "Project Services",
      "Structural Engineering",
      "Technical Sales",
      "Technicians/Trade",
    ],
  },
  'finance': {
    title: 'Finance and Accounting',
    subtitle: 'Building Strong Financial Teams',
    banner: 'FINANCE &<br>ACCOUNTING',
    img: '/images/finance.webp',
    sections: [
      { heading: '', text: "Finance and accounting professionals are at the center of every major business decision. From the analyst building financial models to the controller overseeing month-end close, to the CFO advising the board — each role requires precision, reliability, and the right combination of technical skill and business acumen. Finding that combination consistently is not easy, and the cost of a wrong hire in finance is high." },
      { heading: 'Our Approach to Finance Staffing', text: "Cleo Consulting recruits finance and accounting professionals across all levels and functions. We work with organizations across industries — financial services, corporate finance, professional services, manufacturing, and beyond — and we understand the nuances that make a candidate the right fit for one environment and not another. Our recruiters are experienced at assessing both the technical qualifications and the professional judgment that finance roles demand." },
      { heading: 'Permanent, Contract, and Interim Placements', text: "We place finance professionals in full-time permanent roles as well as contract and interim positions. Contract placements are particularly common for tax season coverage, system implementations, audit preparation, and transition periods. Whether you need a payroll specialist for three months or a permanent VP of Finance, Cleo Consulting can move quickly to find the right person." },
      { heading: '', text: "Contact us to discuss your finance and accounting staffing needs. We recruit for a wide range of roles across the full finance function — from entry-level clerks to senior executives — and we take the time to understand what success looks like in your specific organization." },
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
  'business-admin': {
    title: 'Business Administration & Customer Care',
    subtitle: 'The Professionals Who Keep Organizations Running',
    banner: 'BUSINESS<br>ADMINISTRATION',
    img: '/images/cust-care.webp',
    bgPosition: 'center 35%',
    sections: [
      { heading: '', text: "Behind every well-run organization is a layer of professionals who keep things moving — managing schedules, coordinating operations, handling customer concerns, and making sure the day-to-day doesn't fall through the cracks. Business administration and customer care talent is often undervalued until it's missing. When you have the right people in these roles, the rest of the organization runs better." },
      { heading: 'Business Administration', text: "Administrative and operations professionals handle a wide range of responsibilities depending on the organization — executive support, office management, project coordination, contract administration, and more. The best ones are highly organized, discreet, and capable of managing competing priorities without losing focus. Cleo Consulting places administrative professionals at all levels, from office coordinators to senior executive assistants and operations managers." },
      { heading: 'Customer Care', text: "Customer-facing roles require a specific combination of communication skills, patience, and product knowledge. Whether your team handles inbound inquiries, manages client relationships, or resolves escalated issues, the people in those roles directly shape how customers feel about your organization. We recruit for customer service representatives, client success managers, call center professionals, and team leads who can maintain quality under volume and pressure." },
      { heading: 'Our Approach', text: "We take a careful approach to matching business administration and customer care candidates. Soft skills matter as much as experience in these roles — we look for professionals who are proactive, reliable, and genuinely good at working with people. Our recruiters spend time understanding the culture and pace of your organization before presenting candidates, so the fit is right from day one." },
      { heading: '', text: "Whether you need temporary coverage, a permanent placement, or help building out a customer care team from the ground up, Cleo Consulting can help. Contact us to talk through what you're looking for." },
    ],
    bullets: [
      "Executive Assistant and Senior Administrative Assistant",
      "Office Manager and Operations Coordinator",
      "Project Coordinator and Program Administrator",
      "Contract and Procurement Administrator",
      "Data Entry and Administrative Clerk",
      "Customer Service Representative and Client Support Specialist",
      "Client Success Manager and Account Coordinator",
      "Call Centre Agent and Team Lead",
      "Customer Experience Analyst",
      "Reception and Front Desk Professional",
    ],
  },
  'sales-hr': {
    title: 'Sales & Human Resources',
    subtitle: 'Revenue-Driven and People-First Talent',
    banner: 'SALES &<br>HUMAN RESOURCES',
    img: '/images/handshake3.webp',
    bgPosition: 'center 55%',
    bgOpacity: 0.6,
    sections: [
      { heading: '', text: "Sales and human resources are two functions that shape an organization from the outside in and the inside out. Sales professionals drive revenue and build the client relationships that sustain a business. HR professionals attract, develop, and retain the people who make everything else possible. Getting the right talent into both functions is one of the most important investments an organization can make." },
      { heading: 'Sales Talent', text: "We recruit sales professionals across industries and levels — from business development representatives early in their careers to senior account executives and sales directors managing large books of business. The candidates we place are not just strong communicators; they understand pipelines, forecasting, and how to turn relationships into results. We match candidates to roles based on industry experience, deal cycle familiarity, and the type of sales motion your team runs." },
      { heading: 'Human Resources Talent', text: "HR professionals wear many hats depending on the size and stage of the organization. A startup needs an HR generalist who can build programs from scratch. An enterprise needs specialists in compensation, talent acquisition, learning and development, or employee relations. Cleo Consulting recruits across this full spectrum, placing HR professionals who understand both the people side and the compliance and process side of the function." },
      { heading: 'Permanent and Contract Placements', text: "We place sales and HR professionals in full-time and contract roles. Contract placements are common in HR during periods of rapid growth, organizational change, or when coverage is needed for a leave or a project. In sales, contract-to-permanent arrangements are a useful way to evaluate fit before committing to a full-time offer. We support both models and can structure placements to fit your situation." },
      { heading: '', text: "If you need to build out your sales team, find an HR business partner, or hire a recruiter to support your own talent acquisition function, contact Cleo Consulting. We understand these functions well and we move quickly." },
    ],
    bullets: [
      "Business Development Representative and Sales Development Representative",
      "Account Executive and Senior Account Executive",
      "Sales Manager, Director of Sales, and VP of Sales",
      "Inside Sales Representative and Outside Sales Representative",
      "Sales Operations Analyst and Revenue Operations Manager",
      "HR Generalist and HR Business Partner",
      "Talent Acquisition Specialist and Corporate Recruiter",
      "Compensation and Benefits Analyst",
      "Learning and Development Specialist",
      "Employee Relations Manager",
      "HR Manager, HR Director, and Chief People Officer",
    ],
  },
  'executive-search': {
    title: 'Executive Search',
    subtitle: 'Finding Leaders Who Move Organizations Forward',
    banner: 'EXECUTIVE<br>SEARCH',
    img: '/images/executive.webp',
    sections: [
      { heading: '', text: "Senior leadership hiring is different from every other kind of hiring. The stakes are higher, the timelines are longer, the candidate pool is smaller, and the conversation requires discretion on both sides. A single executive hire can change the direction of an organization — for better or worse. Cleo Consulting's executive search practice is built around that reality." },
      { heading: 'Our Approach', text: "We work directly with boards, CEOs, and senior leadership teams to understand what a role truly requires — not just the job description, but the specific challenges the incoming leader will face, the team they'll be walking into, and the culture they'll need to operate within. That understanding shapes everything from how we build the candidate profile to how we approach outreach and manage the evaluation process." },
      { heading: 'Confidentiality and Discretion', text: "Executive searches are often confidential, whether because the incumbent is still in place, because the organization hasn't announced a strategic shift, or simply because sensitive matters are best handled privately. We operate with the level of discretion our clients require, maintaining confidentiality throughout the search process and managing candidate communications with professionalism." },
      { heading: 'Who We Place', text: "We conduct executive searches across functions and industries. Our placements include C-suite roles such as CEO, CFO, COO, CTO, and CHRO, as well as VP and Director-level positions where leadership quality is critical. We work across technology, financial services, healthcare, professional services, and industrial sectors, and we draw on a broad network of senior professionals built over years of relationship-driven recruiting." },
      { heading: '', text: "If you are looking for a senior leader or planning a confidential search, we welcome the conversation. Cleo Consulting brings focus, professionalism, and a genuine understanding of what leadership talent looks like at the highest levels. Reach out to discuss your search in confidence." },
    ],
    bullets: [
      "Chief Executive Officer (CEO) and President",
      "Chief Financial Officer (CFO)",
      "Chief Operating Officer (COO)",
      "Chief Technology Officer (CTO) and Chief Information Officer (CIO)",
      "Chief People Officer (CPO) and Chief Human Resources Officer (CHRO)",
      "Chief Marketing Officer (CMO)",
      "Vice President and Senior Vice President roles across all functions",
      "Managing Director and General Manager",
      "Board Director and Independent Director",
    ],
  },
  'information-technology': {
    title: 'Information Technology',
    subtitle: 'Tailored IT Recruitment Solutions',
    banner: 'INFORMATION<br>TECHNOLOGY',
    img: '/images/code-php.webp',
    sections: [
      { heading: '', text: "Technology teams are under more pressure than ever to deliver faster, support more complex systems, and do it all with fewer resources. Finding the right IT talent — people who have the technical skills, the communication ability, and the right experience level for your environment — is one of the most common and most challenging problems organizations face." },
      { heading: 'Our Approach to IT Staffing', text: "Cleo Consulting specializes in delivering tailored IT recruitment solutions across business areas and technology stacks. We place short-term contractors with specific skills and permanent staff who bring lasting value to your IT organization. Our recruiters have a genuine understanding of the technology landscape, which means we can assess candidates accurately and move quickly without wasting your time on poor fits." },
      { heading: 'What We Cover', text: "We recruit across virtually all IT roles, levels, and platforms — from project managers and business analysts to enterprise architects, senior developers, and infrastructure leads. Whether your need is in application development, data and analytics, ERP, security, or cloud, we have a network of qualified professionals ready to be matched to the right opportunity." },
      { heading: '', text: "Contact us to discuss your IT staffing requirements. Whether you need one specialized contractor or a team of permanent hires, Cleo Consulting has the reach and the expertise to find the right people." },
    ],
    bullets: [
      "Program / Project Manager", "Project Coordinators",
      "Architects — Business, Technology, Data, Information, Solutions, Application",
      "Developers — .NET, JAVA, Mainframe, C/C++, VB",
      "Business Intelligence Specialist — Siebel, Oracle, MS Dynamics CRM, Cognos, Informatica, Business Objects",
      "Business Analyst / Business System Analyst", "Data Analyst",
      "Database/Backend Developer — SQL Server, Oracle, MS Access",
      "DBA — Data Modeling / Data Warehousing",
      "ERP — Functional & Technical — SAP, Peoplesoft, Oracle EBS, JD Edwards, Microsoft Dynamics",
      "Executive Level (Director and above)", "Graphic Designer", "Mobile Developer",
      "Network/System Analysis/Administrator (including Middleware)",
      "Middleware Specialist — Websphere, Weblogic, Webmethods",
      "Quality Assurance", "Report Writer / Financial Analyst", "Security Analysis",
      "System Analyst", "Technical Writer", "Tester/QA", "Training",
      "UI Developer", "Web Developer / Web Programmer", "Cloud Computing",
    ],
  },
  'palo-alto': {
    title: 'Palo Alto Certified Engineers',
    subtitle: 'What They Do and Why They Are Important',
    banner: 'PALO ALTO<br>ENGINEERS',
    img: '/images/pal-alt.webp',
    bgPosition: 'center 45%',
    sections: [
      { heading: '', text: "As cyber threats grow more sophisticated, organizations need security infrastructure that can keep up. Palo Alto Networks has become one of the leading platforms in enterprise cybersecurity — and the engineers certified on its products are among the most sought-after professionals in the field." },
      { heading: 'What is a Palo Alto Certified Engineer?', text: "A Palo Alto Certified Engineer is a professional who has undergone training and certification to become an expert in using and managing Palo Alto Networks' products and services. Their responsibilities include designing and implementing cybersecurity solutions that use Palo Alto Networks' products and services, managing and troubleshooting those solutions, and ensuring that organizations' networks are secure from cyber threats. They are required to have a deep understanding of cybersecurity concepts, networking protocols, and Palo Alto Networks' product suite." },
      { heading: 'What Do Palo Alto Certified Engineers Do?', text: "Palo Alto certified engineers design and manage next-generation firewall deployments, configure threat prevention policies, and oversee cloud-delivered security services across the organization. They work closely with network and security teams to ensure the environment is protected without impeding business operations, and they respond to incidents and policy changes as the threat landscape evolves." },
      { heading: 'The Importance of Palo Alto Certified Engineers', text: "Palo Alto Certified Engineers play a critical role in helping organizations protect their networks. Cyber threats are becoming increasingly sophisticated, and organizations need cybersecurity solutions that are effective, reliable, and scalable. These engineers help organizations achieve those goals by implementing and managing cybersecurity solutions that use Palo Alto Networks' products and services — ensuring that networks are secure and that the organization can respond quickly when threats emerge." },
      { heading: '', text: "Whether you need a Palo Alto engineer for a deployment project, ongoing operations support, or a permanent role on your security team, Cleo Consulting can connect you with certified professionals. Reach out to discuss what you need." },
    ],
    bullets: [
      "Assessing an organization's cybersecurity needs and recommending appropriate Palo Alto solutions",
      "Designing and implementing next-generation firewall deployments and security architectures",
      "Configuring and managing Palo Alto Networks products for optimal performance and security",
      "Troubleshooting issues with Palo Alto Networks products and resolving them in a timely manner",
      "Providing technical support and documentation to internal security teams",
    ],
  },
}

const listingSlugs = [
  'artificial-intelligence', 'machine-learning', 'cloud-engineers', 'cisco', 'palo-alto',
  'cyber-security', 'data-scientist', 'java-dotnet', 'salesforce',
  'servicenow', 'aem', 'engineering', 'finance', 'information-technology',
  'business-admin', 'sales-hr', 'executive-search',
]

const allSlugs = Object.keys(services)

export function generateStaticParams() {
  return allSlugs.map(slug => ({ slug }))
}

// Each service page describes itself from its own subtitle and intro copy, so
// the 17 pages no longer share one generic description in search results.
export async function generateMetadata({ params }) {
  const { slug } = await params
  const svc = services[slug]
  if (!svc) return { title: 'Service not found — Cleo Consulting', robots: { index: false } }

  // Subtitles are punchy but short ("Turning Data Into Decisions"), so lead with
  // the subtitle and top up from the intro copy to reach a usable length.
  const intro = [svc.subtitle, svc.sections?.[0]?.text].filter(Boolean).join('. ')
  const description = toMetaDescription(intro)
  const title = `${svc.title} — Cleo Consulting`

  return {
    title,
    description,
    alternates: { canonical: `/managed-services/${slug}` },
    openGraph: {
      type: 'website',
      title,
      description,
      url: `/managed-services/${slug}`,
      siteName: 'Cleo Consulting',
      images: svc.img ? [{ url: svc.img }] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: svc.img ? [svc.img] : undefined,
    },
  }
}

export default async function ServicePage({ params }) {
  const { slug } = await params
  const svc = services[slug]
  if (!svc) return <div className="pg-body"><h1>Service not found</h1><Link href="/managed-services">Back to Services</Link></div>
  const otherServices = listingSlugs.filter(s => s !== slug).slice(0, 6)

  return (
    <>
      <link rel="preload" as="image" href={svc.img} fetchPriority="high" />
      <PageBanner eyebrow="Managed Services" title={svc.banner} num="" bgImage={svc.img} bgPosition={svc.bgPosition} bgScale={svc.bgScale} bgOpacity={svc.bgOpacity} />
      <div className="pg-body" style={{ maxWidth: '900px' }}>
        <h2 className="ms-subtitle" style={{ fontFamily: 'var(--serif)', fontSize: '1.6rem', fontWeight: 700, color: 'var(--gold)', marginBottom: '2.5rem', fontStyle: 'italic', lineHeight: 1.3 }}>{svc.subtitle}</h2>

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
                  <span className="ms-link-text" style={{ color: 'var(--gold)', fontSize: '0.7rem', marginTop: '0.2rem', flexShrink: 0 }} aria-hidden="true">{'—'}</span> {b}
                </div>
              ))}
            </div>
          </div>
        )}

        <div style={{ marginTop: '4rem', paddingTop: '3rem', borderTop: '1px solid var(--ghost)' }}>
          <h2 style={{ fontFamily: 'var(--display)', fontSize: '1.4rem', color: 'var(--paper)', letterSpacing: '0.04em', marginBottom: '1.5rem' }}>OTHER SERVICES</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px', background: 'var(--ghost)' }}>
            {otherServices.map(slug => (
              <Link href={"/managed-services/" + slug} key={slug} style={{ textDecoration: 'none', background: 'var(--ink)', padding: '1.5rem', display: 'block' }}>
                <div style={{ fontFamily: 'var(--serif)', fontSize: '1rem', fontWeight: 700, color: 'var(--paper)', marginBottom: '0.3rem' }}>{services[slug].title}</div>
                <span className="ms-link-text" style={{ fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold)' }}>Learn More {'→'}</span>
              </Link>
            ))}
          </div>
        </div>

        <div style={{ marginTop: '2rem' }}>
          <Link href="/managed-services" className="ms-link-text" style={{ fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold)', textDecoration: 'none' }}>{'←'} Back to All Services</Link>
        </div>
      </div>
    </>
  )
}
