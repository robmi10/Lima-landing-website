import type { FaqGroup, PageContent } from './types'

export const faqContent: PageContent = {
  meta: {
    title: 'LiMA FAQ | Skills Tests, Proctoring & Results',
    description:
      'Find answers about LiMA skills assessments, customization, candidate results, proctoring, privacy, pricing and technical support.',
  },
  hero: {
    eyebrow: 'FAQ',
    headline: 'Questions about LiMA? Start here.',
    text: 'Learn how the platform, assessments, reporting and proctoring work for employers and candidates.',
  },
  finalCta: {
    headline: 'Still have a question?',
    text: 'Book a demo or contact us at info@limatest.se.',
  },
}

export const faqGroups: FaqGroup[] = [
  {
    title: 'Platform and assessments',
    items: [
      {
        question: 'What is LiMA?',
        answer:
          'LiMA is a recruitment assessment platform for evaluating role-relevant knowledge and skills. It combines customizable assessments, structured reporting and proctoring signals in one workflow.',
      },
      {
        question: 'How is an assessment created?',
        answer:
          'Select the role, relevant skills and level. LiMA creates an assessment from the question library, which you can review and customize before sending.',
      },
      {
        question: 'Which areas does LiMA cover?',
        answer:
          'LiMA provides assessments across IT, Digital Marketing, Finance and HR. The available competencies are continuously updated.',
      },
      {
        question: 'Can we customize an assessment?',
        answer:
          'Yes. You can combine competencies, remove, replace or reorder questions and add your own questions or cases.',
      },
      {
        question: 'Which question types are available?',
        answer:
          'LiMA uses knowledge questions, situational questions, numerical questions, coding questions and practical cases.',
      },
      {
        question: 'Which languages are available?',
        answer:
          'Assessments are available in English and Swedish, with additional language adaptation possible when required.',
      },
      {
        question: 'How long does an assessment take?',
        answer: 'The length varies depending on the selected skills, level and amount of customized content.',
      },
      {
        question: 'What results can the candidate see?',
        answer:
          'After completing the assessment, the candidate can see their total result and result for each assessed skill.',
      },
      {
        question: 'Can a candidate retake an assessment?',
        answer: 'No. Each candidate receives one attempt.',
      },
    ],
  },
  {
    title: 'Proctoring and privacy',
    items: [
      {
        question: 'What is recorded during a proctored assessment?',
        answer:
          'LiMA records candidate video and audio after the candidate has received clear information and provided consent.',
      },
      {
        question: 'Which events does LiMA log?',
        answer:
          'LiMA logs tab changes, copy and paste activity and when the candidate leaves the active assessment window.',
      },
      {
        question: 'Does a flagged event prove that the candidate cheated?',
        answer:
          'No. A flagged event is a signal that may require review. Recruiters consider the event and recording in context before making their own decision.',
      },
      {
        question: 'Does LiMA verify candidate identity automatically?',
        answer:
          'No. The video gives the recruiter information that can be used for a manual comparison with the candidate profile.',
      },
      {
        question: 'Can LiMA reject a candidate automatically?',
        answer:
          'No. LiMA never makes automatic selection decisions. The hiring team is always responsible for deciding what happens next.',
      },
      {
        question: 'How long is candidate video stored?',
        answer: 'Candidate video is retained for seven days and is then removed.',
      },
      {
        question: 'Who can see candidate results and recordings?',
        answer:
          'The hiring manager and other authorized recruiters responsible for the recruitment process can access the relevant candidate information.',
      },
      {
        question: 'Which devices can candidates use?',
        answer: 'Candidates can use a computer, mobile device or tablet with a working camera and microphone.',
      },
    ],
  },
  {
    title: 'Pricing and support',
    items: [
      {
        question: 'How much does LiMA cost?',
        answer:
          'Pricing is tailored to your hiring needs and assessment volume. Contact us to discuss the right setup for your team.',
      },
      {
        question: 'What happens after we request a demo?',
        answer:
          'We will contact you to schedule an introductory meeting and show you how LiMA can fit your recruitment process.',
      },
      {
        question: 'What should a candidate do if there is a technical problem?',
        answer: 'Contact LiMA at info@limatest.se and describe the issue.',
      },
    ],
  },
]
