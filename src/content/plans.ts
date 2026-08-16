export type PlanId = 'silver' | 'gold'

export type Plan = {
  id: PlanId
  name: string
  eyebrow: string
  price: number
  popular?: boolean
  blurb: string
  features: string[]
}

export const SILVER: Plan = {
  id: 'silver',
  name: 'Silver',
  eyebrow: 'You apply · we prepare',
  price: 50,
  blurb:
    'Get a job-specific, ATS-ready resume for every posting — then send applications on your own schedule.',
  features: [
    'Unlimited job-specific resumes',
    '90+ ATS score on every resume',
    'Job-wise customization in minutes',
    'Student portal for tracking',
    'ATS-friendly IT resume templates',
    'Keyword optimization for each description',
    'Download and manage every version',
    'Email support for resume questions',
  ],
}

export const GOLD: Plan = {
  id: 'gold',
  name: 'Gold',
  eyebrow: 'We apply for you',
  price: 200,
  popular: true,
  blurb:
    'Specialists run daily outreach while you study, certify, and interview. Wide coverage without the grind.',
  features: [
    'Premium resume tailored to every job',
    '95+ ATS-optimized score target',
    'Up to 50 applications per day',
    'Daily IT applications by specialists',
    'Dedicated account manager',
    'Dashboard: jobs, descriptions, resumes',
    'Industry-specific keyword strategy',
    'Performance monitoring and refinements',
    'Mock interviews and career coaching',
    'Certification roadmap and guidance',
  ],
}

export const PLANS: Plan[] = [SILVER, GOLD]

export function isPlanId(value: string | null): value is PlanId {
  return value === 'silver' || value === 'gold'
}
