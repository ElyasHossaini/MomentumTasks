import { contact } from '../content/siteCopy'

/** Canonical site origin for meta tags and sitemap (lowercased host). */
export function getSiteOrigin(): string {
  try {
    const u = new URL(contact.website)
    return `${u.protocol}//${u.hostname.toLowerCase()}${u.port ? `:${u.port}` : ''}`
  } catch {
    return 'https://momentumtask.homecare.ca'
  }
}
