import { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, Instagram, Facebook, Youtube, MessageCircle, Building2, Waves, Dumbbell, Coffee, Users, Star, Send } from 'lucide-react'
import BrochureModal from '../ui/BrochureModal'

const fade = { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: '-60px' } }

const EXPLORE = ['Home', 'Project Overview', 'Amenities', 'Gallery', 'Location', 'Master Plan']
const VILLAS  = ['East Facing Villa', 'West Facing Villa', 'North East Facing Villa', 'Villa Features', 'Floor Plans', 'Specifications']
const INFO    = ['About La Citadel', 'Why Coastal Living', 'Investment Potential', "FAQ's", 'Blog']

const SOCIAL = [
  { icon: Instagram,    label: 'Instagram',  href: '#' },
  { icon: Facebook,     label: 'Facebook',   href: '#' },
  { icon: Youtube,      label: 'YouTube',    href: '#' },
  { icon: MessageCircle,label: 'WhatsApp',   href: 'https://chat.whatsapp.com/JJOSPLEvn5CL1YfgltwMB5' },
]

const CLUBHOUSE_AMENITIES = [
  { icon: Waves,    label: 'Wellness & Spa' },
  { icon: Waves,    label: 'Swimming Pool' },
  { icon: Dumbbell, label: 'Fitness Centre' },
  { icon: Coffee,   label: 'Café & Lounge' },
  { icon: Users,    label: 'Banquet & Events' },
  { icon: Star,     label: 'Kids Play Area' },
]

