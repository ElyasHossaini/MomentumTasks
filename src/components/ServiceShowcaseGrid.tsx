import { Link } from 'react-router-dom'
import { hero, services, servicesShowcaseCopy } from '../content/siteCopy'
import './ServiceShowcaseGrid.css'

type ShowcaseId = keyof typeof servicesShowcaseCopy
type IconName = (typeof servicesShowcaseCopy)[ShowcaseId]['icon']

function ServiceIcon({ name }: { name: IconName }) {
  const a = { width: 28, height: 28, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.75 }
  switch (name) {
    case 'heart':
      return (
        <svg {...a} aria-hidden>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 1 0-7.78 7.78l1.06 1.06L12 21.35l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
          />
        </svg>
      )
    case 'home':
      return (
        <svg {...a} aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z" />
        </svg>
      )
    case 'clock':
      return (
        <svg {...a} aria-hidden>
          <circle cx="12" cy="12" r="9" />
          <path strokeLinecap="round" d="M12 7v5l3 2" />
        </svg>
      )
    case 'people':
      return (
        <svg {...a} aria-hidden>
          <circle cx="9" cy="7" r="3" />
          <circle cx="17" cy="9" r="2.5" />
          <path strokeLinecap="round" d="M3 19c0-2.8 2.5-5 6-5s6 2.2 6 5M14 19c0-2 2-3.5 4-3.5" />
        </svg>
      )
    case 'shield':
      return (
        <svg {...a} aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3 20 7v6c0 4-3 8-8 9-5-1-8-5-8-9V7l8-4Z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="m9 12 2 2 4-4" />
        </svg>
      )
    case 'route':
      return (
        <svg {...a} aria-hidden>
          <circle cx="6" cy="18" r="2.5" />
          <circle cx="18" cy="6" r="2.5" />
          <path strokeLinecap="round" d="M8.5 16.5c2-3 6-6 11-8" />
        </svg>
      )
    default:
      return null
  }
}

type Props = {
  ids: readonly ShowcaseId[]
  sectionTitle?: string
}

export function ServiceShowcaseGrid({ ids, sectionTitle }: Props) {
  return (
    <div className="service-showcase">
      {sectionTitle ? <h3 className="service-showcase__section-title">{sectionTitle}</h3> : null}
      <div className="service-showcase__grid">
        {ids.map((id) => {
          const meta = services.find((s) => s.id === id)
          const copy = servicesShowcaseCopy[id]
          if (!meta || !copy) return null
          return (
            <article key={id} className="svc-card" id={id}>
              <div className="svc-card__head">
                <span className="svc-card__icon" aria-hidden>
                  <ServiceIcon name={copy.icon} />
                </span>
                <h3 className="svc-card__title">{meta.title}</h3>
              </div>
              <p className="svc-card__tagline">{copy.tagline}</p>
              <ul className="svc-card__bullets">
                {copy.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
              <div className="svc-card__actions">
                <Link className="svc-card__btn svc-card__btn--solid" to="/contact#consultation">
                  {hero.secondaryCta}
                  <span className="svc-card__chevron" aria-hidden>
                    →
                  </span>
                </Link>
              </div>
            </article>
          )
        })}
      </div>
    </div>
  )
}
