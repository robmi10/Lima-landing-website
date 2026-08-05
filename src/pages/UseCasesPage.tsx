import { ContentSection, PageBody } from '../components/ContentSection'
import FaqAccordion from '../components/FaqAccordion'
import FinalCta from '../components/FinalCta'
import PageHero from '../components/PageHero'
import { useCaseSections, useCasesContent } from '../content/use-cases'
import { usePageMeta } from '../hooks/usePageMeta'

function UseCasesPage() {
  usePageMeta(useCasesContent.meta)

  return (
    <>
      <PageHero {...useCasesContent.hero} />

      <PageBody>
        {useCaseSections.map((section) => (
          <ContentSection key={section.title} {...section} />
        ))}

        {useCasesContent.faq && <FaqAccordion title="Use cases FAQ" items={useCasesContent.faq} />}
      </PageBody>

      <FinalCta {...useCasesContent.finalCta} />
    </>
  )
}

export default UseCasesPage
