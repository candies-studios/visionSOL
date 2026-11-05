import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X, ArrowUpRight, ChevronDown } from 'lucide-react'
import Logo from './Logo.jsx'
import { useEnquiry } from './Enquiry.jsx'
import { services } from '../data/services.js'

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services', menu: true },
  { to: '/work', label: 'Our Work' },
  { to: '/contact', label: 'Contact' },
]

function ServicesMenu() {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)
  const { pathname } = useLocation()
  useEffect(() => setOpen(false), [pathname])
  useEffect(() => {
    const onDoc = (e) => ref.current && !ref.current.contains(e.target) && setOpen(false)
    document.addEventListener('mousedown', onDoc)
    return () => document.removeEventListener('mousedown', onDoc)
  }, [])

  return (
    <div ref={ref} className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <div className="flex items-center">
        <NavLink
          to="/services"
          className={({ isActive }) => `py-2 pl-4 pr-1 text-sm font-semibold transition-colors ${isActive ? 'text-brand' : 'text-coal hover:text-brand'}`}
        >
          Services
        </NavLink>
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls="services-menu"
          aria-label="Show services"
          className="flex h-9 w-7 items-center justify-center text-coal"
        >
          <ChevronDown size={16} className={`transition-transform ${open ? 'rotate-180' : ''}`} aria-hidden="true" />
        </button>
      </div>
      <div
        id="services-menu"
        className={`absolute left-1/2 top-full w-[520px] -translate-x-1/2 pt-3 transition-all duration-200 ${open ? 'visible translate-y-0 opacity-100' : 'invisible -translate-y-1 opacity-0'}`}
      >
        <ul className="grid grid-cols-2 gap-px border border-line bg-line shadow-xl shadow-coal/10">
          {services.map((s) => (
            <li key={s.slug}>
              <Link to={`/services/${s.slug}`} className="group block h-full bg-white p-5 transition-colors hover:bg-paper">
                <span className="text-xs font-bold text-brand">{s.number}</span>
                <span className="mt-1 flex items-center justify-between font-bold text-coal">
                  {s.name}
                  <ArrowUpRight size={15} className="opacity-0 transition group-hover:opacity-100" aria-hidden="true" />
                </span>
                <span className="mt-1 block text-xs leading-relaxed text-slate">{s.offerings.slice(0, 3).join(' · ')}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()
  const enquiry = useEnquiry()

  useEffect(() => setOpen(false), [pathname])
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => (document.body.style.overflow = '')
  }, [open])

  return (
    <header className={`fixed inset-x-0 top-0 z-50 bg-white transition-shadow duration-300 ${scrolled || open ? 'shadow-[0_1px_0_#E4E1DC,0_8px_24px_-12px_rgba(26,29,36,0.18)]' : 'shadow-[0_1px_0_#E4E1DC]'}`}>
      <nav className="container-x flex h-20 items-center justify-between gap-6" aria-label="Main">
        <Link to="/" className="shrink-0" aria-label="visionSOL home">
          <Logo onDark={false} className="h-11 sm:h-12" />
        </Link>

        <ul className="hidden items-center lg:flex">
          {links.map((l) =>
            l.menu ? (
              <li key={l.to}>
                <ServicesMenu />
              </li>
            ) : (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  end={l.end}
                  className={({ isActive }) =>
                    `relative px-4 py-2 text-sm font-semibold transition-colors ${isActive ? 'text-brand' : 'text-coal hover:text-brand'}`
                  }
                >
                  {l.label}
                </NavLink>
              </li>
            ),
          )}
        </ul>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => enquiry.open()}
            className="hidden items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-sm font-bold text-white transition hover:bg-brand-deep sm:inline-flex"
          >
            Let's Talk <ArrowUpRight size={16} aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line text-coal lg:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`fixed inset-x-0 bottom-0 top-20 overflow-y-auto bg-white transition-all duration-300 lg:hidden ${open ? 'visible opacity-100' : 'invisible opacity-0'}`}
      >
        <ul className="container-x flex flex-col pt-4">
          {[...links, { to: '/industries', label: 'Industries' }].map((l) => (
            <li key={l.to} className="border-b border-line">
              <NavLink
                to={l.to}
                end={l.end}
                className={({ isActive }) => `block py-4 text-3xl font-extrabold tracking-tight ${isActive ? 'text-brand' : 'text-coal'}`}
              >
                {l.label}
              </NavLink>
              {l.menu && (
                <ul className="grid grid-cols-2 gap-x-4 pb-4">
                  {services.map((s) => (
                    <li key={s.slug}>
                      <Link to={`/services/${s.slug}`} className="block py-1.5 text-sm font-semibold text-slate">
                        <span className="mr-1.5 text-brand">{s.number}</span>
                        {s.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
        <div className="container-x py-8">
          <button
            type="button"
            onClick={() => {
              setOpen(false)
              enquiry.open()
            }}
            className="flex w-full items-center justify-center gap-2 rounded-full bg-brand px-6 py-4 font-bold text-white"
          >
            Let's Talk <ArrowUpRight size={18} aria-hidden="true" />
          </button>
        </div>
      </div>
    </header>
  )
}
