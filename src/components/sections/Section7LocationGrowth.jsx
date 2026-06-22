import { motion } from 'framer-motion'
import { Navigation, TrendingUp, Waves } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import EyebrowLabel from '../ui/EyebrowLabel'
import OrnamentalDivider from '../ui/OrnamentalDivider'
import { DISTANCES, TIMELINE } from '../../data/locationGrowth'

const fade = { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: '-80px' } }

export default function Section7LocationGrowth() {
  const navigate = useNavigate()

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
              <button onClick={() => navigate('/location-growth')} className="btn-outline">View Connectivity Map</button>
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
