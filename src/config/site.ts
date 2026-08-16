const DEFAULT_ORIGIN = 'https://kranthisunkari10.github.io/talentbridge'

export const SITE = {
  name: 'TalentBridge',
  url: (import.meta.env.VITE_SITE_URL as string | undefined)?.replace(/\/$/, '') || DEFAULT_ORIGIN,
  email: 'kranhisunkari10@gmail.com',
  formEndpoint: 'https://formsubmit.co/ajax/kranhisunkari10@gmail.com',
  phoneDisplay: '+91 77 93 93 33 93',
  phoneTel: '+917793933393',
  whatsapp: '917793933393',
  address: 'Hyderabad, Telangana, India',
  markets: ['USA'] as const,
} as const

export const FORM_LIMITS = {
  name: 80,
  email: 120,
  phone: 32,
  role: 80,
  message: 2000,
} as const
