import { publicAsset } from '../../lib/urls'
import { cn } from '../../lib/cn'

export function Logo({
  size = 28,
  withWordmark = true,
  className,
}: {
  size?: number
  withWordmark?: boolean
  className?: string
}) {
  return (
    <span className={cn('inline-flex items-center gap-2', className)}>
      <img
        src={publicAsset('easy2hire.png')}
        alt={withWordmark ? '' : 'Easy2Hire'}
        width={size}
        height={size}
        className="object-contain"
      />
      {withWordmark ? (
        <span className="text-[13px] font-semibold tracking-[-0.03em] text-label">Easy2Hire</span>
      ) : null}
    </span>
  )
}

export function CheckIcon() {
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
