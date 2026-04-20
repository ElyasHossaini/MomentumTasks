import { Link } from 'react-router-dom'
import { hero, services } from '../content/siteCopy'
import { ButtonLink } from './ButtonLink'
import './ServiceGrid.css'

type Service = (typeof services)[number]

export function ServiceGrid({
  items,
  dense,
  showConsultCta,
}: {
  items: readonly Service[]
  dense?: boolean
  showConsultCta?: boolean
}) {
  return (
    <div className={`service-grid ${dense ? 'service-grid--dense' : ''}`}>
      {items.map((s) => (
        <article
          key={s.id}
          className={`service-card ${showConsultCta ? 'service-card--with-cta' : ''}`}
          id={s.id}
        >
          <h3 className="service-card__title">{s.title}</h3>
          <p className="service-card__summary">{s.summary}</p>
          <ul className="service-card__bullets">
            {s.bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
          {showConsultCta ? (
            <div className="service-card__cta">
              <ButtonLink to="/#how-it-works" variant="secondary" className="service-card__learn-btn">
                Learn how
              </ButtonLink>
              <ButtonLink to="/contact#consultation" variant="primary" className="service-card__consult-btn">
                {hero.primaryCta}
              </ButtonLink>
            </div>
          ) : null}
        </article>
      ))}
    </div>
  )
}

export function ServiceCtas() {
  return (
    <p className="service-grid__cta-row">
      <Link to="/services#cdhci" className="text-link">
        Learn how CDHCI may apply
      </Link>
      <span className="service-grid__dot" aria-hidden>
        ·
      </span>
      <Link to="/contact" className="text-link">
        Contact us to plan next steps
      </Link>
    </p>
  )
}
