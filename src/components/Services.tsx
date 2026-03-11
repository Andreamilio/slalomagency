const services = [
  { num:'01', icon:'🎬', name:'Content Creation',    desc:"Contenuti che catturano l'attenzione e costruiscono community autentiche attorno al tuo brand.", tag:'Video & Photo', cls:'sv-card-1' },
  { num:'02', icon:'✦',  name:'Talent Management',   desc:'Seguiamo ogni aspetto della carriera: contratti, brand deal, crescita strategica a 360°.',        tag:'360° Care',    cls:'sv-card-2' },
  { num:'03', icon:'📡', name:'Strategia Social',    desc:'Analisi, contenuto e timing preciso per massimizzare reach e engagement su ogni piattaforma.',    tag:'Data Driven',  cls:'sv-card-3' },
  { num:'04', icon:'🔥', name:'Influencer Marketing',desc:'Colleghiamo brand con i creator giusti. Campagne che risuonano da connessioni reali.',             tag:'Brand Fit',    cls:'sv-card-4' },
  { num:'05', icon:'🎯', name:'Casting & Scouting',  desc:'Troviamo i talenti di domani oggi. Network capillare in tutta Italia con occhio sulle tendenze.',  tag:'Talent Scout', cls:'sv-card-5' },
  { num:'06', icon:'⚡', name:'Brand Strategy',      desc:'Identità di marca memorabili. Dal naming al visual, dalla voce al posizionamento unico.',          tag:'Identity',     cls:'sv-card-6' },
]

const cardStyle = (first: boolean, last: boolean, idx: number): React.CSSProperties => ({
  padding: '40px 34px',
  borderRadius: first && idx === 0 ? '16px 0 0 0'
    : first && idx === 2 ? '0 16px 0 0'
    : last  && idx === 0 ? '0 0 0 16px'
    : last  && idx === 2 ? '0 0 16px 0'
    : 0,
})

export default function Services() {
  const row1 = services.slice(0, 3)
  const row2 = services.slice(3, 6)

  return (
    <section id="servizi" className="services-section" style={{ padding:'130px 24px', position:'relative', zIndex:2 }}>
      <div style={{ maxWidth:1200, margin:'0 auto' }}>

        <div className="reveal services-intro" style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-end', marginBottom:68, flexWrap:'wrap', gap:24 }}>
          <div>
            <div style={{ display:'inline-flex', alignItems:'center', gap:10, fontSize:11, fontWeight:600, letterSpacing:'.15em', textTransform:'uppercase', color:'var(--muted)', marginBottom:16 }}>
              <span style={{ width:22, height:1, background:'var(--lime)', display:'inline-block' }} />
              Cosa facciamo
            </div>
            <h2 style={{ fontFamily:'Figtree, sans-serif', fontWeight:900, fontSize:'clamp(34px,4.5vw,58px)', letterSpacing:'-.03em', lineHeight:1.05 }}>
              Servizi che<br />fanno la differenza
            </h2>
          </div>
          <p style={{ color:'var(--muted)', fontSize:15, fontWeight:400, maxWidth:280, lineHeight:1.7 }}>
            Ogni progetto inizia da una domanda: come possiamo superare le aspettative?
          </p>
        </div>

        <div className="reveal" style={{ display:'flex', flexDirection:'column', gap:2 }}>
          {[row1, row2].map((row, ri) => (
            <div key={ri} className="sv-row" style={{ display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:2, transform: ri === 1 ? 'translateX(48px)' : 'none' }}>
              {row.map((s, ci) => (
                <div key={s.num} className={`sv-card ${s.cls}`} style={cardStyle(ri === 0, ri === 1, ci)}>
                  <div style={{ fontSize:10, fontWeight:800, color:'var(--muted)', letterSpacing:'.15em', marginBottom:20, opacity:.4, position:'relative', zIndex:1 }}>{s.num}</div>
                  <div style={{ width:42, height:42, borderRadius:12, display:'flex', alignItems:'center', justifyContent:'center', marginBottom:20, fontSize:20, background:'rgba(200,255,0,.08)', border:'1px solid rgba(200,255,0,.15)', position:'relative', zIndex:1 }}>{s.icon}</div>
                  <div style={{ fontFamily:'Figtree, sans-serif', fontWeight:800, fontSize:17, letterSpacing:'-.02em', marginBottom:10, position:'relative', zIndex:1 }}>{s.name}</div>
                  <div style={{ fontSize:13.5, color:'var(--muted)', lineHeight:1.65, fontWeight:400, position:'relative', zIndex:1 }}>{s.desc}</div>
                  <span style={{ display:'inline-block', marginTop:16, fontSize:10, fontWeight:700, letterSpacing:'.08em', textTransform:'uppercase', color:'var(--lime)', background:'rgba(200,255,0,.08)', border:'1px solid rgba(200,255,0,.15)', padding:'4px 12px', borderRadius:100, position:'relative', zIndex:1 }}>{s.tag}</span>
                </div>
              ))}
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
