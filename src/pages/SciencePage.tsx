import { ContentSection, FeatureGrid, PageBody } from '../components/ContentSection'
import FaqAccordion from '../components/FaqAccordion'
import FinalCta from '../components/FinalCta'
import PageHero from '../components/PageHero'
import {
  developmentSteps,
  questionDevelopment,
  questionFormats,
  references,
  resultSections,
  scienceContent,
  whyCombineFormats,
  whyJobRelated,
} from '../content/science'
import { usePageMeta } from '../hooks/usePageMeta'

function SciencePage() {
  usePageMeta(scienceContent.meta)

  return (
    <>
      <PageHero {...scienceContent.hero} />

      <PageBody>
        <ContentSection {...whyJobRelated} />

        <ContentSection {...whyCombineFormats}>
          <FeatureGrid items={questionFormats} columns={2} />
        </ContentSection>

        <ContentSection {...questionDevelopment}>
          <FeatureGrid items={developmentSteps} />
        </ContentSection>

        {resultSections.map((section) => (
          <ContentSection key={section.title} {...section} />
        ))}

        <section className="rounded-3xl border border-white/70 bg-white/75 p-6 shadow-[0_30px_80px_-50px_rgba(15,23,42,0.35)] backdrop-blur md:p-8">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-950">Selected references</h2>
          <ul className="mt-6 space-y-3">
            {references.map((reference) => (
              <li key={reference} className="flex items-start gap-3 text-sm leading-6 text-slate-600">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-slate-950" />
                <span>{reference}</span>
              </li>
            ))}
          </ul>
        </section>

        {scienceContent.faq && <FaqAccordion title="Science FAQ" items={scienceContent.faq} />}
      </PageBody>

      <FinalCta {...scienceContent.finalCta} />
    </>
  )
}

export default SciencePage
