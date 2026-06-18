import { useEffect } from 'react'
import { HeroSection } from '@/components/home/HeroSection'
import { AboutSection } from '@/components/home/AboutSection'
import { HowItWorksSection } from '@/components/home/HowItWorksSection'
import { SneakPeekSection } from '@/components/home/SneakPeekSection'
import { TeamSection } from '@/components/home/TeamSection'
import { FeaturesSection } from '@/components/home/FeaturesSection'
import { FinalCtaSection } from '@/components/home/FinalCtaSection'
import { SectionScrollTracker } from '@/components/layout/SectionScrollTracker'

export function HomePage() {
  useEffect(() => {
    document.title = 'Worldener — Plan trips that fit you'
  }, [])

  return (
    <>
      <SectionScrollTracker />
      <HeroSection />
      <AboutSection />
      <HowItWorksSection />
      <SneakPeekSection />
      <TeamSection />
      <FeaturesSection />
      <FinalCtaSection />
    </>
  )
}
