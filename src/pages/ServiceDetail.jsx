import { useParams, Link } from 'react-router-dom'
import { Check, ArrowRight } from 'lucide-react'
import { usePageMeta, Reveal, Button, RaysBackdrop } from '../components/ui.jsx'
import { ServiceArt } from '../components/visuals.jsx'
import { CTASection, ProjectCard, processSteps } from '../components/sections.jsx'
import { services, getService } from '../data/services.js'
import { projects } from '../data/portfolio.js'
import NotFound from './NotFound.jsx'

export default function ServiceDetail() {
  const { slug } = useParams()
  const s = getService(slug)
  usePageMeta(s ? `${s.name} Services` : 'Service not found', s?.description)
  if (!s) return <NotFound />

  const related = projects.map((p, i) => ({ p, i })).filter(({ p }) => p.service === s.slug)
  const others = services.filter((x) => x.slug !== s.slug)

  return (
    <>
      <section className="relative overflow-hidden bg-ink pt-32 text-white md:pt-40">
        <RaysBackdrop className="absolute -right-40 -top-40 h-[600px] w-[600px] opacity-50" />
        <div className="container-x relative grid items-center gap-12 pb-20 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="eyebrow text-brand-hi">
                <Link to="/services" className="hover:text-white">Services</Link> / {s.number} {s.name}
              </p>
            </Reveal>
            <Reveal delay={0.06}>
              <h1 className="display mt-6 text-5xl sm:text-6xl lg:text-7xl">{s.headline}</h1>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-8 max-w-xl text-lg leading-relaxed text-haze">{s.description}</p>
            </Reveal>
            <Reveal delay={0.18} className="mt-10">
              <Button to={`/contact?service=${encodeURIComponent(s.name)}`}>Enquire about {s.name}</Button>
            </Reveal>
          </div>
          <Reveal delay={0.15} className="lg:col-span-5">
            <div className="aspect-[5/4] overflow-hidden">
              <ServiceArt slug={s.slug} />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="container-x grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <p className="eyebrow text-slate">Overview</p>
            {s.long.map((p) => (
              <p key={p} className="mt-6 text-lg leading-relaxed text-slate">{p}</p>
            ))}
          </div>
          <div className="lg:col-span-6">
            <p className="eyebrow text-slate">What's included</p>
            <ul className="mt-6 grid gap-px bg-line sm:grid-cols-2">
              {s.offerings.map((o) => (
                <li key={o} className="flex items-start gap-3 bg-white py-4 pr-4 font-semibold">
                  <Check size={18} className="mt-0.5 shrink-0 text-brand" aria-hidden="true" />
                  {o}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-paper py-24 md:py-28">
        <div className="container-x">
          <h2 className="display text-4xl sm:text-5xl">
            What you <span className="font-normal italic">gain.</span>
          </h2>
          <ul className="mt-12 grid gap-8 md:grid-cols-3">
            {s.benefits.map((b, i) => (
              <Reveal as="li" key={b.title} delay={i * 0.06} className="bg-white p-8">
                <span className="text-sm font-extrabold text-brand">0{i + 1}</span>
                <p className="mt-6 text-xl font-bold">{b.title}</p>
                <p className="mt-3 leading-relaxed text-slate">{b.text}</p>
              </Reveal>
            ))}
          </ul>
          <ol className="mt-16 grid gap-6 md:grid-cols-4">
            {processSteps.map((p) => (
              <li key={p.n} className="border-t-2 border-coal pt-4">
                <p className="font-bold"><span className="mr-2 text-brand">{p.n}</span>{p.title}</p>
                <p className="mt-1 text-sm text-slate">{p.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {related.length > 0 && (
        <section className="py-24 md:py-28">
          <div className="container-x">
            <h2 className="display text-4xl sm:text-5xl">
              Related <span className="font-normal italic">work.</span>
            </h2>
            <div className="mt-12 grid gap-10 md:grid-cols-2">
              {related.map(({ p, i }) => (
                <ProjectCard key={p.slug} project={p} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="border-t border-line py-16">
        <div className="container-x">
          <p className="eyebrow text-slate">Other services</p>
          <ul className="mt-6 grid gap-px bg-line md:grid-cols-3">
            {others.map((o) => (
              <li key={o.slug}>
                <Link to={`/services/${o.slug}`} className="group flex items-center justify-between bg-white py-6 pr-6 text-2xl font-bold tracking-tight transition hover:text-brand">
                  <span><span className="mr-3 text-sm text-slate">{o.number}</span>{o.name}</span>
                  <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTASection />
    </>
  )
}
