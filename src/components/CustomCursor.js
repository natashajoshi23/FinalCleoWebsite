'use client'
import { useEffect, useRef, useState } from 'react'

export default function CustomCursor() {
  const curRef = useRef(null)
  const [pressing, setPressing] = useState(false)

  useEffect(() => {
    const el = curRef.current
    if (!el) return
    let mx = 0, my = 0, rx = 0, ry = 0

    const onMove = (e) => { mx = e.clientX; my = e.clientY }
    const onDown = () => setPressing(true)
    const onUp = () => setTimeout(() => setPressing(false), 250)

    document.addEventListener('mousemove', onMove)
    document.addEventListener('mousedown', onDown)
    document.addEventListener('mouseup', onUp)

    const loop = () => {
      rx += (mx - rx) * 0.14
      ry += (my - ry) * 0.14
      el.style.transform = `translate(${rx}px,${ry}px)`
      requestAnimationFrame(loop)
    }
    loop()

    return () => {
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mousedown', onDown)
      document.removeEventListener('mouseup', onUp)
    }
  }, [])

  const gold = '#C8991F'
  const goldLight = '#DBA82A'
  const fillBase = pressing ? 'rgba(200,153,31,0.55)' : 'rgba(200,153,31,0.2)'
  const fillHighlight = pressing ? 'rgba(219,168,42,0.7)' : 'rgba(200,153,31,0.35)'

  return (
    <div
      id="cleo-cursor"
      ref={curRef}
      style={pressing ? { filter: 'drop-shadow(0 0 10px rgba(200,153,31,0.6))' } : {}}
    >
      <svg viewBox="0 0 44 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Main pad — heart/shield shape */}
        <path
          d="M22 46c-2 0-14-4-14-14 0-5 2.5-8 6-10 2.5-1.5 5-2 8-2s5.5.5 8 2c3.5 2 6 5 6 10 0 10-12 14-14 14z"
          fill={fillBase}
          stroke={gold}
          strokeWidth="1.2"
          style={{ transition: 'fill 0.15s' }}
        />
        {/* Inner pad highlight */}
        <path
          d="M22 42c-1.5 0-10-3-10-10.5 0-3.5 2-6 4.5-7.5 2-1 3.5-1.5 5.5-1.5s3.5.5 5.5 1.5c2.5 1.5 4.5 4 4.5 7.5 0 7.5-8.5 10.5-10 10.5z"
          fill={fillHighlight}
          style={{ transition: 'fill 0.15s' }}
        />

        {/* Toe 1 — far left */}
        <ellipse cx="8" cy="16" rx="5" ry="6.5" transform="rotate(-20 8 16)"
          fill={fillBase} stroke={gold} strokeWidth="1.1"
          style={{ transition: 'fill 0.15s' }}
        />
        <ellipse cx="8" cy="15.5" rx="3" ry="4" transform="rotate(-20 8 15.5)"
          fill={fillHighlight} style={{ transition: 'fill 0.15s' }}
        />

        {/* Toe 2 — inner left */}
        <ellipse cx="18" cy="10" rx="4.8" ry="6.5" transform="rotate(-5 18 10)"
          fill={fillBase} stroke={gold} strokeWidth="1.1"
          style={{ transition: 'fill 0.15s' }}
        />
        <ellipse cx="18" cy="9.5" rx="2.8" ry="4" transform="rotate(-5 18 9.5)"
          fill={fillHighlight} style={{ transition: 'fill 0.15s' }}
        />

        {/* Toe 3 — inner right */}
        <ellipse cx="28" cy="10.5" rx="4.8" ry="6.5" transform="rotate(5 28 10.5)"
          fill={fillBase} stroke={gold} strokeWidth="1.1"
          style={{ transition: 'fill 0.15s' }}
        />
        <ellipse cx="28" cy="10" rx="2.8" ry="4" transform="rotate(5 28 10)"
          fill={fillHighlight} style={{ transition: 'fill 0.15s' }}
        />

        {/* Toe 4 — far right */}
        <ellipse cx="36.5" cy="17" rx="5" ry="6.5" transform="rotate(20 36.5 17)"
          fill={fillBase} stroke={gold} strokeWidth="1.1"
          style={{ transition: 'fill 0.15s' }}
        />
        <ellipse cx="36.5" cy="16.5" rx="3" ry="4" transform="rotate(20 36.5 16.5)"
          fill={fillHighlight} style={{ transition: 'fill 0.15s' }}
        />

        {/* Press ripple */}
        {pressing && (
          <circle cx="22" cy="26" r="20" stroke="rgba(200,153,31,0.35)" strokeWidth="0.8" fill="none"
            style={{ animation: 'pawRipple 0.4s ease-out forwards' }}
          />
        )}
      </svg>
    </div>
  )
}
