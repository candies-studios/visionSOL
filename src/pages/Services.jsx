import { Link } from 'react-router-dom'
import { Check } from 'lucide-react'
import { usePageMeta, PageHero, Reveal, Button, ArrowLink } from '../components/ui.jsx'
import { ServiceArt } from '../components/visuals.jsx'
import { CTASection } from '../components/sections.jsx'
import { services } from '../data/services.js'

const enquire = (s) => `/contact?service=${encodeURIComponent(s.name)}`

function Benefits({ items, light }) {
  return (
    <ul className="mt-12 grid gap-8 sm:grid-cols-3">
      {items.map((b) => (
        <li key={b.title} className={`border-t-2 pt-5 ${light ? 'border-brand-hi' : 'border-coal'}`}>
          <p className={`font-bold ${light ? 'text-white' : 'text-coal'}`}>{b.title}</p>
          <p className={`mt-2 text-sm leading-relaxed ${light ? 'text-haze' : 'text-slate'}`}>{b.text}</p>
        </li>
      ))}
    </ul>
  )
}

function Head({ s, light }) {
  return (
    <>
      <Reveal>
        <p className={`eyebrow ${light ? 'text-brand-hi' : 'text-slate'}`}>
          {s.number} — {s.name}
        </p>
      </Reveal>
      <Reveal delay={0.06}>
        <h2 className={`display mt-5 text-4xl sm:text-5xl lg:text-6xl ${light ? 'text-white' : 'text-coal'}`}>{s.headline}</h2>
      </Reveal>
    </>
  )
}

/* Layout A — Design: split, numbered offerings list */
function DesignBlock({ s }) {
  return (
    <section id={s.slug} className="scroll-mt-24 py-24 md:py-32">
      <div className="container-x grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <Reveal className="aspect-[4/5] overflow-hidden">
              <ServiceArt slug={s.slug} className="scale-125" />
            </Reveal>
          </div>
        </div>
        <div className="lg:col-span-7">
          <Head s={s} />
          {s.long.map((p) => (
            <p key={p} className="mt-6 text-lg leading-relaxed text-slate">{p}</p>
          ))}
          <ol className="mt-10 border-t border-line">
            {s.offerings.map((o, i) => (
              <li key={o} className="flex items-baseline gap-5 border-b border-line py-4 text-lg font-semibold">
                <span className="w-7 text-sm font-bold text-brand">{String(i + 1).padStart(2, '0')}</span>
                {o}
              </li>
            ))}
          </ol>
          <Benefits items={s.benefits} />
          <div className="mt-12 flex flex-wrap items-center gap-6">
            <Button to={enquire(s)} variant="coal">Enquire about {s.name}</Button>
            <ArrowLink to={`/services/${s.slug}`}>Service details</ArrowLink>
          </div>
        </div>
      </div>
    </section>
  )
}

