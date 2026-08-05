import type { Cta, FinalCtaContent } from './types'

export const supportEmail = 'info@limatest.se'

export const backofficeUrl = 'https://backoffice.limatest.se/'

export const demoCta: Cta = {
  label: 'Book a demo',
  href: `mailto:${supportEmail}?subject=Book%20a%20demo`,
}

export const productDescriptor = 'Role-specific skills assessments with built-in proctoring.'

export const globalFinalCta: FinalCtaContent = {
  headline: 'Ready to see LiMA in action?',
  text: 'Book a demo and discover how LiMA can add clearer evidence to your hiring process.',
}

export const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Platform', to: '/platform' },
  { label: 'About us', to: '/about' },
  { label: 'FAQ', to: '/faq' },
  { label: 'Resources', to: '/resources' },
]

export const platformPages = [
  { label: 'Overview', to: '/platform' },
  { label: 'The science', to: '/platform/science' },
  { label: 'Available assessments', to: '/platform/assessments' },
  { label: 'Proctoring', to: '/platform/proctoring' },
  { label: 'How to use LiMA', to: '/platform/use-cases' },
]

export const caseUrl = '/resources/cases/european-fintech-python-developers'
