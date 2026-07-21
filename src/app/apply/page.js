'use client'
import { useEffect, useRef, useState } from 'react'
import PageBanner from '@/components/PageBanner'

export default function ApplyPage() {
  const containerRef = useRef(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/ceipal-jobs')
      .then(res => res.json())
      .then(data => {
        setLoading(false)
        const container = containerRef.current
        if (!container || !data.html) return
        container.innerHTML = data.html
        container.querySelectorAll('script').forEach(old => {
          const s = document.createElement('script')
          if (old.src) s.src = old.src
          else s.textContent = old.textContent
          document.body.appendChild(s)
          old.remove()
        })
      })
      .catch(() => setLoading(false))
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

        {loading && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <style>{`@keyframes pulse{0%,100%{opacity:.15}50%{opacity:.35}}`}</style>
            {[0, 1, 2].map(i => (
              <div key={i} style={{ height: '72px', background: 'var(--ghost)', borderRadius: '2px', animation: `pulse 1.5s ease-in-out ${i * 0.2}s infinite` }} />
            ))}
          </div>
        )}

        <div ref={containerRef} />

      </div>
    </>
  )
}
