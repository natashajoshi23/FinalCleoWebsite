import { Resend } from 'resend'

function getResend() {
  return new Resend(process.env.RESEND_API_KEY)
}

const MAX_FILE_SIZE = 2 * 1024 * 1024 // 2MB

const ALLOWED_MIME_TYPES = [
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
]

const ALLOWED_EXTENSIONS = ['.pdf', '.doc', '.docx']

function isValidEmail(email) {
  if (typeof email !== 'string' || email.length > 254) return false
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

// Strips CRLF to prevent email header injection. escapeHtml() handles HTML safety.
function sanitize(str, maxLen = 500) {
  if (!str) return ''
  return String(str)
    .slice(0, maxLen)
    .replace(/[\r\n]+/g, ' ')
    .trim()
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
        JSON.stringify({ error: 'Resume must be under 2MB.' }),
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
      subject: 'Application received — Cleo Consulting',
      html: `
        <h2>Thank you for applying, ${name}!</h2>
        <p>We've successfully received your application for the <strong>${position}</strong> position at Cleo Consulting. Our team is reviewing your qualifications and will contact you if there is a match. We will make every effort to get back to you as soon as possible. In the meantime, feel free to directly reply to this email if you have any questions, or explore our open roles and insights at <a href="https://cleoconsult.com">cleoconsult.com</a></p>
        <p>We appreciate your interest in Cleo Consulting and wish you the best of luck in your job search.</p>
        <p>Sincerely,<br/>The Cleo Consulting Recruitment Team</p>
        <br/>
        <p style="font-size: 0.85rem;"><span style="color: #001229;">Cleo Consulting — We Sniff Out the Best Talent &nbsp;•&nbsp;</span> <a href="https://www.linkedin.com/company/cleo-consulting-inc-/" style="color: #C8991F; font-weight: bold;">LinkedIn</a></p>
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