import { GOLD, SILVER } from '../data/site'
import { Pricing } from '../components/Pricing'
import { Reveal, SectionHead } from '../components/Reveal'
import { Seo } from '../lib/seo'

const extras = [
  {
    title: 'Mock interviews & coaching',
    body: 'Practice with people who know current IT recruiter loops — technical and behavioral.',
    points: [
      'One-on-one mock interviews',
      'Role-specific question sets',
      'Written feedback and an improvement plan',
    ],
  },
  {
    title: 'Certifications & learning',
    body: 'Navigate AWS, Azure, Salesforce, and more with a roadmap, resources, and accountability.',
    points: [
      'Certification roadmap planning',
      'Curated study guidance',
      'Check-ins through exam day',
    ],
  },
]

export function Services() {
  return (
    <>
      <Seo
        title="Services — Easy2Hire"
        description="Silver and Gold plans for ATS resumes, managed IT applications, interview coaching, and certification support."
      />
      <section className="mesh px-4 py-10">
        <SectionHead
          eyebrow="Services"
          title="Two ways to get hired faster."
          body="Silver gives you the files. Gold runs the applications. Both include a personal portal."
        />
        <div className="mt-6">
          <Pricing />
        </div>
      </section>
      <section className="mx-auto grid max-w-[860px] gap-3 px-4 py-10 md:grid-cols-2">
        {extras.map((e, i) => (
          <Reveal key={e.title} delay={i * 0.06}>
            <article className="h-full rounded-[18px] bg-white p-5 card-shadow">
              <h3 className="text-[16px] font-semibold tracking-[-0.03em]">{e.title}</h3>
              <p className="mt-1 text-[13px] leading-relaxed text-secondary">{e.body}</p>
              <ul className="mt-3 space-y-1.5 text-[12.5px] text-secondary">
                {e.points.map((p) => (
                  <li key={p}>· {p}</li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </section>
      <section className="px-4 pb-12">
        <div className="mx-auto max-w-[860px] rounded-[18px] border border-black/[0.05] bg-white p-5 text-[13px] text-secondary">
          <p>
            <strong className="text-label">Silver (${SILVER.price}/mo)</strong> is for candidates who
            want to apply themselves with specialist-grade resumes.{' '}
            <strong className="text-label">Gold (${GOLD.price}/mo)</strong> is for those who want
            daily coverage, coaching, and a dedicated manager.
          </p>
        </div>
      </section>
    </>
  )
}
