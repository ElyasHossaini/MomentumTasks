import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { contact, operations } from '../content/siteCopy'
import { canonicalUrl, defaultOgImageUrl, getRouteSeo } from '../seo/routeMeta'
import { getSiteOrigin } from '../seo/siteOrigin'

function setMeta(attr: 'name' | 'property', key: string, content: string) {
  let el: HTMLMetaElement | null = null
  for (const m of document.head.querySelectorAll('meta')) {
    if (m.getAttribute(attr) === key) {
      el = m as HTMLMetaElement
      break
    }
  }
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function setLinkRel(rel: string, href: string) {
  let el = document.head.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

function setJsonLd(id: string, data: object) {
  const existing = document.getElementById(id)
  const script = (existing ?? document.createElement('script')) as HTMLScriptElement
  script.id = id
  script.type = 'application/ld+json'
  script.textContent = JSON.stringify(data)
  if (!existing) document.head.appendChild(script)
}

export function SeoHead() {
  const { pathname } = useLocation()

  useEffect(() => {
    const origin = getSiteOrigin()
    const { title, description } = getRouteSeo(pathname)
    const url = canonicalUrl(pathname)
    const image = defaultOgImageUrl()

    document.title = title
    setMeta('name', 'description', description)

    setMeta('property', 'og:type', 'website')
    setMeta('property', 'og:site_name', 'Momentum Tasks Homecare')
    setMeta('property', 'og:title', title)
    setMeta('property', 'og:description', description)
    setMeta('property', 'og:url', url)
    setMeta('property', 'og:image', image)
    setMeta('property', 'og:locale', 'en_CA')

    setMeta('name', 'twitter:card', 'summary_large_image')
    setMeta('name', 'twitter:title', title)
    setMeta('name', 'twitter:description', description)
    setMeta('name', 'twitter:image', image)

    setLinkRel('canonical', url)

    const localBusiness: Record<string, unknown> = {
      '@context': 'https://schema.org',
      '@type': 'HomeHealthCareService',
      name: 'Momentum Tasks Homecare',
      url: origin,
      telephone: contact.phone,
      email: contact.email,
      image,
      description: description.slice(0, 320),
      areaServed: {
        '@type': 'AdministrativeArea',
        name: 'Calgary',
        containedInPlace: { '@type': 'Country', name: 'Canada' },
      },
      availableLanguage: ['English'],
    }
    if (contact.facebookUrl) localBusiness.sameAs = [contact.facebookUrl]
    setJsonLd('ld-json-localbusiness', localBusiness)

    setJsonLd('ld-json-website', {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'Momentum Tasks Homecare',
      url: `${origin}/`,
      description: operations.area,
      publisher: { '@type': 'Organization', name: 'Momentum Tasks Homecare', url: origin },
    })
  }, [pathname])

  return null
}
