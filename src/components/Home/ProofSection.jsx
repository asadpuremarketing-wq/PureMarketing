import { motion } from 'framer-motion'
import { Quote, TrendingUp, ArrowRight, Star } from 'lucide-react'

const ease = [0.19, 1, 0.22, 1]

/* ── Metric Badge ─────────────────────────────────────────────────── */
function MetricBadge({ value, label }) {
  return (
    <div className="inline-flex flex-col items-start gap-0.5 bg-canvas/80 backdrop-blur-glass border border-white/[0.08] rounded-[6px] px-3.5 py-2.5">
      <span className="text-white font-bold text-[1rem] leading-none tracking-tight">{value}</span>
      <span className="text-ink-muted text-[0.65rem] uppercase tracking-[0.12em] font-semibold">{label}</span>
    </div>
  )
}

/* ── Placeholder Visual — Stylized UI skeleton ───────────────────── */
function UIPlaceholder({ accent = false }) {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Base gradient */}
      <div
        className={[
          'absolute inset-0',
          accent
            ? 'bg-gradient-to-br from-zinc-900 via-[#0e0e14] to-zinc-950'
            : 'bg-gradient-to-br from-[#111] via-zinc-900 to-[#0a0a0a]',
        ].join(' ')}
      />

      {/* Dot grid texture */}
      <div className="absolute inset-0 bg-dot-grid opacity-20" />

      {/* Simulated website chrome — top nav */}
      <div className="absolute top-7 left-7 right-7 space-y-2.5">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-white/10" />
          <div className="h-1.5 w-20 rounded-full bg-white/10" />
          <div className="h-1.5 w-12 rounded-full bg-white/[0.06] ml-auto" />
        </div>
        <div className="h-px bg-white/[0.05]" />
      </div>

      {/* Simulated page content blocks */}
      <div className="absolute top-[60px] left-7 right-7 space-y-3">
        <div className="h-5 w-[55%] rounded-sm bg-white/[0.07]" />
        <div className="h-3 w-[75%] rounded-sm bg-white/[0.05]" />
        <div className="h-3 w-[60%] rounded-sm bg-white/[0.04]" />
        <div className="mt-4 h-8 w-28 rounded-sm bg-accent/20 flex items-center justify-center">
          <div className="h-2 w-16 rounded-full bg-accent/40" />
        </div>
      </div>

      {/* Simulated analytics chart */}
      <div className="absolute bottom-[120px] left-7 right-7">
        <div className="flex items-end gap-1 h-12">
          {[20, 35, 28, 50, 42, 65, 55, 80, 70, 88, 78, 100].map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-[2px]"
              style={{
                height:          `${h}%`,
                backgroundColor: accent
                  ? i >= 8 ? 'rgba(99,102,241,0.55)' : 'rgba(99,102,241,0.12)'
                  : i >= 8 ? 'rgba(255,255,255,0.25)' : 'rgba(255,255,255,0.07)',
              }}
            />
          ))}
        </div>
        <div className="flex items-center justify-between mt-2">
          <div className="h-1.5 w-10 rounded-full bg-white/[0.06]" />
          <div className="h-1.5 w-14 rounded-full bg-white/[0.06]" />
          <div className="h-1.5 w-10 rounded-full bg-white/[0.06]" />
        </div>
      </div>

      {/* Gradient fade-to-bottom so testimonial overlay blends cleanly */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-canvas/95 via-canvas/60 to-transparent" />
    </div>
  )
}

