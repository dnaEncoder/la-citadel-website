import { useState } from 'react'
import { motion } from 'framer-motion'
import { Play, MessageCircle, MapPin, Home, Mountain, Building2, ChevronDown } from 'lucide-react'
import Navbar from '../Navbar'
import VideoModal from '../ui/VideoModal'

const CHIPS = [
  { icon: Home, label: 'Bayfront Villas' },
  { icon: MapPin, label: 'Rushikonda, Vizag' },
  { icon: Mountain, label: 'Hillside Living' },
  { icon: Building2, label: 'Clubhouse Lifestyle' },
]

export default function Section1Hero() {
  const [videoOpen, setVideoOpen] = useState(false)

  return (
    <section id="hero" className="relative min-h-screen flex flex-col overflow-hidden bg-charcoal">

      {/* Background image — contain shows the full image; charcoal bg + gradients cover any gap */}
      <img
        src="/image-assets/hero_section.jpg"
        alt=""
        className="absolute inset-0 w-full h-full object-cover object-center"
        aria-hidden="true"
      />

      {/* Gradient overlays for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal/15 via-charcoal/20 to-charcoal/78" />
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/65 via-transparent to-charcoal/45" />

      <Navbar />

      {/* Main hero content — text block pushed to top-right */}
      <div className="relative z-10 flex-1 flex flex-col justify-start w-full max-w-site mx-auto px-6 lg:px-16 pt-[68px]">
        <div className="w-full lg:max-w-[560px] pt-10 lg:pt-16">

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          >
            <p className="text-[13px] font-medium tracking-[0.3em] uppercase text-gold-light mb-5">
              On The Hills – Off The Sea
            </p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.35 }}
            className="font-serif font-light text-white leading-editorial mb-6"
            style={{ fontSize: 'clamp(2.8rem, 5vw, 4.5rem)' }}
          >
            A Homecoming<br />
            Above the Sea
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="text-white/65 text-lg leading-relaxed mb-8"
          >
            Bayfront luxury villas in Rushikonda, designed around greenery, ocean views, and a grand sense of arrival.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="flex flex-wrap gap-3"
          >
            <button onClick={() => setVideoOpen(true)} className="btn-gold">
              <Play size={15} fill="currentColor" />
              Watch Master Film
            </button>
            <a href="https://chat.whatsapp.com/JJOSPLEvn5CL1YfgltwMB5" target="_blank" rel="noopener noreferrer" className="btn-dark-outline">
              <MessageCircle size={15} />
              Get Brochure on WhatsApp
            </a>
          </motion.div>

        </div>
      </div>

      {/* Feature chips */}
      <div className="relative z-10 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.85 }}
          className="container-wide flex flex-wrap justify-center gap-3"
        >
          {CHIPS.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-2 px-4 py-2.5 bg-white/6 border border-white/18 rounded-xl backdrop-blur-sm"
            >
              <Icon size={15} className="text-gold" />
              <span className="text-white/80 text-[13px] font-medium tracking-wider">{label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-5 left-0 right-0 hidden sm:flex items-center gap-3 px-8 pointer-events-none"
      >
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gold/40 to-gold/60" />
        <div className="flex items-center gap-2 px-4 py-2 border border-gold/35 rounded-xl bg-charcoal/40 backdrop-blur-sm">
          <ChevronDown size={12} className="text-gold animate-bounce" />
          <span className="text-white/55 text-[12px] tracking-[0.22em] uppercase">Scroll to experience La Citadel</span>
        </div>
        <div className="flex-1 h-px bg-gradient-to-l from-transparent via-gold/40 to-gold/60" />
      </motion.div>

      <VideoModal open={videoOpen} onClose={() => setVideoOpen(false)} />
    </section>
  )
}
