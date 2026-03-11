'use client'
import { useEffect } from 'react'

export default function Cursor() {
  useEffect(() => {
    const cur  = document.getElementById('cur')
    const ring = document.getElementById('ring')
    if (!cur || !ring) return

    let mx = -200, my = -200, rx = -200, ry = -200
    let rafId: number

    const onMove = (e: MouseEvent) => {
      mx = e.clientX
      my = e.clientY
      cur.style.left = mx + 'px'
      cur.style.top  = my + 'px'
    }
    document.addEventListener('mousemove', onMove)

    const tick = () => {
      rx += (mx - rx) * 0.12
      ry += (my - ry) * 0.12
      ring.style.left = rx + 'px'
      ring.style.top  = ry + 'px'
      rafId = requestAnimationFrame(tick)
    }
    rafId = requestAnimationFrame(tick)

    const targets = document.querySelectorAll('a, button, .sv-card, .r-card')
    const onEnter = () => {
      cur.style.width   = '18px'
      cur.style.height  = '18px'
      ring.style.width  = '52px'
      ring.style.height = '52px'
    }
    const onLeave = () => {
      cur.style.width   = '10px'
      cur.style.height  = '10px'
      ring.style.width  = '36px'
      ring.style.height = '36px'
    }
    targets.forEach(el => {
      el.addEventListener('mouseenter', onEnter)
      el.addEventListener('mouseleave', onLeave)
    })

    return () => {
      document.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(rafId)
      targets.forEach(el => {
        el.removeEventListener('mouseenter', onEnter)
        el.removeEventListener('mouseleave', onLeave)
      })
    }
  }, [])

  return (
    <>
      <div id="cur" />
      <div id="ring" />
    </>
  )
}
