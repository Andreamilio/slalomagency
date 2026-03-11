const socialIcons = ['X', 'in', '\u25B7', '\u25CE']

export default function Footer() {
  return (
    <footer className="site-footer" style={{ borderTop: '1px solid var(--border)', padding: '64px 24px', position: 'relative', zIndex: 2 }}>
      <div className="footer-grid" style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1.6fr 1fr 1fr 1fr', gap: 48 }}>
        <div>
          <div style={{ fontFamily: 'Figtree, sans-serif', fontWeight: 900, fontSize: 16, letterSpacing: '.1em', marginBottom: 14 }}>
            SLALOM AGENCY<span style={{ color: 'var(--ig-pink)' }}>.</span>
          </div>
          <p style={{ fontSize: 13.5, color: 'var(--muted)', lineHeight: 1.7, fontWeight: 400, maxWidth: 250 }}>
            Talent &amp; Creative Agency. Trasformiamo creator in brand indimenticabili.
          </p>
          <div className="footer-social" style={{ display: 'flex', gap: 10, marginTop: 22 }}>
            {socialIcons.map((icon, i) => (
              <a key={i} href="#" className="social-icon" style={{ width: 34, height: 34, borderRadius: '50%', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, color: 'var(--muted)', textDecoration: 'none' }}>
                {icon}
              </a>
            ))}
          </div>
        </div>

        <div>
          <div className="footer-col-title" style={{ fontFamily: 'Figtree, sans-serif', fontWeight: 700, fontSize: 11, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 18 }}>Navigazione</div>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 9 }}>
            {['Case Studies', 'Roster', 'Chi Siamo', 'Press'].map((l) => (
              <li key={l}><a href="#" className="footer-link" style={{ color: 'var(--muted)', textDecoration: 'none', fontSize: 14, fontWeight: 400 }}>{l}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <div className="footer-col-title" style={{ fontFamily: 'Figtree, sans-serif', fontWeight: 700, fontSize: 11, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 18 }}>Servizi</div>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 9 }}>
            {['Content Creation', 'Talent Management', 'Influencer Marketing', 'Brand Strategy'].map((l) => (
              <li key={l}><a href="#" className="footer-link" style={{ color: 'var(--muted)', textDecoration: 'none', fontSize: 14, fontWeight: 400 }}>{l}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <div className="footer-col-title" style={{ fontFamily: 'Figtree, sans-serif', fontWeight: 700, fontSize: 11, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 18 }}>Contatti</div>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 9 }}>
            {['hello@slalom.agency', 'Milano, Italia', 'Privacy Policy', 'Cookie Policy'].map((l) => (
              <li key={l}><a href={l.includes('@') ? `mailto:${l}` : '#'} className="footer-link" style={{ color: 'var(--muted)', textDecoration: 'none', fontSize: 14, fontWeight: 400 }}>{l}</a></li>
            ))}
          </ul>
        </div>
      </div>

      <div className="footer-bottom" style={{ maxWidth: 1200, margin: '44px auto 0', paddingTop: 24, borderTop: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 12, color: 'var(--muted)' }}>
        <span>&copy; 2026 Slalom Agency. Tutti i diritti riservati.</span>
        <span>Made with obsession in Italy &#x1F1EE;&#x1F1F9;</span>
      </div>
    </footer>
  )
}
