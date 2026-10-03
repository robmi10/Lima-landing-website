import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import SiteFooter from './SiteFooter'
import SiteHeader from './SiteHeader'

function Layout() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      // Arriving at "/#faq" from an article: wait for the sections to mount.
      const target = document.querySelector(hash)
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' })
        return
      }
    }
    window.scrollTo({ top: 0 })
  }, [pathname, hash])

  return (
    <div id="top" className="flex min-h-screen flex-col bg-[#f2f4f8] text-slate-900">
      <div className="sticky top-0 z-30">
        <SiteHeader />
      </div>

      <main className="flex-1">
        <Outlet />
      </main>

      <SiteFooter />
    </div>
  )
}

export default Layout
