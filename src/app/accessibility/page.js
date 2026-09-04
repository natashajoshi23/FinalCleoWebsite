import PageBanner from '@/components/PageBanner'
import { pageMetadata } from '@/sanity/lib/pageSeo'
export const revalidate = 60

export async function generateMetadata() {
  return pageMetadata('accessibility', {
    title: 'Accessibility Statement — Cleo Consulting',
    description:
      'Cleo Consulting’s commitment to WCAG 2.1 Level AA — how we keep our website usable for everyone, including people with disabilities.',
    path: '/accessibility',
  })
}

const sections = [
  {
    num: '1',
    title: 'Our Commitment',
    text: 'Cleo Consulting Inc. is committed to ensuring that our website is accessible to everyone, including people with disabilities. We believe that equal access to information and services is a fundamental right, and we work continuously to meet and maintain the highest accessibility standards across our digital presence.',
    bullets: [],
  },
  {
    num: '2',
    title: 'Conformance Status',
    text: 'This website, cleoconsult.com, conforms to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA. These guidelines explain how to make web content more accessible to people with disabilities. Conformance with these guidelines helps make the web more user-friendly for everyone.',
    bullets: [
      { bold: 'Standard:', text: 'WCAG 2.1 Level AA' },
      { bold: 'Status:', text: 'Fully conforms' },
      { bold: 'Last evaluated:', text: 'July 2026' },
    ],
  },
  {
    num: '3',
    title: 'Standard',
    text: 'WCAG 2.1 is published by the World Wide Web Consortium (W3C) and is the internationally recognized standard for web accessibility. Level AA is the benchmark adopted by governments, enterprise organizations, and accessibility best practice frameworks worldwide. Cleo Consulting has chosen to meet WCAG 2.1 AA because we believe everyone deserves equal access to our services and information, regardless of disability or assistive technology used.',
    bullets: [],
  },
  {
    num: '4',
    title: 'Measures We Have Taken',
    text: 'We have implemented the following measures to ensure accessibility across our website:',
    bullets: [
      { bold: 'Colour contrast:', text: 'All text meets or exceeds the WCAG 2.1 AA minimum contrast ratio of 4.5:1, including in both light and dark modes. Dark mode gold text uses #C8991F and light mode uses #8B6010 to ensure compliance in both themes.' },
      { bold: 'Keyboard navigation:', text: 'All interactive elements are fully accessible via keyboard. A visible skip-to-content link is available at the top of every page.' },
      { bold: 'Screen reader support:', text: 'Semantic HTML is used throughout. All images have meaningful alt text. ARIA labels and roles are applied to interactive components including modals, navigation, and dialogs.' },
      { bold: 'Focus management:', text: 'Modals and popups manage focus correctly, trapping keyboard navigation within the dialog while open and returning focus on close.' },
      { bold: 'Heading structure:', text: 'Every page has a single h1 and a logical heading hierarchy (h2, h3) to aid screen reader navigation.' },
      { bold: 'Mobile accessibility:', text: 'The site is fully responsive and accessible on mobile devices. The mobile navigation sidebar is hidden from assistive technology when closed using the inert attribute.' },
      { bold: 'Accessible forms:', text: 'All form inputs have associated labels, required fields are clearly indicated, and error messages are announced to screen readers via ARIA live regions.' },
      { bold: 'Reduced motion:', text: 'Animations are minimal and do not include flashing or rapid movement that could trigger photosensitive responses.' },
    ],
  },
  {
    num: '5',
    title: 'Known Limitations',
    text: 'While we strive for full accessibility, some third-party components have limitations outside our direct control:',
    bullets: [
      { bold: 'Career portal widget:', text: 'The job listings on our Apply page are powered by CEIPAL, a third-party applicant tracking system. The widget\'s visual styling and accessibility features are controlled by CEIPAL and may not fully conform to WCAG 2.1 AA. We are working with CEIPAL to address any gaps.' },
      { bold: 'Live chat:', text: 'The Botpress chat widget is a third-party tool. While we have configured it to the best of our ability, some aspects of its accessibility are outside our control.' },
    ],
  },
  {
    num: '6',
    title: 'Testing',
    text: 'This website has been tested using the following methods and tools:',
    bullets: [
      { bold: 'Automated testing:', text: 'axe DevTools browser extension (Deque Systems), run against all pages in both light and dark mode. Zero violations detected.' },
      { bold: 'Lighthouse audits:', text: 'Google Lighthouse accessibility audits run against all pages, achieving scores of 95–100 across the site.' },
      { bold: 'Manual testing:', text: 'Keyboard-only navigation tested across all pages. Focus order and trap behaviour verified on all modal dialogs.' },
      { bold: 'Screen reader:', text: 'Accessibility tree verified using Chrome\'s built-in accessibility inspector.' },
    ],
  },
  {
    num: '7',
    title: 'Feedback and Contact',
    text: 'We welcome feedback on the accessibility of our website. If you experience any barriers or have suggestions for improvement, please contact us. We are committed to responding to accessibility feedback within 2 business days.',
    bullets: [],
  },
]

