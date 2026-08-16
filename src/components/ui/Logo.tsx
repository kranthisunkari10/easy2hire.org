import { publicAsset } from '../../lib/urls'
import { cn } from '../../lib/cn'

export function Logo({
  size = 36,
  withWordmark = true,
  className,
}: {
  size?: number
  withWordmark?: boolean
  className?: string
}) {
  return (
    <span className={cn('inline-flex items-center gap-2.5', className)}>
      <img
        src={publicAsset('talentbridge.png')}
        alt={withWordmark ? '' : 'TalentBridge'}
        width={size}
        height={size}
        className="object-contain"
      />
      {withWordmark ? (
        <span className="text-[16px] font-semibold tracking-[-0.03em] text-navy">
          Talent<span className="text-gold">Bridge</span>
        </span>
      ) : null}
    </span>
  )
}

export function CheckIcon({ gold = false }: { gold?: boolean }) {
  const fill = gold ? '#c9a227' : '#007aff'
  return (
    <svg viewBox="0 0 16 16" className="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden="true">
      <circle cx="8" cy="8" r="8" fill={fill} opacity="0.14" />
      <path
        d="M4.6 8.2 7 10.5l4.4-5"
        fill="none"
        stroke={fill}
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
