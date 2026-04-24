import { motion } from 'framer-motion'
import { Wrench, Home, UtensilsCrossed, MapPin } from 'lucide-react'

const ease = [0.19, 1, 0.22, 1]

const container = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.14, delayChildren: 0.2 } },
}
const chunk = {
  hidden:  { opacity: 0, y: 28, filter: 'blur(6px)' },
  visible: { opacity: 1, y: 0,  filter: 'blur(0px)', transition: { duration: 0.7, ease } },
}

const HEADLINE = [
  { text: 'Built for Businesses ' },
  { text: 'That Need Revenue, '   },
  { text: 'Not Random ',          },
  { text: 'Marketing.',           accent: true },
]

const NICHES = [
  {
    id: 'service',
    label: 'Service Businesses',
    sub: 'Lead generation & trust systems',
    Icon: Wrench,
    iconColor: '#818cf8',
    glowRgb: '129,140,248',
    // card center as % of container
    top: '10%', left: '50%',
    floatDelay: 0,
    // SVG line endpoint (0-100 space)
    lx: 50, ly: 10,
  },
  {
    id: 'realestate',
    label: 'Real Estate Agents',
    sub: 'Brand authority & listing dominance',
    Icon: Home,
    iconColor: '#34d399',
    glowRgb: '52,211,153',
    top: '72%', left: '76%',
    floatDelay: 1.15,
    lx: 76, ly: 72,
  },
  {
    id: 'food',
    label: 'Restaurants & Food',
    sub: 'Foot traffic & repeat intent',
    Icon: UtensilsCrossed,
    iconColor: '#fbbf24',
    glowRgb: '251,191,36',
    top: '72%', left: '24%',
    floatDelay: 0.6,
    lx: 24, ly: 72,
  },
]

const HUB_RINGS = [52, 76, 105]

export default function IndustriesHero() {
  return (
    <section className="relative bg-[#050505] overflow-hidden">

      {/* Large-scale radial blue wash */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 72% 62% at 22% 48%, rgba(59,130,246,0.055) 0%, transparent 68%)',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* ── Left: Typography ── */}
          <div>
            <motion.span
              className="label-overline block mb-8"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease }}
            >
              Industries We Serve
            </motion.span>

            <motion.h1
              className="text-white font-extrabold tracking-tighter leading-[1.05] mb-8"
              style={{ fontSize: 'clamp(2.8rem, 5.2vw, 4.4rem)' }}
              variants={container}
              initial="hidden"
              animate="visible"
            >
              {HEADLINE.map(({ text, accent }, i) => (
                <motion.span
                  key={i}
                  variants={chunk}
                  className={accent ? 'text-accent-400' : undefined}
                >
                  {text}
                </motion.span>
              ))}
            </motion.h1>

            <motion.p
              className="text-zinc-400 max-w-lg"
              style={{ fontSize: '1.05rem', lineHeight: '1.88' }}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75, duration: 0.7, ease }}
            >
              We don&apos;t spread thin across every sector. We go deep into three high-opportunity niches
              in the GTA — delivering systems that are purpose-built for how those businesses actually grow.
            </motion.p>

            {/* Industry pills */}
            <motion.div
              className="flex flex-wrap gap-3 mt-8"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.92, duration: 0.6, ease }}
            >
              {NICHES.map((n) => (
                <div
                  key={n.id}
                  className="flex items-center gap-2 rounded-full border border-white/[0.09] bg-white/[0.03] px-4 py-1.5"
                >
                  <n.Icon
                    className="w-3.5 h-3.5 shrink-0"
                    style={{ color: n.iconColor }}
                    strokeWidth={2}
                  />
                  <span className="text-zinc-300 text-[0.78rem] font-medium tracking-wide">
                    {n.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── Right: Specialization Map ── */}
          <motion.div
            className="relative w-full max-w-[360px] sm:max-w-[420px] lg:max-w-[480px] aspect-square mx-auto lg:mx-0 lg:ml-auto"
            initial={{ opacity: 0, scale: 0.93 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.88, duration: 0.92, ease }}
          >

            {/* SVG connector lines */}
            <svg
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              className="absolute inset-0 w-full h-full pointer-events-none"
              aria-hidden
            >
              {NICHES.map((n, i) => (
                <motion.line
                  key={n.id}
                  x1="50" y1="50"
                  x2={n.lx} y2={n.ly}
                  stroke="rgba(129,140,248,0.11)"
                  strokeWidth="0.35"
                  strokeDasharray="2 3"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.1 + i * 0.18, duration: 0.7, ease }}
                />
              ))}
            </svg>

            {/* Center hub + pulsing rings — anchored at 50%,50% */}
            <div className="absolute" style={{ left: '50%', top: '50%' }}>

              {/* Rings */}
              {HUB_RINGS.map((size, j) => (
                <motion.div
                  key={j}
                  className="absolute rounded-full border border-accent-400/[0.14]"
                  style={{ width: size, height: size, left: -size / 2, top: -size / 2 }}
                  animate={{ opacity: [0.14, 0.04, 0.14], scale: [1, 1.06, 1] }}
                  transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut', delay: j * 0.72 }}
                />
              ))}

              {/* Hub orb */}
              <div
                className="absolute w-[3.4rem] h-[3.4rem] rounded-full flex flex-col items-center justify-center border border-accent-400/40 bg-accent/[0.12]"
                style={{
                  left:      -27,
                  top:       -27,
                  boxShadow: '0 0 28px rgba(99,102,241,0.48), 0 0 56px rgba(99,102,241,0.14)',
                }}
              >
                <MapPin className="w-[0.95rem] h-[0.95rem] text-accent-400" strokeWidth={2} />
                <span className="text-accent-300/75 font-mono text-[0.4rem] tracking-[0.16em] uppercase mt-[2px]">
                  GTA
                </span>
              </div>
            </div>

            {/* Floating niche cards */}
            {NICHES.map((n) => (
              <motion.div
                key={n.id}
                className="absolute"
                style={{ top: n.top, left: n.left, transform: 'translate(-50%, -50%)' }}
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration:    3.8,
                  repeat:      Infinity,
                  ease:        'easeInOut',
                  delay:       n.floatDelay,
                }}
              >
                <div
                  className="rounded-2xl border border-white/[0.09] px-4 py-3 flex items-center gap-3 whitespace-nowrap"
                  style={{
                    background:    'rgba(255,255,255,0.025)',
                    backdropFilter: 'blur(18px)',
                    boxShadow:     `0 6px 28px rgba(0,0,0,0.45), 0 0 0 1px rgba(255,255,255,0.04), 0 0 32px rgba(${n.glowRgb},0.07)`,
                  }}
                >
                  <div
                    className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0"
                    style={{
                      background: `rgba(${n.glowRgb},0.12)`,
                      boxShadow:  `0 0 16px rgba(${n.glowRgb},0.38)`,
                    }}
                  >
                    <n.Icon
                      className="w-4 h-4"
                      style={{ color: n.iconColor }}
                      strokeWidth={1.5}
                    />
                  </div>
                  <div>
                    <p className="text-white text-[0.78rem] font-semibold leading-tight">{n.label}</p>
                    <p className="text-zinc-500 text-[0.65rem] mt-0.5 leading-tight">{n.sub}</p>
                  </div>
                </div>
              </motion.div>
            ))}

          </motion.div>

        </div>
      </div>

      <div className="h-px bg-zinc-800/50" />
    </section>
  )
}
