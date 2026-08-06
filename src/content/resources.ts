import { getArticleCards } from './articles'
import { caseUrl } from './global'
import type { PageContent } from './types'

export const resourcesContent: PageContent = {
  meta: {
    title: 'Resources | LiMA',
    description:
      'Hiring insights, case studies and material from recruitment processes that use LiMA skills assessments.',
  },
  hero: {
    eyebrow: 'Resources',
    headline: 'Insights and cases',
    text: 'Articles and stories about skills-based hiring, assessments and clearer recruitment decisions.',
  },
  finalCta: {
    headline: 'Ready to see LiMA in action?',
    text: 'Book a demo and discover how LiMA can add clearer evidence to your hiring process.',
  },
}

export const articleCards = getArticleCards()

export const caseCards = [
  {
    label: 'Case',
    title: 'From similar CVs to a clearer view of technical skill.',
    text: 'A fast-growing European fintech company used LiMA to assess 14 Python developers before they were presented to the end client.',
    to: caseUrl,
  },
]
