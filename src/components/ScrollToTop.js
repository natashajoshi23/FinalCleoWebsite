'use client'
import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function ScrollToTop() {
  const pathname = usePathname()
  useEffect(() => {
    const wrap = document.getElementById('scroll-wrap')
    if (wrap) wrap.scrollTop = 0
    else window.scrollTo(0, 0)
  }, [pathname])
  return null
}
