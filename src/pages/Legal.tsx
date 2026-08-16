import { Link } from 'react-router-dom'
import { SITE } from '../config/site'
import { ROUTES } from '../config/routes'
import { Seo } from '../lib/seo'

export function Privacy() {
  return (
    <>
      <Seo title="Privacy — TalentBridge" description="How TalentBridge collects and uses information." />
      <article className="mx-auto max-w-[680px] px-4 py-14 text-[15px] leading-relaxed text-secondary">
        <h1 className="text-[28px] font-semibold tracking-[-0.03em] text-label">Privacy</h1>
        <p className="mt-4">
          TalentBridge collects the information you submit through our forms — typically name, email,
          phone, target role, and plan interest — so we can evaluate fit and deliver career
          services. We do not sell personal data. Resumes and job materials you share are used only
          to tailor applications and coaching on your behalf.
        </p>
        <p className="mt-4">
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
      <Seo title="Terms — TalentBridge" description="Terms of use for TalentBridge services." />
      <article className="mx-auto max-w-[680px] px-4 py-14 text-[15px] leading-relaxed text-secondary">
        <h1 className="text-[28px] font-semibold tracking-[-0.03em] text-label">Terms</h1>
        <p className="mt-4">
          TalentBridge provides resume tailoring, application support, interview coaching, and
          certification guidance. We do not guarantee a job offer. ATS scores and application volume
          are targets based on our process, not a warranty of interviews or employment.
        </p>
        <p className="mt-4">
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
    <section className="px-4 py-20 text-center">
      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gold-deep">404</p>
      <h1 className="mt-2 text-[28px] font-semibold tracking-[-0.03em] text-label">
        Page not found
      </h1>
      <p className="mt-3 text-[15px] text-secondary">That link does not exist on TalentBridge.</p>
      <Link
        to={ROUTES.home}
        className="mt-5 inline-block text-[14px] font-medium text-blue"
      >
        Go home
      </Link>
    </section>
  )
}
