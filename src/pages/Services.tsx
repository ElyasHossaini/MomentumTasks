import { TrustStrip } from '../components/TrustStrip'
import { ButtonLink } from '../components/ButtonLink'
import { ServiceShowcaseGrid } from '../components/ServiceShowcaseGrid'
import {
  approvedSupportWording,
  cdhciExplainer,
  fundingDisclaimer,
  publicFundingTeaser,
  servicePlanExplainer,
  servicesMoreIds,
  servicesPageHeading,
  servicesShowcaseIds,
} from '../content/siteCopy'
import './Page.css'

export function Services() {
  return (
    <>
      <section className="services-landing">
        <div className="shell services-landing__inner">
          <div className="services-landing__head">
            <h1 className="services-landing__title">{servicesPageHeading.title}</h1>
            <p className="services-landing__subtitle">{servicesPageHeading.subtitle}</p>
          </div>
          <ServiceShowcaseGrid ids={servicesShowcaseIds} />
          <p className="services-landing__note">{approvedSupportWording}</p>
          <TrustStrip />
        </div>
      </section>

      <section className="page-section">
        <div className="shell prose prose--narrow service-plan-centered">
          <h2>{servicePlanExplainer.title}</h2>
          <p>{servicePlanExplainer.body}</p>
        </div>
      </section>

      <section className="page-section page-section--alt" id="cdhci">
        <div className="shell">
          <div className="funding-callout funding-callout--large">
            <p className="funding-callout__highlight">{publicFundingTeaser}</p>
            <h2 className="funding-callout__title">{cdhciExplainer.title}</h2>
            <p className="funding-callout__lead">{cdhciExplainer.lead}</p>
            <ul className="checklist funding-callout__list">
              {cdhciExplainer.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
            <p className="fine-print">{fundingDisclaimer}</p>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="shell">
          <ServiceShowcaseGrid ids={servicesMoreIds} sectionTitle="Additional supports" />
          <div className="section-cta services-landing__cta">
            <ButtonLink to="/contact#consultation" variant="primary">
              Request care consultation
            </ButtonLink>
            <ButtonLink to="/contact#consultation" variant="secondary">
              Ask about eligibility
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  )
}
