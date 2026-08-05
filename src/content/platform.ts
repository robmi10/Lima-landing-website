import type { Feature, PageContent } from './types'

export const platformContent: PageContent = {
  meta: {
    title: 'Recruitment Assessment Platform | LiMA',
    description:
      'Build role-specific skills assessments, invite candidates and review structured results with integrated proctoring in the LiMA platform.',
  },
  hero: {
    eyebrow: 'Platform overview',
    headline: 'A clearer path from role requirements to candidate evidence.',
    text: 'Choose the role, skills and level. LiMA builds a relevant assessment, manages the candidate experience and brings results and proctoring signals together in one report.',
    secondaryCta: { label: 'Explore the assessments', href: '/platform/assessments' },
  },
  faq: [
    {
      question: 'How quickly can we build an assessment?',
      answer:
        'Once you select the role, skills and level, LiMA creates the assessment from the question library. Setup time depends on how much you choose to customize.',
    },
    {
      question: 'What does the candidate see after completing the test?',
      answer: 'The candidate can see their total result and their result for each assessed skill.',
    },
    {
      question: 'Which devices are supported?',
      answer:
        'Candidates can complete the assessment on a computer, mobile device or tablet with a working camera and microphone.',
    },
    {
      question: 'Which languages are available?',
      answer:
        'Assessments are available in English and Swedish, with additional language adaptation possible when required.',
    },
    {
      question: 'How long does an assessment take?',
      answer: 'Assessment length varies depending on the selected skills, level and amount of customized content.',
    },
  ],
  finalCta: {
    headline: 'See the complete workflow in a live demo.',
    text: 'We will show you how to build an assessment, invite candidates and review the final report.',
  },
}

export const platformSections: Feature[] = [
  {
    title: 'Build an assessment around the role',
    text: 'Select the discipline, role, relevant skills and seniority level. LiMA matches your choices with suitable questions from the assessment library and creates a consistent test for the position.',
  },
  {
    title: 'Make it fit your hiring process',
    text: 'Review the full assessment before it is sent. Remove, replace or reorder questions, combine multiple competencies and add your own questions or cases to reflect your tools, processes or industry.',
  },
  {
    title: 'A straightforward candidate experience',
    text: 'Candidates receive an email invitation from LiMA, enter their information, review the assessment and privacy information and complete the test on their preferred supported device. After submission, they can see their total result and performance by skill.',
  },
]

export const reportLayers: Feature[] = [
  {
    title: 'Overall result',
    text: 'See the candidate’s total assessment score.',
  },
  {
    title: 'Performance by skill',
    text: 'Understand where the candidate is strongest and where gaps may exist.',
  },
  {
    title: 'Performance by level',
    text: 'Review how the candidate performed across the seniority levels included in the assessment.',
  },
  {
    title: 'Comparison and context',
    text: 'Compare the candidate with available benchmarks and sort candidates by result.',
  },
  {
    title: 'Proctoring evidence',
    text: 'See logged events and review the time-limited candidate recording when further context is needed.',
  },
]

export const humanDecision: Feature = {
  title: 'Compare candidates. Keep decisions human.',
  text: 'LiMA makes it easier to compare candidates using the same role-relevant criteria. It never rejects or advances a candidate automatically — every hiring decision remains with your team.',
}
