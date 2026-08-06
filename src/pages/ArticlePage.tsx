import { Link, useParams } from 'react-router-dom'
import FinalCta from '../components/FinalCta'
import { getArticleBySlug } from '../content/articles'
import { usePageMeta } from '../hooks/usePageMeta'

function formatDate(date: string) {
  return new Intl.DateTimeFormat('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(`${date}T00:00:00`))
}

function ArticlePage() {
  const { slug = '' } = useParams()
  const article = getArticleBySlug(slug)

  usePageMeta(
    article?.meta ?? {
      title: 'Article not found | LiMA',
      description: 'The article you were looking for could not be found.',
    },
  )

  if (!article) {
    return (
      <section className="px-6 pb-16 pt-20 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-3xl font-semibold tracking-tight text-slate-950">Article not found</h1>
          <p className="mt-4 text-base leading-7 text-slate-600">
            The link may be outdated. Browse the latest insights on the Resources page.
          </p>
          <Link
            to="/resources"
            className="mt-8 inline-block rounded-xl border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:border-slate-300"
          >
            Back to Resources
          </Link>
        </div>
      </section>
    )
  }

  return (
    <>
      <article className="px-6 pb-10 pt-12 lg:px-8 lg:pt-16">
        <header className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">{article.category}</p>
          <h1 className="mt-5 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl lg:text-[2.75rem] lg:leading-tight">
            {article.title}
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">{article.dek}</p>
          <p className="mt-4 text-sm text-slate-500">{formatDate(article.date)}</p>
        </header>

        <div className="mx-auto mt-10 max-w-5xl">
          <img
            src={article.heroImage}
            alt={article.heroAlt}
            width={1600}
            height={1066}
            className="h-auto w-full rounded-2xl object-cover"
          />
        </div>

        <div className="mx-auto mt-12 max-w-2xl">
          {article.sections.map((section) => (
            <section key={section.heading ?? section.paragraphs[0]} className="mt-10 first:mt-0">
              {section.heading && (
                <h2 className="text-2xl font-semibold tracking-tight text-slate-950">{section.heading}</h2>
              )}
              <div className={section.heading ? 'mt-4 space-y-4' : 'space-y-4'}>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="text-base leading-7 text-slate-700">
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>
          ))}

          {article.takeaway && (
            <section className="mt-12 rounded-2xl border border-slate-200 bg-white/80 px-6 py-6">
              <h2 className="text-xl font-semibold tracking-tight text-slate-950">{article.takeaway.title}</h2>
              <p className="mt-3 text-base leading-7 text-slate-700">{article.takeaway.text}</p>
            </section>
          )}

          {article.reflection && (
            <section className="mt-10">
              <h2 className="text-2xl font-semibold tracking-tight text-slate-950">{article.reflection.title}</h2>
              <p className="mt-4 text-lg leading-8 text-slate-800">{article.reflection.text}</p>
            </section>
          )}

          {article.faq && article.faq.length > 0 && (
            <section className="mt-12 border-t border-slate-200 pt-10">
              <h2 className="text-2xl font-semibold tracking-tight text-slate-950">Frequently asked questions</h2>
              <div className="mt-6 space-y-6">
                {article.faq.map((item) => (
                  <div key={item.question}>
                    <h3 className="text-base font-semibold text-slate-950">{item.question}</h3>
                    <p className="mt-2 text-base leading-7 text-slate-600">{item.answer}</p>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </article>

      {article.finalCta && <FinalCta {...article.finalCta} />}
    </>
  )
}

export default ArticlePage
