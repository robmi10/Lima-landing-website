import { ContentSection, FeatureGrid, PageBody } from '../components/ContentSection'
import FaqAccordion from '../components/FaqAccordion'
import FinalCta from '../components/FinalCta'
import PageHero from '../components/PageHero'
import {
  beforeTheTest,
  loggedSignals,
  proctoringContent,
  proctoringSections,
  signalTypes,
} from '../content/proctoring'
import { usePageMeta } from '../hooks/usePageMeta'

function ProctoringPage() {
  usePageMeta(proctoringContent.meta)

  return (
    <>
      <PageHero {...proctoringContent.hero} />

      <PageBody>
        <ContentSection {...beforeTheTest} />

        <ContentSection {...loggedSignals}>
          <FeatureGrid items={signalTypes} />
        </ContentSection>

        {proctoringSections.map((section) => (
          <ContentSection key={section.title} {...section} />
        ))}

        {proctoringContent.faq && <FaqAccordion title="Proctoring FAQ" items={proctoringContent.faq} />}
      </PageBody>

      <FinalCta {...proctoringContent.finalCta} />
    </>
  )
}

export default ProctoringPage
