import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Dumbbell, Users, Coffee, Star, Sparkles, Check, Heart, Umbrella, MessageCircle, Crown, Building2, ChevronLeft, ChevronRight, Waves } from 'lucide-react'
import EyebrowLabel from '../ui/EyebrowLabel'
import OrnamentalDivider from '../ui/OrnamentalDivider'

const fade = { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: '-80px' } }

const TABS = [
  {
    id: 'fitness', label: 'For Fitness', icon: Dumbbell,
    eyebrow: 'FOR FITNESS',
    heading: ['Strength for', 'Body. Clarity for Mind.'],
    body: "A dedicated wellness zone designed to inspire consistency, energy, and balance. Whether you're training hard or simply unwinding, every detail supports your fitness journey.",
    items: ['Fully Equipped Modern Gym', 'Yoga & Wellness Studio', 'Group Fitness Studio', 'Indoor Jogging Track', 'CrossFit & Functional Training', 'Steam & Sauna Rooms', 'Massage & Therapy Room', 'Personal Training Spaces'],
    quote: "Wellness isn't a feature. It's a way of life.",
    gradient: 'placeholder-bg-dark',
    images: [
      '/image-assets/gym-club-house.jpg',
      '/image-assets/yoga-studio-club-hosue.jpg',
      '/image-assets/badminton-court.jpg',
    ],
  },
  {
    id: 'social', label: 'For Social Life', icon: Coffee,
    eyebrow: 'FOR SOCIAL LIFE',
    heading: ['Connect, Celebrate,', 'Create Memories'],
    body: 'Vibrant social spaces designed to bring the community together. Connect over coffee, celebrate milestones, or simply enjoy the company of neighbours who become friends.',
    items: ['Club Lounge & Café', 'Rooftop Social Terrace', 'Co-Working Lounge', 'Community Gathering Hall', 'Private Dining Room', 'Outdoor Social Lawn', 'Library & Reading Room', 'Community Events Space'],
    quote: "Community is the soul of La Citadel.",
    gradient: 'placeholder-bg-interior',
    images: [
      '/image-assets/club-house-social-life-1.jpg',
      '/image-assets/club-house-social-life-2.jpg',
      '/image-assets/club-house-social-life-3.jpg',
    ],
  },
  {
    id: 'celebrations', label: 'For Celebrations', icon: Sparkles,
    eyebrow: 'FOR CELEBRATIONS',
    heading: ["Celebrate Life's", 'Finest Moments'],
    body: "Grand spaces for every occasion. Whether it's an intimate gathering or a lavish celebration, La Citadel's event spaces bring elegance to every event.",
    items: ['Grand Banquet Hall', 'Private Event Lawns', 'Rooftop Party Terrace', 'Club Lounge', 'Catering Kitchen', 'Private Dining Room', 'Outdoor Amphitheatre', 'Bridal Suite'],
    quote: "Every celebration deserves a grand setting.",
    gradient: 'placeholder-bg-dark',
    images: [
      '/image-assets/club-house-celebration-1.jpg',
      '/image-assets/club-house-celebration-2.jpg',
    ],
  },
  {
    id: 'pool', label: 'Infinite Pool', icon: Waves,
    eyebrow: 'INFINITE POOL',
    heading: ['Swim Where the', 'Sky Meets the Sea'],
    body: 'A breathtaking infinity pool with panoramic bay views, alongside a temperature-controlled indoor pool — two world-class aquatic experiences designed for relaxation and resort-style living.',
    items: ['Infinity Edge Pool', 'Panoramic Bay Views', 'Temperature-Controlled Indoor Pool', 'Poolside Loungers', 'Underwater Lighting', 'Cabana Seating', 'Pool Bar', 'Lifeguard Services'],
    quote: "Where the water ends and the sky begins.",
    gradient: 'placeholder-bg-pool',
    images: [
      '/image-assets/club-house-infintie-pool-1.jpg',
      '/image-assets/club-house-infinite-pool-2.jpg',
      '/image-assets/club-house-indoor-pool-1.jpg',
      '/image-assets/club-house-indoor-pool-2.jpg',
    ],
  },
  {
    id: 'guests', label: 'For Guests', icon: Star,
    eyebrow: 'FOR GUESTS',
    heading: ['A Warm Welcome', 'for Every Visitor'],
    body: 'Thoughtfully designed spaces to host and impress. From grand arrivals to curated guest experiences, La Citadel ensures every visitor feels the difference.',
    items: ['Grand Entrance Lobby', 'Guest Lounge & Reception', 'Concierge Services', 'Visitor Parking', 'Guest Suite', 'Private Dining Room', 'Valet Services', 'Welcome Amenities'],
    quote: "Every guest leaves with a lasting impression.",
    gradient: 'placeholder-bg-warm',
    images: [
      '/image-assets/club-house-guest-1.jpg',
      '/image-assets/club-hosue-guests-2.jpg',
    ],
  },
]

