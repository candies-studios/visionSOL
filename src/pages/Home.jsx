import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight, Check, Compass, Search, Lightbulb, Clapperboard, Cpu } from 'lucide-react'
import { usePageMeta, Reveal, Button, ArrowLink, SectionHeading, RaysBackdrop } from '../components/ui.jsx'
import { HeroSculpture, ServiceArt } from '../components/visuals.jsx'
import { CTASection, ProjectCard, processSteps } from '../components/sections.jsx'
import { useEnquiry } from '../components/Enquiry.jsx'
import { services } from '../data/services.js'
import { projects } from '../data/portfolio.js'
import { industries } from '../data/industries.js'
import { site } from '../config/site.js'

const highlights = ['Creative Thinking', 'Strategic Execution', 'Business-Focused Solutions', 'Impactful Experiences']

// Outcomes we work towards (no invented numbers: these are the goals, not claimed results)
const impact = [
  { title: 'Brand recall', text: 'Identities and campaigns people remember after one look.', service: 'design' },
  { title: 'Engagement', text: 'Content your audience saves, shares and replies to.', service: 'content' },
  { title: 'Qualified leads', text: 'Enquiries from people ready to buy, not just clicks.', service: 'digital-marketing' },
  { title: 'Return on ad spend', text: 'Budgets moved to the channels that actually convert.', service: 'digital-marketing' },
  { title: 'Search visibility', text: 'Being found when customers search for what you sell.', service: 'digital-marketing' },
  { title: 'Attendance & buzz', text: 'Events people show up for and talk about afterwards.', service: 'events' },
]

const capabilities = [
  { icon: Compass, name: 'Strategy', text: 'Positioning, planning and the brief that guides everything.' },
  { icon: Search, name: 'Insight', text: 'Research into your market, audience and competitors.' },
  { icon: Lightbulb, name: 'Creative', text: 'Ideas, design and words that make people stop.' },
  { icon: Clapperboard, name: 'Production', text: 'Shoots, video, print and on-ground execution.' },
  { icon: Cpu, name: 'Technology', text: 'Websites, ad platforms, analytics and automation.' },
]

const differentiators = [
  { n: '01', title: 'One Creative Partner', text: 'All your creative, marketing and event requirements under one roof.' },
  { n: '02', title: 'Strategy Meets Creativity', text: 'Every idea is supported by purpose, planning and execution.' },
  { n: '03', title: 'Business-First Thinking', text: 'We focus on outcomes that matter to your business.' },
  { n: '04', title: 'End-to-End Execution', text: 'From the first idea to the final delivery.' },
  { n: '05', title: 'Innovation & Adaptability', text: 'We continuously evolve with changing markets and technologies.' },
]

// Each service block gets its own look
const serviceThemes = {
  design: { section: 'bg-white', title: 'text-coal', body: 'text-slate', num: 'text-coal/10', check: 'bg-coal text-white', light: false },
  content: { section: 'bg-paper', title: 'text-coal', body: 'text-slate', num: 'text-coal/10', check: 'bg-brand text-white', light: false },
  'digital-marketing': { section: 'bg-coal', title: 'text-white', body: 'text-haze', num: 'text-white/10', check: 'bg-brand text-white', light: true },
  events: { section: 'bg-ink', title: 'text-white', body: 'text-haze', num: 'text-white/10', check: 'bg-white text-coal', light: true },
}

const tickerItems = services.flatMap((s) => s.offerings)

