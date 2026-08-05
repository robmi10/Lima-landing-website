import type { Feature, PageContent } from './types'

export const proctoringContent: PageContent = {
  meta: {
    title: 'Proctored Recruitment Tests & Anti-Cheating | LiMA',
    description:
      'Use candidate recordings and clear proctoring signals to identify potential irregularities and review recruitment test results with greater confidence.',
  },
  hero: {
    eyebrow: 'Proctoring',
    headline: 'More confidence in how each assessment was completed.',
    text: 'LiMA records candidate video and audio with consent and logs specific events during the assessment. Recruiters can review the signals and recording in context before deciding what happens next.',
    secondaryCta: { label: 'See how it works', href: '/platform' },
  },
  faq: [
    {
      question: 'What does LiMA record?',
      answer:
        'LiMA records candidate video and audio after the candidate has received clear information and provided consent.',
    },
    {
      question: 'Which events are logged?',
      answer: 'LiMA logs tab changes, copy and paste activity and when the candidate leaves the active test window.',
    },
    {
      question: 'Does LiMA verify the candidate’s identity automatically?',
      answer:
        'No. The recording gives the recruiter information that can be used to manually compare the person completing the assessment with the candidate profile.',
    },
    {
      question: 'Can LiMA disqualify a candidate automatically?',
      answer:
        'No. LiMA presents proctoring signals and recordings as context. The hiring team is always responsible for the decision.',
    },
    {
      question: 'How long is the video available?',
      answer: 'Candidate video is available for seven days and is then removed.',
    },
  ],
  finalCta: {
    headline: 'See proctoring from both sides of the assessment.',
    text: 'Book a demo to explore the candidate experience, logged events and recruiter review.',
  },
}

export const beforeTheTest: Feature = {
  title: 'Clear information before the test',
  text: 'Before starting, candidates receive a clear summary of what will be recorded, why the information is collected and how it is used. They also review the relevant privacy information and provide consent.',
}

export const loggedSignals: Feature = {
  title: 'Signals that deserve a closer look',
  text: 'LiMA logs selected events during the assessment and presents them in the candidate report.',
}

export const signalTypes: Feature[] = [
  {
    title: 'Tab changes',
    text: 'See when the candidate switches away from the active assessment tab.',
  },
  {
    title: 'Copy and paste activity',
    text: 'Review detected copying or pasting as a signal that may require more context.',
  },
  {
    title: 'Leaving the test window',
    text: 'See when the candidate exits or moves away from the active assessment window.',
  },
]

export const proctoringSections: Feature[] = [
  {
    title: 'Review the evidence in context',
    text: 'All logged events are available to the recruiter. The video recording can provide additional context and may also help the recruiter manually confirm that the person completing the assessment matches the candidate profile.',
  },
  {
    title: 'No automated rejection',
    text: 'Proctoring signals are not proof of cheating on their own. LiMA never rejects candidates automatically. Recruiters review the evidence, consider the context and make the final decision.',
  },
  {
    title: 'Limited video retention',
    text: 'Candidate video is retained for seven days and is then removed. This gives the hiring team time to review relevant events while limiting how long the recording remains available.',
  },
  {
    title: 'Complete the assessment on a supported device',
    text: 'Candidates can use a computer, mobile device or tablet with a working camera and microphone.',
  },
]
