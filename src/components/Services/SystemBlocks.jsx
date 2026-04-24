import { motion } from 'framer-motion'
import { CheckCircle2, Play, Star, TrendingUp } from 'lucide-react'

const ease = [0.19, 1, 0.22, 1]
const vp   = { once: true, margin: '-60px' }

const fadeUp = (delay = 0) => ({
  initial:     { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  transition:  { delay, duration: 0.75, ease },
  viewport:    vp,
})

/* ════════════════════════════════════════════════════════════
   VISUAL MOCKUPS — one per service block
   ════════════════════════════════════════════════════════════ */

function WebsiteVisual() {
  const STAGES = [
    { label: 'Website Visitors', value: '10,420', pct: '100%', grad: 'from-zinc-700/55 to-zinc-700/25',     w: '100%' },
    { label: 'Lead Captures',    value:  '3,214', pct: '31%',  grad: 'from-accent-600/45 to-accent-500/22', w: '78%'  },
    { label: 'Qualified Calls',  value:    '847', pct: '8.1%', grad: 'from-accent-500/52 to-accent-400/28', w: '57%'  },
    { label: 'New Clients',      value:    '312', pct: '3.0%', grad: 'from-amber-500/52 to-amber-400/26',   w: '38%'  },
  ]
  return (
    <div className="bg-white/[0.04] backdrop-blur-xl border border-white/[0.09] rounded-2xl p-6">
      <div className="flex items-center justify-between mb-5">
        <span className="text-white/80 text-sm font-semibold">Conversion Funnel</span>
        <span className="flex items-center gap-1.5 text-green-400 text-[0.72rem] font-mono">
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse shrink-0" />
          Live · Q4
        </span>
      </div>

      <div className="space-y-2.5">
        {STAGES.map(({ label, value, pct, grad, w }, i) => (
          <div key={label}>
            <div className="flex justify-between text-[0.68rem] mb-1.5">
              <span className="text-zinc-500">{label}</span>
              <span className="text-zinc-300 font-mono">{value} <span className="text-zinc-600">{pct}</span></span>
            </div>
            <motion.div
              className={`h-7 rounded-md bg-gradient-to-r ${grad} border border-white/[0.07]`}
              initial={{ scaleX: 0, opacity: 0 }}
              whileInView={{ scaleX: 1, opacity: 1 }}
              viewport={vp}
              transition={{ delay: i * 0.12, duration: 0.65, ease }}
              style={{ width: w, transformOrigin: 'left center' }}
            />
          </div>
        ))}
      </div>

      <div className="mt-5 pt-4 border-t border-white/[0.05] flex justify-between items-center">
        <span className="text-zinc-600 text-[0.7rem]">Current close rate</span>
        <div className="flex items-center gap-1.5">
          <span className="text-zinc-400 text-xs font-mono">3.0%</span>
          <span className="text-zinc-600 text-xs">→</span>
          <span className="text-green-400 text-xs font-mono font-semibold">5% target</span>
        </div>
      </div>
    </div>
  )
}

function ContentVisual() {
  const STATS = [
    { label: 'Views',     value: '47.2K' },
    { label: 'Watch Time', value: '3.4m'  },
    { label: 'Leads',     value: '284'   },
  ]
  return (
    <div className="bg-white/[0.04] backdrop-blur-xl border border-white/[0.09] rounded-2xl overflow-hidden">
      {/* Video thumbnail */}
      <div className="relative h-36 bg-gradient-to-br from-zinc-900 via-zinc-800/80 to-zinc-900">
        {/* Scanline texture */}
        <div
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage:
              'repeating-linear-gradient(0deg, transparent, transparent 11px, rgba(255,255,255,0.06) 11px, rgba(255,255,255,0.06) 12px)',
          }}
        />
        {/* Play button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-11 h-11 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
            <Play className="w-4 h-4 text-white ml-0.5" fill="white" strokeWidth={0} />
          </div>
        </div>
        {/* Title overlay */}
        <div className="absolute bottom-0 left-0 right-0 px-4 py-2.5 bg-gradient-to-t from-black/65 to-transparent">
          <p className="text-white/80 text-[0.7rem] font-medium leading-snug">
            "Why Our Clients Choose Us" — Authority Series Ep. 7
          </p>
        </div>
        {/* Progress bar */}
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white/10">
          <div className="h-full w-[42%] bg-accent-400" />
        </div>
      </div>

      {/* Metrics */}
      <div className="p-5">
        <div className="grid grid-cols-3 gap-2.5 mb-4">
          {STATS.map(({ label, value }) => (
            <div key={label} className="bg-white/[0.04] rounded-xl p-2.5 text-center border border-white/[0.05]">
              <p className="text-white font-bold text-[1.05rem] tracking-tight">{value}</p>
              <p className="text-zinc-500 text-[0.62rem] mt-0.5 tracking-wide">{label}</p>
            </div>
          ))}
        </div>

        {/* Authority score */}
        <div>
          <div className="flex justify-between text-[0.68rem] mb-1.5">
            <span className="text-zinc-500">Authority Score</span>
            <span className="text-accent-400 font-mono font-semibold">84 / 100</span>
          </div>
          <div className="h-1.5 bg-zinc-800 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-accent-600 to-accent-400 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: '84%' }}
              viewport={vp}
              transition={{ duration: 1, delay: 0.3, ease }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

function ReviewVisual() {
  const BAR_WIDTHS = ['91%', '6%', '2%', '1%', '0%']
  const REVIEWS = [
    { name: 'Mike T.',  stars: 5, text: '"Best marketing decision we\'ve made — leads up 60%."', time: '2h ago' },
    { name: 'Sarah K.', stars: 5, text: '"Revenue up 40% in under 3 months. Worth every dollar."', time: '1d ago' },
  ]
  return (
    <div className="bg-white/[0.04] backdrop-blur-xl border border-white/[0.09] rounded-2xl p-6">
      <div className="flex items-center justify-between mb-5">
        <span className="text-white/80 text-sm font-semibold">Reputation Dashboard</span>
        <span className="text-amber-400 text-[0.72rem] font-mono">268 reviews</span>
      </div>

      {/* Score + star distribution */}
      <div className="flex items-center gap-5 mb-5">
        <div className="shrink-0">
          <p className="text-5xl font-extrabold text-white leading-none tracking-[-0.04em]">4.9</p>
          <div className="flex gap-0.5 mt-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 text-amber-400" fill="#fbbf24" strokeWidth={0} />
            ))}
          </div>
        </div>

        <div className="flex-1 space-y-1.5">
          {[5, 4, 3, 2, 1].map((s, i) => (
            <div key={s} className="flex items-center gap-2">
              <span className="text-zinc-600 text-[0.6rem] w-2.5 shrink-0">{s}</span>
              <div className="flex-1 h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-amber-400 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: BAR_WIDTHS[i] }}
                  viewport={vp}
                  transition={{ delay: 0.1 + i * 0.08, duration: 0.55, ease }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent review cards */}
      <div className="space-y-2.5">
        {REVIEWS.map(({ name, text, time }) => (
          <div key={name} className="bg-white/[0.03] border border-white/[0.05] rounded-xl p-3.5">
            <div className="flex items-center justify-between mb-1.5">
              <div className="flex items-center gap-2">
                <span className="text-white/75 text-[0.75rem] font-semibold">{name}</span>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-2.5 h-2.5 text-amber-400" fill="#fbbf24" strokeWidth={0} />
                  ))}
                </div>
              </div>
              <span className="text-zinc-600 text-[0.62rem]">{time}</span>
            </div>
            <p className="text-zinc-400 text-[0.72rem] leading-relaxed">{text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

function AdsVisual() {
  const METRICS = [
    { label: 'ROAS',    value: '4.8×', delta: '+12%'  },
    { label: 'CTR',     value: '3.2%', delta: '+0.4%' },
    { label: 'CPA',     value: '$18',  delta: '-22%'  },
    { label: 'Revenue', value: '$42K', delta: '+31%'  },
  ]
  /* weekly revenue (relative to max 130) */
  const WEEKLY = [72, 88, 95, 110, 108, 130, 125]
  const MAX    = 130

  return (
    <div className="bg-white/[0.04] backdrop-blur-xl border border-white/[0.09] rounded-2xl p-6">
      <div className="flex items-center justify-between mb-5">
        <span className="text-white/80 text-sm font-semibold">Ad Performance</span>
        <span className="flex items-center gap-1.5 text-green-400 text-[0.72rem] font-mono">
          <TrendingUp className="w-3 h-3" strokeWidth={2} />
          Active
        </span>
      </div>

      {/* 2×2 metric grid */}
      <div className="grid grid-cols-2 gap-2 mb-5">
        {METRICS.map(({ label, value, delta }) => (
          <div key={label} className="bg-white/[0.04] border border-white/[0.06] rounded-xl p-3">
            <p className="text-zinc-500 text-[0.62rem] uppercase tracking-widest mb-1">{label}</p>
            <div className="flex items-baseline justify-between gap-1">
              <span className="text-white font-bold text-[1.1rem] leading-none">{value}</span>
              <span className="text-green-400 text-[0.65rem] font-mono">{delta}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Revenue bar chart */}
      <div>
        <p className="text-zinc-600 text-[0.65rem] uppercase tracking-wider mb-2.5">Weekly Revenue</p>
        <div className="flex items-end gap-1.5 h-14">
          {WEEKLY.map((rev, i) => (
            <motion.div
              key={i}
              className="flex-1 rounded-sm bg-gradient-to-t from-amber-500/65 to-amber-400/40"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={vp}
              transition={{ delay: i * 0.07, duration: 0.5, ease }}
              style={{ height: `${(rev / MAX) * 100}%`, transformOrigin: 'bottom' }}
            />
          ))}
        </div>
        <div className="flex items-center justify-between mt-2.5">
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full bg-amber-400/70" />
            <span className="text-zinc-600 text-[0.6rem]">Revenue generated</span>
          </div>
          <span className="text-zinc-600 text-[0.6rem] font-mono">7-day rolling</span>
        </div>
      </div>
    </div>
  )
}

/* ════════════════════════════════════════════════════════════
   Block data
   ════════════════════════════════════════════════════════════ */
const BLOCKS = [
  {
    num:     '01',
    title:   'Strategy & High-Converting Websites',
    body:    'Your website is the anchor of your growth system — not a brochure. We build conversion-engineered sites that turn local search intent into booked appointments and qualified leads.',
    focuses: [
      'Market positioning and competitive gap analysis',
      'Conversion-focused UX and messaging hierarchy',
      'Lead capture systems with CRM integration',
      'Local SEO foundation and authority signals',
    ],
    reverse: false,
    Visual:  WebsiteVisual,
  },
  {
    num:     '02',
    title:   'Video Content & Authority Building',
    body:    'In a trust economy, the businesses that educate win. We produce sales-driven video content that builds brand authority, shortens sales cycles, and puts your brand in front of ready-to-act buyers.',
    focuses: [
      'Authority video scripts and production strategy',
      'Platform-specific content for YouTube and social',
      'Video SEO to rank for high-intent local searches',
      'Viewer-to-lead conversion through strategic CTAs',
    ],
    reverse: true,
    Visual:  ContentVisual,
  },
  {
    num:     '03',
    title:   'Review & Reputation Growth',
    body:    "A 4.9-star reputation isn't luck — it's a system. We build automated review acquisition pipelines and reputation frameworks that make your business the obvious choice in your local market.",
    focuses: [
      'Automated post-service review request sequences',
      'Multi-platform syndication across Google, Yelp, and Meta',
      'Reputation monitoring and negative review response protocol',
      'Social proof integration across all marketing touchpoints',
    ],
    reverse: false,
    Visual:  ReviewVisual,
  },
  {
    num:     '04',
    title:   'Paid Advertising & High-ROI Funnels',
    body:    "We don't run ads — we run profit systems. Every campaign is built around a defined customer acquisition cost, with landing pages and follow-up sequences engineered to convert.",
    focuses: [
      'Google Search and Local Services Ad management',
      'Meta advertising with retargeting and lookalike audiences',
      'Dedicated landing pages built for conversion, not clicks',
      'Monthly ROAS reporting with full spend transparency',
    ],
    reverse: true,
    Visual:  AdsVisual,
  },
]

/* ════════════════════════════════════════════════════════════
   Component
   ════════════════════════════════════════════════════════════ */
export default function SystemBlocks() {
  return (
    <section className="bg-[#050505]">

      {/* ── Section header ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10 border-b border-white/[0.04]">
        <motion.div className="space-y-4 max-w-xl" {...fadeUp(0)}>
          <span className="label-overline">The Four Systems</span>
          <h2
            className="text-white font-bold tracking-[-0.03em] leading-[1.1]"
            style={{ fontSize: 'clamp(1.9rem, 3.8vw, 3rem)' }}
          >
            Every component,{' '}
            <span className="text-accent-400">purpose-built.</span>
          </h2>
        </motion.div>
      </div>

      {/* ── Service blocks ── */}
      {BLOCKS.map(({ num, title, body, focuses, reverse, Visual }, idx) => (
        <div key={num} className="relative overflow-hidden border-b border-white/[0.04]">

          {/* Large background number */}
          <span
            aria-hidden
            className="absolute font-mono font-bold text-white select-none pointer-events-none leading-none"
            style={{
              fontSize:      'clamp(9rem, 22vw, 20rem)',
              opacity:       0.025,
              letterSpacing: '-0.06em',
              top:           '-0.08em',
              ...(reverse ? { left: '-0.04em' } : { right: '-0.04em' }),
            }}
          >
            {num}
          </span>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

              {/* ── Text column ── */}
              <motion.div
                className={reverse ? 'lg:order-2' : ''}
                {...fadeUp(0.05)}
              >
                {/* Step label */}
                <span className="font-mono text-[0.6rem] tracking-[0.2em] text-ink-faint uppercase block mb-5">
                  {num} / System
                </span>

                <h3
                  className="text-white font-bold tracking-tighter leading-[1.1] mb-5"
                  style={{ fontSize: 'clamp(1.75rem, 3.2vw, 2.65rem)' }}
                >
                  {title}
                </h3>

                <p
                  className="text-zinc-400 mb-8"
                  style={{ fontSize: '1rem', lineHeight: '1.88' }}
                >
                  {body}
                </p>

                {/* Core Focus Points */}
                <div>
                  <p className="text-white/40 text-[0.68rem] uppercase tracking-[0.16em] font-semibold mb-4">
                    Core Focus Points
                  </p>
                  <ul className="space-y-3">
                    {focuses.map((point, i) => (
                      <motion.li
                        key={point}
                        className="flex items-start gap-3"
                        initial={{ opacity: 0, x: -14 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={vp}
                        transition={{ delay: 0.15 + i * 0.09, duration: 0.5, ease }}
                      >
                        <CheckCircle2
                          className="w-5 h-5 text-accent-400 shrink-0 mt-0.5"
                          strokeWidth={1.8}
                        />
                        <span className="text-zinc-300 text-[0.95rem] leading-relaxed">
                          {point}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>

              {/* ── Visual column ── */}
              <motion.div
                className={reverse ? 'lg:order-1' : ''}
                initial={{ opacity: 0, y: 24, scale: 0.97 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={vp}
                transition={{ delay: 0.18, duration: 0.85, ease }}
              >
                <Visual />
              </motion.div>

            </div>
          </div>
        </div>
      ))}

      <div className="h-px bg-zinc-800/50" />
    </section>
  )
}