export default function AccessibilityStatement() {
  return (
    <>
      <PageBanner eyebrow="Legal" title="ACCESSIBILITY<br>STATEMENT" num="" bgImage="/images/office-sunset.webp" />
      <div style={{ maxWidth: '780px', margin: '0 auto', padding: '4rem 2rem 5rem' }}>

        <p className="pp-gold" style={{ fontSize: '1rem', letterSpacing: '0.1em', color: 'var(--gold)', marginBottom: '1.5rem', fontWeight: 700 }}>Last Updated: July 2026</p>

        <p style={{ fontSize: '0.95rem', color: 'var(--fog)', lineHeight: 1.85, marginBottom: '3rem' }}>
          Cleo Consulting Inc. is committed to providing a website that is accessible to the widest possible audience. This statement outlines our conformance with WCAG 2.1 Level AA and our commitment to accessible digital experiences for all users.
        </p>

        {sections.map(s => (
          <div key={s.num} style={{ marginBottom: '2.5rem' }}>
            <h2 style={{ fontFamily: 'var(--serif)', fontSize: '1.2rem', fontWeight: 700, color: 'var(--paper)', marginBottom: '0.75rem' }}>
              <span className="pp-gold" style={{ color: 'var(--gold)', marginRight: '0.5rem' }}>{s.num}.</span> {s.title}
            </h2>
            <p style={{ fontSize: '0.92rem', color: 'var(--fog)', lineHeight: 1.85, marginBottom: s.bullets.length > 0 ? '1rem' : '0' }}>{s.text}</p>
            {s.bullets.length > 0 && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', paddingLeft: '1rem' }}>
                {s.bullets.map((b, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', fontSize: '0.88rem', color: 'var(--fog)', lineHeight: 1.7 }}>
                    <span className="pp-gold" style={{ color: 'var(--gold)', marginTop: '0.15rem', flexShrink: 0 }}>{'—'}</span>
                    <span>{b.bold && <strong style={{ color: 'var(--paper)' }}>{b.bold} </strong>}{b.text}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}

        <div style={{ marginTop: '3rem', padding: '2rem', border: '1px solid var(--ghost)' }}>
          <h2 style={{ fontFamily: 'var(--serif)', fontSize: '1.2rem', fontWeight: 700, color: 'var(--paper)', marginBottom: '0.75rem' }}>
            <span className="pp-gold" style={{ color: 'var(--gold)', marginRight: '0.5rem' }}>8.</span> Contact Us
          </h2>
          <p style={{ fontSize: '0.92rem', color: 'var(--fog)', lineHeight: 1.85, marginBottom: '1rem' }}>
            If you encounter accessibility barriers on our website or would like to request content in an accessible format, please reach out:
          </p>
          <div style={{ fontSize: '0.92rem', color: 'var(--paper)', lineHeight: 1.8 }}>
            <strong>Cleo Consulting Inc.</strong><br />
            1879 Whitehaven Rd, Ste C & 1020,<br />
            Grand Island, NY 14072<br />
            <a href="tel:1-866-3906604" className="pp-gold" style={{ color: 'var(--gold)', textDecoration: 'none' }}>1-866-390-6604</a>
          </div>
        </div>

      </div>
    </>
  )
}
