# visionSOL Website

Premium multi-page website for **visionSOL** — a sister company of Seerweb ERP Solutions Pvt Ltd.
Built with React, Vite, Tailwind CSS, Lucide icons and Framer Motion.
Brand palette is taken from the logo: red #D6202A with charcoal #1A1D24, ink #0E1116 and warm white #F6F5F3 (tokens in `src/index.css`). Typeface: Plus Jakarta Sans, with italics for emphasis.

## 1. Project structure

```
visionsol/
├── index.html              Default SEO + Open Graph tags, fonts
├── public/
│   ├── favicon.png         V-monogram favicon (+ apple-touch-icon.png)
│   ├── og-image.svg        Social-share image (replace with a 1200×630 PNG for best support)
│   ├── brand/              Official logo (visionsol-logo.png); replace with an SVG for sharpest results
│   ├── work/               ← put portfolio images here
│   └── _redirects          SPA routing for Netlify
├── vercel.json             SPA routing for Vercel
└── src/
    ├── config/site.js      ★ ALL contact details, socials, WhatsApp, logo, form endpoint
    ├── data/
    │   ├── services.js     The four services (text, offerings, benefits)
    │   ├── portfolio.js    ★ Portfolio projects (add real work here)
    │   └── industries.js   Industries list
    ├── components/
    │   ├── Layout.jsx      Navbar + footer + floating WhatsApp button
    │   ├── Navbar.jsx      Sticky nav, mobile menu, "Let's Talk" button
    │   ├── Footer.jsx
    │   ├── Logo.jsx        Renders your logo file (keeps original proportions)
    │   ├── ui.jsx          Buttons, headings, page hero, scroll animations, SEO hook
    │   ├── sections.jsx    CTA band, project card, process steps
    │   └── visuals.jsx     Hero sun/eye artwork, service artwork, demo project covers
    ├── pages/              Home, About, Services, ServiceDetail, Work, ProjectDetail,
    │                       Industries, Contact, NotFound
    ├── App.jsx             Routes
    └── index.css           Brand colour/font tokens (Tailwind @theme)
```

Routes: `/`, `/about`, `/services`, `/services/design|content|digital-marketing|events`,
`/work`, `/work/<project>`, `/industries`, `/contact`.

## 2. Run locally

Requires Node.js 20 or newer.

```bash
npm install
npm run dev        # opens http://localhost:5173
npm run build      # production build into /dist
npm run preview    # preview the production build
```

## 3. Change contact details, WhatsApp, socials and logo

Everything is in **`src/config/site.js`**:

| Setting | Example |
|---|---|
| `email` | `'hello@visionsol.in'` |
| `phone` | `'+91 98xxx xxxxx'` |
| `location` | `'Mumbai, Maharashtra'` |
| `whatsappNumber` | `'9198xxxxxxxx'` (digits only, with country code) |
| `socials[].url` | `'https://instagram.com/visionsol'` |
| `logo` / `logoLight` | `'/brand/visionsol-logo.svg'` (paths in `/public`; the site adds the right prefix) |
| `formEndpoint` | `'https://formspree.io/f/xxxx'` (contact page + Let's Talk pop-up) |
| `newsletterEndpoint` | footer newsletter sign-up |

Empty values are never faked: contact lines show a neutral `[Email address]` placeholder, social links
are hidden, and WhatsApp buttons are hidden until a number is set.

**Logo:** the official logo is in `public/brand/visionsol-logo.png` and is shown unmodified on the white
navbar and light footer. For crisper results on high-resolution screens, replace it with an SVG or a
larger PNG and update `logo` in `site.js`.

## 4. Contact form

The form validates every field. To actually receive submissions, create a free endpoint
(Formspree, Web3Forms, Getform, or your own API that accepts JSON POST) and paste the URL into
`formEndpoint`. Until then, the form clearly tells visitors it is not connected and offers
email / WhatsApp instead — it never pretends a message was sent.

## 5. Add portfolio projects

Open **`src/data/portfolio.js`**, copy a project object and edit it:

```js
{
  slug: 'acme-rebrand',                 // URL: /work/acme-rebrand
  title: 'Acme Rebrand',
  service: 'design',                    // design | content | digital-marketing | events (filter)
  category: 'Branding & Design',
  summary: 'One-line card description.',
  description: 'Longer text for the project page.',
  deliverables: ['Logo', 'Guidelines'],
  image: '/work/acme-cover.jpg',        // put the file in public/work/
  gallery: ['/work/acme-1.jpg'],        // optional
  demo: false,                          // false = real client work (removes the "Demo" label)
}
```

The current eight projects are clearly labelled demonstrations — delete them as real work arrives.
The homepage "Selected projects" shows the first five in the list.

## 6. Deploy

The browser can't run the files in `src/` directly: the site must be **built** first (`npm run build`),
and the built files in `dist/` are what gets published. Uploading the source alone gives a blank page.

### GitHub Pages (automatic)
1. Push or upload the whole project to the repo, including `.github/workflows/deploy.yml`.
2. Repo **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. Every push to `main` now builds and publishes the site to `https://<user>.github.io/<repo>/`.
   Progress and errors show in the repo's **Actions** tab.

The workflow sets `BASE_PATH=/<repo>/` so links, images and page routes work inside the repo folder.
If you later connect a custom domain (e.g. www.visionsol.in), change `BASE_PATH` in the workflow to `/`.

### Other hosts
- **Vercel:** import the repo → framework "Vite" → deploy. `vercel.json` handles page routes.
- **Netlify:** build command `npm run build`, publish directory `dist`. `public/_redirects` handles routes.
- **cPanel / any static host:** run `npm run build` and upload the contents of `dist/`. Configure the
  server to serve `index.html` for unknown paths (e.g. an `.htaccess` rewrite) so deep links work.
  If the site lives in a sub-folder, build with `BASE_PATH=/folder-name/ npm run build`.

After going live, set `url` in `site.js`.

## 7. Quality checks done

- Production build passes with no errors.
- All internal links tested — none broken; unknown URLs show a branded 404 page.
- Checked at desktop (1440px), tablet (820px) and mobile (390px): no horizontal overflow.
- No console errors.
- Accessible: semantic buttons/links, labelled form fields with error messages, skip link,
  keyboard focus styles, reduced-motion support.
