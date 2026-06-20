import { Resend } from 'resend'

// Lazy-initialize so build-time static analysis doesn't throw on missing env var.
function getResend() {
  return new Resend(process.env.RESEND_API_KEY)
}

// ── Validation helpers ────────────────────────────────────────────────────────

function isValidEmail(email) {
  return typeof email === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

// Strips HTML tags and CRLF characters to prevent email header injection and
// HTML injection into email bodies. Input must be a plain-text field.
function sanitize(str, maxLen = 500) {
  if (!str) return ''
  return String(str)
    .replace(/<[^>]*>/g, '')    // strip HTML tags
    .replace(/[\r\n]+/g, ' ')  // collapse CRLF (prevents header injection)
    .trim()
    .slice(0, maxLen)
}

// Escapes HTML special chars so sanitized text is safe inside an HTML email body.
function escapeHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
}

// ── Route handler ─────────────────────────────────────────────────────────────

export async function POST(req) {
  // Enforce a reasonable request body size (~16 KB)
  const contentLength = req.headers.get('content-length')
  if (contentLength && parseInt(contentLength, 10) > 16_384) {
    return new Response(
      JSON.stringify({ error: 'Request too large.' }),
      { status: 413, headers: { 'Content-Type': 'application/json' } }
    )
  }

  try {
    const body = await req.json()
    const { firstName, lastName, email, phone, service, message } = body

    // Required field validation
    if (!firstName || !lastName || !email || !message) {
      return new Response(
        JSON.stringify({ error: 'firstName, lastName, email, and message are required.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      )
    }

    if (!isValidEmail(email)) {
      return new Response(
        JSON.stringify({ error: 'Please provide a valid email address.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      )
    }

    // Sanitize all user-supplied strings (plain-text fields)
    const safeFirst   = escapeHtml(sanitize(firstName, 100))
    const safeLast    = escapeHtml(sanitize(lastName, 100))
    const safeEmail   = escapeHtml(sanitize(email, 254))
    const safePhone   = escapeHtml(sanitize(phone, 30))
    const safeService = escapeHtml(sanitize(service, 200))
    const safeMessage = escapeHtml(sanitize(message, 2000))

    const resend = getResend()

    // Admin notification — fixed recipient, no user-controlled `to`
    await resend.emails.send({
      from: 'Cleo Consulting <usa@cleoconsult.com>',
      to: 'usa@cleoconsult.com',
      // replyTo is informational only; the validated, sanitized address is safe here
      replyTo: safeEmail,
      subject: `New Message — ${safeFirst} ${safeLast}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${safeFirst} ${safeLast}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Phone:</strong> ${safePhone || '—'}</p>
        <p><strong>Service:</strong> ${safeService || '—'}</p>
        <p><strong>Message:</strong> ${safeMessage}</p>
      `,
    })

    // Confirmation to sender — only after email is validated above
    await resend.emails.send({
      from: 'Cleo Consulting <usa@cleoconsult.com>',
      to: safeEmail,
      subject: 'We received your message — Cleo Consulting',
      html: `
        <h2>Thank you, ${safeFirst}!</h2>
        <p>We've received your message and will get back to you promptly.</p>
        ${safeService ? `<p>You enquired about: <strong>${safeService}</strong></p>` : ''}
        <br/>
        <p style="color: #999; font-size: 0.85rem;">Cleo Consulting — We Sniff Out the Best Talent</p>
      `,
    })

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    })
  } catch (err) {
    // Never expose internal error details to the client
    console.error('Contact route error:', err)
    return new Response(
      JSON.stringify({ error: 'Internal server error.' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    )
  }
}
