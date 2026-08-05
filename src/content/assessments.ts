import type { Feature, PageContent } from './types'

export const assessmentsContent: PageContent = {
  meta: {
    title: 'Skills Tests for IT, Marketing, Finance & HR | LiMA',
    description:
      'Build customizable skills assessments for IT, Digital Marketing, Finance and HR roles using knowledge, situational, numerical and coding questions.',
  },
  hero: {
    eyebrow: 'Available assessments',
    headline: 'Assess the skills that matter for the role.',
    text: 'Choose the competencies and level that match the position. LiMA creates a structured assessment that you can review, adapt and send from one platform.',
    secondaryCta: { label: 'See how tests are built', href: '/platform' },
  },
  faq: [
    {
      question: 'Which assessments are available?',
      answer:
        'LiMA provides assessments across IT, Digital Marketing, Finance and HR. Because the library is continuously updated, contact us for the latest available roles and competencies.',
    },
    {
      question: 'Can we combine several competencies in one assessment?',
      answer: 'Yes. You can select several relevant skills and combine them in one role-specific assessment.',
    },
    {
      question: 'Can we add our own questions?',
      answer: 'Yes. You can add questions and cases that reflect your tools, processes, industry or customer requirements.',
    },
    {
      question: 'Can we review the assessment before sending it?',
      answer:
        'Yes. You can review the structure and content, then remove, replace, reorder or add questions before inviting candidates.',
    },
    {
      question: 'How long does a test take?',
      answer: 'The length varies according to the number of selected skills, question formats and level of customization.',
    },
  ],
  finalCta: {
    headline: 'Looking for a specific role or skill?',
    text: 'Book a demo and we will show you the current assessment coverage and available customization options.',
  },
}

export const coverage: Feature = {
  title: 'Coverage that evolves with work',
  text: 'LiMA supports assessments across IT, Digital Marketing, Finance and HR. The library is continually updated as roles, tools and required skills change, so available competencies can evolve without making your process harder to manage.',
}

export const questionTypes: Feature[] = [
  {
    title: 'Knowledge questions',
    text: 'Assess role-relevant knowledge, concepts and tool understanding.',
  },
  {
    title: 'Situational questions',
    text: 'Present realistic work situations and ask candidates to choose the most appropriate action.',
  },
  {
    title: 'Numerical questions',
    text: 'Assess how candidates interpret figures, KPIs and data in context.',
  },
  {
    title: 'Coding questions and cases',
    text: 'Evaluate how candidates apply technical or specialist knowledge to practical tasks.',
  },
]

export const assessmentSections: Feature[] = [
  {
    title: 'Tailor the assessment before sending',
    text: 'Combine multiple competencies, choose the relevant level, remove or replace questions and add your own questions or cases. This makes it possible to reflect your industry, tools, processes and specific role requirements.',
  },
  {
    title: 'Available in English and Swedish',
    text: 'Assessments are available in English and Swedish. Content can also be adapted when your hiring process requires another language.',
  },
]
