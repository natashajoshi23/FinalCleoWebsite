export default function PageBanner({ eyebrow, title, num, bgImage }) {
  return (
    <div className="inner-banner" style={{ position: 'relative', overflow: 'hidden' }}>
      {bgImage && (
        <>
          <img src={bgImage} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.35, filter: 'sepia(15%) saturate(110%)' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(0,18,41,0.6), rgba(0,18,41,0.3))', pointerEvents: 'none' }} />
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