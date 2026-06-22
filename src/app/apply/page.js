'use client'
import { useState, useEffect } from 'react'
import PageBanner from '@/components/PageBanner'

const LIMITS = { name: 100, email: 254, phone: 30, message: 1000 }

function CharCount({ value, max }) {
  const len = (value || '').length
  const near = len >= max * 0.85
  return (
    <span style={{ fontSize: '0.65rem', color: near ? (len >= max ? '#e74c3c' : 'var(--gold)') : 'var(--fog)', marginLeft: 'auto' }}>
      {len}/{max}
    </span>
  )
}
import { client } from '@/sanity/lib/client'
import { PortableText } from '@portabletext/react'

export default function ApplyPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', position: '', experience: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [fileName, setFileName] = useState('')
  const [errors, setErrors] = useState({})
  const [jobs, setJobs] = useState([])
  const [selectedJob, setSelectedJob] = useState(null)

  useEffect(() => {
    client.fetch(`*[_type == "job" && isOpen == true] | order(postedAt desc) {
      _id, jobId, title, department, location, type, description, isOpen, postedAt
    }`).then(data => {
      setJobs(data)
    }).catch(err => console.error('Sanity error:', err))
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const newErrors = {}
    if (!form.name) newErrors.name = 'Name is required'
    if (!form.email) newErrors.email = 'Email is required'
    if (!form.position) newErrors.position = 'Please select a position'
    if (!fileName) newErrors.resume = 'Resume is required'
    if (Object.keys(newErrors).length > 0) { setErrors(newErrors); return }
    setErrors({})

    const data = new FormData(e.target)

    try {
      const res = await fetch('/api/apply', {
        method: 'POST',
        body: data,
      })
      if (res.ok) {
        setSubmitted(true)
      } else {
        console.error('Submission failed:', await res.text())
      }
    } catch (err) {
      console.error('Fetch error:', err)
    }
  }

  const scrollToForm = (jobTitle, jobId) => {
    setForm(f => ({ ...f, position: `${jobTitle} (${jobId})` }))
    setSelectedJob(null)
    const formEl = document.getElementById('apply-form-section')
    if (formEl) formEl.scrollIntoView({ behavior: 'smooth' })
  }

  const inputStyle = { padding: '0.85rem 1rem', background: 'transparent', border: '1px solid var(--ghost)', color: 'var(--paper)', fontSize: '0.9rem', outline: 'none', transition: 'border 0.2s', width: '100%' }
  const selectStyle = { ...inputStyle, paddingRight: '2.25rem' }
  const errorStyle = { color: '#e74c3c', fontSize: '0.7rem', marginTop: '0.25rem' }

  return (
    <>
      {/* Scoped fix: prevent native select text from colliding with the browser's built-in dropdown arrow on mobile */}
      <style jsx global>{`
        @media (max-width: 640px) {
          .apply-select {
            font-size: 0.8rem;
            padding-right: 2.25rem !important;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
          }
          .apply-select option {
            font-size: 0.9rem;
          }
        }
      `}</style>

      <PageBanner eyebrow="Careers" title="APPLY<br>NOW" num="09" bgImage="/images/handshake.webp" />
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '4rem 2rem 5rem' }}>

        {/* Intro bar */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '3rem', paddingBottom: '2rem', borderBottom: '1px solid var(--ghost)', textAlign: 'center' }}>
          <div style={{ maxWidth: '700px', margin: '0 auto' }}>
            <h2 style={{ fontFamily: 'var(--serif)', fontSize: '1.8rem', fontWeight: 700, color: 'var(--paper)', lineHeight: 1.3 }}>Join the Cleo <span style={{ color: 'var(--gold)', fontStyle: 'italic' }}>Network</span></h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--fog)', lineHeight: 1.85, marginTop: '0.75rem', marginLeft: 'auto', marginRight: 'auto' }}>Whether you are seeking a permanent role, contract opportunity, or project-based engagement, Cleo Consulting connects top-tier talent with industry-leading organizations across the USA, Canada, and India.</p>
          </div>
        </div>

        {/* Job Listings */}
        <div style={{ marginBottom: '4rem' }}>
          <div style={{ fontFamily: 'var(--display)', fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '0.5rem' }}>Opportunities</div>
          <h3 style={{ fontFamily: 'var(--display)', fontSize: '1.8rem', color: 'var(--paper)', letterSpacing: '0.04em', marginBottom: '2rem' }}>OPEN POSITIONS</h3>

          {jobs.length === 0 ? (
            <div style={{ padding: '3rem', border: '1px solid var(--ghost)', textAlign: 'center', color: 'var(--fog)' }}>
              No open positions at the moment. Check back soon.
            </div>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' }}>
              {jobs.map(job => (
                <div key={job._id}
                  onClick={() => setSelectedJob(job)}
                  style={{ border: '1px solid var(--ghost)', padding: '1.75rem', display: 'flex', flexDirection: 'column', gap: '0.85rem', cursor: 'pointer', transition: 'border-color 0.2s' }}
                  onMouseOver={e => e.currentTarget.style.borderColor = 'var(--gold)'}
                  onMouseOut={e => e.currentTarget.style.borderColor = 'var(--ghost)'}
                >
                  <div style={{ fontSize: '0.65rem', color: 'var(--fog)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                    Posted {job.postedAt ? new Date(job.postedAt).toLocaleDateString('en-CA', { month: 'short', day: 'numeric', year: 'numeric' }) : 'Recently'} · <span style={{ color: 'var(--gold)' }}>{job.jobId}</span>
                  </div>
                  <h4 style={{ fontFamily: 'var(--serif)', fontSize: '1.15rem', fontWeight: 700, color: 'var(--paper)', lineHeight: 1.3, margin: 0 }}>
                    {job.title}
                  </h4>
                  <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                    {job.type && <span style={{ fontSize: '0.6rem', letterSpacing: '0.12em', textTransform: 'uppercase', padding: '0.3rem 0.75rem', border: '1px solid var(--gold)', color: 'var(--gold)' }}>{job.type}</span>}
                    {job.department && <span style={{ fontSize: '0.6rem', letterSpacing: '0.12em', textTransform: 'uppercase', padding: '0.3rem 0.75rem', border: '1px solid var(--ghost)', color: 'var(--fog)' }}>{job.department}</span>}
                  </div>
                  {job.location && (
                    <div style={{ fontSize: '0.8rem', color: 'var(--fog)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <span style={{ color: 'var(--gold)' }}>◎</span> {job.location}
                    </div>
                  )}
                  <div style={{ fontSize: '0.72rem', color: 'var(--gold)', letterSpacing: '0.1em', marginTop: 'auto', paddingTop: '0.5rem' }}>
                    View details →
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Application Form */}
        <div id="apply-form-section" style={{ marginBottom: '4rem', scrollMarginTop: '14rem' }}>
          <div style={{ fontFamily: 'var(--display)', fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '0.5rem' }}>Get Started</div>
          <h3 id="apply-form-heading" style={{ fontFamily: 'var(--display)', fontSize: '1.8rem', color: 'var(--paper)', letterSpacing: '0.04em', marginBottom: '2.5rem' }}>SUBMIT YOUR APPLICATION</h3>

          {submitted ? (
            <div style={{ padding: '3rem', border: '1px solid var(--gold)', textAlign: 'center' }} role="alert">
              <div style={{ fontFamily: 'var(--display)', fontSize: '1.4rem', color: 'var(--gold)', marginBottom: '1rem' }}>APPLICATION RECEIVED</div>
              <p style={{ fontSize: '0.95rem', color: 'var(--fog)', lineHeight: 1.8, maxWidth: '500px', margin: '0 auto' }}>Thank you for your interest in joining the Cleo Consulting network. Our recruitment team will review your profile and reach out if there is a match.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} aria-labelledby="apply-form-heading">
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1.5rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  <label htmlFor="apply-name" style={{ fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--fog)' }}>Full Name <span aria-hidden="true">*</span><span className="sr-only">(required)</span></label>
                  <input id="apply-name" name="name" type="text" required aria-required="true" maxLength={LIMITS.name} value={form.name}
                    onChange={e => { setForm({...form, name: e.target.value.slice(0, LIMITS.name)}); setErrors({...errors, name: ''}) }}
                    style={{ ...inputStyle, borderColor: errors.name ? '#e74c3c' : undefined }}
                    onFocus={e => e.target.style.borderColor = 'var(--gold)'}
                    onBlur={e => e.target.style.borderColor = errors.name ? '#e74c3c' : 'var(--ghost)'}
                  />
                  {errors.name && <span role="alert" style={errorStyle}>{errors.name}</span>}
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  <label htmlFor="apply-email" style={{ fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--fog)' }}>Email Address <span aria-hidden="true">*</span><span className="sr-only">(required)</span></label>
                  <input id="apply-email" name="email" type="email" required aria-required="true" maxLength={LIMITS.email} value={form.email}
                    onChange={e => { setForm({...form, email: e.target.value.slice(0, LIMITS.email)}); setErrors({...errors, email: ''}) }}
                    style={{ ...inputStyle, borderColor: errors.email ? '#e74c3c' : undefined }}
                    onFocus={e => e.target.style.borderColor = 'var(--gold)'}
                    onBlur={e => e.target.style.borderColor = errors.email ? '#e74c3c' : 'var(--ghost)'}
                  />
                  {errors.email && <span role="alert" style={errorStyle}>{errors.email}</span>}
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  <label htmlFor="apply-phone" style={{ fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--fog)' }}>Phone Number</label>
                  <input id="apply-phone" name="phone" type="tel" maxLength={LIMITS.phone} value={form.phone}
                    onChange={e => setForm({...form, phone: e.target.value.slice(0, LIMITS.phone)})}
                    style={inputStyle}
                    onFocus={e => e.target.style.borderColor = 'var(--gold)'}
                    onBlur={e => e.target.style.borderColor = 'var(--ghost)'}
                  />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  <label htmlFor="apply-position" style={{ fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--fog)' }}>Position of Interest <span aria-hidden="true">*</span><span className="sr-only">(required)</span></label>
                  <select id="apply-position" name="position" required aria-required="true" value={form.position}
                    onChange={e => { setForm({...form, position: e.target.value}); setErrors({...errors, position: ''}) }}
                    className="apply-select"
                    style={{ ...selectStyle, cursor: 'pointer', borderColor: errors.position ? '#e74c3c' : undefined}}
                  >
                    <option value="" style={{ background: 'var(--ink)' }}>Select a position</option>
                    {jobs.map(job => (
                      <option key={job._id} value={`${job.title} (${job.jobId})`} style={{ background: 'var(--ink)' }}>
                        {job.title} {job.jobId ? `(${job.jobId})` : ''}
                      </option>
                    ))}
                  </select>
                  {errors.position && <span role="alert" style={errorStyle}>{errors.position}</span>}
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  <label htmlFor="apply-experience" style={{ fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--fog)' }}>Years of Experience</label>
                  <select id="apply-experience" name="experience" value={form.experience}
                    onChange={e => setForm({...form, experience: e.target.value})}
                    className="apply-select"
                    style={{ ...selectStyle, cursor: 'pointer' }}
                  >
                    <option value="" style={{ background: 'var(--ink)' }}>Select</option>
                    <option value="0-2" style={{ background: 'var(--ink)' }}>0 - 2 years</option>
                    <option value="3-5" style={{ background: 'var(--ink)' }}>3 - 5 years</option>
                    <option value="5-10" style={{ background: 'var(--ink)' }}>5 - 10 years</option>
                    <option value="10+" style={{ background: 'var(--ink)' }}>10+ years</option>
                  </select>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  <label htmlFor="apply-resume" style={{ fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--fog)' }}>Upload Resume <span aria-hidden="true">*</span><span className="sr-only">(required)</span></label>
                  <label htmlFor="apply-resume" style={{ ...inputStyle, border: errors.resume ? '1px dashed #e74c3c' : '1px dashed var(--ghost)', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
                    onMouseOver={e => e.currentTarget.style.borderColor = 'var(--gold)'}
                    onMouseOut={e => e.currentTarget.style.borderColor = errors.resume ? '#e74c3c' : 'var(--ghost)'}
                  >
                    <span style={{ color: 'var(--gold)' }}>{'\u2191'}</span> {fileName || 'Choose file (PDF, DOC, DOCX)'}
                    <input id="apply-resume" name="Resume Upload" type="file" accept=".pdf,.doc,.docx" style={{ display: 'none' }} onChange={e => {
                      const file = e.target.files[0]
                      const MAX_FILE_SIZE = 2 * 1024 * 1024 // 2MB — keep in sync with backend limit
                      if (file && file.size > MAX_FILE_SIZE) {
                        setFileName('')
                        e.target.value = ''
                        setErrors({...errors, resume: 'File must be under 2MB.'})
                        return
                      }
                      setFileName(file?.name || '')
                      setErrors({...errors, resume: ''})
                    }} />
                  </label>
                  {errors.resume && <span role="alert" style={errorStyle}>{errors.resume}</span>}
                </div>
                <div style={{ gridColumn: '1 / -1', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  <label htmlFor="apply-message" style={{ fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--fog)', display: 'flex', justifyContent: 'space-between' }}>
                    <span>Additional Information</span><CharCount value={form.message} max={LIMITS.message} />
                  </label>
                  <textarea id="apply-message" name="message" rows={3} maxLength={LIMITS.message} value={form.message}
                    onChange={e => setForm({...form, message: e.target.value.slice(0, LIMITS.message)})}
                    placeholder="Tell us about your background, availability, and what you're looking for..."
                    style={{ ...inputStyle, resize: 'vertical', fontFamily: 'inherit' }}
                    onFocus={e => e.target.style.borderColor = 'var(--gold)'}
                    onBlur={e => e.target.style.borderColor = 'var(--ghost)'}
                  />
                </div>
                <div style={{ gridColumn: '1 / -1' }}>
                  <button type="submit" className="btn-fill" style={{ fontSize: '0.85rem', padding: '1rem 4rem', cursor: 'pointer', border: 'none' }}>SUBMIT APPLICATION</button>
                </div>
              </div>
            </form>
          )}
        </div>

        {/* Job Modal */}
        {selectedJob && (
          <div
            onClick={() => setSelectedJob(null)}
            style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.85)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}
          >
            <div
              onClick={e => e.stopPropagation()}
              style={{ background: 'var(--ink)', border: '1px solid var(--ghost)', maxWidth: '700px', width: '100%', maxHeight: '85vh', overflowY: 'auto', padding: '3rem', position: 'relative' }}
            >
              <button
                onClick={() => setSelectedJob(null)}
                style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', background: 'none', border: 'none', color: 'var(--fog)', fontSize: '1.5rem', cursor: 'pointer', lineHeight: 1 }}
              >×</button>
              <div style={{ fontSize: '0.65rem', color: 'var(--fog)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
                Posted {selectedJob.postedAt ? new Date(selectedJob.postedAt).toLocaleDateString('en-CA', { month: 'short', day: 'numeric', year: 'numeric' }) : 'Recently'}
              </div>
              <h2 style={{ fontFamily: 'var(--serif)', fontSize: '1.8rem', fontWeight: 700, color: 'var(--paper)', lineHeight: 1.2, marginBottom: '0.5rem' }}>
                {selectedJob.title}
              </h2>
              <div style={{ fontSize: '0.65rem', color: 'var(--fog)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1rem' }}>
                Job ID: <span style={{ color: 'var(--gold)' }}>{selectedJob.jobId}</span>
              </div>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
                {selectedJob.type && <span style={{ fontSize: '0.6rem', letterSpacing: '0.12em', textTransform: 'uppercase', padding: '0.3rem 0.75rem', border: '1px solid var(--gold)', color: 'var(--gold)' }}>{selectedJob.type}</span>}
                {selectedJob.department && <span style={{ fontSize: '0.6rem', letterSpacing: '0.12em', textTransform: 'uppercase', padding: '0.3rem 0.75rem', border: '1px solid var(--ghost)', color: 'var(--fog)' }}>{selectedJob.department}</span>}
              </div>
              {selectedJob.location && (
                <div style={{ fontSize: '0.85rem', color: 'var(--fog)', display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '2rem', paddingBottom: '2rem', borderBottom: '1px solid var(--ghost)' }}>
                  <span style={{ color: 'var(--gold)' }}>◎</span> {selectedJob.location}
                </div>
              )}
              {selectedJob.description && (
                <div className="pg-body" style={{ fontSize: '0.9rem', color: 'var(--fog)', lineHeight: 1.85, paddingTop: 0, marginTop: 0, paddingBottom: 0, marginBottom: '4rem' }}>
                  <PortableText value={selectedJob.description} />
                </div>
              )}
              <button
                onClick={() => scrollToForm(selectedJob.title, selectedJob.jobId)}
                className="btn-fill"
                style={{ fontSize: '0.8rem', padding: '1rem 3rem', cursor: 'pointer', border: 'none' }}
              >
                APPLY FOR THIS ROLE
              </button>
            </div>
          </div>
        )}

      </div>
    </>
  )
}