import { SITE } from '../config/site'
import { PageHero, Reveal } from '../components/ui/Reveal'
import { Seo } from '../lib/seo'

export function About() {
  return (
    <>
      <Seo
        title="About — TalentBridge"
        description="TalentBridge helps IT candidates in the USA turn skills into interviews with tailored resumes, managed applications, and human coaching."
      />
      <PageHero
        eyebrow="About"
        title="A studio that respects your time."
        body="TalentBridge exists so students and career switchers can study, certify, and interview — without losing weeks to generic applications."
      />
      <section className="mx-auto grid max-w-[900px] gap-6 px-4 py-14 md:grid-cols-2">
        <Reveal>
          <article className="rounded-[16px] bg-white p-6 card-shadow">
            <h2 className="text-[22px] font-semibold tracking-[-0.03em] text-label">Mission</h2>
            <p className="mt-3 text-[15px] leading-relaxed text-secondary">
              Help candidates earn career momentum by combining precise resume matching with a
              human team that applies, tracks, and coaches.
            </p>
          </article>
        </Reveal>
        <Reveal delay={0.06}>
          <article className="rounded-[16px] bg-white p-6 card-shadow">
            <h2 className="text-[22px] font-semibold tracking-[-0.03em] text-label">Vision</h2>
            <p className="mt-3 text-[15px] leading-relaxed text-secondary">
              Be the most trusted crossing from prepared skill to first interview for IT talent in
              the United States.
            </p>
          </article>
        </Reveal>
        <Reveal delay={0.08} className="md:col-span-2">
          <article className="rounded-[16px] bg-blue p-7 text-white">
            <h2 className="text-[22px] font-semibold tracking-[-0.03em]">How we work</h2>
            <p className="mt-3 text-[15px] leading-relaxed text-white/90">
              Tooling scores and structures each resume against the job description. Specialists
              review, apply where you want coverage, and prepare you for the conversation that
              follows. Your desk stays the source of truth — {SITE.markets[0]}.
            </p>
          </article>
        </Reveal>
      </section>
    </>
  )
}
