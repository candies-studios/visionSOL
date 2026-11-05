import { useSearchParams } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { usePageMeta, PageHero } from '../components/ui.jsx'
import { CTASection, ProjectCard } from '../components/sections.jsx'
import { categories, projects } from '../data/portfolio.js'

export default function Work() {
  usePageMeta('Our Work', 'Explore visionSOL work across branding, content, digital campaigns, websites and events.')
  const [params, setParams] = useSearchParams()
  const active = categories.some((c) => c.key === params.get('filter')) ? params.get('filter') : 'all'

  const list = projects
    .map((p, i) => ({ p, i }))
    .filter(({ p }) => active === 'all' || p.service === active)

  const pick = (key) => setParams(key === 'all' ? {} : { filter: key }, { replace: true, preventScrollReset: true })

  return (
    <>
      <PageHero
        eyebrow="Our work"
        title="Ideas, made"
        accent="visible."
        text="A look at how we approach branding, content, digital campaigns, websites and events. The projects shown here are demonstration projects created to illustrate our process; client case studies will be added here."
      />

      <section className="py-20 md:py-28">
        <div className="container-x">
          <div role="group" aria-label="Filter projects by service" className="flex flex-wrap gap-2 border-b border-line pb-8">
            {categories.map((c) => {
              const on = active === c.key
              const count = c.key === 'all' ? projects.length : projects.filter((p) => p.service === c.key).length
              return (
                <button
                  key={c.key}
                  type="button"
                  onClick={() => pick(c.key)}
                  aria-pressed={on}
                  className={`min-h-11 rounded-full px-5 py-2.5 text-sm font-bold transition ${
                    on ? 'bg-coal text-white' : 'border border-coal/20 text-coal hover:border-coal'
                  }`}
                >
                  {c.label} <span className={on ? 'text-brand-hi' : 'text-slate'}>({count})</span>
                </button>
              )
            })}
          </div>

          <motion.div layout className="mt-14 grid gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {list.map(({ p, i }, k) => (
                <motion.div
                  key={p.slug}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.4 }}
                  className={k % 3 === 1 ? 'lg:mt-16' : ''}
                >
                  <ProjectCard project={p} index={i} tall={k % 4 === 0} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {list.length === 0 && <p className="mt-14 text-slate">No projects in this category yet.</p>}
        </div>
      </section>

      <CTASection title="Your project" accent="could be next." cta="Start a Conversation" />
    </>
  )
}
