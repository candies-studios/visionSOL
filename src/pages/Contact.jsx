import { useSearchParams } from 'react-router-dom'
import { Mail, Phone, MapPin, MessageCircle, ArrowUpRight } from 'lucide-react'
import { usePageMeta, PageHero, Reveal } from '../components/ui.jsx'
import { ContactLine } from '../components/Footer.jsx'
import { ContactForm } from '../components/Enquiry.jsx'
import { site, activeSocials, whatsappLink } from '../config/site.js'

export default function Contact() {
  usePageMeta('Contact Us', "Tell visionSOL about your next project: design, content, digital marketing or events. Let's talk about your next big idea.")
  const [params] = useSearchParams()
  const wa = whatsappLink()
  const socials = activeSocials()

  return (
    <>
      <PageHero
        eyebrow="Contact us"
        title="Let's Talk About Your"
        accent="Next Big Idea."
        text="Share a few details and we'll get back to you to understand your goals and suggest the right approach."
      />

      <section className="py-20 md:py-28">
        <div className="container-x grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <ContactForm preset={params.get('service') || ''} />
          </div>

          <aside className="lg:col-span-5">
            <Reveal className="bg-ink p-8 text-white/85 md:p-10">
              <h2 className="text-2xl font-extrabold tracking-tight text-white">Reach us directly</h2>
              <ul className="mt-8 space-y-5">
                <ContactLine dark icon={Mail} value={site.email} href={`mailto:${site.email}`} placeholder="[Email address]" />
                <ContactLine dark icon={Phone} value={site.phone} href={`tel:${site.phone.replace(/[^+\d]/g, '')}`} placeholder="[Phone number]" />
                <ContactLine dark icon={MapPin} value={site.location} placeholder="[Office location]" />
              </ul>

              {wa ? (
                <a href={wa} target="_blank" rel="noopener noreferrer" className="mt-10 flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 font-bold text-ink transition hover:brightness-105">
                  <MessageCircle size={20} aria-hidden="true" /> Enquire on WhatsApp
                </a>
              ) : (
                <p className="mt-10 flex items-center gap-2 rounded-full border border-dashed border-white/25 px-6 py-3.5 text-sm text-haze">
                  <MessageCircle size={18} aria-hidden="true" /> WhatsApp enquiries coming soon
                </p>
              )}

              {socials.length > 0 && (
                <div className="mt-10 border-t border-white/10 pt-8">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-white">Follow us</p>
                  <ul className="mt-4 flex flex-wrap gap-3">
                    {socials.map((s) => (
                      <li key={s.label}>
                        <a href={s.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 rounded-full border border-white/15 px-4 py-2 text-sm font-semibold hover:border-brand-hi hover:text-brand-hi">
                          {s.label} <ArrowUpRight size={14} aria-hidden="true" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <p className="mt-10 border-t border-white/10 pt-8 text-sm text-haze">visionSOL is a sister company of {site.parent}.</p>
            </Reveal>
          </aside>
        </div>
      </section>
    </>
  )
}
