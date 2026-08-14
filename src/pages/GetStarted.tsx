import { useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SITE } from '../data/site'
import { Button } from '../components/Button'
import { SectionHead } from '../components/Reveal'
import { Seo } from '../lib/seo'

export function GetStarted() {
  const [params] = useSearchParams()
  const plan = params.get('plan') === 'gold' ? 'gold' : params.get('plan') === 'silver' ? 'silver' : ''
  const next = `${SITE.url}/thanks`

  const subject = useMemo(
    () => (plan ? `Easy2Hire ${plan} inquiry` : 'Easy2Hire inquiry'),
    [plan],
  )

  return (
    <>
      <Seo
        title="Get started — Easy2Hire"
        description="Tell us your target role and preferred plan. We will follow up with next steps for Silver or Gold."
      />
      <section className="mesh px-4 py-10">
        <SectionHead
          eyebrow="Get started"
          title="Tell us where you want to land."
          body="Share a few details. We will reply with a plan, timeline, and what we need from you."
        />
        <form
          action={`https://formsubmit.co/${SITE.formEmail}`}
          method="POST"
          className="mx-auto mt-6 max-w-[520px] space-y-3 rounded-[20px] bg-white p-5 card-shadow"
        >
          <input type="hidden" name="_subject" value={subject} />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_next" value={next} />
          <input type="hidden" name="_template" value="table" />

          <Field label="Full name" name="name" required />
          <Field label="Email" name="email" type="email" required />
          <Field label="Phone / WhatsApp" name="phone" />
          <label className="block">
            <span className="mb-1 block text-[12px] font-medium text-secondary">Country</span>
            <select
              name="country"
              className="w-full rounded-[12px] border border-black/[0.08] bg-fill px-3 py-2 text-[13px] outline-none focus:border-orange/50"
              defaultValue="USA"
            >
              {SITE.markets.map((m) => (
                <option key={m}>{m}</option>
              ))}
              <option>Other</option>
            </select>
          </label>
          <Field label="Target role" name="role" placeholder="e.g. Cloud support, Salesforce admin" />
          <label className="block">
            <span className="mb-1 block text-[12px] font-medium text-secondary">Plan interest</span>
            <select
              name="plan"
              defaultValue={plan || 'undecided'}
              className="w-full rounded-[12px] border border-black/[0.08] bg-fill px-3 py-2 text-[13px] outline-none focus:border-orange/50"
            >
              <option value="undecided">Not sure yet</option>
              <option value="silver">Silver — $65/mo</option>
              <option value="gold">Gold — $300/mo</option>
            </select>
          </label>
          <label className="block">
            <span className="mb-1 block text-[12px] font-medium text-secondary">Notes</span>
            <textarea
              name="message"
              rows={4}
              className="w-full resize-y rounded-[12px] border border-black/[0.08] bg-fill px-3 py-2 text-[13px] outline-none focus:border-orange/50"
              placeholder="Certifications, visa notes, or when you can start."
            />
          </label>
          <Button type="submit" className="w-full">
            Send
          </Button>
          <p className="text-center text-[11.5px] text-tertiary">
            Or email <a className="text-blue" href={`mailto:${SITE.email}`}>{SITE.email}</a>
          </p>
        </form>
      </section>
    </>
  )
}

function Field({
  label,
  name,
  type = 'text',
  required,
  placeholder,
}: {
  label: string
  name: string
  type?: string
  required?: boolean
  placeholder?: string
}) {
  return (
    <label className="block">
      <span className="mb-1 block text-[12px] font-medium text-secondary">{label}</span>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-[12px] border border-black/[0.08] bg-fill px-3 py-2 text-[13px] outline-none focus:border-orange/50"
      />
    </label>
  )
}
