'use client'
import { useEffect, useRef } from 'react'
import PageBanner from '@/components/PageBanner'

export default function ApplyPage() {
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    container.innerHTML = '<p style="color:var(--fog);text-align:center;padding:3rem 0">Loading positions...</p>'

    fetch('/api/ceipal-jobs')
      .then(res => res.json())
      .then(data => {
        if (data.html) {
          container.innerHTML = data.html
          // Run any inline scripts CEIPAL injected
          container.querySelectorAll('script').forEach(oldScript => {
            const newScript = document.createElement('script')
            if (oldScript.src) {
              newScript.src = oldScript.src
            } else {
              newScript.textContent = oldScript.textContent
            }
            document.body.appendChild(newScript)
            oldScript.remove()
          })
        } else {
          container.innerHTML = '<p style="color:var(--fog);text-align:center;padding:3rem 0">No open positions at the moment. Check back soon.</p>'
        }
      })
      .catch(() => {
        container.innerHTML = '<p style="color:var(--fog);text-align:center;padding:3rem 0">Unable to load positions. Please try again later.</p>'
      })
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

        <div ref={containerRef} />

      </div>
    </>
  )
}
