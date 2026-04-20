import { useState } from 'react'
import type { FormEvent } from 'react'
import { contact, operations } from '../content/siteCopy'
import { submitContactForm } from '../lib/submitContactForm'
import { Link } from 'react-router-dom'
import './Page.css'

export function Contact() {
  const [status, setStatus] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    if (!data.get('consent')) {
      setStatus('Please confirm consent before sending.')
      return
    }

    const name = String(data.get('name') ?? '').trim()
    const email = String(data.get('email') ?? '').trim()
    const phone = String(data.get('phone') ?? '').trim()
    const topic = String(data.get('topic') ?? '').trim()
    const urgency = String(data.get('urgency') ?? '').trim()
    const ahsCaseManager = String(data.get('ahs_case_manager') ?? '').trim()
    const message = String(data.get('message') ?? '').trim()

    setIsSubmitting(true)
    setStatus(null)

    const result = await submitContactForm({
      name,
      email,
      phone,
      topic,
      urgency,
      ahsCaseManager,
      message,
    })

    setIsSubmitting(false)

    if (result.ok) {
      form.reset()
      setStatus('Message sent. We will get back to you as soon as we can.')
      return
    }

    setStatus(result.message)
  }

  return (
    <div className="page-contact">
      <section className="page-hero page-hero--compact page-contact__hero">
        <div className="shell">
          <p className="eyebrow">Contact &amp; intake</p>
          <h1 className="page-hero__title">Reach central intake / your care coordinator</h1>
          <p className="page-hero__lead">
            Urgent or complex situations: phone <a href={contact.phoneTel}>{contact.phone}</a> is prioritized when
            minutes matter. You can also email <a href={`mailto:${contact.email}`}>{contact.email}</a> or use the form
            below—choose the topic that best matches your question so intake can respond efficiently.
          </p>
          <p className="fine-print">{operations.intake}</p>
        </div>
      </section>

      <section className="page-section">
        <div className="shell contact-grid contact-grid--single">
          <form id="consultation" className="contact-form" onSubmit={onSubmit}>
            <h2 className="contact-form__title">Contact us</h2>
            <p className="fine-print">
              Describe your situation, timing, and whether an AHS care plan is already in place.{' '}
              <Link to="/privacy" className="text-link">
                Privacy &amp; consent
              </Link>
            </p>
            <label>
              Full name
              <input name="name" required autoComplete="name" />
            </label>
            <label>
              Email
              <input name="email" type="email" required autoComplete="email" />
            </label>
            <label>
              Phone
              <input name="phone" autoComplete="tel" />
            </label>
            <label>
              Topic
              <select name="topic" defaultValue="Care consultation">
                <option>Care consultation</option>
                <option>Eligibility / CDHCI questions</option>
                <option>Post-hospital / urgent support</option>
                <option>Respite for a family caregiver</option>
                <option>Homemaking / personal care</option>
                <option>Other</option>
              </select>
            </label>
            <label>
              Do you already have an AHS Home Care case manager?
              <select name="ahs_case_manager" defaultValue="Not sure">
                <option>Yes</option>
                <option>No</option>
                <option>Not sure</option>
              </select>
            </label>
            <label>
              Timing / urgency
              <select name="urgency" defaultValue="Within 1 week">
                <option>Same day / urgent discharge</option>
                <option>Within 24–72 hours</option>
                <option>Within 1 week</option>
                <option>Planning ahead</option>
              </select>
            </label>
            <label>
              How can we help?
              <textarea
                name="message"
                rows={4}
                required
                placeholder="Share context, preferred visit windows, and any professionals already involved. Do not include health card numbers."
              />
            </label>
            <label className="contact-form__consent">
              <input type="checkbox" name="consent" value="yes" required />I agree to the{' '}
              <Link to="/privacy">privacy &amp; consent notice</Link> and understand my message is sent securely to
              Momentum Tasks Homecare for follow-up. I understand that eligibility for publicly funded programs is never
              decided through this website.
            </label>
            <button type="submit" className="contact-form__submit" disabled={isSubmitting}>
              {isSubmitting ? 'Sending…' : 'Send message'}
            </button>
            {status ? <p className="contact-form__status">{status}</p> : null}
          </form>

          <div className="panel contact-aside">
            <h2>Direct details</h2>
            <ul className="checklist">
              <li>
                Phone:{' '}
                <a href={contact.phoneTel} className="inline-link">
                  {contact.phone}
                </a>{' '}
                (24/7 inquiry line)
              </li>
              <li>
                Email:{' '}
                <a href={`mailto:${contact.email}`} className="inline-link">
                  {contact.email}
                </a>
              </li>
              <li>
                Website:{' '}
                <a href={contact.website} className="inline-link" target="_blank" rel="noreferrer">
                  {contact.website.replace('https://', '')}
                </a>
              </li>
              {contact.facebookUrl ? (
                <li>
                  <a href={contact.facebookUrl} className="inline-link" target="_blank" rel="noreferrer">
                    Facebook
                  </a>
                </li>
              ) : null}
            </ul>
            <p className="fine-print">{operations.area}</p>
            <p className="fine-print">{operations.startTime}</p>
          </div>
        </div>
      </section>
    </div>
  )
}
