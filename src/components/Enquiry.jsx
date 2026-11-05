import { createContext, useContext, useEffect, useRef, useState } from 'react'
import { Send, Loader2, CheckCircle2, AlertCircle, X } from 'lucide-react'
import { site, whatsappLink } from '../config/site.js'

export const serviceOptions = ['Design', 'Content', 'Digital Marketing', 'Events', 'Multiple Services', 'Other']
const budgetOptions = ['Under ₹50,000', '₹50,000 – ₹2,00,000', '₹2,00,000 – ₹5,00,000', '₹5,00,000 – ₹10,00,000', 'Above ₹10,00,000', 'Not sure yet']
const empty = { name: '', company: '', email: '', phone: '', service: '', budget: '', message: '' }

function validate(v) {
  const e = {}
  if (v.name.trim().length < 2) e.name = 'Please enter your full name.'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.email.trim())) e.email = 'Please enter a valid email address.'
  const digits = v.phone.replace(/\D/g, '')
  if (digits.length < 7 || digits.length > 15) e.phone = 'Please enter a valid phone number.'
  if (!v.service) e.service = 'Please choose a service.'
  if (v.message.trim().length < 20) e.message = 'Please tell us a little more (at least 20 characters).'
  return e
}

function Field({ id, label, error, optional, children }) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-bold text-coal">
        {label}{' '}
        {optional ? <span className="font-medium text-slate">(optional)</span> : <span className="text-brand" aria-hidden="true">*</span>}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="mt-2 flex items-center gap-1.5 text-sm font-medium text-brand-deep">
          <AlertCircle size={14} aria-hidden="true" /> {error}
        </p>
      )}
    </div>
  )
}

const inputCls = (err) =>
  `w-full min-h-12 border bg-white px-4 py-3 text-coal outline-none transition placeholder:text-slate/60 focus:border-coal focus:ring-2 focus:ring-brand/30 ${
    err ? 'border-brand' : 'border-line'
  }`

/**
 * Lead form used on the Contact page and in the "Enquire now" pop-up.
 * Submits JSON to site.formEndpoint. When no endpoint is set it says so
 * honestly and offers email / WhatsApp instead of pretending to send.
 */
