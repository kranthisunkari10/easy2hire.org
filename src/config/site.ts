const DEFAULT_ORIGIN = 'https://kranthisunkari10.github.io/talentbridge'

export const SITE = {
  name: 'TalentBridge',
  url: (import.meta.env.VITE_SITE_URL as string | undefined)?.replace(/\/$/, '') || DEFAULT_ORIGIN,
  email: 'info@talentbridge.org',
  formEndpoint: 'https://formsubmit.co/ajax/info@talentbridge.org',
  address: '500 W 2nd Street, Austin, TX 78701',
  markets: ['USA'] as const,
} as const

export const FORM_LIMITS = {
  name: 80,
  email: 120,
  phone: 32,
  role: 80,
  message: 2000,
} as const
