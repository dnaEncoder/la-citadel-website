import nodemailer from 'nodemailer'
import { isValidPhone, isValidEmail } from '../src/utils/validation.js'

const BROCHURE_URL = 'https://drive.google.com/file/d/1AlRQ-ZCmOc7XRYrifsYKHpKlybHNXnNw/view?usp=sharing'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { name, phone, email } = req.body || {}

  if (!name || !phone || !email) {
    return res.status(400).json({ error: 'Name, phone, and email are required' })
  }

  if (!isValidPhone(phone)) {
    return res.status(400).json({ error: 'Please enter a valid 10-digit phone number.' })
  }
  if (!isValidEmail(email)) {
    return res.status(400).json({ error: 'Please enter a valid email address (Gmail, Outlook, Hotmail, Yahoo, etc.).' })
  }

  if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
    console.error('Missing SMTP_USER or SMTP_PASS environment variable at runtime')
    return res.status(500).json({ error: 'Email service is not configured. Please contact the site admin.' })
  }

  const transporter = nodemailer.createTransport({
    host: 'smtp.hostinger.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })

  try {
    await transporter.sendMail({
      from: `"La Citadel" <${process.env.SMTP_USER}>`,
      to: email,
      bcc: process.env.ENQUIRY_TO || process.env.SMTP_USER,
      replyTo: process.env.SMTP_USER,
      subject: 'Your La Citadel Brochure',
      text: `Hi ${name},\n\nThank you for your interest in La Citadel. Here's your brochure:\n${BROCHURE_URL}\n\nOur team will be in touch with you shortly.\n\nLa Citadel`,
      html: `
        <h2>Thank you for your interest, ${name}!</h2>
        <p>Here's your La Citadel brochure:</p>
        <p><a href="${BROCHURE_URL}" target="_blank">Download the Brochure</a></p>
        <p>Our team will be in touch with you shortly at ${phone}.</p>
        <p>— La Citadel</p>
      `,
    })

    return res.status(200).json({ success: true })
  } catch (err) {
    console.error('Brochure email failed:', err)
    return res.status(500).json({ error: 'Failed to send brochure. Please try again.' })
  }
}
