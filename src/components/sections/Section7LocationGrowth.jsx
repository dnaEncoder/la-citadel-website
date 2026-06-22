import { motion } from 'framer-motion'
import { Plane, GraduationCap, Hospital, Building2, Waves, TrendingUp, Navigation, Play, Pause, Volume2, Settings, Maximize } from 'lucide-react'
import { useState } from 'react'
import EyebrowLabel from '../ui/EyebrowLabel'
import OrnamentalDivider from '../ui/OrnamentalDivider'

const fade = { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: '-80px' } }

const DISTANCES = [
  { icon: Waves,        label: 'Rushikonda Beach',       time: '5 MIN',  dist: '2.2 KM' },
  { icon: Building2,    label: 'IT / Commercial Belt',    time: '10 MIN', dist: '4.5 KM' },
  { icon: GraduationCap,label: 'Educational Institutions',time: '12 MIN', dist: '6.1 KM' },
  { icon: Hospital,     label: 'Healthcare Access',       time: '15 MIN', dist: '7.5 KM' },
  { icon: Plane,        label: 'Airport Connectivity',    time: '18 MIN', dist: '12.4 KM' },
]

const GROWTH_POINTS = [
  { title: 'Coastal Lifestyle',   body: 'Breathtaking sea views and a serene environment.' },
  { title: 'Connectivity Edge',   body: 'Excellent access to city, IT parks, and airport.' },
  { title: 'Tourism Growth',      body: 'Rising visitor footfall and hospitality development.' },
  { title: 'Infrastructure Rise', body: 'Roads, amenities, and urban infrastructure expanding rapidly.' },
  { title: 'IT & Commercial Hub', body: 'Tech parks and business zones driving employment and investment.' },
  { title: 'Future Value',        body: 'Strong appreciation potential and sustainable real estate demand.' },
]

const TIMELINE = [
  { year: '2024',       label: 'Today',         text: 'Strong coastal foundation' },
  { year: '2025–2026',  label: '',               text: 'Better Roads & City Connectivity' },
  { year: '2026–2028',  label: '',               text: 'Tourism & Hospitality Expansion' },
  { year: '2028–2030',  label: '',               text: 'IT Parks & Commercial Ecosystem Growth' },
  { year: '2030+',      label: 'Future',         text: 'Sustained Value & Premium Living' },
]


