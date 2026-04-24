import { useRef, Fragment } from 'react'
import { motion, useInView } from 'framer-motion'
import { Search, Map, Video, ArrowRight } from 'lucide-react'

const ease = [0.19, 1, 0.22, 1]
const vp = { once: true, margin: '-60px' }

const STEPS = [
  {
    num:   '01',
    icon:  Search,
    title: 'The Deep Dive',
    sub:   'Manual Footprint Audit',
    desc:  'We analyze your website, competitor landscape, and local market positioning across the GTA to find gaps your rivals are missing.',
    tags:  ['Website Audit', 'Competitor Map', 'Market Gaps'],
  },
  {
    num:   '02',
    icon:  Map,
    title: 'The Architecture',
    sub:   'Revenue Roadmap Draft',
    desc:  'Based on the audit, we draft a custom growth architecture — specific systems, channels, and sequencing tailored to your revenue goals.',
    tags:  ['Growth Systems', 'Channel Strategy', 'Revenue Plan'],
  },
  {
    num:   '03',
    icon:  Video,
    title: 'The Executive Call',
    sub:   '30-Min Strategy Walkthrough',
    desc:  'We walk you through the roadmap together. No pressure, no pitch deck — just a clear picture of what growth looks like for your business.',
    tags:  ['30-Min Call', 'No Pressure', 'Clear Next Steps'],
  },
]

/* ── Animated data line ──────────────────────────────────────── */
function DataLine({ delay = 0 }) {
  return (
    <div className="hidden lg:flex items-center flex-1 px-3 relative">
      {/* Static track */}
      <div className="w-full h-px bg-zinc-800" />
      {/* Animated pulse dot */}
      <motion.div
        className="absolute h-1.5 w-1.5 rounded-full bg-accent-400/80"
        style={{ top: '50%', transform: 'translateY(-50%)' }}
        animate={{ left: ['0%', '100%'], opacity: [0, 1, 1, 0] }}
        transition={{
          duration:    2.2,
          delay:       delay,
          repeat:      Infinity,
          repeatDelay: 1.4,
          ease:        'easeInOut',
        }}
      />
    </div>
  )
}

/* ── Step Card ───────────────────────────────────────────────── */
function StepCard({ step, index, inView }) {
  const Icon = step.icon

  return (
    <motion.div
      className="relative flex-1 min-w-0"
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.2 + index * 0.15, duration: 0.7, ease }}
    >
      {/* Large blurred background number */}
      <div
        className="absolute -top-4 left-0 font-black text-white pointer-events-none select-none leading-none"
        style={{
          fontSize:   'clamp(5rem, 9vw, 8rem)',
          opacity:    0.028,
          filter:     'blur(2px)',
          lineHeight: 1,
        }}
      >
        {step.num}
      </div>

      {/* Card */}
      <div
        className="relative rounded-2xl border border-white/[0.07] p-6 h-full flex flex-col"
        style={{ background: 'rgba(255,255,255,0.022)', backdropFilter: 'blur(20px)' }}
      >
        {/* Step number + icon row */}
        <div className="flex items-center justify-between mb-5">
          <span className="text-accent-400 font-mono text-[0.68rem] font-bold tracking-[0.18em] uppercase">
            Step {step.num}
          </span>
          <div
            className="w-9 h-9 rounded-xl flex items-center justify-center"
            style={{ background: 'rgba(99,102,241,0.10)', border: '1px solid rgba(129,140,248,0.20)' }}
          >
            <Icon style={{ width: '0.95rem', height: '0.95rem' }} className="text-accent-400" strokeWidth={1.6} />
          </div>
        </div>

        {/* Title */}
        <h3 className="text-white font-extrabold tracking-tighter mb-1" style={{ fontSize: 'clamp(1.3rem, 2vw, 1.6rem)' }}>
          {step.title}
        </h3>
        <p className="text-accent-400/70 text-[0.68rem] font-semibold tracking-[0.14em] uppercase mb-4">
          {step.sub}
        </p>

        {/* Description */}
        <p className="text-zinc-400 text-sm leading-relaxed flex-1 mb-5">
          {step.desc}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {step.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full px-2.5 py-0.5 text-[0.62rem] font-semibold tracking-wide text-zinc-500 border border-white/[0.06]"
              style={{ background: 'rgba(255,255,255,0.03)' }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

/* ── Main ────────────────────────────────────────────────────── */
export default function ContactRoadmap() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section className="relative bg-[#050505] pb-24 lg:pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 lg:pt-24">

        {/* Section header */}
        <motion.div
          className="text-center mb-14 lg:mb-18"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 0.65, ease }}
        >
          <span className="label-overline block mb-5">How It Works</span>
          <h2
            className="text-white font-extrabold tracking-tighter leading-[1.04] mb-5"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}
          >
            What Happens After<br />
            <span className="text-accent-400">You Submit.</span>
          </h2>
          <p className="text-zinc-500 max-w-lg mx-auto text-sm leading-relaxed">
            Every engagement starts with a structured discovery process — so you know exactly
            what you're getting before we discuss partnership terms.
          </p>
        </motion.div>

        {/* Timeline row */}
        <div ref={ref}>

          {/* Desktop: horizontal with data lines */}
          <div className="hidden lg:flex items-stretch gap-0">
            {STEPS.map((step, i) => (
              <Fragment key={step.num}>
                <StepCard step={step} index={i} inView={inView} />
                {i < STEPS.length - 1 && (
                  <motion.div
                    className="flex items-center self-start mt-14 w-16 shrink-0"
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.55 + i * 0.15, duration: 0.5, ease }}
                  >
                    <DataLine delay={0.8 + i * 0.4} />
                  </motion.div>
                )}
              </Fragment>
            ))}
          </div>

          {/* Mobile: stacked with vertical connector */}
          <div className="lg:hidden space-y-4">
            {STEPS.map((step, i) => (
              <div key={step.num}>
                <StepCard step={step} index={i} inView={inView} />
                {i < STEPS.length - 1 && (
                  <div className="flex justify-center py-3">
                    <motion.div
                      className="flex flex-col items-center gap-1"
                      initial={{ opacity: 0 }}
                      animate={inView ? { opacity: 1 } : {}}
                      transition={{ delay: 0.4 + i * 0.12, duration: 0.45, ease }}
                    >
                      <div className="w-px h-6 bg-zinc-800" />
                      <ArrowRight className="w-3.5 h-3.5 text-zinc-700 rotate-90" />
                    </motion.div>
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>

        {/* Bottom note */}
        <motion.p
          className="text-center text-zinc-700 text-xs mt-10 tracking-wide"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={vp}
          transition={{ delay: 0.4, duration: 0.55, ease }}
        >
          No commitment required until you've seen the roadmap.
        </motion.p>

      </div>

      <div className="h-px bg-zinc-800/50 mt-24 lg:mt-32" />
    </section>
  )
}
