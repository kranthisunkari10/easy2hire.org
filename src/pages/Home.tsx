import { motion } from 'framer-motion'
import { CERTS, STEPS, STORIES, WHY } from '../content/copy'
import { SITE } from '../config/site'
import { ROUTES } from '../config/routes'
import { Button } from '../components/ui/Button'
import { BrandCta } from '../components/ui/BrandCta'
import { Container } from '../components/ui/Card'
import { DeviceMock } from '../components/DeviceMock'
import { Pricing } from '../components/Pricing'
import { Reveal, SectionHead } from '../components/ui/Reveal'
import { Seo } from '../lib/seo'

export function Home() {
  return (
    <>
      <Seo
        title="TalentBridge — Skills on one side. Offers on the other."
        description="ATS-optimized resumes, daily IT applications, interview coaching, and certification roadmaps for students and career switchers."
      />
      <Hero />
      <Markets />
      <Why />
      <ServicesBand />
      <How />
      <Stories />
      <section className="py-16">
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
    <section className="hero-bridge overflow-hidden">
      <Container className="grid items-center gap-10 py-14 md:grid-cols-[1.05fr_0.95fr] md:py-20">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gold-deep"
          >
            Career studio for IT talent
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.06, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="mt-4 max-w-[16ch] text-[40px] font-semibold leading-[1.12] tracking-[-0.03em] text-label md:text-[52px]"
          >
            We bridge what you can do with who is hiring.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12, duration: 0.55 }}
            className="mt-5 max-w-[46ch] text-[16px] leading-relaxed text-secondary"
          >
            TalentBridge writes a resume for each posting, runs applications when you want coverage,
            and coaches you through interviews and certifications — so you spend time becoming
            hireable, not filling forms.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18 }}
            className="mt-7 flex flex-wrap gap-2"
          >
            <Button to={ROUTES.getStarted}>Talk to the studio</Button>
            <Button to={ROUTES.services} variant="ghost">
              Compare plans
            </Button>
          </motion.div>
          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.28 }}
            className="mt-8 grid max-w-[420px] grid-cols-3 gap-4 text-[12px] text-secondary"
          >
            <li>
              <strong className="block text-[20px] text-blue">90+</strong>
              ATS score
            </li>
            <li>
              <strong className="block text-[20px] text-gold-deep">Daily</strong>
              job pitches
            </li>
            <li>
              <strong className="block text-[20px] text-blue">Cert</strong>
              roadmaps
            </li>
          </motion.ul>
        </div>
        <DeviceMock />
      </Container>
    </section>
  )
}

function Markets() {
  return (
    <section className="border-y border-line bg-white">
      <Container className="flex flex-wrap items-center justify-between gap-4 py-5">
        <p className="text-[12.5px] text-secondary">Serving {SITE.markets[0]}</p>
        <div className="flex flex-wrap gap-2">
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
    <section className="py-16">
      <Container>
        <SectionHead
          align="left"
          eyebrow="Why TalentBridge"
          title="A search that stays honest."
          body="High-quality outcomes at student-friendly prices — with a desk that shows every move."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-6">
          {WHY.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.04} className={i < 2 ? 'md:col-span-3' : 'md:col-span-2'}>
              <article className="h-full rounded-[16px] bg-white p-5 card-shadow">
                <p className="text-[11px] font-semibold tracking-[0.14em] text-gold-deep">
                  {String(i + 1).padStart(2, '0')}
                </p>
                <h3 className="mt-2 text-[18px] font-semibold tracking-[-0.02em] text-label">
                  {item.title}
                </h3>
                <p className="mt-2 text-[14px] leading-relaxed text-secondary">{item.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}

function ServicesBand() {
  return (
    <section className="bg-white px-4 py-16">
      <SectionHead
        eyebrow="Studio plans"
        title="Two ways across — you send, or we send."
      />
      <div className="mt-10">
        <Pricing compact />
      </div>
    </section>
  )
}

function How() {
  return (
    <section className="py-16">
      <Container>
        <SectionHead eyebrow="How it works" title="Four stations. One path." />
        <div className="relative mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="bridge-line pointer-events-none absolute left-[8%] right-[8%] top-5 hidden lg:block" />
          {STEPS.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.05}>
              <article>
                <span className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-gold bg-white text-[13px] font-semibold text-navy">
                  {s.n}
                </span>
                <h3 className="mt-4 text-[18px] font-semibold tracking-[-0.02em] text-label">
                  {s.title}
                </h3>
                <p className="mt-2 text-[14px] leading-relaxed text-secondary">{s.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}

function Stories() {
  return (
    <section className="bg-white py-16">
      <Container>
        <SectionHead
          eyebrow="From the other side"
          title="Candidates who made the crossing."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {STORIES.map((s, i) => (
            <Reveal key={s.name} delay={i * 0.03}>
              <blockquote className="h-full rounded-[16px] bg-fill p-5">
                <p className="text-[28px] leading-none text-gold">“</p>
                <p className="mt-1 text-[14px] leading-relaxed text-secondary">{s.quote}</p>
                <footer className="mt-4 text-[12.5px] font-medium text-label">
                  {s.name}
                  <span className="font-normal text-tertiary"> · {s.place}</span>
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
