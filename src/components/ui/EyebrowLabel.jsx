export default function EyebrowLabel({ children, light = false, center = false }) {
  return (
    <div className={`eyebrow ${light ? 'text-gold-light' : 'text-gold'} ${center ? 'justify-center' : ''}`}>
      <span style={{ fontSize: 7 }}>◆</span>
      {children}
    </div>
  )
}
