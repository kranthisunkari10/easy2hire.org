import { Link } from 'react-router-dom'
import { GOLD, SILVER } from '../data/site'
import { Button } from './Button'
import { Reveal } from './Reveal'
import { cn } from '../lib/cn'

type Plan = typeof GOLD | typeof SILVER

export function Pricing({ compact = false }: { compact?: boolean }) {
  return (
    <div className="mx-auto grid max-w-[860px] gap-3 md:grid-cols-2">
      <PlanCard plan={SILVER} delay={0.05} compact={compact} />
      <PlanCard plan={GOLD} delay={0.12} compact={compact} />
    </div>
  )
}

function PlanCard({ plan, delay, compact }: { plan: Plan; delay: number; compact: boolean }) {
  const popular = 'popular' in plan && plan.popular
  const features = compact ? plan.features.slice(0, 6) : plan.features

  return (
    <Reveal delay={delay}>
      <article
        className={cn(
          'relative h-full rounded-[20px] border bg-white p-5 card-shadow',
          popular ? 'border-orange/40' : 'border-black/[0.05]',
        )}
      >
        {popular ? (
          <span className="absolute -top-2.5 left-5 rounded-full bg-orange px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.08em] text-white">
            Most popular
          </span>
        ) : null}
        <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-secondary">
          {plan.eyebrow}
        </p>
        <h3 className="mt-1 text-[18px] font-semibold tracking-[-0.03em]">{plan.name}</h3>
        <p className="mt-1 text-[13px] leading-relaxed text-secondary">{plan.blurb}</p>
        <p className="mt-3 flex items-baseline gap-1">
          <span className="text-[28px] font-semibold tracking-[-0.04em]">${plan.price}</span>
          <span className="text-[12px] text-tertiary">/ month</span>
        </p>
        <ul className="mt-3 space-y-1.5">
          {features.map((f) => (
            <li key={f} className="flex gap-2 text-[12.5px] text-secondary">
              <Check />
              <span>{f}</span>
            </li>
          ))}
        </ul>
        <div className="mt-4 flex items-center gap-2">
          <Button to={`/get-started?plan=${plan.id}`} variant={popular ? 'primary' : 'dark'}>
            Choose {plan.name}
          </Button>
          {compact ? (
            <Link to="/services" className="text-[12.5px] font-medium text-blue">
              Full details
            </Link>
          ) : null}
        </div>
      </article>
    </Reveal>
  )
}

function Check() {
  return (
    <svg viewBox="0 0 16 16" className="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden="true">
      <circle cx="8" cy="8" r="8" fill="#ff7a1a" opacity="0.15" />
      <path
        d="M4.6 8.2 7 10.5l4.4-5"
        fill="none"
        stroke="#ff7a1a"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
