import { ButtonLink } from '../components/ButtonLink'
import { contact } from '../content/siteCopy'
import './Page.css'

export function Careers() {
  return (
    <>
      <section className="page-hero page-hero--compact">
        <div className="shell">
          <p className="eyebrow">Careers</p>
          <h1 className="page-hero__title">Join a team built on compassion and reliability</h1>
          <p className="page-hero__lead">
            We are growing thoughtfully across Calgary&apos;s multicultural communities. If you are interested in caregiving
            roles aligned with Alberta continuing care standards—with strong communication and cultural respect—we would like
            to hear from you.
          </p>
        </div>
      </section>

      <section className="page-section">
        <div className="shell prose">
          <p>
            Please send a brief introduction and your resume to{' '}
            <a href={`mailto:${contact.email}`}>{contact.email}</a> to ask how hiring works today. If you would like a
            callback, include the best number to reach you in your email.
          </p>
          <p className="fine-print">
            This section can be expanded later with open roles, requirements, and an application form when hiring details
            are finalized.
          </p>
          <div className="section-cta">
            <ButtonLink href={`mailto:${contact.email}?subject=Careers%20inquiry`} variant="primary">
              Email careers inquiry
            </ButtonLink>
            <ButtonLink to="/contact" variant="secondary">
              Go to contact page
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  )
}
