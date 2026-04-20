import { Link } from 'react-router-dom'
import { contact } from '../content/siteCopy'
import './Footer.css'

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell site-footer__grid">
        <div>
          <p className="site-footer__brand">Momentum Tasks Homecare</p>
          <p className="site-footer__tag">
            Compassionate, culturally respectful home care in Calgary, supporting families through private services and
            publicly supported pathways where applicable.
          </p>
          <p className="site-footer__disclaimer">
            Alberta Health Services and Alberta Blue Cross names and marks are contextual references only; we are an
            independent provider and not endorsed by those organizations unless formally stated in writing.
          </p>
        </div>
        <div>
          <p className="site-footer__heading">Contact</p>
          <ul className="site-footer__list">
            <li>
              <a href={contact.phoneTel}>Phone: {contact.phone}</a>
            </li>
            <li>
              <a href={`mailto:${contact.email}`}>Email: {contact.email}</a>
            </li>
            <li>
              <a href={contact.website} target="_blank" rel="noreferrer">
                Website
              </a>
            </li>
            {contact.facebookUrl ? (
              <li>
                <a href={contact.facebookUrl} target="_blank" rel="noreferrer">
                  Facebook
                </a>
              </li>
            ) : null}
          </ul>
        </div>
        <div>
          <p className="site-footer__heading">Explore</p>
          <ul className="site-footer__list">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/#about">About &amp; story</Link>
            </li>
            <li>
              <Link to="/#faq">FAQ</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/careers">Careers</Link>
            </li>
            <li>
              <Link to="/privacy">Privacy</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="shell site-footer__legal">
        <p>
          Non-medical home care aligned with Alberta Continuing Care Health Service Standards. Public funding references
          use “may be eligible” language; final decisions belong to AHS assessment and authorization.
        </p>
      </div>
    </footer>
  )
}
