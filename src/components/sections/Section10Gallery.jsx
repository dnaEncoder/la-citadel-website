import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Eye, Image, Maximize2 } from 'lucide-react'
import EyebrowLabel from '../ui/EyebrowLabel'
import OrnamentalDivider from '../ui/OrnamentalDivider'
import StatsBar from '../ui/StatsBar'

const fade = { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: '-80px' } }

const FILTERS = ['All Visuals', 'Villas', 'Clubhouse', 'Amenities', 'Master Plan', 'Location', 'Aerial Views']

const GALLERY = [
  // Villas
  { id: 1,  cat: 'villas',     label: 'East Villa — Front View',   src: '/image-assets/east-villa-front-view.jpg' },
  { id: 2,  cat: 'villas',     label: 'West Villa — Front View',   src: '/image-assets/west-villa-front-view.jpg' },
  { id: 3,  cat: 'villas',     label: 'Villa Community',           src: '/image-assets/quick-look-2.jpg' },
  { id: 4,  cat: 'villas',     label: 'East Villa — Street View',  src: '/image-assets/east-villa-street-view.jpg' },
  { id: 5,  cat: 'villas',     label: 'West Villa — Street View',  src: '/image-assets/west-villa-street-view.jpg' },
  { id: 6,  cat: 'villas',     label: 'Villa Interiors',           src: '/image-assets/villa-interiors-1.jpg' },
  { id: 7,  cat: 'villas',     label: 'Villa Interiors',           src: '/image-assets/villa-interiors-2.jpg' },
  { id: 8,  cat: 'villas',     label: 'Villa Interiors',           src: '/image-assets/villa-interiors-3.jpg' },
  // Clubhouse
  { id: 9,  cat: 'clubhouse',  label: 'Clubhouse Reception',       src: '/image-assets/club-house-reception-1.jpeg' },
  { id: 10, cat: 'clubhouse',  label: 'Clubhouse Lobby',           src: '/image-assets/club-house-reception-2.jpeg' },
  { id: 11, cat: 'clubhouse',  label: 'Clubhouse Lounge',          src: '/image-assets/club-house-reception-3.jpeg' },
  { id: 12, cat: 'clubhouse',  label: 'Clubhouse Interior',        src: '/image-assets/club-house-reception-4.jpeg' },
  { id: 13, cat: 'clubhouse',  label: 'Grand Entrance Lobby',      src: '/image-assets/hotspot-entrance.jpeg' },
  { id: 14, cat: 'clubhouse',  label: 'Grand Lobby',               src: '/image-assets/hotspot-clubhouse.jpeg' },
  { id: 15, cat: 'clubhouse',  label: 'Clubhouse Overview',        src: '/image-assets/quick-look-1.jpg' },
  // Amenities
  { id: 16, cat: 'amenities',  label: 'Gym & Fitness Centre',      src: '/image-assets/gym-club-house.jpg' },
  { id: 17, cat: 'amenities',  label: 'Yoga Studio',               src: '/image-assets/yoga-studio-club-hosue.jpg' },
  { id: 18, cat: 'amenities',  label: 'Badminton Court',           src: '/image-assets/badminton-court.jpg' },
  { id: 19, cat: 'amenities',  label: 'Social Lounge',             src: '/image-assets/club-house-social-life-1.jpg' },
  { id: 20, cat: 'amenities',  label: 'Social Spaces',             src: '/image-assets/club-house-social-life-2.jpg' },
  { id: 21, cat: 'amenities',  label: 'Community Life',            src: '/image-assets/club-house-social-life-3.jpg' },
  { id: 22, cat: 'amenities',  label: 'Celebration Hall',          src: '/image-assets/club-house-celebration-1.jpg' },
  { id: 23, cat: 'amenities',  label: 'Event Space',               src: '/image-assets/club-house-celebration-2.jpg' },
  { id: 24, cat: 'amenities',  label: 'Infinite Pool',             src: '/image-assets/club-house-infintie-pool-1.jpg' },
  { id: 25, cat: 'amenities',  label: 'Infinite Pool View',        src: '/image-assets/club-house-infinite-pool-2.jpg' },
  { id: 26, cat: 'amenities',  label: 'Indoor Pool',               src: '/image-assets/club-house-indoor-pool-1.jpg' },
  { id: 27, cat: 'amenities',  label: 'Indoor Pool Area',          src: '/image-assets/club-house-indoor-pool-2.jpg' },
  { id: 28, cat: 'amenities',  label: 'Guest Lounge',              src: '/image-assets/club-house-guest-1.jpg' },
  { id: 29, cat: 'amenities',  label: 'Guest Experience',          src: '/image-assets/club-hosue-guests-2.jpg' },
  { id: 30, cat: 'amenities',  label: 'Amphitheatre',              src: '/image-assets/amphitheatre-aminities.jpg' },
  { id: 31, cat: 'amenities',  label: 'Play Area',                 src: '/image-assets/play-area-amenities.jpg' },
  { id: 32, cat: 'amenities',  label: 'Seating Spaces',            src: '/image-assets/seating-spaces-amenitities.jpg' },
  { id: 33, cat: 'amenities',  label: 'Volleyball Court',          src: '/image-assets/volleyballl-court-amenities.jpg' },
  { id: 34, cat: 'amenities',  label: 'La Citadel Amenities',      src: '/image-assets/amenities-la-citadel.jpg' },
  // Master Plan
  { id: 35, cat: 'masterplan', label: 'Master Plan',               src: '/image-assets/master-plan-hotspot-image.png' },
  // Location
  { id: 36, cat: 'location',   label: 'Location Overview',         src: '/image-assets/location_growth_image.jpg' },
  // Aerial Views
  { id: 37, cat: 'aerial',     label: 'Aerial View',               src: '/image-assets/areal-view.jpg' },
]

