import { Link } from 'react-router-dom'
import { STEPS } from '../content/copy'
import { ROUTES } from '../config/routes'
import { Button } from '../components/ui/Button'
import { PageHero, Reveal } from '../components/ui/Reveal'
import { Seo } from '../lib/seo'

export function HowItWorks() {
  return (
    <>
      <Seo
        title="How it works — TalentBridge"
        description="Share your goals, get tailored ATS resumes, apply or let us apply, then interview and certify with guided support."
      />
      <PageHero
        eyebrow="How it works"
        title="Four stations. No mystery."
        body="Whether you choose Silver or Gold, the path is the same: align, tailor, apply, then interview with support."
      />
      <section className="mx-auto max-w-[720px] px-4 py-14">
        <ol className="relative space-y-6 border-l border-gold/50 pl-7">
          {STEPS.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.05}>
              <li className="relative">
                <span className="absolute -left-[35px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full border border-gold bg-paper">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                </span>
                <p className="text-[11px] font-semibold tracking-[0.16em] text-gold-deep">{s.n}</p>
                <h2 className="mt-1 text-[22px] font-semibold tracking-[-0.03em] text-label">
                  {s.title}
                </h2>
                <p className="mt-2 text-[15px] leading-relaxed text-secondary">{s.body}</p>
              </li>
            </Reveal>
          ))}
        </ol>
        <div className="mt-10 flex flex-wrap gap-2">
          <Button to={ROUTES.getStarted}>Begin</Button>
          <Link to={ROUTES.services} className="self-center text-[14px] font-medium text-blue">
            Compare plans
          </Link>
        </div>
      </section>
    </>
  )
}
