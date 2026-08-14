import { SITE } from '../data/site'
import { Seo } from '../lib/seo'

export function Privacy() {
  return (
    <>
      <Seo title="Privacy — Easy2Hire" description="How Easy2Hire collects and uses information." />
      <article className="mx-auto max-w-[680px] px-4 py-10 text-[13.5px] leading-relaxed text-secondary">
        <h1 className="text-[22px] font-semibold tracking-[-0.03em] text-label">Privacy</h1>
        <p className="mt-3">
          Easy2Hire collects the information you submit through our forms — typically name, email,
          phone, target role, and plan interest — so we can evaluate fit and deliver career
          services. We do not sell personal data. Resumes and job materials you share are used only
          to tailor applications and coaching on your behalf.
        </p>
        <p className="mt-3">
          Hosting is provided via GitHub Pages. Form delivery may be processed by a third-party form
          provider. Contact {SITE.email} to request access, correction, or deletion of your
          information.
        </p>
      </article>
    </>
  )
}

export function Terms() {
  return (
    <>
      <Seo title="Terms — Easy2Hire" description="Terms of use for Easy2Hire services." />
      <article className="mx-auto max-w-[680px] px-4 py-10 text-[13.5px] leading-relaxed text-secondary">
        <h1 className="text-[22px] font-semibold tracking-[-0.03em] text-label">Terms</h1>
        <p className="mt-3">
          Easy2Hire provides resume tailoring, application support, interview coaching, and
          certification guidance. We do not guarantee a job offer. ATS scores and application volume
          are targets based on our process, not a warranty of interviews or employment.
        </p>
        <p className="mt-3">
          Subscriptions are billed monthly until cancelled. You are responsible for the accuracy of
          information you provide. You must have the right to share any resume or work history you
          send us. Questions: {SITE.email}.
        </p>
      </article>
    </>
  )
}

export function NotFound() {
  return (
    <section className="px-4 py-16 text-center">
      <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-orange">404</p>
      <h1 className="mt-1 text-[22px] font-semibold tracking-[-0.03em]">Page not found</h1>
      <p className="mt-2 text-[13.5px] text-secondary">That link does not exist on Easy2Hire.</p>
      <a href="/" className="mt-4 inline-block text-[13px] font-medium text-blue">
        Go home
      </a>
    </section>
  )
}
