import Image from 'next/image'

const partners = [
  { name: 'RDS Next', img: '/partners/rdsnext.avif' },
  { name: '3SY',      img: '/partners/3sy.avif'     },
  { name: 'Sergio',   img: '/partners/sergio.avif'  },
]

export default function Partners() {
  const doubled = [...partners, ...partners, ...partners]
  return (
    <div style={{ position:'relative', zIndex:2 }}>
      <p className="partners-label" style={{ textAlign:'center', padding:'52px 24px 22px', fontSize:11, fontWeight:600, letterSpacing:'.16em', textTransform:'uppercase', color:'var(--muted)' }}>
        Collaboriamo con
      </p>
      <div style={{ padding:'22px 0', overflow:'hidden', position:'relative' }}>
        <div style={{ position:'absolute', top:0, bottom:0, left:0, width:120, zIndex:2, background:'linear-gradient(to right, var(--bg), transparent)', pointerEvents:'none' }} />
        <div style={{ position:'absolute', top:0, bottom:0, right:0, width:120, zIndex:2, background:'linear-gradient(to left, var(--bg), transparent)', pointerEvents:'none' }} />
        <div className="marquee-track" style={{ display:'flex', alignItems:'center', whiteSpace:'nowrap' }}>
          {doubled.map((p, i) => (
            <span key={i} style={{ display:'inline-flex', alignItems:'center', padding:'0 48px', flexShrink:0 }}>
              <Image
                src={p.img}
                alt={p.name}
                height={36}
                width={120}
                style={{ objectFit:'contain', maxWidth:120, opacity:.75 }}
              />
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
