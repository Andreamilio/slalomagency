export default function Hero() {
  return (
    <section
      className="hero-section"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        position: 'relative',
        padding: '120px 24px 80px',
        overflow: 'hidden',
        zIndex: 2,
      }}
    >
      {/* Blobs */}
      <div className="blob-a" style={{ position:'absolute', width:520, height:520, borderRadius:'50%', filter:'blur(90px)', background:'radial-gradient(circle, rgba(123,47,255,.32) 0%, transparent 70%)', top:-120, left:-80, pointerEvents:'none', zIndex:0 }} />
      <div className="blob-b" style={{ position:'absolute', width:380, height:380, borderRadius:'50%', filter:'blur(90px)', background:'radial-gradient(circle, rgba(0,229,255,.2) 0%, transparent 70%)', top:'40%', right:-60, pointerEvents:'none', zIndex:0 }} />
      <div className="blob-c" style={{ position:'absolute', width:300, height:300, borderRadius:'50%', filter:'blur(90px)', background:'radial-gradient(circle, rgba(200,255,0,.14) 0%, transparent 70%)', bottom:60, left:'35%', pointerEvents:'none', zIndex:0 }} />

      {/* Zigzag SVG */}
      <div style={{ position:'absolute', inset:0, pointerEvents:'none', overflow:'hidden', zIndex:0 }} aria-hidden="true">
        <svg width="900" height="300" viewBox="0 0 900 300"
          style={{ position:'absolute', top:'50%', left:'50%', transform:'translate(-50%,-50%)', opacity:.05 }}
          fill="none">
          <polyline points="0,150 100,60 200,150 300,60 400,150 500,60 600,150 700,60 800,150 900,60" stroke="url(#g1)" strokeWidth="1.5"/>
          <polyline points="0,200 120,100 240,200 360,100 480,200 600,100 720,200 840,100 900,140" stroke="url(#g2)" strokeWidth="1"/>
          <defs>
            <linearGradient id="g1" x1="0" y1="0" x2="900" y2="0" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#7b2fff"/>
              <stop offset="50%" stopColor="#00e5ff"/>
              <stop offset="100%" stopColor="#c8ff00"/>
            </linearGradient>
            <linearGradient id="g2" x1="0" y1="0" x2="900" y2="0" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#c8ff00"/>
              <stop offset="100%" stopColor="#ff4d6d"/>
            </linearGradient>
          </defs>
        </svg>
        <svg width="100%" height="100%" viewBox="0 0 1400 800"
          style={{ position:'absolute', top:0, left:0, opacity:.55 }}
          fill="none" preserveAspectRatio="xMidYMid slice">
          <path id="z1" d="M-100,400 L150,200 L400,400 L650,200 L900,400 L1150,200 L1400,400"/>
          <path id="z2" d="M-100,560 L200,340 L500,560 L800,340 L1100,560 L1400,340"/>
          <circle r="3.5" fill="#c8ff00">
            <animateMotion dur="7s" repeatCount="indefinite"><mpath href="#z1"/></animateMotion>
          </circle>
          <circle r="2.5" fill="#00e5ff" opacity=".8">
            <animateMotion dur="7s" begin="2.3s" repeatCount="indefinite"><mpath href="#z1"/></animateMotion>
          </circle>
          <circle r="2" fill="#7b2fff" opacity=".9">
            <animateMotion dur="7s" begin="4.6s" repeatCount="indefinite"><mpath href="#z1"/></animateMotion>
          </circle>
          <circle r="2.5" fill="#ff4d6d" opacity=".7">
            <animateMotion dur="9s" begin="1s" repeatCount="indefinite"><mpath href="#z2"/></animateMotion>
          </circle>
          <circle r="2" fill="#c8ff00" opacity=".5">
            <animateMotion dur="9s" begin="4s" repeatCount="indefinite"><mpath href="#z2"/></animateMotion>
          </circle>
        </svg>
      </div>

      {/* Content */}
      <div className="animate-up-1 hero-eyebrow" style={{ position:'relative', zIndex:2, display:'inline-flex', alignItems:'center', gap:8, background:'rgba(200,255,0,.07)', border:'1px solid rgba(200,255,0,.2)', borderRadius:100, padding:'6px 16px', fontSize:11.5, fontWeight:600, color:'var(--lime)', letterSpacing:'.09em', textTransform:'uppercase', marginBottom:28 }}>
        <span className="eyebrow-dot" style={{ width:6, height:6, background:'var(--lime)', borderRadius:'50%', display:'inline-block' }} />
        Talent &amp; Creative Agency
      </div>

      <h1 className="animate-up-2 hero-h1" style={{ position:'relative', zIndex:2, fontFamily:'Figtree, sans-serif', fontWeight:900, fontSize:'clamp(60px, 9.5vw, 120px)', lineHeight:.93, letterSpacing:'-.04em', marginBottom:18 }}>
        <span style={{ display:'block' }}>Muoviti</span>
        <span className="gradient-text" style={{ display:'block' }}>veloce.</span>
        <span className="outline-text" style={{ display:'block' }}>Resta rilevante.</span>
      </h1>

      <p className="animate-up-3 hero-tagline" style={{ position:'relative', zIndex:2, fontSize:12, fontWeight:500, letterSpacing:'.4em', textTransform:'uppercase', color:'var(--muted)', marginBottom:44 }}>
        find your way
      </p>

      <div className="animate-up-4 hero-ctas" style={{ position:'relative', zIndex:2, display:'flex', gap:14, alignItems:'center' }}>
        <a href="#servizi" className="btn-p" style={{ background:'var(--lime)', color:'#080810', fontFamily:'Figtree, sans-serif', fontWeight:700, fontSize:14, padding:'14px 32px', borderRadius:100, textDecoration:'none', display:'inline-flex', alignItems:'center', gap:8, transition:'transform .2s, box-shadow .3s' }}>
          Scopri i servizi <span className="btn-arr">→</span>
        </a>
        <a href="#roster" style={{ color:'var(--muted)', fontSize:14, textDecoration:'none', display:'inline-flex', alignItems:'center', gap:6, padding:'14px 8px', transition:'color .2s' }}>
          Vedi il roster ↓
        </a>
      </div>

      <div className="animate-up-5 hero-stats" style={{ position:'relative', zIndex:2, display:'flex', gap:64, marginTop:72 }}>
        {[['120+','Talenti'],['8M+','Reach totale'],['300+','Campagne']].map(([n,l]) => (
          <div key={l}>
            <div className="hero-stat-n" style={{ fontFamily:'Figtree, sans-serif', fontWeight:900, fontSize:38, letterSpacing:'-.03em' }}>{n}</div>
            <div style={{ fontSize:11, color:'var(--muted)', letterSpacing:'.07em', textTransform:'uppercase', marginTop:4 }}>{l}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
