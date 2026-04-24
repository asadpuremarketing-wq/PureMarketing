import { useRef } from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import { Home, Award, Eye, TrendingUp, CheckCircle2, Play } from 'lucide-react'

const ease = [0.19, 1, 0.22, 1]
const vp = { once: true, margin: '-60px' }

/* ── Credibility stats floating inside the video frame ─────── */
const CRED_STATS = [
  {
    label: 'Agent Authority',
    value: '98%',
    Icon:  Award,
    color: '#818cf8',
    rgb:   '129,140,248',
    top: '12%', left: '52%',
    floatDelay: 0,
  },
  {
    label: 'Trust Score',
    value: '9.7 / 10',
    Icon:  CheckCircle2,
    color: '#34d399',
    rgb:   '52,211,153',
    top: '46%', left: '5%',
    floatDelay: 0.9,
  },
  {
    label: 'Profile Views',
    value: '12.4K',
    Icon:  Eye,
    color: '#fbbf24',
    rgb:   '251,191,36',
    top: '65%', left: '51%',
    floatDelay: 0.45,
  },
]

/* ── Authority metrics row ──────────────────────────────────── */
const AUTH_METRICS = [
  { label: 'LISTING_VIEWS',  val: '+142%', sub: 'vs. prev. quarter', Icon: Eye,        color: '#818cf8', rgb: '99,102,241'  },
  { label: 'INQUIRY_RATE',   val: '18.4%', sub: 'avg. per listing',  Icon: TrendingUp, color: '#34d399', rgb: '52,211,153'  },
  { label: 'AGENT_SCORE',    val: '9.7',   sub: 'authority index',   Icon: Award,      color: '#fbbf24', rgb: '251,191,36'  },
]

/* ── Content points (1px-gap-grid) ─────────────────────────── */
const POINTS = [
  {
    num:   '01',
    title: 'Authority Building',
    desc:  'Video content and social proof that establish you as the go-to agent in your market.',
  },
  {
    num:   '02',
    title: 'Listing Presentation',
    desc:  'Professional marketing assets that command premium positioning and faster sales.',
  },
  {
    num:   '03',
    title: 'Personal Brand Growth',
    desc:  'A consistent digital presence that keeps you top-of-mind with buyers and sellers.',
  },
]

