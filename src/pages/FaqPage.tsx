import { PageBody } from '../components/ContentSection'
import FaqAccordion from '../components/FaqAccordion'
import FinalCta from '../components/FinalCta'
import PageHero from '../components/PageHero'
import { faqContent, faqGroups } from '../content/faq'
import { usePageMeta } from '../hooks/usePageMeta'

function FaqPage() {
  usePageMeta(faqContent.meta)

  return (
    <>
      <PageHero {...faqContent.hero} />

      <PageBody>
        {faqGroups.map((group) => (
          <FaqAccordion key={group.title} title={group.title} items={group.items} />
        ))}
      </PageBody>

      <FinalCta {...faqContent.finalCta} />
    </>
  )
}

export default FaqPage
