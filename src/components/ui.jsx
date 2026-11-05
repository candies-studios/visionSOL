import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { site } from '../config/site.js'

/** Sets the page <title>, meta description and Open Graph tags per route. */
export function usePageMeta(title, description) {
  useEffect(() => {
    const full = title ? `${title} | visionSOL` : 'visionSOL | Creative Solutions Agency'
    document.title = full
    const set = (selector, attr, value) => {
      let el = document.head.querySelector(selector)
      if (!el) {
        el = document.createElement('meta')
        const [k, v] = attr
        el.setAttribute(k, v)
        document.head.appendChild(el)
      }
      el.setAttribute('content', value)
    }
    if (description) {
      set('meta[name="description"]', ['name', 'description'], description)
      set('meta[property="og:description"]', ['property', 'og:description'], description)
    }
    set('meta[property="og:title"]', ['property', 'og:title'], full)
    if (site.url) set('meta[property="og:url"]', ['property', 'og:url'], site.url + window.location.pathname)
  }, [title, description])
}

/** Fade-and-rise on scroll into view. */
export function Reveal({ children, delay = 0, className = '', as = 'div' }) {
  const reduce = useReducedMotion()
  const Comp = motion[as] || motion.div
  return (
    <Comp
      className={className}
      initial={reduce || import.meta.env.VITE_ARTIFACT ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Comp>
  )
}

const btnStyles = {
  brand: 'bg-brand text-white hover:bg-brand-deep',
  outline: 'border border-white/30 text-white hover:border-brand-hi hover:text-brand-hi',
  outlineDark: 'border border-coal/25 text-coal hover:border-coal hover:bg-coal hover:text-white',
  coal: 'bg-coal text-white hover:bg-brand hover:text-white',
}

export function Button({ to, href, variant = 'brand', children, className = '', icon = true, ...rest }) {
  const cls = `group inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-7 py-3 text-sm font-bold transition-all duration-300 ${btnStyles[variant]} ${className}`
  const inner = (
    <>
      {children}
      {icon && <ArrowRight size={17} className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />}
    </>
  )
  if (to) return <Link to={to} className={cls} {...rest}>{inner}</Link>
  if (href) return <a href={href} className={cls} {...rest}>{inner}</a>
  return <button className={cls} {...rest}>{inner}</button>
}

/** Text link with an animated arrow. */
export function ArrowLink({ to, children, light = false }) {
  return (
    <Link
      to={to}
      className={`group inline-flex items-center gap-2 text-sm font-bold ${light ? 'text-white hover:text-brand-hi' : 'text-coal'}`}
    >
      <span className={`border-b-2 pb-0.5 transition-colors ${light ? 'border-brand-hi' : 'border-brand-hi group-hover:border-coal'}`}>
        {children}
      </span>
      <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
    </Link>
  )
}

/** Dark inner-page hero with logo-inspired rays. */
export function PageHero({ eyebrow, title, accent, text, children }) {
  return (
    <section className="relative overflow-hidden bg-ink pb-20 pt-40 text-white md:pb-28 md:pt-48">
      <RaysBackdrop className="absolute -right-40 -top-40 h-[640px] w-[640px] opacity-60" />
      <div className="container-x relative">
        <Reveal>
          <p className="eyebrow text-brand-hi">{eyebrow}</p>
        </Reveal>
        <Reveal delay={0.08}>
          <h1 className="display mt-6 max-w-5xl text-5xl sm:text-6xl lg:text-7xl">
            {title}{' '}
            {accent && <span className="font-normal italic text-brand-hi">{accent}</span>}
          </h1>
        </Reveal>
        {text && (
          <Reveal delay={0.16}>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-haze">{text}</p>
          </Reveal>
        )}
        {children}
      </div>
    </section>
  )
}

/** Nested angled strokes echoing the V of the logo: the site's backdrop motif. */
export function RaysBackdrop({ className = '' }) {
  const rows = [0, 1, 2, 3, 4, 5]
  return (
    <svg viewBox="0 0 400 400" className={className} aria-hidden="true">
      <g className="animate-drift">
        {rows.map((i) => {
          const o = i * 26
          return (
            <polyline
              key={i}
              points={`${40 + o},${40} ${200},${330 - o * 0.9} ${360 - o},${40}`}
              fill="none"
              stroke={i === 0 ? '#D6202A' : '#FFFFFF'}
              strokeOpacity={i === 0 ? 0.7 : 0.07 + i * 0.012}
              strokeWidth={i === 0 ? 3 : 1.5}
              strokeLinejoin="miter"
            />
          )
        })}
      </g>
    </svg>
  )
}

export function SectionHeading({ eyebrow, title, accent, text, light = false, align = 'left' }) {
  return (
    <div className={align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      {eyebrow && (
        <Reveal>
          <p className={`eyebrow ${light ? 'text-brand-hi' : 'text-slate'}`}>{eyebrow}</p>
        </Reveal>
      )}
      <Reveal delay={0.06}>
        <h2 className={`display mt-5 text-4xl sm:text-5xl lg:text-6xl ${light ? 'text-white' : 'text-coal'}`}>
          {title} {accent && <span className={`font-normal italic ${light ? 'text-brand-hi' : 'text-brand'}`}>{accent}</span>}
        </h2>
      </Reveal>
      {text && (
        <Reveal delay={0.12}>
          <p className={`mt-6 text-lg leading-relaxed ${light ? 'text-haze' : 'text-slate'}`}>{text}</p>
        </Reveal>
      )}
    </div>
  )
}
