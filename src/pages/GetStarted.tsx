import { useMemo, useState, type FormEvent } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { FORM_LIMITS, SITE } from '../config/site'
import { ROUTES } from '../config/routes'
import { GOLD, SILVER, isPlanId } from '../content/plans'
import { Button } from '../components/ui/Button'
import { HoneypotField, SelectField, TextAreaField, TextField } from '../components/ui/Field'
import { PageHero } from '../components/ui/Reveal'
import { parseLeadForm } from '../lib/form'
import { Seo } from '../lib/seo'
import { submitLead } from '../lib/submitLead'

export function GetStarted() {
  const [params] = useSearchParams()
  const navigate = useNavigate()
  const requestedPlan = params.get('plan')
  const plan = isPlanId(requestedPlan) ? requestedPlan : ''
  const [status, setStatus] = useState<'idle' | 'sending' | 'error'>('idle')
  const [error, setError] = useState('')

  const subject = useMemo(
    () => (plan ? `TalentBridge ${plan} inquiry` : 'TalentBridge inquiry'),
    [plan],
  )

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const parsed = parseLeadForm(new FormData(event.currentTarget))
    if (!parsed.ok) {
      setError(parsed.error)
      setStatus('error')
      return
    }

    setStatus('sending')
    setError('')
    try {
      await submitLead(parsed.value, subject)
      navigate(ROUTES.thanks, { replace: true })
    } catch {
      setStatus('error')
      setError('Could not send. Email us directly and we will follow up.')
    }
  }

  return (
    <>
      <Seo
        title="Get started — TalentBridge"
        description="Tell us your target role and preferred plan. We will follow up with next steps for Silver or Gold."
      />
      <PageHero
        eyebrow="Get started"
        title="Tell us where you want to land."
        body="Share a few details. We will reply with a plan, timeline, and what we need from you."
      />
      <section className="px-4 py-14">
        <form
          onSubmit={onSubmit}
          className="relative mx-auto max-w-[520px] space-y-4 rounded-[12px] border border-line bg-elevated p-6 card-shadow"
          noValidate
        >
          <HoneypotField />
          <TextField label="Full name" name="name" required maxLength={FORM_LIMITS.name} autoComplete="name" />
          <TextField
            label="Email"
            name="email"
            type="email"
            required
            maxLength={FORM_LIMITS.email}
            autoComplete="email"
          />
          <TextField
            label="Phone"
            name="phone"
            maxLength={FORM_LIMITS.phone}
            autoComplete="tel"
          />
          <input type="hidden" name="country" value="USA" />
          <TextField
            label="Target role"
            name="role"
            placeholder="e.g. Cloud support, Salesforce admin"
            maxLength={FORM_LIMITS.role}
          />
          <SelectField label="Plan interest" name="plan" defaultValue={plan || 'undecided'}>
            <option value="undecided">Not sure yet</option>
            <option value="silver">Silver — ${SILVER.price}/mo</option>
            <option value="gold">Gold — ${GOLD.price}/mo</option>
          </SelectField>
          <TextAreaField
            label="Notes"
            name="message"
            rows={4}
            maxLength={FORM_LIMITS.message}
            placeholder="Certifications, visa notes, or when you can start."
          />
          {status === 'error' ? (
            <p className="text-[13px] text-[#9b2c2c]" role="alert">
              {error}{' '}
              <a className="text-blue" href={`mailto:${SITE.email}`}>
                {SITE.email}
              </a>
            </p>
          ) : null}
          <Button type="submit" className="w-full" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending…' : 'Send'}
          </Button>
          <p className="text-center text-[12px] text-tertiary">
            Or email{' '}
            <a className="text-blue" href={`mailto:${SITE.email}`}>
              {SITE.email}
            </a>
          </p>
        </form>
      </section>
    </>
  )
}
