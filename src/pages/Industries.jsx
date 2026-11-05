import { usePageMeta, PageHero, Reveal, SectionHeading } from '../components/ui.jsx'
import { CTASection } from '../components/sections.jsx'
import { industries } from '../data/industries.js'
import { services } from '../data/services.js'

export default function Industries() {
  usePageMeta(
    'Industries We Serve',
    'visionSOL serves real estate, healthcare, education, corporate, hospitality, retail, sports and startup businesses with design, content, digital marketing and events.',
  )

  return (
    <>
      <PageHero
        eyebrow="Industries we serve"
        title="Different industries."
        accent="One standard of creativity."
        text="Every sector has its own audience, language and pace. We bring the same strategic care to each one, tailored to how your customers decide."
      />

      <section className="py-24 md:py-32">
        <div className="container-x">
          <ul className="grid gap-px border border-line bg-line md:grid-cols-2">
            {industries.map(({ name, icon: Icon, text }, i) => (
              <Reveal
                as="li"
                key={name}
                delay={(i % 2) * 0.06}
                className="group flex gap-6 bg-white p-8 transition-colors duration-300 hover:bg-coal md:p-12"
              >
                <span className="flex h-16 w-16 shrink-0 items-center justify-center bg-paper text-coal transition-colors group-hover:bg-brand group-hover:text-white">
                  <Icon size={28} aria-hidden="true" />
                </span>
                <div>
                  <span className="text-xs font-bold text-slate transition-colors group-hover:text-haze">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h2 className="mt-1 text-2xl font-bold tracking-tight transition-colors group-hover:text-white">{name}</h2>
                  <p className="mt-3 leading-relaxed text-slate transition-colors group-hover:text-haze">{text}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-paper py-24 md:py-28">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading eyebrow="How it fits" title="Four services," accent="any industry." />
          </div>
          <ul className="grid gap-6 sm:grid-cols-2 lg:col-span-7">
            {services.map((s) => (
              <li key={s.slug} className="border-t-2 border-coal pt-5">
                <p className="font-bold"><span className="mr-2 text-brand">{s.number}</span>{s.name}</p>
                <p className="mt-2 text-sm leading-relaxed text-slate">{s.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTASection title="Don't see your industry?" accent="Let's talk anyway." />
    </>
  )
}
