import type { Feature, PageContent } from './types'

export const aboutContent: PageContent = {
  meta: {
    title: 'About LiMA | Fairer, Skills-Based Recruitment',
    description:
      'LiMA was created to make role-relevant skills more visible and support fairer, more structured recruitment decisions.',
  },
  hero: {
    eyebrow: 'About us',
    headline: 'A fairer way to see what candidates can do.',
    text: 'LiMA was created to help hiring teams assess competence more consistently while giving candidates a clearer opportunity to be evaluated for the skills the role actually requires.',
    secondaryCta: { label: 'Explore the platform', href: '/platform' },
  },
  faq: [
    {
      question: 'Does LiMA replace recruiters?',
      answer:
        'No. LiMA gives recruiters and hiring managers structured evidence that can strengthen their judgement and support more focused interviews.',
    },
    {
      question: 'How does LiMA support a fairer process?',
      answer:
        'LiMA helps teams evaluate candidates using the same role-relevant criteria and reduces reliance on presentation and background alone. The final process still depends on responsible human decisions.',
    },
  ],
  finalCta: {
    headline: 'Bring more role-relevant evidence into your hiring process.',
    text: 'Book a demo to see how LiMA works for recruiters and candidates.',
  },
}

export const aboutSections: Feature[] = [
  {
    title: 'Why we created LiMA',
    text: 'Hiring teams need to assess competence, manage the risk of cheating and move processes forward without losing fairness or relevance. Yet CVs and traditional assessments do not always show whether a candidate can apply the knowledge required in the role. LiMA was built to add that missing evidence.',
  },
  {
    title: 'Our mission',
    text: 'To make role-relevant skills assessment more accessible, trustworthy and useful throughout recruitment.',
  },
  {
    title: 'Our vision',
    text: 'A recruitment market where candidates are evaluated for what they can do — regardless of background.',
  },
]

export const guidingPrinciples: Feature = {
  title: 'What guides us',
  text: 'Four principles shape how we build LiMA.',
}

export const values: Feature[] = [
  {
    title: 'Fairness',
    text: 'Give candidates the opportunity to be evaluated using consistent, role-relevant criteria.',
  },
  {
    title: 'Security',
    text: 'Use transparent proctoring signals to strengthen confidence in how assessments are completed.',
  },
  {
    title: 'Transparency',
    text: 'Make it clear what is assessed, what is recorded and how the result supports the hiring process.',
  },
  {
    title: 'Innovation',
    text: 'Continue developing the assessment library and platform as roles, skills and recruitment challenges evolve.',
  },
]

export const humanDecision: Feature = {
  title: 'Technology supports the decision. People make it.',
  text: 'LiMA provides structured evidence and clearer context. It never makes the final selection decision or automatically removes candidates from the process.',
}
