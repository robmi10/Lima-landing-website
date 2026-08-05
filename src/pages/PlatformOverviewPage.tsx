import overalPreview from '../assets/overal.png'
import { ContentSection, FeatureGrid, PageBody } from '../components/ContentSection'
import FaqAccordion from '../components/FaqAccordion'
import FinalCta from '../components/FinalCta'
import PageHero from '../components/PageHero'
import { humanDecision, platformContent, platformSections, reportLayers } from '../content/platform'
import { usePageMeta } from '../hooks/usePageMeta'

function PlatformOverviewPage() {
  usePageMeta(platformContent.meta)

  return (
    <>
      <PageHero {...platformContent.hero} />

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

      <PageBody>
        {platformSections.map((section) => (
          <ContentSection key={section.title} {...section} />
        ))}

        <ContentSection
          title="Reporting you can act on"
          text="Each candidate profile brings the relevant evidence together in one place."
        >
          <FeatureGrid items={reportLayers} />
        </ContentSection>

        <ContentSection {...humanDecision} />

        {platformContent.faq && <FaqAccordion title="Platform FAQ" items={platformContent.faq} />}
      </PageBody>

      <FinalCta {...platformContent.finalCta} />
    </>
  )
}

export default PlatformOverviewPage
