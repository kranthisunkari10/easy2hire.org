import type { ReactNode } from 'react'
import { cn } from '../../lib/cn'

export function Container({
  children,
  className,
  as: Tag = 'div',
}: {
  children: ReactNode
  className?: string
  as?: 'div' | 'section' | 'article' | 'header' | 'footer'
}) {
  return <Tag className={cn('mx-auto max-w-[1120px] px-4', className)}>{children}</Tag>
}

export function Card({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div
      className={cn(
        'rounded-[10px] border border-line bg-elevated p-5 card-shadow',
        className,
      )}
    >
      {children}
    </div>
  )
}
