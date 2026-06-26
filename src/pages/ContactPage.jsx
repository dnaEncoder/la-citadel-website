import { useState } from 'react'
import { motion } from 'framer-motion'
import { User, Phone, ChevronDown, Send, Lock, HeadphonesIcon, Loader2, CheckCircle2 } from 'lucide-react'
import Navbar from '../components/Navbar'
import PageHero from '../components/ui/PageHero'
import Section11Footer from '../components/sections/Section11Footer'
import { isValidPhone, PHONE_ERROR } from '../utils/validation'

const ENQUIRY_TYPES = ['General Enquiry', 'Request Call Back', 'Get Project Details', 'Schedule Site Visit', 'Download Brochure']

const fade = { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: '-80px' } }

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', phone: '', type: '' })
  const [status, setStatus] = useState('idle') // idle | submitting | success | error
  const [errorMsg, setErrorMsg] = useState('')

  const handleChange = (field, value) => setForm(f => ({ ...f, [field]: value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.name || !form.phone) return

    if (!isValidPhone(form.phone)) {
      setStatus('error')
      setErrorMsg(PHONE_ERROR)
      return
    }

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
    <div className="min-h-screen">
      <Navbar />

      <PageHero
        eyebrow="Contact Us"
        title="Get in Touch"
        description="Have a question about La Citadel — villas, the clubhouse, pricing, or a site visit? Share your details below and our team will get back to you shortly."
        image="/image-assets/hotspot-clubhouse.jpeg"
        crumb="Contact"
      />

      {/* Image collage + form */}
      <section className="bg-ivory section-pad">
        <div className="container-wide">
          <div className="flex flex-col lg:flex-row lg:items-start gap-12 lg:gap-16">

            {/* Image collage */}
            <motion.div
              {...fade}
              transition={{ duration: 0.6 }}
              className="w-full lg:w-[46%] flex-shrink-0 lg:sticky lg:top-24"
            >
              <div className="grid grid-cols-2 gap-3" style={{ height: 440 }}>
                <div className="rounded-2xl overflow-hidden row-span-2 shadow-md">
                  <img src="/image-assets/east-villa-front-view.jpg" alt="La Citadel villa" className="w-full h-full object-cover" />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-md">
                  <img src="/image-assets/quick-look-1.jpg" alt="La Citadel clubhouse" className="w-full h-full object-cover" />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-md">
                  <img src="/image-assets/seating-spaces-amenitities.jpg" alt="La Citadel amenities" className="w-full h-full object-cover" />
                </div>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div {...fade} transition={{ duration: 0.6, delay: 0.1 }} className="flex-1 min-w-0">
            <div className="card-light p-7 lg:p-9 shadow-sm">
            <div className="flex flex-col items-center mb-6 text-center">
              <div className="w-12 h-12 rounded-full bg-gold/10 border border-gold/25 flex items-center justify-center mb-3">
                <HeadphonesIcon size={20} className="text-gold" />
              </div>
              <h3 className="font-serif font-light text-xl text-ink">Quick Enquiry</h3>
              <div className="gold-divider mt-3" />
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
        </div>
      </section>

      <Section11Footer />
    </div>
  )
}
