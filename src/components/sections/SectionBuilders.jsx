import { motion } from 'framer-motion'
import { Home, ShieldCheck, Building2, HardHat, Layers, Landmark, Sparkles, Target, ArrowUpRight } from 'lucide-react'
import EyebrowLabel from '../ui/EyebrowLabel'
import OrnamentalDivider from '../ui/OrnamentalDivider'

const fade = { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: '-80px' } }

const BUILDERS = [
  {
    logo: '/image-assets/concrete-infra-logo-dark.png',
    name: 'Concrete Infra Developers',
    href: 'https://www.concreteinfradevelopers.com/',
    description: 'Residential development experience across Hyderabad, with a portfolio spanning villas, apartments, and plotted communities.',
    projects: ['Maithry Signature', 'Concrete Sangeeth', 'Concrete Palazzo', 'Concrete Orchids', 'Concrete Melody', 'Concrete Guitar', 'Concrete Crescent'],
    expertise: 'Experienced across villas, apartments, plotted development, and residential community planning.',
    trust: [
      { icon: Home,        label: 'Completed Residential Portfolio' },
      { icon: ShieldCheck, label: 'Quality-Focused Execution' },
      { icon: Building2,   label: 'Villa Community Expertise' },
    ],
    cta: 'Explore Concrete Infra',
  },
  {
    logo: '/image-assets/vpr-builders-logo.png',
    name: 'VPR Builders',
    href: 'https://vprbuilders.in/',
    description: 'Part of the wider VPR Group, bringing over 20 years of project management and execution experience, including VPR Shantiniketan in Nellore.',
    projects: [],
    expertise: 'Infrastructure-led project capability backed by a diversified group presence.',
    trust: [
      { icon: HardHat,  label: '20+ Years of Execution Strength' },
      { icon: Layers,   label: 'Integrated Community Planning' },
      { icon: Landmark, label: 'Large-Scale Project Capability' },
    ],
    cta: 'Explore VPR Builders',
  },
]

const TRUST_STRIP = [
  { icon: Home,        label: 'Residential Experience' },
  { icon: ShieldCheck, label: 'Execution Strength' },
  { icon: Sparkles,    label: 'Thoughtful Planning' },
  { icon: Target,      label: 'Long-Term Value' },
]

export default function SectionBuilders() {
  return (
    <section id="builders" className="bg-ivory section-pad">
      <div className="container-wide">

        {/* Intro */}
        <motion.div {...fade} transition={{ duration: 0.6 }} className="text-center max-w-2xl mx-auto mb-14">
          <EyebrowLabel center>Built on Trust. Delivered with Excellence.</EyebrowLabel>
          <h2 className="heading-xl mt-4 mb-5">The Builders Behind La Citadel</h2>
          <p className="body-md">
            La Citadel is shaped by two experienced development partners, brought together for their commitment to quality, execution strength, and long-term community value.
          </p>
        </motion.div>

        {/* Builder cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
          {BUILDERS.map(({ logo, name, href, description, projects, expertise, trust, cta }, i) => (
            <motion.div
              key={name}
              {...fade}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="card-light p-8 flex flex-col"
            >
              <div className="h-24 mb-6">
                <img src={logo} alt={name} className="h-full w-auto object-contain object-left" />
              </div>

              <h3 className="font-serif font-light text-2xl text-ink mb-3">{name}</h3>
              <p className="text-sm text-muted leading-relaxed mb-4">{description}</p>

              {projects.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-5">
                  {projects.map(p => (
                    <span key={p} className="text-[10px] px-2.5 py-1 rounded-full bg-card border border-beige text-muted">
                      {p}
                    </span>
                  ))}
                </div>
              )}

              <p className="text-xs text-muted leading-relaxed mb-6">{expertise}</p>

              <div className="flex flex-col gap-3 mb-7 mt-auto">
                {trust.map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-2.5">
                    <Icon size={14} className="text-gold flex-shrink-0" />
                    <span className="text-xs text-ink">{label}</span>
                  </div>
                ))}
              </div>

              <a href={href} target="_blank" rel="noopener noreferrer" className="btn-outline justify-center">
                {cta}
                <ArrowUpRight size={14} />
              </a>
            </motion.div>
          ))}
        </div>

        {/* Shared trust strip */}
        <motion.div {...fade} transition={{ duration: 0.6, delay: 0.2 }} className="card-light overflow-hidden mb-10">
          <div className="flex items-stretch flex-wrap">
            {TRUST_STRIP.map(({ icon: Icon, label }, i) => (
              <div key={label} className="flex items-stretch flex-1 min-w-[160px]">
                <div className="flex flex-col items-center justify-center py-6 px-4 text-center gap-2 flex-1">
                  <Icon size={18} className="text-gold" />
                  <p className="text-xs font-medium text-ink">{label}</p>
                </div>
                {i < TRUST_STRIP.length - 1 && <div className="w-px self-stretch my-5 bg-beige" />}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div {...fade} transition={{ duration: 0.5, delay: 0.3 }}>
          <OrnamentalDivider text="La Citadel — Built by Trusted Hands." />
        </motion.div>
      </div>
    </section>
  )
}
