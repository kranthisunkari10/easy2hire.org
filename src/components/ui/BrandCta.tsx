import { Button } from './Button'
import { getStartedPath } from '../../config/routes'

export function BrandCta() {
  return (
    <div className="relative overflow-hidden rounded-[22px] bg-navy px-6 py-10 text-center text-white">
      <div className="pointer-events-none absolute -right-10 -top-16 h-48 w-48 rounded-full bg-orange/25 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -left-10 h-48 w-48 rounded-full bg-blue/20 blur-3xl" />
      <p className="relative text-[11px] font-semibold uppercase tracking-[0.12em] text-orange">
        Get hired
      </p>
      <h2 className="relative mt-1 text-[22px] font-semibold tracking-[-0.03em] md:text-[24px]">
        You grow the skill. We open the door.
      </h2>
      <p className="relative mx-auto mt-2 max-w-[46ch] text-[13.5px] text-white/70">
        Start Silver if you want control, or Gold if you want us to apply every day.
      </p>
      <div className="relative mt-4 flex flex-wrap justify-center gap-2">
        <Button to={getStartedPath('gold')}>Start Gold</Button>
        <Button
          to={getStartedPath('silver')}
          variant="ghost"
          className="bg-white/10 text-white hover:bg-white/16"
        >
          Start Silver
        </Button>
      </div>
    </div>
  )
}
