import { Link } from 'react-router-dom'
import { demoCta } from '../content/global'
import type { Hero } from '../content/types'

function PageHero({ eyebrow, headline, text, secondaryCta }: Hero) {
  return (
    <section className="px-6 pb-10 pt-12 lg:px-8 lg:pt-16">
      <div className="mx-auto max-w-3xl text-center">
        {eyebrow && <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">{eyebrow}</p>}
        <h1 className={`text-3xl tracking-tight text-slate-950 sm:text-4xl lg:text-5xl ${eyebrow ? 'mt-4' : ''}`}>
          {headline}
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600">{text}</p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={demoCta.href}
            className="rounded-xl border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:border-slate-300"
          >
            {demoCta.label}
          </a>
          {secondaryCta && (
            <Link
              to={secondaryCta.href}
              className="rounded-xl px-6 py-3 text-sm font-semibold text-slate-600 transition hover:text-slate-950"
            >
              {secondaryCta.label}
            </Link>
          )}
        </div>
      </div>
    </section>
  )
}

export default PageHero
