'use client'
import { useTheme } from './ThemeContext'

export default function PageBanner({ eyebrow, title, num, bgImage, bgPosition = 'center center', bgScale = 1, bgOpacity = 0.35 }) {
  const { isDark } = useTheme()
  const overlay = isDark
    ? 'linear-gradient(135deg, rgba(0,18,41,0.6), rgba(0,18,41,0.3))'
    : 'linear-gradient(135deg, rgba(0,18,41,0.25), rgba(0,18,41,0.1))'

  return (
    <div className="inner-banner" style={{ position: 'relative', overflow: 'hidden' }}>
      {bgImage && (
        <>
          <img src={bgImage} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: bgPosition, opacity: bgOpacity, filter: 'sepia(15%) saturate(110%)', transform: `scale(${bgScale})`, transformOrigin: 'center center' }} />
          <div style={{ position: 'absolute', inset: 0, background: overlay, pointerEvents: 'none' }} />
        </>
      )}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <div className="banner-ghost">{num || ''}</div>
        <div className="banner-eyebrow">{eyebrow}</div>
        <h1 className="banner-h1" dangerouslySetInnerHTML={{ __html: title }} />
      </div>
    </div>
  )
}
