import { motion } from 'framer-motion'
import { Home, MapPin, Building2, Shield, Maximize2, Star, TrendingUp } from 'lucide-react'
import EyebrowLabel from '../ui/EyebrowLabel'
import OrnamentalDivider from '../ui/OrnamentalDivider'
import StatsBar from '../ui/StatsBar'

const fade = { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: '-80px' } }

const FEATURES = [
  { icon: Home,      title: 'Villa Community',    desc: 'Curated luxury villas enclave' },
  { icon: MapPin,    title: 'Rishikonda, Vizag',  desc: 'Prime coastal location' },
  { icon: Building2, title: 'Clubhouse Lifestyle', desc: 'Premium amenities & experiences' },
  { icon: Shield,    title: 'Secure & Gated',      desc: 'Privacy, safety and peace of mind' },
]

const METRICS = [
  { icon: Maximize2,  title: 'Expansive',    sub: 'Total Land Extent' },
  { icon: Star,       title: 'World-Class',  sub: 'Community Features' },
  { icon: TrendingUp, title: 'Future-Ready', sub: 'Investment Potential' },
]

const STATS = [
  { icon: Maximize2,  title: 'Total Land Extent',  subtitle: 'Expansive Acres' },
  { icon: Home,       title: 'Wide Internal Roads', subtitle: 'Master Planned' },
  { icon: MapPin,     title: 'Open Spaces',         subtitle: 'Green & Serene' },
  { icon: Building2,  title: 'Clubhouse',            subtitle: 'Lifestyle Amenities' },
  { icon: TrendingUp, title: 'Investment Value',     subtitle: 'Long-Term Growth' },
]

export default function Section4ProjectSnapshot() {
  return (
    <section id="snapshot" className="bg-ivory section-pad">
      <div className="container-wide">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 mb-10">

          {/* Left */}
          <div className="flex-1 min-w-0">
            <motion.div {...fade} transition={{ duration: 0.6 }}>
              <EyebrowLabel>Project Snapshot</EyebrowLabel>
              <h2 className="heading-xl mt-4 mb-2">
                A Quick Look at<br />
                <span className="text-gold">La Citadel</span>
              </h2>
              <div className="gold-divider mt-3 mb-5" />
              <p className="body-md max-w-sm mb-8">
                A premium villa community in Rishikonda, Vizag, crafted for those who seek space, privacy, lifestyle and long-term location value.
              </p>
            </motion.div>

            {/* 2×2 feature grid */}
            <motion.div {...fade} transition={{ duration: 0.6, delay: 0.15 }} className="grid grid-cols-2 gap-4 mb-8">
              {FEATURES.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex gap-3 p-4 bg-card rounded-xl border border-beige">
                  <div className="w-9 h-9 rounded-full bg-sand flex items-center justify-center flex-shrink-0">
                    <Icon size={15} className="text-gold" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-ink">{title}</p>
                    <p className="text-[11px] text-muted mt-0.5">{desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Mini metrics row */}
            <motion.div {...fade} transition={{ duration: 0.6, delay: 0.25 }}>
              <div className="flex items-stretch gap-0">
                {METRICS.map(({ icon: Icon, title, sub }, i) => (
                  <div key={title} className="flex items-stretch flex-1">
                    <div className="flex flex-col items-center gap-1.5 px-5 py-3 flex-1">
                      <Icon size={16} className="text-gold" />
                      <p className="text-xs font-medium text-ink">{title}</p>
                      <p className="text-[10px] text-muted">{sub}</p>
                    </div>
                    {i < METRICS.length - 1 && (
                      <div className="w-px self-stretch my-2 bg-beige" />
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right — stacked images */}
          <motion.div {...fade} transition={{ duration: 0.6, delay: 0.2 }} className="w-full lg:w-[45%] flex flex-col gap-4">
            {/* Image 1 — larger (top) */}
            <div className="rounded-2xl overflow-hidden shadow-md" style={{ aspectRatio: '4/3' }}>
              <img
                src="/image-assets/quick-look-2.jpg"
                alt="La Citadel — aerial view"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Image 2 — smaller (bottom) */}
            <div className="rounded-2xl overflow-hidden shadow-md" style={{ aspectRatio: '16/7' }}>
              <img
                src="/image-assets/quick-look-1.jpg"
                alt="La Citadel — project view"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>

        {/* Bottom stats bar */}
        <motion.div {...fade} transition={{ duration: 0.6, delay: 0.3 }}>
          <StatsBar items={STATS} tagline="La Citadel — Where Luxury Meets Location." />
        </motion.div>

        <motion.div {...fade} transition={{ duration: 0.5, delay: 0.35 }} className="mt-6">
          <OrnamentalDivider text="La Citadel — Where Luxury Meets Location." />
        </motion.div>
      </div>
    </section>
  )
}
