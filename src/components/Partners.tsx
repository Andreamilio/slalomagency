const BASE = process.env.NEXT_PUBLIC_BASE_PATH || ''

const partners = [
  { name: 'RDS Next', logo: `${BASE}/partners/rdsnext.avif` },
  { name: '3SY', logo: `${BASE}/partners/3sy.avif` },
  { name: 'Studio Legale Oliveri', logo: `${BASE}/partners/sergio.avif` },
]

export default function Partners() {
  const repeated = Array.from({ length: 8 }, () => partners).flat()
  return (
    <div className="partners" style={{ position: 'relative', zIndex: 2 }}>
      <p style={{ textAlign: 'center', padding: '52px 24px 22px', fontSize: 11, fontWeight: 600, letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--muted)' }}>
        Collaboriamo con
      </p>
      <div style={{ padding: '22px 0', overflow: 'hidden', position: 'relative' }}>
        <div style={{ position: 'absolute', top: 0, bottom: 0, left: 0, width: 120, zIndex: 2, background: 'linear-gradient(to right, var(--bg), transparent)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', top: 0, bottom: 0, right: 0, width: 120, zIndex: 2, background: 'linear-gradient(to left, var(--bg), transparent)', pointerEvents: 'none' }} />
        <div className="marquee-track" style={{ display: 'flex', alignItems: 'center', whiteSpace: 'nowrap' }}>
          {repeated.map((p, i) => (
            <span key={i} style={{ display: 'inline-flex', alignItems: 'center', padding: '0 40px', flexShrink: 0 }}>
              <img
                src={p.logo}
                alt={p.name}
                style={{ height: 30, width: 'auto', objectFit: 'contain', transition: 'opacity .3s' }}
              />
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
