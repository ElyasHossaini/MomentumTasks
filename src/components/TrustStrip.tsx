import { approvedSupportWording } from '../content/siteCopy'
import { AhsLogoImg } from './AhsLogoImg'
import './TrustStrip.css'
import './AhsLogoImg.css'

export function TrustStrip() {
  return (
    <div className="trust-strip">
      <p className="trust-strip__support">{approvedSupportWording}</p>
      <div className="trust-strip__row" aria-label="Alberta Health Services and Alberta Blue Cross references">
        <AhsLogoImg imgClassName="trust-strip__ahs-img" />
        <img
          className="trust-strip__img"
          src="/branding/alberta-blue-cross.png"
          width={200}
          height={56}
          alt="Alberta Blue Cross"
          loading="lazy"
        />
      </div>
      <p className="trust-strip__note">Logos are contextual system references only—not endorsements.</p>
    </div>
  )
}
