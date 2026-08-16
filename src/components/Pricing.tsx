import { Link } from 'react-router-dom'
import { GOLD, PLANS, type Plan } from '../content/plans'
import { ROUTES, getStartedPath } from '../config/routes'
import { Button } from './ui/Button'
import { CheckIcon } from './ui/Logo'
import { Reveal } from './ui/Reveal'
import { cn } from '../lib/cn'

export function Pricing({ compact = false }: { compact?: boolean }) {
  return (
    <div className="mx-auto grid max-w-[920px] gap-4 md:grid-cols-2">
      {PLANS.map((plan, i) => (
        <PlanCard key={plan.id} plan={plan} delay={0.05 + i * 0.07} compact={compact} />
      ))}
    </div>
  )
}

function PlanCard({ plan, delay, compact }: { plan: Plan; delay: number; compact: boolean }) {
  const popular = plan.id === GOLD.id
  const features = compact ? plan.features.slice(0, 6) : plan.features

  return (
    <Reveal delay={delay}>
      <article
        className={cn(
          'relative h-full rounded-[18px] border p-6',
          popular ? 'plan-gold' : 'plan-silver',
        )}
      >
        {popular ? (
          <span className="absolute -top-2.5 left-6 rounded-full bg-gold px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-label">
            Most chosen
          </span>
        ) : null}
        <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-gold-deep">
          {plan.eyebrow}
        </p>
        <h3 className="mt-2 text-[26px] font-semibold tracking-[-0.03em] text-label">{plan.name}</h3>
        <p className="mt-2 text-[14px] leading-relaxed text-secondary">{plan.blurb}</p>
        <p className="mt-4 flex items-baseline gap-1">
          <span className="text-[34px] font-semibold tracking-[-0.04em] text-label">${plan.price}</span>
          <span className="text-[13px] text-tertiary">/ month</span>
        </p>
        <ul className="mt-4 space-y-2">
          {features.map((f) => (
            <li key={f} className="flex gap-2 text-[13.5px] text-secondary">
              <CheckIcon gold={popular} />
              <span>{f}</span>
            </li>
          ))}
        </ul>
        <div className="mt-6 flex items-center gap-3">
          <Button to={getStartedPath(plan.id)} variant={popular ? 'gold' : 'primary'}>
            Choose {plan.name}
          </Button>
          {compact ? (
            <Link to={ROUTES.services} className="text-[13px] font-medium text-blue">
              Full details
            </Link>
          ) : null}
        </div>
      </article>
    </Reveal>
  )
}
