import { motion } from 'framer-motion'
import { MessageCircle, Lock, FileText, Bell, Image, Calendar, Headphones } from 'lucide-react'
import EyebrowLabel from '../ui/EyebrowLabel'

const fade = { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: '-80px' } }

const BENEFITS = [
  { icon: FileText,   title: 'Complete Brochure',    body: 'Floor plans, master plan, amenities & more' },
  { icon: Bell,       title: 'Project Updates',       body: 'Construction progress, milestones & announcements' },
  { icon: Image,      title: 'Photos & Videos',       body: 'Latest site images, walkthroughs & reels' },
  { icon: Calendar,   title: 'Events & Site Visits',  body: 'Stay updated on events and visit schedules' },
  { icon: Headphones, title: 'Direct Support',        body: 'Get your queries answered by our expert team' },
]

const PHONE_ITEMS = ['Announcements', 'Construction Updates', 'Photo & Video Gallery', 'Events & Site Visits', 'General Discussion']

export default function Section9WhatsApp() {
  return (
    <section id="whatsapp" className="bg-ivory section-pad">
      <div className="container-wide">

        {/* Top 2-col */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 mb-12">

          {/* Left */}
          <div className="flex-1 min-w-0 flex flex-col justify-center">
            <motion.div {...fade} transition={{ duration: 0.6 }}>
              <EyebrowLabel>Stay Connected</EyebrowLabel>
              <h2 className="heading-xl mt-4 mb-5">
                Join the La Citadel<br />
                WhatsApp Community
              </h2>
              <p className="body-md max-w-md mb-8">
                Want the complete brochure, layout details, pricing updates, and site visit information? Join the La Citadel WhatsApp Community and get all project updates in one place.
              </p>
            </motion.div>

            <motion.div {...fade} transition={{ duration: 0.6, delay: 0.15 }} className="flex flex-wrap gap-3 mb-6">
              <a href="https://chat.whatsapp.com/JJOSPLEvn5CL1YfgltwMB5" target="_blank" rel="noopener noreferrer" className="btn-gold">
                <MessageCircle size={15} />
                Join WhatsApp Community
              </a>
              <a href="https://chat.whatsapp.com/JJOSPLEvn5CL1YfgltwMB5" target="_blank" rel="noopener noreferrer" className="btn-outline">
                Request Brochure on WhatsApp
              </a>
            </motion.div>

            <motion.div {...fade} transition={{ duration: 0.6, delay: 0.25 }} className="flex items-center gap-2">
              <Lock size={13} className="text-muted/60 flex-shrink-0" />
              <p className="text-xs text-muted/70">Secure. Private. Only project updates. No spam.</p>
            </motion.div>
          </div>

          {/* Right — phone mockup */}
          <motion.div {...fade} transition={{ duration: 0.6, delay: 0.2 }} className="w-full lg:w-[44%] flex-shrink-0 flex items-center justify-center">
            <div className="relative">
              {/* Circular image background */}
              <div className="w-72 h-72 lg:w-80 lg:h-80 rounded-full placeholder-bg-dark opacity-80 mx-auto" />

              {/* Phone mockup centered */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-52 bg-charcoal-soft rounded-[2rem] border-2 border-charcoal-mid shadow-2xl overflow-hidden">
                {/* Phone status bar */}
                <div className="bg-[#128C7E] px-4 pt-3 pb-3">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center">
                      <MessageCircle size={13} className="text-white" />
                    </div>
                    <div>
                      <p className="text-white text-[10px] font-medium">La Citadel Community</p>
                      <p className="text-white/70 text-[8px]">Community · 256 members</p>
                    </div>
                  </div>
                </div>

                {/* Chat area */}
                <div className="bg-[#E5DDD5] px-2 py-3 flex flex-col gap-2 min-h-[200px]">
                  {/* Welcome card */}
                  <div className="bg-white rounded-lg px-3 py-2 shadow-sm mx-1">
                    <p className="text-[8px] font-medium text-[#128C7E] mb-1">🏡 Welcome to La Citadel Community!</p>
                    <p className="text-[7px] text-gray-600 leading-relaxed">Your one-stop destination for project updates, exclusive previews and important announcements.</p>
                  </div>

                  {/* Channel list */}
                  <div className="bg-white rounded-lg overflow-hidden mx-1 shadow-sm">
                    {PHONE_ITEMS.map((item, i) => (
                      <div key={item} className={`flex items-center gap-2 px-2.5 py-1.5 ${i < PHONE_ITEMS.length - 1 ? 'border-b border-gray-100' : ''}`}>
                        <div className="w-4 h-4 rounded-full bg-[#128C7E]/20 flex items-center justify-center flex-shrink-0">
                          <span className="text-[6px] text-[#128C7E]">#</span>
                        </div>
                        <p className="text-[7px] text-gray-700">{item}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mx-1">
                    <p className="text-[7px] text-center text-gray-500 italic">Only admins can send messages</p>
                  </div>
                </div>

                {/* Bottom bar */}
                <div className="bg-[#F0F0F0] px-3 py-2 flex items-center gap-2">
                  <div className="flex-1 h-5 bg-white rounded-full border border-gray-200" />
                  <div className="w-5 h-5 rounded-full bg-[#128C7E] flex items-center justify-center">
                    <MessageCircle size={9} className="text-white" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Benefits strip */}
        <motion.div {...fade} transition={{ duration: 0.6, delay: 0.3 }} className="card-light mb-8 overflow-hidden">
          <div className="flex items-stretch flex-wrap">
            {BENEFITS.map(({ icon: Icon, title, body }, i) => (
              <div key={title} className="flex items-stretch flex-1 min-w-[160px]">
                <div className="flex flex-col items-center justify-center py-6 px-4 text-center gap-2 flex-1">
                  <Icon size={18} className="text-gold" />
                  <p className="text-xs font-medium text-ink">{title}</p>
                  <p className="text-[10px] text-muted leading-snug">{body}</p>
                </div>
                {i < BENEFITS.length - 1 && <div className="w-px self-stretch my-5 bg-beige" />}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Bottom community card */}
        <motion.div {...fade} transition={{ duration: 0.6, delay: 0.35 }} className="card-light overflow-hidden">
          <div className="flex flex-col sm:flex-row items-center gap-6 p-6">
            {/* Image */}
            <div className="w-full sm:w-48 h-32 rounded-xl overflow-hidden flex-shrink-0">
              <div className="w-full h-full placeholder-bg-dark flex items-center justify-center">
                <span className="text-white/12 text-[9px] tracking-widest uppercase">Entrance Image</span>
              </div>
            </div>

            {/* Text */}
            <div className="flex-1 text-center sm:text-left">
              <h3 className="font-serif font-light text-2xl text-ink mb-2">Be a part of La Citadel</h3>
              <p className="text-sm text-muted leading-relaxed max-w-md">
                Join hundreds of prospective homeowners who are already exploring and investing in the future of coastal luxury living.
              </p>
            </div>

            {/* Avatar circles + count */}
            <div className="flex flex-col items-center gap-2 flex-shrink-0">
              <div className="flex -space-x-2">
                {[1,2,3,4].map(i => (
                  <div key={i} className="w-9 h-9 rounded-full bg-gradient-to-br from-sand to-beige border-2 border-white flex items-center justify-center">
                    <span className="text-[10px] text-muted font-medium">{String.fromCharCode(64 + i)}</span>
                  </div>
                ))}
                <div className="w-9 h-9 rounded-full bg-gold border-2 border-white flex items-center justify-center">
                  <span className="text-[8px] text-white font-bold">+252</span>
                </div>
              </div>
              <p className="text-lg font-serif font-light text-gold">256+</p>
              <p className="text-[10px] text-muted tracking-wider uppercase">Members joined</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
