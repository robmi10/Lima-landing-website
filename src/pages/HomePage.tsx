import overalPreview from '../assets/overal.png'
import FinalCta from '../components/FinalCta'
import PageHero from '../components/PageHero'
import { homeContent } from '../content/home'
import { usePageMeta } from '../hooks/usePageMeta'

function HomePage() {
  usePageMeta(homeContent.meta)

  return (
    <>
      <PageHero {...homeContent.hero} />

      <section className="px-6 pb-10 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <img
            src={overalPreview}
            alt="LiMA candidate report with assessment results and proctoring events"
            width={1316}
            height={900}
            className="h-auto w-full"
          />
        </div>
      </section>

      <FinalCta {...homeContent.finalCta} variant="dark" />
    </>
  )
}

export default HomePage
