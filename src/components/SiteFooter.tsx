import { Link } from 'react-router-dom'
import { backofficeUrl, caseUrl, platformPages, productDescriptor, supportEmail } from '../content/global'

function SiteFooter() {
  return (
    <footer className="px-6 pb-12 lg:px-8">
      <div className="mx-auto max-w-6xl rounded-3xl border border-white/70 bg-white/70 px-8 py-8 text-sm text-slate-500 backdrop-blur">
        <div className="grid gap-8 md:grid-cols-[1.2fr_0.9fr_0.7fr_0.7fr]">
          <div>
            <p className="text-sm font-semibold tracking-[0.24em] text-slate-900">LiMA</p>
            <p className="mt-4 max-w-xs leading-6">{productDescriptor}</p>
            <a
              href={`mailto:${supportEmail}`}
              className="mt-4 inline-block text-slate-600 transition hover:text-slate-900"
            >
              {supportEmail}
            </a>
          </div>

          <div>
            <p className="font-semibold text-slate-900">Platform</p>
            <ul className="mt-4 space-y-2">
              {platformPages.map((page) => (
                <li key={page.to}>
                  <Link to={page.to} className="transition hover:text-slate-900">
                    {page.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-semibold text-slate-900">Company</p>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/about" className="transition hover:text-slate-900">
                  About us
                </Link>
              </li>
              <li>
                <Link to="/faq" className="transition hover:text-slate-900">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-semibold text-slate-900">Resources</p>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/resources" className="transition hover:text-slate-900">
                  Insights & cases
                </Link>
              </li>
              <li>
                <Link
                  to="/resources/articles/skills-based-hiring"
                  className="transition hover:text-slate-900"
                >
                  Skills-based hiring
                </Link>
              </li>
              <li>
                <Link to={caseUrl} className="transition hover:text-slate-900">
                  European fintech
                </Link>
              </li>
              <li>
                <a
                  href={backofficeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="transition hover:text-slate-900"
                >
                  Log in
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default SiteFooter
