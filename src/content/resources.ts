import { caseUrl } from './global'
import type { PageContent } from './types'

// The copy deck excludes resource hub copy, so this page only lists the approved case.
export const resourcesContent: PageContent = {
  meta: {
    title: 'Resources | LiMA',
    description: 'Cases and material from recruitment processes that use LiMA skills assessments.',
  },
  hero: {
    eyebrow: 'Resources',
    headline: 'Cases',
    text: 'Stories from recruitment processes that used LiMA to add role-relevant skills evidence.',
  },
  finalCta: {
    headline: 'Ready to see LiMA in action?',
    text: 'Book a demo and discover how LiMA can add clearer evidence to your hiring process.',
  },
}

export const caseCards = [
  {
    label: 'Case',
    title: 'From similar CVs to a clearer view of technical skill.',
    text: 'A fast-growing European fintech company used LiMA to assess 14 Python developers before they were presented to the end client.',
    to: caseUrl,
  },
]