const CAT_MAP = {
  'All Visuals': null,
  'Villas':      'villas',
  'Clubhouse':   'clubhouse',
  'Amenities':   'amenities',
  'Master Plan': 'masterplan',
  'Location':    'location',
  'Aerial Views':'aerial',
}

const STATS = [
  { icon: Image,     title: '37+',       subtitle: 'Curated Visuals' },
  { icon: Eye,       title: 'Detailed',  subtitle: 'Master Plan Views' },
  { icon: Maximize2, title: 'Aerial',    subtitle: 'Shots & Perspectives' },
  { icon: Eye,       title: 'HD Quality', subtitle: 'Renders & Photos' },
]

export default function Section10Gallery() {
  const [activeFilter, setActiveFilter] = useState('All Visuals')
  const [featuredIdx, setFeaturedIdx]   = useState(0)

  const filtered = GALLERY.filter(item => {
    const cat = CAT_MAP[activeFilter]
    return cat === null || item.cat === cat
  })

  const featured = filtered[featuredIdx] || filtered[0]

  const prev = () => setFeaturedIdx(i => (i - 1 + filtered.length) % filtered.length)
  const next = () => setFeaturedIdx(i => (i + 1) % filtered.length)

  return (
    <section id="gallery" className="bg-ivory section-pad">
      <div className="container-wide">

        {/* Top 2-col */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 mb-10">

          {/* Left */}
          <div className="flex-1 min-w-0 flex flex-col justify-center">
            <motion.div {...fade} transition={{ duration: 0.6 }}>
              <EyebrowLabel>Gallery / Visual Experience</EyebrowLabel>
              <h2 className="heading-xl mt-4 mb-5">
                See La Citadel,<br />
                <span className="text-gold">Experience the Setting</span>
              </h2>
              <p className="body-md max-w-md mb-8">
                Explore La Citadel through a curated collection of master plan views, villa renders, clubhouse visuals, amenity spaces, and location highlights.
              </p>
            </motion.div>
            <motion.div {...fade} transition={{ duration: 0.6, delay: 0.12 }} className="flex flex-wrap gap-3">
              <button className="btn-gold">View Full Gallery</button>
              <button className="btn-outline">Download Brochure</button>
            </motion.div>
          </div>

          {/* Right — featured image */}
          <motion.div {...fade} transition={{ duration: 0.6, delay: 0.2 }} className="w-full lg:w-[50%] flex-shrink-0 relative">
            <div className="relative rounded-2xl overflow-hidden border border-beige shadow-sm" style={{ aspectRatio: '4/3' }}>
              <AnimatePresence mode="wait">
                <motion.img
                  key={featured?.id}
                  src={featured?.src}
                  alt={featured?.label}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </AnimatePresence>

              {/* Nav arrows */}
              <button onClick={prev} className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-charcoal/50 border border-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-charcoal/70 transition-colors z-10">
                <ChevronLeft size={16} className="text-white" />
              </button>
              <button onClick={next} className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-charcoal/50 border border-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-charcoal/70 transition-colors z-10">
                <ChevronRight size={16} className="text-white" />
              </button>

              {/* Label pill */}
              <div className="absolute bottom-3 left-3 px-3 py-1.5 bg-charcoal/60 border border-white/20 rounded-full backdrop-blur-sm z-10">
                <p className="text-white text-[10px] font-medium tracking-wider">{featured?.label}</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Filter tabs */}
        <motion.div {...fade} transition={{ duration: 0.6, delay: 0.25 }} className="flex gap-2 flex-wrap mb-6">
          {FILTERS.map(f => (
            <button
              key={f}
              onClick={() => { setActiveFilter(f); setFeaturedIdx(0) }}
              className={`px-4 py-2 rounded-full border text-[11px] font-medium tracking-wide transition-all duration-200 ${
                activeFilter === f
                  ? 'bg-gold text-white border-gold'
                  : 'bg-card text-muted border-beige hover:border-gold/50'
              }`}
            >
              {f}
            </button>
          ))}
        </motion.div>

        {/* Thumbnail strip */}
        <motion.div {...fade} transition={{ duration: 0.6, delay: 0.3 }} className="mb-10">
          <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-2">
            {filtered.map((item, i) => (
              <button
                key={item.id}
                onClick={() => setFeaturedIdx(i)}
                className={`flex-shrink-0 w-36 rounded-xl overflow-hidden border-2 transition-all duration-200 ${
                  featuredIdx === i ? 'border-gold shadow-md shadow-gold/20' : 'border-beige hover:border-gold/40'
                }`}
              >
                <div className="relative" style={{ aspectRatio: '3/4' }}>
                  <img src={item.src} alt={item.label} className="absolute inset-0 w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 to-transparent" />
                  <div className="absolute bottom-2 left-2 right-2">
                    <p className="text-white text-[9px] font-medium tracking-wide leading-tight">{item.label}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Stats bar */}
        <motion.div {...fade} transition={{ duration: 0.6, delay: 0.35 }}>
          <StatsBar items={STATS} tagline="La Citadel — A closer look before your visit." />
        </motion.div>

        <motion.div {...fade} transition={{ duration: 0.5, delay: 0.4 }} className="mt-6">
          <OrnamentalDivider text="La Citadel — A closer look before your visit." />
        </motion.div>
      </div>
    </section>
  )
}
