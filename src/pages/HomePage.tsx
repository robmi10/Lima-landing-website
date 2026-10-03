import AboutSection from '../sections/AboutSection'
import AntiCheatSection from '../sections/AntiCheatSection'
import FaqSection from '../sections/FaqSection'
import HeroSection from '../sections/HeroSection'
import PlatformSection from '../sections/PlatformSection'
import ProcessSection from '../sections/ProcessSection'
import ResourcesSection from '../sections/ResourcesSection'
import { meta } from '../content/site'
import { usePageMeta } from '../hooks/usePageMeta'

function HomePage() {
  usePageMeta(meta)

  return (
    <>
      <HeroSection />
      <PlatformSection />
      <ProcessSection />
      <AntiCheatSection />
      <AboutSection />
      <ResourcesSection />
      <FaqSection />
    </>
  )
}

export default HomePage
