import { contact } from '../content/siteCopy'
import './Page.css'

export function Privacy() {
  return (
    <section className="page-section page-privacy">
      <div className="shell page-privacy__inner prose prose--narrow">
        <h1>Privacy &amp; consent</h1>
        <p>
          When you submit the contact form, your message is sent to our secure mail server and delivered to the
          organization’s inbox. Only information you enter in the form is transmitted. Do not include health card
          numbers or other highly sensitive identifiers in the form unless your care team has directed you to do so.
        </p>
        <p>
          Final privacy policy, consent language for continuing care referrals, and any cookie or analytics disclosures
          should be reviewed by the organization before launch. This placeholder exists so checkbox consent on the contact
          page has a destination today.
        </p>
        <p>
          To request deletion of email correspondence or to ask privacy questions, write to{' '}
          <a href={`mailto:${contact.email}`}>{contact.email}</a> or call the intake line listed on
          the contact page.
        </p>
      </div>
    </section>
  )
}
