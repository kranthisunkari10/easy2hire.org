import { Link } from 'react-router-dom'
import { GOLD, PLANS, type Plan } from '../content/plans'
import { ROUTES, getStartedPath } from '../config/routes'
import { Button } from './ui/Button'
import { Card } from './ui/Card'
import { CheckIcon } from './ui/Logo'
import { Reveal } from './ui/Reveal'
import { cn } from '../lib/cn'

export function Pricing({ compact = false }: { compact?: boolean }) {
  return (
    <div className="mx-auto grid max-w-[860px] gap-3 md:grid-cols-2">
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
      <Card
        className={cn(
          'relative h-full rounded-[20px] p-5 text-label',
          popular ? 'border-orange/40' : 'plan-silver',
        )}
      >
        {popular ? (
          <span className="absolute -top-2.5 left-5 rounded-full bg-orange px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.08em] text-white">
            Most popular
          </span>
        ) : null}
        <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[#5c6370]">
          {plan.eyebrow}
        </p>
        <h3 className="mt-1 text-[20px] font-semibold tracking-[-0.03em] text-label">{plan.name}</h3>
        <p className="mt-1 text-[13px] leading-relaxed text-[#3a3f4b]">{plan.blurb}</p>
        <p className="mt-3 flex items-baseline gap-1">
          <span className="text-[28px] font-semibold tracking-[-0.04em]">${plan.price}</span>
          <span className="text-[12px] text-tertiary">/ month</span>
        </p>
        <ul className="mt-3 space-y-1.5">
          {features.map((f) => (
            <li key={f} className="flex gap-2 text-[12.5px] text-[#3a3f4b]">
              <CheckIcon />
              <span>{f}</span>
            </li>
          ))}
        </ul>
        <div className="mt-4 flex items-center gap-2">
          <Button to={getStartedPath(plan.id)} variant={popular ? 'primary' : 'silver'}>
            Choose {plan.name}
          </Button>
          {compact ? (
            <Link to={ROUTES.services} className="text-[12.5px] font-medium text-blue">
              Full details
            </Link>
          ) : null}
        </div>
      </Card>
    </Reveal>
  )
}
