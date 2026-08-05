import type { Feature, PageContent } from './types'

export const scienceContent: PageContent = {
  meta: {
    title: 'The Science Behind LiMA’s Assessment Formats',
    description:
      'Learn why LiMA combines MCQ, SJT, NUM and CASE questions to assess job-related knowledge, judgement, data interpretation and practical application.',
  },
  hero: {
    eyebrow: 'The science',
    headline: 'Why LiMA combines four job-related assessment formats.',
    text: 'LiMA combines MCQ, SJT, NUM and CASE questions because no single format can represent everything a role requires. Together, they provide structured evidence of what candidates know, how they judge situations, how they interpret information and how they apply their knowledge.',
    secondaryCta: { label: 'Explore the assessments', href: '/platform/assessments' },
  },
  faq: [
    {
      question: 'Why does LiMA use four question formats?',
      answer:
        'The formats provide different kinds of evidence. MCQ assesses knowledge, SJT explores judgement in realistic situations, NUM assesses interpretation of role-related data and CASE questions show how knowledge is applied.',
    },
    {
      question: 'Does research support job-knowledge testing?',
      answer:
        'Yes. Updated meta-analytic evidence places job-knowledge tests among the strongest selection methods for predicting job performance, with higher estimated validity than general cognitive-ability tests and common personality measures. This evidence supports the method generally; it is not a claim of predictive validity for LiMA’s own assessments.',
    },
    {
      question: 'Why use SJT and CASE questions?',
      answer:
        'SJT questions assess judgement in realistic work situations, while CASE questions assess practical application. Research supports both situational judgement tests and work-sample methods as useful sources of job-related evidence.',
    },
    {
      question: 'Are LiMA assessments predictively validated?',
      answer:
        'Not yet at product level. LiMA follows established principles for job-related test design, but predictive validity requires longitudinal outcome data from actual recruitment and job performance.',
    },
  ],
  finalCta: {
    headline: 'See how the design works in practice.',
    text: 'Book a demo to explore the assessment library, question formats and reporting.',
  },
}

export const whyJobRelated: Feature = {
  title: 'Why measure job-related knowledge and skills?',
  text: 'Updated meta-analytic research on personnel selection has reported higher estimated validity for job-knowledge tests than for general cognitive-ability tests and common personality measures. This supports starting with evidence that is directly connected to the work. It does not mean that every knowledge test is automatically predictive: quality still depends on the relevance of the content, the design of the questions and how the results are used.',
}

export const whyCombineFormats: Feature = {
  title: 'Why combine several formats?',
  text: 'Competence has several dimensions. Knowing a concept is different from choosing an appropriate response, interpreting data or applying knowledge to a practical task. LiMA combines four formats to sample these different dimensions instead of relying on a single type of question.',
}

export const questionFormats: Feature[] = [
  {
    title: 'MCQ — Knowledge questions',
    text: 'Structured multiple-choice questions can efficiently cover a broad sample of relevant concepts, tools and professional knowledge. Standardised scoring makes responses consistent and comparable across candidates.',
  },
  {
    title: 'SJT — Situational questions',
    text: 'Realistic work situations ask candidates to select the most appropriate response. SJT research shows meaningful associations with job performance, and the format is used to assess judgement, prioritisation and decision-making in context.',
  },
  {
    title: 'NUM — Numerical questions',
    text: 'Role-related figures, KPIs and data are used to assess whether candidates can interpret numerical information and draw relevant conclusions. NUM questions are included when numerical reasoning is part of the actual work.',
  },
  {
    title: 'CASE — Coding questions and practical cases',
    text: 'Applied tasks ask candidates to use their knowledge in situations that resemble the role. This follows work-sample logic, for which research supports a relationship with later job performance.',
  },
]

export const questionDevelopment: Feature = {
  title: 'How questions are developed and reviewed',
  text: 'LiMA starts with the role, the relevant competencies and the intended seniority level. Questions are created by a working subject-matter specialist, checked for factual accuracy and role relevance, independently reviewed by another specialist and trialled with professionals from the relevant field.',
}

export const developmentSteps: Feature[] = [
  {
    title: 'Mapped to the role',
    text: 'Each question is connected to a defined competency, level and purpose within the assessment.',
  },
  {
    title: 'Reviewed for quality',
    text: 'The review covers accuracy, relevance, seniority, clarity, answer options and the defensibility of the marked answer.',
  },
  {
    title: 'Tested with professionals',
    text: 'Trials help identify unclear wording, factual problems and content that is not calibrated appropriately for the role or level.',
  },
]

export const resultSections: Feature[] = [
  {
    title: 'What the result shows',
    text: 'The result provides a structured view of overall performance, performance by skill and performance across the included seniority levels. It helps hiring teams compare candidates against the same role-related criteria, but it should not be treated as a complete picture of the person.',
  },
  {
    title: 'How the result should be used',
    text: 'LiMA is decision support, not the decision. Assessment results should be combined with structured interviews and other relevant information. The hiring team remains responsible for interpreting the evidence and deciding what happens next.',
  },
  {
    title: 'What LiMA currently claims',
    text: 'LiMA assessments are built on established principles for structured, job-related test design. The documented development and review process supports content-related validity evidence. LiMA does not currently claim its own predictive validity; that requires longitudinal data linking assessment results with later outcomes in the role.',
  },
]

export const references = [
  'Tippins, Sackett & Oswald (2018), Principles for the Validation and Use of Personnel Selection Procedures.',
  'AERA, APA & NCME (2014), Standards for Educational and Psychological Testing.',
  'Sireci & Faulkner-Bond (2014), Validity evidence based on test content.',
  'McDaniel, Hartman, Whetzel & Grubb (2007), Situational judgment tests, response instructions, and validity.',
  'Haladyna, Downing & Rodriguez (2002), A Review of Multiple-Choice Item-Writing Guidelines.',
  'Roth, Bobko & McFarland (2005), A Meta-Analysis of Work Sample Test Validity.',
  'Sackett, Zhang, Berry & Lievens (2022), Revisiting meta-analytic estimates of validity in personnel selection.',
]
