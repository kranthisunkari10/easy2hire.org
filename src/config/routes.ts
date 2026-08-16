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
  { to: ROUTES.home, label: 'Home', end: true },
  { to: ROUTES.services, label: 'Services', end: false },
  { to: ROUTES.howItWorks, label: 'How it works', end: false },
  { to: ROUTES.about, label: 'About', end: false },
  { to: ROUTES.contact, label: 'Contact', end: false },
] as const

export const FOOTER = [
  {
    title: 'Studio',
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
