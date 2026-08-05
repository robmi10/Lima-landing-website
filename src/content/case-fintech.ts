import type { Feature, PageContent, Stat } from './types'

export const caseContent: PageContent = {
  meta: {
    title: 'Case Study: Assessing 14 Python Developers | LiMA',
    description:
      'See how a European fintech recruitment project used LiMA to compare 14 Python developers, strengthen the shortlist and review proctoring evidence.',
  },
  hero: {
    eyebrow: 'Case · European fintech',
    headline: 'From similar CVs to a clearer view of technical skill.',
    text: 'A fast-growing European fintech company used LiMA to assess 14 Python developers before they were presented to the end client.',
  },
  faq: [
    {
      question: 'Can LiMA be used late in the recruitment process?',
      answer:
        'Yes. In this case, LiMA was used shortly before candidates were presented to the end client as an additional skills and quality-assurance step.',
    },
    {
      question: 'Did LiMA automatically remove the four candidates?',
      answer: 'No. The recruiter reviewed the assessment and proctoring evidence and made every decision.',
    },
  ],
  finalCta: {
    headline: 'Add clearer skills evidence before your next candidate decision.',
    text: 'Book a demo to see how LiMA can support your recruitment process.',
  },
}

export const caseSummary = 'Anonymous European fintech project'

export const caseSections: Feature[] = [
  {
    title: 'The challenge',
    text: 'The company operates internationally in Account-to-Account payments and recruits technical specialists on an ongoing basis. Fourteen software developers from Central and Eastern Europe were being considered for a Python Developer role. Their CVs appeared similar, making it difficult to identify differences in current technical skill.',
  },
  {
    title: 'The approach',
    text: 'LiMA was introduced late in the process, shortly before candidates were due to be presented to the end client. Each candidate completed a technical assessment covering relevant Python and SQL knowledge, with proctoring evidence available for recruiter review.',
  },
]

export const caseResults: Feature = {
  title: 'The results',
  text: 'The assessments revealed a wide spread of technical performance and gave the recruiter a structured basis for comparing candidates before the client presentation.',
}

export const caseStats: Stat[] = [
  { label: 'Completed assessments', value: '14' },
  { label: 'Average result', value: '65%' },
  { label: 'Result range', value: '33–100%' },
  { label: 'Excluded after recruiter review', value: '4' },
]

export const caseOutcomes: Feature[] = [
  {
    title: 'Clearer candidate segmentation',
    text: 'The results distinguished stronger candidates, a middle group and candidates who did not meet the required level.',
  },
  {
    title: 'More confidence in the shortlist',
    text: 'The recruiter gained another structured source of evidence to complement CVs and interviews.',
  },
  {
    title: 'Stronger client dialogue',
    text: 'The results helped the recruiter explain candidate recommendations and discuss the candidate’s level and rate with the client.',
  },
]

export const identityFinding: Feature = {
  title: 'A suspected identity mismatch was identified before client presentation',
  text: 'During manual review, the recruiter compared the test recording with the candidate’s LinkedIn profile and determined that the person completing the assessment appeared to be someone other than the stated applicant. The candidate was removed from consideration before being presented to the client.',
}

export const caseQuotes = [
  'Without the assessments, I would have felt significantly less certain in my selection. The results gave me something objective to rely on in my dialogue with the client.',
  'They helped me identify weaker candidates and gave me greater confidence in which candidates I should present.',
]

export const quoteAttribution = 'Recruiter, European fintech project'
