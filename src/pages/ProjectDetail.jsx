import { asset } from '../config/site.js'
import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, ArrowRight, Info } from 'lucide-react'
import { usePageMeta, Reveal, Button } from '../components/ui.jsx'
import { ProjectCover } from '../components/visuals.jsx'
import { CTASection } from '../components/sections.jsx'
import { projects, getProject } from '../data/portfolio.js'
import { getService } from '../data/services.js'
import NotFound from './NotFound.jsx'

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = getProject(slug)
  usePageMeta(project ? project.title : 'Project not found', project?.summary)
  if (!project) return <NotFound />

  const index = projects.indexOf(project)
  const next = projects[(index + 1) % projects.length]
  const service = getService(project.service)

  return (
    <>
      <section className="bg-ink pb-16 pt-32 text-white md:pt-40">
        <div className="container-x">
          <Link to="/work" className="inline-flex items-center gap-2 text-sm font-semibold text-haze hover:text-brand-hi">
            <ArrowLeft size={16} aria-hidden="true" /> All work
          </Link>
          <Reveal>
            <p className="eyebrow mt-10 text-brand-hi">{project.category}</p>
            <h1 className="display mt-5 text-5xl sm:text-6xl lg:text-7xl">{project.title}</h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-haze">{project.summary}</p>
          </Reveal>
        </div>
      </section>

      <section className="bg-ink pb-0">
        <div className="container-x">
          <Reveal className="aspect-[16/9] overflow-hidden">
            <ProjectCover project={project} index={index} />
          </Reveal>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-x grid gap-14 lg:grid-cols-12">
          <aside className="lg:col-span-4">
            <dl className="divide-y divide-line border-y border-line">
              <div className="py-5">
                <dt className="text-xs font-bold uppercase tracking-[0.16em] text-slate">Service</dt>
                <dd className="mt-2 font-bold">
                  <Link to={`/services/${service.slug}`} className="border-b-2 border-brand-hi hover:text-brand">{service.name}</Link>
                </dd>
              </div>
              <div className="py-5">
                <dt className="text-xs font-bold uppercase tracking-[0.16em] text-slate">Deliverables</dt>
                <dd className="mt-2">
                  <ul className="space-y-1 font-semibold">
                    {project.deliverables.map((d) => <li key={d}>{d}</li>)}
                  </ul>
                </dd>
              </div>
            </dl>
          </aside>
          <div className="lg:col-span-8">
            {project.demo && (
              <p className="mb-8 flex items-start gap-3 bg-paper p-5 text-sm leading-relaxed text-slate">
                <Info size={18} className="mt-0.5 shrink-0 text-coal" aria-hidden="true" />
                This is a demonstration project created to illustrate visionSOL's approach. It does not represent a real client.
              </p>
            )}
            <p className="text-xl leading-relaxed text-coal md:text-2xl">{project.description}</p>
            {project.gallery?.length > 0 && (
              <div className="mt-12 grid gap-6 sm:grid-cols-2">
                {project.gallery.map((src) => (
                  <img key={src} src={asset(src)} alt="" loading="lazy" className="w-full object-cover" />
                ))}
              </div>
            )}
            <div className="mt-12">
              <Button to={`/contact?service=${encodeURIComponent(service.name)}`} variant="coal">
                Start a similar project
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-line">
        <Link to={`/work/${next.slug}`} className="group container-x flex items-center justify-between py-12">
          <span>
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-slate">Next project</span>
            <span className="mt-2 block text-3xl font-extrabold tracking-tight md:text-5xl group-hover:text-brand">{next.title}</span>
          </span>
          <ArrowRight size={36} className="transition-transform group-hover:translate-x-2" aria-hidden="true" />
        </Link>
      </section>

      <CTASection />
    </>
  )
}