export function ContactForm({ preset = '', compact = false, idPrefix = '' }) {
  const [values, setValues] = useState({ ...empty, service: serviceOptions.includes(preset) ? preset : '' })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | sending | sent | error | offline
  const id = (k) => `${idPrefix}${k}`
  const wa = whatsappLink()

  const onChange = (e) => {
    const name = e.target.name
    setValues((v) => ({ ...v, [name]: e.target.value }))
    if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }))
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    const found = validate(values)
    setErrors(found)
    if (Object.keys(found).length) {
      document.getElementById(id(Object.keys(found)[0]))?.focus()
      return
    }
    if (!site.formEndpoint) return setStatus('offline')
    setStatus('sending')
    try {
      const res = await fetch(site.formEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ ...values, source: 'visionSOL website' }),
      })
      if (!res.ok) throw new Error(String(res.status))
      setStatus('sent')
      setValues(empty)
    } catch {
      setStatus('error')
    }
  }

  const mailto = site.email
    ? `mailto:${site.email}?subject=${encodeURIComponent(`Project enquiry – ${values.service || 'visionSOL'}`)}&body=${encodeURIComponent(
        `Name: ${values.name}\nCompany: ${values.company}\nEmail: ${values.email}\nPhone: ${values.phone}\nService: ${values.service}\nBudget: ${values.budget}\n\n${values.message}`,
      )}`
    : ''
  const a11y = (k) => ({ 'aria-invalid': !!errors[k], 'aria-describedby': errors[k] ? `${id(k)}-error` : undefined })

  if (status === 'sent') {
    return (
      <div role="status" className="border border-line bg-paper p-8">
        <CheckCircle2 size={36} className="text-brand" aria-hidden="true" />
        <p className="mt-5 text-2xl font-extrabold tracking-tight">Thank you. Your message is with us.</p>
        <p className="mt-2 text-slate">We'll review your project details and get back to you soon.</p>
        <button type="button" onClick={() => setStatus('idle')} className="mt-6 font-bold underline decoration-brand decoration-2 underline-offset-4">
          Send another message
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-5 sm:grid-cols-2">
      <Field id={id('name')} label="Full Name" error={errors.name}>
        <input id={id('name')} name="name" autoComplete="name" value={values.name} onChange={onChange} className={inputCls(errors.name)} {...a11y('name')} />
      </Field>
      <Field id={id('company')} label="Company Name" optional>
        <input id={id('company')} name="company" autoComplete="organization" value={values.company} onChange={onChange} className={inputCls()} />
      </Field>
      <Field id={id('email')} label="Email Address" error={errors.email}>
        <input id={id('email')} name="email" type="email" autoComplete="email" value={values.email} onChange={onChange} className={inputCls(errors.email)} {...a11y('email')} />
      </Field>
      <Field id={id('phone')} label="Phone Number" error={errors.phone}>
        <input id={id('phone')} name="phone" type="tel" autoComplete="tel" value={values.phone} onChange={onChange} className={inputCls(errors.phone)} {...a11y('phone')} />
      </Field>
      <Field id={id('service')} label="Service Required" error={errors.service}>
        <select id={id('service')} name="service" value={values.service} onChange={onChange} className={inputCls(errors.service)} {...a11y('service')}>
          <option value="">Select a service</option>
          {serviceOptions.map((o) => <option key={o}>{o}</option>)}
        </select>
      </Field>
      <Field id={id('budget')} label="Project Budget" optional>
        <select id={id('budget')} name="budget" value={values.budget} onChange={onChange} className={inputCls()}>
          <option value="">Select a range</option>
          {budgetOptions.map((o) => <option key={o}>{o}</option>)}
        </select>
      </Field>
      <div className="sm:col-span-2">
        <Field id={id('message')} label="Tell Us About Your Project" error={errors.message}>
          <textarea id={id('message')} name="message" rows={compact ? 4 : 6} value={values.message} onChange={onChange} className={`${inputCls(errors.message)} resize-y`} placeholder="Goals, timelines, audience: anything that helps us understand the project." {...a11y('message')} />
        </Field>
      </div>

      <div className="sm:col-span-2" aria-live="polite">
        {status === 'offline' && (
          <div className="mb-5 border-l-4 border-brand bg-paper p-5 text-sm leading-relaxed">
            <p className="font-bold">Online form submission isn't connected yet, so this message has not been sent.</p>
            <p className="mt-1 text-slate">
              {mailto || wa ? 'Please send your details directly instead:' : 'Please use the contact details on this site once they are published.'}
            </p>
            {(mailto || wa) && (
              <div className="mt-3 flex flex-wrap gap-4">
                {mailto && <a href={mailto} className="font-bold underline decoration-brand decoration-2 underline-offset-4">Send by email</a>}
                {wa && <a href={whatsappLink(`Hi visionSOL, I'm ${values.name}. ${values.message}`)} target="_blank" rel="noopener noreferrer" className="font-bold underline decoration-brand decoration-2 underline-offset-4">Send on WhatsApp</a>}
              </div>
            )}
          </div>
        )}
        {status === 'error' && (
          <p role="alert" className="mb-5 flex items-start gap-2 border-l-4 border-brand bg-paper p-5 text-sm font-semibold text-brand-deep">
            <AlertCircle size={18} className="shrink-0" aria-hidden="true" />
            Your message was not sent because of a connection problem. Please try again{site.email ? ` or email ${site.email}` : ''}.
          </p>
        )}
        <button
          type="submit"
          disabled={status === 'sending'}
          className="inline-flex min-h-12 items-center gap-2 rounded-full bg-brand px-8 py-3.5 font-bold text-white transition hover:bg-brand-deep disabled:opacity-60"
        >
          {status === 'sending' ? <Loader2 size={18} className="animate-spin" aria-hidden="true" /> : <Send size={18} aria-hidden="true" />}
          {status === 'sending' ? 'Sending…' : 'Send Message'}
        </button>
      </div>
    </form>
  )
}

/* ---------------- "Enquire now" pop-up ---------------- */
const EnquiryContext = createContext({ open: () => {} })
export const useEnquiry = () => useContext(EnquiryContext)

export function EnquiryProvider({ children }) {
  const [state, setState] = useState({ open: false, service: '' })
  const dialogRef = useRef(null)
  const lastFocus = useRef(null)

  const open = (service = '') => {
    lastFocus.current = document.activeElement
    setState({ open: true, service })
  }
  const close = () => {
    setState((s) => ({ ...s, open: false }))
    lastFocus.current?.focus?.()
  }

  useEffect(() => {
    if (!state.open) return
    document.body.style.overflow = 'hidden'
    dialogRef.current?.querySelector('input,select,textarea,button')?.focus()
    const onKey = (e) => e.key === 'Escape' && close()
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [state.open])

  return (
    <EnquiryContext.Provider value={{ open }}>
      {children}
      {state.open && (
        <div className="fixed inset-0 z-[70] flex items-end justify-center bg-ink/70 backdrop-blur-sm sm:items-center sm:p-6" onMouseDown={(e) => e.target === e.currentTarget && close()}>
          <div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="enquiry-title"
            className="max-h-[92svh] w-full max-w-2xl overflow-y-auto bg-white p-6 shadow-2xl sm:p-10"
          >
            <div className="flex items-start justify-between gap-6">
              <div>
                <p className="eyebrow text-slate">Enquire now</p>
                <h2 id="enquiry-title" className="display mt-3 text-3xl sm:text-4xl">
                  Ready to see your idea <span className="font-normal italic text-brand">take shape?</span>
                </h2>
              </div>
              <button type="button" onClick={close} className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-line hover:border-coal" aria-label="Close enquiry form">
                <X size={20} aria-hidden="true" />
              </button>
            </div>
            <div className="mt-8">
              <ContactForm preset={state.service} compact idPrefix="enq-" key={state.service} />
            </div>
          </div>
        </div>
      )}
    </EnquiryContext.Provider>
  )
}
