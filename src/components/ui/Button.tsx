import { Link } from 'react-router-dom'
import type { ReactNode } from 'react'
import { cn } from '../../lib/cn'
import { isHttpUrl } from '../../lib/urls'

const variants = {
  primary: 'bg-blue text-white hover:bg-blue-deep',
  gold: 'bg-gold text-label hover:bg-gold-deep hover:text-white',
  dark: 'bg-navy text-white hover:bg-navy-deep',
  ghost: 'border border-blue/25 bg-white text-blue hover:bg-blue/5',
  inverse: 'bg-white text-blue hover:bg-fill',
  silver: 'border border-line bg-fill text-label hover:bg-white',
} as const

type Variant = keyof typeof variants

type Props = {
  children: ReactNode
  to?: string
  href?: string
  variant?: Variant
  className?: string
  type?: 'button' | 'submit'
  disabled?: boolean
  onClick?: () => void
}

const baseClass =
  'inline-flex items-center justify-center rounded-full px-4 py-2 text-[13.5px] font-medium tracking-[-0.01em] transition-colors duration-200 disabled:pointer-events-none disabled:opacity-60'

export function Button({
  children,
  to,
  href,
  onClick,
  type = 'button',
  variant = 'primary',
  className,
  disabled,
}: Props) {
  const cls = cn(baseClass, variants[variant], className)

  if (to) {
    return (
      <Link to={to} className={cls} onClick={onClick}>
        {children}
      </Link>
    )
  }

  if (href) {
    const external = isHttpUrl(href)
    return (
      <a
        href={href}
        className={cls}
        onClick={onClick}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {children}
      </a>
    )
  }

  return (
    <button type={type} className={cls} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  )
}
