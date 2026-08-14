import { SITE } from '../data/site'
import { Button } from '../components/Button'
import { Reveal, SectionHead } from '../components/Reveal'
import { Seo } from '../lib/seo'

export function Contact() {
  const wa = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Hi Easy2Hire — I would like to know more about your plans.')}`
  return (
    <>
      <Seo
        title="Contact — Easy2Hire"
        description="Email, WhatsApp, or send a note. We help IT candidates across the USA, Canada, Australia, and New Zealand."
      />
      <section className="mesh px-4 py-10">
        <SectionHead
          eyebrow="Contact"
          title="We are here when you are ready."
          body="Questions about Silver, Gold, or a custom timeline — reach us directly."
        />
      </section>
      <section className="mx-auto grid max-w-[860px] gap-3 px-4 pb-12 md:grid-cols-3">
        <Reveal>
          <a
            href={`mailto:${SITE.email}`}
            className="block h-full rounded-[18px] bg-white p-5 card-shadow hover:scale-[1.01] transition-transform"
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-tertiary">
              Email
            </p>
            <p className="mt-2 text-[14px] font-semibold tracking-[-0.02em]">{SITE.email}</p>
            <p className="mt-1 text-[12.5px] text-secondary">We reply within one business day.</p>
          </a>
        </Reveal>
        <Reveal delay={0.05}>
          <a
            href={wa}
            className="block h-full rounded-[18px] bg-white p-5 card-shadow hover:scale-[1.01] transition-transform"
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-tertiary">
              WhatsApp
            </p>
            <p className="mt-2 text-[14px] font-semibold tracking-[-0.02em]">{SITE.phoneDisplay}</p>
            <p className="mt-1 text-[12.5px] text-secondary">Message the team for a quick fit check.</p>
          </a>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="h-full rounded-[18px] bg-white p-5 card-shadow">
            <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-tertiary">
              Markets
            </p>
            <p className="mt-2 text-[14px] font-semibold tracking-[-0.02em]">
              {SITE.markets.join(' · ')}
            </p>
            <p className="mt-1 text-[12.5px] text-secondary">{SITE.address}</p>
          </div>
        </Reveal>
      </section>
      <section className="px-4 pb-12 text-center">
        <Button to="/get-started">Start an application</Button>
      </section>
    </>
  )
}
