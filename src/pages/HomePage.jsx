import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Section1Hero         from '../components/sections/Section1Hero'
import Section2MasterFilm   from '../components/sections/Section2MasterFilm'
import Section3QuickEnquiry from '../components/sections/Section3QuickEnquiry'
import Section4ProjectSnapshot from '../components/sections/Section4ProjectSnapshot'
import SectionBuilders      from '../components/sections/SectionBuilders'
import Section5MasterPlan   from '../components/sections/Section5MasterPlan'
import Section6VillaLiving  from '../components/sections/Section6VillaLiving'
import Section7LocationGrowth from '../components/sections/Section7LocationGrowth'
import Section8Clubhouse    from '../components/sections/Section8Clubhouse'
import Section9WhatsApp     from '../components/sections/Section9WhatsApp'
import Section10Gallery     from '../components/sections/Section10Gallery'
import Section11Footer      from '../components/sections/Section11Footer'

export default function HomePage() {
  const location = useLocation()

  useEffect(() => {
    if (!location.hash) return
    const el = document.querySelector(location.hash)
    if (el) setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 50)
  }, [location.hash])

  return (
    <div className="min-h-screen">
      <Section1Hero />
      <Section2MasterFilm />
      <Section3QuickEnquiry />
      <Section4ProjectSnapshot />
      <SectionBuilders />
      <Section5MasterPlan />
      <Section6VillaLiving />
      <Section10Gallery />
      <Section7LocationGrowth />
      <Section8Clubhouse />
      <Section9WhatsApp />
      <Section11Footer />
    </div>
  )
}