/* ── Social Authority Dashboard ─────────────────────────────── */
function SocialAuthorityDashboard() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <div
      ref={ref}
      className="rounded-2xl border border-white/[0.08] overflow-hidden"
      style={{ background: 'rgba(255,255,255,0.022)', backdropFilter: 'blur(20px)' }}
    >
      {/* Window chrome */}
      <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/[0.06]">
        <div className="w-2.5 h-2.5 rounded-full bg-zinc-700/80" />
        <div className="w-2.5 h-2.5 rounded-full bg-zinc-700/80" />
        <div className="w-2.5 h-2.5 rounded-full bg-zinc-700/80" />
        <span className="text-zinc-600 text-[0.65rem] ml-3 font-mono tracking-wide">
          agent-profile-reel.mp4
        </span>
        <div className="ml-auto flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-red-500/80 animate-pulse shrink-0" />
          <span className="text-red-400/60 text-[0.58rem] font-mono tracking-widest">REC</span>
        </div>
      </div>

      {/* Video frame */}
      <div className="relative aspect-video overflow-hidden">

        {/* Video "backdrop" — dark with grid texture */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(145deg, #0c0e1d 0%, #090c16 55%, #06080f 100%)',
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: [
              'linear-gradient(rgba(129,140,248,0.025) 1px, transparent 1px)',
              'linear-gradient(90deg, rgba(129,140,248,0.025) 1px, transparent 1px)',
            ].join(', '),
            backgroundSize: '32px 32px',
          }}
        />
        {/* Radial glow in center */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 55% 55% at 50% 44%, rgba(99,102,241,0.09) 0%, transparent 68%)',
          }}
        />

        {/* Play button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            className="w-[3.6rem] h-[3.6rem] rounded-full flex items-center justify-center border border-accent-400/45 bg-accent/[0.13]"
            style={{ boxShadow: '0 0 28px rgba(99,102,241,0.42)' }}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.55, ease }}
          >
            <Play
              className="text-accent-400"
              style={{ width: '1.15rem', height: '1.15rem', marginLeft: '2px' }}
              strokeWidth={1.2}
              fill="currentColor"
            />
          </motion.div>
        </div>

        {/* Floating credibility stats */}
        {CRED_STATS.map((s, i) => (
          <motion.div
            key={s.label}
            className="absolute"
            style={{ top: s.top, left: s.left }}
            initial={{ opacity: 0, scale: 0.88 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.4 + i * 0.18, duration: 0.55, ease }}
          >
            <motion.div
              animate={inView ? { y: [0, -9, 0] } : {}}
              transition={{
                duration:    3.8,
                repeat:      Infinity,
                ease:        'easeInOut',
                delay:       s.floatDelay,
              }}
            >
              <div
                className="flex items-center gap-2 rounded-xl border border-white/[0.08] px-3 py-2 whitespace-nowrap"
                style={{
                  background:     'rgba(255,255,255,0.042)',
                  backdropFilter: 'blur(18px)',
                  boxShadow:      `0 4px 20px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.04), 0 0 22px rgba(${s.rgb},0.09)`,
                }}
              >
                <div
                  className="w-6 h-6 rounded-lg flex items-center justify-center shrink-0"
                  style={{ background: `rgba(${s.rgb},0.15)` }}
                >
                  <s.Icon
                    style={{ width: '0.72rem', height: '0.72rem', color: s.color }}
                    strokeWidth={1.2}
                  />
                </div>
                <div>
                  <p className="text-zinc-500 text-[0.55rem] font-mono leading-none tracking-wide">
                    {s.label}
                  </p>
                  <p className="text-white text-[0.78rem] font-bold font-mono leading-tight">
                    {s.value}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ))}

        {/* Progress bar overlay */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/75 to-transparent px-4 pb-3 pt-8">
          <div className="flex items-center gap-2.5">
            <span className="text-zinc-400 text-[0.57rem] font-mono shrink-0">1:24</span>
            <div className="flex-1 h-[3px] bg-white/[0.12] rounded-full overflow-hidden">
              <motion.div
                className="h-full rounded-full bg-accent-400"
                initial={{ width: '0%' }}
                animate={inView ? { width: '65%' } : { width: '0%' }}
                transition={{ delay: 0.5, duration: 1.3, ease }}
              />
            </div>
            <span className="text-zinc-600 text-[0.57rem] font-mono shrink-0">2:10</span>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ── Main ────────────────────────────────────────────────────── */
export default function RealEstateNiche() {
  const sectionRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  })

  const progressHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <section ref={sectionRef} className="relative bg-[#050505]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Reversed grid: dashboard left (60%), sticky text right (40%) */}
        <div className="grid grid-cols-1 lg:grid-cols-[60%_40%]">

          {/* ── Left (60%): Scrollable Dashboard ── */}
          <div className="py-12 lg:py-32 lg:pr-12 space-y-5">

            {/* Video / Social Authority Dashboard */}
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={vp}
              transition={{ duration: 0.7, ease }}
            >
              <SocialAuthorityDashboard />
            </motion.div>

            {/* Authority Metrics Row */}
            <div className="grid grid-cols-3 gap-3">
              {AUTH_METRICS.map((m, i) => (
                <motion.div
                  key={m.label}
                  className="rounded-xl border border-white/[0.07] px-4 py-4 flex flex-col gap-2"
                  style={{
                    background:     `rgba(${m.rgb},0.06)`,
                    backdropFilter: 'blur(16px)',
                    borderColor:    `rgba(${m.rgb},0.18)`,
                  }}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={vp}
                  transition={{ delay: 0.1 + i * 0.08, duration: 0.55, ease }}
                >
                  <m.Icon
                    style={{ width: '1rem', height: '1rem', color: m.color }}
                    strokeWidth={1.2}
                  />
                  <div>
                    <p className="text-white font-bold text-lg font-mono leading-none">{m.val}</p>
                    <p className="text-zinc-600 text-[0.6rem] font-mono tracking-[0.1em] uppercase mt-1">
                      {m.sub}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* 1px-gap-grid content points */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={vp}
              transition={{ delay: 0.12, duration: 0.65, ease }}
            >
              <p className="text-zinc-600 text-[0.7rem] font-semibold tracking-[0.13em] uppercase mb-3">
                Core Deliverables
              </p>
              <div className="grid gap-px bg-zinc-800/50 rounded-xl overflow-hidden border border-white/[0.06]">
                {POINTS.map((p, i) => (
                  <motion.div
                    key={p.num}
                    className="bg-[#090909] px-5 py-4 flex items-start gap-4"
                    initial={{ opacity: 0, x: -14 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={vp}
                    transition={{ delay: 0.18 + i * 0.09, duration: 0.55, ease }}
                  >
                    <span className="text-accent-400 font-mono text-xs font-bold shrink-0 mt-0.5">
                      {p.num}
                    </span>
                    <div className="flex-1">
                      <p className="text-white text-sm font-semibold mb-1">{p.title}</p>
                      <p className="text-zinc-500 text-xs leading-relaxed">{p.desc}</p>
                    </div>
                    <CheckCircle2
                      className="text-accent-400/55 shrink-0 mt-0.5"
                      style={{ width: '0.9rem', height: '0.9rem' }}
                      strokeWidth={1.2}
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>

          </div>

          {/* ── Right (40%): Sticky Text ── */}
          <div className="lg:sticky lg:top-[68px] lg:self-start py-20 lg:py-32 lg:pl-16 relative">

            {/* Vertical progress track on left edge (column divider) */}
            <div className="hidden lg:block absolute left-0 top-10 bottom-10 w-px bg-zinc-800/80">
              <motion.div
                className="absolute top-0 left-0 w-full"
                style={{
                  height:     progressHeight,
                  background: 'linear-gradient(to bottom, #818cf8, #6366f1)',
                }}
              />
            </div>

            <div>
              <motion.span
                className="label-overline block mb-6"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={vp}
                transition={{ duration: 0.5, ease }}
              >
                02 — Real Estate
              </motion.span>

              <motion.h2
                className="text-white font-extrabold tracking-tighter leading-[1.02] mb-8"
                style={{ fontSize: 'clamp(2.8rem, 4.2vw, 4rem)' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={vp}
                transition={{ delay: 0.1, duration: 0.7, ease }}
              >
                Real Estate<br />Agents
              </motion.h2>

              <motion.p
                className="text-zinc-400 leading-relaxed mb-8"
                style={{ fontSize: '0.97rem', lineHeight: '1.88' }}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={vp}
                transition={{ delay: 0.18, duration: 0.65, ease }}
              >
                In real estate, the agent who looks most authoritative online wins the listing before
                the first showing. We build the brand, credibility, and content that makes that happen.
              </motion.p>

              {/* Stat callout */}
              <motion.div
                className="inline-flex items-center gap-3 rounded-xl border border-white/[0.08] bg-white/[0.03] px-5 py-3"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={vp}
                transition={{ delay: 0.28, duration: 0.6, ease }}
              >
                <Home
                  className="text-accent-400 shrink-0"
                  style={{ width: '1rem', height: '1rem' }}
                  strokeWidth={1.2}
                />
                <div>
                  <span className="text-white font-bold text-sm font-mono">2.8×</span>
                  <span className="text-zinc-500 text-sm ml-1.5">more listing inquiries / agent</span>
                </div>
              </motion.div>
            </div>
          </div>

        </div>
      </div>

      <div className="h-px bg-zinc-800/50" />
    </section>
  )
}
