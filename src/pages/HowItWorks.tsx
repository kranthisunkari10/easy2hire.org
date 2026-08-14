import { Link } from 'react-router-dom'
import { STEPS } from '../data/site'
import { Button } from '../components/Button'
import { Reveal, SectionHead } from '../components/Reveal'
import { Seo } from '../lib/seo'

export function HowItWorks() {
  return (
    <>
      <Seo
        title="How it works — Easy2Hire"
        description="Share your goals, get tailored ATS resumes, apply or let us apply, then interview and certify with guided support."
      />
      <section className="mesh px-4 py-10">
        <SectionHead
          eyebrow="How it works"
          title="Four steps. No mystery."
          body="Whether you choose Silver or Gold, the path is the same: align, tailor, apply, then interview with support."
        />
      </section>
      <section className="mx-auto max-w-[720px] px-4 pb-12">
        <ol className="relative space-y-3 border-l border-black/[0.08] pl-5">
          {STEPS.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.05}>
              <li className="relative">
                <span className="absolute -left-[27px] top-4 h-2.5 w-2.5 rounded-full bg-orange" />
                <article className="rounded-[16px] bg-white p-4 card-shadow">
                  <p className="text-[11px] font-semibold text-orange">{s.n}</p>
                  <h2 className="mt-0.5 text-[16px] font-semibold tracking-[-0.03em]">{s.title}</h2>
                  <p className="mt-1 text-[13px] leading-relaxed text-secondary">{s.body}</p>
                </article>
              </li>
            </Reveal>
          ))}
        </ol>
        <div className="mt-6 flex flex-wrap gap-2">
          <Button to="/get-started">Get started</Button>
          <Link to="/services" className="self-center text-[13px] font-medium text-blue">
            Compare plans
          </Link>
        </div>
      </section>
    </>
  )
}
