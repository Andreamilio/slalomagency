'use client'
import { useEffect, useRef } from 'react'

export default function ScrollLine() {
  const sectionRef = useRef<HTMLElement>(null)
  const pathRef = useRef<SVGPathElement>(null)
  const dotRef = useRef<SVGCircleElement>(null)

  useEffect(() => {
    const path = pathRef.current
    const dot = dotRef.current
    const section = sectionRef.current
    if (!path || !dot || !section) return

    const pathLength = path.getTotalLength()
    path.style.strokeDasharray = String(pathLength)
    path.style.strokeDashoffset = String(pathLength)

    function onScroll() {
      const rect = section!.getBoundingClientRect()
      const winH = window.innerHeight
      const totalTravel = rect.height + winH
      const traveled = winH - rect.top
      const progress = Math.max(0, Math.min(1, traveled / totalTravel))

      const offset = pathLength * (1 - progress)
      path!.style.strokeDashoffset = String(offset)

      if (progress > 0.01 && progress < 0.99) {
        dot!.style.opacity = '1'
        const pt = path!.getPointAtLength(progress * pathLength)
        dot!.setAttribute('cx', String(pt.x))
        dot!.setAttribute('cy', String(pt.y))
      } else {
        dot!.style.opacity = '0'
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section className="scroll-line-section" id="scrollLine" ref={sectionRef}>
      <div className="scroll-line-wrap">
        <svg viewBox="0 0 1400 800" preserveAspectRatio="xMidYMid slice">
          <defs>
            <linearGradient id="scrollGrad" x1="0" y1="0" x2="1400" y2="800" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#833AB4" />
              <stop offset="35%" stopColor="#E1306C" />
              <stop offset="65%" stopColor="#F77737" />
              <stop offset="100%" stopColor="#25F4EE" />
            </linearGradient>
          </defs>
          <path
            id="scrollPathBg"
            d="M -50,400 C 150,100 350,100 500,400 C 650,700 850,700 1000,400 C 1150,100 1350,100 1450,400"
          />
          <path
            ref={pathRef}
            id="scrollPath"
            d="M -50,400 C 150,100 350,100 500,400 C 650,700 850,700 1000,400 C 1150,100 1350,100 1450,400"
          />
          <circle ref={dotRef} id="pathDot" r="6" cx="0" cy="0" />
        </svg>
      </div>
      <div className="reveal" style={{ position:'relative', zIndex:2, textAlign:'center', padding:'0 24px' }}>
        <div style={{ display:'inline-flex', alignItems:'center', gap:10, fontSize:11, fontWeight:600, letterSpacing:'.15em', textTransform:'uppercase', color:'var(--muted)', marginBottom:16 }}>
          <span style={{ width:22, height:1, background:'var(--ig-pink)', display:'inline-block' }} />
          Smooth flow
        </div>
        <h2 style={{ fontFamily:'Figtree, sans-serif', fontWeight:900, fontSize:'clamp(34px,4.5vw,58px)', letterSpacing:'-.03em', lineHeight:1.05, maxWidth:600, margin:'0 auto' }}>
          Ogni progetto segue<br />un percorso fluido
        </h2>
        <p style={{ color:'#fff', marginTop:20, fontSize:15, maxWidth:420, marginLeft:'auto', marginRight:'auto', lineHeight:1.7, padding:'14px 20px', borderRadius:12, background:'rgba(8,8,16,.45)', backdropFilter:'blur(10px)', WebkitBackdropFilter:'blur(10px)', boxShadow:'inset 0 2px 12px rgba(0,0,0,.2)' }}>
          Dal concept alla delivery, ci muoviamo con precisione e creatività lungo curve che nessun altro osa tracciare.
        </p>
      </div>
    </section>
  )
}
