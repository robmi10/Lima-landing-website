import { Link, useLocation } from 'react-router-dom'
import limaLogo from '../assets/lima-logo.svg'
import { demoCta, navItems } from '../content/site'

function SiteHeader() {
  const { pathname } = useLocation()
  const onHome = pathname === '/'

  /**
   * On the home page the anchors scroll in place; from an article they have to
   * navigate back to "/" first, so they become router links.
   */
  function SectionLink({ to, label, className }: { to: string; label: string; className?: string }) {
    return onHome ? (
      <a href={to} className={className}>
        {label}
      </a>
    ) : (
      <Link to={`/${to}`} className={className}>
        {label}
      </Link>
    )
  }

  return (
    <header className="bg-[#f2f4f8]/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-5 lg:px-8">
        <Link to="/" className="flex items-center gap-2 text-slate-900">
          <img src={limaLogo} alt="" className="h-5 w-auto" />
          <span className="text-base font-semibold tracking-[0.12em]">LiMA</span>
        </Link>

        <nav className="hidden items-center gap-8 text-xs text-slate-600 md:flex">
          {navItems.map((item) => (
            <SectionLink
              key={item.to}
              to={item.to}
              label={item.label}
              className="transition hover:text-slate-950"
            />
          ))}
        </nav>

        <a
          href={demoCta.href}
          className="shrink-0 rounded-full bg-emerald-800 px-4 py-2 text-[0.7rem] font-medium text-white transition hover:bg-emerald-900"
        >
          {demoCta.label}
        </a>
      </div>

      <div className="md:hidden">
        <div className="flex gap-5 overflow-x-auto px-6 pb-3 text-xs text-slate-600">
          {navItems.map((item) => (
            <SectionLink key={item.to} to={item.to} label={item.label} className="whitespace-nowrap" />
          ))}
        </div>
      </div>
    </header>
  )
}

export default SiteHeader
