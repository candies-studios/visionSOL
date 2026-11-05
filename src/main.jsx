import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, MemoryRouter } from 'react-router-dom'

// Preview builds (VITE_ARTIFACT=1) keep navigation in memory; the real site uses normal URLs.
const Router = import.meta.env.VITE_ARTIFACT ? MemoryRouter : BrowserRouter
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router basename={import.meta.env.VITE_ARTIFACT ? undefined : import.meta.env.BASE_URL.replace(/\/$/, '')}>
      <App />
    </Router>
  </StrictMode>,
)
