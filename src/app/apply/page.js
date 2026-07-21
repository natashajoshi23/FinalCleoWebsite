'use client'
import { useEffect } from 'react'
import PageBanner from '@/components/PageBanner'

export default function ApplyPage() {
  useEffect(() => {
    const container = document.getElementById('example-widget-container')
    if (container) container.innerHTML = ''

    // Remove any previously appended CEIPAL script
    const existing = document.querySelector('script[data-ceipal-api-key]')
    if (existing) existing.remove()

    const script = document.createElement('script')
    script.src = 'https://jobsapi.ceipal.com/APISource/widget.js'
    script.setAttribute('data-ceipal-api-key', process.env.NEXT_PUBLIC_CEIPAL_API_KEY)
    script.setAttribute('data-ceipal-career-portal-id', process.env.NEXT_PUBLIC_CEIPAL_PORTAL_ID)
    document.body.appendChild(script)

    return () => {
      const s = document.querySelector('script[data-ceipal-api-key]')
      if (s) s.remove()
    }
  }, [])

  return (
    <>
      <link rel="preload" as="image" href="/images/apply-now.webp" />
      <PageBanner eyebrow="Careers" title="APPLY<br>NOW" num="09" bgImage="/images/apply-now.webp" />
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '4rem 2rem 5rem' }}>

        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '3rem', paddingBottom: '2rem', borderBottom: '1px solid var(--ghost)', textAlign: 'center' }}>
          <div style={{ maxWidth: '700px', margin: '0 auto' }}>
            <h2 style={{ fontFamily: 'var(--serif)', fontSize: '1.8rem', fontWeight: 700, color: 'var(--paper)', lineHeight: 1.3 }}>Join the Cleo <span style={{ color: 'var(--gold)', fontStyle: 'italic' }}>Network</span></h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--fog)', lineHeight: 1.85, marginTop: '0.75rem' }}>Whether you are seeking a permanent role, contract opportunity, or project-based engagement, Cleo Consulting connects top-tier talent with industry-leading organizations across the USA, Canada, and India.</p>
          </div>
        </div>

        <div id="example-widget-container" />

      </div>
    </>
  )
}
