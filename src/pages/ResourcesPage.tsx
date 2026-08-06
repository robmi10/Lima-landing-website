import { Link } from 'react-router-dom'
import { PageBody } from '../components/ContentSection'
import FinalCta from '../components/FinalCta'
import PageHero from '../components/PageHero'
import { articleCards, caseCards, resourcesContent } from '../content/resources'
import { usePageMeta } from '../hooks/usePageMeta'

function formatDate(date: string) {
  return new Intl.DateTimeFormat('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  }).format(new Date(`${date}T00:00:00`))
}

function ResourcesPage() {
  usePageMeta(resourcesContent.meta)

  return (
    <>
      <PageHero {...resourcesContent.hero} />

      <PageBody>
        <section>
          <h2 className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Insights</h2>
          <div className="mt-5 space-y-4">
            {articleCards.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="block rounded-3xl border border-white/70 bg-white/75 p-6 shadow-[0_30px_80px_-50px_rgba(15,23,42,0.35)] backdrop-blur transition hover:border-slate-200 md:p-8"
              >
                <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  <span>{item.category}</span>
                  <span aria-hidden="true">·</span>
                  <span>{formatDate(item.date)}</span>
                </div>
                <h3 className="mt-4 text-2xl font-semibold tracking-tight text-slate-950">{item.title}</h3>
                <p className="mt-3 text-base leading-7 text-slate-600">{item.dek}</p>
                <span className="mt-6 inline-block text-sm font-semibold text-slate-900">Read the article</span>
              </Link>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Cases</h2>
          <div className="mt-5 space-y-4">
            {caseCards.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="block rounded-3xl border border-white/70 bg-white/75 p-6 shadow-[0_30px_80px_-50px_rgba(15,23,42,0.35)] backdrop-blur transition hover:border-slate-200 md:p-8"
              >
                <span className="inline-flex items-center rounded-xl bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                  {item.label}
                </span>
                <h3 className="mt-5 text-2xl font-semibold tracking-tight text-slate-950">{item.title}</h3>
                <p className="mt-3 text-base leading-7 text-slate-600">{item.text}</p>
                <span className="mt-6 inline-block text-sm font-semibold text-slate-900">Read the case</span>
              </Link>
            ))}
          </div>
        </section>
      </PageBody>

      <FinalCta {...resourcesContent.finalCta} />
    </>
  )
}

export default ResourcesPage
