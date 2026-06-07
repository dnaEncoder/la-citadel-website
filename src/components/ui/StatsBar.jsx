import OrnamentalDivider from './OrnamentalDivider'

export default function StatsBar({ items, tagline, dark = false }) {
  const wrap   = dark ? 'bg-charcoal-mid border-gold/20' : 'bg-card border-beige'
  const title  = dark ? 'text-white text-sm font-medium'  : 'text-ink text-sm font-medium'
  const sub    = dark ? 'text-white/45 text-xs'           : 'text-muted text-xs'
  const div    = dark ? 'bg-gold/15'                      : 'bg-beige'
  const foot   = dark ? 'border-gold/20'                  : 'border-beige'

  return (
    <div className={`rounded-2xl border ${wrap} overflow-hidden`}>
      <div className="flex items-stretch">
        {items.map((item, i) => (
          <div key={i} className="flex items-stretch flex-1">
            <div className="flex-1 flex flex-col items-center justify-center py-7 px-4 text-center gap-2 min-w-0">
              <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                <item.icon size={18} className="text-gold" />
              </div>
              <p className={title}>{item.title}</p>
              <p className={sub}>{item.subtitle}</p>
            </div>
            {i < items.length - 1 && (
              <div className={`w-px self-stretch my-5 ${div} flex-shrink-0`} />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
