import { SITE } from '../config/site'
import type { LeadPayload } from './form'

export async function submitLead(payload: LeadPayload, subject: string) {
  const res = await fetch(SITE.formEndpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      name: payload.name,
      email: payload.email,
      phone: payload.phone,
      country: payload.country,
      role: payload.role,
      plan: payload.plan,
      message: payload.message,
      _subject: subject,
      _template: 'table',
    }),
  })

  if (!res.ok) {
    throw new Error('Request failed')
  }
}