export default function Section7LocationGrowth() {
  const [playing, setPlaying] = useState(false)

  return (
    <section id="location" className="bg-ivory section-pad">
      <div className="container-wide">

        {/* Top 2-col: copy + map */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 mb-10">

          {/* Left */}
          <div className="flex-1 min-w-0">
            <motion.div {...fade} transition={{ duration: 0.6 }}>
              <EyebrowLabel>Location & Growth</EyebrowLabel>
              <h2 className="heading-xl mt-4 mb-5">
                Where La Citadel Sits,<br />
                And Why It <span className="text-gold">Matters</span>
              </h2>
              <p className="body-md max-w-md mb-8">
                Nestled in the prestigious Rushikonda corridor, Vizag — where coastal beauty meets connectivity and opportunity. La Citadel is perfectly positioned for a lifestyle today and exceptional value tomorrow.
              </p>
            </motion.div>

            <motion.div {...fade} transition={{ duration: 0.6, delay: 0.12 }} className="flex flex-wrap gap-3 mb-8">
              <a href="https://share.google/YJCjORxm7NTDSyC5Y" target="_blank" rel="noopener noreferrer" className="btn-gold">Explore Location</a>
              <button className="btn-outline">View Connectivity Map</button>
            </motion.div>

            <motion.div {...fade} transition={{ duration: 0.6, delay: 0.22 }} className="flex items-stretch gap-0">
              {[
                { icon: Waves,       label: 'Coastal Advantage' },
                { icon: Navigation,  label: 'Future Connectivity' },
                { icon: TrendingUp,  label: 'Investment Potential' },
              ].map(({ icon: Icon, label }, i) => (
                <div key={label} className="flex items-stretch">
                  <div className="flex flex-col items-center gap-2 px-5 py-3 text-center">
                    <Icon size={16} className="text-gold" />
                    <p className="text-[11px] font-medium text-ink">{label}</p>
                  </div>
                  {i < 2 && <div className="w-px self-stretch my-2 bg-beige" />}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — location image */}
          <motion.div {...fade} transition={{ duration: 0.6, delay: 0.2 }} className="w-full lg:w-[48%] flex-shrink-0">
            <div className="relative rounded-2xl overflow-hidden border border-beige shadow-sm" style={{ aspectRatio: '4/3' }}>
              <img
                src="/image-assets/location_growth_image.jpg"
                alt="Rushikonda coastal location — La Citadel"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>

        {/* Distance bar */}
        <motion.div {...fade} transition={{ duration: 0.6, delay: 0.25 }} className="card-light mb-10 overflow-hidden">
          <div className="flex items-stretch flex-wrap">
            {DISTANCES.map(({ icon: Icon, label, time, dist }, i) => (
              <div key={label} className="flex items-stretch flex-1 min-w-[130px]">
                <div className="flex flex-col items-center justify-center py-6 px-4 text-center gap-2 flex-1">
                  <Icon size={18} className="text-gold" />
                  <p className="text-xs font-medium text-ink">{label}</p>
                  <p className="text-lg font-serif font-light text-gold">{time}</p>
                  <p className="text-[10px] text-muted">({dist})</p>
                </div>
                {i < DISTANCES.length - 1 && <div className="w-px self-stretch my-5 bg-beige" />}
              </div>
            ))}
          </div>
          <div className="border-t border-beige px-6 py-2 text-center">
            <p className="text-[10px] text-muted/60 italic">* Distances and drive times are approximate. Final values to be verified before publishing.</p>
          </div>
        </motion.div>

        {/* Bottom 2-col: video + growth grid — hidden for now, re-enable when ready */}
        {false && <div className="flex flex-col lg:flex-row gap-10 mb-10">

          {/* Left: growth video */}
          <motion.div {...fade} transition={{ duration: 0.6, delay: 0.3 }} className="flex-1 min-w-0">
            <div className="relative rounded-2xl overflow-hidden" style={{ aspectRatio: '16/10' }}>
              <div className="absolute inset-0 placeholder-bg-coastal" />

              {/* Text overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/30 to-transparent" />
              <div className="absolute bottom-16 left-6 right-6">
                <h3 className="font-serif font-light text-2xl text-white mb-2">Why This Location<br />Will Grow</h3>
                <p className="text-white/60 text-xs leading-relaxed">
                  Coastal beauty. Strategic connectivity. Rising tourism. Strong infrastructure. A future built for value.
                </p>
              </div>

              {/* Play button */}
              <button
                onClick={() => setPlaying(v => !v)}
                className="absolute inset-0 flex items-center justify-center group"
              >
                <div className="w-14 h-14 rounded-full border-2 border-white/60 bg-charcoal/40 backdrop-blur-sm flex items-center justify-center group-hover:bg-gold/80 group-hover:border-gold transition-all">
                  {playing ? <Pause size={18} className="text-white" /> : <Play size={18} className="text-white ml-1" fill="white" />}
                </div>
              </button>

              {/* Controls */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-charcoal/90 to-transparent px-4 py-3">
                <div className="flex items-center gap-3">
                  <button onClick={() => setPlaying(v => !v)} className="text-white/80">
                    {playing ? <Pause size={13} /> : <Play size={13} fill="currentColor" />}
                  </button>
                  <span className="text-white/55 text-[10px] font-mono">0:00 / 2:45</span>
                  <div className="flex-1 h-0.5 bg-white/20 rounded-full" />
                  <Volume2 size={12} className="text-white/70" />
                  <Settings size={12} className="text-white/70" />
                  <Maximize size={12} className="text-white/70" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: growth grid */}
          <motion.div {...fade} transition={{ duration: 0.6, delay: 0.35 }} className="flex-1 min-w-0">
            <EyebrowLabel>The Story of Growth</EyebrowLabel>
            <p className="body-md mt-3 mb-6 max-w-md">
              From serene coastline to a vibrant growth corridor, Rushikonda is Vizag's next chapter of progress. Discover how location, lifestyle, and infrastructure come together to create lasting value.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {GROWTH_POINTS.map(({ title, body }) => (
                <div key={title} className="p-4 bg-card rounded-xl border border-beige">
                  <div className="gold-divider mb-2" />
                  <p className="text-xs font-medium text-ink mb-1">{title}</p>
                  <p className="text-[11px] text-muted leading-snug">{body}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>}

        {/* Timeline */}
        <motion.div {...fade} transition={{ duration: 0.6, delay: 0.4 }} className="card-light p-6 mb-6">
          <div className="flex items-start gap-0 overflow-x-auto scrollbar-hide">
            {TIMELINE.map(({ year, label, text }, i) => (
              <div key={year} className="flex items-start flex-1 min-w-[160px]">
                <div className="flex flex-col items-center flex-1">
                  <div className={`w-3 h-3 rounded-full border-2 flex-shrink-0 z-10 ${i === 0 ? 'bg-gold border-gold' : 'bg-white border-gold/50'}`} />
                  <div className="mt-3 text-center px-2">
                    <p className="text-xs font-medium text-gold">{year}</p>
                    {label && <p className="text-[10px] font-medium text-ink mt-0.5">{label}</p>}
                    <p className="text-[10px] text-muted mt-1 leading-snug">{text}</p>
                  </div>
                </div>
                {i < TIMELINE.length - 1 && (
                  <div className="w-full h-px bg-gradient-to-r from-gold/60 to-gold/20 mt-1.5 flex-shrink-0" style={{ minWidth: 32 }} />
                )}
              </div>
            ))}
          </div>
        </motion.div>

        <p className="text-[10px] text-muted/60 text-center italic mb-8">
          * Distances, infrastructure references, and growth indicators are to be verified before final publishing.
        </p>

        <motion.div {...fade} transition={{ duration: 0.5, delay: 0.45 }}>
          <OrnamentalDivider text="La Citadel — Where Luxury Meets Location." />
        </motion.div>
      </div>
    </section>
  )
}
