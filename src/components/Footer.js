'use client'
import { useTheme } from '@/components/ThemeContext'
import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  const { theme } = useTheme()
  return (
    <>
      <footer role="contentinfo">
        <div className="ft-inner">
          <div className="ft-top">
            <div style={{ height: '120px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
            <Image src="/images/logo-dark.webp" alt="Cleo Consulting" width={180} height={80} className="footer-logo-dark" style={{ height: '160px', width: 'auto', objectFit: 'contain', display: 'block', margin: '2.5rem auto 1rem' }} />
            <Image src="/images/logo-light.webp" alt="Cleo Consulting" width={180} height={80} className="footer-logo-light" style={{ height: '200px', width: 'auto', objectFit: 'contain', display: 'block', margin: '2rem auto 1rem' }} />
            </div>
            <div>
              <div className="ft-col-title">Company</div>
              <ul className="ft-links">
                <li><Link href="/team">Our Team</Link></li>
                <li><Link href="/social-responsibility">Social Responsibility</Link></li>
                <li><Link href="/blogs">Insights</Link></li>
              </ul>
            </div>
            <div>
              <div className="ft-col-title">Services</div>
              <ul className="ft-links">
                <li><Link href="/managed-services">Managed Services</Link></li>
                <li><Link href="/health-services">Health Services</Link></li>
                <li><Link href="/projects">Projects</Link></li>
              </ul>
            </div>
            <div>
              <div className="ft-col-title">Connect</div>
              <ul className="ft-links">
                <li><Link href="/contact">Contact Us</Link></li>
                <li><Link href="/apply">Job Board</Link></li>
                <li><a href="https://www.linkedin.com/company/cleo-consulting-inc-/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              </ul>
            </div>
          </div>
          <div className="ft-bottom">
            <span>© 2026 Cleo Consulting. All rights reserved.</span>
            <div className="ft-bottom-links">
              <Link href="/privacy-policy">Privacy Policy</Link>
              <span className="ft-dot"> • </span>
              <Link href="/sitemap">Sitemap</Link>
              <span className="ft-dot"> • </span>
              <a href="https://www.linkedin.com/company/cleo-consulting-inc-/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--gold)' }}>LinkedIn</a>
            </div>
            <div style={{ fontSize: '0.8rem', letterSpacing: '0.12em', color: 'var(--mist)' }}>
              Designed & Built by <a href="https://www.linkedin.com/in/natasha-joshi-88a694285/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--gold)', fontWeight: 600, textDecoration: 'none' }}>Natasha Joshi</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}