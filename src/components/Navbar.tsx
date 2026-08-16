import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { NAV, ROUTES } from '../config/routes'
import { getLenis, scrollToTop } from '../hooks/useLenis'
import { Button } from './ui/Button'
import { Logo } from './ui/Logo'
import { MobileMenu } from './MobileMenu'
import { HeaderLink } from './HeaderLink'
import { cn } from '../lib/cn'

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 6)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const lenis = getLenis()
    if (open) {
      document.body.style.overflow = 'hidden'
      lenis?.stop()
    } else {
      document.body.style.overflow = ''
      lenis?.start()
    }
    return () => {
      document.body.style.overflow = ''
      lenis?.start()
    }
  }, [open])

  return (
    <header className="sticky top-0 z-50">
      <div className={cn('header-bar', scrolled && 'is-scrolled')}>
        <div className="mx-auto flex h-16 max-w-[1120px] items-center justify-between px-4">
          <Link
            to={ROUTES.home}
            className="flex items-center"
            onClick={() => {
              setOpen(false)
              scrollToTop()
            }}
          >
            <Logo size={36} />
          </Link>

          <nav className="hidden items-center gap-0.5 md:flex" aria-label="Primary">
            {NAV.map((item) => (
              <HeaderLink key={item.to} to={item.to} end={item.end}>
                {item.label}
              </HeaderLink>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Button to={ROUTES.getStarted} variant="gold" className="hidden sm:inline-flex">
              Begin
            </Button>
            <button
              type="button"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-fill text-label md:hidden"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              <span className="relative block h-3 w-[18px]">
                <span
                  className={cn(
                    'absolute left-0 block h-[1.5px] w-full bg-label transition-transform',
                    open ? 'top-[5px] rotate-45' : 'top-0.5',
                  )}
                />
                <span
                  className={cn(
                    'absolute left-0 top-[5px] block h-[1.5px] w-full bg-label transition-opacity',
                    open && 'opacity-0',
                  )}
                />
                <span
                  className={cn(
                    'absolute left-0 block h-[1.5px] w-full bg-label transition-transform',
                    open ? 'top-[5px] -rotate-45' : 'top-[9px]',
                  )}
                />
              </span>
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>{open ? <MobileMenu onClose={() => setOpen(false)} /> : null}</AnimatePresence>
    </header>
  )
}
