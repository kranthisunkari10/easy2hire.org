import { Button } from './Button'
import { getStartedPath } from '../../config/routes'

export function BrandCta() {
  return (
    <div className="cta-panel relative overflow-hidden rounded-[18px] px-6 py-14 text-center text-white">
      <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/80">
        Cross the bridge
      </p>
      <h2 className="mt-3 text-[28px] font-semibold tracking-[-0.03em] text-white md:text-[34px]">
        Stay in study mode. We put you on the shortlist.
      </h2>
      <p className="mx-auto mt-3 max-w-[46ch] text-[15px] text-white/85">
        Start Silver if you want control of every send, or Gold if you want specialists applying every day.
      </p>
      <div className="relative z-10 mt-6 flex flex-wrap justify-center gap-2">
        <Button to={getStartedPath('gold')} variant="gold">
          Start Gold
        </Button>
        <Button to={getStartedPath('silver')} variant="inverse">
          Start Silver
        </Button>
      </div>
    </div>
  )
}