function IndustryExplorer() {
  const [active, setActive] = useState(0)
  const ind = industries[active]
  const Icon = ind.icon
  return (
    <div className="mt-14 grid gap-10 lg:grid-cols-12">
      <div role="tablist" aria-label="Industries" className="flex flex-wrap gap-2 lg:col-span-5 lg:flex-col lg:gap-0">
        {industries.map((d, i) => (
          <button
            key={d.name}
            role="tab"
            id={`ind-tab-${i}`}
            aria-selected={active === i}
            aria-controls="ind-panel"
            onClick={() => setActive(i)}
            className={`min-h-11 rounded-full border px-4 py-2 text-left text-sm font-bold transition lg:rounded-none lg:border-0 lg:border-b lg:border-line lg:px-0 lg:py-4 lg:text-lg ${
              active === i ? 'border-coal bg-coal text-white lg:bg-transparent lg:text-brand' : 'border-line text-coal hover:border-coal lg:hover:text-brand'
            }`}
          >
            <span className="hidden lg:mr-4 lg:inline lg:text-xs lg:text-slate">{String(i + 1).padStart(2, '0')}</span>
            {d.name}
          </button>
        ))}
      </div>
      <div id="ind-panel" role="tabpanel" aria-labelledby={`ind-tab-${active}`} className="relative overflow-hidden bg-coal p-8 text-white md:p-12 lg:col-span-7">
        <RaysBackdrop className="absolute -bottom-24 -right-24 h-80 w-80 opacity-60" />
        <div className="relative">
          <span className="flex h-14 w-14 items-center justify-center bg-brand">
            <Icon size={26} aria-hidden="true" />
          </span>
          <h3 className="mt-8 text-3xl font-extrabold tracking-tight md:text-4xl">{ind.name}</h3>
          <p className="mt-4 max-w-lg text-lg leading-relaxed text-haze">{ind.text}</p>
          <p className="mt-10 text-xs font-bold uppercase tracking-[0.2em] text-brand-hi">How we help</p>
          <ul className="mt-4 grid gap-3 sm:grid-cols-3">
            {ind.help.map((h) => (
              <li key={h} className="border-t border-white/15 pt-3 font-semibold leading-snug">{h}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default function Home() {
  usePageMeta(
    null,
    'visionSOL is a creative solutions agency helping brands turn ideas into impact through strategic design, compelling content, powerful digital marketing and unforgettable events.',
  )
  const enquiry = useEnquiry()

  return (
    <>
      {/* 1 — HERO */}
      <section className="relative overflow-hidden bg-ink text-white">
        <RaysBackdrop className="pointer-events-none absolute -left-40 top-24 h-[560px] w-[560px] opacity-40" />
        <div className="container-x relative grid items-center gap-14 pb-20 pt-36 lg:grid-cols-12 lg:pb-24 lg:pt-40">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="eyebrow text-brand-hi">Your vision, our solution</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="display mt-7 text-[2.8rem] sm:text-6xl xl:text-[5.2rem]">
                <span className="block">Great ideas.</span>
                <span className="block font-normal italic">Bold creativity.</span>
                <span className="block text-brand-hi">Real business growth.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="mt-8 border-l-2 border-brand pl-5 text-xl font-medium italic text-white">
                Is your brand working as hard as your business does?
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-haze">
                visionSOL is a creative solutions agency helping brands turn ideas into impact through strategic design,
                compelling content, powerful digital marketing and unforgettable experiences.
              </p>
            </Reveal>
            <Reveal delay={0.22} className="mt-10 flex flex-wrap gap-4">
              <Button onClick={() => enquiry.open()} type="button">Let's Build Something Great</Button>
              <Button to="/work" variant="outline">Explore Our Work</Button>
            </Reveal>
          </div>
          <Reveal delay={0.2} className="lg:col-span-5">
            <div className="mx-auto w-full max-w-[460px] lg:max-w-none">
              <HeroSculpture />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Offerings ticker */}
      <div className="overflow-hidden bg-brand py-4 text-white" aria-label="What we offer">
        <div className="flex w-max animate-ticker gap-10 whitespace-nowrap text-sm font-bold uppercase tracking-[0.18em]">
          {[...tickerItems, ...tickerItems].map((t, i) => (
            <span key={i} className="flex items-center gap-10" aria-hidden={i >= tickerItems.length}>
              {t}
              <span className="h-1.5 w-1.5 bg-white/70" />
            </span>
          ))}
        </div>
      </div>

      {/* 2 — INTRODUCTION */}
      <section className="py-24 md:py-32">
        <div className="container-x grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SectionHeading eyebrow="Who we are" title="More than creativity." accent="We create possibilities." />
          </div>
          <div className="lg:col-span-5 lg:pt-14">
            <Reveal>
              <p className="text-lg leading-relaxed text-slate">
                At visionSOL, we believe every brand has a story worth telling and an opportunity worth pursuing. We bring
                strategy, creativity and execution together to help businesses stand out, connect with their audience and
                achieve meaningful growth.
              </p>
            </Reveal>
            <ul className="mt-10 grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2">
              {highlights.map((h) => (
                <li key={h} className="flex items-center gap-3 bg-white p-5">
                  <span className="h-2 w-2 shrink-0 bg-brand" aria-hidden="true" />
                  <span className="font-bold leading-snug">{h}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* IMPACT — what we help you move */}
      <section className="bg-paper py-24 md:py-32">
        <div className="container-x">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <SectionHeading eyebrow="What we move" title="Creative work, judged by" accent="business impact." />
            <p className="max-w-sm text-slate">
              Every project starts by agreeing which of these matters most to you, and how we'll measure it.
            </p>
          </div>
          <ul className="mt-14 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {impact.map((m) => {
              const s = services.find((x) => x.slug === m.service)
              return (
                <li key={m.title}>
                  <Link to={`/services/${s.slug}`} className="group flex h-full flex-col bg-white p-8 transition-colors hover:bg-coal">
                    <span className="text-3xl font-extrabold tracking-tight text-coal transition-colors group-hover:text-white md:text-4xl">
                      {m.title}
                    </span>
                    <span className="mt-3 leading-relaxed text-slate transition-colors group-hover:text-haze">{m.text}</span>
                    <span className="mt-auto flex items-center justify-between pt-8 text-xs font-bold uppercase tracking-[0.16em] text-brand transition-colors group-hover:text-brand-hi">
                      {s.name}
                      <ArrowUpRight size={16} aria-hidden="true" />
                    </span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </section>

      {/* 3 — FOUR CORE SERVICES */}
      <section aria-labelledby="services-title">
        <div className="bg-white pt-24 md:pt-32">
          <div className="container-x">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <Reveal>
                  <p className="eyebrow text-slate">What we do</p>
                </Reveal>
                <Reveal delay={0.06}>
                  <h2 id="services-title" className="display mt-5 text-4xl sm:text-5xl lg:text-6xl">
                    Four core services. <span className="font-normal italic text-brand">One vision.</span>
                  </h2>
                </Reveal>
              </div>
              <ArrowLink to="/services">All services</ArrowLink>
            </div>
            <ul className="mt-14 grid grid-cols-2 gap-px border-y border-line bg-line md:grid-cols-5">
              {capabilities.map(({ icon: Icon, name, text }) => (
                <li key={name} className="bg-white px-4 py-6 first:pl-0 md:py-8 max-md:odd:pl-0">
                  <Icon size={22} className="text-brand" aria-hidden="true" />
                  <p className="mt-4 font-extrabold">{name}</p>
                  <p className="mt-1 text-sm leading-relaxed text-slate">{text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {services.map((s, i) => {
          const t = serviceThemes[s.slug]
          const flip = i % 2 === 1
          return (
            <div key={s.slug} className={`${t.section} py-20 md:py-28`}>
              <div className="container-x grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
                <Reveal className={`lg:col-span-6 ${flip ? 'lg:order-2' : ''}`}>
                  <div className="relative aspect-[5/4] overflow-hidden">
                    <ServiceArt slug={s.slug} />
                  </div>
                </Reveal>
                <div className={`lg:col-span-6 ${flip ? 'lg:order-1' : ''}`}>
                  <div className="flex items-baseline gap-4">
                    <span className={`display text-7xl md:text-8xl ${t.num}`}>{s.number}</span>
                    <span className={`eyebrow ${t.light ? 'text-brand-hi' : 'text-slate'}`}>{s.name}</span>
                  </div>
                  <h3 className={`display mt-2 text-3xl sm:text-4xl lg:text-5xl ${t.title}`}>{s.headline}</h3>
                  <p className={`mt-6 text-lg leading-relaxed ${t.body}`}>{s.description}</p>
                  <ul className="mt-8 grid gap-x-6 gap-y-3 sm:grid-cols-2">
                    {s.offerings.map((o) => (
                      <li key={o} className={`flex items-start gap-3 text-[15px] font-medium ${t.title}`}>
                        <span className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${t.check}`}>
                          <Check size={12} strokeWidth={3} aria-hidden="true" />
                        </span>
                        {o}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-10">
                    <ArrowLink to={`/services/${s.slug}`} light={t.light}>Explore Service</ArrowLink>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </section>

      {/* 4 — WHY VISIONSOL */}
      <section className="py-24 md:py-32">
        <div className="container-x grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-32">
              <SectionHeading eyebrow="Why visionSOL" title="Your vision. Our creativity." accent="One powerful partnership." />
              <Reveal delay={0.15}>
                <p className="mt-8 max-w-md leading-relaxed text-slate">
                  Backed by the corporate experience of {site.parent}, we pair creative energy with business discipline.
                </p>
              </Reveal>
            </div>
          </div>
          <ol className="lg:col-span-7">
            {differentiators.map((d) => (
              <li key={d.n} className="group grid grid-cols-[auto_1fr] gap-6 border-t border-line py-8 last:border-b md:gap-10">
                <span className="display w-14 text-4xl text-coal/15 transition-colors group-hover:text-brand md:w-20 md:text-5xl">{d.n}</span>
                <div>
                  <h3 className="text-2xl font-bold tracking-tight md:text-3xl">{d.title}</h3>
                  <p className="mt-2 text-lg leading-relaxed text-slate">{d.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 5 — OUR WORK */}
      <section className="bg-paper py-24 md:py-32">
        <div className="container-x">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <SectionHeading eyebrow="Our work" title="Selected" accent="projects." />
            <div className="max-w-md">
              <p className="text-slate">
                Branding &amp; Design · Social Media &amp; Content · Digital Campaigns · Website &amp; Digital Experiences ·
                Events &amp; Activations
              </p>
              <p className="mt-3 text-sm font-semibold text-slate">Shown below are demonstration projects illustrating our approach.</p>
            </div>
          </div>

          <div className="mt-16 grid gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            <div className="lg:row-span-2">
              <ProjectCard project={projects[0]} index={0} tall />
            </div>
            <ProjectCard project={projects[1]} index={1} />
            <ProjectCard project={projects[2]} index={2} />
            <ProjectCard project={projects[4]} index={4} />
            <ProjectCard project={projects[3]} index={3} />
          </div>

          <div className="mt-16 text-center">
            <Button to="/work" variant="outlineDark">View All Work</Button>
          </div>
        </div>
      </section>

      {/* 6 — PROCESS */}
      <section className="relative overflow-hidden bg-coal py-24 text-white md:py-32">
        <div className="container-x">
          <SectionHeading eyebrow="Our process" title="From vision" accent="to reality." light />
          <div className="relative mt-20">
            <div className="absolute left-0 right-0 top-[22px] hidden h-px bg-white/15 lg:block" aria-hidden="true" />
            <ol className="relative grid gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
              {processSteps.map((p) => (
                <li key={p.n} className="relative">
                  <span className="relative z-10 flex h-11 w-11 items-center justify-center bg-brand text-sm font-extrabold text-white ring-8 ring-coal">
                    {p.n}
                  </span>
                  <h3 className="mt-8 text-2xl font-bold">{p.title}</h3>
                  <p className="mt-3 leading-relaxed text-haze">{p.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* 7 — INDUSTRIES */}
      <section className="py-24 md:py-32">
        <div className="container-x">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <SectionHeading eyebrow="Industries we serve" title="Built for" accent="every ambition." />
            <ArrowLink to="/industries">Explore industries</ArrowLink>
          </div>
          <IndustryExplorer />
        </div>
      </section>

      {/* 8 — CTA */}
      <CTASection />
    </>
  )
}
