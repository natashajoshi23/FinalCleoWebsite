'use client'
import { useState, useEffect } from 'react'

export default function RebrandPopup() {
  const [show, setShow] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 900)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  useEffect(() => {
    if (window.location.pathname.startsWith('/studio')) return
    const seen = sessionStorage.getItem('rebrand-seen')
    if (!seen) {
      const timer = setTimeout(() => setShow(true), 150)
      return () => clearTimeout(timer)
    }
  }, [])

  const close = () => {
    setShow(false)
    sessionStorage.setItem('rebrand-seen', '1')
  }

  if (!show) return null

  return (
    <div
      onClick={close}
      style={{
        position: 'fixed', inset: 0, zIndex: 10000,
        background: 'rgba(0,0,0,0.65)', backdropFilter: 'blur(4px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        animation: 'fadeIn 0.3s ease',
        padding: isMobile ? '1rem' : '0',
      }}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={{
          position: 'relative',
          maxWidth: isMobile ? '96%' : '720px',
          width: '100%',
          animation: 'popUp 0.35s ease',
          marginTop: isMobile ? '0' : '60px',
        }}
      >
        <button
          onClick={close}
          style={{
            position: 'absolute', top: '10px', right: '10px', zIndex: 10,
            width: '36px', height: '36px', minHeight: 'unset', minWidth: 'unset',
            borderRadius: '50%', background: 'rgba(0,0,0,0.6)',
            border: '1px solid rgba(255,255,255,0.3)', color: '#fff',
            fontSize: '1.1rem', cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}
        >✕</button>
        <img
          src="/images/oldtonew.webp"
          alt="Cleo Consulting — Same company, new look"
          style={{
            width: '100%',
            height: 'auto',
            maxHeight: isMobile ? '75vh' : '65vh',
            objectFit: 'contain',
            display: 'block',
            borderRadius: '8px',
            filter: 'drop-shadow(0 12px 40px rgba(0,0,0,0.5))',
          }}
        />
        <p style={{
          textAlign: 'center', color: 'rgba(255,255,255,0.7)',
          fontSize: '0.8rem', letterSpacing: '0.12em', textTransform: 'uppercase',
          marginTop: '1rem',
        }}>
          Same company · Fresh new look
        </p>
      </div>
    </div>
  )
}