/* Layout B — Content: editorial columns + pill offerings */
function ContentBlock({ s }) {
  return (
    <section id={s.slug} className="scroll-mt-24 bg-paper py-24 md:py-32">
      <div className="container-x">
        <div className="max-w-4xl">
          <Head s={s} />
        </div>
        <div className="mt-14 grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="grid gap-6 md:grid-cols-2">
              {s.long.map((p) => (
                <Reveal key={p}>
                  <p className="leading-relaxed text-slate">{p}</p>
                </Reveal>
              ))}
            </div>
            <ul className="mt-10 flex flex-wrap gap-3">
              {s.offerings.map((o) => (
                <li key={o} className="rounded-full border border-coal/20 bg-white px-5 py-2.5 text-sm font-semibold">
                  {o}
                </li>
              ))}
            </ul>
            <Benefits items={s.benefits} />
            <div className="mt-12 flex flex-wrap items-center gap-6">
              <Button to={enquire(s)} variant="coal">Enquire about {s.name}</Button>
              <ArrowLink to={`/services/${s.slug}`}>Service details</ArrowLink>
            </div>
          </div>
          <Reveal delay={0.1} className="lg:col-span-5">
            <div className="aspect-[5/4] overflow-hidden lg:mt-0">
              <ServiceArt slug={s.slug} />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

/* Layout C — Digital marketing: dark, tile grid */
function MarketingBlock({ s }) {
  return (
    <section id={s.slug} className="scroll-mt-24 bg-coal py-24 text-white md:py-32">
      <div className="container-x">
        <div className="grid items-end gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Head s={s} light />
            {s.long.map((p) => (
              <p key={p} className="mt-6 text-lg leading-relaxed text-haze">{p}</p>
            ))}
          </div>
          <Reveal delay={0.1} className="lg:col-span-5">
            <div className="aspect-[5/4] overflow-hidden">
              <ServiceArt slug={s.slug} />
            </div>
          </Reveal>
        </div>
        <ul className="mt-16 grid grid-cols-2 gap-px bg-white/10 md:grid-cols-4">
          {s.offerings.map((o, i) => (
            <li key={o} className="bg-coal p-6 transition-colors hover:bg-coal-2 md:p-8">
              <span className="text-xs font-bold text-brand-hi">{String(i + 1).padStart(2, '0')}</span>
              <p className="mt-6 font-bold leading-snug md:text-lg">{o}</p>
            </li>
          ))}
        </ul>
        <Benefits items={s.benefits} light />
        <div className="mt-12 flex flex-wrap items-center gap-6">
          <Button to={enquire(s)} variant="brand">Enquire about {s.name}</Button>
          <ArrowLink to={`/services/${s.slug}`} light>Service details</ArrowLink>
        </div>
      </div>
    </section>
  )
}

/* Layout D — Events: cinematic banner then columns */
function EventsBlock({ s }) {
  return (
    <section id={s.slug} className="scroll-mt-24 bg-ink text-white">
      <Reveal className="relative h-[340px] overflow-hidden md:h-[460px]">
        <ServiceArt slug={s.slug} className="absolute inset-0" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" aria-hidden="true" />
      </Reveal>
      <div className="container-x relative -mt-24 pb-24 md:-mt-32 md:pb-32">
        <div className="max-w-4xl">
          <Head s={s} light />
        </div>
        <div className="mt-12 grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-6">
            {s.long.map((p) => (
              <p key={p} className="mb-6 text-lg leading-relaxed text-haze">{p}</p>
            ))}
          </div>
          <ul className="grid gap-x-6 gap-y-4 sm:grid-cols-2 lg:col-span-6">
            {s.offerings.map((o) => (
              <li key={o} className="flex items-start gap-3 font-semibold">
                <Check size={18} className="mt-0.5 shrink-0 text-brand-hi" aria-hidden="true" />
                {o}
              </li>
            ))}
          </ul>
        </div>
        <Benefits items={s.benefits} light />
        <div className="mt-12 flex flex-wrap items-center gap-6">
          <Button to={enquire(s)} variant="brand">Enquire about {s.name}</Button>
          <ArrowLink to={`/services/${s.slug}`} light>Service details</ArrowLink>
        </div>
      </div>
    </section>
  )
}

const blocks = { design: DesignBlock, content: ContentBlock, 'digital-marketing': MarketingBlock, events: EventsBlock }

export default function Services() {
  usePageMeta(
    'Services',
    'Design, content, digital marketing and events — four integrated creative services from visionSOL to build your brand and grow your business.',
  )

  return (
    <>
      <PageHero
        eyebrow="Our services"
        title="Everything your brand needs."
        accent="Under one roof."
        text="Four integrated services, planned together and delivered by one accountable team."
      >
        <nav aria-label="Services" className="mt-12 flex flex-wrap gap-3">
          {services.map((s) => (
            <a
              key={s.slug}
              href={`#${s.slug}`}
              className="rounded-full border border-white/20 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-brand-hi hover:bg-brand hover:text-white"
            >
              <span className="mr-2 text-brand-hi">{s.number}</span>
              {s.name}
            </a>
          ))}
        </nav>
      </PageHero>

      {services.map((s) => {
        const Block = blocks[s.slug]
        return <Block key={s.slug} s={s} />
      })}

      <section className="py-20">
        <div className="container-x flex flex-col items-start justify-between gap-6 border-y border-line py-12 md:flex-row md:items-center">
          <p className="text-2xl font-bold tracking-tight md:text-3xl">
            Need more than one service? <span className="font-normal italic">That's where we shine.</span>
          </p>
          <Link to="/contact?service=Multiple%20Services" className="shrink-0 rounded-full bg-brand px-7 py-3 font-bold text-white transition hover:bg-coal hover:text-white">
            Plan an integrated project
          </Link>
        </div>
      </section>

      <CTASection />
    </>
  )
}
