import { useState } from 'react'
import { motion } from 'framer-motion'
import { Play, MapPin, Eye, Home, Building2 } from 'lucide-react'
import EyebrowLabel from '../ui/EyebrowLabel'
import OrnamentalDivider from '../ui/OrnamentalDivider'

const VIDEO_ID = 'mTvd7-VStkM'

const FEATURES = [
  { icon: MapPin,    title: 'Arrival Experience',    body: 'A grand entrance that sets the tone for the life that awaits.' },
  { icon: Eye,       title: 'Bayfront Views',        body: 'Uninterrupted views of the bay, where water meets serenity.' },
  { icon: Home,      title: 'Villa Living',           body: 'Thoughtfully designed villas surrounded by greenery and open spaces.' },
  { icon: Building2, title: 'Clubhouse Lifestyle',   body: 'Spaces to connect, relax, and celebrate every moment.' },
]

const fade = { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: '-80px' } }

export default function Section2MasterFilm() {
  const [playing, setPlaying] = useState(false)

  return (
    <section id="master-film" className="bg-ivory section-pad">
      <div className="container-wide">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">

          {/* Left — 68% */}
          <div className="flex-1 min-w-0">
            <motion.div {...fade} transition={{ duration: 0.6 }}>
              <EyebrowLabel>Master Film</EyebrowLabel>
              <h2 className="heading-xl mt-4 mb-5">
                Experience La Citadel<br />in Motion
              </h2>
              <p className="body-md max-w-xl mb-8">
                Our master film brings to life the essence of La Citadel — from the welcoming arrival and breathtaking bayfront views to the villa lifestyle, clubhouse, and the vision behind it all.
              </p>
            </motion.div>

            {/* Video player */}
            <motion.div {...fade} transition={{ duration: 0.6, delay: 0.15 }}>
              <div className="relative rounded-2xl overflow-hidden border border-beige" style={{ aspectRatio: '16/9' }}>
                {playing ? (
                  <iframe
                    src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&rel=0&modestbranding=1&controls=1&fs=1`}
                    title="La Citadel Master Film"
                    allow="autoplay; fullscreen"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                    style={{ border: 0 }}
                  />
                ) : (
                  <>
                    <img
                      src={`https://img.youtube.com/vi/${VIDEO_ID}/maxresdefault.jpg`}
                      alt="La Citadel Master Film"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-charcoal/25" />
                    <button
                      onClick={() => setPlaying(true)}
                      className="absolute inset-0 flex items-center justify-center group"
                    >
                      <div className="w-16 h-16 rounded-full border-2 border-white/70 bg-charcoal/50 backdrop-blur-sm flex items-center justify-center group-hover:bg-gold/80 group-hover:border-gold transition-all duration-200">
                        <Play size={20} className="text-white ml-1" fill="white" />
                      </div>
                    </button>
                  </>
                )}
              </div>
            </motion.div>
          </div>

          {/* Vertical divider */}
          <div className="hidden lg:flex flex-col items-center">
            <div className="w-px flex-1 bg-gradient-to-b from-transparent via-beige to-transparent" />
          </div>

          {/* Right — 28% */}
          <div className="w-full lg:w-72 flex flex-col gap-5 justify-end">
            <motion.div {...fade} transition={{ duration: 0.6, delay: 0.1 }}>
              {FEATURES.map(({ icon: Icon, title, body }, i) => (
                <div key={title}>
                  <div className="flex gap-3 py-5">
                    <div className="icon-sq mt-0.5">
                      <Icon size={16} />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-ink mb-1">{title}</p>
                      <p className="text-xs leading-relaxed text-muted">{body}</p>
                    </div>
                  </div>
                  {i < FEATURES.length - 1 && <div className="h-px bg-beige" />}
                </div>
              ))}
            </motion.div>

            <motion.div {...fade} transition={{ duration: 0.6, delay: 0.25 }} className="flex flex-col gap-3 mt-2">
              <button onClick={() => setPlaying(true)} className="btn-gold justify-center">
                <Play size={14} fill="currentColor" />
                Watch Master Film
              </button>
              <button className="btn-outline justify-center">
                Get Brochure
              </button>
            </motion.div>
          </div>
        </div>

        {/* Bottom ornamental line */}
        <motion.div {...fade} transition={{ duration: 0.5, delay: 0.3 }} className="mt-16">
          <OrnamentalDivider text="The story of La Citadel — capture every moment." />
        </motion.div>
      </div>
    </section>
  )
}
