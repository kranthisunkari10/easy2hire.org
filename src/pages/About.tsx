import { SITE } from '../data/site'
import { Reveal, SectionHead } from '../components/Reveal'
import { Seo } from '../lib/seo'

export function About() {
  return (
    <>
      <Seo
        title="About — Easy2Hire"
        description="Easy2Hire helps IT candidates turn skills into interviews with tailored resumes, managed applications, and human coaching."
      />
      <section className="mesh px-4 py-10">
        <SectionHead
          eyebrow="About"
          title="A career partner that respects your time."
          body="Easy2Hire exists so students and career switchers can study, certify, and interview — without losing weeks to generic applications."
        />
      </section>
      <section className="mx-auto grid max-w-[860px] gap-3 px-4 pb-12 md:grid-cols-2">
        <Reveal>
          <article className="h-full rounded-[18px] bg-white p-5 card-shadow">
            <h2 className="text-[16px] font-semibold tracking-[-0.03em]">Mission</h2>
            <p className="mt-2 text-[13.5px] leading-relaxed text-secondary">
              Help candidates earn career momentum by combining precise resume matching with a
              human team that applies, tracks, and coaches.
            </p>
          </article>
        </Reveal>
        <Reveal delay={0.06}>
          <article className="h-full rounded-[18px] bg-white p-5 card-shadow">
            <h2 className="text-[16px] font-semibold tracking-[-0.03em]">Vision</h2>
            <p className="mt-2 text-[13.5px] leading-relaxed text-secondary">
              Be the most trusted path from skill to offer for IT talent across the USA, Canada,
              Australia, and New Zealand.
            </p>
          </article>
        </Reveal>
        <Reveal delay={0.08} className="md:col-span-2">
          <article className="rounded-[18px] bg-navy p-5 text-white">
            <h2 className="text-[16px] font-semibold tracking-[-0.03em]">How we work</h2>
            <p className="mt-2 text-[13.5px] leading-relaxed text-white/75">
              Tooling scores and structures each resume against the job description. Specialists
              review, apply where you want coverage, and prepare you for the conversation that
              follows. Your dashboard stays the source of truth — {SITE.markets.join(', ')}.
            </p>
          </article>
        </Reveal>
      </section>
    </>
  )
}
