import { SITE } from '../config/site'
import { ROUTES } from '../config/routes'
import { Button } from '../components/ui/Button'
import { Card } from '../components/ui/Card'
import { PageHero, Reveal } from '../components/ui/Reveal'
import { Seo } from '../lib/seo'
import { whatsappHref } from '../lib/urls'

export function Contact() {
  const wa = whatsappHref('Hi Easy2Hire — I would like to know more about your plans.')
  return (
    <>
      <Seo
        title="Contact — Easy2Hire"
        description="Email, WhatsApp, or send a note. We help IT candidates across the USA, Canada, Australia, and New Zealand."
      />
      <PageHero
        eyebrow="Contact"
        title="We are here when you are ready."
        body="Questions about Silver, Gold, or a custom timeline — reach us directly."
      />
      <section className="mx-auto grid max-w-[860px] gap-3 px-4 pb-12 md:grid-cols-3">
        <Reveal>
          <a
            href={`mailto:${SITE.email}`}
            className="block h-full transition-transform hover:scale-[1.01]"
          >
            <Card className="h-full rounded-[18px] p-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-tertiary">
                Email
              </p>
              <p className="mt-2 text-[14px] font-semibold tracking-[-0.02em]">{SITE.email}</p>
              <p className="mt-1 text-[12.5px] text-secondary">We reply within one business day.</p>
            </Card>
          </a>
        </Reveal>
        <Reveal delay={0.05}>
          <a
            href={wa}
            target="_blank"
            rel="noopener noreferrer"
            className="block h-full transition-transform hover:scale-[1.01]"
          >
            <Card className="h-full rounded-[18px] p-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-tertiary">
                WhatsApp
              </p>
              <p className="mt-2 text-[14px] font-semibold tracking-[-0.02em]">{SITE.phoneDisplay}</p>
              <p className="mt-1 text-[12.5px] text-secondary">
                Message the team for a quick fit check.
              </p>
            </Card>
          </a>
        </Reveal>
        <Reveal delay={0.1}>
          <Card className="h-full rounded-[18px] p-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-tertiary">
              Markets
            </p>
            <p className="mt-2 text-[14px] font-semibold tracking-[-0.02em]">
              {SITE.markets.join(' · ')}
            </p>
            <p className="mt-1 text-[12.5px] text-secondary">{SITE.address}</p>
          </Card>
        </Reveal>
      </section>
      <section className="px-4 pb-12 text-center">
        <Button to={ROUTES.getStarted}>Start an application</Button>
      </section>
    </>
  )
}
