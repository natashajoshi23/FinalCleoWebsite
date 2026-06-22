'use client'
import { useEffect, useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'

export default function ZoomTransition({ children }) {
  const router = useRouter()
  const pathname = usePathname()
  const [stamp, setStamp] = useState(null)
  const [entering, setEntering] = useState(true)

  // Reveal animation on page load
  useEffect(() => {
    setEntering(true)
    const t = setTimeout(() => setEntering(false), 700)
    return () => clearTimeout(t)
  }, [pathname])

  // Intercept link clicks
  useEffect(() => {
    const handleClick = (e) => {
      const anchor = e.target.closest('a[href]')
      if (!anchor) return
      const href = anchor.getAttribute('href')
      if (!href || href.startsWith('http') || href.startsWith('mailto') || href.startsWith('tel') || href === '#') return
      if (href === pathname) return

      e.preventDefault()
      e.stopPropagation()

      setStamp({ x: e.clientX, y: e.clientY })
      document.body.style.overflow = 'hidden'

      setTimeout(() => {
        document.body.style.overflow = ''
        router.push(href)
        window.scrollTo(0, 0)
        setStamp(null)
      }, 650)
    }

    document.addEventListener('click', handleClick, true)
    return () => document.removeEventListener('click', handleClick, true)
  }, [router, pathname])

  const pawSvg = `url("data:image/svg+xml,%3Csvg viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cellipse cx='60' cy='78' rx='24' ry='21' fill='%23001229'/%3E%3Cellipse cx='32' cy='48' rx='12' ry='14' transform='rotate(-15 32 48)' fill='%23001229'/%3E%3Cellipse cx='54' cy='38' rx='11' ry='13' fill='%23001229'/%3E%3Cellipse cx='78' cy='40' rx='11' ry='13' transform='rotate(5 78 40)' fill='%23001229'/%3E%3Cellipse cx='96' cy='52' rx='11' ry='13' transform='rotate(20 96 52)' fill='%23001229'/%3E%3C/svg%3E")`

  return (
    <>
      {children}

      {/* PAW STAMP EXIT */}
      {stamp && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 10000, pointerEvents: 'all' }}>
          {/* Navy background fill */}
          <div style={{
            position: 'absolute', inset: 0,
            background: '#001229',
            animation: 'pawBgFill 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards',
          }} />

          {/* Gold paw stamp */}
          <div style={{
            position: 'absolute',
            left: stamp.x,
            top: stamp.y,
            transform: 'translate(-50%, -50%)',
            animation: 'pawStamp 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards',
          }}>
            <svg viewBox="0 0 44 48" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
              <path d="M22 46c-2 0-14-4-14-14 0-5 2.5-8 6-10 2.5-1.5 5-2 8-2s5.5.5 8 2c3.5 2 6 5 6 10 0 10-12 14-14 14z" fill="#C8991F" />
              <path d="M22 42c-1.5 0-10-3-10-10.5 0-3.5 2-6 4.5-7.5 2-1 3.5-1.5 5.5-1.5s3.5.5 5.5 1.5c2.5 1.5 4.5 4 4.5 7.5 0 7.5-8.5 10.5-10 10.5z" fill="#DBA82A" />
              <ellipse cx="8" cy="16" rx="5" ry="6.5" transform="rotate(-20 8 16)" fill="#C8991F" />
              <ellipse cx="8" cy="15.5" rx="3" ry="4" transform="rotate(-20 8 15.5)" fill="#DBA82A" />
              <ellipse cx="18" cy="10" rx="4.8" ry="6.5" transform="rotate(-5 18 10)" fill="#C8991F" />
              <ellipse cx="18" cy="9.5" rx="2.8" ry="4" transform="rotate(-5 18 9.5)" fill="#DBA82A" />
              <ellipse cx="28" cy="10.5" rx="4.8" ry="6.5" transform="rotate(5 28 10.5)" fill="#C8991F" />
              <ellipse cx="28" cy="10" rx="2.8" ry="4" transform="rotate(5 28 10)" fill="#DBA82A" />
              <ellipse cx="36.5" cy="17" rx="5" ry="6.5" transform="rotate(20 36.5 17)" fill="#C8991F" />
              <ellipse cx="36.5" cy="16.5" rx="3" ry="4" transform="rotate(20 36.5 16.5)" fill="#DBA82A" />
            </svg>
          </div>

          {/* Impact ripple */}
          <div style={{
            position: 'absolute',
            left: stamp.x,
            top: stamp.y,
            width: 0, height: 0,
            borderRadius: '50%',
            border: '2px solid rgba(200,153,31,0.3)',
            transform: 'translate(-50%, -50%)',
            animation: 'pawRippleOut 0.6s ease-out forwards',
          }} />
        </div>
      )}

      {/* ENTER REVEAL */}
      {entering && (
        <div style={{
          position: 'fixed', inset: 0, zIndex: 10000, pointerEvents: 'none',
          background: '#001229',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          animation: 'pawReveal 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
          animationDelay: '0.1s',
          animationFillMode: 'forwards',
        }}>
          {/* Fading paw during reveal */}
          <svg viewBox="0 0 44 48" fill="none" xmlns="http://www.w3.org/2000/svg"
            style={{ width: '80px', height: '80px', animation: 'pawFadeOut 0.4s 0.15s ease-out forwards', opacity: 1 }}>
            <path d="M22 46c-2 0-14-4-14-14 0-5 2.5-8 6-10 2.5-1.5 5-2 8-2s5.5.5 8 2c3.5 2 6 5 6 10 0 10-12 14-14 14z" fill="#C8991F" />
            <path d="M22 42c-1.5 0-10-3-10-10.5 0-3.5 2-6 4.5-7.5 2-1 3.5-1.5 5.5-1.5s3.5.5 5.5 1.5c2.5 1.5 4.5 4 4.5 7.5 0 7.5-8.5 10.5-10 10.5z" fill="#DBA82A" />
            <ellipse cx="8" cy="16" rx="5" ry="6.5" transform="rotate(-20 8 16)" fill="#C8991F" />
            <ellipse cx="8" cy="15.5" rx="3" ry="4" transform="rotate(-20 8 15.5)" fill="#DBA82A" />
            <ellipse cx="18" cy="10" rx="4.8" ry="6.5" transform="rotate(-5 18 10)" fill="#C8991F" />
            <ellipse cx="18" cy="9.5" rx="2.8" ry="4" transform="rotate(-5 18 9.5)" fill="#DBA82A" />
            <ellipse cx="28" cy="10.5" rx="4.8" ry="6.5" transform="rotate(5 28 10.5)" fill="#C8991F" />
            <ellipse cx="28" cy="10" rx="2.8" ry="4" transform="rotate(5 28 10)" fill="#DBA82A" />
            <ellipse cx="36.5" cy="17" rx="5" ry="6.5" transform="rotate(20 36.5 17)" fill="#C8991F" />
            <ellipse cx="36.5" cy="16.5" rx="3" ry="4" transform="rotate(20 36.5 16.5)" fill="#DBA82A" />
          </svg>
        </div>
      )}

      <style>{`
        @keyframes pawStamp {
          0% { width: 30px; height: 30px; opacity: 0; }
          30% { opacity: 1; }
          50% { width: 100px; height: 100px; opacity: 1; }
          100% { width: 160px; height: 160px; opacity: 0.6; }
        }
        @keyframes pawBgFill {
          0% { opacity: 0; }
          40% { opacity: 0.3; }
          100% { opacity: 1; }
        }
        @keyframes pawRippleOut {
          0% { width: 0; height: 0; opacity: 1; }
          100% { width: 400px; height: 400px; opacity: 0; }
        }
        @keyframes pawReveal {
          0% { opacity: 1; }
          100% { opacity: 0; pointer-events: none; }
        }
        @keyframes pawFadeOut {
          0% { opacity: 1; transform: scale(1); }
          100% { opacity: 0; transform: scale(0.8); }
        }
      `}</style>
    </>
  )
}
