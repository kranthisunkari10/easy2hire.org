import { Outlet } from 'react-router-dom'
import { Navbar } from './Navbar'
import { Footer } from './Footer'
import { useLenis } from '../hooks/useLenis'
import { useScrollToTop } from '../hooks/useScrollToTop'

export function Layout() {
  useLenis()
  useScrollToTop()
  return (
    <div className="flex min-h-svh flex-col">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
