import Link from 'next/link'
import PageBanner from '@/components/PageBanner'

const projects = {
  'cisco-network-solutions': {
    title: 'Cisco Network Solutions',
    banner: 'CISCO<br>NETWORK',
    img: '/images/digital-globe.webp',
    sections: [
      { heading: '', text: "At Cleo Consulting, we specialize in providing comprehensive Cisco network solutions that empower businesses to build secure, scalable, and reliable network infrastructures. As a trusted partner of Cisco Systems, we have the expertise and knowledge to help organizations of all sizes optimize their networks, enhance connectivity, and drive digital transformation." },
    ],
    services: [
      { name: 'Network Design and Implementation', text: "Maximize the performance and efficiency of your network infrastructure with our expert network design and implementation services. Our Team of certified Cisco professionals will assess your current network architecture, understand your business requirements, and design a scalable and secure network solution tailored to your organization\u2019s specific needs. We will seamlessly implement the Cisco networking technologies, ensuring a smooth transition and minimal disruption to your operations." },
      { name: 'Switching and Routing Solutions', text: "Enhance your network connectivity and improve traffic management with Cisco switching and routing solutions. Our team will help you select and deploy the right switching and routing solutions to optimize your network performance and ensure seamless communication across your organization." },
      { name: 'Wireless and Mobility Solutions', text: "Enable secure and reliable wireless connectivity with our Cisco wireless and mobility solutions. We provide end-to-end wireless network design, deployment, and management services to ensure seamless wireless access throughout your organization. Whether you need to support a large number of users, implement location-based services, or ensure network security, our experts will design and implement a robust wireless infrastructure using Cisco\u2019s industry-leading wireless technologies." },
      { name: 'Network Security and Firewall Solutions', text: "Protect your network infrastructure from emerging threats with our comprehensive network security and firewall solutions powered by Cisco\u2019s advanced security technologies. We help you implement multi-layered security architectures that include firewalls, intrusion prevention systems, secure VPNs, and advanced threat detection and prevention mechanisms. Our team will work closely with you to design and deploy a robust security framework that safeguards your network and critical data." },
      { name: 'Network Management and Monitoring', text: "Ensure the optimal performance and availability of your network with our network management and monitoring solutions. We leverage Cisco\u2019s network management tools to provide centralized network visibility, configuration management, performance monitoring, and troubleshooting capabilities. Our experts will help you streamline network operations, proactively identify and resolve issues, and ensure efficient management of your Cisco network infrastructure." },
    ],
    whyChoose: [
      { label: 'Expertise and Partnership', text: "Our team of certified professionals are well-equipped to design, implement, and support Cisco network deployments tailored to your organization\u2019s specific needs." },
      { label: 'Customized Solutions', text: "We understand that each organization has unique network requirements. Our solutions are customized to align with your business objectives, ensuring that you get the most out of your Cisco network investment." },
      { label: 'Ongoing Support', text: "We provide ongoing support and proactive monitoring to ensure the performance and availability of your Cisco network infrastructure. Our team is available to address any concerns, provide timely updates, and deliver continuous improvements to your network environment." },
      { label: 'Seamless Integration', text: "We seamlessly integrate Cisco network solutions into your existing IT ecosystem, ensuring a smooth transition and minimal disruption to your operations. Our experts will work closely with your team to ensure that the implementation is efficient and effective." },
    ],
    closing: "Build a secure and reliable network infrastructure with Cisco Network Solutions from CLEO Consulting. Contact us today to discuss your network requirements and learn how our expertise can help you achieve your connectivity and digital transformation goals. Together, we can optimize your network performance and drive business growth.",
  },
  'cloud-integration-services': {
    title: 'Cloud Integration Services',
    banner: 'CLOUD<br>INTEGRATION',
    img: '/images/laptop-teamwork.webp',
    sections: [
      { heading: '', text: "In today\u2019s digital landscape, businesses rely on various cloud-based applications and systems to drive productivity and growth. At Cleo, we support all major cloud products \u2013 MS Azure, AMAZON, Google Cloud etc. We specialize in providing comprehensive cloud integration solutions that connect and streamline your business processes. With our expertise and cutting-edge technology, we help you leverage the power of the cloud to optimize your operations and achieve your business goals." },
    ],
    services: [
      { name: 'Cloud-to-Cloud Integration', text: "Seamlessly connect and synchronize data across multiple cloud applications, such as CRM, ERP, marketing automation, and more. Achieve real-time data integration to ensure accurate and up-to-date information across your cloud ecosystem. Streamline business processes by automating workflows and eliminating manual data entry." },
      { name: 'Cloud-to-On-Premises Integration', text: "Integrate your cloud applications with on-premises systems, databases, and legacy software for a unified and holistic view of your data. Enable bidirectional data flow between cloud and on-premises systems for efficient data management and decision-making. Enhance data security and compliance by securely exchanging data between cloud and on-premises environments." },
      { name: 'Hybrid Cloud Integration', text: "Seamlessly integrate and manage data between your private cloud, public cloud, and on-premises infrastructure. Ensure data consistency and availability across hybrid environments for enhanced operational efficiency. Enable scalability and flexibility by leveraging the strengths of both cloud and on-premises systems." },
      { name: 'API Integration', text: "Leverage APIs (Application Programming Interfaces) to connect cloud applications and systems with external platforms and services. Enable seamless data exchange and interoperability between your applications and third-party systems. Build custom APIs to extend the capabilities of your cloud applications and create tailored integration solutions." },
      { name: 'Data Integration and Migration', text: "Efficiently migrate data from legacy systems, databases, or on-premises infrastructure to cloud platforms. Ensure data integrity and accuracy during the migration process. Implement data transformation, mapping, and cleansing to optimize data quality in the cloud environment." },
    ],
    whyChoose: [
      { label: 'Expertise', text: "Our team of experienced cloud integration professionals has a deep understanding of cloud technologies and integration methodologies." },
      { label: 'Scalability and Flexibility', text: "We design solutions that can adapt and scale as your business grows and evolves." },
      { label: 'Seamless Integration', text: "We ensure smooth integration between your cloud applications, on-premises systems, and external platforms." },
      { label: 'Security and Compliance', text: "We prioritize data security and compliance, implementing robust measures to protect your sensitive information." },
      { label: 'Cost Efficiency', text: "Our solutions are designed to optimize your cloud investments and drive cost efficiencies." },
      { label: 'Customer-Centric Approach', text: "We work closely with you to understand your unique requirements and deliver tailored solutions that meet your business needs." },
    ],
    closing: "Unlock the full potential of cloud integration with Cleo\u2019s expertise and innovative solutions. Contact us today to discuss your cloud integration requirements and let us help you streamline your business processes for success in the digital era.",
  },
  'cyber-security-services': {
    title: 'Cyber Security Services',
    banner: 'CYBER<br>SECURITY',
    img: '/images/code-blue.webp',
    sections: [
      { heading: '', text: "At CLEO Consulting, we understand the critical importance of safeguarding your digital assets in today\u2019s increasingly interconnected world. With the rapid evolution of technology and the growing sophistication of cyber threats, businesses and organizations must be proactive in defending against potential breaches and protecting sensitive information. That\u2019s where we come in." },
      { heading: '', text: "Our team of experienced cyber security professionals is dedicated to providing comprehensive and tailored solutions to address your unique security needs. We offer a wide range of services designed to identify vulnerabilities, mitigate risks, and ensure the integrity and confidentiality of your data. Whether you\u2019re a small business, a government agency, or a multinational corporation, we have the expertise and knowledge to help you navigate the complex cyber landscape." },
    ],
    services: [
      { name: 'Vulnerability Assessments and Penetration Testing', text: "Stay one step ahead of potential threats with our thorough vulnerability assessments and penetration testing. Our experts will conduct comprehensive assessments of your systems, networks, and applications to identify weaknesses and vulnerabilities. We then simulate real-world attacks to test the effectiveness of your security measures and provide actionable recommendations to enhance your defences." },
      { name: 'Security Audits and Compliance', text: "Achieve and maintain regulatory compliance with our comprehensive security audits. We evaluate your systems, processes, and controls against industry standards and best practices to ensure that you meet the necessary requirements. Our team assists you in implementing robust security measures, such as data encryption, access controls, and incident response plans, to protect sensitive information and maintain regulatory compliance." },
      { name: 'Managed Security Services', text: "Focus on your core business while we take care of your day-to-day security operations. Our managed security services provide round-the-clock monitoring, threat detection, and incident response to protect your systems and networks from emerging threats. We leverage cutting-edge technologies and industry-leading practices to proactively identify and neutralize potential risks, giving you peace of mind and allowing you to concentrate on your business objectives." },
      { name: 'Security Awareness Training', text: "Empower your employees to become your strongest line of defence against cyber threats. We offer customized security awareness training programs that educate your staff about the latest threats, phishing scams, and best practices for data protection. By raising awareness and promoting a security-conscious culture within your organization, you can significantly reduce the risk of human error and strengthen your overall security posture." },
      { name: 'Incident Response and Forensics', text: "In the event of a security incident, our incident response team is ready to act swiftly and effectively. We employ industry-standard practices to contain and mitigate the impact of the breach, minimize downtime, and restore normal operations. Our digital forensics experts conduct thorough investigations to determine the cause of the incident, identify the extent of the damage, and provide evidence for legal or regulatory proceedings if necessary." },
    ],
    whyChoose: [
      { label: 'Expertise and Experience', text: "Our team consists of highly skilled professionals with extensive experience in the field of cyber security. We stay up to date with the latest trends and emerging threats to provide you with the most effective solutions." },
      { label: 'Tailored Approach', text: "We understand that every business has unique security requirements. Our services are tailored to address your specific needs, ensuring that you receive the most relevant and effective cyber security solutions." },
      { label: 'Proactive and Responsive', text: "We take a proactive approach to cyber security, constantly monitoring and analysing the evolving threat landscape. In the face of a security incident, our team responds swiftly and efficiently to minimize the impact on your operations." },
      { label: 'Confidentiality and Trust', text: "We treat your sensitive information with the utmost confidentiality and adhere to the highest ethical standards. You can trust us to protect your data and provide transparent and reliable services." },
    ],
    closing: "Secure your digital assets with CLEO Consulting. Contact us today to schedule a consultation and take the first step towards enhancing your cyber security posture. Together, we can build a secure future for your business.",
  },
  'palo-alto-network-solutions': {
    title: 'Palo Alto Network Solutions',
    banner: 'PALO ALTO<br>NETWORKS',
    img: '/images/night-city.webp',
    sections: [
      { heading: '', text: "At CLEO Consulting, we understand the importance of a robust and reliable network infrastructure in today\u2019s digital landscape. We specialize in providing comprehensive Palo Alto network solutions that empower businesses to secure their networks, protect their data, and mitigate emerging cyber threats. With our expertise and deep knowledge of Palo Alto Networks technologies, we help organizations of all sizes build resilient and secure network environments." },
    ],
    services: [
      { name: 'Next-Generation Firewalls', text: "Enhance your network security with Palo Alto Networks\u2019 next-generation firewalls. We offer end-to-end solutions that provide advanced threat prevention, application visibility and control, and secure access to your network resources. Our team of certified professionals will assess your network infrastructure, design a tailored firewall solution, and seamlessly deploy and configure the Palo Alto Networks firewall to safeguard your organization\u2019s critical assets." },
      { name: 'Secure Access Service Edge (SASE)', text: "Embrace the future of network security with Palo Alto Networks\u2019 Secure Access Service Edge (SASE) solutions. As organizations adopt cloud-based applications and embrace remote work, the traditional network perimeter has expanded. Our experts will help you implement a comprehensive SASE architecture that combines network security, advanced threat protection, secure web gateways, data loss prevention, and zero-trust access controls. With SASE, you can protect your network and data regardless of user location or device, ensuring secure and reliable connectivity for your workforce." },
      { name: 'Network Security Assessments', text: "Ensure the integrity and resilience of your network infrastructure with our comprehensive network security assessments. Our experienced team will conduct in-depth evaluations of your network architecture, configuration, and policies, identifying potential vulnerabilities and areas for improvement. We will provide you with a detailed report and practical recommendations to strengthen your network security posture, mitigate risks, and ensure compliance with industry regulations." },
      { name: 'Security Operations Center (SOC) Services', text: "Stay ahead of cyber threats with our Security Operations Center (SOC) services powered by Palo Alto Networks\u2019 cutting-edge technologies. Our dedicated team of security analysts will monitor your network in real-time, detect and respond to potential security incidents, and provide proactive threat intelligence. With our SOC services, you can have peace of mind knowing that your network is under constant surveillance and that potential threats are identified and neutralized before they cause harm." },
    ],
    whyChoose: [
      { label: 'Expertise and Partnership', text: "As a trusted partner of Palo Alto Networks, we have deep expertise in their products and solutions. Our team of certified professionals is well-equipped to design, implement, and support Palo Alto Networks technologies tailored to your organization\u2019s specific needs." },
      { label: 'Customized Solutions', text: "We understand that each organization has unique network security requirements. Our solutions are customized to align with your business objectives, ensuring that you get the most out of your Palo Alto Networks investment." },
      { label: 'Proactive Support', text: "We provide proactive support and ongoing monitoring to ensure that your network remains secure and optimized. Our team is available to address any concerns, provide timely updates, and deliver continuous improvements to your network security infrastructure." },
      { label: 'Seamless Integration', text: "We seamlessly integrate Palo Alto Networks solutions into your existing network environment, minimizing disruptions and ensuring a smooth transition. Our experts will work closely with your team to ensure that the implementation is efficient and effective." },
    ],
    closing: "Secure your network with Palo Alto Network Solutions from CLEO Consulting. Contact us today to discuss your network security requirements and learn how our expertise can help safeguard your organization\u2019s critical assets. Together, we can build a resilient and secure network infrastructure for your business.",
  },
  'data-science-solutions': {
    title: 'Data Science Solutions',
    banner: 'DATA<br>SCIENCE',
    img: '/images/circuit-brain.webp',
    sections: [
      { heading: '', text: "At CLEO Consulting, we offer a range of cutting-edge solutions designed to help you leverage the potential of your data and make informed business decisions. Our team of expert data scientists is dedicated to delivering tailored services that address your unique challenges and drive success." },
    ],
    services: [
      { name: 'Data Analysis and Visualization', text: "Harness the full potential of your data through advanced analysis techniques. Our data scientists employ state-of-the-art tools and algorithms to uncover meaningful patterns and trends. We transform complex data into clear and visually appealing visualizations, enabling you to grasp insights at a glance." },
      { name: 'Predictive Modeling and Machine Learning', text: "Stay one step ahead with our predictive modeling and machine learning expertise. We develop powerful models that forecast future outcomes and identify opportunities for optimization. Our team leverages machine learning algorithms to train models that can make accurate predictions, empowering you to make data-driven decisions." },
      { name: 'Data Mining and Extraction', text: "Extract valuable nuggets of information from vast datasets with our data mining and extraction services. Our data scientists employ advanced techniques to discover hidden patterns, relationships, and anomalies within your data. Uncover actionable insights that can fuel growth and give you a competitive edge." },
      { name: 'Natural Language Processing (NLP) and Text Analytics', text: "Unleash the power of unstructured data through our NLP and text analytics solutions. Our experts leverage cutting-edge techniques to analyze text-based data, extract meaningful information, and gain valuable insights from customer feedback, social media posts, surveys, and more. Enhance your understanding of customer sentiment, market trends, and brand reputation." },
      { name: 'Data Strategy and Consulting', text: "Develop a robust data strategy that aligns with your business goals. Our team provides strategic guidance to help you effectively manage and utilize your data assets. From data governance to data-driven decision-making frameworks, we offer comprehensive consulting services that enable you to maximize the value of your data." },
      { name: 'Data Visualization Dashboards', text: "Communicate insights effectively with visually stunning and interactive dashboards. Our data scientists design intuitive dashboards that allow you to explore and interact with your data effortlessly. Gain a holistic view of your business performance and make data-driven decisions with ease." },
    ],
    whyChoose: [],
    closing: "Partner with CLEO Consulting for reliable, scalable, and innovative data science solutions. Let us empower you to harness the power of data and unlock new opportunities for growth. Contact us today to get started on your data-driven journey!",
  },
  'it-networking-solutions': {
    title: 'IT Networking Solutions',
    banner: 'IT<br>NETWORKING',
    img: '/images/laptop-teamwork.webp',
    sections: [
      { heading: '', text: "In today\u2019s interconnected world, a robust and reliable network infrastructure is essential for the smooth functioning of businesses. At Cleo, we specialize in delivering cutting-edge IT networking solutions that optimize connectivity, enhance performance, and enable seamless communication across your organization. With our expertise and innovative technologies, we help you build a solid foundation for your digital transformation journey." },
    ],
    services: [
      { name: 'Network Design and Implementation', text: "Customized network design tailored to your specific business requirements, considering factors like scalability, security, and performance. End-to-end network implementation services, ensuring a seamless and efficient deployment of network infrastructure. Integration of wired and wireless networks to provide a comprehensive and unified network solution." },
      { name: 'Network Security', text: "Robust network security solutions to protect your critical assets from external threats and unauthorized access. Implementation of firewalls, intrusion detection and prevention systems, VPNs (Virtual Private Networks), and other security measures. Regular security audits, vulnerability assessments, and proactive threat management to safeguard your network infrastructure." },
      { name: 'Network Optimization and Performance', text: "Analysis and optimization of network performance to ensure efficient data transfer, reduced latency, and improved application response times. Bandwidth management and Quality of Service (QoS) configuration to prioritize critical applications and optimize network resources. Network monitoring and management tools to proactively identify and resolve network bottlenecks and performance issues." },
      { name: 'Wireless Networking', text: "Design and implementation of secure and high-performance wireless networks, including Wi-Fi infrastructure and access point deployment. Coverage analysis, capacity planning, and optimization to ensure reliable and seamless wireless connectivity throughout your premises. Guest access management and BYOD (Bring Your Own Device) solutions for a flexible and secure wireless environment." },
      { name: 'Network Infrastructure Upgrades', text: "Assessment of your existing network infrastructure and recommendations for upgrades and modernization. Migration to advanced networking technologies, such as Software-Defined Networking (SDN) or Intent-Based Networking (IBN), for enhanced agility and control. Seamless transition and minimal disruption during network infrastructure upgrades." },
    ],
    whyChoose: [
      { label: 'Expertise', text: "Our team of certified networking professionals brings extensive experience and deep knowledge of network infrastructure design and implementation." },
      { label: 'Customization', text: "We understand that every business has unique networking needs, and we tailor our solutions to meet your specific requirements." },
      { label: 'Proactive Support', text: "We provide ongoing network monitoring, maintenance, and support to ensure your network operates at its optimal performance." },
      { label: 'Scalability and Future-Proofing', text: "We design solutions that can scale as your business grows and adapt to evolving technological advancements." },
      { label: 'Customer-Centric Approach', text: "Your satisfaction is our top priority, and we strive to deliver solutions that align with your business goals and objectives." },
    ],
    closing: "Transform your network infrastructure with Cleo\u2019s IT networking solutions. Contact us today to discuss your networking requirements and let our experts help you build a robust and secure network foundation for your business.",
  },
  'salesforce-services': {
    title: 'Salesforce Services',
    banner: 'SALESFORCE<br>SERVICES',
    img: '/images/laptop-teamwork.webp',
    sections: [
      { heading: '', text: "We offer comprehensive Salesforce services tailored to meet your business needs. Our team of experienced Salesforce experts is dedicated to helping you maximize the potential of your Salesforce implementation. Whether you\u2019re just starting with Salesforce or looking to optimize and enhance your existing setup, we have the expertise to guide you every step of the way." },
    ],
    services: [
      { name: 'Salesforce Implementation', text: "Tailored Salesforce solutions designed to align with your unique business requirements. Seamless migration from your existing systems to Salesforce, ensuring a smooth transition. Customization and configuration of Salesforce to match your specific workflows and processes. Integration with third-party applications for enhanced functionality and data synchronization." },
      { name: 'Salesforce Consulting', text: "Strategic guidance and expert advice to help you make the most out of Salesforce. Business process analysis to identify areas of improvement and optimization. Salesforce best practices and recommendations for maximizing ROI. Roadmap development and planning for long-term success." },
      { name: 'Salesforce Custom Development', text: "Custom Salesforce development to build applications, features, and functionalities tailored to your unique needs. Apex coding, Visualforce pages, Lightning components, and other Salesforce development services. Automation and workflow customization to streamline your business processes. AppExchange app development for extending the capabilities of your Salesforce org." },
      { name: 'Salesforce Integration', text: "Seamlessly integrate Salesforce with other systems, such as ERP, marketing automation, and customer support platforms. Data synchronization and real-time integration to ensure a unified view of your customer information. Custom API development and integration solutions to connect Salesforce with external applications." },
      { name: 'Salesforce Support and Maintenance', text: "Ongoing support and maintenance services to keep your Salesforce instance running smoothly. User training and adoption programs to empower your team to leverage Salesforce effectively. Regular health checks and performance optimization to ensure optimal system performance. Troubleshooting, bug fixing, and enhancements to address any issues that may arise." },
    ],
    whyChoose: [
      { label: 'Expertise', text: "Our team of certified Salesforce professionals brings extensive experience and in-depth knowledge of the platform." },
      { label: 'Customization', text: "We understand that every business is unique, and we tailor our solutions to match your specific requirements." },
      { label: 'End-to-End Solutions', text: "From consultation to implementation, customization, integration, and ongoing support, we provide comprehensive services." },
      { label: 'Results-Driven Approach', text: "We focus on delivering measurable results and helping you achieve your business objectives." },
      { label: 'Client-Centric Approach', text: "Your success is our priority, and we are committed to building long-term partnerships based on trust and collaboration." },
    ],
    closing: "Take your business to new heights with Cleo\u2019s Salesforce services. Contact us today to discuss your Salesforce needs and let our experts guide you on your Salesforce journey.",
  },
  'servicenow-service': {
    title: 'ServiceNow Service',
    banner: 'SERVICENOW<br>SERVICES',
    img: '/images/desk-bw.webp',
    sections: [
      { heading: '', text: "We are dedicated to providing top-notch ServiceNow services to help businesses optimize their workflows, enhance collaboration, and streamline their IT service management processes. With our deep expertise in the ServiceNow platform, we are committed to delivering tailored solutions that meet your unique business needs." },
    ],
    services: [
      { name: 'Implementation', text: "We offer end-to-end ServiceNow implementation services, ensuring a smooth transition to the platform. Our experienced consultants will work closely with your team to understand your requirements and configure ServiceNow to align with your specific processes and workflows." },
      { name: 'Customization and Development', text: "Our skilled developers can customize ServiceNow to match your business needs. Whether it\u2019s building custom modules, configuring workflows, or creating specialized applications, we ensure that ServiceNow adapts seamlessly to your organization\u2019s requirements." },
      { name: 'Integration', text: "We facilitate seamless integration of ServiceNow with other third-party systems within your IT ecosystem. By integrating ServiceNow with applications such as monitoring tools, HR systems, or asset management solutions, we enable data synchronization and streamline processes across your organization." },
      { name: 'IT Service Management (ITSM)', text: "We assist in optimizing your IT service management processes using ServiceNow\u2019s ITSM capabilities. From incident management and problem resolution to change management and service catalog design, we help you achieve efficient and effective IT service delivery." },
      { name: 'Service Portal and User Experience', text: "We focus on enhancing the user experience by designing intuitive and user-friendly Service Portals. Our experts ensure that your employees have easy access to the services they need, resulting in increased productivity and satisfaction." },
      { name: 'Upgrade and Support', text: "We provide reliable support and assistance during ServiceNow upgrades to ensure a seamless transition to the latest version. Our support team is readily available to address any issues or questions you may have, ensuring uninterrupted service delivery." },
    ],
    whyChoose: [
      { label: 'Expertise', text: "Our team comprises certified ServiceNow professionals with extensive experience in implementing and customizing the platform." },
      { label: 'Tailored Solutions', text: "We understand that every business is unique, and we deliver customized solutions that align with your specific requirements and goals." },
      { label: 'Collaboration and Communication', text: "We believe in open communication and collaboration throughout the project lifecycle to ensure transparency and achieve the desired outcomes." },
      { label: 'Customer Satisfaction', text: "Client satisfaction is our top priority. We go above and beyond to deliver high-quality services and exceed our clients\u2019 expectations." },
      { label: 'Continuous Improvement', text: "We stay up to date with the latest ServiceNow releases, features, and best practices, ensuring that you benefit from the latest innovations and enhancements." },
    ],
    closing: "Unlock the power of ServiceNow for your organization with our comprehensive ServiceNow services. Contact us today to discuss your requirements and embark on a journey of streamlined IT service management and improved operational efficiency!",
  },
  'software-development': {
    title: 'Software Development Services (Java & .NET)',
    banner: 'SOFTWARE<br>DEVELOPMENT',
    img: '/images/code-python.webp',
    sections: [
      { heading: '', text: "We specialize in providing exceptional Java and .NET development services to help businesses build robust and scalable software solutions. With our team of experienced developers, we offer a comprehensive range of services to meet your specific Java and .NET development needs." },
      { heading: 'Our Approach to Java & .NET Development', text: "Our approach to Java and .NET development is rooted in delivering high-quality solutions that align with your business objectives. We follow a systematic and collaborative process to ensure a successful outcome." },
    ],
    services: [
      { name: 'Custom Application Development', text: "Our experienced developers create tailored Java and .NET applications that cater to your specific business needs. Whether you require an enterprise-level solution or a niche application, we have you covered." },
      { name: 'Web Development', text: "We build dynamic and interactive websites using Java or .NET technologies. Our team ensures that your website is user-friendly, responsive, and optimized for performance." },
      { name: 'Mobile Application Development', text: "We develop feature-rich mobile applications for Android and iOS platforms using Java and .NET frameworks. Our mobile apps are designed to provide an engaging user experience and seamless functionality." },
      { name: 'Integration Services', text: "We specialize in integrating Java or .NET applications with third-party systems, such as CRM, ERP, payment gateways, and more. Our seamless integrations streamline your business processes and enhance efficiency." },
      { name: 'Migration and Upgrades', text: "If you have an existing application built on outdated technologies, we can help you migrate it to Java or .NET. Our experts ensure a smooth transition and provide upgrades to leverage the latest advancements." },
    ],
    whyChoose: [
      { label: 'Expertise', text: "Our team comprises skilled developers with extensive experience in Java and .NET development. We stay updated with the latest technologies and best practices to deliver cutting-edge solutions." },
      { label: 'Quality', text: "We are committed to delivering high-quality software solutions that meet your requirements and exceed your expectations." },
      { label: 'Collaboration', text: "We believe in building strong partnerships with our clients. We work closely with you, ensuring clear communication and collaboration throughout the development process." },
      { label: 'Timely Delivery', text: "We adhere to strict timelines and milestones to ensure your project is completed within the agreed-upon timeframe." },
      { label: 'Customer Satisfaction', text: "Our primary goal is your satisfaction. We strive to understand your unique needs and deliver solutions that drive your business success." },
    ],
    closing: "",
    steps: [
      "Requirement Gathering: We begin by thoroughly understanding your project requirements, goals, and challenges. Our team works closely with you to define the scope and specifications of your software solution.",
      "Architecture Design: Our experts design a robust and scalable architecture for your Java or .NET application, ensuring it meets your current needs while allowing for future scalability and flexibility.",
      "Development and Coding: Our skilled developers leverage their expertise in Java and .NET to write clean, efficient, and maintainable code. We adhere to coding best practices and industry standards to ensure high-quality deliverables.",
      "Testing and Quality Assurance: We conduct comprehensive testing at each stage of development to identify and resolve any bugs or issues. Our rigorous quality assurance processes ensure that your software solution meets the highest standards of performance, security, and reliability.",
      "Deployment and Support: Once your Java or .NET application is ready, we assist with the deployment process and provide ongoing support, maintenance, and updates to ensure its smooth operation.",
    ],
  },
  'aem-development-services': {
    title: 'AEM Development Services',
    banner: 'AEM<br>DEVELOPMENT',
    img: '/images/ai-cube.webp',
    sections: [
      { heading: '', text: "We specialize in providing top-notch AEM development services to help businesses leverage the power of Adobe Experience Manager. With our team of experienced AEM developers, we offer a comprehensive range of services to ensure seamless implementation, customization, and optimization of AEM for your digital experience management needs." },
      { heading: 'Our AEM Development Process', text: "Our AEM development process is designed to deliver exceptional results while ensuring a smooth and efficient workflow. We begin by understanding your specific requirements and objectives, allowing us to tailor our services to meet your unique needs." },
    ],
    services: [
      { name: 'AEM Consulting', text: "Our experts provide strategic guidance and consulting services to help you make the most of AEM and achieve your digital experience goals." },
      { name: 'AEM Customization', text: "We customize AEM to align with your unique business requirements, ensuring a tailored digital experience platform that meets your specific needs." },
      { name: 'AEM Migration and Upgrades', text: "Our team has extensive experience in migrating from older versions of AEM to the latest version, ensuring a seamless transition and enhanced features." },
      { name: 'AEM Performance Optimization', text: "We optimize your AEM implementation for improved page load times, caching strategies, and overall system performance, resulting in an exceptional user experience." },
      { name: 'AEM Support and Maintenance', text: "We provide ongoing support and maintenance services, including bug fixing, troubleshooting, and regular updates, to keep your AEM implementation running smoothly." },
    ],
    whyChoose: [
      { label: 'Expertise', text: "Our team comprises highly skilled AEM developers with extensive experience in implementing and customizing AEM for various industries and use cases." },
      { label: 'Quality', text: "We are committed to delivering high-quality solutions that meet your expectations and drive your business success." },
      { label: 'Customer-Centric Approach', text: "We prioritize understanding your unique requirements and providing personalized solutions that align with your goals." },
      { label: 'Timely Delivery', text: "We adhere to strict timelines to ensure that your AEM implementation is completed within the agreed-upon timeframe." },
      { label: 'Customer Satisfaction', text: "We measure our success by the satisfaction of our clients. We strive to exceed your expectations and build long-term partnerships." },
    ],
    closing: "",
    steps: [
      "Requirement Analysis: We conduct a thorough analysis of your business requirements to identify the key functionalities and features needed for your AEM implementation.",
      "AEM Installation and Configuration: Our experts handle the installation and configuration of AEM, ensuring a stable and reliable foundation for your digital experience platform.",
      "Customization and Integration: We customize AEM to align with your brand identity and integrate it seamlessly with your existing systems, such as CRM, eCommerce platforms, and marketing automation tools.",
      "Component and Template Development: Our skilled developers create custom components and templates that enhance the user experience and ensure consistent branding across your websites.",
      "Testing and Quality Assurance: We conduct rigorous testing to ensure that your AEM implementation meets the highest standards of performance, security, and functionality.",
      "Deployment and Support: Once your AEM implementation is ready, we assist with the deployment process and provide ongoing support, maintenance, and updates to keep your system running smoothly.",
    ],
  },
}

