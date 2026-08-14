import { Link } from 'react-router-dom'
import { STEPS } from '../content/copy'
import { ROUTES } from '../config/routes'
import { Button } from '../components/ui/Button'
import { Card } from '../components/ui/Card'
import { PageHero, Reveal } from '../components/ui/Reveal'
import { Seo } from '../lib/seo'

export function HowItWorks() {
  return (
    <>
      <Seo
        title="How it works — Easy2Hire"
        description="Share your goals, get tailored ATS resumes, apply or let us apply, then interview and certify with guided support."
      />
      <PageHero
        eyebrow="How it works"
        title="Four steps. No mystery."
        body="Whether you choose Silver or Gold, the path is the same: align, tailor, apply, then interview with support."
      />
      <section className="mx-auto max-w-[720px] px-4 pb-12">
        <ol className="relative space-y-3 border-l border-black/[0.08] pl-5">
          {STEPS.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.05}>
              <li className="relative">
                <span className="absolute -left-[27px] top-4 h-2.5 w-2.5 rounded-full bg-orange" />
                <Card className="p-4">
                  <p className="text-[11px] font-semibold text-orange">{s.n}</p>
                  <h2 className="mt-0.5 text-[16px] font-semibold tracking-[-0.03em]">{s.title}</h2>
                  <p className="mt-1 text-[13px] leading-relaxed text-secondary">{s.body}</p>
                </Card>
              </li>
            </Reveal>
          ))}
        </ol>
        <div className="mt-6 flex flex-wrap gap-2">
          <Button to={ROUTES.getStarted}>Get started</Button>
          <Link to={ROUTES.services} className="self-center text-[13px] font-medium text-blue">
            Compare plans
          </Link>
        </div>
      </section>
    </>
  )
}
