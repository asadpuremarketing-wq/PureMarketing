import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

/* ── Design-system animation constants ────────────────────── */
const ease = [0.19, 1, 0.22, 1]

/* ── Headline word list ───────────────────────────────────── */
const HEADLINE = [
  { text: 'A',               accent: false },
  { text: 'Revenue-Focused', accent: true  },
  { text: 'Growth',          accent: false },
  { text: 'Partner',         accent: false },
  { text: 'for',             accent: false },
  { text: 'Local',           accent: false },
  { text: 'Businesses.',     accent: false },
]

/* ── Dashboard mock data ──────────────────────────────────── */
const BARS   = [18, 28, 22, 38, 32, 50, 44, 62, 56, 74, 84, 100]
const MONTHS = ['Jan', 'Mar', 'May', 'Jul', 'Sep', 'Nov']
const STATS  = [
  { label: 'Lead Increase',   value: '+42%' },
  { label: 'Authority Score', value: '98'   },
  { label: 'Active Clients',  value: '24'   },
]

/* ── MetricChip — floating pill badge ────────────────────── */
function MetricChip({ dot, label, className, delay = 0 }) {
  return (
    <motion.div
      className={[
        'absolute flex items-center gap-2 px-3 py-1.5 z-20',
        /* bg-surface/90 — uses global surface token */
        'bg-surface/90 backdrop-blur-md rounded-full',
        'border border-white/[0.1]',
        'shadow-[0_8px_32px_rgba(0,0,0,0.55)]',
        className,
      ].join(' ')}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1, y: [0, -5, 0] }}
      transition={{
        opacity: { delay,              duration: 0.4 },
        scale:   { delay,              duration: 0.4, ease },
        y:       { delay: delay + 0.5, duration: 3.6, repeat: Infinity, ease: 'easeInOut' },
      }}
    >
      <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${dot}`} />
      <span className="text-white text-[0.72rem] font-semibold whitespace-nowrap tracking-tight">
        {label}
      </span>
    </motion.div>
  )
}

/* ── DashboardVisual — tilt card with charts ─────────────── */
function DashboardVisual() {
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const springX = useSpring(mx, { stiffness: 220, damping: 28 })
  const springY = useSpring(my, { stiffness: 220, damping: 28 })
  const rotateX = useTransform(springY, [-0.5, 0.5], ['7deg', '-7deg'])
  const rotateY = useTransform(springX, [-0.5, 0.5], ['-7deg', '7deg'])

  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect()
    mx.set((e.clientX - r.left) / r.width  - 0.5)
    my.set((e.clientY - r.top)  / r.height - 0.5)
  }
  const onLeave = () => { mx.set(0); my.set(0) }

  return (
    <div
      className="relative w-full max-w-[460px] mx-auto px-6 pb-6 pt-6"
      style={{ perspective: '1100px' }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      {/* Ambient glow — accent token */}
      <div className="absolute inset-8 rounded-3xl bg-accent/[0.14] blur-[56px] pointer-events-none -z-10" />

      {/* Glassmorphism card */}
      <motion.div
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        className="relative rounded-2xl p-6 overflow-hidden bg-white/[0.05] backdrop-blur-xl border border-white/[0.09] shadow-[0_28px_80px_rgba(0,0,0,0.65)]"
      >
        {/* Card header */}
        <div className="flex items-start justify-between mb-5">
          <div>
            <p className="text-white font-semibold text-[0.92rem] tracking-tight">Revenue Growth</p>
            <p className="text-ink-faint text-[0.66rem] mt-0.5 tracking-wide">Last 12 months · Hamilton &amp; GTA</p>
          </div>
          {/* Live pulse — emerald dot using Tailwind animate-ping */}
          <div className="flex items-center gap-1.5 mt-0.5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-emerald-400 text-[0.6rem] font-mono tracking-[0.15em] uppercase">Live</span>
          </div>
        </div>

        {/* Hero metric */}
        <div className="mb-5">
          <motion.p
            className="text-white font-bold tracking-tighter leading-none"
            style={{ fontSize: 'clamp(2rem, 3.5vw, 2.6rem)' }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6, ease }}
          >
            $2.4M
          </motion.p>
          <p className="text-ink-secondary text-[0.78rem] mt-1.5">client revenue driven</p>
          <div className="flex items-center gap-1.5 mt-1">
            <span className="text-emerald-400 text-[0.74rem] font-semibold">↑ +127%</span>
            <span className="text-ink-faint text-[0.68rem]">vs. prior year</span>
          </div>
        </div>

        {/* SVG line chart — accent-400 (#818cf8) */}
        <div className="mb-3">
          <svg
            viewBox="0 0 300 72"
            style={{ width: '100%', height: '72px', display: 'block' }}
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%"   stopColor="#818cf8" stopOpacity="0.38" />
                <stop offset="100%" stopColor="#818cf8" stopOpacity="0"    />
              </linearGradient>
            </defs>
            <motion.path
              d="M0,62 C25,54 50,43 75,35 S115,21 145,15 S195,7 230,4 S265,1 300,0 L300,72 L0,72 Z"
              fill="url(#areaGrad)"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 1.2 }}
            />
            <motion.path
              d="M0,62 C25,54 50,43 75,35 S115,21 145,15 S195,7 230,4 S265,1 300,0"
              fill="none" stroke="#818cf8" strokeWidth="2.5"
              strokeLinecap="round" strokeLinejoin="round"
              initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
              transition={{ delay: 0.55, duration: 2.1, ease: 'easeInOut' }}
            />
            <motion.circle
              cx="300" cy="0" r="3.5" fill="#818cf8"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              transition={{ delay: 2.55, duration: 0.35 }}
            />
          </svg>
          <div className="flex justify-between mt-1.5 px-0.5">
            {MONTHS.map(m => (
              <span key={m} className="text-ink-faint text-[0.56rem] font-mono">{m}</span>
            ))}
          </div>
        </div>

        {/* Bar chart — last 3 bars lit in accent */}
        <div className="flex items-end gap-[3px] h-9 mb-5">
          {BARS.map((h, i) => (
            <motion.div
              key={i}
              className="flex-1 rounded-[2px]"
              style={{
                height:          `${h}%`,
                backgroundColor: i >= 9 ? 'rgba(129,140,248,0.65)' : 'rgba(129,140,248,0.1)',
                transformOrigin: 'bottom',
              }}
              initial={{ scaleY: 0 }} animate={{ scaleY: 1 }}
              transition={{ delay: 0.45 + i * 0.055, duration: 0.45, ease }}
            />
          ))}
        </div>

        {/* Stat row */}
        <div className="grid grid-cols-3 gap-3 pt-4 border-t border-white/[0.06]">
          {STATS.map(({ label, value }) => (
            <div key={label}>
              <p className="text-white font-bold text-[1rem] tracking-tight">{value}</p>
              <p className="text-ink-faint text-[0.56rem] leading-tight mt-0.5 uppercase tracking-wide">{label}</p>
            </div>
          ))}
        </div>

        {/* Shine overlay */}
        <div className="absolute inset-0 pointer-events-none rounded-2xl bg-gradient-to-br from-white/[0.04] to-transparent" />
      </motion.div>

      {/* Floating metric chips — reuse MetricChip */}
      <MetricChip label="+42% Leads"          dot="bg-emerald-400" className="-top-2 right-4"                   delay={1.3} />
      <MetricChip label="Authority Score: 98"  dot="bg-accent-400"  className="-bottom-2 left-2"                delay={1.6} />
      <MetricChip label="+3.2x ROI"            dot="bg-gold-400"    className="top-[38%] -right-2 sm:-right-6"  delay={1.9} />
    </div>
  )
}

/* ── AboutHero — default export ───────────────────────────── */
export default function AboutHero() {
  return (
    <section className="relative bg-[#050505] overflow-hidden min-h-screen flex items-center">

      {/* Deep blue radial glow — bg-[#050505] base with blue-900 bloom */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 75% 65% at 68% 42%, rgba(30,58,138,0.2) 0%, transparent 65%)',
        }}
      />
      {/* Dot grid — bg-dot-grid utility from index.css */}
      <div className="absolute inset-0 bg-dot-grid opacity-[0.1] pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-[68px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center min-h-[calc(100vh-68px)] py-20">

          {/* ── Left: copy ── */}
          <div className="flex flex-col justify-center">

            {/* label-overline — global component class */}
            <motion.span
              className="label-overline mb-8 block"
              initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease }}
            >
              About Us
            </motion.span>

            {/* Word-by-word stagger reveal */}
            <motion.h1
              className="text-white font-extrabold tracking-tighter leading-[1.08] text-6xl mb-8"
              initial="hidden" animate="visible"
              variants={{
                hidden:  {},
                visible: { transition: { staggerChildren: 0.09, delayChildren: 0.18 } },
              }}
            >
              {HEADLINE.map(({ text, accent }) => (
                <motion.span
                  key={text}
                  className={['inline-block mr-[0.22em] last:mr-0', accent ? 'text-accent-400' : ''].join(' ')}
                  variants={{
                    hidden:  { opacity: 0, y: 22, filter: 'blur(6px)' },
                    visible: { opacity: 1, y:  0, filter: 'blur(0px)', transition: { duration: 0.65, ease } },
                  }}
                >
                  {text}
                </motion.span>
              ))}
            </motion.h1>

            <motion.p
              className="text-ink-secondary leading-relaxed max-w-lg"
              style={{ fontSize: '1.1rem' }}
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.7, ease }}
            >
              Moving beyond vanity metrics to build customer acquisition systems
              that actually scale.
            </motion.p>

            {/* Animated accent rule */}
            <motion.div
              className="mt-10 h-px w-12 bg-accent-400/40"
              style={{ originX: 0 }}
              initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
              transition={{ delay: 1.05, duration: 0.8, ease }}
            />
          </div>

          {/* ── Right: dashboard ── */}
          <motion.div
            className="flex items-center justify-center py-10 lg:py-0"
            initial={{ opacity: 0, x: 32 }} animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.35, duration: 0.9, ease }}
          >
            <DashboardVisual />
          </motion.div>

        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-zinc-800/50" />
    </section>
  )
}
