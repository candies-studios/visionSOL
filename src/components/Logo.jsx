import { site, asset } from '../config/site.js'

/**
 * Brand logo.
 * Shows the official logo file from src/config/site.js (logo / logoLight).
 * Until those are set, a neutral text wordmark stands in.
 * The image keeps its original proportions: only its height is set.
 */
export default function Logo({ onDark = true, className = 'h-9' }) {
  const src = onDark ? site.logoLight || site.logo : site.logo || site.logoLight

  if (src) {
    return <img src={asset(src)} alt={site.logoAlt} className={`${className} w-auto object-contain`} />
  }

  return (
    <span
      className={`inline-flex items-center text-[1.6rem] leading-none tracking-[-0.03em] ${
        onDark ? 'text-white' : 'text-coal'
      }`}
      aria-label={site.logoAlt}
    >
      <span className="font-light">vision</span>
      <span className={`font-extrabold ${onDark ? 'text-brand-hi' : 'text-brand'}`}>SOL</span>
    </span>
  )
}
