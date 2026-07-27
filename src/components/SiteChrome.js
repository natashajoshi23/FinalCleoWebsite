'use client'
import { usePathname } from 'next/navigation'
import Script from 'next/script'
import dynamic from 'next/dynamic'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollProgress from '@/components/ScrollProgress'

const CertificationPopup = dynamic(() => import('@/components/Certificationpopup'), { ssr: false })
const RebrandPopup = dynamic(() => import('@/components/RebrandPopup'), { ssr: false })

export default function SiteChrome({ children }) {
  const pathname = usePathname()
  const isStudio = pathname?.startsWith('/studio')

  if (isStudio) return <>{children}</>

  return (
    <>
      <RebrandPopup />
      <CertificationPopup />
      <ScrollProgress />
      <div id="scroll-wrap">
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
      </div>
      <Script src="https://cdn.botpress.cloud/webchat/v3.6/inject.js" strategy="lazyOnload" />
      <Script src="https://files.bpcontent.cloud/2026/07/08/02/20260708024014-16ILJVFW.js" strategy="lazyOnload" />
    </>
  )
}
