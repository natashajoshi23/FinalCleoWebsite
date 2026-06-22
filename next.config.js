/** @type {import('next').NextConfig} */

// Next.js dev server uses webpack eval() for hot reloading and source maps.
// unsafe-eval is required in development but can be removed in production builds.
const isDev = process.env.NODE_ENV === 'development'

const publicCsp = `
  default-src 'self';
  script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ''};
  style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
  font-src 'self' https://fonts.gstatic.com;
  img-src 'self' blob: data: https://cdn.sanity.io;
  connect-src 'self' https://*.sanity.io https://*.sanity.work https://api.resend.com;
  object-src 'none';
  base-uri 'self';
  form-action 'self';
  frame-ancestors 'none';
  upgrade-insecure-requests;
`

// Sanity Studio always requires unsafe-eval for its live editor.
const studioCsp = `
  default-src 'self';
  script-src 'self' 'unsafe-inline' 'unsafe-eval';
  style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
  font-src 'self' data: https://fonts.gstatic.com;
  img-src 'self' blob: data: https://cdn.sanity.io;
  connect-src 'self' https://*.sanity.io https://*.sanity.work wss://*.sanity.io;
  object-src 'none';
  base-uri 'self';
  frame-ancestors 'none';
`

function compact(csp) {
  return csp.replace(/\s{2,}/g, ' ').trim()
}

const sharedHeaders = [
  { key: 'X-Frame-Options', value: 'DENY' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Strict-Transport-Security', value: 'max-age=31536000; includeSubDomains; preload' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
]

const nextConfig = {
  images: {
    unoptimized: true,
  },

  async headers() {
    return [
      // Apply public CSP to all routes
      {
        source: '/(.*)',
        headers: [
          { key: 'Content-Security-Policy', value: compact(publicCsp) },
          ...sharedHeaders,
        ],
      },
      // Override CSP for Studio routes only (runs after catch-all, overrides it)
      {
        source: '/studio/:path*',
        headers: [
          { key: 'Content-Security-Policy', value: compact(studioCsp) },
        ],
      },
    ]
  },
}

module.exports = nextConfig
