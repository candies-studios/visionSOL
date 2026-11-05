import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react'
import Logo from './Logo.jsx'
import { site, activeSocials, postForm, telHref, whatsappLink } from '../config/site.js'
import SocialIcon from './SocialIcon.jsx'
import { services } from '../data/services.js'

const quick = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/services', label: 'Services' },
  { to: '/work', label: 'Our Work' },
  { to: '/industries', label: 'Industries' },
  { to: '/contact', label: 'Contact' },
]

export function ContactLine({ icon: Icon, value, href, placeholder, dark = false, external = false }) {
  return (
    <li className="flex items-start gap-3">
      <Icon size={18} className={`mt-0.5 shrink-0 ${dark ? 'text-brand-hi' : 'text-brand'}`} aria-hidden="true" />
      {value && href ? (
        <a
          href={href}
          {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
          className={`transition ${dark ? 'hover:text-brand-hi' : 'hover:text-brand'} ${value.includes('@') ? 'break-all' : ''}`}
        >
          {value}
        </a>
      ) : value ? (
        <span>{value}</span>
      ) : (
        <span className={`italic ${dark ? 'text-haze/70' : 'text-slate/80'}`}>{placeholder}</span>
      )}
    </li>
  )
}

function Newsletter() {
  const [email, setEmail] = useState('')
  const [msg, setMsg] = useState(null)
  const submit = async (e) => {
    e.preventDefault()
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim())) return setMsg({ ok: false, text: 'Please enter a valid email address.' })
    if (!site.newsletterEndpoint) return setMsg({ ok: false, text: "Newsletter sign-up isn't connected yet, so you have not been subscribed." })
    setMsg({ ok: true, text: 'Subscribing…' })
    try {
      await postForm(site.newsletterEndpoint, { email, form: 'Newsletter sign-up' }, 'New newsletter subscriber – visionSOL website')
      setMsg({ ok: true, text: "You're subscribed. Look out for our next note." })
      setEmail('')
    } catch (err) {
      setMsg({
        ok: false,
        text: err.needsActivation
          ? "Sign-ups open once the site owner confirms the activation email. You haven't been subscribed yet; please try again later."
          : "We couldn't complete your sign-up just now. Please try again in a moment.",
      })
    }
  }
  return (
    <form onSubmit={submit} noValidate className="mt-6">
      <label htmlFor="newsletter-email" className="sr-only">Email address</label>
      <div className="flex border-b-2 border-coal focus-within:border-brand">
        <input
          id="newsletter-email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your work email"
          autoComplete="email"
          className="min-h-12 w-full min-w-0 bg-transparent py-3 text-coal outline-none placeholder:text-slate/70"
        />
        <button type="submit" className="flex h-12 w-12 shrink-0 items-center justify-center text-coal hover:text-brand" aria-label="Subscribe">
          <ArrowRight size={20} aria-hidden="true" />
        </button>
      </div>
      {msg && <p className={`mt-3 text-sm ${msg.ok ? 'text-coal' : 'text-brand-deep'}`} aria-live="polite">{msg.text}</p>}
    </form>
  )
}

export default function Footer() {
  const wa = whatsappLink()
  const links = [...(wa ? [{ label: 'WhatsApp', icon: 'whatsapp', url: wa }] : []), ...activeSocials()]
  const year = new Date().getFullYear()

  return (
    <footer className="bg-paper text-coal">
      <div className="container-x border-b border-line py-16 md:py-20">
        <p className="display max-w-5xl text-5xl sm:text-6xl lg:text-[5.5rem]">
          Your vision, <span className="font-normal italic text-brand">our solution.</span>
        </p>
      </div>

      <div className="container-x grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Logo onDark={false} className="h-14" />
          <p className="mt-6 max-w-sm leading-relaxed text-slate">
            A creative solutions agency bringing strategy, creativity and execution together across design, content,
            digital marketing and events.
          </p>
          <p className="mt-8 text-xs font-bold uppercase tracking-[0.2em]">The monthly note</p>
          <p className="mt-2 text-sm text-slate">Ideas on brands, content and campaigns. One email a month.</p>
          <Newsletter />
        </div>

        <div className="lg:col-span-2">
          <h2 className="text-xs font-bold uppercase tracking-[0.2em]">Navigate</h2>
          <ul className="mt-6 space-y-3">
            {quick.map((q) => (
              <li key={q.to}><Link to={q.to} className="text-slate transition hover:text-brand">{q.label}</Link></li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h2 className="text-xs font-bold uppercase tracking-[0.2em]">Services</h2>
          <ul className="mt-6 space-y-3">
            {services.map((s) => (
              <li key={s.slug}><Link to={`/services/${s.slug}`} className="text-slate transition hover:text-brand">{s.name}</Link></li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h2 className="text-xs font-bold uppercase tracking-[0.2em]">Get in touch</h2>
          <ul className="mt-6 space-y-4 text-slate">
            <ContactLine icon={Mail} value={site.email} href={`mailto:${site.email}`} placeholder="[Email address]" />
            {site.phones.length ? (
              site.phones.map((n) => <ContactLine key={n} icon={Phone} value={n} href={telHref(n)} />)
            ) : (
              <ContactLine icon={Phone} placeholder="[Phone number]" />
            )}
            <ContactLine icon={MapPin} value={site.location} href={site.mapUrl} external placeholder="[Office location]" />
          </ul>
        </div>
      </div>

      {links.length > 0 && (
        <div className="container-x flex flex-col gap-4 border-t border-line py-8 sm:flex-row sm:items-center sm:gap-8">
          <p className="text-xs font-bold uppercase tracking-[0.2em]">Follow &amp; chat with us</p>
          <ul className="flex flex-wrap gap-3">
            {links.map((s) => (
              <li key={s.label}>
                <a
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  title={s.label}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-coal/15 bg-white text-coal transition hover:-translate-y-0.5 hover:border-brand hover:bg-brand hover:text-white"
                >
                  <SocialIcon name={s.icon} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="border-t border-line">
        <div className="container-x py-6 text-sm text-slate">
          <p>© {year} visionSOL. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
