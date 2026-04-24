import { motion } from 'framer-motion'
import { ArrowRight, Calendar, MapPin, ChevronRight } from 'lucide-react'

const ease = [0.19, 1, 0.22, 1]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.7, ease },
})

const BARS = [28, 42, 34, 55, 46, 68, 58, 78, 72, 90, 84, 100]

function HeroVisual() {
  return (
    <div className="relative w-full max-w-[460px] mx-auto">
      {/* Ambient glow behind card */}
      <div className="absolute inset-0 -z-10 rounded-card blur-[60px] bg-accent/10 scale-110" />

      {/* Main dashboard card */}
      <motion.div
        className="card-premium noise-overlay p-7 space-y-5"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35, duration: 0.8, ease }}
      >
        {/* Header row */}
        <div className="flex items-center justify-between">
          <span className="label-overline text-[0.7rem]">Growth Dashboard</span>
          <span className="flex items-center gap-1.5 text-emerald-400 text-caption font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Live
          </span>
        </div>

        {/* Primary stat */}
        <div>
          <p className="text-[3rem] font-extrabold text-white leading-none tracking-[-0.04em]">
            +127%
          </p>
          <p className="text-ink-secondary text-body-md mt-1">
            Average revenue growth · first 90 days
          </p>
        </div>

        {/* Animated bar chart */}
        <div className="flex items-end gap-[5px] h-14">
          {BARS.map((h, i) => (
            <motion.div
              key={i}
              className="flex-1 rounded-[3px]"
              style={{
                backgroundColor:
                  i >= 9 ? '#6366f1' : 'rgba(99,102,241,0.22)',
                height: `${h}%`,
              }}
              initial={{ scaleY: 0, originY: 'bottom' }}
              animate={{ scaleY: 1 }}
              transition={{ delay: 0.9 + i * 0.055, duration: 0.45, ease: 'easeOut' }}
            />
          ))}
        </div>

        {/* Metrics row */}
        <div className="grid grid-cols-3 gap-3 pt-4 border-t border-border">
          {[
            { label: 'Leads / Mo', value: '340+' },
            { label: 'Avg. ROAS',  value: '4.8×' },
            { label: 'Google ★',   value: '4.9'  },
          ].map(({ label, value }) => (
            <div key={label} className="flex flex-col gap-0.5">
              <span className="text-white font-bold text-[1.25rem] leading-none tracking-tight">
                {value}
              </span>
              <span className="text-ink-muted text-[0.7rem] uppercase tracking-widest font-semibold">
                {label}
              </span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Floating badge — top right */}
      <motion.div
        className="absolute -top-4 -right-4 card-premium px-3.5 py-2.5 flex items-center gap-2.5"
        initial={{ opacity: 0, scale: 0.75 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.05, duration: 0.5, ease }}
      >
        <div className="w-7 h-7 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
          <ChevronRight className="w-3.5 h-3.5 text-accent-400" />
        </div>
        <div className="leading-tight">
          <p className="text-white text-[0.8rem] font-semibold">Ranked #1</p>
          <p className="text-ink-muted text-[0.68rem]">Google · Local Pack</p>
        </div>
      </motion.div>

      {/* Floating badge — bottom left */}
      <motion.div
        className="absolute -bottom-4 -left-4 card-premium px-3.5 py-2.5"
        initial={{ opacity: 0, scale: 0.75 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2, duration: 0.5, ease }}
      >
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
          <span className="text-white text-[0.8rem] font-medium whitespace-nowrap">
            3 new inbound leads today
          </span>
        </div>
      </motion.div>
    </div>
  )
}

export default function Hero() {
  return (
    <section className="relative bg-[#050505] min-h-screen flex items-center overflow-hidden">
      {/* Background: dot grid + ambient blobs */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <div className="bg-dot-grid absolute inset-0 opacity-[0.35]" />
        <div className="absolute top-[20%] left-[10%] w-[520px] h-[520px] rounded-full bg-accent/[0.07] blur-[110px]" />
        <div className="absolute bottom-[15%] right-[8%] w-[360px] h-[360px] rounded-full bg-gold/[0.05] blur-[90px]" />
      </div>

      {/* Content */}
      <div className="section relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-14 xl:gap-20 items-center pt-28 pb-20 min-h-screen">

        {/* ── Left: Copy ── */}
        <div className="flex flex-col gap-7">

          <motion.div {...fadeUp(0)}>
            <span className="label-overline">GTA's Premier Growth Authority</span>
          </motion.div>

          <motion.h1
            className="text-white font-extrabold leading-[1.04] tracking-[-0.045em]"
            style={{ fontSize: 'clamp(2.6rem, 5.5vw, 4.5rem)' }}
            {...fadeUp(0.1)}
          >
            Growth Systems for{' '}
            <span className="gradient-text-accent">Service Businesses</span>,{' '}
            Real Estate Agents, and Restaurants in the GTA
          </motion.h1>

          <motion.p
            className="text-ink-secondary text-body-lg max-w-[520px]"
            {...fadeUp(0.2)}
          >
            We build high-converting websites, authority-driven content, and paid
            strategies that help local businesses grow with intention.
          </motion.p>

          <motion.div className="flex flex-wrap gap-3.5" {...fadeUp(0.28)}>
            <button className="btn-signature">
              <Calendar className="w-4 h-4 shrink-0" />
              Book a Strategy Call
            </button>
            <button className="btn-ghost">
              View Our Work
              <ArrowRight className="w-4 h-4 shrink-0" />
            </button>
          </motion.div>

          <motion.div
            className="flex items-center gap-2 text-ink-muted"
            style={{ fontSize: '0.8rem', letterSpacing: '0.01em' }}
            {...fadeUp(0.36)}
          >
            <MapPin className="w-3.5 h-3.5 text-accent-400 shrink-0" />
            <span>Serving local businesses across Hamilton and the GTA</span>
          </motion.div>
        </div>

        {/* ── Right: Visual ── */}
        <div className="hidden lg:flex items-center justify-center">
          <HeroVisual />
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none" />
    </section>
  )
}
