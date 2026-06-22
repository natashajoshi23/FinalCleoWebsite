'use client'
import { useEffect, useRef } from 'react'

export default function StaggerReveal({ children, className = '' }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const items = el.querySelectorAll('.stagger-item')
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        items.forEach(item => item.classList.add('vis'))
      }
    }, { threshold: 0.15 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return <div ref={ref} className={className}>{children}</div>
}
