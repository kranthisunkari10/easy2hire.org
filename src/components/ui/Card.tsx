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
    <div className={cn('rounded-[16px] border border-black/[0.05] bg-white p-4 card-shadow', className)}>
      {children}
    </div>
  )
}
