import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Home, Shield, TrendingUp, Check, ArrowRight, Maximize2, Building2, X, FileText, MessageCircle } from 'lucide-react'
import EyebrowLabel from '../ui/EyebrowLabel'
import OrnamentalDivider from '../ui/OrnamentalDivider'
import StatsBar from '../ui/StatsBar'

const fade = { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: '-80px' } }

const BENEFITS = [
  { icon: Home,      label: 'Spacious Private Living' },
  { icon: Shield,    label: 'Privacy & Exclusivity' },
  { icon: TrendingUp, label: 'Long-Term Value' },
]

const VILLAS = [
  {
    name: 'East Facing Villa',
    subtitle: 'Standard layout. East-facing orientation.',
    image: '/image-assets/east-villa-front-view.jpg',
    floorPlan: '/image-assets/east-villa-floor-plan.jpg',
    streetView: '/image-assets/east-villa-street-view.jpg',
    features: [
      'Standard layout across all villas',
      'East-facing orientation for natural light and uplifting mornings',
      'Spacious planning for comfortable living',
      'Privacy-focused design for family well-being',
    ],
  },
  {
    name: 'West Facing Villa',
    subtitle: 'Standard layout. West-facing orientation.',
    image: '/image-assets/west-villa-front-view.jpg',
    floorPlan: '/image-assets/west-villa-floor-plan.jpg',
    streetView: '/image-assets/west-villa-street-view.jpg',
    features: [
      'Standard layout across all villas',
      'West-facing orientation for pleasant evenings and balanced light',
      'Spacious planning for comfortable living',
      'Privacy-focused design for family well-being',
    ],
  },
]

const STATS = [
  { icon: Maximize2,  title: 'Total Land Extent', subtitle: 'Expansive Acres' },
  { icon: Home,       title: 'Open Spaces',        subtitle: 'Green & Serene' },
  { icon: Building2,  title: 'Clubhouse',           subtitle: 'Lifestyle Amenities' },
  { icon: Shield,     title: 'Secure Community',    subtitle: 'Safety & Privacy' },
  { icon: TrendingUp, title: 'Investment Value',    subtitle: 'Long-Term Growth' },
]

function FloorPlanModal({ villa, onClose }) {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-charcoal/80 backdrop-blur-sm" />
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.25 }}
        className="relative bg-ivory rounded-2xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-beige">
          <div>
            <h3 className="font-serif font-light text-xl text-ink">{villa.name}</h3>
            <p className="text-[11px] text-muted mt-0.5">{villa.subtitle}</p>
          </div>
          <button onClick={onClose} className="p-2 rounded-full hover:bg-sand transition-colors text-muted hover:text-ink">
            <X size={18} />
          </button>
        </div>

        {/* Images */}
        <div className="p-6 flex flex-col gap-4">
          <div className="rounded-xl overflow-hidden border border-beige">
            <img src={villa.floorPlan} alt={`${villa.name} — Floor Plan`} className="w-full h-auto object-contain bg-white" />
          </div>
          <div className="rounded-xl overflow-hidden shadow-md" style={{ aspectRatio: '16/9' }}>
            <img src={villa.streetView} alt={`${villa.name} — Street View`} className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Footer actions */}
        <div className="flex gap-3 px-6 pb-6">
          <button className="btn-gold flex-1 justify-center">
            <MessageCircle size={14} />
            Contact Us
          </button>
          <button className="btn-dark-outline flex-1 justify-center">
            <FileText size={14} />
            Download Brochure
          </button>
        </div>
      </motion.div>
    </div>
  )
}

export default function Section6VillaLiving() {
  const [activeVilla, setActiveVilla] = useState(null)

  return (
    <>
    <AnimatePresence>
      {activeVilla && <FloorPlanModal villa={activeVilla} onClose={() => setActiveVilla(null)} />}
    </AnimatePresence>
    <section id="villa-living" className="bg-ivory section-pad">
      <div className="container-wide">

        {/* Top 2-col */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 mb-14 lg:items-start">

          {/* Left */}
          <div className="flex-1 min-w-0 lg:sticky lg:top-24">
            <motion.div {...fade} transition={{ duration: 0.6 }}>
              <EyebrowLabel>Villa Living</EyebrowLabel>
              <h2 className="heading-xl mt-4 mb-5">
                Life at La Citadel<br />
                Feels <span className="text-gold">Different</span>
              </h2>
              <p className="body-md max-w-lg mb-8">
                Spacious villas, thoughtful layouts, and open green spaces come together to create a lifestyle that feels expansive, private, and timeless—crafted for families who value space, serenity, and long-term living.
              </p>
            </motion.div>

            <motion.div {...fade} transition={{ duration: 0.6, delay: 0.15 }} className="flex flex-wrap gap-3 mb-8">
              <button className="btn-gold">Explore Villa Types</button>
              <button className="btn-outline">View Floor Plans</button>
            </motion.div>

            {/* Mini benefit row */}
            <motion.div {...fade} transition={{ duration: 0.6, delay: 0.25 }}>
              <div className="flex items-stretch gap-0">
                {BENEFITS.map(({ icon: Icon, label }, i) => (
                  <div key={label} className="flex items-stretch">
                    <div className="flex flex-col items-center gap-2 px-5 py-3 text-center">
                      <Icon size={16} className="text-gold" />
                      <p className="text-[11px] font-medium text-ink">{label}</p>
                    </div>
                    {i < BENEFITS.length - 1 && (
                      <div className="w-px self-stretch my-2 bg-beige" />
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right — large villa interior image */}
          <motion.div {...fade} transition={{ duration: 0.6, delay: 0.2 }} className="w-full lg:w-[48%] flex-shrink-0">
            <div className="flex flex-col gap-4">
              <div className="rounded-2xl overflow-hidden shadow-md" style={{ aspectRatio: '4/3' }}>
                <img src="/image-assets/villa-interiors-1.jpg" alt="Villa interior — living room" className="w-full h-full object-cover" />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-md" style={{ aspectRatio: '4/3' }}>
                <img src="/image-assets/villa-interiors-3.jpg" alt="Villa interior — dining room" className="w-full h-full object-cover" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Villa cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10"
        >
          {VILLAS.map(({ name, subtitle, image, floorPlan, streetView, features }) => (
            <motion.div
              key={name}
              variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55 } } }}
              className="card-light overflow-hidden"
            >
              {/* Card image */}
              <div style={{ aspectRatio: '4/3' }}>
                <img src={image} alt={name} className="w-full h-full object-cover" />
              </div>

              <div className="p-5">
                <h3 className="font-serif font-light text-xl text-ink mb-1">{name}</h3>
                <p className="text-[11px] text-muted mb-4">{subtitle}</p>

                <ul className="flex flex-col gap-2 mb-5">
                  {features.map(f => (
                    <li key={f} className="flex gap-2 items-start text-[11px] text-muted leading-snug">
                      <Check size={12} className="text-gold mt-0.5 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => setActiveVilla({ name, subtitle, floorPlan, streetView })}
                  className="flex items-center gap-1.5 text-[11px] font-medium text-gold hover:gap-2.5 transition-all"
                >
                  View Floor Plan
                  <ArrowRight size={12} />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats bar */}
        <motion.div {...fade} transition={{ duration: 0.6, delay: 0.3 }}>
          <StatsBar items={STATS} tagline="La Citadel — Where Luxury Meets Location." />
        </motion.div>

        <motion.div {...fade} transition={{ duration: 0.5, delay: 0.35 }} className="mt-6">
          <OrnamentalDivider text="La Citadel — Where Luxury Meets Location." />
        </motion.div>
      </div>
    </section>
    </>
  )
}
