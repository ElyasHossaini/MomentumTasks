import { Link } from 'react-router-dom'
import { contact } from '../content/siteCopy'
import './MobileCallBar.css'

/** Standard mobile pattern: quick phone + consultation entry (per operations guidance). */
export function MobileCallBar() {
  return (
    <div className="mobile-callbar" aria-label="Quick contact">
      <a className="mobile-callbar__btn" href={contact.phoneTel}>
        Call {contact.phone}
      </a>
      <Link className="mobile-callbar__btn mobile-callbar__btn--ghost" to="/contact#consultation">
        Request consultation
      </Link>
    </div>
  )
}
