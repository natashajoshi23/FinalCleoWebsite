'use client'
import { useEffect, useState } from 'react'

export default function ScrollProgress() {
  const [width, setWidth] = useState(0)

  useEffect(() => {
    const el = document.getElementById('scroll-wrap') || window
    const onScroll = () => {
      const scrollTop = el.scrollTop ?? window.scrollY
      const scrollHeight = (el.scrollHeight ?? document.documentElement.scrollHeight) - (el.clientHeight ?? window.innerHeight)
      setWidth(scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0)
    }
    el.addEventListener('scroll', onScroll)
    return () => el.removeEventListener('scroll', onScroll)
  }, [])

  return <div className="scroll-progress" style={{ width: `${width}%` }} />
}
