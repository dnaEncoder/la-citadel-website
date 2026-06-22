import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Building2, Home, Trees, DoorOpen, X, Download, Info, Compass, Map, LayoutGrid } from 'lucide-react'
import EyebrowLabel from '../ui/EyebrowLabel'
import OrnamentalDivider from '../ui/OrnamentalDivider'
import BrochureModal from '../ui/BrochureModal'

const HOTSPOTS = [
  {
    id: 1, name: 'Entrance', icon: DoorOpen,
    x: 63.1, y: 42.3,
    image: '/image-assets/hotspot-entrance.jpeg',
    description: 'A grand, curated arrival experience that sets the tone for life at La Citadel — where every homecoming feels extraordinary.',
    details: [
      { label: 'Project',           value: 'La Citadel — Luxury Villa Community' },
      { label: 'Location',          value: 'Rushikonda, Visakhapatnam' },
      { label: 'Total Area',        value: 'Expansive Acres, Master Planned' },
      { label: 'Arrival Experience', value: 'Grand entrance with landscaped driveway & 24/7 security' },
    ],
  },
  {
    id: 2, name: 'Clubhouse', icon: Building2,
    x: 75.5, y: 59.2,
    image: '/image-assets/hotspot-clubhouse.jpeg',
    description: 'A spectacular 1,00,000 sq ft clubhouse with world-class amenities for fitness, social life, celebrations, and more.',
    details: [
      { label: 'Clubhouse Size',     value: '1,00,000 sq. ft.' },
      { label: 'Fitness',            value: 'Gym, Yoga Studio, Indoor Jogging Track' },
      { label: 'Social Spaces',      value: 'Club Lounge, Café, Co-Working, Rooftop Terrace' },
      { label: 'Recreation',         value: 'Infinite Pool, Indoor Pool, Indoor Games, Banquet Hall' },
    ],
  },
  {
    id: 3, name: 'Public Area', icon: Trees,
    x: 54.8, y: 56.2,
    image: '/image-assets/quick-look-1.jpg',
    description: 'Lush landscaped open spaces where families can stroll, play, and connect with nature every day.',
    details: [
      { label: 'Green Cover',    value: 'Extensively landscaped throughout the community' },
      { label: 'Features',       value: 'Parks, open lawns, garden walks & seating areas' },
      { label: 'Activities',     value: 'Walking, jogging, leisure & family recreation' },
      { label: 'Design Intent',  value: 'Bringing nature into everyday living' },
    ],
  },
  {
    id: 4, name: 'East Facing Villa', icon: Home,
    x: 47.1, y: 29.5,
    image: '/image-assets/east-villa-front-view.jpg',
    description: 'Spacious east-facing villas designed to welcome the morning sun, offering natural light and uplifting energy all day long.',
    details: [
      { label: 'Orientation',    value: 'East-facing for natural morning light' },
      { label: 'Layout',         value: 'Standard villa layout across all units' },
      { label: 'Plot Area',      value: '600 Sq. Yds.' },
      { label: 'Built-up Area',  value: '8,675 Sq. Ft. across G+2 floors' },
    ],
  },
  {
    id: 5, name: 'West Facing Villa', icon: Home,
    x: 56.4, y: 78.4,
    image: '/image-assets/amenities-la-citadel.jpg',
    description: 'Elegant west-facing villas offering pleasant evening light and stunning sunset views from your own home.',
    details: [
      { label: 'Orientation',    value: 'West-facing for warm evening light' },
      { label: 'Layout',         value: 'Standard villa layout across all units' },
      { label: 'Plot Area',      value: '600 Sq. Yds.' },
      { label: 'Built-up Area',  value: '8,476 Sq. Ft. across G+2 floors' },
    ],
  },
  {
    id: 6, name: 'Luxury Villas', icon: LayoutGrid,
    x: 30.3, y: 29.5,
    image: '/image-assets/quick-look-2.jpg',
    soldOut: true,
    description: 'An exclusive collection of luxury villas — part of La Citadel\'s premium offering. This phase has been fully sold out.',
    details: [
      { label: 'Status',         value: '🔴 Fully Sold Out' },
      { label: 'Villa Type',     value: 'Premium Luxury Villas' },
      { label: 'Community',      value: 'Part of La Citadel gated enclave' },
      { label: 'Availability',   value: 'No units remaining in this phase' },
    ],
  },
]

