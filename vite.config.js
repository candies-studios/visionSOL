import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// BASE_PATH is the folder the site is served from.
//   GitHub Pages project site  → '/visionSOL/'  (set by .github/workflows/deploy.yml)
//   Own domain, Vercel, Netlify → '/'           (the default)
export default defineConfig({
  base: process.env.BASE_PATH || '/',
  plugins: [react(), tailwindcss()],
})
