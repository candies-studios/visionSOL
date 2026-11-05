import { usePageMeta, Button, RaysBackdrop } from '../components/ui.jsx'

export default function NotFound() {
  usePageMeta('Page not found')
  return (
    <section className="relative flex min-h-[80svh] items-center overflow-hidden bg-ink pt-24 text-white">
      <RaysBackdrop className="absolute -right-32 top-10 h-[520px] w-[520px] opacity-60" />
      <div className="container-x relative">
        <p className="eyebrow text-brand-hi">Error 404</p>
        <h1 className="display mt-6 text-6xl sm:text-7xl">
          <span className="font-normal italic">This page is</span> <span className="text-brand-hi">out of sight.</span>
        </h1>
        <p className="mt-6 max-w-lg text-lg text-haze">The page you're looking for doesn't exist or has moved.</p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Button to="/">Back to Home</Button>
          <Button to="/contact" variant="outline">Contact Us</Button>
        </div>
      </div>
    </section>
  )
}
