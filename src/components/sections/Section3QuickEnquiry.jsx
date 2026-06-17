import { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, MessageCircle, Calendar, Shield, User, PhoneCall, ChevronDown, Send, Lock, HeadphonesIcon, Loader2, CheckCircle2 } from 'lucide-react'
import EyebrowLabel from '../ui/EyebrowLabel'
import OrnamentalDivider from '../ui/OrnamentalDivider'

const fade = { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: '-80px' } }

const ACTION_CARDS = [
  { icon: PhoneCall,      label: 'Request a\nCall Back', href: 'tel:+916302604929' },
  { icon: MessageCircle,  label: 'Get Project Details\non WhatsApp', href: 'https://chat.whatsapp.com/JJOSPLEvn5CL1YfgltwMB5' },
  { icon: Calendar,       label: 'Schedule a\nSite Visit' },
]

const ENQUIRY_TYPES = ['General Enquiry', 'Request Call Back', 'Get Project Details', 'Schedule Site Visit', 'Download Brochure']

export default function Section3QuickEnquiry() {
  const [form, setForm] = useState({ name: '', phone: '', type: '' })
  const [status, setStatus] = useState('idle') // idle | submitting | success | error
  const [errorMsg, setErrorMsg] = useState('')

  const handleChange = (field, value) => setForm(f => ({ ...f, [field]: value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.name || !form.phone) return

    setStatus('submitting')
    setErrorMsg('')

    try {
      const res = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Something went wrong')

      setStatus('success')
      setForm({ name: '', phone: '', type: '' })
    } catch (err) {
      setStatus('error')
      setErrorMsg(err.message || 'Failed to send enquiry. Please try again.')
    }
  }

  return (
    <section id="enquiry" className="bg-ivory section-pad">
      <div className="container-wide">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">

          {/* Left — 55% */}
          <div className="flex-1 min-w-0">
            <motion.div {...fade} transition={{ duration: 0.6 }}>
              <EyebrowLabel>Next Steps</EyebrowLabel>
              <h2 className="heading-lg mt-4 mb-4">
                Interested in owning<br />
                a villa at <span className="text-gold">La Citadel?</span>
              </h2>
              <p className="body-md max-w-sm mb-10">
                Share your number and our team will guide you with the next steps.
              </p>
            </motion.div>

            {/* Action cards */}
            <motion.div {...fade} transition={{ duration: 0.6, delay: 0.15 }} className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              {ACTION_CARDS.map(({ icon: Icon, label, href }) => {
                const cls = "flex flex-col items-center gap-3 py-6 px-3 bg-card rounded-2xl border border-beige hover:border-gold/50 hover:-translate-y-0.5 transition-all duration-200 group"
                const inner = (
                  <>
                    <div className="icon-circle group-hover:bg-gold/20 transition-colors">
                      <Icon size={17} />
                    </div>
                    <p className="text-xs font-medium text-ink text-center leading-snug whitespace-pre-line">{label}</p>
                    <div className="w-7 h-7 rounded-full border border-gold/40 flex items-center justify-center mt-auto">
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path d="M2 5h6M6 3l2 2-2 2" stroke="#B9823D" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </>
                )
                return href ? (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer" className={cls}>{inner}</a>
                ) : (
                  <button key={label} className={cls}>{inner}</button>
                )
              })}
            </motion.div>

            <motion.div {...fade} transition={{ duration: 0.5, delay: 0.25 }} className="flex items-center gap-2">
              <Shield size={14} className="text-gold flex-shrink-0" />
              <p className="text-xs text-muted">Brochure, project details, and site visit assistance available instantly.</p>
            </motion.div>
          </div>

          {/* Vertical gold divider with diamond */}
          <div className="hidden lg:flex flex-col items-center self-stretch">
            <div className="w-px flex-1 bg-gradient-to-b from-transparent via-gold/30 to-transparent relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rotate-45 bg-gold/50 border border-gold" />
            </div>
          </div>

          {/* Right — form card */}
          <motion.div {...fade} transition={{ duration: 0.6, delay: 0.1 }} className="w-full lg:w-[360px] flex-shrink-0">
            <div className="card-light p-7 shadow-sm">
              {/* Card header */}
              <div className="flex flex-col items-center mb-6 text-center">
                <div className="w-12 h-12 rounded-full bg-gold/10 border border-gold/25 flex items-center justify-center mb-3">
                  <HeadphonesIcon size={20} className="text-gold" />
                </div>
                <h3 className="font-serif font-light text-xl text-ink">Quick Enquiry</h3>
                <div className="gold-divider mt-3" />
              </div>

              {/* Fields */}
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div>
                  <label className="text-[11px] font-medium tracking-wide text-ink mb-1.5 block">Name</label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Enter your name"
                      required
                      value={form.name}
                      onChange={e => handleChange('name', e.target.value)}
                      className="w-full px-4 py-3 pr-10 bg-ivory border border-beige rounded-xl text-sm text-ink placeholder:text-muted/60 focus:outline-none focus:border-gold transition-colors"
                    />
                    <User size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted/50" />
                  </div>
                </div>

                <div>
                  <label className="text-[11px] font-medium tracking-wide text-ink mb-1.5 block">Phone Number</label>
                  <div className="relative">
                    <input
                      type="tel"
                      placeholder="Enter your 10-digit number"
                      required
                      value={form.phone}
                      onChange={e => handleChange('phone', e.target.value)}
                      className="w-full px-4 py-3 pr-10 bg-ivory border border-beige rounded-xl text-sm text-ink placeholder:text-muted/60 focus:outline-none focus:border-gold transition-colors"
                    />
                    <Phone size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted/50" />
                  </div>
                </div>

                <div>
                  <label className="text-[11px] font-medium tracking-wide text-ink mb-1.5 block">Preferred Enquiry Type</label>
                  <div className="relative">
                    <select
                      value={form.type}
                      onChange={e => handleChange('type', e.target.value)}
                      className="w-full px-4 py-3 pr-10 bg-ivory border border-beige rounded-xl text-sm text-ink appearance-none focus:outline-none focus:border-gold transition-colors cursor-pointer"
                    >
                      <option value="" disabled>Select an option</option>
                      {ENQUIRY_TYPES.map(t => <option key={t} value={t}>{t}</option>)}
                    </select>
                    <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted/50 pointer-events-none" />
                  </div>
                </div>

                <button type="submit" disabled={status === 'submitting'} className="btn-gold justify-center w-full mt-2 disabled:opacity-60 disabled:cursor-not-allowed">
                  {status === 'submitting' ? (
                    <>
                      <Loader2 size={14} className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={14} />
                      Submit Enquiry
                    </>
                  )}
                </button>

                {status === 'success' && (
                  <div className="flex items-center gap-2 justify-center text-green-600">
                    <CheckCircle2 size={13} />
                    <p className="text-xs">Thank you! We'll get back to you shortly.</p>
                  </div>
                )}

                {status === 'error' && (
                  <p className="text-xs text-red-500 text-center">{errorMsg}</p>
                )}

                <div className="flex items-center gap-2 justify-center pt-1">
                  <Lock size={12} className="text-muted/60" />
                  <p className="text-[10px] text-muted/70">Your details are secure and will not be shared.</p>
                </div>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Bottom ornamental line */}
        <motion.div {...fade} transition={{ duration: 0.5, delay: 0.3 }} className="mt-16">
          <OrnamentalDivider text="We'll get back to you within minutes." />
        </motion.div>
      </div>
    </section>
  )
}
