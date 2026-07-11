'use client'
import Script from 'next/script'
import PageBanner from '@/components/PageBanner'

export default function ApplyPage() {
  return (
    <>
      <link rel="preload" as="image" href="/images/handshake.webp" />
      <PageBanner eyebrow="Careers" title="APPLY<br>NOW" num="09" bgImage="/images/handshake.webp" />
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '4rem 2rem 5rem' }}>

        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '3rem', paddingBottom: '2rem', borderBottom: '1px solid var(--ghost)', textAlign: 'center' }}>
          <div style={{ maxWidth: '700px', margin: '0 auto' }}>
            <h2 style={{ fontFamily: 'var(--serif)', fontSize: '1.8rem', fontWeight: 700, color: 'var(--paper)', lineHeight: 1.3 }}>Join the Cleo <span style={{ color: 'var(--gold)', fontStyle: 'italic' }}>Network</span></h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--fog)', lineHeight: 1.85, marginTop: '0.75rem', marginLeft: 'auto', marginRight: 'auto' }}>Whether you are seeking a permanent role, contract opportunity, or project-based engagement, Cleo Consulting connects top-tier talent with industry-leading organizations across the USA, Canada, and India.</p>
          </div>
        </div>

        <div id="example-widget-container" />
        <Script
          src="https://jobsapi.ceipal.com/APISource/widget.js"
          data-ceipal-api-key={process.env.NEXT_PUBLIC_CEIPAL_API_KEY}
          data-ceipal-career-portal-id={process.env.NEXT_PUBLIC_CEIPAL_PORTAL_ID}
          strategy="afterInteractive"
        />

      </div>
    </>
  )
}
