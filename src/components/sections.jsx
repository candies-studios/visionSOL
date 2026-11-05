import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { Button, Reveal, RaysBackdrop } from './ui.jsx'
import { ProjectCover } from './visuals.jsx'
import { useEnquiry } from './Enquiry.jsx'

export function CTASection({
  title = 'Have a Vision?',
  accent = "Let's Make It Happen.",
  text = "Whether you're building a brand, growing your business, launching a campaign or planning an event, we're ready to bring your ideas to life.",
  cta = 'Start a Conversation',
}) {
  const enquiry = useEnquiry()
  return (
    <section className="relative overflow-hidden bg-coal py-24 text-white md:py-32">
      <RaysBackdrop className="absolute -bottom-56 -left-40 h-[620px] w-[620px] opacity-70" />
      <div className="container-x relative grid items-end gap-10 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <Reveal>
            <h2 className="display text-5xl sm:text-6xl lg:text-7xl">
              {title}
              <br />
              <span className="font-normal italic text-brand-hi">{accent}</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-haze">{text}</p>
          </Reveal>
        </div>
        <Reveal delay={0.15} className="lg:col-span-4 lg:text-right">
          <Button type="button" onClick={() => enquiry.open()} variant="brand" className="px-9 py-4 text-base">
            {cta}
          </Button>
        </Reveal>
      </div>
    </section>
  )
}

export function ProjectCard({ project, index, tall = false }) {
  return (
    <Link to={`/work/${project.slug}`} className="group block" aria-label={`View project: ${project.title}`}>
      <div className={`relative overflow-hidden bg-paper ${tall ? 'aspect-[4/5]' : 'aspect-[4/3]'}`}>
        <div className="h-full w-full transition-transform duration-700 ease-out group-hover:scale-105">
          <ProjectCover project={project} index={index} />
        </div>
        {project.demo && (
          <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-coal">
            Demo project
          </span>
        )}
        <span className="absolute bottom-4 right-4 flex h-12 w-12 translate-y-3 items-center justify-center rounded-full bg-brand text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <ArrowUpRight size={20} aria-hidden="true" />
        </span>
      </div>
      <div className="mt-5">
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate">{project.category}</p>
        <h3 className="mt-2 text-2xl font-bold tracking-tight text-coal">{project.title}</h3>
        <p className="mt-2 leading-relaxed text-slate">{project.summary}</p>
        <span className="mt-3 inline-flex items-center gap-1 text-sm font-bold text-coal">
          <span className="border-b-2 border-brand-hi">View Project</span>
          <ArrowUpRight size={15} aria-hidden="true" />
        </span>
      </div>
    </Link>
  )
}

export const processSteps = [
  { n: '01', title: 'Discover', text: 'Understand the business, goals and audience.' },
  { n: '02', title: 'Strategize', text: 'Develop the right creative and marketing direction.' },
  { n: '03', title: 'Create', text: 'Transform strategies into impactful solutions.' },
  { n: '04', title: 'Deliver & Grow', text: 'Execute, measure and continuously improve.' },
]
