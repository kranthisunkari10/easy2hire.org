import { motion } from 'framer-motion'
import { CERTS, SITE, STEPS, STORIES, WHY } from '../data/site'
import { Button } from '../components/Button'
import { DeviceMock } from '../components/DeviceMock'
import { Pricing } from '../components/Pricing'
import { Reveal, SectionHead } from '../components/Reveal'
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
      <Cta />
    </>
  )
}

function Hero() {
  return (
    <section className="mesh overflow-hidden">
      <div className="mx-auto grid max-w-[1080px] items-center gap-8 px-4 pb-10 pt-8 md:grid-cols-[1.05fr_0.95fr] md:gap-10 md:pb-14 md:pt-10">
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
            className="mt-2 max-w-[20ch] text-[28px] font-semibold leading-[1.15] tracking-[-0.035em] text-label md:text-[34px]"
          >
            Build the skill. Land the role.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12, duration: 0.55 }}
            className="mt-3 max-w-[46ch] text-[14px] leading-relaxed text-secondary"
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
            <Button to="/get-started">Talk to our team</Button>
            <Button to="/services" variant="ghost">
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
      </div>
    </section>
  )
}

function Logos() {
  return (
    <section className="border-y border-black/[0.05] bg-white">
      <div className="mx-auto flex max-w-[1080px] flex-wrap items-center justify-between gap-3 px-4 py-3">
        <p className="text-[11.5px] text-tertiary">
          Serving {SITE.markets.join(' · ')}
        </p>
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
      </div>
    </section>
  )
}

function Why() {
  return (
    <section className="px-4 py-12">
      <SectionHead
        eyebrow="Why Easy2Hire"
        title="Job hunting, kept simple and honest."
        body="High-quality outcomes at student-friendly prices — with a portal that shows every move."
      />
      <div className="mx-auto mt-6 grid max-w-[1080px] gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
        {WHY.map((item, i) => (
          <Reveal key={item.title} delay={i * 0.04}>
            <article className="h-full rounded-[16px] border border-black/[0.05] bg-white p-4 card-shadow">
              <div className="mb-2 h-7 w-7 rounded-[8px] bg-orange/10 text-center text-[13px] leading-7 text-orange">
                {String(i + 1).padStart(2, '0')}
              </div>
              <h3 className="text-[14px] font-semibold tracking-[-0.02em]">{item.title}</h3>
              <p className="mt-1 text-[13px] leading-relaxed text-secondary">{item.body}</p>
            </article>
          </Reveal>
        ))}
      </div>
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
    <section className="px-4 py-12">
      <SectionHead eyebrow="How it works" title="A calm path from profile to offer." />
      <div className="mx-auto mt-6 grid max-w-[1080px] gap-2.5 sm:grid-cols-2 lg:grid-cols-4">
        {STEPS.map((s, i) => (
          <Reveal key={s.n} delay={i * 0.05}>
            <article className="h-full rounded-[16px] bg-white p-4 card-shadow">
              <p className="text-[11px] font-semibold text-orange">{s.n}</p>
              <h3 className="mt-1 text-[14px] font-semibold tracking-[-0.02em]">{s.title}</h3>
              <p className="mt-1 text-[13px] leading-relaxed text-secondary">{s.body}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

function Stories() {
  return (
    <section className="overflow-hidden bg-white py-12">
      <div className="px-4">
        <SectionHead
          eyebrow="Success stories"
          title="Real candidates. Clearer interviews."
        />
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

function Cta() {
  return (
    <section className="px-4 py-12">
      <Reveal>
        <div className="relative mx-auto max-w-[1080px] overflow-hidden rounded-[22px] bg-navy px-6 py-10 text-center text-white">
          <div className="pointer-events-none absolute -right-10 -top-16 h-48 w-48 rounded-full bg-orange/25 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -left-10 h-48 w-48 rounded-full bg-blue/20 blur-3xl" />
          <p className="relative text-[11px] font-semibold uppercase tracking-[0.12em] text-orange">
            Get hired
          </p>
          <h2 className="relative mt-1 text-[22px] font-semibold tracking-[-0.03em] md:text-[24px]">
            You grow the skill. We open the door.
          </h2>
          <p className="relative mx-auto mt-2 max-w-[46ch] text-[13.5px] text-white/70">
            Start Silver if you want control, or Gold if you want us to apply every day.
          </p>
          <div className="relative mt-4 flex flex-wrap justify-center gap-2">
            <Button to="/get-started?plan=gold">Start Gold</Button>
            <Button to="/get-started?plan=silver" variant="ghost" className="bg-white/10 text-white hover:bg-white/16">
              Start Silver
            </Button>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