/* ── Main Section ─────────────────────────────────────────────────── */
export default function ProofSection() {
  return (
    <section className="bg-[#050505]">
      <div className="h-px bg-zinc-800/50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-24">

        {/* ── Header ── */}
        <motion.div
          className="max-w-xl mb-14 space-y-4"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease }}
          viewport={{ once: true, margin: '-60px' }}
        >
          <span className="label-overline">Proof Over Promises</span>
          <h2
            className="text-white font-bold leading-[1.1] tracking-[-0.03em]"
            style={{ fontSize: 'clamp(1.9rem, 3.8vw, 3rem)' }}
          >
            Real Results from Real{' '}
            <span className="relative inline-block">
              <span className="text-accent-400">GTA Businesses</span>
              <span className="absolute -bottom-[3px] left-0 right-0 h-px bg-accent-400/35" />
            </span>
          </h2>
          <p className="text-ink-secondary text-body-lg">
            We don&apos;t pitch. We show the before, the after, and the numbers in between.
          </p>
        </motion.div>

        {/* ── Asymmetric Bento Grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 lg:h-[520px]">

          {/* ──────────── Large Featured Card (col-span-3) ──────────── */}
          <motion.div
            className="lg:col-span-3 relative rounded-card overflow-hidden h-[420px] lg:h-full group"
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease }}
            viewport={{ once: true, margin: '-40px' }}
          >
            <UIPlaceholder accent />

            {/* Top-left: Industry tag + AFTER badge */}
            <div className="absolute top-5 left-5 flex items-center gap-2">
              <span className="text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-ink-muted border border-border px-2.5 py-1 rounded-full bg-canvas/70 backdrop-blur-sm">
                Plumbing · Hamilton
              </span>
              <span className="text-[0.6rem] font-bold uppercase tracking-[0.14em] text-emerald-400 border border-emerald-400/30 px-2.5 py-1 rounded-full bg-canvas/70 backdrop-blur-sm">
                After
              </span>
            </div>

            {/* Top-right: Metrics badge */}
            <div className="absolute top-5 right-5">
              <MetricBadge value="+178%" label="Organic Traffic" />
            </div>

            {/* Bottom: Testimonial overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="card-premium p-5 space-y-4">
                <Quote className="w-4 h-4 text-accent-400/60" strokeWidth={1.5} />

                <p className="text-white text-[0.9rem] leading-relaxed font-medium">
                  &ldquo;Within 60 days our phone stopped being silent. We now turn away leads
                  because we&apos;re fully booked. That&apos;s a real problem we love having.&rdquo;
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {/* Avatar placeholder */}
                    <div className="w-8 h-8 rounded-full bg-accent/20 border border-accent/20 flex items-center justify-center shrink-0">
                      <span className="text-accent-400 font-bold text-[0.7rem]">MR</span>
                    </div>
                    <div className="leading-tight">
                      <p className="text-white text-[0.82rem] font-semibold">Mike R.</p>
                      <p className="text-ink-muted text-[0.68rem]">Owner · Rapid Plumbing Co.</p>
                    </div>
                  </div>

                  {/* Star rating */}
                  <div className="flex items-center gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-gold-500 text-gold-500" strokeWidth={0} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ──────────── Right Column — 2 stacked cards (col-span-2) ── */}
          <div className="lg:col-span-2 grid grid-rows-2 gap-4 h-[520px] lg:h-full">

            {/* ── Top Right: Metrics Showcase ── */}
            <motion.div
              className="relative rounded-card overflow-hidden group"
              initial={{ opacity: 0, x: 28 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1, duration: 0.7, ease }}
              viewport={{ once: true, margin: '-40px' }}
            >
              <UIPlaceholder />

              {/* Labels */}
              <div className="absolute top-5 left-5 flex items-center gap-2">
                <span className="text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-ink-muted border border-border px-2.5 py-1 rounded-full bg-canvas/70 backdrop-blur-sm">
                  Real Estate · Oakville
                </span>
              </div>

              {/* Metrics grid — bottom area */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <div className="card-premium p-4 space-y-3">
                  <div className="flex items-center gap-1.5">
                    <TrendingUp className="w-3 h-3 text-accent-400" strokeWidth={2} />
                    <span className="text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-accent-400">
                      Lead Generation System
                    </span>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { v: '+340%', l: 'Monthly Leads' },
                      { v: '+45%',  l: 'Close Rate' },
                      { v: '4.8×',  l: 'Avg. ROAS' },
                    ].map(({ v, l }) => (
                      <div key={l} className="flex flex-col gap-0.5">
                        <span className="text-white font-bold text-[0.95rem] leading-none">{v}</span>
                        <span className="text-ink-muted text-[0.58rem] uppercase tracking-[0.1em] font-semibold leading-tight">{l}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* ── Bottom Right: Before → After ── */}
            <motion.div
              className="relative rounded-card overflow-hidden group"
              initial={{ opacity: 0, x: 28 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.7, ease }}
              viewport={{ once: true, margin: '-40px' }}
            >
              {/* Split before/after background */}
              <div className="absolute inset-0 flex">
                {/* Before — muted, washed out */}
                <div className="w-1/2 bg-gradient-to-br from-zinc-900 to-zinc-950 relative overflow-hidden">
                  <div className="absolute inset-0 bg-dot-grid opacity-10" />
                  <div className="absolute top-6 left-4 space-y-2">
                    <div className="h-2 w-14 rounded-full bg-white/[0.06]" />
                    <div className="h-2 w-10 rounded-full bg-white/[0.04]" />
                    <div className="h-2 w-16 rounded-full bg-white/[0.06]" />
                  </div>
                </div>
                {/* Divider */}
                <div className="w-px bg-accent/20 relative z-10 flex items-center">
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-accent/20 border border-accent/30 flex items-center justify-center">
                    <ArrowRight className="w-3 h-3 text-accent-400" strokeWidth={2} />
                  </div>
                </div>
                {/* After — richer */}
                <div className="w-1/2 bg-gradient-to-br from-[#0e0e14] to-zinc-950 relative overflow-hidden">
                  <div className="absolute inset-0 bg-dot-grid opacity-20" />
                  <div className="absolute top-6 left-4 space-y-2">
                    <div className="h-2 w-20 rounded-full bg-accent/30" />
                    <div className="h-2 w-14 rounded-full bg-accent/20" />
                    <div className="h-2 w-18 rounded-full bg-accent/15" />
                  </div>
                </div>
              </div>

              {/* Bottom overlay */}
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-canvas/95 to-transparent" />
              <div className="absolute bottom-4 left-0 right-0 flex items-end justify-between px-5">
                <div className="space-y-0.5">
                  <div className="flex items-center gap-1.5">
                    <span className="text-ink-muted text-[0.6rem] uppercase tracking-[0.14em] font-semibold">Before</span>
                    <ArrowRight className="w-2.5 h-2.5 text-ink-faint" strokeWidth={2} />
                    <span className="text-accent-400 text-[0.6rem] uppercase tracking-[0.14em] font-semibold">After</span>
                  </div>
                  <p className="text-white text-[0.78rem] font-semibold">Restaurant · Burlington</p>
                </div>
                <MetricBadge value="+220%" label="Profile Views" />
              </div>
            </motion.div>

          </div>
        </div>

        {/* ── CTA row beneath grid ── */}
        <motion.div
          className="mt-10 flex items-center justify-between gap-6 flex-wrap"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.6, ease }}
          viewport={{ once: true, margin: '-30px' }}
        >
          <p className="text-ink-muted text-body-md">
            Every result above started with a single audit call.
          </p>
          <a href="#contact" className="btn-signature">
            See the Full Case Studies
            <ArrowRight className="w-4 h-4 shrink-0" />
          </a>
        </motion.div>

      </div>

      <div className="h-px bg-zinc-800/50" />
    </section>
  )
}
