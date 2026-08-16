import { SITE } from '../config/site'
import { ROUTES } from '../config/routes'
import { Button } from '../components/ui/Button'
import { PageHero, Reveal } from '../components/ui/Reveal'
import { Seo } from '../lib/seo'

export function Contact() {
  return (
    <>
      <Seo
        title="Contact — TalentBridge"
        description="Email us or send a note. We help IT candidates in the USA."
      />
      <PageHero
        eyebrow="Contact"
        title="Reach the studio when you are ready."
        body="Questions about Silver, Gold, or a custom timeline — write us directly."
      />
      <section className="mx-auto grid max-w-[720px] gap-4 px-4 py-14 md:grid-cols-2">
        <Reveal>
          <a href={`mailto:${SITE.email}`} className="block h-full">
            <article className="h-full rounded-[16px] bg-white p-5 card-shadow">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-gold-deep">
                Email
              </p>
              <p className="mt-3 text-[16px] font-semibold tracking-[-0.02em] text-label">{SITE.email}</p>
              <p className="mt-2 text-[13.5px] text-secondary">We reply within one business day.</p>
            </article>
          </a>
        </Reveal>
        <Reveal delay={0.05}>
          <article className="h-full rounded-[16px] bg-white p-5 card-shadow">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-gold-deep">
              Address
            </p>
            <p className="mt-3 text-[16px] font-semibold tracking-[-0.02em] text-label">{SITE.address}</p>
            <p className="mt-2 text-[13.5px] text-secondary">Serving {SITE.markets[0]}</p>
          </article>
        </Reveal>
      </section>
      <section className="px-4 pb-16 text-center">
        <Button to={ROUTES.getStarted}>Start an application</Button>
      </section>
    </>
  )
}
