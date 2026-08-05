import { Link } from 'react-router-dom'
import { usePageMeta } from '../hooks/usePageMeta'

function NotFoundPage() {
  usePageMeta({
    title: 'Page not found | LiMA',
    description: 'The page you were looking for could not be found.',
  })

  return (
    <section className="px-6 pb-16 pt-20 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">404</p>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
          We could not find that page
        </h1>
        <p className="mt-5 text-base leading-7 text-slate-600">
          The link may be outdated or misspelled. Go back to the homepage or explore the platform.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            to="/"
            className="rounded-xl border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:border-slate-300"
          >
            Go to homepage
          </Link>
          <Link
            to="/platform"
            className="rounded-xl px-6 py-3 text-sm font-semibold text-slate-600 transition hover:text-slate-950"
          >
            Explore the platform
          </Link>
        </div>
      </div>
    </section>
  )
}

export default NotFoundPage
