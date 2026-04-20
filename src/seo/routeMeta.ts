import { getSiteOrigin } from './siteOrigin'

const brand = 'Momentum Tasks Homecare'

export type RouteSeo = {
  title: string
  description: string
}

const defaultDesc =
  'Trusted Calgary home care with culturally respectful support. Help navigating Alberta Health Services Continuing Care, CDHCI, and Alberta Blue Cross pathways where applicable. Request a care consultation.'

const routes: Record<string, RouteSeo> = {
  '/': {
    title: `${brand} Calgary | Home Care, AHS & Continuing Care Support`,
    description: defaultDesc,
  },
  '/services': {
    title: `Home Care Services Calgary | ${brand}`,
    description:
      'Personal care, homemaking, respite, companionship, and condition support aligned with AHS care plans. CDHCI and continuing care context for Calgary families.',
  },
  '/contact': {
    title: `Contact & Intake | ${brand} Calgary`,
    description:
      'Reach central intake or your care coordinator. Phone, email, or secure website contact form for care consultation, eligibility questions, and post-hospital support.',
  },
  '/careers': {
    title: `Careers | ${brand} Calgary`,
    description:
      'Join a compassionate Calgary home care team aligned with Alberta continuing care standards. Caregiving roles with cultural respect and strong communication.',
  },
  '/privacy': {
    title: `Privacy & Consent | ${brand}`,
    description:
      'Privacy and consent information for Momentum Tasks Homecare website visitors and contact form users in Calgary and area.',
  },
}

export function getRouteSeo(pathname: string): RouteSeo {
  const key = pathname.endsWith('/') && pathname.length > 1 ? pathname.slice(0, -1) : pathname
  return routes[key] ?? routes['/']!
}

export function canonicalUrl(pathname: string): string {
  const origin = getSiteOrigin()
  if (!pathname || pathname === '/') return `${origin}/`
  const path = pathname.startsWith('/') ? pathname : `/${pathname}`
  return `${origin}${path}`.replace(/\/+$/, '') || `${origin}/`
}

export function defaultOgImageUrl(): string {
  return `${getSiteOrigin()}/branding/momentum-logo.png`
}
