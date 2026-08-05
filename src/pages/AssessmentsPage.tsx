import { ContentSection, FeatureGrid, PageBody } from '../components/ContentSection'
import FaqAccordion from '../components/FaqAccordion'
import FinalCta from '../components/FinalCta'
import PageHero from '../components/PageHero'
import { assessmentSections, assessmentsContent, coverage, questionTypes } from '../content/assessments'
import { usePageMeta } from '../hooks/usePageMeta'

function AssessmentsPage() {
  usePageMeta(assessmentsContent.meta)

  return (
    <>
      <PageHero {...assessmentsContent.hero} />

      <PageBody>
        <ContentSection {...coverage} />

        <ContentSection
          title="Multiple question formats"
          text="Use different types of evidence depending on what the role requires."
        >
          <FeatureGrid items={questionTypes} columns={2} />
        </ContentSection>

        {assessmentSections.map((section) => (
          <ContentSection key={section.title} {...section} />
        ))}

        {assessmentsContent.faq && <FaqAccordion title="Assessments FAQ" items={assessmentsContent.faq} />}
      </PageBody>

      <FinalCta {...assessmentsContent.finalCta} />
    </>
  )
}

export default AssessmentsPage
