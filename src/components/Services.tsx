const services = [
  { num: '01', icon: '\u{1F3AC}', name: 'Content Creation', desc: "Contenuti che catturano l'attenzione e costruiscono community autentiche attorno al tuo brand.", tag: 'Video & Photo', cls: 'sv-card-1' },
  { num: '02', icon: '\u2726', name: 'Talent Management', desc: 'Seguiamo ogni aspetto della carriera: contratti, brand deal, crescita strategica a 360\u00B0.', tag: '360\u00B0 Care', cls: 'sv-card-2' },
  { num: '03', icon: '\u{1F4E1}', name: 'Strategia Social', desc: 'Analisi, contenuto e timing preciso per massimizzare reach e engagement su ogni piattaforma.', tag: 'Data Driven', cls: 'sv-card-3' },
  { num: '04', icon: '\u{1F525}', name: 'Influencer Marketing', desc: 'Colleghiamo brand con i creator giusti. Campagne che risuonano da connessioni reali.', tag: 'Brand Fit', cls: 'sv-card-4' },
  { num: '05', icon: '\u{1F3AF}', name: 'Casting & Scouting', desc: 'Troviamo i talenti di domani oggi. Network capillare in tutta Italia con occhio sulle tendenze.', tag: 'Talent Scout', cls: 'sv-card-5' },
  { num: '06', icon: '\u26A1', name: 'Brand Strategy', desc: 'Identit\u00E0 di marca memorabili. Dal naming al visual, dalla voce al posizionamento unico.', tag: 'Identity', cls: 'sv-card-6' },
]

export default function Services() {
  return (
    <section id="servizi" className="flow-detail" style={{ padding: '130px 24px', position: 'relative', zIndex: 2, isolation: 'isolate' }}>
      {/* flow-left decorative elements */}
      <div className="flow-blob" style={{ left: -290, top: '8%' }} />
      <div className="flow-dot" style={{ left: 112, top: '56%' }} />

      <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <div className="reveal" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 68, flexWrap: 'wrap', gap: 24 }}>
          <div>
            <h2 style={{ fontFamily: 'Figtree, sans-serif', fontWeight: 900, fontSize: 'clamp(34px,4.5vw,58px)', letterSpacing: '-.03em', lineHeight: 1.05 }}>
              Scegli la tua traiettoria
            </h2>
            <p style={{ fontSize: 15, color: '#fff', marginTop: 12, fontWeight: 400, lineHeight: 1.5 }}>
              Uno slalom tra strategia, creatività e creator.
            </p>
          </div>
        </div>

        <div className="reveal sv-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 20 }}>
          {services.map((s) => (
            <div key={s.num} className={`sv-card ${s.cls}`} style={{ padding: '40px 34px' }}>
              <div style={{ fontSize: 10, fontWeight: 800, color: 'var(--muted)', letterSpacing: '.15em', marginBottom: 20, opacity: .4, position: 'relative', zIndex: 1 }}>{s.num}</div>
              <div style={{ width: 42, height: 42, borderRadius: 14, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20, fontSize: 20, background: 'rgba(225,48,108,.08)', border: '1px solid rgba(225,48,108,.15)', position: 'relative', zIndex: 1 }}>{s.icon}</div>
              <div style={{ fontFamily: 'Figtree, sans-serif', fontWeight: 800, fontSize: 17, letterSpacing: '-.02em', marginBottom: 10, position: 'relative', zIndex: 1 }}>{s.name}</div>
              <div style={{ fontSize: 13.5, color: 'var(--muted)', lineHeight: 1.65, fontWeight: 400, position: 'relative', zIndex: 1 }}>{s.desc}</div>
              <span style={{ display: 'inline-block', marginTop: 16, fontSize: 10, fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--ig-pink)', background: 'rgba(225,48,108,.08)', border: '1px solid rgba(225,48,108,.15)', padding: '4px 12px', borderRadius: 100, position: 'relative', zIndex: 1 }}>{s.tag}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
