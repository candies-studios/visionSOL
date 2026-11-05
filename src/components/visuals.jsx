import { asset } from '../config/site.js'

const GOLD = '#D6202A'
const NAVY = '#171A21'
const INK = '#0E1116'

/* ---------------- HERO SCULPTURE ----------------
 * A faceted, extruded letter V lit by red light, with four floating
 * glass panels for Design, Content, Digital Marketing and Events.
 * Pure SVG: sharp at any size, no image files, no text inside.
 */
function GlassPanel({ x, y, w = 116, h = 86, delay = '0s', label, children }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <g className="animate-float" style={{ animationDelay: delay }}>
        <title>{label}</title>
        <rect width={w} height={h} rx="14" fill="#000" opacity="0.35" transform="translate(6 10)" filter="url(#hs-soft)" />
        <rect width={w} height={h} rx="14" fill="url(#hs-glass)" stroke="#FFFFFF" strokeOpacity="0.16" />
        <rect x="1" y="1" width={w - 2} height="22" rx="13" fill="#FFFFFF" opacity="0.04" />
        {children}
      </g>
    </g>
  )
}

export function HeroSculpture({ className = '' }) {
  return (
    <svg viewBox="0 0 520 600" className={`h-auto w-full ${className}`} role="img" aria-label="A sculptural letter V lit in red, surrounded by four floating panels representing design, content, digital marketing and events">
      <defs>
        <radialGradient id="hs-stage" cx="50%" cy="52%" r="60%">
          <stop offset="0" stopColor="#24161A" />
          <stop offset="0.5" stopColor="#14151A" stopOpacity="0.7" />
          <stop offset="1" stopColor="#0E1116" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="hs-halo" cx="50%" cy="50%" r="50%">
          <stop offset="0" stopColor="#D6202A" stopOpacity="0.55" />
          <stop offset="0.45" stopColor="#D6202A" stopOpacity="0.16" />
          <stop offset="1" stopColor="#D6202A" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="hs-floor" cx="50%" cy="50%" r="50%">
          <stop offset="0" stopColor="#FF4D55" stopOpacity="0.55" />
          <stop offset="0.5" stopColor="#D6202A" stopOpacity="0.18" />
          <stop offset="1" stopColor="#D6202A" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="hs-left" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#40444E" />
          <stop offset="0.45" stopColor="#22252D" />
          <stop offset="1" stopColor="#101217" />
        </linearGradient>
        <linearGradient id="hs-right" x1="0" y1="0" x2="0.4" y2="1">
          <stop offset="0" stopColor="#2A2D35" />
          <stop offset="0.6" stopColor="#16181E" />
          <stop offset="1" stopColor="#2A1014" />
        </linearGradient>
        <linearGradient id="hs-side" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#FF5A61" />
          <stop offset="0.5" stopColor="#D6202A" />
          <stop offset="1" stopColor="#5E0A10" />
        </linearGradient>
        <linearGradient id="hs-inner" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#7A0E14" />
          <stop offset="1" stopColor="#FF4D55" />
        </linearGradient>
        <linearGradient id="hs-top" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#5A5F6B" />
          <stop offset="1" stopColor="#353943" />
        </linearGradient>
        <linearGradient id="hs-glass" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#FFFFFF" stopOpacity="0.13" />
          <stop offset="1" stopColor="#FFFFFF" stopOpacity="0.03" />
        </linearGradient>
        <linearGradient id="hs-reflect" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#D6202A" stopOpacity="0.28" />
          <stop offset="1" stopColor="#D6202A" stopOpacity="0" />
        </linearGradient>
        <filter id="hs-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="6" />
        </filter>
        <filter id="hs-soft" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="8" />
        </filter>
        <clipPath id="hs-frame">
          <rect width="520" height="600" rx="4" />
        </clipPath>
      </defs>

      <g clipPath="url(#hs-frame)">
        {/* stage */}
        <rect width="520" height="600" fill="url(#hs-stage)" />
        <g stroke="#FFFFFF" strokeOpacity="0.05" fill="none">
          <ellipse cx="260" cy="532" rx="240" ry="34" />
          <ellipse cx="260" cy="532" rx="170" ry="24" />
          <ellipse cx="260" cy="532" rx="100" ry="14" />
        </g>
        <circle cx="270" cy="300" r="250" fill="url(#hs-halo)" className="animate-glow" />
        <ellipse cx="270" cy="528" rx="210" ry="30" fill="url(#hs-floor)" />

        {/* faint reflection of the sculpture on the floor */}
        <polygon points="96,536 196,536 260,560 324,536 424,536 260,600" fill="url(#hs-reflect)" opacity="0.6" />

        {/* ---- the sculpture ---- */}
        <g>
          {/* inner face of the left arm, glowing inside the notch */}
          <polygon points="196,120 224,100 288,310 260,330" fill="url(#hs-inner)" />
          {/* left arm, front */}
          <polygon points="96,120 196,120 260,330 260,520" fill="url(#hs-left)" />
          {/* right arm, outer side face: the red-lit flank */}
          <polygon points="424,120 452,100 288,500 260,520" fill="url(#hs-side)" />
          {/* top faces */}
          <polygon points="96,120 196,120 224,100 124,100" fill="url(#hs-top)" />
          <polygon points="324,120 424,120 452,100 352,100" fill="url(#hs-top)" />
          {/* right arm, front */}
          <polygon points="260,330 324,120 424,120 260,520" fill="url(#hs-right)" />

          {/* edge light */}
          <polyline points="96,120 260,520" stroke="#FF4D55" strokeWidth="6" opacity="0.55" filter="url(#hs-glow)" />
          <polyline points="96,120 260,520" stroke="#FF7A80" strokeWidth="1.4" opacity="0.9" />
          <polyline points="124,100 224,100 196,120" stroke="#FFFFFF" strokeOpacity="0.35" strokeWidth="1" fill="none" />
          <polyline points="352,100 452,100" stroke="#FFFFFF" strokeOpacity="0.35" strokeWidth="1" />
          <polyline points="260,330 324,120" stroke="#FF4D55" strokeWidth="5" opacity="0.5" filter="url(#hs-glow)" />
          <polyline points="260,330 324,120" stroke="#FF8A8F" strokeWidth="1.2" opacity="0.8" />
          <polyline points="424,120 260,520" stroke="#FFFFFF" strokeOpacity="0.18" strokeWidth="1" />
          <circle cx="260" cy="520" r="5" fill="#FF5A61" filter="url(#hs-glow)" />
        </g>

        {/* ---- floating service panels ---- */}
        <GlassPanel x={18} y={176} delay="0s" label="Design">
          <circle cx="36" cy="46" r="17" fill="#D6202A" />
          <rect x="50" y="24" width="32" height="32" fill="none" stroke="#FFFFFF" strokeOpacity="0.75" strokeWidth="1.6" />
          <path d="M16 72 C 42 54, 70 84, 100 60" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
          <rect x="12" y="68" width="8" height="8" fill="#0E1116" stroke="#FFFFFF" strokeWidth="1.4" />
          <rect x="96" y="56" width="8" height="8" fill="#0E1116" stroke="#FFFFFF" strokeWidth="1.4" />
        </GlassPanel>

        <GlassPanel x={386} y={196} delay="1.4s" label="Content">
          <rect x="16" y="18" width="56" height="7" rx="2" fill="#FFFFFF" opacity="0.85" />
          <rect x="16" y="33" width="84" height="4" rx="2" fill="#FFFFFF" opacity="0.28" />
          <rect x="16" y="43" width="70" height="4" rx="2" fill="#FFFFFF" opacity="0.28" />
          <rect x="16" y="53" width="48" height="4" rx="2" fill="#FFFFFF" opacity="0.28" />
          <circle cx="88" cy="64" r="13" fill="#D6202A" />
          <polygon points="84,57 84,71 95,64" fill="#FFFFFF" />
        </GlassPanel>

        <GlassPanel x={34} y={398} delay="2.3s" label="Digital Marketing">
          {[18, 28, 24, 38, 48].map((hgt, i) => (
            <rect key={i} x={18 + i * 17} y={70 - hgt} width="10" height={hgt} rx="2" fill="#FFFFFF" opacity={0.18 + i * 0.12} />
          ))}
          <polyline points="20,48 37,38 54,42 71,26 98,14" fill="none" stroke="#FF4D55" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
          <polygon points="98,8 104,18 93,19" fill="#FF4D55" />
        </GlassPanel>

        <GlassPanel x={370} y={414} delay="0.7s" label="Events">
          <polygon points="28,10 38,10 56,62 12,62" fill="#FFFFFF" opacity="0.12" />
          <polygon points="78,10 88,10 104,62 62,62" fill="#FFFFFF" opacity="0.12" />
          <circle cx="33" cy="12" r="4" fill="#FF4D55" />
          <circle cx="83" cy="12" r="4" fill="#FF4D55" />
          <rect x="12" y="62" width="92" height="4" rx="1" fill="#D6202A" />
          {[0, 1, 2, 3, 4, 5, 6].map((i) => (
            <circle key={i} cx={18 + i * 13.5} cy="75" r="3.6" fill="#FFFFFF" opacity="0.3" />
          ))}
        </GlassPanel>
      </g>
    </svg>
  )
}