export default function Section11Footer() {
  const [brochureOpen, setBrochureOpen] = useState(false)

  return (
    <footer id="footer" className="bg-charcoal relative overflow-hidden">
      {/* Background decorative image placeholder */}
      <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-15">
        <div className="w-full h-full placeholder-bg-dark" />
      </div>

      {/* Gold corner decorations */}
      <div className="absolute top-0 left-0 w-24 h-24 border-t border-l border-gold/20 rounded-none pointer-events-none" />
      <div className="absolute top-0 right-0 w-24 h-24 border-t border-r border-gold/20 rounded-none pointer-events-none" />

      <div className="relative z-10">

        {/* Main footer columns */}
        <div className="max-w-site mx-auto px-6 lg:px-16 pt-16 pb-10">
          <motion.div {...fade} transition={{ duration: 0.6 }} className="grid grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6">

            {/* Col 1: Brand */}
            <div className="col-span-2 lg:col-span-1">
              <img src="/logo.png" alt="La Citadel" className="h-10 w-auto object-contain mb-4" />
              <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-gold/80 mb-3">On The Hills – Off The Sea</p>
              <p className="text-xs text-white/45 leading-relaxed mb-5">
                La Citadel is a premium coastal villa community at Rushikonda, Vizag, crafted for those who seek the finest in life. Where the hills embrace the sea and luxury becomes your everyday.
              </p>
              <div className="flex items-center gap-2">
                {SOCIAL.map(({ icon: Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-8 h-8 rounded-full border border-gold/35 flex items-center justify-center text-white/50 hover:text-gold hover:border-gold transition-colors"
                  >
                    <Icon size={14} />
                  </a>
                ))}
              </div>
            </div>

            {/* Col 2: Explore */}
            <div>
              <p className="text-[10px] font-medium tracking-[0.22em] uppercase text-gold/80 mb-4">Explore</p>
              <ul className="flex flex-col gap-2.5">
                {EXPLORE.map(l => (
                  <li key={l}>
                    <a href="#" className="text-xs text-white/50 hover:text-gold transition-colors">{l}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3: Villas */}
            <div>
              <p className="text-[10px] font-medium tracking-[0.22em] uppercase text-gold/80 mb-4">Villas</p>
              <ul className="flex flex-col gap-2.5">
                {VILLAS.map(l => (
                  <li key={l}>
                    <a href="#" className="text-xs text-white/50 hover:text-gold transition-colors">{l}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 4: Information */}
            <div>
              <p className="text-[10px] font-medium tracking-[0.22em] uppercase text-gold/80 mb-4">Information</p>
              <ul className="flex flex-col gap-2.5">
                {INFO.map(l => (
                  <li key={l}>
                    <a href="#" className="text-xs text-white/50 hover:text-gold transition-colors">{l}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 5: Contact */}
            <div>
              <p className="text-[10px] font-medium tracking-[0.22em] uppercase text-gold/80 mb-4">Get in Touch</p>
              <ul className="flex flex-col gap-3 mb-5">
                {[
                  { icon: Phone,  text: '+91 98765 43210' },
                  { icon: Mail,   text: 'hello@lacitadel.com' },
                  { icon: MapPin, text: 'Rushikonda, Visakhapatnam, Andhra Pradesh' },
                  { icon: Clock,  text: 'Mon – Sun: 10:00 AM – 7:00 PM' },
                ].map(({ icon: Icon, text }) => (
                  <li key={text} className="flex gap-2.5 items-start">
                    <Icon size={13} className="text-gold/70 mt-0.5 flex-shrink-0" />
                    <span className="text-[11px] text-white/50 leading-snug">{text}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-2">
                <button className="btn-gold text-[13px] py-3 justify-center">Book a Site Visit</button>
                <button onClick={() => setBrochureOpen(true)} className="btn-dark-outline text-[13px] py-3 justify-center">
                  Download Brochure
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Clubhouse highlight strip */}
        <motion.div {...fade} transition={{ duration: 0.6, delay: 0.1 }} className="mx-6 lg:mx-16 rounded-2xl border border-gold/20 overflow-hidden mb-4">
          <div className="flex flex-col sm:flex-row items-center gap-6 px-6 py-5 bg-charcoal-mid">
            <div className="flex-shrink-0 text-center sm:text-left">
              <p className="text-[10px] text-white/45 tracking-wider uppercase mb-1">At the heart of La Citadel</p>
              <p className="font-serif font-light text-2xl text-gold">1,00,000 Sq. Ft.</p>
              <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-white/60 mt-0.5">Premium Clubhouse</p>
            </div>
            <div className="w-px self-stretch bg-gold/20 hidden sm:block" />
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 flex-1">
              {CLUBHOUSE_AMENITIES.map(({ icon: Icon, label }) => (
                <div key={label} className="flex flex-col items-center gap-1.5">
                  <Icon size={16} className="text-gold/70" />
                  <p className="text-[9px] text-white/45 tracking-wider uppercase">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Newsletter card */}
        <motion.div {...fade} transition={{ duration: 0.6, delay: 0.15 }} className="mx-6 lg:mx-16 rounded-2xl border border-gold/20 overflow-hidden mb-8">
          <div className="flex flex-col sm:flex-row items-center gap-6 px-6 py-5 bg-charcoal-mid">
            <div className="w-10 h-10 rounded-full bg-gold/15 border border-gold/30 flex items-center justify-center flex-shrink-0">
              <Mail size={18} className="text-gold" />
            </div>
            <div className="flex-1 text-center sm:text-left">
              <p className="text-sm font-medium text-white mb-1">Stay updated with La Citadel</p>
              <p className="text-xs text-white/45 leading-snug">Join our community to receive the latest updates, exclusive previews and important announcements.</p>
            </div>
            <div className="flex gap-2 w-full sm:w-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 sm:w-52 px-4 py-2.5 bg-charcoal-soft border border-gold/25 rounded-full text-xs text-white placeholder:text-white/30 focus:outline-none focus:border-gold/50 transition-colors"
              />
              <button className="w-10 h-10 rounded-full bg-gold flex items-center justify-center hover:bg-gold-mid transition-colors flex-shrink-0">
                <Send size={14} className="text-white" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Bottom bar */}
        <div className="border-t border-gold/10 mx-6 lg:mx-16">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 py-5 text-[10px] text-white/35">
            <p>© 2025 La Citadel. All rights reserved.</p>
            <p className="flex items-center gap-2">
              <span className="text-gold/40" style={{ fontSize: 8 }}>🐚</span>
              On The Hills – Off The Sea.
            </p>
            <div className="flex items-center gap-4">
              {['Privacy Policy', 'Terms & Conditions', 'Disclaimer'].map(l => (
                <a key={l} href="#" className="hover:text-gold/60 transition-colors">{l}</a>
              ))}
            </div>
          </div>
        </div>

      </div>

      <BrochureModal open={brochureOpen} onClose={() => setBrochureOpen(false)} />
    </footer>
  )
}
