import './globals.css'
import { Bebas_Neue, Fraunces, DM_Sans, Dancing_Script } from 'next/font/google'
import { ThemeProvider } from '@/components/ThemeContext'
import SiteChrome from '@/components/SiteChrome'
import ScrollToTop from '@/components/ScrollToTop'
import Script from 'next/script'
import { pageMetadata } from '@/sanity/lib/pageSeo'

const bebasNeue = Bebas_Neue({ weight: '400', subsets: ['latin'], variable: '--nf-display', display: 'swap' })
const fraunces = Fraunces({ style: ['normal', 'italic'], weight: ['300', '700'], subsets: ['latin'], variable: '--nf-serif', display: 'swap' })
const dmSans = DM_Sans({ style: ['normal', 'italic'], weight: ['300', '400', '600'], subsets: ['latin'], variable: '--nf-body', display: 'swap' })
const dancingScript = Dancing_Script({ weight: ['600'], subsets: ['latin'], variable: '--nf-script', display: 'swap' })

// The home page (app/page.js) is a client component and can't export metadata
// itself, so its tags live here on the root layout. These also act as the
// site-wide default for any page that doesn't set its own.
export const revalidate = 60

export async function generateMetadata() {
  const home = await pageMetadata('home', {
    title: 'Cleo Consulting — We Sniff Out the Best Talent',
    description:
      'IT Consulting and Recruitment firm operating in USA, Canada and India — 200+ years of combined experience placing talent across IT, Finance and Engineering.',
    path: '/',
    image: '/images/city-skyscrapers.webp',
  })

  return {
    ...home,
    // Lets pages return relative canonical/Open Graph URLs and have Next resolve them to absolute
    metadataBase: new URL('https://www.cleoconsult.com'),
    icons: {
      icon: '/icon.png',
    },
  }
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  userScalable: true,
  themeColor: '#001229',
  viewportFit: 'cover',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark" className={`${bebasNeue.variable} ${fraunces.variable} ${dmSans.variable} ${dancingScript.variable}`}>
      <head>
        <link rel="preload" as="image" href="/images/city-skyscrapers.webp" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        {/* Runs synchronously before first paint — prevents flash of dark mode when user prefers light */}
        <script dangerouslySetInnerHTML={{ __html: `(function(){try{var t=localStorage.getItem('theme');if(t)document.documentElement.setAttribute('data-theme',t)}catch(e){}})()` }} />
      </head>
      <body>
        <ThemeProvider>
          <a href="#main" className="skip-link">Skip to main content</a>
          <ScrollToTop />
          <SiteChrome>{children}</SiteChrome>
        </ThemeProvider>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-4RZ6N4JNCR" strategy="afterInteractive" />
        <Script id="ga4-init" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-4RZ6N4JNCR');
        `}</Script>
      </body>
    </html>
  )
}