/* ---------------- SERVICE ARTWORK ---------------- */
export function ServiceArt({ slug, className = '', fit = 'meet' }) {
  const common = { viewBox: '0 0 400 320', className: `h-full w-full ${className}`, preserveAspectRatio: `xMidYMid ${fit}`, 'aria-hidden': true }

  if (slug === 'design') {
    return (
      <svg {...common}>
        <rect width="400" height="320" fill={NAVY} />
        <g stroke="#fff" strokeOpacity="0.08">
          {Array.from({ length: 11 }, (_, i) => (
            <line key={`v${i}`} x1={i * 40} y1="0" x2={i * 40} y2="320" />
          ))}
          {Array.from({ length: 9 }, (_, i) => (
            <line key={`h${i}`} x1="0" y1={i * 40} x2="400" y2={i * 40} />
          ))}
        </g>
        <circle cx="140" cy="150" r="78" fill={GOLD} />
        <rect x="190" y="110" width="120" height="120" fill="none" stroke="#fff" strokeWidth="3" />
        <path d="M60 260 C 140 180, 260 300, 340 200" fill="none" stroke="#fff" strokeWidth="4" strokeLinecap="round" />
        <line x1="60" y1="260" x2="110" y2="205" stroke={GOLD} strokeWidth="2" />
        <line x1="340" y1="200" x2="300" y2="250" stroke={GOLD} strokeWidth="2" />
        {[[60, 260], [340, 200]].map(([x, y]) => (
          <rect key={x} x={x - 7} y={y - 7} width="14" height="14" fill={INK} stroke="#fff" strokeWidth="2" />
        ))}
        {[[110, 205], [300, 250]].map(([x, y]) => (
          <circle key={x} cx={x} cy={y} r="6" fill={GOLD} />
        ))}
        <polygon points="310,60 350,120 270,120" fill="none" stroke={GOLD} strokeWidth="3" />
      </svg>
    )
  }

  if (slug === 'content') {
    return (
      <svg {...common}>
        <rect width="400" height="320" fill="#F6F5F3" />
        <rect x="56" y="48" width="180" height="230" rx="6" fill="#fff" stroke={NAVY} strokeOpacity="0.15" />
        <rect x="76" y="72" width="100" height="14" rx="3" fill={NAVY} />
        {[104, 122, 140, 158, 176, 194].map((y, i) => (
          <rect key={y} x="76" y={y} width={i % 3 === 2 ? 90 : 140} height="7" rx="3" fill={NAVY} fillOpacity="0.18" />
        ))}
        <rect x="76" y="218" width="64" height="28" rx="14" fill={GOLD} />
        <text x="268" y="128" fontSize="140" fontWeight="800" fill={GOLD} fontFamily="Georgia, serif">“</text>
        <rect x="214" y="150" width="136" height="104" rx="8" fill={NAVY} />
        <circle cx="282" cy="202" r="24" fill={GOLD} />
        <polygon points="275,190 275,214 295,202" fill={NAVY} />
        <rect x="226" y="240" width="112" height="4" rx="2" fill="#fff" fillOpacity="0.3" />
        <rect x="226" y="240" width="56" height="4" rx="2" fill={GOLD} />
      </svg>
    )
  }

  if (slug === 'digital-marketing') {
    const bars = [56, 84, 78, 112, 138, 160]
    return (
      <svg {...common}>
        <rect width="400" height="320" fill={GOLD} />
        {bars.map((h, i) => (
          <rect key={i} x={50 + i * 50} y={270 - h} width="30" height={h} rx="3" fill={NAVY} fillOpacity={0.35 + i * 0.12} />
        ))}
        <polyline points="65,190 115,160 165,168 215,128 265,104 315,74" fill="none" stroke="#fff" strokeWidth="4" strokeLinejoin="round" strokeLinecap="round" />
        <polygon points="322,60 334,80 309,80" fill="#fff" />
        {[[65, 190], [115, 160], [165, 168], [215, 128], [265, 104]].map(([x, y]) => (
          <circle key={x} cx={x} cy={y} r="6" fill={NAVY} stroke="#fff" strokeWidth="3" />
        ))}
        <line x1="40" y1="270" x2="360" y2="270" stroke={NAVY} strokeWidth="3" />
        <g transform="translate(330 250)">
          <circle r="34" fill="#fff" />
          <circle r="22" fill="none" stroke={NAVY} strokeWidth="5" />
          <circle r="8" fill={NAVY} />
        </g>
      </svg>
    )
  }

  // events
  return (
    <svg {...common}>
      <rect width="400" height="320" fill={INK} />
      <polygon points="90,0 120,0 220,230 40,230" fill={GOLD} fillOpacity="0.16" />
      <polygon points="280,0 310,0 360,230 180,230" fill={GOLD} fillOpacity="0.16" />
      <polygon points="190,0 210,0 270,230 130,230" fill="#fff" fillOpacity="0.07" />
      <rect x="40" y="200" width="320" height="30" fill={NAVY} />
      <rect x="40" y="200" width="320" height="4" fill={GOLD} />
      <rect x="150" y="120" width="100" height="56" fill={NAVY} stroke={GOLD} strokeWidth="2" />
      <circle cx="200" cy="148" r="14" fill={GOLD} />
      {Array.from({ length: 3 }).map((_, r) =>
        Array.from({ length: 14 }).map((__, c) => (
          <circle
            key={`${r}-${c}`}
            cx={30 + c * 26 + (r % 2) * 13}
            cy={254 + r * 22}
            r="8"
            fill="#fff"
            fillOpacity={0.12 + r * 0.06}
          />
        )),
      )}
      {[[90, 6], [295, 6], [200, 6]].map(([x, y]) => (
        <circle key={x} cx={x + 15} cy={y} r="10" fill={GOLD} />
      ))}
    </svg>
  )
}

