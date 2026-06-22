import { useState } from 'react'
import { motion } from 'framer-motion'
import { Check, Download, Calendar, Maximize2 } from 'lucide-react'
import Navbar from '../components/Navbar'
import PageHero from '../components/ui/PageHero'
import OrnamentalDivider from '../components/ui/OrnamentalDivider'
import ImageLightbox from '../components/ui/ImageLightbox'
import BrochureModal from '../components/ui/BrochureModal'
import SiteVisitModal from '../components/ui/SiteVisitModal'
import Section9WhatsApp from '../components/sections/Section9WhatsApp'
import Section10Gallery from '../components/sections/Section10Gallery'
import Section3QuickEnquiry from '../components/sections/Section3QuickEnquiry'
import Section11Footer from '../components/sections/Section11Footer'
import { VILLAS } from '../data/villas'

const fade = { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: '-80px' } }

function VillaTypeSection({ villa, reverse, onBrochure, onSiteVisit, onZoom }) {
  return (
    <section className="bg-ivory section-pad">
      <div className="container-wide">
        <div className={`flex flex-col lg:flex-row lg:items-start gap-12 lg:gap-16 ${reverse ? 'lg:flex-row-reverse' : ''}`}>

          {/* Image column */}
          <motion.div {...fade} transition={{ duration: 0.6 }} className="w-full lg:w-[46%] flex-shrink-0 lg:sticky lg:top-24">
            <button onClick={() => onZoom(villa.image, villa.name)} className="block w-full rounded-2xl overflow-hidden shadow-md group relative" style={{ aspectRatio: '4/3' }}>
              <img src={villa.image} alt={villa.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/20 transition-colors flex items-center justify-center">
                <Maximize2 size={20} className="text-white opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </button>
          </motion.div>

          {/* Content column */}
          <motion.div {...fade} transition={{ duration: 0.6, delay: 0.1 }} className="flex-1 min-w-0">
            <h2 className="heading-lg mb-2">{villa.name}</h2>
            <p className="text-sm text-muted mb-6">{villa.subtitle}</p>

            {/* Specs grid */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              {[
                { label: 'Orientation',   value: villa.orientation },
                { label: 'Layout',        value: villa.layout },
                { label: 'Plot Area',     value: villa.plotArea },
                { label: 'Built-up Area', value: villa.builtUpArea },
              ].map(({ label, value }) => (
                <div key={label} className="p-3 bg-card rounded-xl border border-beige">
                  <p className="text-[10px] font-medium text-muted uppercase tracking-wider mb-1">{label}</p>
                  <p className="text-xs text-ink leading-snug">{value}</p>
                </div>
              ))}
            </div>

            {/* Features */}
            <ul className="flex flex-col gap-2 mb-7">
              {villa.features.map(f => (
                <li key={f} className="flex gap-2 items-start text-sm text-muted leading-snug">
                  <Check size={14} className="text-gold mt-0.5 flex-shrink-0" />
                  {f}
                </li>
              ))}
            </ul>

            {/* Floor plan + street view thumbnails */}
            <div className="grid grid-cols-2 gap-4 mb-7">
              <button onClick={() => onZoom(villa.floorPlan, `${villa.name} — Floor Plan`)} className="rounded-xl overflow-hidden border border-beige group relative">
                <img src={villa.floorPlan} alt={`${villa.name} — Floor Plan`} className="w-full h-32 object-cover bg-white" />
                <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/20 transition-colors flex items-center justify-center">
                  <Maximize2 size={16} className="text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <span className="absolute bottom-1.5 left-2 text-[10px] text-white bg-charcoal/60 px-2 py-0.5 rounded-full">Floor Plan</span>
              </button>
              <button onClick={() => onZoom(villa.streetView, `${villa.name} — Street View`)} className="rounded-xl overflow-hidden border border-beige group relative">
                <img src={villa.streetView} alt={`${villa.name} — Street View`} className="w-full h-32 object-cover" />
                <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/20 transition-colors flex items-center justify-center">
                  <Maximize2 size={16} className="text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <span className="absolute bottom-1.5 left-2 text-[10px] text-white bg-charcoal/60 px-2 py-0.5 rounded-full">Street View</span>
              </button>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3">
              <button onClick={onBrochure} className="btn-gold">
                <Download size={14} />
                Download Brochure
              </button>
              <button onClick={onSiteVisit} className="btn-outline">
                <Calendar size={14} />
                Schedule a Site Visit
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default function VillaLivingPage() {
  const [brochureOpen, setBrochureOpen] = useState(false)
  const [siteVisitOpen, setSiteVisitOpen] = useState(false)
  const [zoomImage, setZoomImage] = useState(null)
  const [zoomLabel, setZoomLabel] = useState('')

  const handleZoom = (image, label) => { setZoomImage(image); setZoomLabel(label) }

  return (
    <div className="min-h-screen">
      <Navbar />

      <PageHero
        eyebrow="Villa Living"
        title="Find Your Villa at La Citadel"
        description="Two thoughtfully designed villa orientations, each built for space, privacy, and long-term comfort. Explore layouts, floor plans, and what life looks like in every home."
        image="/image-assets/east-villa-front-view.jpg"
        crumb="Villa Living"
      />

      {VILLAS.map((villa, i) => (
        <VillaTypeSection
          key={villa.name}
          villa={villa}
          reverse={i % 2 === 1}
          onBrochure={() => setBrochureOpen(true)}
          onSiteVisit={() => setSiteVisitOpen(true)}
          onZoom={handleZoom}
        />
      ))}

      <div className="bg-ivory pb-4">
        <div className="container-wide">
          <OrnamentalDivider text="La Citadel — Where Luxury Meets Location." />
        </div>
      </div>

      <Section9WhatsApp />
      <Section10Gallery />
      <Section3QuickEnquiry />
      <Section11Footer />

      <BrochureModal open={brochureOpen} onClose={() => setBrochureOpen(false)} />
      <SiteVisitModal open={siteVisitOpen} onClose={() => setSiteVisitOpen(false)} />
      <ImageLightbox image={zoomImage} label={zoomLabel} onClose={() => setZoomImage(null)} />
    </div>
  )
}
