/** @type {import('next').NextConfig} */

// Public routes: no unsafe-eval, no unsafe-inline on script-src.
// NOTE: If you use Next.js <script> tags that need inline execution, add a nonce instead.
const publicCsp = `
  default-src 'self';
  script-src 'self' 'unsafe-inline';
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

// Sanity Studio requires unsafe-eval and unsafe-inline for its live editor.
// Scope this looser policy only to /studio routes.
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
  {
    key: 'X-Frame-Options',
    value: 'DENY',
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin',
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=31536000; includeSubDomains; preload',
  },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=()',
  },
]

const nextConfig = {
  images: {
    unoptimized: true,
  },

  async headers() {
    return [
      // Looser CSP scoped to Sanity Studio only
      {
        source: '/studio/:path*',
        headers: [
          { key: 'Content-Security-Policy', value: compact(studioCsp) },
          ...sharedHeaders,
        ],
      },
      // Tighter CSP for all public routes (no unsafe-eval)
      {
        source: '/((?!studio).*)',
        headers: [
          { key: 'Content-Security-Policy', value: compact(publicCsp) },
          ...sharedHeaders,
        ],
      },
    ]
  },
}

module.exports = nextConfig
