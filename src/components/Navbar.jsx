import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { FileText, MessageCircle, Menu, X } from 'lucide-react'
import BrochureModal from './ui/BrochureModal'

const NAV_LINKS = [
  { label: 'Overview',    href: '#hero',           type: 'anchor' },
  { label: 'Master Plan', href: '#master-plan',     type: 'anchor' },
  { label: 'Villas',      href: '/villa-living',    type: 'route' },
  { label: 'Amenities',   href: '#clubhouse',       type: 'anchor' },
  { label: 'Location',    href: '/location-growth', type: 'route' },
  { label: 'Gallery',     href: '/gallery',         type: 'route' },
  { label: 'Contact',     href: '/contact-us',      type: 'route' },
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

const ROUTE_TO_NAV = {
  '/villa-living':     'Villas',
  '/location-growth':  'Location',
  '/gallery':          'Gallery',
  '/contact-us':       'Contact',
}

export default function Navbar() {
  const navigate = useNavigate()
  const location = useLocation()
  const onHome = location.pathname === '/'

  const [scrolled, setScrolled]   = useState(false)
  const [active, setActive]       = useState(onHome ? 'Overview' : ROUTE_TO_NAV[location.pathname])
  const [menuOpen, setMenuOpen]   = useState(false)
  const [brochureOpen, setBrochureOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!onHome) {
      setActive(ROUTE_TO_NAV[location.pathname])
      return
    }
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
  }, [onHome, location.pathname])

  const handleNav = (link) => {
    setMenuOpen(false)
    if (link.type === 'route') {
      navigate(link.href)
      return
    }
    if (!onHome) {
      navigate('/' + link.href)
      return
    }
    const el = document.querySelector(link.href)
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
        <a href="/" onClick={(e) => { e.preventDefault(); setMenuOpen(false); navigate('/') }} className="flex items-center flex-shrink-0">
          <img src="/logo.png" alt="La Citadel" className="h-9 w-auto object-contain" />
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-7">
          {NAV_LINKS.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNav(link)}
              className={`text-[13px] font-semibold tracking-widest transition-colors pb-0.5 ${
                active === link.label
                  ? 'text-gold border-b border-gold'
                  : 'text-white/65 hover:text-white'
              }`}
            >
              {link.label}
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
          {NAV_LINKS.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNav(link)}
              className={`text-left text-sm font-medium tracking-wider transition-colors ${
                active === link.label ? 'text-gold' : 'text-white/70 hover:text-white'
              }`}
            >
              {link.label}
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
