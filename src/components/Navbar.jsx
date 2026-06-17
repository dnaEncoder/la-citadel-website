import { useState, useEffect } from 'react'
import { FileText, MessageCircle, Menu, X } from 'lucide-react'
import BrochureModal from './ui/BrochureModal'

const NAV_LINKS = [
  { label: 'Overview',    href: '#hero' },
  { label: 'Master Plan', href: '#master-plan' },
  { label: 'Villas',      href: '#villa-living' },
  { label: 'Amenities',   href: '#clubhouse' },
  { label: 'Location',    href: '#location' },
  { label: 'Gallery',     href: '#gallery' },
]

const SECTION_IDS = ['hero', 'master-film', 'enquiry', 'snapshot', 'master-plan', 'villa-living', 'location', 'clubhouse', 'whatsapp', 'gallery']

const SECTION_TO_NAV = {
  'hero':        'Overview',
  'master-film': 'Overview',
  'enquiry':     'Overview',
  'snapshot':    'Overview',
  'master-plan': 'Master Plan',
  'villa-living':'Villas',
  'location':    'Location',
  'clubhouse':   'Amenities',
  'whatsapp':    'Amenities',
  'gallery':     'Gallery',
}

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false)
  const [active, setActive]       = useState('Overview')
  const [menuOpen, setMenuOpen]   = useState(false)
  const [brochureOpen, setBrochureOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const observers = SECTION_IDS.map(id => {
      const el = document.getElementById(id)
      if (!el) return null
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(SECTION_TO_NAV[id]) },
        { threshold: 0.35 }
      )
      obs.observe(el)
      return obs
    })
    return () => observers.forEach(o => o?.disconnect())
  }, [])

  const handleNav = (href) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b
        ${scrolled
          ? 'bg-charcoal/95 backdrop-blur-md border-gold/20'
          : 'bg-transparent border-gold/50'
        }`}
    >
      <div className="container-wide h-[68px] flex items-center justify-between gap-6">

        {/* Logo */}
        <a href="#hero" onClick={() => handleNav('#hero')} className="flex items-center flex-shrink-0">
          <img src="/logo.png" alt="La Citadel" className="h-9 w-auto object-contain" />
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-7">
          {NAV_LINKS.map(({ label, href }) => (
            <button
              key={label}
              onClick={() => handleNav(href)}
              className={`text-[13px] font-semibold tracking-widest transition-colors pb-0.5 ${
                active === label
                  ? 'text-gold border-b border-gold'
                  : 'text-white/65 hover:text-white'
              }`}
            >
              {label}
            </button>
          ))}
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-2">
          <button onClick={() => setBrochureOpen(true)} className="hidden lg:flex items-center gap-1.5 px-4 py-2 text-[13px] font-normal text-white border border-gold/45 rounded-lg hover:border-gold/70 transition-colors">
            <FileText size={14} />
            Brochure
          </button>
          <a href="https://chat.whatsapp.com/JJOSPLEvn5CL1YfgltwMB5" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 px-4 py-2 text-[13px] font-normal text-white bg-gold/25 border border-gold/50 rounded-lg hover:bg-gold/40 transition-colors">
            <MessageCircle size={14} />
            <span className="hidden sm:inline">WhatsApp</span>
          </a>
          <button className="lg:hidden p-2 text-white/70 hover:text-white" onClick={() => setMenuOpen(v => !v)}>
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-charcoal-mid border-t border-gold/20 px-6 py-4 flex flex-col gap-4">
          {NAV_LINKS.map(({ label, href }) => (
            <button
              key={label}
              onClick={() => handleNav(href)}
              className={`text-left text-sm font-medium tracking-wider transition-colors ${
                active === label ? 'text-gold' : 'text-white/70 hover:text-white'
              }`}
            >
              {label}
            </button>
          ))}
          <div className="flex gap-3 pt-2 border-t border-gold/20">
            <button onClick={() => { setMenuOpen(false); setBrochureOpen(true) }} className="btn-dark-outline py-2 px-4 text-[13px]">Brochure</button>
            <a href="https://chat.whatsapp.com/JJOSPLEvn5CL1YfgltwMB5" target="_blank" rel="noopener noreferrer" className="btn-gold py-2 px-4 text-[13px]">WhatsApp</a>
          </div>
        </div>
      )}

      <BrochureModal open={brochureOpen} onClose={() => setBrochureOpen(false)} />
    </header>
  )
}
