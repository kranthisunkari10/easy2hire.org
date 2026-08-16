import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { cn } from '../../lib/cn'

export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode
  className?: string
  delay?: number
}) {
  return (
    <motion.div
      className={cn(className)}
      initial={{ opacity: 0, y: 16 }}
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
  align = 'center',
}: {
  eyebrow?: string
  title: string
  body?: string
  align?: 'center' | 'left'
}) {
  return (
    <div className={cn(align === 'center' && 'mx-auto max-w-[580px] text-center')}>
      {eyebrow ? (
        <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-gold-deep">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-[28px] font-semibold tracking-[-0.03em] text-label md:text-[34px]">
        {title}
      </h2>
      {body ? <p className="mt-3 text-[15px] leading-relaxed text-secondary">{body}</p> : null}
    </div>
  )
}

export function PageHero(props: { eyebrow?: string; title: string; body?: string }) {
  return (
    <section className="hero-bridge px-4 py-16">
      <SectionHead {...props} />
    </section>
  )
}
