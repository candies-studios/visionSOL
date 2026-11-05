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
  email: '',     // e.g. 'hello@visionsol.in'
  phone: '',     // display format, e.g. '+91 98xxx xxxxx'
  location: '',  // e.g. 'Mumbai, Maharashtra, India'

  // WhatsApp number in international format, digits only (no +, spaces or dashes)
  // e.g. '919800000000'. When empty, WhatsApp buttons are hidden.
  whatsappNumber: '',
  whatsappMessage: "Hi visionSOL, I'd like to talk about a project.",

  // ---- SOCIAL LINKS (leave '' to hide) -----------------------
  socials: [
    { label: 'Instagram', url: '' },
    { label: 'LinkedIn', url: '' },
    { label: 'Facebook', url: '' },
    { label: 'YouTube', url: '' },
    { label: 'X', url: '' },
  ],

  // ---- CONTACT FORM -----------------------------------------
  // POST endpoint that accepts JSON (Formspree, Web3Forms, Getform,
  // your own API, etc). When empty the form validates but tells the
  // visitor it is not connected yet and offers email / WhatsApp instead.
  formEndpoint: '', // e.g. 'https://formspree.io/f/xxxxxxx'

  // Footer newsletter sign-up: POST endpoint accepting { email } as JSON
  // (Mailchimp/Brevo form API, Formspree, your own API). Empty = not connected.
  newsletterEndpoint: '',
}

export const activeSocials = () => site.socials.filter((s) => s.url)

export const whatsappLink = (message = site.whatsappMessage) =>
  site.whatsappNumber
    ? `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`
    : ''
