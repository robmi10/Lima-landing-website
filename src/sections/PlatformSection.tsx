import Accordion from '../components/Accordion'
import Contours from '../components/Contours'
import SectionHeading from '../components/SectionHeading'
import { platform, sections } from '../content/site'

/** The question list from the test builder, trimmed to what reads at card size. */
const builder = {
  label: 'Create a test',
  role: 'Paid Search Specialist',
  tags: ['Marketing', 'Google Ads', 'Entry'],
  count: '16 questions',
  questions: [
    { text: 'What will DSA actually do?', type: 'Function' },
    { text: 'Which report should you use and why?', type: 'SJT' },
    { text: 'Which Google surfaces does Demand Gen cover?', type: 'Function' },
    { text: 'What is the correct average cost per click?', type: 'NUM' },
    { text: 'Which bid strategy should they use?', type: 'SJT' },
    { text: 'Which attribution model should they apply?', type: 'SJT' },
  ],
  selected: 0,
}

/** The candidate's view of a single question. */
const candidate = {
  label: 'Candidate experience',
  step: '1/12',
  prompt:
    'You run Demand Gen prospecting for a new product with a small but high-quality recent purchasers list. How to scale efficiently?',
  options: [
    'Use one prospecting list only, and increase budget',
    'Target broad affinity audiences with no first-party seed',
    'Build Lookalike segments seeded with recent purchasers',
    'Target competitor brand keywords with manual CPC',
  ],
  selected: 2,
  confirm: 'Confirm',
}

const cardShell = 'rounded-xl bg-white p-4 shadow-[0_30px_70px_-35px_rgba(15,23,42,0.5)]'

function Chip({ children, tone = 'muted' }: { children: string; tone?: 'muted' | 'skill' | 'onDark' }) {
  const tones = {
    muted: 'bg-slate-100 text-slate-600',
    skill: 'bg-emerald-100 text-emerald-900',
    onDark: 'bg-white/15 text-white',
  }

  return <span className={`rounded px-1.5 py-0.5 text-[0.5rem] ${tones[tone]}`}>{children}</span>
}

function BuilderCard() {
  return (
    <figure className="m-0">
      <figcaption className="mb-3 text-xs font-medium text-slate-500">{builder.label}</figcaption>

      <div className={cardShell}>
        <div className="flex items-baseline justify-between gap-3">
          <p className="truncate text-xs font-semibold text-slate-900">{builder.role}</p>
          <span className="shrink-0 text-[0.55rem] text-slate-400">{builder.count}</span>
        </div>

        <div className="mt-2 flex flex-wrap gap-1">
          {builder.tags.map((tag, index) => (
            <Chip key={tag} tone={index === 0 ? 'skill' : 'muted'}>
              {tag}
            </Chip>
          ))}
        </div>

        <ul className="mt-3 space-y-1.5">
          {builder.questions.map((question, index) => {
            const active = index === builder.selected

            return (
              <li
                key={question.text}
                className={`rounded-md px-2.5 py-1.5 ${active ? 'bg-slate-800' : 'bg-slate-50'}`}
              >
                <p
                  className={`truncate text-[0.65rem] ${active ? 'font-medium text-white' : 'text-slate-700'}`}
                >
                  {question.text}
                </p>
                <div className="mt-1 flex gap-1">
                  <Chip tone={active ? 'onDark' : 'skill'}>Google Ads</Chip>
                  <Chip tone={active ? 'onDark' : 'muted'}>{question.type}</Chip>
                  <Chip tone={active ? 'onDark' : 'muted'}>Entry</Chip>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </figure>
  )
}

function CandidateCard() {
  return (
    <figure className="m-0">
      <figcaption className="mb-3 text-xs font-medium text-slate-500">{candidate.label}</figcaption>

      <div className={cardShell}>
        <div className="flex items-center justify-between">
          <span className="rounded-md bg-slate-100 px-2.5 py-1 text-[0.6rem] text-slate-600">Cancel</span>
          <span className="text-[0.6rem] tabular-nums text-slate-500">00:59</span>
        </div>

        <p className="mt-3 text-[0.6rem] text-slate-500">{candidate.step}</p>
        <p className="mt-1 text-xs font-semibold leading-snug text-slate-900">{candidate.prompt}</p>

        <ul className="mt-3 space-y-1.5">
          {candidate.options.map((option, index) => (
            <li
              key={option}
              className={`flex gap-2.5 rounded-md px-2.5 py-1.5 text-[0.65rem] ${index === candidate.selected ? 'bg-slate-800 text-white' : 'bg-slate-100 text-slate-600'
                }`}
            >
              <span className="font-semibold">{String.fromCharCode(65 + index)}</span>
              <span className="min-w-0 flex-1">{option}</span>
            </li>
          ))}
        </ul>

        <div className="mt-3 flex items-center justify-center gap-3 text-slate-400">
          <span aria-hidden>‹</span>
          <span className="rounded-md bg-slate-100 px-5 py-1 text-[0.65rem] text-slate-700">
            {candidate.confirm}
          </span>
          <span aria-hidden>›</span>
        </div>
      </div>
    </figure>
  )
}

function PlatformSection() {
  return (
    <section id={sections.platform} className="scroll-mt-24 bg-white px-6 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow={platform.eyebrow} headline={platform.headline} text={platform.text} />

        {/* Both screens visible at once, floating over the contour rings. */}
        <div className="relative mt-14">
          <Contours
            className="absolute left-1/2 top-1/2 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 text-slate-200"
            rings={13}
          />

          <div className="relative mx-auto grid max-w-3xl gap-10 sm:grid-cols-2 sm:gap-6">
            <BuilderCard />
            <div className="sm:translate-y-12">
              <CandidateCard />
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-x-12 sm:mt-28 md:grid-cols-2">
          <Accordion items={platform.accordions.left} />
          <Accordion items={platform.accordions.right} />
        </div>
      </div>
    </section>
  )
}

export default PlatformSection
