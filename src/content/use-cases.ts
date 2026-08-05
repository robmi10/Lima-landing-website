import type { Feature, PageContent } from './types'

export const useCasesContent: PageContent = {
  meta: {
    title: 'How to Use Skills Tests in Recruitment | LiMA',
    description:
      'Use LiMA for early screening, interview selection, final-stage quality assurance, candidate comparison and internal skills mapping.',
  },
  hero: {
    eyebrow: 'How to use LiMA',
    headline: 'Use LiMA wherever your process needs clearer evidence.',
    text: 'Use LiMA as an early alternative to CV-led screening, before interviews or later in the process when you need to validate skills and compare candidates.',
    secondaryCta: { label: 'Explore the platform', href: '/platform' },
  },
  faq: [
    {
      question: 'Can LiMA replace CV screening?',
      answer:
        'LiMA can be used as the first screening step and sent to all applicants, reducing reliance on CVs alone. It can also be used alongside CV review or later in the process.',
    },
    {
      question: 'Can LiMA be used for existing employees?',
      answer: 'Yes. The same role-relevant assessments can support internal skills mapping and development.',
    },
    {
      question: 'Can LiMA be used for consultants between assignments?',
      answer:
        'Yes. Assessments can help map consultant skills and provide a structured basis for future assignments or client discussions.',
    },
    {
      question: 'Can every applicant receive the same assessment?',
      answer:
        'Yes. LiMA can be sent to every applicant when you want to create an early, consistent skills-based screening step.',
    },
  ],
  finalCta: {
    headline: 'Find the right place for LiMA in your process.',
    text: 'Book a demo and we will walk through the use case that best matches your hiring needs.',
  },
}

export const useCaseSections: Feature[] = [
  {
    title: 'Early candidate screening',
    text: 'Send the same role-relevant assessment to all applicants at the beginning of the process. This allows you to compare candidates using consistent criteria and reduce reliance on CV presentation alone.',
  },
  {
    title: 'Selection before interviews',
    text: 'Use assessment results to identify the candidates whose skills best match the role. The skill-level report can also help you focus each interview on the areas that deserve deeper discussion.',
  },
  {
    title: 'Quality assurance before a final decision',
    text: 'Add LiMA later in the process when you want another structured source of evidence before progressing a candidate, presenting a consultant to a client or making a final decision.',
  },
  {
    title: 'Compare candidates on relevant skills',
    text: 'Sort and compare candidates by total result and skill-level performance. LiMA makes the evidence easier to review while leaving every selection decision with your team.',
  },
  {
    title: 'Beyond external recruitment',
    text: 'The same assessments can support internal skills mapping, employee development, consultants between assignments and graduate or trainee programmes.',
  },
]
