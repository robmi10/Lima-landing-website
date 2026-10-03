import { useState } from 'react'
import { Link } from 'react-router-dom'
import { resources, sections } from '../content/site'

function ResourcesSection() {
  const [featured, ...rest] = resources.articles
  const [expanded, setExpanded] = useState(false)
  const shown = expanded ? rest : rest.slice(0, resources.visibleCards)

  if (!featured) return null

  return (
    <section id={sections.resources} className="scroll-mt-24 bg-[#fafbff] px-6 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-5xl">
        <p className="text-center text-xl font-normal text-slate-900 sm:text-2xl">{resources.eyebrow}</p>

        <div className="mt-16 grid items-center gap-10 md:grid-cols-2">
          <img
            src={featured.heroImage}
            alt={featured.heroAlt}
            width={848}
            height={520}
            className="h-auto w-full object-cover"
          />

          <div className="text-center md:text-right">
            <h3 className="text-2xl tracking-tight text-slate-950 sm:text-3xl">{featured.title}</h3>
            <p className="mt-3 text-xs leading-5 text-slate-600 md:ml-auto md:max-w-sm">{featured.dek}</p>
            <Link
              to={featured.to}
              className="mt-6 inline-block text-xs text-emerald-800 underline underline-offset-4 transition hover:text-emerald-950"
            >
              Read article
            </Link>
          </div>
        </div>

        {shown.length > 0 && (
          <div className="mt-14 grid gap-x-8 gap-y-10 border-t border-slate-200 pt-8 sm:grid-cols-2 lg:grid-cols-4">
            {shown.map((article) => (
              <article key={article.slug} className="lg:border-r lg:border-slate-200 lg:pr-8 lg:last:border-r-0">
                <h4 className="text-xs font-semibold leading-4 text-slate-950">
                  <Link to={article.to} className="transition hover:text-emerald-800">
                    {article.title}
                  </Link>
                </h4>
                <p className="mt-2 flex items-center gap-3 text-[0.6rem] uppercase tracking-[0.12em] text-slate-400">
                  <span>{article.category}</span>
                  <span className="normal-case tracking-normal">{article.readMinutes} min</span>
                </p>
                <p className="mt-2 text-[0.65rem] leading-4 text-slate-600">{article.dek}</p>
              </article>
            ))}

            {!expanded && rest.length > resources.visibleCards && (
              <div className="flex items-center lg:justify-center">
                <button
                  type="button"
                  onClick={() => setExpanded(true)}
                  className="text-xs text-slate-900 underline underline-offset-4 transition hover:text-emerald-800"
                >
                  More resources
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  )
}

export default ResourcesSection
