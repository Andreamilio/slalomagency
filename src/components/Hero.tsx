'use client'
import { useEffect } from 'react'

export default function Hero() {
  useEffect(() => {
    const stats = document.querySelectorAll<HTMLElement>('.stat-n')
    if (!stats.length) return

    const easeOutExpo = (t: number) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t))

    function animateStat(el: HTMLElement) {
      if (el.dataset.done === 'true') return
      el.dataset.done = 'true'
      el.classList.add('is-counting')

      const target = Number(el.dataset.value || 0)
      const suffix = el.dataset.suffix || ''
      const valueNode = el.querySelector('.stat-value') || el
      const duration = 1800
      const start = performance.now()

      function tick(now: number) {
        const progress = Math.min(1, (now - start) / duration)
        const eased = easeOutExpo(progress)
        const current = Math.round(target * eased)
        valueNode.textContent = `${current}${suffix}`

        if (progress < 1) {
          requestAnimationFrame(tick)
        } else {
          valueNode.textContent = `${target}${suffix}`
          setTimeout(() => el.classList.remove('is-counting'), 900)
        }
      }

      requestAnimationFrame(tick)
    }

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return
        animateStat(entry.target as HTMLElement)
        observer.unobserve(entry.target)
      })
    }, { threshold: .65 })

    stats.forEach(stat => observer.observe(stat))
    return () => observer.disconnect()
  }, [])

  return (
    <section
      className="hero-section"
      id="heroSection"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        position: 'relative',
        padding: '120px 24px 0',
        overflow: 'visible',
        zIndex: 2,
        background: 'var(--hero-bg)',
        color: 'var(--dark-text)',
      }}
    >
      <div className="hero-aura" />

      <div className="blob-a" style={{ position:'absolute', width:700, height:700, borderRadius:'50%', filter:'blur(120px)', background:'radial-gradient(circle, rgba(225,48,108,.12) 0%, transparent 70%)', top:-200, left:-150, pointerEvents:'none', zIndex:0 }} />
      <div className="blob-b" style={{ position:'absolute', width:500, height:500, borderRadius:'50%', filter:'blur(120px)', background:'radial-gradient(circle, rgba(37,244,238,.1) 0%, transparent 70%)', top:'30%', right:-100, pointerEvents:'none', zIndex:0 }} />
      <div className="blob-c" style={{ position:'absolute', width:400, height:400, borderRadius:'50%', filter:'blur(120px)', background:'radial-gradient(circle, rgba(131,58,180,.08) 0%, transparent 70%)', bottom:60, left:'30%', pointerEvents:'none', zIndex:0 }} />

      <div className="animate-up-1" style={{ position:'relative', zIndex:2, display:'inline-flex', alignItems:'center', gap:8, background:'rgba(225,48,108,.07)', border:'1px solid rgba(225,48,108,.18)', borderRadius:100, padding:'6px 16px', fontSize:11.5, fontWeight:600, color:'var(--ig-pink)', letterSpacing:'.09em', textTransform:'uppercase', marginBottom:28 }}>
        <span className="eyebrow-dot" style={{ width:6, height:6, background:'var(--ig-pink)', borderRadius:'50%', display:'inline-block' }} />
        Talent &amp; Creative Agency
      </div>

      <h1 className="animate-up-2" style={{ position:'relative', zIndex:2, fontFamily:'Figtree, sans-serif', fontWeight:900, fontSize:'clamp(56px, 9vw, 110px)', lineHeight:.93, letterSpacing:'-.04em', marginBottom:18, color:'var(--dark-text)' }}>
        <span className="hero-title-l1">Find your</span>
        <span className="hero-title-l2">WAY</span>
      </h1>

      <div className="animate-up-4 hero-ctas" style={{ position:'relative', zIndex:2, display:'flex', gap:14, alignItems:'center' }}>
        <a href="#servizi" className="btn-p" style={{ background:'linear-gradient(135deg, var(--ig-purple), var(--ig-pink), var(--ig-orange))', color:'#fff', fontFamily:'Figtree, sans-serif', fontWeight:700, fontSize:14, padding:'14px 32px', borderRadius:100, textDecoration:'none', display:'inline-flex', alignItems:'center', gap:8, transition:'transform .2s, box-shadow .3s', backgroundSize:'200%' }}>
          Scopri i servizi <span className="btn-arr">&rarr;</span>
        </a>
        <a href="#roster" style={{ color:'rgba(26,26,46,.5)', fontSize:14, textDecoration:'none', display:'inline-flex', alignItems:'center', gap:6, padding:'14px 8px', transition:'color .2s' }}>
          Vedi il roster &darr;
        </a>
      </div>

      <div className="animate-up-5 hero-stats" style={{ position:'relative', zIndex:2, display:'flex', gap:64, marginTop:52 }}>
        <div>
          <div className="stat-n" data-value="120" data-suffix="+"><span className="stat-value">0</span></div>
          <div style={{ fontSize:11, color:'rgba(26,26,46,.4)', letterSpacing:'.07em', textTransform:'uppercase', marginTop:4 }}>Talenti</div>
        </div>
        <div>
          <div className="stat-n" data-value="8" data-suffix="M+"><span className="stat-value">0</span></div>
          <div style={{ fontSize:11, color:'rgba(26,26,46,.4)', letterSpacing:'.07em', textTransform:'uppercase', marginTop:4 }}>Reach totale</div>
        </div>
        <div>
          <div className="stat-n" data-value="300" data-suffix="+"><span className="stat-value">0</span></div>
          <div style={{ fontSize:11, color:'rgba(26,26,46,.4)', letterSpacing:'.07em', textTransform:'uppercase', marginTop:4 }}>Campagne</div>
        </div>
      </div>

      <div className="wave-ribbon-wrap animate-up-6" aria-hidden="true">
        <svg className="wave-ribbon-svg" viewBox="0 0 1400 340" preserveAspectRatio="xMidYMid slice">
          <defs>
            <linearGradient id="ribbonGrad" x1="0" y1="0" x2="1400" y2="0" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#833AB4" />
              <stop offset="25%" stopColor="#E1306C" />
              <stop offset="50%" stopColor="#F77737" />
              <stop offset="75%" stopColor="#FCAF45" />
              <stop offset="100%" stopColor="#25F4EE" />
            </linearGradient>
            <path id="ribbonWavePath" d="M -300,170 C -100,40 100,300 300,170 C 500,40 700,300 900,170 C 1100,40 1300,300 1500,170 C 1700,40 1900,300 2100,170" />
          </defs>
          <use href="#ribbonWavePath" id="waveRibbonBand" />
          <text className="ribbon-text">
            <textPath href="#ribbonWavePath" startOffset="0%" dy="-14">
              <animate attributeName="startOffset" from="0%" to="-50%" dur="14s" repeatCount="indefinite" />
              SLALOM AGENCY &#x2022; TALENT &amp; CREATIVE &#x2022; FIND YOUR WAY &#x2022; INSTAGRAM &#x2022; TIKTOK &#x2022; SOCIAL MEDIA &#x2022; SLALOM AGENCY &#x2022; TALENT &amp; CREATIVE &#x2022; FIND YOUR WAY &#x2022; INSTAGRAM &#x2022; TIKTOK &#x2022; SOCIAL MEDIA &#x2022;
            </textPath>
          </text>
        </svg>
      </div>
    </section>
  )
}
