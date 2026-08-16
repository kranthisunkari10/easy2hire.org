import { GOLD, SILVER } from '../content/plans'
import { EXTRAS } from '../content/copy'
import { Pricing } from '../components/Pricing'
import { PageHero, Reveal } from '../components/ui/Reveal'
import { Seo } from '../lib/seo'

export function Services() {
  return (
    <>
      <Seo
        title="Services — TalentBridge"
        description="Silver and Gold plans for ATS resumes, managed IT applications, interview coaching, and certification support."
      />
      <PageHero
        eyebrow="Services"
        title="Two ways to get hired with less noise."
        body="Silver gives you the files. Gold runs the applications. Both include a personal portal."
      />
      <section className="px-4 py-12">
        <Pricing />
      </section>
      <section className="mx-auto grid max-w-[900px] gap-6 px-4 pb-8 md:grid-cols-2">
        {EXTRAS.map((e, i) => (
          <Reveal key={e.title} delay={i * 0.06}>
            <article className="h-full border-t border-gold pt-5">
              <h3 className="text-[22px] font-semibold tracking-[-0.03em] text-label">
                {e.title}
              </h3>
              <p className="mt-2 text-[14px] leading-relaxed text-secondary">{e.body}</p>
              <ul className="mt-4 space-y-2 text-[13.5px] text-secondary">
                {e.points.map((p) => (
                  <li key={p} className="flex gap-2">
                    <span className="text-gold">—</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </section>
      <section className="px-4 pb-16">
        <article className="mx-auto max-w-[900px] rounded-[16px] bg-white p-6 text-[14px] leading-relaxed text-secondary card-shadow">
          <p>
            <strong className="text-label">Silver (${SILVER.price}/mo)</strong> is for candidates who
            want to apply themselves with specialist-grade resumes.{' '}
            <strong className="text-label">Gold (${GOLD.price}/mo)</strong> is for those who want
            daily coverage, coaching, and a dedicated manager.
          </p>
        </article>
      </section>
    </>
  )
}
