'use client'
import { useState } from 'react'
import Script from 'next/script'
import PageBanner from '@/components/PageBanner'

const RECAPTCHA_SITE_KEY = '6LdF7kstAAAAAATe2Gk-hUgNhvyxz1KEGUw-BKcR'

const LIMITS = { firstName: 50, lastName: 50, email: 254, phone: 30, message: 2000 }

function CharCount({ value, max }) {
  const len = (value || '').length
  const near = len >= max * 0.85
  return (
    <span style={{ fontSize: '0.65rem', color: near ? (len >= max ? '#e74c3c' : 'var(--gold)') : 'var(--fog)', marginLeft: 'auto', alignSelf: 'flex-end' }}>
      {len}/{max}
    </span>
  )
}

function waitForRecaptcha() {
  return new Promise((resolve) => {
    if (window.grecaptcha && window.grecaptcha.ready) {
      window.grecaptcha.ready(resolve)
    } else {
      const interval = setInterval(() => {
        if (window.grecaptcha && window.grecaptcha.ready) {
          clearInterval(interval)
          window.grecaptcha.ready(resolve)
        }
      }, 100)
    }
  })
}

export default function ContactClient({ offices }) {
  const [sent, setSent] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')
  const [fields, setFields] = useState({ firstName: '', lastName: '', email: '', phone: '', message: '' })
  const set = (k) => (e) => setFields(f => ({ ...f, [k]: e.target.value.slice(0, LIMITS[k]) }))

  const fallbackImgs = [
    { src: '/images/office-ny.webp', alt: 'Cleo Consulting New York headquarters office building', pos: 'center center' },
    { src: '/images/office-ontario.webp', alt: 'Cleo Consulting Ontario headquarters office building', pos: '20% center' },
    { src: '/images/office-bangalore.webp', alt: 'Cleo Consulting Bangalore office building', pos: 'center center' },
  ]

  return (
    <div className="contact-page">
      <style jsx global>{`
        @media (max-width: 640px) {
          .offices-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
        }
      `}</style>

      <Script src={`https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`} strategy="afterInteractive" />
      <PageBanner eyebrow="Reach Out" title="LET'S<br>TALK" num="08" bgImage="/images/handshake.webp" bgPosition="center 62%" />
      <div className="pg-body" style={{ paddingTop: '1rem' }}>
        <h2 style={{ fontFamily: 'var(--display)', fontSize: '2rem', color: 'var(--paper)', letterSpacing: '0.04em', marginBottom: '1.5rem' }}>OUR OFFICES</h2>

        {(() => {
          const rows = []
          for (let i = 0; i < offices.length; i += 2) {
            const pair = offices.slice(i, i + 2)
            const isSingle = pair.length === 1
            rows.push(
              <div
                key={i}
                className="offices-grid"
                style={{
                  display: 'grid',
                  gridTemplateColumns: isSingle ? '1fr' : '1fr 1fr',
                  gap: '1.5rem',
                  marginBottom: '2.5rem',
                  background: 'transparent',
                  maxWidth: isSingle ? '600px' : 'none',
                  margin: isSingle ? '0 auto 2.5rem' : '0 0 2.5rem',
                }}
              >
                {pair.map(({ country, city, lines, phone, email, imageUrl, imagePos }, j) => {
                  const globalIdx = i + j
                  const key = `${globalIdx}-${city}`
                  const fallback = fallbackImgs[globalIdx]
                  const imgSrc = imageUrl || fallback?.src || null
                  return (
                    <div key={key}>
                      <div style={{ height: '380px', overflow: 'hidden', borderRadius: '2px', position: 'relative' }}>
                        {imgSrc && <img src={imgSrc} alt={fallback?.alt || `Cleo Consulting ${city} office`} className="img-cover" width={1200} height={760} style={{ objectPosition: imagePos || fallback?.pos || 'center center' }} loading="lazy" />}
                        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 55%)' }} />
                        <div style={{ position: 'absolute', bottom: '1.25rem', left: '1.25rem' }}>
                          <div className="contact-country-label" style={{ fontSize: '0.8rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: '800' }}>{country}</div>
                          <div style={{ fontFamily: 'var(--serif)', fontSize: '1.2rem', fontWeight: 700, color: '#fff' }}>{city}</div>
                        </div>
                      </div>
                      <div style={{ marginTop: '1rem', color: 'var(--paper)', fontSize: '0.9rem', lineHeight: 1.7, borderTop: '1px solid rgba(255,255,255,0.15)', paddingTop: '1rem', background: 'transparent', textAlign: isSingle ? 'center' : 'left' }}>
                        {lines && lines.split('\n').map((l, k) => <div key={k}>{l}</div>)}
                        {phone && <><a href={`tel:${phone.replace(/\s/g, '')}`} style={{ color: 'var(--paper)' }} aria-label={`Call ${city} office at ${phone}`}>{phone}</a><br /></>}
                        {email && <a href={`mailto:${email}`} className="contact-email-link" style={{ color: 'var(--gold)' }} aria-label={`Email ${city} office at ${email}`}>{email}</a>}
                      </div>
                    </div>
                  )
                })}
              </div>
            )
          }
          return rows
        })()}

        <div className="contact-form-sec">
          <div className="cf-title" id="contact-form-heading">SEND A MESSAGE</div>
          <div className="cf-sub">Fill out the form and we&rsquo;ll get back to you promptly.</div>
          {sent ? (
            <div style={{ background: 'rgba(200,153,31,0.1)', border: '1px solid var(--gold)', padding: '1.5rem', color: 'var(--paper)', fontWeight: 600 }} role="alert">Thank you! We will be in touch shortly.</div>
          ) : (
            <form onSubmit={async e => {
              e.preventDefault()
              setError('')
              setSubmitting(true)
              try {
                const data = new FormData(e.target)
                let recaptchaToken = ''
                try {
                  await waitForRecaptcha()
                  recaptchaToken = await window.grecaptcha.execute(RECAPTCHA_SITE_KEY, { action: 'contact' })
                } catch (_) {}
                const res = await fetch('/api/contact', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({
                    firstName: fields.firstName,
                    lastName:  fields.lastName,
                    email:     fields.email,
                    phone:     fields.phone,
                    service:   data.get('service'),
                    message:   fields.message,
                    recaptchaToken,
                  })
                })
                if (!res.ok) {
                  const json = await res.json().catch(() => ({}))
                  throw new Error(json.error || 'Something went wrong. Please try again.')
                }
                setSent(true)
              } catch (err) {
                setError(err.message || 'Something went wrong. Please try again.')
              } finally {
                setSubmitting(false)
              }
            }} aria-labelledby="contact-form-heading">
              <div className="cf-row">
                <div className="fg">
                  <label htmlFor="contact-fname" style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span>First Name *</span><CharCount value={fields.firstName} max={LIMITS.firstName} />
                  </label>
                  <input id="contact-fname" name="firstName" type="text" placeholder="Your first name" aria-required="true" required maxLength={LIMITS.firstName} value={fields.firstName} onChange={set('firstName')} />
                </div>
                <div className="fg">
                  <label htmlFor="contact-lname" style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span>Last Name</span><CharCount value={fields.lastName} max={LIMITS.lastName} />
                  </label>
                  <input id="contact-lname" name="lastName" type="text" placeholder="Your last name" maxLength={LIMITS.lastName} value={fields.lastName} onChange={set('lastName')} />
                </div>
              </div>
              <div className="cf-row">
                <div className="fg">
                  <label htmlFor="contact-email" style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span>Email *</span><CharCount value={fields.email} max={LIMITS.email} />
                  </label>
                  <input id="contact-email" name="email" type="email" placeholder="you@example.com" aria-required="true" required maxLength={LIMITS.email} value={fields.email} onChange={set('email')} />
                </div>
                <div className="fg">
                  <label htmlFor="contact-phone" style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span>Phone</span><CharCount value={fields.phone} max={LIMITS.phone} />
                  </label>
                  <input id="contact-phone" name="phone" type="tel" placeholder="+1 (000) 000-0000" maxLength={LIMITS.phone} value={fields.phone} onChange={set('phone')} />
                </div>
              </div>
              <div className="fg">
                <label htmlFor="contact-service">Service of Interest</label>
                <select id="contact-service" name="service"><option value="">Select a service...</option><option>IT Consulting / Projects</option><option>IT Recruitment / Staff Augmentation</option><option>Managed Services</option><option>Health Services / Nursing Staffing</option><option>Cloud Services</option><option>Cyber Security</option><option>Other</option></select>
              </div>
              <div className="fg">
                <label htmlFor="contact-message" style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>Message *</span><CharCount value={fields.message} max={LIMITS.message} />
                </label>
                <textarea id="contact-message" name="message" placeholder="Tell us about your project or requirements..." required maxLength={LIMITS.message} value={fields.message} onChange={set('message')} />
              </div>
              {error && <p style={{ color: '#e74c3c', marginBottom: '1rem', fontSize: '0.9rem' }}>{error}</p>}
              <button type="submit" className="btn-fill" disabled={submitting} style={{ opacity: submitting ? 0.6 : 1, cursor: submitting ? 'not-allowed' : 'pointer' }}>{submitting ? 'Sending…' : 'Send Message'}</button>
              <p style={{ fontSize: '0.72rem', color: 'var(--fog)', marginTop: '1rem' }}>
                This site is protected by reCAPTCHA and the Google <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--fog)', textDecoration: 'underline' }}>Privacy Policy</a> and <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--fog)', textDecoration: 'underline' }}>Terms of Service</a> apply.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
