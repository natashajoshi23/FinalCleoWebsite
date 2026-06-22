'use client'
import { useRef } from 'react'

export default function CardTilt({ children, className = '', style = {} }) {
  const ref = useRef(null)

  const onMove = (e) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    el.style.transform = `perspective(800px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg) scale(1.02)`
  }

  const onLeave = () => {
    if (ref.current) ref.current.style.transform = 'perspective(800px) rotateY(0) rotateX(0) scale(1)'
  }

  return (
    <div ref={ref} className={`tilt-card ${className}`} style={style} onMouseMove={onMove} onMouseLeave={onLeave}>
      {children}
    </div>
  )
}
