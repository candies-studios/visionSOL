export const services = [
  {
    slug: 'design',
    number: '01',
    name: 'Design',
    headline: 'Design That Makes Brands Unforgettable.',
    description:
      'We create meaningful visual identities and powerful design experiences that make businesses recognizable, memorable and distinctive.',
    long: [
      'Creative design thinking is the catalyst behind every digital presence we craft. We work through a deeply collaborative, inventive process — hours of research, deliberation and exploration across a range of tools — to arrive at the visual direction that truly fits your brand.',
      'From a first logo to a complete identity system, every design decision is tied back to how your audience should feel and what your business needs to achieve.',
    ],
    offerings: [
      'Brand Identity & Logo Design',
      'Graphic Design',
      'Marketing Creatives',
      'Brochures & Company Profiles',
      'Presentation Design',
      'Social Media Creatives',
      'Website UI/UX Design',
      'Advertising & Campaign Design',
    ],
    benefits: [
      { title: 'Instant recognition', text: 'A consistent identity that customers remember and trust.' },
      { title: 'Premium perception', text: 'Design that positions you alongside the best in your category.' },
      { title: 'Consistency at scale', text: 'Guidelines and templates so every touchpoint looks on-brand.' },
    ],
  },
  {
    slug: 'content',
    number: '02',
    name: 'Content',
    headline: 'Stories That Connect. Content That Converts.',
    description:
      'We create strategic and engaging content that communicates your brand message, builds trust and connects with the right audience.',
    long: [
      'Our objective is high-value, quality content that speaks directly to the needs and pain points of your target customers. Our content creators study your business niche and craft curated, powerful content designed to engage the right visitor.',
      'With large-scale production, distribution and marketing, we make sure your story takes centre stage — on your website, across social platforms and in every corporate communication.',
    ],
    offerings: [
      'Content Strategy',
      'Social Media Content',
      'Website Content',
      'Copywriting',
      'Blogs & Articles',
      'Video Content',
      'Reels & Short-Form Videos',
      'Corporate Communication',
    ],
    benefits: [
      { title: 'A clear brand voice', text: 'Messaging that sounds like you on every channel.' },
      { title: 'Trust and authority', text: 'Useful content that answers what your customers are asking.' },
      { title: 'Content that works', text: 'Every piece is planned around a goal: reach, engagement or leads.' },
    ],
  },
  {
    slug: 'digital-marketing',
    number: '03',
    name: 'Digital Marketing',
    headline: 'Make Your Brand Impossible to Ignore.',
    description:
      'We help businesses grow their online presence, attract qualified customers and achieve measurable results through strategic digital marketing.',
    long: [
      'We offer cutting-edge digital marketing solutions designed to help businesses achieve their marketing goals — driving traffic, generating leads and increasing revenue.',
      'SEO, social media, influencer, email and paid campaigns are planned together, measured continuously and refined so your budget goes where it performs best.',
    ],
    offerings: [
      'Social Media Management',
      'Facebook & Instagram Ads',
      'Google Ads',
      'SEO',
      'Lead Generation',
      'Performance Marketing',
      'Digital Campaigns',
      'Marketing Automation',
    ],
    benefits: [
      { title: 'Qualified demand', text: 'Reach the people most likely to buy, not just the most people.' },
      { title: 'Measurable results', text: 'Clear reporting on what is working and what we are changing.' },
      { title: 'Compounding growth', text: 'SEO, content and automation that keep working over time.' },
    ],
  },
  {
    slug: 'events',
    number: '04',
    name: 'Events',
    headline: 'Experiences That Leave a Lasting Impression.',
    description:
      'From corporate gatherings to large-scale brand experiences, we conceptualize and execute events that bring people, brands and ideas together.',
    long: [
      'From corporate events to product launches, our team works with you to design, plan and execute every detail, ensuring a flawless and engaging event that exceeds expectations.',
      'We bring creativity, innovation and attention to detail to every event we plan — leaving a lasting impression on your attendees and extending the experience online.',
    ],
    offerings: [
      'Corporate Events',
      'Brand Activations',
      'Product Launches',
      'Conferences & Seminars',
      'Sports Events',
      'Exhibition Management',
      'Event Branding & Promotion',
      'Event Planning & Execution',
    ],
    benefits: [
      { title: 'One accountable team', text: 'Concept, branding, logistics and promotion handled together.' },
      { title: 'Flawless execution', text: 'Detailed planning so the day runs smoothly.' },
      { title: 'Lasting impact', text: 'Experiences people talk about long after the event ends.' },
    ],
  },
]

export const getService = (slug) => services.find((s) => s.slug === slug)
