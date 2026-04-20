import { useState } from 'react'

type Props = {
  className?: string
  imgClassName?: string
}

export function AhsLogoImg({ className, imgClassName }: Props) {
  const [useFallback, setUseFallback] = useState(false)

  if (useFallback) {
    const cls = [className, imgClassName].filter(Boolean).join(' ')
    return (
      <div className={cls || undefined} aria-label="Alberta Health Services">
        <span className="ahs-fallback">
          <span className="ahs-fallback__line1">Alberta Health</span>
          <span className="ahs-fallback__line2">Services</span>
        </span>
      </div>
    )
  }

  return (
    <img
      className={imgClassName}
      src="/branding/ahs.png"
      width={168}
      height={44}
      alt="Alberta Health Services"
      loading="eager"
      decoding="async"
      onError={() => setUseFallback(true)}
    />
  )
}
