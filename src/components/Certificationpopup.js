'use client'
import { useState, useEffect } from 'react'

const slides = [
  { img: '/images/gptw-badge.webp', alt: 'Great Place to Work Certified 2025' },
  { img: '/images/gptw-2.webp', alt: 'Great Place to Work Certification Details' },
  { img: '/images/gptw-3.webp', alt: 'Great Place to Work Team Recognition' },
]

export default function CertificationPopup() {
  const [show, setShow] = useState(false)
  const [showBadge, setShowBadge] = useState(false)
  const [current, setCurrent] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const [isSmall, setIsSmall] = useState(false)
  const [isMedium, setIsMedium] = useState(false)

  useEffect(() => {
    const check = () => {
      setIsMobile(window.innerWidth <= 900)
      setIsSmall(window.innerWidth <= 600)
      setIsMedium(window.innerWidth <= 1300)
    }
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  useEffect(() => {
    const seen = sessionStorage.getItem('gptw-seen')
    if (seen) {
      setShowBadge(true)
    } else {
      const timer = setTimeout(() => setShow(true), 4000)
      return () => clearTimeout(timer)
    }
  }, [])

  const close = () => {
    setShow(false)
    setShowBadge(true)
    sessionStorage.setItem('gptw-seen', '1')
  }

  const next = () => setCurrent(c => (c + 1) % slides.length)

  const arrowStyle = {
    background: 'rgba(255,255,255,0.1)',
    border: '1px solid rgba(255,255,255,0.3)',
    color: '#fff',
    fontSize: isMobile ? '1.2rem' : '1.5rem',
    cursor: 'pointer',
    width: isMobile ? '36px' : '48px',
    height: isMobile ? '36px' : '48px',
    minHeight: 'unset',
    minWidth: 'unset',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'background 0.2s',
    flexShrink: 0,
  }

  const siteUrl = 'https://www.greatplacetowork.com/certified-company/7090232'

  return (
    <>
      {show && (
        <div
          onClick={close}
          style={{
            position: 'fixed', inset: 0, zIndex: 9999,
            background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(4px)',
            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
            animation: 'fadeIn 0.3s ease',
          }}
        >
          <div
            onClick={function(e) { e.stopPropagation() }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: isMobile ? '0.5rem' : '1.5rem',
              animation: 'popUp 0.3s ease',
              padding: isMobile ? '0 1.25rem' : '0',
              marginTop: isMobile ? '0' : '80px',
              maxWidth: '100vw',
              boxSizing: 'border-box',
            }}
          >
            {!isMobile && (current === slides.length - 1 ? (
              <button
                onClick={function() { setCurrent(0) }}
                aria-label="Back to first slide"
                style={arrowStyle}
                onMouseOver={function(e) { e.currentTarget.style.background = 'rgba(255,255,255,0.25)' }}
                onMouseOut={function(e) { e.currentTarget.style.background = 'rgba(255,255,255,0.1)' }}
              >{'‹'}</button>
            ) : (
              <div style={{ width: '48px', flexShrink: 0 }} />
            ))}

            <div style={{ position: 'relative' }}>
              <button
                onClick={close}
                style={{
                  position: 'absolute', top: '10px', right: '10px', zIndex: 10,
                  width: '36px', height: '36px', minHeight: 'unset', minWidth: 'unset', borderRadius: '50%',
                  background: 'rgba(0,0,0,0.6)', border: '1px solid rgba(255,255,255,0.3)',
                  color: '#fff', fontSize: '1.2rem', cursor: 'pointer',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}
                onMouseOver={function(e) { e.currentTarget.style.background = 'rgba(0,0,0,0.9)' }}
                onMouseOut={function(e) { e.currentTarget.style.background = 'rgba(0,0,0,0.6)' }}
              >{'x'}</button>

              {isMobile && current === slides.length - 1 && (
                <button
                  onClick={function() { setCurrent(0) }}
                  aria-label="Back to first slide"
                  style={{ ...arrowStyle, position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', zIndex: 10 }}
                  onMouseOver={function(e) { e.currentTarget.style.background = 'rgba(255,255,255,0.25)' }}
                  onMouseOut={function(e) { e.currentTarget.style.background = 'rgba(255,255,255,0.1)' }}
                >{'‹'}</button>
              )}
              {isMobile && current < slides.length - 1 && (
                <button
                  onClick={next}
                  aria-label="Next slide"
                  style={{ ...arrowStyle, position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', zIndex: 10 }}
                  onMouseOver={function(e) { e.currentTarget.style.background = 'rgba(255,255,255,0.25)' }}
                  onMouseOut={function(e) { e.currentTarget.style.background = 'rgba(255,255,255,0.1)' }}
                >{'›'}</button>
              )}

              <a href={siteUrl} target="_blank" rel="noopener noreferrer">
                <img
                  src={slides[current].img}
                  alt={slides[current].alt}
                  style={{
                    height: 'auto',
                    width: isMobile ? 'calc(100vw - 2.5rem)' : 'auto',
                    maxHeight: isMobile ? '70vh' : '65vh',
                    maxWidth: isMobile ? 'none' : 'min(calc(100vw - 160px), 760px)',
                    display: 'block',
                    filter: 'drop-shadow(0 8px 30px rgba(0,0,0,0.4))',
                  }}
                />
              </a>
            </div>

            {!isMobile && (current < slides.length - 1 ? (
              <button
                onClick={next}
                aria-label="Next slide"
                style={arrowStyle}
                onMouseOver={function(e) { e.currentTarget.style.background = 'rgba(255,255,255,0.25)' }}
                onMouseOut={function(e) { e.currentTarget.style.background = 'rgba(255,255,255,0.1)' }}
              >{'›'}</button>
            ) : (
              <div style={{ width: '48px', flexShrink: 0 }} />
            ))}
          </div>

          <div
            onClick={function(e) { e.stopPropagation() }}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', marginTop: '1.25rem' }}
          >
            <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
              {slides.map(function(_, i) {
                return (
                  <button
                    key={i}
                    onClick={function() { setCurrent(i) }}
                    aria-label={'Go to slide ' + (i + 1)}
                    style={{
                      width: i === current ? '10px' : '8px',
                      height: i === current ? '10px' : '8px',
                      borderRadius: '50%',
                      border: 'none',
                      cursor: 'pointer',
                      background: i === current ? 'var(--gold)' : 'rgba(255,255,255,0.4)',
                      transition: 'all 0.3s',
                      padding: 0,
                      minHeight: 'unset',
                      minWidth: 'unset',
                      flexShrink: 0,
                    }}
                  />
                )
              })}
            </div>
            <a
              href={siteUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: 'rgba(255,255,255,0.8)', textDecoration: 'none',
                fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase',
              }}
              onMouseOver={function(e) { e.currentTarget.style.color = '#fff' }}
              onMouseOut={function(e) { e.currentTarget.style.color = 'rgba(255,255,255,0.8)' }}
            >{'Learn More →'}</a>
          </div>
        </div>
      )}

      {showBadge && !show && (
        <a
          href={siteUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            position: 'fixed',
            bottom: isMobile ? '0.75rem' : '1.5rem',
            left: isMobile ? '0.75rem' : '1.5rem',
            zIndex: 900,
            transition: 'transform 0.3s, opacity 0.3s',
            animation: 'fadeIn 0.4s ease',
          }}
          onMouseOver={function(e) { e.currentTarget.style.transform = 'scale(1.08)' }}
          onMouseOut={function(e) { e.currentTarget.style.transform = 'scale(1)' }}
        >
          <img
            src="/images/gptw.webp"
            alt="Great Place to Work Certified 2025"
            style={{
              height: isMobile ? '130px' : '170px',
              width: 'auto',
              display: 'block',
              filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.3))',
            }}
          />
        </a>
      )}
    </>
  )
}