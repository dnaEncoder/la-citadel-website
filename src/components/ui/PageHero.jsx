import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'
import EyebrowLabel from './EyebrowLabel'

export default function PageHero({ eyebrow, title, description, image, crumb }) {
  return (
    <section className="relative pt-[68px]" style={{ height: '52vh', minHeight: 380 }}>
      <img src={image} alt={title} className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/45 to-charcoal/30" />

      <div className="relative z-10 h-full container-wide flex flex-col justify-end pb-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-1.5 text-[11px] text-white/55 mb-4">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={12} />
            <span className="text-white/80">{crumb}</span>
          </div>
          <EyebrowLabel light>{eyebrow}</EyebrowLabel>
          <h1 className="font-serif font-light text-white leading-editorial text-4xl lg:text-5xl mt-4 mb-4">{title}</h1>
          {description && (
            <p className="text-white/65 text-sm max-w-xl leading-relaxed">{description}</p>
          )}
        </motion.div>
      </div>
    </section>
  )
}
