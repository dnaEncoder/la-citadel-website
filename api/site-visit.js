import nodemailer from 'nodemailer'

const SITE_ADDRESS = 'La Citadel, Rushikonda, Visakhapatnam, Andhra Pradesh'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { name, phone, email, date, time } = req.body || {}

  if (!name || !phone || !email || !date || !time) {
    return res.status(400).json({ error: 'Name, phone, email, date, and time are required' })
  }

  if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
    console.error('Missing SMTP_USER or SMTP_PASS environment variable at runtime')
    return res.status(500).json({ error: 'Email service is not configured. Please contact the site admin.' })
  }

  const formattedDate = new Date(`${date}T00:00:00Z`).toLocaleDateString('en-IN', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  })

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
      subject: `Your La Citadel Site Visit — ${formattedDate}`,
      text: `Hi ${name},\n\nYour site visit to La Citadel is confirmed:\n\nDate: ${formattedDate}\nTime: ${time}\nAddress: ${SITE_ADDRESS}\n\nOur team will contact you at ${phone} ahead of your visit to coordinate the details.\n\nWe look forward to welcoming you.\n\nLa Citadel`,
      html: `
        <h2>Your site visit is confirmed, ${name}!</h2>
        <p><strong>Date:</strong> ${formattedDate}</p>
        <p><strong>Time:</strong> ${time}</p>
        <p><strong>Address:</strong> ${SITE_ADDRESS}</p>
        <p>Our team will contact you at ${phone} ahead of your visit to coordinate the details.</p>
        <p>We look forward to welcoming you.</p>
        <p>— La Citadel</p>
      `,
    })

    return res.status(200).json({ success: true })
  } catch (err) {
    console.error('Site visit confirmation email failed:', err)
    return res.status(500).json({ error: 'Failed to schedule your visit. Please try again.' })
  }
}
