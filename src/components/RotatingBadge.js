'use client'

export default function RotatingBadge({ text = 'CLEO CONSULTING · CLEO CONSULTING · ', img = '/images/puzzle-circle.webp', spacing = '3.2', size = '180', imgSize = '105' }) {
  return (
    <div className="rotating-badge" style={{ width: `${size}px`, height: `${size}px` }}>
      <svg viewBox="0 0 120 120">
        <defs>
          <path id={`cp-${text.length}`} d="M 60,60 m -45,0 a 45,45 0 1,1 90,0 a 45,45 0 1,1 -90,0" fill="none" />
        </defs>
        <text fill="var(--gold)" fontSize="8.5" fontFamily="var(--body)" fontWeight="600" letterSpacing={spacing}>
          <textPath href={`#cp-${text.length}`}>
            {text}
          </textPath>
        </text>
      </svg>
      <div className="rotating-badge-icon" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '50%', width: `${imgSize}px`, height: `${imgSize}px` }}>
          <img src={img} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'sepia(60%) saturate(150%) brightness(0.7) hue-rotate(10deg)', opacity: 0.85 }} />
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(200,153,31,0.15)', borderRadius: '50%' }} />
        </div>
      </div>
    </div>
  )
}