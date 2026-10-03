import { getArticleCards } from './articles'

export const supportEmail = 'info@limatest.se'

export const backofficeUrl = 'https://backoffice.limatest.se/'

export const meta = {
  title: 'LiMA | Role-Specific Recruitment Tests with Proctoring',
  description:
    'Assess job-relevant skills, deter cheating with proctoring and give hiring teams clearer, comparable candidate insights. Book a LiMA demo.',
}

export const demoCta = {
  label: 'Book a Demo',
  href: `mailto:${supportEmail}?subject=Book%20a%20demo`,
}

/** Section ids double as the nav anchors. */
export const sections = {
  platform: 'platform',
  process: 'process',
  antiCheat: 'anti-cheat',
  about: 'about',
  faq: 'faq',
  resources: 'resources',
} as const

export const navItems = [
  { label: 'Platform', to: `#${sections.platform}` },
  { label: 'Anti-cheat', to: `#${sections.antiCheat}` },
  { label: 'About us', to: `#${sections.about}` },
  { label: 'FAQ', to: `#${sections.faq}` },
  { label: 'Resources', to: `#${sections.resources}` },
]

export const hero = {
  headline: 'Assess real skills. Hire with greater confidence.',
  text: 'LiMA combines role specific skills assessments, proctoring signals and structured reporting to give hiring teams clearer, more comparable evidence throughout the recruitment process.',
  cta: { label: 'Login / Create Account', href: backofficeUrl },
}

export const platform = {
  eyebrow: 'Platform',
  headline: 'A clearer path from role requirements to candidate evidence.',
  text: 'Choose the role, skills and level. LiMA builds a relevant assessment, manages the candidate experience and brings results and proctoring signals together in one report.',
  accordions: {
    left: [
      {
        question: 'Overall results',
        answer: 'See the candidate’s total assessment score in one place.',
      },
      {
        question: 'Performance by skill',
        answer: 'Understand where the candidate is strongest and where gaps may exist.',
      },
      {
        question: 'Performance by level',
        answer: 'Review how the candidate performed across the seniority levels included in the assessment.',
      },
    ],
    right: [
      {
        question: 'Build an assessment around the role',
        answer:
          'Select the discipline, role, relevant skills and seniority level. LiMA matches your choices with suitable questions from the assessment library and creates a consistent test for the position.',
      },
      {
        question: 'Comparison and context',
        answer: 'Compare the candidate with available benchmarks and sort candidates by result.',
      },
      {
        question: 'Proctoring evidence',
        answer: 'See logged events and review the time-limited candidate recording when further context is needed.',
      },
    ],
  },
}

export const process = {
  eyebrow: 'Process',
  headline: 'How hiring with LiMA works',
  text: 'From an open role to a shortlist you can defend. LiMA handles the assessment, the candidate experience and the proctoring evidence, so your team spends its time on the decision rather than on guesswork.',
  steps: [
    {
      number: '01',
      title: 'Define the role',
      text: 'Choose the discipline, role, relevant skills and seniority level. LiMA assembles a consistent assessment from the question library, which you can review, reorder and extend with your own questions before anyone sees it.',
    },
    {
      number: '02',
      title: 'Invite your candidates',
      text: 'Send invitations by email or share one public link for the position. Candidates register themselves, review what will be recorded and give consent before they start.',
    },
    {
      number: '03',
      title: 'Candidates take the assessment',
      text: 'The test runs on any supported device with a camera and microphone. While it runs, LiMA logs tab changes, copy and paste activity and moments the candidate leaves the test window.',
    },
    {
      number: '04',
      title: 'Review the evidence',
      text: 'Every candidate produces the same report: an overall result, performance by skill and by level, and any proctoring events, with the recording available when an event needs context.',
    },
    {
      number: '05',
      title: 'Shortlist with confidence',
      text: 'Compare candidates against the same role-relevant criteria and against available benchmarks. LiMA never rejects or advances anyone automatically — the decision stays with your team.',
    },
  ],
}

export const antiCheat = {
  eyebrow: 'Anti-cheat',
  headline: 'More confidence in how each assessment was completed.',
  label: 'Proctoring',
  text: 'LiMA records candidate video and audio with consent and logs specific events during the assessment. Recruiters can review the signals and recording in context before deciding what happens next. LiMA logs selected events during the assessment and presents them in the candidate report.',
  signals: [
    {
      number: '01',
      title: 'Tab changes',
      text: 'See when the candidate switches away from the active assessment tab.',
    },
    {
      number: '02',
      title: 'Copy and paste activity',
      text: 'See when the candidate switches away from the active assessment tab.',
    },
    {
      number: '03',
      title: 'Leaving the test window',
      text: 'See when the candidate exits or moves away from the active assessment window.',
    },
  ],
  note: 'All logged events are available to the recruiter. The video recording can provide additional context and may also help the recruiter manually confirm that the person completing the assessment matches the candidate profile.',
}

export const about = {
  eyebrow: 'About us',
  headline: 'Why we created LiMA',
  text: 'Hiring teams need to assess competence, manage the risk of cheating and move processes forward without losing fairness or relevance. Yet CVs and traditional assessments do not always show whether a candidate can apply the knowledge required in the role. LiMA was built to add that missing evidence.',
  blocks: [
    {
      title: 'Our mission',
      text: 'To make role-relevant skills assessment more accessible, trustworthy and useful throughout recruitment.',
    },
    {
      title: 'Our vision',
      text: 'A recruitment market where candidates are evaluated for what they can do — regardless of background.',
    },
  ],
}

export const resources = {
  eyebrow: 'Resources',
  articles: getArticleCards(),
  /** Cards shown before "More resources" is pressed, excluding the featured one. */
  visibleCards: 3,
}

export const faq = {
  eyebrow: 'Frequently asked questions',
  /** Questions shown per group before "Show all" is pressed. */
  visibleItems: 6,
}

export const footer = {
  columns: [
    {
      title: 'Product',
      links: [
        { label: 'How it works', to: `#${sections.process}` },
        { label: 'FAQ', to: `#${sections.faq}` },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About', to: `#${sections.about}` },
        { label: 'Press', to: `mailto:${supportEmail}?subject=Press` },
        { label: 'Contact', to: `mailto:${supportEmail}` },
      ],
    },
    {
      title: 'Social',
      links: [{ label: 'LinkedIn', to: 'https://www.linkedin.com/' }],
    },
    {
      title: 'Legal',
      links: [
        { label: 'Privacy', to: `mailto:${supportEmail}?subject=Privacy` },
        { label: 'Terms', to: `mailto:${supportEmail}?subject=Terms` },
        { label: 'Cookies', to: `mailto:${supportEmail}?subject=Cookies` },
      ],
    },
  ],
  copyright: '© LiMA, 2026',
  madeIn: 'Designed in Sweden',
}
