import { FORM_LIMITS } from '../config/site'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export type LeadPayload = {
  name: string
  email: string
  phone: string
  country: string
  role: string
  plan: string
  message: string
  website: string
}

function clip(value: string, max: number) {
  return value.trim().slice(0, max)
}

export function parseLeadForm(data: FormData): { ok: true; value: LeadPayload } | { ok: false; error: string } {
  const website = String(data.get('website') ?? '')
  if (website.trim()) {
    return { ok: false, error: 'Unable to send right now. Please email us instead.' }
  }

  const name = clip(String(data.get('name') ?? ''), FORM_LIMITS.name)
  const email = clip(String(data.get('email') ?? ''), FORM_LIMITS.email).toLowerCase()
  const phone = clip(String(data.get('phone') ?? ''), FORM_LIMITS.phone)
  const country = clip(String(data.get('country') ?? ''), 40)
  const role = clip(String(data.get('role') ?? ''), FORM_LIMITS.role)
  const plan = clip(String(data.get('plan') ?? ''), 24)
  const message = clip(String(data.get('message') ?? ''), FORM_LIMITS.message)

  if (name.length < 2) return { ok: false, error: 'Please enter your name.' }
  if (!EMAIL_RE.test(email)) return { ok: false, error: 'Please enter a valid email.' }

  return {
    ok: true,
    value: { name, email, phone, country, role, plan, message, website: '' },
  }
}
