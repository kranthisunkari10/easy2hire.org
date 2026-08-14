import { NavLink } from 'react-router-dom'
import { ROUTES } from '../config/routes'
import { scrollToTop } from '../hooks/useLenis'
import { cn } from '../lib/cn'

export function HeaderLink({
  to,
  end,
  children,
}: {
  to: string
  end?: boolean
  children: string
}) {
  return (
    <NavLink
      to={to}
      end={end}
      onClick={() => {
        if (to === ROUTES.home) scrollToTop()
      }}
      className={({ isActive }) =>
        cn(
          'nav-link rounded-full px-3 py-1.5 text-[13.5px] font-medium text-secondary transition-all duration-200',
          !isActive && 'hover:bg-orange/10 hover:text-orange',
          isActive && 'is-active bg-orange text-white shadow-[0_4px_14px_rgba(255,122,26,0.28)]',
        )
      }
    >
      {children}
    </NavLink>
  )
}
