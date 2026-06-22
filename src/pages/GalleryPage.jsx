import { useState } from 'react'
import { motion } from 'framer-motion'
import { Maximize2 } from 'lucide-react'
import Navbar from '../components/Navbar'
import PageHero from '../components/ui/PageHero'
import EyebrowLabel from '../components/ui/EyebrowLabel'
import OrnamentalDivider from '../components/ui/OrnamentalDivider'
import ImageLightbox from '../components/ui/ImageLightbox'
import Section9WhatsApp from '../components/sections/Section9WhatsApp'
import Section3QuickEnquiry from '../components/sections/Section3QuickEnquiry'
import Section6VillaLiving from '../components/sections/Section6VillaLiving'
import Section11Footer from '../components/sections/Section11Footer'
import { GALLERY } from '../data/gallery'

const fade = { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: '-80px' } }

const GALLERY_SECTIONS = [
  { key: 'villas',     label: 'Villas',                                 cats: ['villas'] },
  { key: 'clubhouse',  label: 'Clubhouse',                              cats: ['clubhouse'] },
  { key: 'amenities',  label: 'Amenities',                              cats: ['amenities'] },
  { key: 'overview',   label: 'Master Plan, Location & Aerial Views',   cats: ['masterplan', 'location', 'aerial'] },
]

function CategorySection({ label, images, tinted, onZoom }) {
  return (
    <section className={`section-pad ${tinted ? 'bg-card' : 'bg-ivory'}`}>
      <div className="container-wide">
        <motion.div {...fade} transition={{ duration: 0.6 }} className="mb-8">
          <EyebrowLabel>Gallery</EyebrowLabel>
          <h2 className="heading-lg mt-4">{label}</h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.06 } } }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
          style={{ gridAutoRows: '220px' }}
        >
          {images.map((item, i) => (
            <motion.button
              key={item.id}
              onClick={() => onZoom(item.src, item.label)}
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
              className={`relative rounded-xl overflow-hidden border border-beige group ${i === 0 ? 'col-span-2 row-span-2' : ''}`}
            >
              <img src={item.src} alt={item.label} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-charcoal/0 to-transparent" />
              <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/15 transition-colors flex items-center justify-center">
                <Maximize2 size={18} className="text-white opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <p className="absolute bottom-2.5 left-3 right-3 text-white text-[11px] font-medium tracking-wide text-left">{item.label}</p>
            </motion.button>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default function GalleryPage() {
  const [zoomImage, setZoomImage] = useState(null)
  const [zoomLabel, setZoomLabel] = useState('')

  const handleZoom = (src, label) => { setZoomImage(src); setZoomLabel(label) }

  return (
    <div className="min-h-screen">
      <Navbar />

      <PageHero
        eyebrow="Gallery"
        title="Every Corner of La Citadel"
        description="Master plan views, villa renders, the clubhouse, amenities, and the location itself — a closer look at every part of La Citadel, in detail."
        image="/image-assets/areal-view.jpg"
        crumb="Gallery"
      />

      {GALLERY_SECTIONS.map(({ key, label, cats }, i) => (
        <CategorySection
          key={key}
          label={label}
          images={GALLERY.filter(g => cats.includes(g.cat))}
          tinted={i % 2 === 1}
          onZoom={handleZoom}
        />
      ))}

      <div className="bg-ivory pb-4">
        <div className="container-wide">
          <OrnamentalDivider text="La Citadel — A closer look before your visit." />
        </div>
      </div>

      <Section9WhatsApp />
      <Section3QuickEnquiry />
      <Section6VillaLiving />
      <Section11Footer />

      <ImageLightbox image={zoomImage} label={zoomLabel} onClose={() => setZoomImage(null)} />
    </div>
  )
}
