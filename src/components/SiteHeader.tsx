import { Link, NavLink } from 'react-router-dom'
import limaLogo from '../assets/lima-logo.svg'
import { backofficeUrl, demoCta, navItems, platformPages } from '../content/global'

const linkBase = 'rounded-xl px-3 py-2 transition'

function navLinkClass({ isActive }: { isActive: boolean }) {
  return `${linkBase} ${isActive ? 'bg-slate-100 text-slate-950' : 'text-slate-600 hover:text-slate-950'}`
}

function SiteHeader() {
  return (
    <header className="relative z-20 border-b border-white/70 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4 lg:px-8">
        <Link to="/" className="flex items-center gap-2 text-sm font-semibold text-slate-900">
          <img src={limaLogo} alt="LiMA" className="h-6 w-auto" />
          <span className="text-[1.05rem] font-semibold tracking-[0.18em]">LiMA</span>
        </Link>

        <nav className="hidden items-center gap-1 text-sm md:flex">
          {navItems.map((item) =>
            item.to === '/platform' ? (
              <div key={item.to} className="group relative">
                <NavLink to={item.to} className={navLinkClass}>
                  {item.label}
                </NavLink>

                <div className="invisible absolute left-0 top-full w-64 pt-2 opacity-0 transition group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                  <div className="rounded-2xl border border-slate-200 bg-white p-2 shadow-lg shadow-slate-900/5">
                    {platformPages.map((page) => (
                      <Link
                        key={page.to}
                        to={page.to}
                        className="block rounded-xl px-3 py-2 text-sm text-slate-600 transition hover:bg-slate-50 hover:text-slate-950"
                      >
                        {page.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <NavLink key={item.to} to={item.to} className={navLinkClass} end={item.to === '/'}>
                {item.label}
              </NavLink>
            ),
          )}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={backofficeUrl}
            target="_blank"
            rel="noreferrer"
            className="hidden text-sm text-slate-600 transition hover:text-slate-950 sm:inline"
          >
            Log in
          </a>
          <a
            href={demoCta.href}
            className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-900 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            {demoCta.label}
          </a>
        </div>
      </div>

      <div className="border-t border-slate-100 md:hidden">
        <div className="flex gap-1 overflow-x-auto px-6 py-2 text-sm">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                `${linkBase} whitespace-nowrap ${isActive ? 'bg-slate-100 text-slate-950' : 'text-slate-600'}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      </div>
    </header>
  )
}

export default SiteHeader
