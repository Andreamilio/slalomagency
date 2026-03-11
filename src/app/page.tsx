import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Partners from '@/components/Partners'
import Services from '@/components/Services'
import Roster from '@/components/Roster'
import Footer from '@/components/Footer'
import ScrollReveal from '@/components/ScrollReveal'
import ScrollLine from '@/components/ScrollLine'

export default function Home() {
  return (
    <>
      <div className="noise" />
      <ScrollReveal />
      <Navbar />
      <Hero />
      <div className="dark-card-wrapper">
        <div className="dark-card">
          <div className="dark-card-glow" />
          <Partners />
          <ScrollLine />
          <Services />
          <Roster />
          <Footer />
        </div>
      </div>
    </>
  )
}
