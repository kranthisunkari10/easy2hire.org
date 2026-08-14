import { Link } from 'react-router-dom'
import { cn } from '../lib/cn'
import type { ReactNode } from 'react'

type Props = {
  children: ReactNode
  to?: string
  href?: string
  onClick?: () => void
  type?: 'button' | 'submit'
  variant?: 'primary' | 'dark' | 'ghost' | 'blue'
  className?: string
}

export function Button({
  children,
  to,
  href,
  onClick,
  type = 'button',
  variant = 'primary',
  className,
}: Props) {
  const cls = cn(
    'inline-flex items-center justify-center rounded-full px-3.5 py-[7px] text-[13px] font-medium tracking-[-0.01em] transition-transform duration-200 will-change-transform hover:scale-[1.03] active:scale-[0.98]',
    variant === 'primary' && 'bg-orange text-white shadow-[0_1px_2px_rgba(255,122,26,0.35)]',
    variant === 'dark' && 'bg-label text-white',
    variant === 'ghost' && 'bg-black/[0.06] text-label',
    variant === 'blue' && 'bg-blue text-white',
    className,
  )

  if (to) {
    return (
      <Link to={to} className={cls} onClick={onClick}>
        {children}
      </Link>
    )
  }
  if (href) {
    return (
      <a href={href} className={cls} onClick={onClick}>
        {children}
      </a>
    )
  }
  return (
    <button type={type} className={cls} onClick={onClick}>
      {children}
    </button>
  )
}
