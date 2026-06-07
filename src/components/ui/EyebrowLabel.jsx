export default function EyebrowLabel({ children, light = false }) {
  return (
    <div className={`eyebrow ${light ? 'text-gold-light' : 'text-gold'}`}>
      <span style={{ fontSize: 7 }}>◆</span>
      {children}
    </div>
  )
}
