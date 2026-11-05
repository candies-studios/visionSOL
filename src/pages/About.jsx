import { Target, Eye, Lightbulb, Users, Compass, Layers } from 'lucide-react'
import { usePageMeta, PageHero, Reveal, SectionHeading } from '../components/ui.jsx'
import { CTASection, processSteps } from '../components/sections.jsx'
import { site } from '../config/site.js'

const values = [
  { icon: Lightbulb, title: 'Ideas with purpose', text: 'Creativity is our craft, but every idea has to earn its place by serving a business goal.' },
  { icon: Users, title: 'Deep collaboration', text: 'We work as an extension of your team — listening first, then shaping ideas together.' },
  { icon: Compass, title: 'Strategic clarity', text: 'Research and planning come before execution, so the work is focused from day one.' },
  { icon: Layers, title: 'Integrated thinking', text: 'Design, content, marketing and events planned as one, so every touchpoint tells the same story.' },
]

export default function About() {
  usePageMeta(
    'About Us',
    'visionSOL brings strategy, creativity and execution together. Learn about our philosophy, mission, vision and our connection with Seerweb ERP Solutions Pvt Ltd.',
  )

  return (
    <>
      <PageHero
        eyebrow="About visionSOL"
        title="Creativity With Purpose."
        accent="Solutions With Vision."
        text="We are a creative solutions agency for businesses that want to be seen clearly, understood quickly and remembered for the right reasons."
      />

      {/* Name & philosophy */}
      <section className="py-24 md:py-32">
        <div className="container-x grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading eyebrow="Our name" title="Vision" accent="+ SOL" />
          </div>
          <div className="grid gap-10 sm:grid-cols-2 lg:col-span-7">
            <Reveal className="border-t-4 border-coal pt-6">
              <h3 className="text-2xl font-bold">Vision</h3>
              <p className="mt-3 leading-relaxed text-slate">
                Foresight, creativity and clarity — the ability to see opportunities before others do, and to see a brand
                the way its audience should.
              </p>
            </Reveal>
            <Reveal delay={0.08} className="border-t-4 border-brand-hi pt-6">
              <h3 className="text-2xl font-bold">SOL</h3>
              <p className="mt-3 leading-relaxed text-slate">
                The sun — energy, brightness and innovation. And solutions: practical work that moves a business forward.
              </p>
            </Reveal>
            <Reveal delay={0.12} className="sm:col-span-2">
              <p className="text-xl leading-relaxed text-coal md:text-2xl">
                Our philosophy is simple: great creative work starts with understanding the business behind it. We bring
                strategy, creativity and execution together so ideas don't just look good — they deliver.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Mission & vision */}
      <section className="bg-coal text-white">
        <div className="container-x grid md:grid-cols-2">
          <Reveal className="border-b border-white/10 py-16 md:border-b-0 md:border-r md:py-24 md:pr-12">
            <Target size={34} className="text-brand-hi" aria-hidden="true" />
            <p className="eyebrow mt-8 text-brand-hi">Our mission</p>
            <p className="mt-5 text-2xl font-semibold leading-snug md:text-3xl">
              To empower businesses through strategic creativity, innovative communication and impactful solutions.
            </p>
          </Reveal>
          <Reveal delay={0.08} className="py-16 md:py-24 md:pl-12">
            <Eye size={34} className="text-brand-hi" aria-hidden="true" />
            <p className="eyebrow mt-8 text-brand-hi">Our vision</p>
            <p className="mt-5 text-2xl font-semibold leading-snug md:text-3xl">
              To become a trusted creative partner for ambitious brands and businesses across industries.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Approach */}
      <section className="py-24 md:py-32">
        <div className="container-x">
          <SectionHeading eyebrow="Our approach" title="How we" accent="work." />
          <ul className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map(({ icon: Icon, title, text }, i) => (
              <Reveal as="li" key={title} delay={i * 0.06}>
                <span className="flex h-14 w-14 items-center justify-center bg-paper text-coal">
                  <Icon size={24} aria-hidden="true" />
                </span>
                <h3 className="mt-6 text-xl font-bold">{title}</h3>
                <p className="mt-3 leading-relaxed text-slate">{text}</p>
              </Reveal>
            ))}
          </ul>
          <ol className="mt-20 grid border-t border-line md:grid-cols-4">
            {processSteps.map((p) => (
              <li key={p.n} className="border-b border-line py-6 md:border-b-0 md:pr-6">
                <span className="text-sm font-extrabold text-brand">{p.n}</span>
                <p className="mt-2 font-bold">{p.title}</p>
                <p className="mt-1 text-sm text-slate">{p.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Seerweb connection */}
      <section className="bg-paper py-24 md:py-32">
        <div className="container-x grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <SectionHeading eyebrow="Our group" title="Creative energy," accent="corporate strength." />
          </div>
          <Reveal className="lg:col-span-6">
            <p className="text-lg leading-relaxed text-slate">
              visionSOL is a sister company of <strong className="text-coal">{site.parent}</strong>. That relationship gives
              our clients the confidence of an established corporate organization — structured processes, accountability
              and a long-term outlook — while visionSOL brings the agility and imagination of a modern creative studio.
            </p>
            <p className="mt-5 text-lg leading-relaxed text-slate">
              For businesses, it means one creative partner that understands both brand and operations.
            </p>
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  )
}
