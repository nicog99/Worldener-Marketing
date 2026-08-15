import { useEffect } from 'react'
import { HeroSection } from '@/components/home/HeroSection'
import { AboutSection } from '@/components/home/AboutSection'
import { HowItWorksSection } from '@/components/home/HowItWorksSection'
import { TeamSection } from '@/components/home/TeamSection'
import { FeaturesSection } from '@/components/home/FeaturesSection'
import { BlogPreviewSection } from '@/components/home/BlogPreviewSection'
import { FinalCtaSection } from '@/components/home/FinalCtaSection'
import { SectionScrollTracker } from '@/components/layout/SectionScrollTracker'
import { SHOW_TEAM } from '@/lib/constants'

export function HomePage() {
  useEffect(() => {
    document.title = 'Worldener — Discover. Plan. Book. Remember. Together.'
  }, [])

  return (
    <>
      <SectionScrollTracker />
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <HowItWorksSection />
      {SHOW_TEAM ? <TeamSection /> : null}
      <BlogPreviewSection />
      <FinalCtaSection />
    </>
  )
}
