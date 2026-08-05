import { PullQuote, StatGrid } from '../components/CaseBlocks'
import { ContentSection, FeatureGrid, PageBody } from '../components/ContentSection'
import FaqAccordion from '../components/FaqAccordion'
import FinalCta from '../components/FinalCta'
import PageHero from '../components/PageHero'
import {
  caseContent,
  caseOutcomes,
  caseQuotes,
  caseResults,
  caseSections,
  caseStats,
  caseSummary,
  identityFinding,
  quoteAttribution,
} from '../content/case-fintech'
import { usePageMeta } from '../hooks/usePageMeta'

function CaseFintechPage() {
  usePageMeta(caseContent.meta)

  return (
    <>
      <PageHero {...caseContent.hero} />

      <PageBody>
        <p className="text-center text-sm text-slate-500">{caseSummary}</p>

        {caseSections.map((section) => (
          <ContentSection key={section.title} {...section} />
        ))}

        <ContentSection {...caseResults}>
          <StatGrid items={caseStats} />
          <FeatureGrid items={caseOutcomes} />
        </ContentSection>

        <ContentSection {...identityFinding} />

        {caseQuotes.map((quote) => (
          <PullQuote key={quote} quote={quote} attribution={quoteAttribution} />
        ))}

        {caseContent.faq && <FaqAccordion title="Case FAQ" items={caseContent.faq} />}
      </PageBody>

      <FinalCta {...caseContent.finalCta} variant="dark" />
    </>
  )
}

export default CaseFintechPage
