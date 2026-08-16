import { Link, NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import { NAV, ROUTES } from '../config/routes'
import { scrollToTop } from '../hooks/useLenis'
import { Button } from './ui/Button'
import { Logo } from './ui/Logo'
import { cn } from '../lib/cn'

export function MobileMenu({ onClose }: { onClose: () => void }) {
  return (
    <motion.div
      className="fixed inset-0 z-[80] flex flex-col bg-white md:hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex h-16 items-center justify-between border-b border-line px-4">
        <Link
          to={ROUTES.home}
          onClick={() => {
            onClose()
            scrollToTop()
          }}
          className="flex items-center"
        >
          <Logo size={34} />
        </Link>
        <button
          type="button"
          onClick={onClose}
          className="flex h-11 w-11 items-center justify-center rounded-full bg-fill"
          aria-label="Close menu"
        >
          <span className="relative block h-3.5 w-3.5">
            <span className="absolute left-0 top-1.5 block h-px w-full rotate-45 bg-label" />
            <span className="absolute left-0 top-1.5 block h-px w-full -rotate-45 bg-label" />
          </span>
        </button>
      </div>

      <motion.nav
        className="flex flex-1 flex-col px-4 pt-4"
        aria-label="Mobile"
        initial="hidden"
        animate="show"
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.045 } },
        }}
      >
        {NAV.map((item) => (
          <motion.div
            key={item.to}
            variants={{
              hidden: { opacity: 0, y: 8 },
              show: { opacity: 1, y: 0 },
            }}
          >
            <NavLink
              to={item.to}
              end={item.end}
              onClick={() => {
                onClose()
                if (item.to === ROUTES.home) scrollToTop()
              }}
              className={({ isActive }) =>
                cn(
                  'flex items-center justify-between border-b border-line py-4 text-[18px] font-medium tracking-[-0.03em]',
                  isActive ? 'text-blue' : 'text-label',
                )
              }
            >
              {({ isActive }) => (
                <>
                  {item.label}
                  <Chevron className={isActive ? 'text-blue' : 'text-tertiary'} />
                </>
              )}
            </NavLink>
          </motion.div>
        ))}
      </motion.nav>

      <div className="border-t border-line p-4 pb-[max(1rem,env(safe-area-inset-bottom))]">
        <Button to={ROUTES.getStarted} variant="gold" className="w-full py-3 text-[15px]" onClick={onClose}>
          Begin
        </Button>
        <Button to={ROUTES.contact} variant="ghost" className="mt-2 w-full py-3 text-[15px]" onClick={onClose}>
          Talk to the studio
        </Button>
      </div>
    </motion.div>
  )
}

function Chevron({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" className={cn('h-4 w-4', className)} aria-hidden="true">
      <path
        d="M6 3.5 11 8l-5 4.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
