import { Resend } from 'resend'

function getResend() {
  return new Resend(process.env.RESEND_API_KEY)
}

const MAX_FILE_SIZE = 5 * 1024 * 1024 // 5MB

const ALLOWED_MIME_TYPES = [
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
]

const ALLOWED_EXTENSIONS = ['.pdf', '.doc', '.docx']

function isValidEmail(email) {
  return typeof email === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

// Strips HTML tags and CRLF characters; prevents header injection and HTML injection in email bodies.
function sanitize(str, maxLen = 500) {
  if (!str) return ''
  return String(str)
    .replace(/<[^>]*>/g, '')
    .replace(/[\r\n]+/g, ' ')
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

export async function POST(req) {
  try {
    const formData = await req.formData()

    const name       = escapeHtml(sanitize(formData.get('name'), 100))
    const email      = escapeHtml(sanitize(formData.get('email'), 254))
    const phone      = escapeHtml(sanitize(formData.get('phone'), 30))
    const position   = escapeHtml(sanitize(formData.get('position'), 200))
    const experience = escapeHtml(sanitize(formData.get('experience'), 200))
    const message    = escapeHtml(sanitize(formData.get('message'), 2000))
    const resumeFile = formData.get('Resume Upload')

    // ── 1. Required field validation ─────────────────────────────────────
    if (!name || !email || !position) {
      return new Response(
        JSON.stringify({ error: 'Name, email, and position are required.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      )
    }

    if (!isValidEmail(email)) {
      return new Response(
        JSON.stringify({ error: 'Please provide a valid email address.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      )
    }

    // ── 2. Resume file validation ─────────────────────────────────────────
    if (!resumeFile || resumeFile.size === 0) {
      return new Response(
        JSON.stringify({ error: 'A resume file is required.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      )
    }

    if (resumeFile.size > MAX_FILE_SIZE) {
      return new Response(
        JSON.stringify({ error: 'Resume must be under 5MB.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      )
    }

    if (!ALLOWED_MIME_TYPES.includes(resumeFile.type)) {
      return new Response(
        JSON.stringify({ error: 'Only PDF or Word documents (.pdf, .doc, .docx) are accepted.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      )
    }

    // Double-check the file extension as well (MIME type can be spoofed)
    const fileName = resumeFile.name.toLowerCase()
    const hasValidExtension = ALLOWED_EXTENSIONS.some(ext => fileName.endsWith(ext))
    if (!hasValidExtension) {
      return new Response(
        JSON.stringify({ error: 'Only PDF or Word documents (.pdf, .doc, .docx) are accepted.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      )
    }

    // ── 3. Convert file to buffer for Resend attachment ───────────────────
    const buffer = Buffer.from(await resumeFile.arrayBuffer())

    // ── 4. Send application email to your team ────────────────────────────
    const resend = getResend()
    await resend.emails.send({
      from: 'Cleo Consulting <usa@cleoconsult.com>',
      to: 'usa@cleoconsult.com',
      replyTo: email,
      subject: `New Application — ${position}`,
      html: `
        <h2>New Application Received</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || '—'}</p>
        <p><strong>Position:</strong> ${position}</p>
        <p><strong>Experience:</strong> ${experience || '—'}</p>
        <p><strong>Additional Info:</strong> ${message || '—'}</p>
      `,
      attachments: [
        {
          filename: resumeFile.name,
          content: buffer,
        },
      ],
    })

    // ── 5. Send confirmation email to applicant ───────────────────────────
    await resend.emails.send({
      from: 'Cleo Consulting <usa@cleoconsult.com>',
      to: email,
      subject: 'We received your application — Cleo Consulting',
      html: `
        <h2>Thank you, ${name}!</h2>
        <p>We've received your application for <strong>${position}</strong> and our recruitment team will review your profile shortly.</p>
        <p>If there's a match, we'll be in touch within 48 hours.</p>
        <br/>
        <p style="color: #999; font-size: 0.85rem;">Cleo Consulting — We Sniff Out the Best Talent</p>
      `,
    })

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    })

  } catch (err) {
    console.error('Resend error:', err)
    return new Response(JSON.stringify({ error: 'Internal server error.' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    })
  }
}