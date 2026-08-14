import { Button } from './Button'
import { getStartedPath } from '../../config/routes'

export function BrandCta() {
  return (
    <div className="cta-aurora relative overflow-hidden rounded-[22px] px-6 py-12 text-center text-white">
      <div className="pointer-events-none absolute -right-8 top-0 h-40 w-40 rounded-full bg-white/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-10 -left-6 h-36 w-36 rounded-full bg-black/10 blur-3xl" />
      <p className="relative text-[12px] font-semibold uppercase tracking-[0.14em] text-white">
        Get hired
      </p>
      <h2 className="relative mt-2 text-[26px] font-semibold tracking-[-0.03em] text-white md:text-[30px]">
        You grow the skill. We open the door.
      </h2>
      <p className="relative mx-auto mt-2 max-w-[46ch] text-[14px] text-white">
        Start Silver if you want control, or Gold if you want us to apply every day.
      </p>
      <div className="relative z-10 mt-5 flex flex-wrap justify-center gap-2">
        <Button to={getStartedPath('gold')}>Start Gold</Button>
        <Button to={getStartedPath('silver')} variant="inverse" className="btn-on-color">
          Start Silver
        </Button>
      </div>
    </div>
  )
}
