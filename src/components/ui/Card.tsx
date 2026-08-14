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
  return <Tag className={cn('mx-auto max-w-[1080px] px-4', className)}>{children}</Tag>
}

export function Card({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div className={cn('rounded-[16px] border border-black/[0.05] bg-white p-4 card-shadow transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(15,23,42,0.1)]', className)}>
      {children}
    </div>
  )
}
