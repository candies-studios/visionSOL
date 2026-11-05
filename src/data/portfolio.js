/**
 * PORTFOLIO PROJECTS
 * ------------------------------------------------------------
 * Every project below is a DEMONSTRATION project (demo: true) and is
 * labelled as such on the site. Replace them with real work when ready.
 *
 * To add a project, copy one object and edit it:
 *   slug        unique, url-friendly id  → /work/<slug>
 *   title       project name
 *   service     one of: 'design' | 'content' | 'digital-marketing' | 'events'
 *               (drives the filter on the Our Work page)
 *   category    display label (Branding & Design, Social Media & Content,
 *               Digital Campaigns, Website & Digital Experiences, Events & Activations)
 *   summary     one-line description for the card
 *   description longer text for the project page
 *   deliverables list of what was delivered
 *   image       optional: path to a cover image in /public/work/, e.g. '/work/acme.jpg'
 *               (without an image, a generated brand-style cover is shown)
 *   gallery     optional: more image paths shown on the project page
 *   demo        set to false (or remove) for real client work
 */

export const categories = [
  { key: 'all', label: 'All' },
  { key: 'design', label: 'Design' },
  { key: 'content', label: 'Content' },
  { key: 'digital-marketing', label: 'Digital Marketing' },
  { key: 'events', label: 'Events' },
]

export const projects = [
  {
    slug: 'aurora-residences-identity',
    title: 'Aurora Residences',
    service: 'design',
    category: 'Branding & Design',
    summary: 'A premium identity system for a sample luxury real-estate brand.',
    description:
      'A demonstration of how we approach a real-estate identity: a refined monogram, a warm-and-stone palette, signage, a sales brochure and site hoardings designed as one family.',
    deliverables: ['Logo & monogram', 'Brand guidelines', 'Sales brochure', 'Site hoardings'],
    demo: true,
  },
  {
    slug: 'pulse-wellness-social',
    title: 'Pulse Wellness',
    service: 'content',
    category: 'Social Media & Content',
    summary: 'A monthly content system for a sample wellness clinic.',
    description:
      'Sample content pillars, a reels format and a carousel template system showing how a wellness brand can publish consistently with a clear, caring voice.',
    deliverables: ['Content pillars', 'Reels format', 'Carousel templates', 'Caption guide'],
    demo: true,
  },
  {
    slug: 'brightpath-admissions',
    title: 'BrightPath Admissions',
    service: 'digital-marketing',
    category: 'Digital Campaigns',
    summary: 'An admissions-season lead campaign for a sample education group.',
    description:
      'A demonstration campaign structure: search and social ads, a focused landing page and an automated follow-up sequence designed around the admissions calendar.',
    deliverables: ['Campaign strategy', 'Ad creatives', 'Landing page', 'Email automation'],
    demo: true,
  },
  {
    slug: 'summit-leadership-forum',
    title: 'Summit Leadership Forum',
    service: 'events',
    category: 'Events & Activations',
    summary: 'Concept, stage design and branding for a sample corporate conference.',
    description:
      'A sample conference concept covering the event identity, stage and backdrop design, delegate kits, wayfinding and pre-event promotion.',
    deliverables: ['Event identity', 'Stage design', 'Delegate kit', 'Promotion plan'],
    demo: true,
  },
  {
    slug: 'kora-coffee-website',
    title: 'Kora Coffee Co.',
    service: 'design',
    category: 'Website & Digital Experiences',
    summary: 'A website and packaging refresh concept for a sample café brand.',
    description:
      'A demonstration website UI/UX and packaging refresh — an editorial homepage, menu and ordering flow, and a matching set of cups and bags.',
    deliverables: ['Website UI/UX', 'Packaging design', 'Menu design'],
    demo: true,
  },
  {
    slug: 'nexa-launch-film',
    title: 'Nexa Launch Story',
    service: 'content',
    category: 'Social Media & Content',
    summary: 'A launch video and copy suite for a sample tech product.',
    description:
      'A sample launch content suite: a hero film script, short-form cut-downs for social, website copy and a press note.',
    deliverables: ['Launch film script', 'Short-form videos', 'Website copy', 'Press note'],
    demo: true,
  },
  {
    slug: 'urbanthread-performance',
    title: 'UrbanThread',
    service: 'digital-marketing',
    category: 'Digital Campaigns',
    summary: 'A performance-marketing framework for a sample fashion retailer.',
    description:
      'A demonstration of a full-funnel performance setup for retail: catalogue ads, creative testing, retargeting and SEO for category pages.',
    deliverables: ['Funnel strategy', 'Catalogue ads', 'Creative testing plan', 'SEO audit'],
    demo: true,
  },
  {
    slug: 'velocity-run',
    title: 'Velocity City Run',
    service: 'events',
    category: 'Events & Activations',
    summary: 'Branding and on-ground activation for a sample city marathon.',
    description:
      'A sample sports-event package: the race identity, route branding, sponsor activations, finisher medals and the registration campaign.',
    deliverables: ['Race identity', 'Route branding', 'Sponsor activations', 'Registration campaign'],
    demo: true,
  },
]

export const getProject = (slug) => projects.find((p) => p.slug === slug)
