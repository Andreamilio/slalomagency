'use client'
import { useState } from 'react'
import Link from 'next/link'

const navItems = ['Case Studies', 'Roster', 'Chi Siamo', 'Press']

const HamburgerIcon = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <line x1="3" y1="6"  x2="19" y2="6"  />
    <line x1="3" y1="11" x2="19" y2="11" />
    <line x1="3" y1="16" x2="19" y2="16" />
  </svg>
)

const CloseIcon = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <line x1="4" y1="4" x2="18" y2="18" />
    <line x1="18" y1="4" x2="4"  y2="18" />
  </svg>
)

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <nav
        className="nav-animate nav-bar"
        style={{
          position: 'fixed',
          top: 22,
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 200,
          display: 'flex',
          alignItems: 'center',
          gap: 4,
          background: 'rgba(13,13,28,.8)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          border: '1px solid var(--border)',
          borderRadius: 100,
          padding: '8px 10px 8px 22px',
          whiteSpace: 'nowrap',
        }}
      >
        <Link
          href="/"
          style={{
            textDecoration: 'none',
            marginRight: 16,
            fontFamily: 'Figtree, sans-serif',
            fontWeight: 900,
            fontSize: 13.5,
            letterSpacing: '0.12em',
            color: 'var(--white)',
            flexShrink: 0,
          }}
        >
          SLALOM AGENCY<span style={{ color: 'var(--lime)' }}>.</span>
        </Link>

        {/* Desktop links */}
        <ul className="nav-links" style={{ display: 'flex', alignItems: 'center', gap: 2, listStyle: 'none' }}>
          {navItems.map((item) => (
            <li key={item}>
              <Link
                href="#"
                style={{
                  color: 'var(--muted)',
                  textDecoration: 'none',
                  fontSize: 13,
                  fontWeight: 400,
                  padding: '7px 13px',
                  borderRadius: 100,
                  display: 'block',
                }}
                className="nav-link"
              >
                {item}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="#"
              style={{
                background: 'var(--lime)',
                color: '#080810',
                fontWeight: 700,
                fontSize: 13,
                padding: '9px 20px',
                borderRadius: 100,
                textDecoration: 'none',
                display: 'block',
              }}
            >
              Contattaci
            </Link>
          </li>
        </ul>

        {/* Hamburger / Close button (mobile only) */}
        <button
          className="nav-hamburger"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Chiudi menu' : 'Apri menu'}
          aria-expanded={open}
        >
          {open ? <CloseIcon /> : <HamburgerIcon />}
        </button>
      </nav>

      {/* Mobile overlay menu */}
      <div className={`nav-mobile-menu${open ? ' open' : ''}`} role="dialog" aria-modal="true">
        {navItems.map((item) => (
          <Link
            key={item}
            href="#"
            className="nav-mobile-item"
            onClick={() => setOpen(false)}
          >
            {item}
          </Link>
        ))}

        <Link
          href="#"
          className="nav-mobile-cta"
          onClick={() => setOpen(false)}
        >
          Contattaci
        </Link>
      </div>
    </>
  )
}
