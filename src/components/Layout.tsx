import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import PlatformSubNav from './PlatformSubNav'
import SiteFooter from './SiteFooter'
import SiteHeader from './SiteHeader'

function Layout() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [pathname])

  return (
    <div className="flex min-h-screen flex-col bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.96),rgba(245,247,251,0.92),rgba(238,241,248,0.88))] text-slate-900">
      <div className="sticky top-0 z-30">
        <SiteHeader />
        {pathname.startsWith('/platform') && <PlatformSubNav />}
      </div>

      <main className="flex-1">
        <Outlet />
      </main>

      <SiteFooter />
    </div>
  )
}

export default Layout
