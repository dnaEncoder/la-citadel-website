import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Download, User, Phone, Mail, Loader2, CheckCircle2 } from 'lucide-react'

const BROCHURE_URL = 'https://drive.google.com/file/d/1AlRQ-ZCmOc7XRYrifsYKHpKlybHNXnNw/view?usp=sharing'

export default function BrochureModal({ open, onClose }) {
  const [form, setForm] = useState({ name: '', phone: '', email: '' })
  const [status, setStatus] = useState('idle') // idle | submitting | success | error
  const [errorMsg, setErrorMsg] = useState('')

  useEffect(() => {
    if (!open) return
    setForm({ name: '', phone: '', email: '' })
    setStatus('idle')
    setErrorMsg('')
  }, [open])

  useEffect(() => {
    if (!open) return
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onClose])

  const handleChange = (field, value) => setForm(f => ({ ...f, [field]: value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.name || !form.phone || !form.email) return

    setStatus('submitting')
    setErrorMsg('')

    try {
      const res = await fetch('/api/brochure', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Something went wrong')
      setStatus('success')
    } catch (err) {
      setStatus('error')
      setErrorMsg(err.message || 'Failed to send brochure. Please try again.')
    }
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-charcoal/70 backdrop-blur-sm flex items-center justify-center px-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{ duration: 0.25 }}
            onClick={e => e.stopPropagation()}
            className="card-light w-full max-w-sm p-7 relative shadow-2xl"
          >
            <button onClick={onClose} className="absolute top-4 right-4 text-muted/60 hover:text-ink transition-colors">
              <X size={18} />
            </button>

            {status === 'success' ? (
              <div className="flex flex-col items-center text-center py-4">
                <div className="w-12 h-12 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center mb-4">
                  <CheckCircle2 size={22} className="text-green-600" />
                </div>
                <h3 className="font-serif font-light text-xl text-ink mb-2">Brochure Sent!</h3>
                <p className="text-xs text-muted leading-relaxed mb-5">
                  We've emailed the brochure to <span className="text-ink font-medium">{form.email}</span>. You can also download it directly below.
                </p>
                <a href={BROCHURE_URL} target="_blank" rel="noopener noreferrer" className="btn-gold justify-center w-full">
                  <Download size={14} />
                  Download Now
                </a>
              </div>
            ) : (
              <>
                <div className="flex flex-col items-center mb-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-gold/10 border border-gold/25 flex items-center justify-center mb-3">
                    <Download size={20} className="text-gold" />
                  </div>
                  <h3 className="font-serif font-light text-xl text-ink">Get the Brochure</h3>
                  <p className="text-xs text-muted mt-2">Enter your details and we'll send it to your inbox instantly.</p>
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
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

                  <div className="relative">
                    <input
                      type="tel"
                      placeholder="Enter your phone number"
                      required
                      value={form.phone}
                      onChange={e => handleChange('phone', e.target.value)}
                      className="w-full px-4 py-3 pr-10 bg-ivory border border-beige rounded-xl text-sm text-ink placeholder:text-muted/60 focus:outline-none focus:border-gold transition-colors"
                    />
                    <Phone size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted/50" />
                  </div>

                  <div className="relative">
                    <input
                      type="email"
                      placeholder="Enter your email address"
                      required
                      value={form.email}
                      onChange={e => handleChange('email', e.target.value)}
                      className="w-full px-4 py-3 pr-10 bg-ivory border border-beige rounded-xl text-sm text-ink placeholder:text-muted/60 focus:outline-none focus:border-gold transition-colors"
                    />
                    <Mail size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted/50" />
                  </div>

                  <button type="submit" disabled={status === 'submitting'} className="btn-gold justify-center w-full mt-1 disabled:opacity-60 disabled:cursor-not-allowed">
                    {status === 'submitting' ? (
                      <>
                        <Loader2 size={14} className="animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Download size={14} />
                        Send Me the Brochure
                      </>
                    )}
                  </button>

                  {status === 'error' && (
                    <p className="text-xs text-red-500 text-center">{errorMsg}</p>
                  )}
                </form>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
