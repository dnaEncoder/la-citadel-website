import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

export default function ImageLightbox({ image, label, onClose }) {
  useEffect(() => {
    if (!image) return
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [image, onClose])

  return (
    <AnimatePresence>
      {image && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[100] bg-charcoal/90 backdrop-blur-sm flex items-center justify-center px-4 py-10"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.2 }}
            onClick={e => e.stopPropagation()}
            className="relative max-w-4xl w-full"
          >
            <button onClick={onClose} className="absolute -top-10 right-0 text-white/70 hover:text-white transition-colors">
              <X size={22} />
            </button>
            <img src={image} alt={label} className="w-full max-h-[80vh] object-contain rounded-lg shadow-2xl" />
            {label && <p className="text-white/70 text-xs text-center mt-3 tracking-wide">{label}</p>}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
