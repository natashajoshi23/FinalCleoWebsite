'use client'
import { useState, useEffect } from 'react'
import PageBanner from '@/components/PageBanner'
import { client } from '@/sanity/client'
import { urlFor } from '@/sanity/lib/image'

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

const fallbackOffices = [
  { country: 'USA', city: 'New York', lines: '1879 Whitehaven Road, Suite C\nGrand Island, NY 14072', phone: '+1 866-390-6604', email: 'usa@cleoconsult.com', imageUrl: null },
  { country: 'Canada', city: 'Ontario', lines: '3390 South Service Rd, Suite 301 #24\nBurlington, ON L7N 3J5', phone: '+1 866-390-6604', email: 'canada@cleoconsult.com', imageUrl: null },
  { country: 'India', city: 'Karnataka', lines: '#21178, Tower-21, Prestige Shantiniketan\nWhitefield Main Road, Bangalore 560048', phone: '+91 80 4333-3655', email: 'india@cleoconsult.com', imageUrl: null },
]
export default function Contact() {
  const [offices, setOffices] = useState(fallbackOffices)
  const [sent, setSent] = useState(false)

  useEffect(() => {
    client.fetch(
      `*[_type == "officeLocation"] | order(order asc) { _id, country, city, addressLine1, addressLine2, phone, email, image }`
    ).then(data => {
      if (data && data.length > 0) {
        setOffices(data.map(o => ({
          country: o.country,
          city: o.city,
          lines: [o.addressLine1, o.addressLine2].filter(Boolean).join('\n'),
          phone: o.phone,
          email: o.email,
          imageUrl: o.image ? urlFor(o.image).width(800).height(380).fit('crop').auto('format').url() : null,
        })))
      }
    }).catch(() => {})
  }, [])
  const [fields, setFields] = useState({ firstName: '', lastName: '', email: '', phone: '', message: '' })
  const set = (k) => (e) => setFields(f => ({ ...f, [k]: e.target.value.slice(0, LIMITS[k]) }))
  return (
    <div className="contact-page">
      {/* Mobile-only: stack the USA/Canada office grid into a single column */}
      <style jsx global>{`
        @media (max-width: 640px) {
          .offices-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
        }
      `}</style>

      <PageBanner eyebrow="Reach Out" title="LET'S<br>TALK" num="08" bgImage="/images/conference-room.webp" />
      <div className="pg-body" style={{ paddingTop: '1rem' }}>
        <h2 style={{ fontFamily: 'var(--display)', fontSize: '2rem', color: 'var(--paper)', letterSpacing: '0.04em', marginBottom: '-2rem' }}>OUR OFFICES</h2>
        {/* First two offices in a 2-column grid */}
        {offices.length >= 2 && (
          <div className="offices-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '2.5rem', background: 'transparent' }}>
            {offices.slice(0, 2).map(({ country, city, lines, phone, email, imageUrl }, i) => {
              const fallbackImgs = [
                { src: '/images/office-ny.webp', alt: 'Cleo Consulting New York headquarters office building', pos: 'center center' },
                { src: '/images/office-ontario.webp', alt: 'Cleo Consulting Ontario headquarters office building', pos: '20% center' },
              ]
              const imgSrc = imageUrl || fallbackImgs[i].src
              const imgAlt = fallbackImgs[i].alt
              return (
                <div key={city}>
                  <div style={{ height: '380px', overflow: 'hidden', borderRadius: '2px', position: 'relative' }}>
                    <img src={imgSrc} alt={imgAlt} className="img-cover" style={{ objectPosition: 'center center' }} />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 55%)' }} />
                    <div style={{ position: 'absolute', bottom: '1.25rem', left: '1.25rem' }}>
                      <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)' }}>{country}</div>
                      <div style={{ fontFamily: 'var(--serif)', fontSize: '1.2rem', fontWeight: 700, color: '#fff' }}>{city}</div>
                    </div>
                  </div>
                  <div style={{ marginTop: '1rem', color: 'var(--paper)', fontSize: '0.9rem', lineHeight: 1.7, borderTop: '1px solid rgba(255,255,255,0.15)', paddingTop: '1rem', background: 'transparent' }}>
                    {lines.split('\n').map((l, j) => <div key={j}>{l}</div>)}
                    <a href={`tel:${phone.replace(/\s/g, '')}`} style={{ color: 'var(--paper)' }} aria-label={`Call ${city} office at ${phone}`}>{phone}</a><br />
                    <a href={`mailto:${email}`} style={{ color: 'var(--gold)' }} aria-label={`Email ${city} office at ${email}`}>{email}</a>
                  </div>
                </div>
              )
            })}
          </div>
        )}
        {/* Remaining offices (India etc.) centred below the grid */}
        {offices.slice(2).map(({ country, city, lines, phone, email, imageUrl }) => (
          <div key={city} style={{ marginTop: '1rem' }}>
            <div style={{ height: '380px', overflow: 'hidden', borderRadius: '2px', position: 'relative', maxWidth: '600px', margin: '0 auto' }} className="india-office-img">
              <img src={imageUrl || '/images/office-bangalore.webp'} alt={`Cleo Consulting ${city} office building`} className="img-cover" style={{ objectPosition: 'center center' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 55%)' }} />
              <div style={{ position: 'absolute', bottom: '1.25rem', left: '1.25rem' }}>
                <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)' }}>{country}</div>
                <div style={{ fontFamily: 'var(--serif)', fontSize: '1.2rem', fontWeight: 700, color: '#fff' }}>{city}</div>
              </div>
            </div>
            <div className="india-office-text" style={{ maxWidth: '600px', margin: '1rem auto 0', color: 'var(--paper)', fontSize: '0.9rem', lineHeight: 1.7, borderTop: '1px solid rgba(255,255,255,0.15)', paddingTop: '1rem', textAlign: 'center' }}>
              <div>{lines.split('\n').map((l, i) => <span key={i}>{l}<br /></span>)}</div>
              <a href={`tel:${phone.replace(/\s/g, '')}`} style={{ color: 'var(--paper)' }} aria-label={`Call ${city} office at ${phone}`}>{phone}</a><br />
              <a href={`mailto:${email}`} style={{ color: 'var(--gold)' }} aria-label={`Email ${city} office at ${email}`}>{email}</a>
            </div>
          </div>
        ))}
        <div className="contact-form-sec">
          <div className="cf-title" id="contact-form-heading">SEND A MESSAGE</div>
          <div className="cf-sub">Fill out the form and we&rsquo;ll get back to you promptly.</div>
          {sent ? (
            <div style={{ background: 'rgba(200,153,31,0.1)', border: '1px solid var(--gold)', padding: '1.5rem', color: 'var(--paper)', fontWeight: 600 }} role="alert">Thank you! We will be in touch shortly.</div>
          ) : (
            <form onSubmit={async e => {
              e.preventDefault()
              const data = new FormData(e.target)
              await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                  firstName: fields.firstName,
                  lastName:  fields.lastName,
                  email:     fields.email,
                  phone:     fields.phone,
                  service:   data.get('service'),
                  message:   fields.message,
                })
              })
              setSent(true)
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
              <button type="submit" className="btn-fill">Send Message</button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}