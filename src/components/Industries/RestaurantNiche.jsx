import { useRef } from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import { UtensilsCrossed, Video, RotateCcw, CheckCircle2, ArrowUpRight, Flame } from 'lucide-react'

const ease = [0.19, 1, 0.22, 1]
const vp = { once: true, margin: '-60px' }

/* ── Content Reach Chart ─────────────────────────────────────── */
const BARS   = [24, 31, 28, 42, 55, 49, 71, 68]
const LABELS = ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7', 'W8']
const MAX    = 71

const CHART_STATS = [
  { label: 'Avg / Week', val: '46.0K' },
  { label: 'Best Week',  val: 'W7'    },
  { label: 'Save Rate',  val: '18%'   },
]

function ContentReachChart() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <div
      ref={ref}
      className="rounded-2xl border border-white/[0.08] overflow-hidden"
      style={{ background: 'rgba(255,255,255,0.022)', backdropFilter: 'blur(20px)' }}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-white/[0.06]">
        <div className="flex items-center gap-2.5">
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse shrink-0" />
          <span className="text-white/75 text-[0.72rem] font-semibold tracking-[0.1em] uppercase">
            Content Reach — Last 8 Weeks
          </span>
        </div>
        <div className="flex items-center gap-1">
          <span className="text-emerald-400 text-[0.78rem] font-bold">+64%</span>
          <ArrowUpRight className="w-3 h-3 text-emerald-400" />
        </div>
      </div>

      {/* Chart area */}
      <div className="px-5 pt-5 pb-3">
        <div className="flex items-end gap-2 mb-5">
          <span className="text-white font-bold text-[1.7rem] leading-none">71K</span>
          <span className="text-zinc-500 text-xs mb-1">impressions this week</span>
        </div>

        {/* Bars */}
        <div className="h-28 flex items-end gap-1.5">
          {BARS.map((val, i) => (
            <div key={i} className="flex-1 flex flex-col items-center">
              <motion.div
                className="w-full rounded-t-sm"
                style={{
                  height:          `${(val / MAX) * 100}%`,
                  minHeight:       3,
                  background:      i === 6
                    ? 'linear-gradient(to top, rgba(217,119,6,0.9), rgba(251,191,36,1))'
                    : 'linear-gradient(to top, rgba(217,119,6,0.38), rgba(251,191,36,0.62))',
                  transformOrigin: 'bottom',
                }}
                initial={{ scaleY: 0 }}
                animate={inView ? { scaleY: 1 } : { scaleY: 0 }}
                transition={{ delay: 0.08 + i * 0.07, duration: 0.6, ease }}
              />
            </div>
          ))}
        </div>

        {/* Week labels */}
        <div className="flex gap-1.5 mt-1.5">
          {LABELS.map((l, i) => (
            <div key={i} className="flex-1 text-center">
              <span className="text-zinc-700 text-[0.53rem]">{l}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom stats */}
      <div className="grid grid-cols-3 divide-x divide-white/[0.05] border-t border-white/[0.05]">
        {CHART_STATS.map((s) => (
          <div key={s.label} className="px-4 py-3 text-center">
            <p className="text-white text-sm font-semibold">{s.val}</p>
            <p className="text-zinc-600 text-[0.6rem] mt-0.5">{s.label}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ── Metric Badges ───────────────────────────────────────────── */
const METRICS = [
  {
    label:   'Visual Identity',
    Icon:    UtensilsCrossed,
    iconCol: '#fbbf24',
    bg:      'rgba(251,191,36,0.08)',
    border:  'rgba(251,191,36,0.18)',
  },
  {
    label:   'Content Reach',
    Icon:    Video,
    iconCol: '#818cf8',
    bg:      'rgba(99,102,241,0.08)',
    border:  'rgba(129,140,248,0.20)',
  },
  {
    label:   'Repeat Visits',
    Icon:    RotateCcw,
    iconCol: '#34d399',
    bg:      'rgba(52,211,153,0.08)',
    border:  'rgba(52,211,153,0.18)',
  },
]

/* ── Content Points (1px-gap-grid) ──────────────────────────── */
const POINTS = [
  {
    num:   '01',
    title: 'Strong Visual Identity',
    desc:  'Branding and assets that make your restaurant look premium before a single meal is served.',
  },
  {
    num:   '02',
    title: 'Attention-Grabbing Content',
    desc:  'Short-form video and social content engineered to stop the scroll and drive reservations.',
  },
  {
    num:   '03',
    title: 'Repeat Business Systems',
    desc:  'Review funnels and retention systems that turn first-time diners into loyal regulars.',
  },
]

/* ── Main ────────────────────────────────────────────────────── */
export default function RestaurantNiche() {
  const sectionRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  })

  const progressHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <section ref={sectionRef} className="relative bg-[#050505]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[40%_60%]">

          {/* ── Left (40%): Sticky Text ── */}
          <div className="lg:sticky lg:top-[68px] lg:self-start py-20 lg:py-32 lg:pr-16 relative">

            {/* Vertical progress track on left edge */}
            <div className="hidden lg:block absolute left-0 top-10 bottom-10 w-px bg-zinc-800/80">
              <motion.div
                className="absolute top-0 left-0 w-full"
                style={{
                  height:     progressHeight,
                  background: 'linear-gradient(to bottom, #818cf8, #6366f1)',
                }}
              />
            </div>

            <div className="lg:pl-10">
              <motion.span
                className="label-overline block mb-6"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={vp}
                transition={{ duration: 0.5, ease }}
              >
                03 — Restaurant Niche
              </motion.span>

              <motion.h2
                className="text-white font-extrabold tracking-tighter leading-[1.02] mb-8"
                style={{ fontSize: 'clamp(2.8rem, 4.2vw, 4rem)' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={vp}
                transition={{ delay: 0.1, duration: 0.7, ease }}
              >
                Restaurants<br />&amp; Food
              </motion.h2>

              <motion.p
                className="text-zinc-400 leading-relaxed mb-8"
                style={{ fontSize: '0.97rem', lineHeight: '1.88' }}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={vp}
                transition={{ delay: 0.18, duration: 0.65, ease }}
              >
                In the food industry, attention is currency. We build the visual identity and content
                systems that fill seats, grow repeat visits, and put your restaurant on the local map.
              </motion.p>

              {/* Stat callout */}
              <motion.div
                className="inline-flex items-center gap-3 rounded-xl border border-white/[0.08] bg-white/[0.03] px-5 py-3"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={vp}
                transition={{ delay: 0.28, duration: 0.6, ease }}
              >
                <Flame className="w-4 h-4 text-amber-400 shrink-0" strokeWidth={1.6} />
                <div>
                  <span className="text-white font-bold text-sm">4.7×</span>
                  <span className="text-zinc-500 text-sm ml-1.5">avg. local search visibility growth</span>
                </div>
              </motion.div>
            </div>
          </div>

          {/* ── Right (60%): Scrollable Dashboard ── */}
          <div className="py-12 lg:py-32 lg:pl-8 space-y-5">

            {/* Content Reach Chart */}
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={vp}
              transition={{ duration: 0.7, ease }}
            >
              <ContentReachChart />
            </motion.div>

            {/* Metric Badges */}
            <div className="grid grid-cols-3 gap-3">
              {METRICS.map((m, i) => (
                <motion.div
                  key={m.label}
                  className="flex flex-col items-center gap-2.5 rounded-xl border px-3 py-4 text-center"
                  style={{
                    borderColor:    m.border,
                    background:     m.bg,
                    backdropFilter: 'blur(16px)',
                  }}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={vp}
                  transition={{ delay: 0.1 + i * 0.08, duration: 0.55, ease }}
                >
                  <m.Icon
                    style={{ width: '1.05rem', height: '1.05rem', color: m.iconCol }}
                    strokeWidth={1.6}
                  />
                  <span className="text-zinc-300 text-[0.7rem] font-semibold tracking-wide leading-tight">
                    {m.label}
                  </span>
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
                    <CheckCircle2 className="w-3.5 h-3.5 text-accent-400/55 shrink-0 mt-0.5" />
                  </motion.div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </div>

      <div className="h-px bg-zinc-800/50" />
    </section>
  )
}
