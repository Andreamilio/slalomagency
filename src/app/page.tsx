import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Partners from '@/components/Partners'
import Services from '@/components/Services'
import Roster from '@/components/Roster'
import Footer from '@/components/Footer'
import Cursor from '@/components/Cursor'
import ScrollReveal from '@/components/ScrollReveal'

export default function Home() {
  return (
    <>
      <div className="noise" />
      <Cursor />
      <ScrollReveal />
      <Navbar />
      <Hero />
      <Partners />
      <Services />
      <Roster />
      <Footer />
    </>
  )
}
