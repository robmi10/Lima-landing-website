import { ContentSection, FeatureGrid, PageBody } from '../components/ContentSection'
import FaqAccordion from '../components/FaqAccordion'
import FinalCta from '../components/FinalCta'
import PageHero from '../components/PageHero'
import { aboutContent, aboutSections, guidingPrinciples, humanDecision, values } from '../content/about'
import { usePageMeta } from '../hooks/usePageMeta'

function AboutPage() {
  usePageMeta(aboutContent.meta)

  return (
    <>
      <PageHero {...aboutContent.hero} />

      <PageBody>
        {aboutSections.map((section) => (
          <ContentSection key={section.title} {...section} />
        ))}

        <ContentSection {...guidingPrinciples}>
          <FeatureGrid items={values} columns={2} />
        </ContentSection>

        <ContentSection {...humanDecision} />

        {aboutContent.faq && <FaqAccordion title="About FAQ" items={aboutContent.faq} />}
      </PageBody>

      <FinalCta {...aboutContent.finalCta} />
    </>
  )
}

export default AboutPage
