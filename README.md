# Slalom Agency

Talent & Creative Agency — Next.js 14 App Router

## Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **ESLint**
- **Google Fonts** (Figtree)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
src/
├── app/
│   ├── layout.tsx       # Root layout + metadata
│   └── page.tsx         # Home page (composes all sections)
├── components/
│   ├── Cursor.tsx        # Custom cursor (client component)
│   ├── ScrollReveal.tsx  # IntersectionObserver reveal
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── Partners.tsx      # Scrolling marquee
│   ├── Services.tsx
│   ├── Roster.tsx
│   └── Footer.tsx
└── styles/
    └── globals.css       # Global styles + CSS variables + animations
```