const BENEFITS = [
  { icon: Heart, title: 'Wellness First', body: 'Spaces that nurture body and mind' },
  { icon: Users, title: 'For Every Generation', body: 'Amenities for kids, adults & seniors' },
  { icon: Umbrella, title: 'Resort-Style Living', body: 'Everyday feels like a vacation' },
  { icon: MessageCircle, title: 'Connection & Community', body: 'Spaces that bring people together' },
  { icon: Crown, title: 'Exclusively Yours', body: 'World-class experiences at your doorstep' },
]

const CLUBHOUSE_IMAGES = [
  '/image-assets/quick-look-1.jpg',
  '/image-assets/club-house-reception-1.jpeg',
  '/image-assets/club-house-reception-1.jpeg',
  '/image-assets/club-house-reception-2.jpeg',
  '/image-assets/club-house-reception-3.jpeg',
  '/image-assets/club-house-reception-4.jpeg',
]

export default function Section8Clubhouse() {
  const [activeTab, setActiveTab] = useState(0)
  const [slide, setSlide] = useState(0)
  const [tabSlide, setTabSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => setSlide(i => (i + 1) % CLUBHOUSE_IMAGES.length), 3500)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => { setTabSlide(0) }, [activeTab])
  const tab = TABS[activeTab]

  return (
    <section id="clubhouse" className="bg-ivory section-pad">
      <div className="container-wide">

        {/* Top 2-col */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 mb-12">

          {/* Left */}
          <div className="flex-1 min-w-0">
            <motion.div {...fade} transition={{ duration: 0.6 }}>
              <EyebrowLabel>Clubhouse &amp; Amenities</EyebrowLabel>
              <h2 className="heading-xl mt-4 mb-5">
                Experience a Lifestyle<br />
                <span className="text-gold">Beyond Compare</span>
              </h2>
              <p className="body-md max-w-lg mb-6">
                At the heart of La Citadel lies a spectacular 1,00,000 sq ft Clubhouse, built to elevate every moment of your life. Thoughtfully designed spaces, world-class amenities, and timeless experiences — all under one roof.
              </p>
            </motion.div>

            {/* Stat card */}
            <motion.div {...fade} transition={{ duration: 0.6, delay: 0.15 }}>
              <div className="inline-flex items-center gap-4 px-6 py-4 border border-gold/40 rounded-2xl bg-card mb-6">
                <Building2 size={28} className="text-gold" />
                <div>
                  <p className="font-serif font-light text-3xl text-gold leading-none">1,00,000 SQ FT</p>
                  <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-ink mt-1">World-Class Clubhouse</p>
                </div>
              </div>
            </motion.div>

            {/* 3 sub-cols */}
            <motion.div {...fade} transition={{ duration: 0.6, delay: 0.25 }} className="flex items-stretch gap-0">
              {['Architecturally Iconic', 'Curated for Every Generation', 'Managed for Excellence'].map((t, i) => (
                <div key={t} className="flex items-stretch">
                  <div className="px-4 py-2 text-center">
                    <p className="text-[11px] font-medium text-ink">{t}</p>
                  </div>
                  {i < 2 && <div className="w-px self-stretch bg-beige" />}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — clubhouse carousel */}
          <motion.div {...fade} transition={{ duration: 0.6, delay: 0.2 }} className="w-full lg:w-[46%] flex-shrink-0">
            <div className="relative rounded-2xl overflow-hidden shadow-md" style={{ aspectRatio: '4/3' }}>
              <AnimatePresence mode="wait">
                <motion.img
                  key={slide}
                  src={CLUBHOUSE_IMAGES[slide]}
                  alt="Clubhouse"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6 }}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </AnimatePresence>
              {/* Prev */}
              <button
                onClick={() => setSlide(i => (i - 1 + CLUBHOUSE_IMAGES.length) % CLUBHOUSE_IMAGES.length)}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-charcoal/60 hover:bg-charcoal/80 text-white flex items-center justify-center transition-colors"
              >
                <ChevronLeft size={16} />
              </button>
              {/* Next */}
              <button
                onClick={() => setSlide(i => (i + 1) % CLUBHOUSE_IMAGES.length)}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-charcoal/60 hover:bg-charcoal/80 text-white flex items-center justify-center transition-colors"
              >
                <ChevronRight size={16} />
              </button>
              {/* Dots */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                {CLUBHOUSE_IMAGES.map((_, i) => (
                  <button key={i} onClick={() => setSlide(i)} className={`w-1.5 h-1.5 rounded-full transition-colors ${i === slide ? 'bg-gold' : 'bg-white/50'}`} />
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Tab navigation */}
        <motion.div {...fade} transition={{ duration: 0.6, delay: 0.3 }}>
          <div className="flex gap-2 mb-8 overflow-x-auto pb-1 scrollbar-none">
            {TABS.map(({ id, label, icon: Icon }, i) => (
              <button
                key={id}
                onClick={() => setActiveTab(i)}
                className={`flex-shrink-0 lg:flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-full border text-[11px] font-medium tracking-wide transition-all duration-200 ${activeTab === i
                  ? 'bg-gold text-white border-gold shadow-md shadow-gold/20'
                  : 'bg-card text-muted border-beige hover:border-gold/50'
                  }`}
              >
                <Icon size={13} />
                {label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Tab content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35 }}
            className="flex flex-col lg:flex-row gap-10 mb-12"
          >
            {/* Tab image */}
            <div className="w-full lg:w-[44%] flex-shrink-0">
              <div className={`relative rounded-2xl overflow-hidden shadow-md ${tab.gradient}`} style={{ aspectRatio: '4/3' }}>
                {tab.images ? (
                  <>
                    <AnimatePresence mode="wait">
                      <motion.img
                        key={tabSlide}
                        src={tab.images[tabSlide]}
                        alt={tab.label}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.6 }}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    </AnimatePresence>
                    <button
                      onClick={() => setTabSlide(i => (i - 1 + tab.images.length) % tab.images.length)}
                      className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-charcoal/60 hover:bg-charcoal/80 text-white flex items-center justify-center transition-colors z-10"
                    >
                      <ChevronLeft size={16} />
                    </button>
                    <button
                      onClick={() => setTabSlide(i => (i + 1) % tab.images.length)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-charcoal/60 hover:bg-charcoal/80 text-white flex items-center justify-center transition-colors z-10"
                    >
                      <ChevronRight size={16} />
                    </button>
                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                      {tab.images.map((_, i) => (
                        <button key={i} onClick={() => setTabSlide(i)} className={`w-1.5 h-1.5 rounded-full transition-colors ${i === tabSlide ? 'bg-gold' : 'bg-white/50'}`} />
                      ))}
                    </div>
                  </>
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-white/12 text-[11px] tracking-widest uppercase">{tab.label} Image</span>
                  </div>
                )}
              </div>
            </div>

            {/* Tab copy */}
            <div className="flex-1 min-w-0 flex flex-col justify-center">
              <EyebrowLabel>{tab.eyebrow}</EyebrowLabel>
              <h3 className="heading-md mt-4 mb-4">
                {tab.heading[0]}<br />{tab.heading[1]}
              </h3>
              <p className="body-md mb-6 max-w-md">{tab.body}</p>

              <div className="grid grid-cols-2 gap-x-6 gap-y-2 mb-6">
                {tab.items.map(item => (
                  <div key={item} className="flex items-center gap-2">
                    <Check size={12} className="text-gold flex-shrink-0" />
                    <span className="text-xs text-ink">{item}</span>
                  </div>
                ))}
              </div>

              {/* Quote card */}
              <div className="flex items-start gap-3 p-4 bg-sand rounded-xl border border-beige">
                <span className="text-2xl text-gold/40 font-serif leading-none mt-0.5">"</span>
                <p className="text-sm font-serif font-light italic text-ink">{tab.quote}</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Bottom benefit strip */}
        <motion.div {...fade} transition={{ duration: 0.6, delay: 0.35 }} className="card-light mb-6 overflow-hidden">
          <div className="flex items-stretch flex-wrap">
            {BENEFITS.map(({ icon: Icon, title, body }, i) => (
              <div key={title} className="flex items-stretch flex-1 min-w-[130px]">
                <div className="flex flex-col items-center justify-center py-6 px-4 text-center gap-2 flex-1">
                  <Icon size={18} className="text-gold" />
                  <p className="text-xs font-medium text-ink">{title}</p>
                  <p className="text-[10px] text-muted leading-snug">{body}</p>
                </div>
                {i < BENEFITS.length - 1 && <div className="w-px self-stretch my-5 bg-beige" />}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div {...fade} transition={{ duration: 0.5, delay: 0.4 }}>
          <OrnamentalDivider text="La Citadel — Where Luxury Meets Location." />
        </motion.div>
      </div>
    </section>
  )
}
