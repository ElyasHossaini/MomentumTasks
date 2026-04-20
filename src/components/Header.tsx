import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { AhsLogoImg } from './AhsLogoImg'
import './Header.css'
import './AhsLogoImg.css'

const nav = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/contact', label: 'Contact' },
  { to: '/careers', label: 'Careers' },
] as const

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="shell site-header__inner">
        <NavLink to="/" className="site-header__brand" onClick={() => setOpen(false)}>
          <img
            src="/branding/momentum-logo.png"
            width={220}
            height={64}
            alt="Momentum Tasks Homecare"
            className="site-header__logo"
          />
        </NavLink>

        <nav id="site-nav" className={`site-header__nav ${open ? 'is-open' : ''}`} aria-label="Main navigation">
          {nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => `site-header__link ${isActive ? 'is-active' : ''}`}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="site-header__funded" aria-label="Public funding references (not endorsements)">
          <span className="site-header__funded-label">Funded by</span>
          <div className="site-header__funded-logos">
            <AhsLogoImg imgClassName="site-header__funded-img site-header__funded-img--ahs" />
            <img
              className="site-header__funded-img site-header__funded-img--abc"
              src="/branding/alberta-blue-cross.png"
              width={230}
              height={64}
              alt="Alberta Blue Cross"
              loading="eager"
              decoding="async"
            />
          </div>
        </div>

        <button
          type="button"
          className="site-header__menu-btn"
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
          <span className={`site-header__burger ${open ? 'is-open' : ''}`} aria-hidden />
        </button>
      </div>
    </header>
  )
}
