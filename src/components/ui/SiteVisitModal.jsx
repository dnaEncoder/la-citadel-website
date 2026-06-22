import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Calendar, User, Phone, Mail, Clock, Loader2, CheckCircle2 } from 'lucide-react'

const TIME_SLOTS = ['10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM']

const todayStr = () => new Date().toISOString().split('T')[0]

export default function SiteVisitModal({ open, onClose }) {
  const [form, setForm] = useState({ name: '', phone: '', email: '', date: '', time: '' })
  const [status, setStatus] = useState('idle') // idle | submitting | success | error
  const [errorMsg, setErrorMsg] = useState('')

  useEffect(() => {
    if (!open) return
    setForm({ name: '', phone: '', email: '', date: '', time: '' })
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
    if (!form.name || !form.phone || !form.email || !form.date || !form.time) return

    setStatus('submitting')
    setErrorMsg('')

    try {
      const res = await fetch('/api/site-visit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Something went wrong')
      setStatus('success')
    } catch (err) {
      setStatus('error')
      setErrorMsg(err.message || 'Failed to schedule your visit. Please try again.')
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
            className="card-light w-full max-w-md p-7 relative shadow-2xl max-h-[90vh] overflow-y-auto"
          >
            <button onClick={onClose} className="absolute top-4 right-4 text-muted/60 hover:text-ink transition-colors">
              <X size={18} />
            </button>

            {status === 'success' ? (
              <div className="flex flex-col items-center text-center py-4">
                <div className="w-12 h-12 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center mb-4">
                  <CheckCircle2 size={22} className="text-green-600" />
                </div>
                <h3 className="font-serif font-light text-xl text-ink mb-2">Visit Scheduled!</h3>
                <p className="text-xs text-muted leading-relaxed mb-1">
                  Your site visit is booked for <span className="text-ink font-medium">{form.date}</span> at <span className="text-ink font-medium">{form.time}</span>.
                </p>
                <p className="text-xs text-muted leading-relaxed mb-5">
                  A confirmation has been sent to <span className="text-ink font-medium">{form.email}</span>.
                </p>
                <button onClick={onClose} className="btn-gold justify-center w-full">
                  Done
                </button>
              </div>
            ) : (
              <>
                <div className="flex flex-col items-center mb-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-gold/10 border border-gold/25 flex items-center justify-center mb-3">
                    <Calendar size={20} className="text-gold" />
                  </div>
                  <h3 className="font-serif font-light text-xl text-ink">Schedule a Site Visit</h3>
                  <p className="text-xs text-muted mt-2">Pick a date and time, and we'll confirm your visit by email.</p>
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

                  <div className="relative">
                    <input
                      type="date"
                      required
                      min={todayStr()}
                      value={form.date}
                      onChange={e => handleChange('date', e.target.value)}
                      className="w-full px-4 py-3 pr-10 bg-ivory border border-beige rounded-xl text-sm text-ink placeholder:text-muted/60 focus:outline-none focus:border-gold transition-colors"
                    />
                    <Calendar size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted/50 pointer-events-none" />
                  </div>

                  <div>
                    <label className="text-[11px] font-medium tracking-wide text-ink mb-2 flex items-center gap-1.5">
                      <Clock size={12} className="text-muted/60" />
                      Preferred Time
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {TIME_SLOTS.map(slot => (
                        <button
                          key={slot}
                          type="button"
                          onClick={() => handleChange('time', slot)}
                          className={`px-2 py-2 rounded-lg border text-[11px] font-medium transition-all duration-200 ${
                            form.time === slot
                              ? 'bg-gold text-white border-gold'
                              : 'bg-ivory text-ink border-beige hover:border-gold/50'
                          }`}
                        >
                          {slot}
                        </button>
                      ))}
                    </div>
                  </div>

                  <button type="submit" disabled={status === 'submitting'} className="btn-gold justify-center w-full mt-1 disabled:opacity-60 disabled:cursor-not-allowed">
                    {status === 'submitting' ? (
                      <>
                        <Loader2 size={14} className="animate-spin" />
                        Scheduling...
                      </>
                    ) : (
                      <>
                        <Calendar size={14} />
                        Confirm Site Visit
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
