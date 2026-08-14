export const ROUTES = {
  home: '/',
  services: '/services',
  howItWorks: '/how-it-works',
  about: '/about',
  contact: '/contact',
  getStarted: '/get-started',
  thanks: '/thanks',
  privacy: '/privacy',
  terms: '/terms',
} as const

export type AppPath = (typeof ROUTES)[keyof typeof ROUTES]

export function getStartedPath(plan?: string) {
  if (!plan) return ROUTES.getStarted
  return `${ROUTES.getStarted}?plan=${encodeURIComponent(plan)}`
}

export const NAV = [
  { to: ROUTES.services, label: 'Services' },
  { to: ROUTES.howItWorks, label: 'How it works' },
  { to: ROUTES.about, label: 'About' },
  { to: ROUTES.contact, label: 'Contact' },
] as const

export const FOOTER = [
  {
    title: 'Product',
    links: [
      { to: ROUTES.services, label: 'Services' },
      { to: ROUTES.howItWorks, label: 'How it works' },
      { to: ROUTES.getStarted, label: 'Get started' },
    ],
  },
  {
    title: 'Company',
    links: [
      { to: ROUTES.about, label: 'About' },
      { to: ROUTES.contact, label: 'Contact' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { to: ROUTES.privacy, label: 'Privacy' },
      { to: ROUTES.terms, label: 'Terms' },
    ],
  },
] as const
