import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import PageHero from '../components/ui/PageHero'
import EyebrowLabel from '../components/ui/EyebrowLabel'
import OrnamentalDivider from '../components/ui/OrnamentalDivider'
import Section9WhatsApp from '../components/sections/Section9WhatsApp'
import Section10Gallery from '../components/sections/Section10Gallery'
import Section3QuickEnquiry from '../components/sections/Section3QuickEnquiry'
import Section11Footer from '../components/sections/Section11Footer'
import { DISTANCES, GROWTH_POINTS, TIMELINE } from '../data/locationGrowth'

const fade = { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: '-80px' } }

export default function LocationGrowthPage() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <PageHero
        eyebrow="Location & Growth"
        title="Where La Citadel Sits, And Why It Matters"
        description="Nestled in the prestigious Rushikonda corridor, Vizag — where coastal beauty meets connectivity and opportunity. A closer look at the location, the connectivity, and the growth story ahead."
        image="/image-assets/hero_section.jpg"
        crumb="Location & Growth"
      />

      {/* Overview */}
      <section className="bg-ivory section-pad">
        <div className="container-wide">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
            <motion.div {...fade} transition={{ duration: 0.6 }} className="flex-1 min-w-0">
              <EyebrowLabel>The Setting</EyebrowLabel>
              <h2 className="heading-lg mt-4 mb-5">
                A Coastal Address,<br />
                <span className="text-gold">Built for Tomorrow</span>
              </h2>
              <p className="body-md max-w-lg mb-4">
                La Citadel sits at the heart of the Rushikonda growth corridor — minutes from the beach, the city's expanding IT and commercial belt, and the institutions and infrastructure that come with one of Vizag's fastest-developing addresses.
              </p>
              <p className="body-md max-w-lg">
                It's a rare combination: the calm of a coastal hillside setting, paired with the connectivity of a city that's actively investing in its future.
              </p>
            </motion.div>
            <motion.div {...fade} transition={{ duration: 0.6, delay: 0.15 }} className="w-full lg:w-[48%] flex-shrink-0">
              <div className="relative rounded-2xl overflow-hidden border border-beige shadow-sm" style={{ aspectRatio: '4/3' }}>
                <img src="/image-assets/location_growth_image.jpg" alt="Rushikonda coastal location — La Citadel" className="w-full h-full object-cover" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Connectivity grid */}
      <section className="bg-card section-pad">
        <div className="container-wide">
          <motion.div {...fade} transition={{ duration: 0.6 }} className="text-center mb-12">
            <EyebrowLabel center>Connectivity</EyebrowLabel>
            <h2 className="heading-lg mt-4">How Close Everything Really Is</h2>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4"
          >
            {DISTANCES.map(({ icon: Icon, label, time, dist }) => (
              <motion.div
                key={label}
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
                className="card-light p-6 flex flex-col items-center text-center gap-3"
              >
                <div className="icon-circle">
                  <Icon size={18} />
                </div>
                <p className="text-sm font-medium text-ink">{label}</p>
                <p className="text-2xl font-serif font-light text-gold">{time}</p>
                <p className="text-[11px] text-muted">({dist})</p>
              </motion.div>
            ))}
          </motion.div>
          <p className="text-[10px] text-muted/60 text-center italic mt-8">
            * Distances and drive times are approximate. Final values to be verified before publishing.
          </p>
        </div>
      </section>

      {/* Growth points */}
      <section className="bg-ivory section-pad">
        <div className="container-wide">
          <motion.div {...fade} transition={{ duration: 0.6 }} className="text-center mb-12">
            <EyebrowLabel center>The Growth Story</EyebrowLabel>
            <h2 className="heading-lg mt-4">Why This Location Will Grow</h2>
            <p className="body-md max-w-lg mx-auto mt-4">
              From serene coastline to a vibrant growth corridor, Rushikonda is Vizag's next chapter of progress.
            </p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {GROWTH_POINTS.map(({ title, body }, i) => (
              <motion.div
                key={title}
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
                className="card-light p-6"
              >
                <span className="text-[11px] font-medium text-gold/70 tracking-wider">{String(i + 1).padStart(2, '0')}</span>
                <div className="gold-divider my-3" />
                <p className="text-sm font-medium text-ink mb-1.5">{title}</p>
                <p className="text-xs text-muted leading-relaxed">{body}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-card section-pad">
        <div className="container-wide max-w-3xl">
          <motion.div {...fade} transition={{ duration: 0.6 }} className="text-center mb-14">
            <EyebrowLabel center>The Road Ahead</EyebrowLabel>
            <h2 className="heading-lg mt-4">A Corridor on the Rise</h2>
          </motion.div>

          <div className="flex flex-col">
            {TIMELINE.map(({ year, label, text }, i) => (
              <motion.div
                key={year}
                {...fade}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex gap-5"
              >
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className={`w-3.5 h-3.5 rounded-full border-2 flex-shrink-0 ${i === 0 ? 'bg-gold border-gold' : 'bg-white border-gold/50'}`} />
                  {i < TIMELINE.length - 1 && <div className="w-px flex-1 bg-gradient-to-b from-gold/50 to-gold/10 my-1" />}
                </div>
                <div className="pb-10">
                  <p className="text-sm font-medium text-gold">{year}</p>
                  {label && <p className="text-xs font-medium text-ink mt-0.5">{label}</p>}
                  <p className="text-sm text-muted mt-1.5 leading-relaxed">{text}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <p className="text-[10px] text-muted/60 text-center italic">
            * Infrastructure references and growth indicators are to be verified before final publishing.
          </p>
        </div>
      </section>

      <div className="bg-ivory pb-4">
        <div className="container-wide">
          <OrnamentalDivider text="La Citadel — Where Luxury Meets Location." />
        </div>
      </div>

      <Section9WhatsApp />
      <Section10Gallery />
      <Section3QuickEnquiry />
      <Section11Footer />
    </div>
  )
}
