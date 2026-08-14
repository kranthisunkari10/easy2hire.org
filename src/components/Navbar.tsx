import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { NAV, ROUTES } from '../config/routes'
import { Button } from './ui/Button'
import { Logo } from './ui/Logo'
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

  return (
    <header className="sticky top-0 z-50">
      <div className={cn('header-bar', scrolled && 'is-scrolled')}>
        <div className="mx-auto flex h-14 max-w-[1080px] items-center justify-between px-4 md:h-16">
          <Link
            to={ROUTES.home}
            className="flex items-center transition-transform duration-200 hover:scale-[1.03]"
            onClick={() => setOpen(false)}
          >
            <Logo size={34} />
          </Link>

          <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
            {NAV.map((item) => (
              <HeaderLink
                key={item.to}
                to={item.to}
                end={item.end}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </HeaderLink>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Button to={ROUTES.getStarted} className="hidden sm:inline-flex">
              Get started
            </Button>
            <button
              type="button"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-black/[0.05] transition-colors hover:bg-orange/15 md:hidden"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              <span className="relative block h-3 w-3.5">
                <span
                  className={cn(
                    'absolute left-0 block h-px w-full bg-label transition-transform',
                    open ? 'top-1.5 rotate-45' : 'top-0.5',
                  )}
                />
                <span
                  className={cn(
                    'absolute left-0 top-1.5 block h-px w-full bg-label transition-opacity',
                    open && 'opacity-0',
                  )}
                />
                <span
                  className={cn(
                    'absolute left-0 block h-px w-full bg-label transition-transform',
                    open ? 'top-1.5 -rotate-45' : 'top-2.5',
                  )}
                />
              </span>
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="border-b border-black/[0.08] bg-white md:hidden"
          >
            <nav className="mx-auto flex max-w-[1080px] flex-col gap-1 px-4 py-3" aria-label="Mobile">
              {NAV.map((item) => (
                <HeaderLink
                  key={item.to}
                  to={item.to}
                  end={item.end}
                  onClick={() => setOpen(false)}
                  stacked
                >
                  {item.label}
                </HeaderLink>
              ))}
              <Button to={ROUTES.getStarted} className="mt-1 w-full" onClick={() => setOpen(false)}>
                Get started
              </Button>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  )
}

function HeaderLink({
  to,
  end,
  onClick,
  stacked,
  children,
}: {
  to: string
  end?: boolean
  onClick?: () => void
  stacked?: boolean
  children: string
}) {
  return (
    <NavLink
      to={to}
      end={end}
      onClick={onClick}
      className={({ isActive }) =>
        cn(
          'nav-link rounded-full px-3 py-1.5 text-[13.5px] font-medium text-secondary transition-all duration-200',
          stacked && 'px-3 py-2.5',
          !isActive && 'hover:bg-orange/10 hover:text-orange',
          isActive && 'is-active bg-orange text-white shadow-[0_4px_14px_rgba(255,122,26,0.28)]',
        )
      }
    >
      {children}
    </NavLink>
  )
}
