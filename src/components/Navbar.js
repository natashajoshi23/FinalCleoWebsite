'use client'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { useTheme } from './ThemeContext'

export default function Navbar() {
  const pathname = usePathname()
  const { isDark, setIsDark } = useTheme()
  const [aboutOpen, setAboutOpen] = useState(false)
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [hoveredLink, setHoveredLink] = useState(null)
  const [themeHovered, setThemeHovered] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 1050)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setMenuOpen(false); setMobileAboutOpen(false) }, [pathname])

  useEffect(() => {
    if (menuOpen) {
      const scrollY = window.scrollY
      document.body.style.position = 'fixed'
      document.body.style.top = `-${scrollY}px`
      document.body.style.width = '100%'
      document.body.style.overflow = 'hidden'
    } else {
      const scrollY = parseInt(document.body.style.top || '0') * -1
      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.width = ''
      document.body.style.overflow = ''
      window.scrollTo(0, scrollY)
    }
    return () => {
      const scrollY = parseInt(document.body.style.top || '0') * -1
      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.width = ''
      document.body.style.overflow = ''
      if (scrollY) window.scrollTo(0, scrollY)
    }
  }, [menuOpen])

  const gold = 'var(--gold)'
  const fog = 'var(--fog)'

  const linkStyle = (active, href) => ({
    color: active ? gold : (hoveredLink === href ? 'var(--paper)' : fog),
    textDecoration: 'none',
    fontSize: '1.05rem',
    fontWeight: active ? 700 : 500,
    letterSpacing: '0.16em',
    textTransform: 'uppercase',
    transition: 'color 0.2s',
    position: 'relative',
    paddingBottom: '2px',
    borderBottom: active ? `2px solid ${gold}` : (hoveredLink === href ? `2px solid ${gold}` : '2px solid transparent'),
    display: 'inline-flex',
    alignItems: 'center',
    minHeight: '44px',
  })

  const isAboutActive = pathname.includes('/team') || pathname.includes('/social')

  // Mobile drawer colors — respond to theme
  const drawerBg = isDark ? '#001229' : '#FDFAF4'
  const drawerBorder = isDark ? '1px solid rgba(245,237,230,0.1)' : '1px solid rgba(0,18,41,0.1)'
  const drawerLinkColor = (active) => active ? gold : (isDark ? 'rgba(245,237,230,0.75)' : '#444')
  const drawerDivider = isDark ? '1px solid rgba(245,237,230,0.08)' : '1px solid rgba(0,18,41,0.08)'
  const drawerSubBg = isDark ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.03)'
  const drawerSubDivider = isDark ? '1px solid rgba(245,237,230,0.05)' : '1px solid rgba(0,18,41,0.05)'

  const ThemeButton = () => (
    <button
      onClick={() => setIsDark(!isDark)}
      onMouseEnter={() => setThemeHovered(true)}
      onMouseLeave={() => setThemeHovered(false)}
      aria-label="Toggle dark and light mode"
      style={{
        background: themeHovered
          ? (isDark ? 'rgba(200,153,31,0.15)' : 'rgba(0,18,41,0.12)')
          : (isDark ? 'none' : 'rgba(0,18,41,0.06)'),
        border: isDark
          ? `1px solid ${themeHovered ? gold : 'rgba(245,237,230,0.25)'}`
          : `1px solid ${themeHovered ? 'rgba(0,18,41,0.5)' : 'rgba(0,18,41,0.25)'}`,
        borderRadius: '50%',
        width: '44px',
        height: '44px',
        minHeight: '44px',
        maxHeight: '44px',
        minWidth: '44px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        color: isDark ? gold : 'var(--paper)',
        flexShrink: 0,
        transform: themeHovered ? 'scale(1.12)' : 'scale(1)',
        transition: 'background 0.2s, border 0.2s, transform 0.2s',
      }}
    >
      {isDark ? (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
      ) : (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
      )}
    </button>
  )

  return (
    <>
      <nav
        id="nav"
        role="banner"
        className={scrolled ? 'scrolled' : ''}
        style={{
          position: 'fixed',
          top: 0, left: 0, right: 0,
          zIndex: menuOpen ? 9996 : 9999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: isMobile ? '0 1.25rem' : '0.75rem 3rem',
          height: isMobile ? '130px' : '155px',
          transition: 'background 0.5s, backdrop-filter 0.5s',
          background: scrolled
            ? (isDark ? 'rgba(0,18,41,0.97)' : 'rgba(253,250,244,0.97)')
            : 'transparent',
          backdropFilter: scrolled ? 'blur(16px)' : 'none',
          /* Extend background upward on scroll to cover iOS Safari URL-bar gap */
          boxShadow: isMobile && scrolled
            ? (isDark ? '0 -200px 0 200px #001229' : '0 -200px 0 200px #FDFAF4')
            : 'none',
          borderBottom: scrolled && !isDark ? '1px solid rgba(0,18,41,0.08)' : 'none',
        }}
      >
        <Link href="/" className="nav-logo" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', flexShrink: 0 }}>
          <Image
            src={isDark ? '/images/logo-dark.webp' : '/images/logo-light.webp'}
            alt="Cleo Consulting"
            width={200} height={64}
            style={{
              height: isMobile ? (isDark ? '120px' : '140px') : (isDark ? '145px' : '180px'),
              width: 'auto',
              objectFit: 'contain',
              marginLeft: isMobile ? (isDark ? '-20px' : '-13px') : (isDark ? '-25px' : '-15px'),
              marginTop: '0px',
            }}
            priority
          />
        </Link>

        {/* Desktop nav + theme toggle grouped on the right so flexbox reserves space for the toggle — no overlap. Hidden on mobile via CSS. */}
        <div className="nav-desktop-right" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <ul className="nav-desktop-links" style={{ display: 'flex', alignItems: 'center', gap: '2.25rem', listStyle: 'none', margin: 0, padding: 0 }}>
          <li><Link href="/" style={linkStyle(pathname === '/', '/')} onMouseEnter={() => setHoveredLink('/')} onMouseLeave={() => setHoveredLink(null)}>Home</Link></li>
          <li
            style={{ position: 'relative' }}
            onMouseEnter={() => { setAboutOpen(true); setHoveredLink('about') }}
            onMouseLeave={() => { setAboutOpen(false); setHoveredLink(null) }}
          >
            <span style={{ ...linkStyle(isAboutActive, 'about'), cursor: 'pointer', whiteSpace: 'nowrap' }}>About ▾</span>
            {aboutOpen && (
              <div style={{
                position: 'absolute', top: '100%', left: 0,
                marginTop: '0.5rem',
                background: isDark ? 'var(--ink2)' : 'rgba(253,250,244,0.98)',
                border: isDark ? '1px solid rgba(245,237,230,0.1)' : '1px solid rgba(0,18,41,0.1)',
                minWidth: '180px', padding: '0.3rem 0', zIndex: 300,
                borderRadius: '4px', boxShadow: '0 8px 24px rgba(0,0,0,0.25)',
                backdropFilter: 'blur(16px)',
              }}>
                {/* invisible bridge so hover doesn't drop in the gap */}
                <div style={{ position: 'absolute', bottom: '100%', left: 0, right: 0, height: '0.6rem' }} />
                <Link href="/team" className="dropdown-item" style={{ display: 'block', color: pathname === '/team' ? gold : fog, textDecoration: 'none' }}>Our Team</Link>
                <Link href="/social-responsibility" className="dropdown-item" style={{ display: 'block', color: pathname === '/social-responsibility' ? gold : fog, textDecoration: 'none' }}>Social Responsibility</Link>
              </div>
            )}
          </li>
          {[
            { href: '/managed-services', label: 'Services' },
            { href: '/health-services', label: 'Health' },
            { href: '/projects', label: 'Projects' },
            { href: '/blogs', label: 'Insights' },
          ].map(({ href, label }) => (
            <li key={href}>
              <Link href={href} style={linkStyle(pathname === href || pathname.startsWith(href + '/'), href)} onMouseEnter={() => setHoveredLink(href)} onMouseLeave={() => setHoveredLink(null)}>{label}</Link>
            </li>
          ))}
          <li>
            <div style={{ display: 'flex', overflow: 'hidden', borderRadius: '2px' }}>
              <Link href="/contact" style={{ padding: '0.6rem 2rem', background: pathname === '/contact' ? 'var(--paper)' : (hoveredLink === '/contact' ? 'var(--paper)' : 'transparent'), border: '1px solid var(--fog)', borderRight: 'none', fontSize: '0.9rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: pathname === '/contact' || hoveredLink === '/contact' ? 'var(--ink)' : 'var(--paper)', textDecoration: 'none', fontWeight: 550, transition: 'all 0.3s', whiteSpace: 'nowrap' }} onMouseEnter={() => setHoveredLink('/contact')} onMouseLeave={() => setHoveredLink(null)}>Contact</Link>
              <Link href="/apply" className="apply-cta-link" style={{ padding: '0.6rem 2rem', background: 'var(--gold)', border: '1px solid var(--gold)', fontSize: '0.9rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--ink)', textDecoration: 'none', fontWeight: 750, transition: 'all 0.3s', whiteSpace: 'nowrap' }}>Apply Now</Link>
            </div>
          </li>
        </ul>
          <ThemeButton />
        </div>

        {/* Mobile controls — hidden on desktop via CSS */}
        <div className="nav-mobile-controls" style={{ display: 'none', alignItems: 'center', gap: '0.75rem' }}>
            <ThemeButton />
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              style={{
                background: 'none',
                border: isDark ? '1px solid rgba(245,237,230,0.15)' : '1px solid rgba(0,18,41,0.2)',
                borderRadius: '4px',
                width: '44px', height: '44px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: 'pointer',
                color: isDark ? fog : '#444',
              }}
            >
              {menuOpen ? (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
              ) : (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
              )}
            </button>
          </div>
      </nav>

      {/* Backdrop */}
      <div
        onClick={() => setMenuOpen(false)}
        style={{
          position: 'fixed', inset: 0, zIndex: 9997,
          background: 'rgba(0,0,0,0.08)',
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? 'auto' : 'none',
          transition: 'opacity 0.35s ease',
          width: '100%', height: '100%',
          maxWidth: '100vw', maxHeight: '100vh',
        }}
      />

      {/* Slide-in sidebar drawer */}
      <div className="mobile-sidebar" style={{
          position: 'fixed',
          top: 0, right: 0, bottom: 0,
          width: '340px',
          maxWidth: '90vw',
          background: drawerBg,
          zIndex: 9998,
          overflowY: 'auto',
          borderLeft: drawerBorder,
          display: 'flex',
          flexDirection: 'column',
          transform: menuOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.35s cubic-bezier(0.4,0,0.2,1)',
          boxShadow: menuOpen ? `-8px 0 32px rgba(0,0,0,0.35), 0 200px 0 200px ${drawerBg}` : 'none',
          overflowX: 'hidden',
          paddingBottom: 'max(env(safe-area-inset-bottom, 0px), 1.5rem)',
        }}>

        {/* Sidebar header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '138px', padding: '0 1.5rem', borderBottom: drawerBorder }}>
          <Link href="/" onClick={() => setMenuOpen(false)}>
            <img src={isDark ? '/images/logo-dark.webp' : '/images/logo-light.webp'} alt="Cleo Consulting" style={{ height: isDark ? '115px' : '144px', width: 'auto', marginTop: isDark ? '0' : '-8px', marginLeft: isDark ? '-9px' : '-2px' }} />
          </Link>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <ThemeButton />
            <button onClick={() => setMenuOpen(false)} aria-label="Close menu" style={{ background: 'none', border: 'none', cursor: 'pointer', color: isDark ? fog : '#444', padding: '0.5rem' }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            </button>
          </div>
        </div>
          {[
            { href: '/', label: 'Home' },
            { href: '/managed-services', label: 'Services' },
            { href: '/health-services', label: 'Health' },
            { href: '/projects', label: 'Projects' },
            { href: '/blogs', label: 'Insights' },
          ].map(({ href, label }, i) => (
            <Link key={href} href={href} onClick={() => setMenuOpen(false)} style={{
              display: 'block',
              padding: '1.1rem 1.5rem',
              fontSize: '0.85rem',
              fontWeight: 500,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              color: pathname === href ? gold : (hoveredLink === `m-${href}` ? gold : drawerLinkColor(false)),
              borderBottom: drawerDivider,
              transition: `color 0.2s, padding-left 0.2s, opacity 0.35s ease ${i * 0.06}s, transform 0.35s cubic-bezier(0.4,0,0.2,1) ${i * 0.06}s`,
              paddingLeft: hoveredLink === `m-${href}` ? '2rem' : '1.5rem',
              opacity: menuOpen ? 1 : 0,
              transform: menuOpen ? 'translateX(0)' : 'translateX(40px)',
            }}
            onMouseEnter={() => setHoveredLink(`m-${href}`)}
            onMouseLeave={() => setHoveredLink(null)}
            >{label}</Link>
          ))}

          {/* About dropdown */}
          <div style={{ borderBottom: drawerDivider }}>
            <button
              onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
              onMouseEnter={() => setHoveredLink('m-about')}
              onMouseLeave={() => setHoveredLink(null)}
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '1.1rem 1.5rem',
                fontSize: '0.85rem',
                fontWeight: isAboutActive ? 700 : 500,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: isAboutActive ? gold : (hoveredLink === 'm-about' ? gold : drawerLinkColor(false)),
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                textAlign: 'left',
                transition: `color 0.2s, opacity 0.35s ease 0.3s, transform 0.35s cubic-bezier(0.4,0,0.2,1) 0.3s`,
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? 'translateX(0)' : 'translateX(40px)',
              }}
            >
              About
              <span style={{
                transition: 'transform 0.2s',
                transform: mobileAboutOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                fontSize: '0.7rem',
                opacity: 0.6,
              }}>▾</span>
            </button>
            {mobileAboutOpen && (
              <div style={{ background: drawerSubBg }}>
                <Link href="/team" style={{ display: 'block', padding: '0.85rem 2.5rem', fontSize: '0.78rem', letterSpacing: '0.14em', textTransform: 'uppercase', textDecoration: 'none', color: pathname === '/team' ? gold : (hoveredLink === 'm-team' ? gold : drawerLinkColor(false)), borderTop: drawerSubDivider, transition: 'color 0.2s' }} onMouseEnter={() => setHoveredLink('m-team')} onMouseLeave={() => setHoveredLink(null)}>Our Team</Link>
                <Link href="/social-responsibility" style={{ display: 'block', padding: '0.85rem 2.5rem', fontSize: '0.78rem', letterSpacing: '0.14em', textTransform: 'uppercase', textDecoration: 'none', color: pathname === '/social-responsibility' ? gold : (hoveredLink === 'm-social' ? gold : drawerLinkColor(false)), borderTop: drawerSubDivider, transition: 'color 0.2s' }} onMouseEnter={() => setHoveredLink('m-social')} onMouseLeave={() => setHoveredLink(null)}>Social Responsibility</Link>
              </div>
            )}
          </div>

          <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: 'auto',
            opacity: menuOpen ? 1 : 0, transform: menuOpen ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.35s ease 0.38s, transform 0.35s cubic-bezier(0.4,0,0.2,1) 0.38s',
          }}>
            <Link href="/contact" onClick={() => setMenuOpen(false)}
              onMouseEnter={() => setHoveredLink('m-contact')}
              onMouseLeave={() => setHoveredLink(null)}
              style={{
                display: 'block', padding: '1rem', textAlign: 'center',
                border: isDark ? '1px solid rgba(245,237,230,0.3)' : '1px solid rgba(0,18,41,0.25)',
                background: hoveredLink === 'm-contact' ? (isDark ? 'rgba(245,237,230,0.08)' : 'rgba(0,18,41,0.08)') : 'transparent',
                color: hoveredLink === 'm-contact' ? gold : (isDark ? fog : '#333'),
                textDecoration: 'none', fontSize: '0.8rem', letterSpacing: '0.14em', textTransform: 'uppercase',
                transition: 'all 0.2s',
              }}>Contact</Link>
            <Link href="/apply" onClick={() => setMenuOpen(false)} className="apply-cta-link" style={{
              display: 'block', padding: '1rem', textAlign: 'center',
              background: gold, color: '#001229',
              textDecoration: 'none', fontSize: '0.8rem', letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: 700,
            }}>Apply Now</Link>
          </div>
        </div>
    </>
  )
}