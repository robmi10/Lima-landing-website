import { NavLink } from 'react-router-dom'
import { platformPages } from '../content/global'

function PlatformSubNav() {
  return (
    <div className="relative z-10 border-b border-white/70 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl gap-1 overflow-x-auto px-6 py-3 text-sm lg:px-8">
        {platformPages.map((page) => (
          <NavLink
            key={page.to}
            to={page.to}
            end={page.to === '/platform'}
            className={({ isActive }) =>
              `whitespace-nowrap rounded-xl px-3 py-2 transition ${
                isActive ? 'bg-slate-100 text-slate-950' : 'text-slate-600 hover:text-slate-950'
              }`
            }
          >
            {page.label}
          </NavLink>
        ))}
      </div>
    </div>
  )
}

export default PlatformSubNav
