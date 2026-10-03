import candidatePortrait from '../assets/candidate-mark.jpg'
import Contours from '../components/Contours'
import { hero } from '../content/site'

const skills = [
  { name: 'Java', score: 56 },
  { name: 'JavaScript', score: 56 },
  { name: 'React', score: 81 },
]

const levels = [
  { label: 'Entry level', width: 'w-14' },
  { label: 'Mid level', width: 'w-10' },
  { label: 'Senior level', width: 'w-16' },
  { label: 'Total', width: 'w-12' },
]

function DocIcon() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden className="h-4 w-4 text-slate-400">
      <path
        d="M4 1.5h5L12.5 5v9.5h-8.5z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinejoin="round"
      />
      <path d="M9 1.5V5h3.5" fill="none" stroke="currentColor" strokeWidth="1" strokeLinejoin="round" />
    </svg>
  )
}

/** The composed product mock that sits beside the hero copy. */
function HeroMock() {
  return (
    <div className="relative mx-auto aspect-[4/3] w-full max-w-xl">
      <Contours className="absolute inset-0 h-full w-full text-slate-300/70" />

      {/* Candidate card */}
      <div className="absolute left-[26%] top-[14%] w-[34%]">
        <div className="overflow-hidden rounded-2xl bg-white shadow-[0_20px_50px_-30px_rgba(15,23,42,0.5)]">
        <img
          src={candidatePortrait}
          alt="Mark Philips, backend developer"
          width={512}
          height={600}
          className="aspect-[4/5] w-full object-cover object-[35%_20%]"
        />
          <div className="px-3 py-2">
            <p className="truncate text-[0.7rem] font-semibold text-slate-900">Mark Philips</p>
            <p className="truncate text-[0.6rem] text-slate-500">Backend Developer</p>
          </div>
        </div>

        {/* Anchored to the card, so it can never land on his face or name. */}
        <div className="absolute -bottom-12 -left-5 rounded-lg bg-emerald-100/90 px-3 py-2 backdrop-blur">
          <p className="flex items-center gap-1 text-[0.6rem] font-semibold text-emerald-900">
            Status: Verified
            <svg viewBox="0 0 16 16" aria-hidden className="h-3 w-3 text-emerald-600">
              <circle cx="8" cy="8" r="7" fill="currentColor" />
              <path d="m5 8 2 2 4-4" fill="none" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </p>
          <p className="text-[0.55rem] text-emerald-800/80">No signs of cheating detected</p>
        </div>
      </div>

      {/* Proctoring pips */}
      <div className="absolute left-[52%] top-[8%] flex gap-1.5">
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white shadow-sm">
          <span className="h-2 w-2 rounded-full bg-blue-500" />
        </span>
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white shadow-sm">
          <svg viewBox="0 0 16 16" aria-hidden className="h-3 w-3 text-rose-500">
            <rect x="1.5" y="4" width="13" height="9" rx="2" fill="none" stroke="currentColor" strokeWidth="1.3" />
            <circle cx="8" cy="8.5" r="2.4" fill="none" stroke="currentColor" strokeWidth="1.3" />
          </svg>
        </span>
      </div>

      {/* Test results card */}
      <div className="absolute left-[50%] top-[17%] w-[42%] rounded-2xl bg-white p-4 shadow-[0_24px_60px_-30px_rgba(15,23,42,0.45)]">
        <div className="flex justify-center">
          <span className="flex h-6 w-6 items-center justify-center rounded-md bg-emerald-50">
            <span className="h-2.5 w-3 rounded-[2px] bg-emerald-600" />
          </span>
        </div>
        <p className="mt-2 text-center text-[0.72rem] font-semibold text-slate-900">Test Results</p>

        <ul className="mt-3 space-y-2.5">
          {skills.map((skill) => (
            <li key={skill.name} className="flex items-center gap-2">
              <DocIcon />
              <div className="min-w-0 flex-1">
                <p className="truncate text-[0.6rem] text-slate-700">{skill.name}</p>
                <div className="mt-1 h-[3px] w-full rounded-full bg-slate-100">
                  <div className="h-full rounded-full bg-slate-900" style={{ width: `${skill.score}%` }} />
                </div>
              </div>
              <span className="text-[0.55rem] tabular-nums text-slate-400">{skill.score}%</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Score badge */}
      <div className="absolute right-[2%] top-[9%] rounded-xl bg-white px-4 py-2 shadow-[0_16px_40px_-20px_rgba(15,23,42,0.5)]">
        <span className="text-xl font-semibold tracking-tight text-slate-950">62%</span>
      </div>

      {/* Level breakdown */}
      <div className="absolute bottom-[8%] right-[2%] w-[38%] rounded-2xl bg-white p-4 shadow-[0_24px_60px_-30px_rgba(15,23,42,0.45)]">
        <ul className="space-y-2">
          {levels.map((level) => (
            <li key={level.label} className="flex items-center justify-between gap-3">
              <span className="text-[0.55rem] text-slate-500">{level.label}</span>
              <span className={`h-[3px] rounded-full bg-slate-900 ${level.width}`} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

function HeroSection() {
  return (
    <section className="px-6 pb-20 pt-12 lg:px-8 lg:pb-28 lg:pt-20">
      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-2">
        <div>
          <h1 className="max-w-md text-4xl leading-[1.12] tracking-tight text-slate-950 sm:text-5xl">
            {hero.headline}
          </h1>
          <p className="mt-6 max-w-sm text-sm leading-6 text-slate-600">{hero.text}</p>
          <a
            href={hero.cta.href}
            className="mt-8 inline-block rounded-md bg-slate-950 px-5 py-2.5 text-xs font-medium text-white transition hover:bg-slate-800"
          >
            {hero.cta.label}
          </a>
        </div>

        <HeroMock />
      </div>
    </section>
  )
}

export default HeroSection
