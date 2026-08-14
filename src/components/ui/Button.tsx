import { Link } from 'react-router-dom'
import type { ReactNode } from 'react'
import { cn } from '../../lib/cn'
import { isHttpUrl } from '../../lib/urls'

const variants = {
  primary:
    'bg-orange text-white shadow-[0_1px_2px_rgba(255,122,26,0.35)] hover:bg-[#ff8a33] hover:shadow-[0_8px_18px_rgba(255,122,26,0.28)]',
  dark: 'bg-label text-white hover:bg-[#2c2c2e]',
  ghost: 'bg-black/[0.06] text-label hover:bg-black/[0.1]',
  blue: 'bg-blue text-white hover:bg-[#0066d6]',
  silver:
    'bg-[#eef1f6] text-[#1d1d1f] border border-[#c9ced8] hover:bg-[#e2e6ee] hover:border-[#b4bac6]',
  inverse:
    'bg-white text-[#1c2430] shadow-[0_2px_10px_rgba(0,0,0,0.14)] hover:bg-[#f3f4f6]',
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
  'inline-flex items-center justify-center rounded-full px-3.5 py-2 text-[13px] font-medium tracking-[-0.01em] transition-all duration-200 will-change-transform hover:scale-[1.04] active:scale-[0.98] disabled:pointer-events-none disabled:opacity-60'

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
