import Contours from '../components/Contours'
import SectionHeading from '../components/SectionHeading'
import { antiCheat, sections } from '../content/site'

const logRows = [
  { label: 'Screenshot', icon: 'camera' },
  { label: 'Screenshot', icon: 'camera' },
  { label: 'Tab changes', icon: 'tab' },
  { label: 'Copy and paste activity', icon: 'copy' },
  { label: 'Tab changes', icon: 'tab' },
  { label: 'Copy and paste activity', icon: 'copy' },
] as const

function RowIcon({ icon }: { icon: (typeof logRows)[number]['icon'] }) {
  if (icon === 'camera') {
    return (
      <svg viewBox="0 0 16 16" aria-hidden className="h-3.5 w-3.5">
        <rect x="1.5" y="4" width="13" height="9" rx="2" fill="none" stroke="currentColor" strokeWidth="1.2" />
        <circle cx="8" cy="8.5" r="2.2" fill="none" stroke="currentColor" strokeWidth="1.2" />
      </svg>
    )
  }
  if (icon === 'tab') {
    return (
      <svg viewBox="0 0 16 16" aria-hidden className="h-3.5 w-3.5">
        <rect x="1.5" y="3.5" width="13" height="10" rx="1.5" fill="none" stroke="currentColor" strokeWidth="1.2" />
        <path d="M1.5 6.5h13" stroke="currentColor" strokeWidth="1.2" />
      </svg>
    )
  }
  return (
    <svg viewBox="0 0 16 16" aria-hidden className="h-3.5 w-3.5">
      <rect x="2" y="2" width="8" height="10" rx="1.5" fill="none" stroke="currentColor" strokeWidth="1.2" />
      <rect x="6" y="5" width="8" height="9" rx="1.5" fill="none" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  )
}

/** The recruiter-side proctoring log, fading out as older events scroll away. */
function ProctoringPanel() {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-emerald-50 to-white p-5 sm:p-6">
      <span className="flex h-5 w-5 items-center justify-center rounded bg-slate-200">
        <span className="h-2 w-2 rounded-[1px] bg-slate-500" />
      </span>

      <p className="mt-6 text-xs font-medium text-slate-500">Proctoring</p>

      <div className="mt-3 rounded-lg bg-white/90 px-4 py-3 shadow-sm">
        <p className="flex items-center gap-2 text-xs font-medium text-slate-900">
          <span className="h-3 w-4 rounded-sm bg-rose-200" />
          Prospect has been <span className="font-semibold">flagged</span>
        </p>
        <p className="mt-1 text-[0.6rem] text-slate-500">
          <span className="font-semibold text-slate-700">6 suspect activities</span> has been logged
        </p>
      </div>

      <ul className="mt-4 space-y-3">
        {logRows.map((row, index) => (
          <li
            key={`${row.label}-${index}`}
            className="flex items-center gap-2 text-xs text-slate-500"
            style={{ opacity: 1 - index * 0.14 }}
          >
            <RowIcon icon={row.icon} />
            {row.label}
          </li>
        ))}
      </ul>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white to-transparent" />
    </div>
  )
}

function AntiCheatSection() {
  return (
    <section
      id={sections.antiCheat}
      className="relative scroll-mt-24 overflow-hidden bg-[#fafbff] px-6 py-20 lg:px-8 lg:py-28"
    >
      <Contours className="absolute -right-24 top-1/3 h-[32rem] w-[32rem] text-slate-200/60" />

      <div className="relative mx-auto max-w-5xl">
        <SectionHeading eyebrow={antiCheat.eyebrow} headline={antiCheat.headline} />

        <div className="mt-14 grid items-start gap-10 md:grid-cols-2 lg:gap-14">
          <ProctoringPanel />

          <div>
            <p className="text-[0.65rem] font-medium uppercase tracking-[0.18em] text-slate-500">
              {antiCheat.label}
            </p>
            <hr className="mt-3 border-slate-300" />

            <p className="mt-4 text-xs leading-5 text-slate-600">{antiCheat.text}</p>

            <dl className="mt-6 space-y-4">
              {antiCheat.signals.map((signal) => (
                <div key={signal.number}>
                  <dt className="text-xs font-semibold text-slate-900">
                    <span className="mr-1 tabular-nums">{signal.number}</span>
                    {signal.title}
                  </dt>
                  <dd className="mt-0.5 text-xs leading-5 text-slate-600">{signal.text}</dd>
                </div>
              ))}
            </dl>

            <p className="mt-6 text-[0.65rem] italic leading-4 text-slate-500">{antiCheat.note}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AntiCheatSection
