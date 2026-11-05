import { siInstagram, siFacebook, siYoutube, siX, siWhatsapp } from 'simple-icons'

// LinkedIn isn't included in simple-icons, so it is drawn here (square with "in" cut out).
const linkedin =
  'M5 2h14a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3z' +
  'M6 9.5h3V18H6z' +
  'M7.5 5.6a1.7 1.7 0 1 0 0 3.4 1.7 1.7 0 0 0 0-3.4z' +
  'M11 9.5h2.9v1.2c.5-.8 1.5-1.5 3-1.5 2.4 0 3.1 1.6 3.1 3.9V18h-3v-4.3c0-1.1-.3-1.9-1.4-1.9s-1.6.8-1.6 1.9V18h-3z'

const paths = {
  instagram: siInstagram.path,
  facebook: siFacebook.path,
  youtube: siYoutube.path,
  x: siX.path,
  whatsapp: siWhatsapp.path,
  linkedin,
}

export default function SocialIcon({ name, size = 18 }) {
  const d = paths[name]
  if (!d) return null
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" fillRule="evenodd" aria-hidden="true">
      <path d={d} />
    </svg>
  )
}
