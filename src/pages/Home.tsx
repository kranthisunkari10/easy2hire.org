import { motion } from 'framer-motion'
import { CERTS, STEPS, STORIES, WHY } from '../content/copy'
import { SITE } from '../config/site'
import { ROUTES } from '../config/routes'
import { Button } from '../components/ui/Button'
import { BrandCta } from '../components/ui/BrandCta'
import { Card, Container } from '../components/ui/Card'
import { DeviceMock } from '../components/DeviceMock'
import { Pricing } from '../components/Pricing'
import { Reveal, SectionHead } from '../components/ui/Reveal'
import { Seo } from '../lib/seo'

export function Home() {
  return (
    <>
      <Seo
        title="Easy2Hire — Build the skill. Land the role."
        description="ATS-optimized resumes, daily IT applications, interview coaching, and certification roadmaps for students and career switchers."
      />
      <Hero />
      <Logos />
      <Why />
      <ServicesBand />
      <How />
      <Stories />
      <section className="py-12">
        <Reveal>
          <Container>
            <BrandCta />
          </Container>
        </Reveal>
      </section>
    </>
  )
}

function Hero() {
  return (
    <section className="mesh overflow-hidden">
      <Container className="grid items-center gap-8 pb-10 pt-8 md:grid-cols-[1.05fr_0.95fr] md:gap-10 md:pb-14 md:pt-10">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[11px] font-semibold uppercase tracking-[0.14em] text-orange"
          >
            Easy2Hire for students
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.06, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="mt-2 max-w-[20ch] text-[32px] font-semibold leading-[1.15] tracking-[-0.035em] text-label md:text-[40px]"
          >
            Build the skill. Land the role.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12, duration: 0.55 }}
            className="mt-3 max-w-[46ch] text-[15px] leading-relaxed text-secondary"
          >
            We tailor every resume, manage daily IT applications, and coach you through
            certifications so recruiters see the best version of your skills.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18 }}
            className="mt-4 flex flex-wrap gap-2"
          >
            <Button to={ROUTES.getStarted}>Talk to our team</Button>
            <Button to={ROUTES.services} variant="ghost">
              Explore services
            </Button>
          </motion.div>
          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.28 }}
            className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-[12px] text-secondary"
          >
            <li>
              <strong className="text-label">ATS 90+</strong> score
            </li>
            <li>
              <strong className="text-label">Daily</strong> job pitches
            </li>
            <li>
              <strong className="text-label">Certification</strong> roadmaps
            </li>
          </motion.ul>
        </div>
        <DeviceMock />
      </Container>
    </section>
  )
}

function Logos() {
  return (
    <section className="border-y border-black/[0.05] bg-white">
      <Container className="flex flex-wrap items-center justify-between gap-3 py-3">
        <p className="text-[11.5px] text-tertiary">Serving {SITE.markets.join(' · ')}</p>
        <div className="flex flex-wrap gap-1.5">
          {CERTS.map((c) => (
            <span
              key={c}
              className="rounded-full bg-fill px-2.5 py-1 text-[11px] font-medium text-secondary"
            >
              {c}
            </span>
          ))}
        </div>
      </Container>
    </section>
  )
}

function Why() {
  return (
    <section className="py-12">
      <Container>
        <SectionHead
          eyebrow="Why Easy2Hire"
          title="Job hunting, kept simple and honest."
          body="High-quality outcomes at student-friendly prices — with a portal that shows every move."
        />
        <div className="mt-6 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
          {WHY.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.04}>
              <Card className="h-full">
                <div className="mb-2 h-7 w-7 rounded-[8px] bg-orange/10 text-center text-[13px] leading-7 text-orange">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3 className="text-[14px] font-semibold tracking-[-0.02em]">{item.title}</h3>
                <p className="mt-1 text-[13px] leading-relaxed text-secondary">{item.body}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}

function ServicesBand() {
  return (
    <section className="bg-white px-4 py-12">
      <SectionHead
        eyebrow="Our services"
        title="Everything you need to land an IT role — in one place."
      />
      <div className="mt-6">
        <Pricing compact />
      </div>
    </section>
  )
}

function How() {
  return (
    <section className="py-12">
      <Container>
        <SectionHead eyebrow="How it works" title="A calm path from profile to offer." />
        <div className="mt-6 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.05}>
              <Card className="h-full">
                <p className="text-[11px] font-semibold text-orange">{s.n}</p>
                <h3 className="mt-1 text-[14px] font-semibold tracking-[-0.02em]">{s.title}</h3>
                <p className="mt-1 text-[13px] leading-relaxed text-secondary">{s.body}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}

function Stories() {
  return (
    <section className="overflow-hidden bg-white py-12">
      <div className="px-4">
        <SectionHead eyebrow="Success stories" title="Real candidates. Clearer interviews." />
      </div>
      <div className="mt-6 flex gap-3 overflow-x-auto px-4 pb-2 [scrollbar-width:thin]">
        {STORIES.map((s, i) => (
          <Reveal key={s.name} delay={i * 0.03} className="min-w-[260px] max-w-[280px] shrink-0">
            <blockquote className="h-full rounded-[16px] border border-black/[0.05] bg-fill p-4">
              <p className="text-[13px] leading-relaxed text-secondary">“{s.quote}”</p>
              <footer className="mt-3 text-[12px] font-medium text-label">
                {s.name}
                <span className="font-normal text-tertiary"> · {s.place}</span>
              </footer>
            </blockquote>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
