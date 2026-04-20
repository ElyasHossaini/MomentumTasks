import nodemailer from 'nodemailer'

function buildSubject(topic) {
  if (topic === 'Eligibility / CDHCI questions') return 'Website inquiry: eligibility / CDHCI'
  if (topic === 'Care consultation') return 'Care consultation request'
  return `Website inquiry: ${topic || 'Contact'}`
}

/** Vercel serverless: POST /api/contact (same contract as local `server/index.js`) */
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Method not allowed' })
  }

  let body = req.body
  if (typeof body === 'string') {
    try {
      body = JSON.parse(body || '{}')
    } catch {
      return res.status(400).json({ error: 'Invalid JSON body.' })
    }
  }
  body = body ?? {}

  const name = String(body.name ?? '').trim()
  const email = String(body.email ?? '').trim()
  const phone = String(body.phone ?? '').trim()
  const topic = String(body.topic ?? '').trim()
  const urgency = String(body.urgency ?? '').trim()
  const ahsCaseManager = String(body.ahs_case_manager ?? '').trim()
  const message = String(body.message ?? '').trim()

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email, and message are required.' })
  }

  const user = process.env.EMAIL_USER?.trim()
  const pass = process.env.EMAIL_PASS?.trim()
  const mailTo = process.env.MAIL_TO?.trim() || user

  if (!user || !pass || !mailTo) {
    console.error('Missing EMAIL_USER, EMAIL_PASS, or MAIL_TO')
    return res.status(503).json({ error: 'Contact form is not configured on the server.' })
  }

  const subject = buildSubject(topic)
  const text = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Phone: ${phone || '—'}`,
    `Topic: ${topic || '—'}`,
    `Urgency / timing: ${urgency || '—'}`,
    `AHS case manager already?: ${ahsCaseManager || '—'}`,
    '',
    message,
    '',
    '— Sent from website contact form (Vercel)',
  ].join('\n')

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: { user, pass },
  })

  try {
    await transporter.sendMail({
      from: `"Momentum website" <${user}>`,
      to: mailTo,
      replyTo: email,
      subject,
      text,
    })
    return res.status(200).json({ ok: true })
  } catch (err) {
    console.error('sendMail error:', err)
    return res.status(500).json({ error: 'Could not send your message. Try again later or call intake.' })
  }
}
