import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import './ButtonLink.css'

type Variant = 'primary' | 'secondary' | 'ghost'

type Props = {
  to?: string
  href?: string
  children: ReactNode
  variant?: Variant
  className?: string
  /** When using href, open in a new tab (e.g. external reviews). */
  external?: boolean
}

export function ButtonLink({ to, href, children, variant = 'primary', className = '', external }: Props) {
  const cls = `btn btn-${variant} ${className}`.trim()

  if (href) {
    return (
      <a className={cls} href={href} {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}>
        {children}
      </a>
    )
  }

  return (
    <Link className={cls} to={to ?? '#'}>
      {children}
    </Link>
  )
}
