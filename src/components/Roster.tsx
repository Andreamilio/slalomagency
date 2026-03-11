const IgIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 10, height: 10, flexShrink: 0 }}>
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
)
const TtIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 10, height: 10, flexShrink: 0 }}>
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.77 1.52V6.76a4.85 4.85 0 01-1-.07z" />
  </svg>
)

const talents = [
  { name: 'Marco Rossi', handle: '@marcorossi', initials: 'MR', ig: '2.4M', tt: '1.1M', bg: 'linear-gradient(145deg,#2a0830,#833AB4)', mt: 0, ar: '3/4.2' },
  { name: 'Sofia Conti', handle: '@sofiaconti', initials: 'SC', ig: '1.8M', tt: '3.2M', bg: 'linear-gradient(145deg,#1a0520,#E1306C)', mt: 44, ar: '3/4' },
  { name: 'Luca Ferrari', handle: '@lucaferrari', initials: 'LF', ig: '900K', tt: '2.1M', bg: 'linear-gradient(145deg,#081a1a,#25F4EE)', mt: -20, ar: '3/4.4' },
  { name: 'Anna Vitale', handle: '@annavitale', initials: 'AV', ig: '3.1M', tt: '4.8M', bg: 'linear-gradient(145deg,#1a0510,#FE2C55)', mt: 22, ar: '3/4' },
]

export default function Roster() {
  return (
    <section id="roster" className="flow-detail" style={{ padding: '130px 24px', position: 'relative', overflow: 'hidden', zIndex: 2, isolation: 'isolate' }}>
      {/* flow-right decorative elements */}
      <div className="flow-blob" style={{ right: -285, top: '12%' }} />
      <div className="flow-dot" style={{ right: 118, top: '22%' }} />

      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', background: 'radial-gradient(ellipse at 50% 0%, rgba(225,48,108,.03) 0%, transparent 60%)' }} />
      <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 1 }}>

        <div className="reveal" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 52, flexWrap: 'wrap', gap: 20, position: 'relative', zIndex: 1 }}>
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, fontSize: 11, fontWeight: 600, letterSpacing: '.15em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 16 }}>
              <span style={{ width: 22, height: 1, background: 'var(--ig-pink)', display: 'inline-block' }} />
              I nostri talenti
            </div>
            <h2 style={{ fontFamily: 'Figtree, sans-serif', fontWeight: 900, fontSize: 'clamp(34px,4.5vw,58px)', letterSpacing: '-.03em', lineHeight: 1.05 }}>
              Il Roster
            </h2>
          </div>
          <a href="#" className="link-arr" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: 'Figtree, sans-serif', fontWeight: 700, fontSize: 12.5, color: 'var(--ig-pink)', textDecoration: 'none', letterSpacing: '.05em', textTransform: 'uppercase' }}>
            Vedi tutti &rarr;
          </a>
        </div>

        <div className="reveal roster-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 16, alignItems: 'start', position: 'relative', zIndex: 1 }}>
          {talents.map((t) => (
            <div key={t.handle} className="r-card roster-card" style={{ aspectRatio: t.ar, marginTop: t.mt }}>
              <div className="r-bg" style={{ background: t.bg }} />
              <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-60%)', fontWeight: 900, fontSize: 64, color: 'rgba(255,255,255,.07)', letterSpacing: '-.05em', zIndex: 1, userSelect: 'none' }}>{t.initials}</div>
              <div style={{ position: 'absolute', inset: 0, zIndex: 2, background: 'linear-gradient(to bottom, transparent 0%, transparent 30%, rgba(8,8,16,.45) 55%, rgba(8,8,16,.90) 80%, rgba(8,8,16,.97) 100%)' }} />
              <div className="r-blur" />
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: 18, zIndex: 4 }}>
                <div style={{ fontFamily: 'Figtree, sans-serif', fontWeight: 800, fontSize: 15, letterSpacing: '-.01em', marginBottom: 3 }}>{t.name}</div>
                <div style={{ fontSize: 12, color: 'rgba(240,240,248,.6)', fontWeight: 400 }}>{t.handle}</div>
                <div style={{ display: 'flex', gap: 6, marginTop: 10, flexWrap: 'wrap' }}>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5, fontSize: 10, fontWeight: 800, letterSpacing: '.04em', color: '#fff', padding: '4px 10px', borderRadius: 8, background: 'linear-gradient(135deg, var(--ig-purple), var(--ig-pink), var(--ig-orange))' }}>
                    <IgIcon />{t.ig}
                  </span>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5, fontSize: 10, fontWeight: 800, letterSpacing: '.04em', color: '#fff', padding: '4px 10px', borderRadius: 8, background: 'var(--dark-text)' }}>
                    <TtIcon />{t.tt}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
