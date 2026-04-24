import Hero from '@/components/sections/Hero'
import SocialProof from '@/components/sections/SocialProof'
import MenuHighlights from '@/components/sections/MenuHighlights'
import Story from '@/components/sections/Story'
import Specials from '@/components/sections/Specials'
import Testimonials from '@/components/sections/Testimonials'
import ReservationCTA from '@/components/sections/ReservationCTA'
import HomeScrollSnap from '@/components/HomeScrollSnap'

export default function Home() {
  return (
    <>
      <HomeScrollSnap />
      <div className="pt-4 md:pt-6">
        <Hero />
      </div>
      <SocialProof />
      <MenuHighlights />
      <Story />
      <Specials />
      <Testimonials />
      <ReservationCTA />
    </>
  )
}