const imgs = {
  'cisco-network-solutions': '/images/digital-globe.webp',
  'cloud-integration-services': '/images/laptop-teamwork.webp',
  'cyber-security-services': '/images/code-blue.webp',
  'palo-alto-network-solutions': '/images/night-city.webp',
  'data-science-solutions': '/images/circuit-brain.webp',
  'it-networking-solutions': '/images/laptop-teamwork.webp',
  'salesforce-services': '/images/laptop-teamwork.webp',
  'servicenow-service': '/images/desk-bw.webp',
  'software-development': '/images/code-python.webp',
  'aem-development-services': '/images/ai-cube.webp',
}

const allSlugs = Object.keys(projects)

export function generateStaticParams() {
  return allSlugs.map(slug => ({ slug }))
}

export default function ProjectPage({ params }) {
  const proj = projects[params.slug]
  if (!proj) return <div className="pg-body"><h1>Slug received: {params.slug}</h1></div>
  const otherProjects = allSlugs.filter(s => s !== params.slug).slice(0, 4)

  return (
    <>
      <PageBanner eyebrow="Our Projects" title={proj.banner} num="" bgImage={proj.img} />
      <div className="pg-body" style={{ maxWidth: '900px' }}>

        {/* Intro */}
        {proj.sections.map((s, i) => (
          <div key={i} style={{ marginBottom: '2rem' }}>
            {s.heading && <h3 style={{ fontFamily: 'var(--display)', fontSize: '1.3rem', color: 'var(--gold)', letterSpacing: '0.03em', marginBottom: '0.75rem' }}>{s.heading}</h3>}
            <p style={{ fontSize: '0.95rem', color: 'var(--fog)', lineHeight: 1.85 }}>{s.text}</p>
          </div>
        ))}

        {/* Process steps if present */}
        {proj.steps && proj.steps.length > 0 && (
          <div style={{ margin: '2.5rem 0', padding: '2rem', border: '1px solid var(--ghost)', position: 'relative' }}>
            <div style={{ position: 'absolute', top: '-0.6rem', left: '1.5rem', background: 'var(--ink)', padding: '0 0.75rem', fontFamily: 'var(--display)', fontSize: '0.7rem', letterSpacing: '0.15em', color: 'var(--gold)', textTransform: 'uppercase' }}>Our Process</div>
            {proj.steps.map((step, i) => (
              <div key={i} style={{ display: 'flex', gap: '1rem', marginBottom: '1.25rem', alignItems: 'flex-start' }}>
                <span style={{ fontFamily: 'var(--display)', fontSize: '1.8rem', color: 'var(--gold)', opacity: 0.4, lineHeight: 1, flexShrink: 0, width: '2rem', textAlign: 'right' }}>{'0' + (i + 1)}</span>
                <p style={{ fontSize: '0.9rem', color: 'var(--fog)', lineHeight: 1.7, margin: 0 }}>{step}</p>
              </div>
            ))}
          </div>
        )}

        {/* Image */}
        <div style={{ position: 'relative', margin: '3rem 0' }}>
          <div style={{ position: 'absolute', inset: '-8px', border: '1px solid var(--gold)', opacity: 0.3, transform: 'rotate(2deg)' }} />
          <div style={{ height: '300px', overflow: 'hidden', borderRadius: '2px', position: 'relative' }}>
            <img src={proj.img} alt={proj.title} className="img-cover" style={{ filter: 'sepia(30%) saturate(130%) brightness(0.75)' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(200,153,31,0.12), rgba(0,18,41,0.4))', pointerEvents: 'none' }} />
          </div>
        </div>

        {/* Services / Offerings */}
        {proj.services && proj.services.length > 0 && (
          <div style={{ marginBottom: '3rem' }}>
            <h3 style={{ fontFamily: 'var(--display)', fontSize: '1.2rem', color: 'var(--paper)', letterSpacing: '0.04em', marginBottom: '2rem', paddingBottom: '0.75rem', borderBottom: '1px solid var(--gold)' }}>OUR SERVICES</h3>
            {proj.services.map((s, i) => (
              <div key={i} style={{ marginBottom: '2rem', paddingLeft: '1.5rem', borderLeft: '2px solid var(--gold)' }}>
                <h4 style={{ fontFamily: 'var(--serif)', fontSize: '1.1rem', fontWeight: 700, color: 'var(--paper)', marginBottom: '0.5rem' }}>{s.name}</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--fog)', lineHeight: 1.8 }}>{s.text}</p>
              </div>
            ))}
          </div>
        )}

        {/* Why Choose */}
        {proj.whyChoose && proj.whyChoose.length > 0 && (
          <div style={{ marginBottom: '3rem' }}>
            <h3 style={{ fontFamily: 'var(--display)', fontSize: '1.2rem', color: 'var(--paper)', letterSpacing: '0.04em', marginBottom: '2rem', paddingBottom: '0.75rem', borderBottom: '1px solid var(--gold)' }}>WHY CHOOSE CLEO?</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem' }}>
              {proj.whyChoose.map((w, i) => (
                <div key={i} style={{ padding: '1.5rem', border: '1px solid var(--ghost)', position: 'relative' }}>
                  <div style={{ fontFamily: 'var(--display)', fontSize: '0.7rem', letterSpacing: '0.12em', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: '0.5rem' }}>{w.label}</div>
                  <p style={{ fontSize: '0.85rem', color: 'var(--fog)', lineHeight: 1.7, margin: 0 }}>{w.text}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Closing */}
        {proj.closing && (
          <div style={{ padding: '2rem', background: 'rgba(200,153,31,0.06)', border: '1px solid rgba(200,153,31,0.2)', marginBottom: '3rem' }}>
            <p style={{ fontSize: '0.95rem', color: 'var(--paper)', lineHeight: 1.8, margin: 0, fontStyle: 'italic' }}>{proj.closing}</p>
          </div>
        )}

        {/* Apply Now */}
        <div style={{ textAlign: 'center', margin: '3rem 0' }}>
          <Link href="/apply" className="btn-fill" style={{ fontSize: '0.85rem', padding: '1rem 3rem' }}>APPLY NOW</Link>
        </div>

        {/* Other Projects */}
        <div style={{ marginTop: '4rem', paddingTop: '3rem', borderTop: '1px solid var(--ghost)' }}>
          <h3 style={{ fontFamily: 'var(--display)', fontSize: '1.4rem', color: 'var(--paper)', letterSpacing: '0.04em', marginBottom: '1.5rem' }}>OTHER PROJECTS</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1px', background: 'var(--ghost)' }}>
            {otherProjects.map(slug => (
              <Link href={"/projects/" + slug} key={slug} style={{ textDecoration: 'none', background: 'var(--ink)', padding: '1.5rem', display: 'block' }}>
                <div style={{ fontFamily: 'var(--serif)', fontSize: '1rem', fontWeight: 700, color: 'var(--paper)', marginBottom: '0.3rem' }}>{projects[slug].title}</div>
                <span style={{ fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold)' }}>View Project {'\u2192'}</span>
              </Link>
            ))}
          </div>
        </div>

        <div style={{ marginTop: '2rem' }}>
          <Link href="/projects" style={{ fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold)', textDecoration: 'none' }}>{'\u2190'} Back to All Projects</Link>
        </div>
      </div>
    </>
  )
}