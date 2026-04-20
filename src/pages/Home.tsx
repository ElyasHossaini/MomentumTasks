import { TrustStrip } from '../components/TrustStrip'
import { ButtonLink } from '../components/ButtonLink'
import { ServiceGrid, ServiceCtas } from '../components/ServiceGrid'
import { HowItWorks } from '../components/HowItWorks'
import {
  aboutNarrative,
  compliance,
  differentiation,
  faqItems,
  fundingDisclaimer,
  hero,
  operations,
  publicFundingTeaser,
  services,
  valueProposition,
  whyChooseUs,
} from '../content/siteCopy'
import './Page.css'

const homeServiceOrder = [
  'personal-care',
  'homemaking',
  'respite',
  'companionship',
  'condition-support',
  'medication-transport',
] as const

export function Home() {
  const homeServices = homeServiceOrder
    .map((id) => services.find((s) => s.id === id))
    .filter((s): s is (typeof services)[number] => Boolean(s))

  return (
    <>
      <section className="page-hero page-hero--home">
        <div className="shell page-hero__inner">
          <div className="page-hero__copy page-hero__copy--above-fold">
            <p className="eyebrow">Momentum Tasks Homecare · Calgary &amp; area</p>
            <h1 className="page-hero__title">{hero.title}</h1>
            <p className="page-hero__lead">{hero.subtitle}</p>
            <p className="page-hero__value">{valueProposition}</p>
            <div className="page-hero__actions">
              <ButtonLink to="/contact#consultation" variant="primary">
                {hero.primaryCta}
              </ButtonLink>
              <ButtonLink to="/contact#consultation" variant="secondary">
                {hero.secondaryCta}
              </ButtonLink>
            </div>
          </div>
          <div className="page-hero__panel page-hero__panel--image">
            <img
              src="/stockimages/homecarestockimage.jpg"
              alt="Caregiver supporting an older adult with a walker at home"
              className="page-hero__image"
              loading="eager"
            />
          </div>
        </div>
      </section>

      <section className="page-section page-section--alt home-hero-more" aria-label="Funding and how we work">
        <div className="shell home-hero-more__inner">
          <div className="funding-callout" role="note">
            <p className="funding-callout__highlight">{publicFundingTeaser}</p>
            <p className="funding-callout__detail">{fundingDisclaimer}</p>
          </div>
          <TrustStrip />
          <p className="fine-print home-hero-more__note">{differentiation}</p>
        </div>
      </section>

      <section className="page-section">
        <div className="shell">
          <div className="section-head">
            <h2>Home care services</h2>
          </div>
          <ServiceGrid items={homeServices} showConsultCta />
          <ServiceCtas />
        </div>
      </section>

      <HowItWorks />

      <section className="page-section page-section--alt">
        <div className="shell">
          <div className="section-cta">
            <ButtonLink to="/contact#consultation" variant="primary">
              {hero.primaryCta}
            </ButtonLink>
            <ButtonLink to="/contact#consultation" variant="secondary">
              {hero.secondaryCta}
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="page-section" id="about">
        <div className="shell split">
          <div className="prose prose--tight">
            <h2>Our story</h2>
            <p>{aboutNarrative.storyLead}</p>
            <p>{aboutNarrative.experience}</p>
            <p>
              <strong>Values we bring forward:</strong> {aboutNarrative.values.join(' · ')}.
            </p>
            <p className="fine-print">{aboutNarrative.leadershipNote}</p>
          </div>
          <div className="panel-stack">
            <div className="panel panel--tinted">
              <h3>Mission</h3>
              <p>{aboutNarrative.mission}</p>
            </div>
            <div className="panel panel--tinted">
              <h3>Vision</h3>
              <p>{aboutNarrative.vision}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section page-section--alt">
        <div className="shell split">
          <div className="panel">
            <h2>Why choose us</h2>
            <ul className="checklist">
              {whyChooseUs.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="panel">
            <h2>Trust, compliance &amp; credibility</h2>
            <ul className="checklist">
              {compliance.bullets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="fine-print">{compliance.concernsIntro}</p>
          </div>
        </div>
      </section>

      <section className="page-section concerns-section" id="concerns">
        <div className="shell concerns-section__inner">
          <div className="concerns-section__head">
            <h2>Questions or concerns about care</h2>
            <p>We keep a clear internal escalation pathway so families know what to expect.</p>
          </div>
          <ol className="concerns-pathway">
            {compliance.internalPathway.map((step, index) => {
              const body = step.replace(/^Step \d+:\s*/, '')
              return (
                <li key={step} className="concerns-pathway__item">
                  <span className="concerns-pathway__num" aria-hidden="true">
                    {index + 1}
                  </span>
                  <p className="concerns-pathway__text">{body}</p>
                </li>
              )
            })}
          </ol>
        </div>
      </section>

      <section className="page-section page-section--dark" id="faq">
        <div className="shell">
          <div className="section-head section-head--on-dark">
            <h2>Frequently asked questions</h2>
            <p>Essential answers for objections, funding language, and scope—tuned for search and clarity.</p>
          </div>
          <div className="faq faq--on-dark">
            {faqItems.map((item) => (
              <details key={item.q} className="faq__item faq__item--on-dark">
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
          <p className="fine-print fine-print--on-dark center-note">
            Serving {operations.area}
          </p>
        </div>
      </section>

    </>
  )
}
