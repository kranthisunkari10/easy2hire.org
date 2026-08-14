import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { cn } from '../lib/cn'

type Props = {
  children: ReactNode
  className?: string
  delay?: number
}

export function Reveal({ children, className, delay = 0 }: Props) {
  return (
    <motion.div
      className={cn(className)}
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-48px' }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

export function SectionHead({
  eyebrow,
  title,
  body,
}: {
  eyebrow?: string
  title: string
  body?: string
}) {
  return (
    <div className="mx-auto max-w-[560px] text-center">
      {eyebrow ? (
        <p className="mb-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-orange">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-[22px] font-semibold tracking-[-0.03em] text-label md:text-[24px]">
        {title}
      </h2>
      {body ? (
        <p className="mt-2 text-[13.5px] leading-relaxed text-secondary">{body}</p>
      ) : null}
    </div>
  )
}
