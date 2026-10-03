import limaLogo from '../assets/lima-logo.svg'
import { footer } from '../content/site'

function isInternal(to: string) {
  return to.startsWith('#')
}

function SiteFooter() {
  return (
    <footer className="bg-black px-6 py-14 text-slate-300 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_repeat(4,1fr)]">
          <div className="flex items-center gap-2 text-white">
            <img src={limaLogo} alt="" className="h-5 w-auto invert" />
            <span className="text-base font-semibold tracking-[0.12em]">LiMA</span>
          </div>

          {footer.columns.map((column) => (
            <div key={column.title}>
              <p className="text-[0.7rem] text-slate-500">{column.title}</p>
              <ul className="mt-3 space-y-2 text-[0.7rem]">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.to}
                      {...(isInternal(link.to) ? {} : { target: '_blank', rel: 'noreferrer' })}
                      className="transition hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-20 flex flex-col items-center justify-between gap-4 text-[0.65rem] text-slate-500 sm:flex-row">
          <p>{footer.copyright}</p>
          <p>{footer.madeIn}</p>
          <a href="#top" className="transition hover:text-white">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  )
}

export default SiteFooter
