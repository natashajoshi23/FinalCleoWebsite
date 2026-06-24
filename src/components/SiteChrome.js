'use client'
import { usePathname } from 'next/navigation'
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
    </>
  )
}