/* ---------------- PORTFOLIO COVERS ---------------- */
const palettes = [
  { bg: NAVY, fg: GOLD, soft: '#ffffff' },
  { bg: GOLD, fg: NAVY, soft: '#ffffff' },
  { bg: '#F6F5F3', fg: NAVY, soft: GOLD },
  { bg: INK, fg: '#ffffff', soft: GOLD },
]

export function ProjectCover({ project, index = 0, className = '' }) {
  if (project.image) {
    return <img src={asset(project.image)} alt={project.title} loading="lazy" className={`h-full w-full object-cover ${className}`} />
  }
  const p = palettes[index % palettes.length]
  const initials = project.title.split(' ').map((w) => w[0]).slice(0, 2).join('')
  const common = { viewBox: '0 0 400 300', className: `h-full w-full ${className}`, preserveAspectRatio: 'xMidYMid slice', role: 'img', 'aria-label': `${project.title} – demonstration cover` }

  const body = {
    design: (
      <>
        <circle cx="200" cy="150" r="92" fill={p.fg} />
        <text x="200" y="176" textAnchor="middle" fontSize="76" fontWeight="800" fill={p.bg} fontFamily="Manrope, sans-serif" letterSpacing="-3">{initials}</text>
        <rect x="40" y="40" width="54" height="54" fill="none" stroke={p.soft} strokeOpacity="0.4" strokeWidth="2" />
        <rect x="306" y="206" width="54" height="54" fill="none" stroke={p.soft} strokeOpacity="0.4" strokeWidth="2" />
      </>
    ),
    content: (
      <>
        <rect x="140" y="30" width="120" height="240" rx="18" fill={p.fg} />
        <rect x="150" y="48" width="100" height="204" rx="8" fill={p.bg} />
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <rect key={i} x={156 + (i % 2) * 46} y={56 + Math.floor(i / 2) * 64} width="42" height="58" rx="4" fill={i % 3 === 0 ? p.soft : p.fg} fillOpacity={i % 3 === 0 ? 0.9 : 0.35} />
        ))}
        <text x="60" y="160" fontSize="44" fontWeight="800" fill={p.fg} fontFamily="Manrope, sans-serif">{initials}</text>
      </>
    ),
    'digital-marketing': (
      <>
        {[50, 80, 70, 110, 140, 170].map((h, i) => (
          <rect key={i} x={110 + i * 42} y={250 - h} width="30" height={h} rx="3" fill={p.fg} fillOpacity={0.3 + i * 0.13} />
        ))}
        <polyline points="125,180 167,152 209,160 251,122 293,96 335,66" fill="none" stroke={p.soft} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        <text x="40" y="280" fontSize="30" fontWeight="800" fill={p.fg} fontFamily="Manrope, sans-serif">{initials}</text>
      </>
    ),
    events: (
      <>
        <polygon points="120,0 150,0 230,220 40,220" fill={p.fg} fillOpacity="0.18" />
        <polygon points="250,0 280,0 360,220 170,220" fill={p.fg} fillOpacity="0.18" />
        <rect x="40" y="200" width="320" height="26" fill={p.fg} />
        <text x="200" y="160" textAnchor="middle" fontSize="54" fontWeight="800" fill={p.fg} fontFamily="Manrope, sans-serif" letterSpacing="-2">{initials}</text>
        {Array.from({ length: 12 }).map((_, c) => (
          <circle key={c} cx={36 + c * 30} cy="258" r="9" fill={p.soft} fillOpacity="0.35" />
        ))}
      </>
    ),
  }[project.service]

  return (
    <svg {...common}>
      <rect width="400" height="300" fill={p.bg} />
      {body}
    </svg>
  )
}
