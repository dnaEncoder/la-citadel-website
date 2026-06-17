import nodemailer from 'nodemailer'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { name, phone, type } = req.body || {}

  if (!name || !phone) {
    return res.status(400).json({ error: 'Name and phone number are required' })
  }

  console.log('SMTP_USER set:', Boolean(process.env.SMTP_USER), '| SMTP_PASS set:', Boolean(process.env.SMTP_PASS))

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
      from: `"La Citadel Website" <${process.env.SMTP_USER}>`,
      to: process.env.ENQUIRY_TO || process.env.SMTP_USER,
      replyTo: process.env.SMTP_USER,
      subject: `New Enquiry — ${name}`,
      text: `New enquiry from the La Citadel website:\n\nName: ${name}\nPhone: ${phone}\nEnquiry Type: ${type || 'Not specified'}`,
      html: `
        <h2>New Enquiry — La Citadel Website</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Enquiry Type:</strong> ${type || 'Not specified'}</p>
      `,
    })

    return res.status(200).json({ success: true })
  } catch (err) {
    console.error('Enquiry email failed:', err)
    return res.status(500).json({ error: 'Failed to send enquiry. Please try again.' })
  }
}
