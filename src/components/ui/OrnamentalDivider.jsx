export default function OrnamentalDivider({ text, light = false }) {
  const lineColor = light ? 'bg-gold/30' : 'bg-gold/25'
  const textColor = light ? 'text-white/40' : 'text-muted'
  return (
    <div className="flex items-center gap-4 w-full py-1">
      <div className={`flex-1 h-px ${lineColor}`} />
      <span className={`text-[10px] tracking-[0.22em] uppercase ${textColor} flex items-center gap-2 text-center min-w-0 shrink`}>
        <span className="text-gold" style={{ fontSize: 7 }}>✦</span>
        {text}
        <span className="text-gold" style={{ fontSize: 7 }}>✦</span>
      </span>
      <div className={`flex-1 h-px ${lineColor}`} />
    </div>
  )
}
