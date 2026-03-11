const partners = ['RDS', 'Studio Legale Oliveri', 'Arkage', '3SY', 'BigIt', 'Next', 'MediaSet', 'Sky Italia']

export default function Partners() {
  const doubled = [...partners, ...partners]
  return (
    <div className="partners" style={{ position: 'relative', zIndex: 2 }}>
      <p style={{ textAlign: 'center', padding: '52px 24px 22px', fontSize: 11, fontWeight: 600, letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--muted)' }}>
        Collaboriamo con
      </p>
      <div style={{ borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', padding: '22px 0', overflow: 'hidden', position: 'relative' }}>
        <div style={{ position: 'absolute', top: 0, bottom: 0, left: 0, width: 120, zIndex: 2, background: 'linear-gradient(to right, var(--bg), transparent)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', top: 0, bottom: 0, right: 0, width: 120, zIndex: 2, background: 'linear-gradient(to left, var(--bg), transparent)', pointerEvents: 'none' }} />
        <div className="marquee-track" style={{ display: 'flex', alignItems: 'center', whiteSpace: 'nowrap' }}>
          {doubled.map((name, i) => (
            <span key={i} style={{ display: 'inline-flex', alignItems: 'center', padding: '0 40px', flexShrink: 0 }}>
              <span style={{ height: 34, display: 'flex', alignItems: 'center', padding: '0 20px', background: 'rgba(240,240,248,.05)', border: '1px solid rgba(240,240,248,.09)', borderRadius: 8, fontWeight: 700, fontSize: 13, color: 'rgba(240,240,248,.28)', letterSpacing: '.05em', whiteSpace: 'nowrap', transition: 'all .3s' }}>
                {name}
              </span>
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
