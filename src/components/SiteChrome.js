'use client'
import { usePathname } from 'next/navigation'
import Script from 'next/script'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollProgress from '@/components/ScrollProgress'
import CertificationPopup from '@/components/Certificationpopup'
import RebrandPopup from '@/components/RebrandPopup'

export default function SiteChrome({ children }) {
  const pathname = usePathname()
  const isStudio = pathname?.startsWith('/studio')

  if (isStudio) return <>{children}</>

  return (
    <>
      <RebrandPopup />
      <CertificationPopup />
      <ScrollProgress />
      <Navbar />
      <main id="main">{children}</main>
      <Footer />
      <Script src="https://cdn.botpress.cloud/webchat/v3.6/inject.js" strategy="afterInteractive" />
      <Script src="https://files.bpcontent.cloud/2026/07/08/02/20260708024014-16ILJVFW.js" strategy="afterInteractive" />
    </>
  )
}
