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
          'nav-link px-3 py-1.5 text-[13.5px] font-medium transition-colors duration-200',
          isActive ? 'is-active text-blue' : 'text-label hover:text-blue',
        )
      }
    >
      {children}
    </NavLink>
  )
}
