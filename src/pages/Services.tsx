import { GOLD, SILVER } from '../content/plans'
import { EXTRAS } from '../content/copy'
import { Pricing } from '../components/Pricing'
import { Card } from '../components/ui/Card'
import { PageHero, Reveal } from '../components/ui/Reveal'
import { Seo } from '../lib/seo'

export function Services() {
  return (
    <>
      <Seo
        title="Services — Easy2Hire"
        description="Silver and Gold plans for ATS resumes, managed IT applications, interview coaching, and certification support."
      />
      <PageHero
        eyebrow="Services"
        title="Two ways to get hired faster."
        body="Silver gives you the files. Gold runs the applications. Both include a personal portal."
      />
      <section className="px-4">
        <Pricing />
      </section>
      <section className="mx-auto grid max-w-[860px] gap-3 px-4 py-10 md:grid-cols-2">
        {EXTRAS.map((e, i) => (
          <Reveal key={e.title} delay={i * 0.06}>
            <Card className="h-full rounded-[18px] p-5">
              <h3 className="text-[16px] font-semibold tracking-[-0.03em]">{e.title}</h3>
              <p className="mt-1 text-[13px] leading-relaxed text-secondary">{e.body}</p>
              <ul className="mt-3 space-y-1.5 text-[12.5px] text-secondary">
                {e.points.map((p) => (
                  <li key={p}>· {p}</li>
                ))}
              </ul>
            </Card>
          </Reveal>
        ))}
      </section>
      <section className="px-4 pb-12">
        <Card className="mx-auto max-w-[860px] rounded-[18px] p-5 text-[13px] text-secondary">
          <p>
            <strong className="text-label">Silver (${SILVER.price}/mo)</strong> is for candidates who
            want to apply themselves with specialist-grade resumes.{' '}
            <strong className="text-label">Gold (${GOLD.price}/mo)</strong> is for those who want
            daily coverage, coaching, and a dedicated manager.
          </p>
        </Card>
      </section>
    </>
  )
}
