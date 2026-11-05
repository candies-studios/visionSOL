/**
 * ============================================================
 *  visionSOL – SITE SETTINGS
 *  Edit this one file to change contact details, social links,
 *  the WhatsApp number, the logo and the contact-form endpoint.
 *  Leave a value as '' (empty) and the site hides it or shows a
 *  neutral placeholder — nothing fake is ever displayed.
 * ============================================================
 */

/** Turns a path inside /public into a URL that works wherever the site is hosted. */
export const asset = (path) => (path && path.startsWith('/') ? import.meta.env.BASE_URL + path.slice(1) : path)

export const site = {
  name: 'visionSOL',
  parent: 'Seerweb ERP Solutions Pvt Ltd',
  url: '', // e.g. 'https://www.visionsol.in' — used for canonical / OG tags

  // ---- LOGO -------------------------------------------------
  // Put your official logo files in /public/brand/ and set the paths.
  // logo      → used on light backgrounds (navbar after scroll, light sections)
  // logoLight → used on dark backgrounds (hero navbar, footer). Can be the same file.
  // The navbar and footer are light, so only `logo` is needed today.
  logo: '/brand/visionsol-logo.png', // official logo (light backgrounds)
  logoLight: '', // optional reversed/white version for dark backgrounds
  logoAlt: 'visionSOL',

  // ---- CONTACT ----------------------------------------------
  // (from seerweb.in/contact-us)
  email: 'vikram@visionsol.site',
  // Shown in this order. The first is the main number.
  phones: ['+91 22 6246 6246', '+91 99992 66246', '+91 93200 80409'],
  location: 'Office No. 1902, G Square Business Park, Sector 30A, Vashi, Navi Mumbai, Maharashtra 400703',
  mapUrl: 'https://www.google.com/maps/search/?api=1&query=G+Square+Business+Park+Sector+30A+Vashi+Navi+Mumbai+400703',

  // WhatsApp number in international format, digits only (no +, spaces or dashes)
  // e.g. '919800000000'. When empty, WhatsApp buttons are hidden.
  whatsappNumber: '919320080409',
  whatsappMessage: "Hi visionSOL, I'd like to talk about a project.",

  // ---- SOCIAL LINKS (leave '' to hide) -----------------------
  socials: [
    // Seerweb / Vision Solutions accounts listed on seerweb.in.
    // Replace with visionSOL's own profiles when they exist.
    // `icon` names match src/components/SocialIcon.jsx
    { label: 'Instagram', icon: 'instagram', url: 'https://www.instagram.com/seerweb_' },
    { label: 'LinkedIn', icon: 'linkedin', url: 'https://www.linkedin.com/company/vision-solutions-tally' },
    { label: 'Facebook', icon: 'facebook', url: 'https://www.facebook.com/SeerwebERPSolutions/' },
    { label: 'YouTube', icon: 'youtube', url: 'https://www.youtube.com/channel/UCc87Rt4RHD4As-WxWF66RDw' },
    { label: 'X', icon: 'x', url: 'https://twitter.com/VisionSolTally' },
  ],

  // ---- FORMS ------------------------------------------------
  // Both forms send their details by email through FormSubmit (free, no account):
  // https://formsubmit.co. The FIRST submission sends an "Activate Form" email to
  // the address below. Click that link once; after that every enquiry and
  // newsletter sign-up arrives in this inbox.
  // To use Formspree, Web3Forms or your own API instead, paste its JSON POST URL.
  formEndpoint: 'https://formsubmit.co/ajax/vikram@visionsol.site',
  newsletterEndpoint: 'https://formsubmit.co/ajax/vikram@visionsol.site',
}

/**
 * Sends a form as JSON and resolves only when the service confirms delivery.
 * Understands FormSubmit's reply ({ success: "true" | "false", message }).
 */
export async function postForm(endpoint, data, subject) {
  const res = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({ ...data, _subject: subject, _template: 'table', _captcha: 'false' }),
  })
  let body = null
  try {
    body = await res.json()
  } catch {
    /* some services reply without JSON */
  }
  if (!res.ok || (body && (body.success === false || body.success === 'false'))) {
    const err = new Error(body?.message || `Request failed (${res.status})`)
    err.needsActivation = /activat/i.test(body?.message || '')
    throw err
  }
  return body
}

export const telHref = (n) => `tel:${n.replace(/[^+\d]/g, '')}`

export const activeSocials = () => site.socials.filter((s) => s.url)

export const whatsappLink = (message = site.whatsappMessage) =>
  site.whatsappNumber
    ? `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`
    : ''
