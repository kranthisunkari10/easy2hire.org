import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { NAV } from '../data/site'
import { Button } from './Button'
import { cn } from '../lib/cn'

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50">
      <div className="glass border-b border-black/[0.06]">
        <div className="mx-auto flex h-11 max-w-[1080px] items-center justify-between px-4">
          <Link to="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
            <img src="/easy2hire.png" alt="Easy2Hire" className="h-7 w-7 object-contain" />
            <span className="text-[13px] font-semibold tracking-[-0.03em] text-label">
              Easy2Hire
            </span>
          </Link>

          <nav className="hidden items-center gap-0.5 md:flex">
            {NAV.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  cn(
                    'rounded-full px-2.5 py-1 text-[12.5px] text-secondary transition-colors hover:text-label',
                    isActive && 'bg-black/[0.05] text-label',
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Button to="/get-started" className="hidden sm:inline-flex">
              Get started
            </Button>
            <button
              type="button"
              className="flex h-8 w-8 items-center justify-center rounded-full bg-black/[0.05] md:hidden"
              aria-label={open ? 'Close menu' : 'Open menu'}
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
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.2 }}
            className="glass border-b border-black/[0.06] md:hidden"
          >
            <nav className="mx-auto flex max-w-[1080px] flex-col gap-0.5 px-4 py-3">
              {NAV.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-2 py-2 text-[14px] text-label"
                >
                  {item.label}
                </NavLink>
              ))}
              <Button to="/get-started" className="mt-1 w-full" onClick={() => setOpen(false)}>
                Get started
              </Button>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  )
}