const TOUR_STEPS = ['Entrance', 'Clubhouse', 'Public Area', 'East Villa', 'West Villa', 'Luxury Villas']

const fade = { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: '-80px' } }

export default function Section5MasterPlan() {
  const [active, setActive]       = useState(0)
  const [tourMode, setTourMode]   = useState(false)
  const [brochureOpen, setBrochureOpen] = useState(false)

  const spot = HOTSPOTS[active]

  const tourStep = HOTSPOTS.findIndex(h =>
    TOUR_STEPS[active] && h.name.toLowerCase().includes(TOUR_STEPS[active]?.toLowerCase())
  )

  return (
    <section id="master-plan" className="bg-ivory section-pad">
      <div className="container-wide">

        {/* Top header */}
        <motion.div {...fade} transition={{ duration: 0.6 }} className="mb-8">
          <EyebrowLabel>Interactive Master Plan</EyebrowLabel>
          <h2 className="heading-xl mt-4 mb-4">
            Explore La Citadel,<br />
            <span className="text-gold">Interactively</span>
          </h2>
          <p className="body-md max-w-xl">
            Click on different parts of the master plan to explore features, amenities, green spaces and connectivity. Experience the community before you arrive.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-6 mb-6">

          {/* Left — master plan */}
          <motion.div {...fade} transition={{ duration: 0.6, delay: 0.15 }} className="flex-1 min-w-0">
            <div className="relative rounded-2xl overflow-hidden border border-beige" style={{ aspectRatio: '4/3' }}>
              {/* Master plan image */}
              <img src="/image-assets/master-plan-hotspot-image.png" alt="Master Plan" className="absolute inset-0 w-full h-full object-cover" />

              {/* Compass */}
              <div className="absolute top-3 left-3 w-8 h-8 rounded-full bg-white/80 border border-beige flex items-center justify-center shadow-sm">
                <Compass size={14} className="text-gold" />
              </div>

              {/* Hotspot pills */}
              {HOTSPOTS.map((h, i) => {
                const isActive = active === i
                return (
                  <button
                    key={h.id}
                    onClick={() => setActive(i)}
                    className="absolute -translate-x-1/2 -translate-y-1/2 group"
                    style={{ left: `${h.x}%`, top: `${h.y}%` }}
                  >
                    {/* Pulse ring */}
                    {isActive && (
                      <span className="absolute inset-0 rounded-full border-2 border-gold animate-ping opacity-60" />
                    )}
                    <div className={`relative flex items-center gap-1.5 px-3 py-1.5 rounded-full border shadow-sm text-[10px] font-medium tracking-wide transition-all duration-200
                      ${isActive
                        ? 'bg-gold text-white border-gold shadow-gold/30'
                        : 'bg-white/90 text-ink border-beige group-hover:border-gold/60 group-hover:shadow-md'
                      }`}
                    >
                      <span className={`w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 ${isActive ? 'bg-white/25' : 'bg-gold/10'}`}>
                        <span className={`text-[9px] font-bold ${isActive ? 'text-white' : 'text-gold'}`}>{h.id}</span>
                      </span>
                      <span className="hidden sm:inline whitespace-nowrap">{h.name}</span>
                    </div>
                  </button>
                )
              })}
            </div>
          </motion.div>

          {/* Right — detail panel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -16 }}
              transition={{ duration: 0.3 }}
              className="w-full lg:w-80 flex-shrink-0"
            >
              <div className="card-light shadow-sm h-full flex flex-col">
                {/* Panel header */}
                <div className="flex items-center gap-3 p-4 border-b border-beige">
                  <div className="w-7 h-7 rounded-full bg-gold text-white flex items-center justify-center text-xs font-bold flex-shrink-0">
                    {spot.id}
                  </div>
                  <p className="font-medium text-ink text-sm flex-1">{spot.name}</p>
                  <button
                    onClick={() => setActive(0)}
                    className="text-muted/50 hover:text-muted transition-colors"
                  >
                    <X size={14} />
                  </button>
                </div>

                {/* Panel image */}
                <div className="mx-4 mt-4 rounded-xl overflow-hidden" style={{ aspectRatio: '16/9' }}>
                  <img src={spot.image} alt={spot.name} className="w-full h-full object-cover" />
                </div>

                {/* Description */}
                <p className="text-xs text-muted leading-relaxed mx-4 mt-4">{spot.description}</p>

                {/* Detail list */}
                <div className="flex flex-col gap-0 mx-4 mt-4 flex-1">
                  {spot.details.map(({ label, value }) => (
                    <div key={label} className="py-2.5 border-b border-beige last:border-0">
                      <p className="text-[10px] font-medium text-muted uppercase tracking-wider mb-0.5">{label}</p>
                      <p className="text-xs text-ink">{value}</p>
                    </div>
                  ))}
                </div>

                {/* Panel buttons */}
                <div className="p-4 flex flex-col gap-2 border-t border-beige mt-2">
                  <button className="btn-gold justify-center text-[11px] py-2.5">
                    <Info size={12} />
                    Know more about this feature
                  </button>
                  <button onClick={() => setBrochureOpen(true)} className="btn-outline justify-center text-[11px] py-2.5">
                    <Download size={12} />
                    Download Brochure
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Guided tour row */}
        <motion.div {...fade} transition={{ duration: 0.6, delay: 0.3 }} className="card-light p-5 mb-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="flex items-center gap-3 flex-shrink-0">
              <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-ink">Guided Tour Mode</span>
              <button
                onClick={() => setTourMode(v => !v)}
                className={`relative w-10 h-5 rounded-full transition-colors duration-200 ${tourMode ? 'bg-gold' : 'bg-beige'}`}
              >
                <span className={`absolute top-0.5 w-4 h-4 rounded-full bg-white shadow transition-transform duration-200 ${tourMode ? 'translate-x-5' : 'translate-x-0.5'}`} />
              </button>
            </div>

            <p className="text-xs text-muted hidden sm:block">Step through key highlights of La Citadel</p>

            {/* Stepper */}
            <div className="flex items-center gap-1 flex-wrap sm:flex-nowrap ml-auto">
              {TOUR_STEPS.map((step, i) => (
                <div key={step} className="flex items-center gap-1">
                  <button
                    onClick={() => setActive(i)}
                    className={`flex flex-col items-center gap-1 group`}
                  >
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center text-[9px] font-bold transition-colors ${
                      i === active
                        ? 'bg-gold border-gold text-white'
                        : 'border-beige text-muted group-hover:border-gold/50'
                    }`}>
                      {i + 1}
                    </div>
                    <span className={`text-[9px] tracking-wide hidden sm:block ${i === active ? 'text-gold' : 'text-muted'}`}>
                      {step}
                    </span>
                  </button>
                  {i < TOUR_STEPS.length - 1 && (
                    <div className="w-4 h-px border-t border-dashed border-beige mb-3 hidden sm:block" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div {...fade} transition={{ duration: 0.5, delay: 0.45 }}>
          <OrnamentalDivider text="La Citadel — Where Luxury Meets Location." />
        </motion.div>
      </div>

      <BrochureModal open={brochureOpen} onClose={() => setBrochureOpen(false)} />
    </section>
  )
}
