import { motion } from 'framer-motion'

const ease = [0.19, 1, 0.22, 1]

const fadeUp = (delay = 0) => ({
  initial:     { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  transition:  { delay, duration: 0.75, ease },
  viewport:    { once: true, margin: '-40px' },
})

const PILLARS = [
  {
    num:   '01',
    title: 'Not Random Marketing',
    body:  "We don't do tasks — we execute strategies tied to measurable business outcomes. Every deliverable maps to a revenue lever, and every dollar has an assignment.",
  },
  {
    num:   '02',
    title: 'Strategy-First',
    body:  'Before we open a design tool, we study your P&L, your market position, and your competitors. Most agencies design first and strategize after. We reverse that.',
  },
  {
    num:   '03',
    title: 'Local DNA',
    body:  'We understand the GTA market at a granular level — from Hamilton contractors to Oakville luxury real estate to Toronto professional services. The tactics that win here are different.',
  },
]

export default function AboutPillars() {
  return (
    <section className="bg-[#050505]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28">

        {/* ── Header ── */}
        <motion.div className="mb-20 space-y-4 max-w-xl" {...fadeUp(0)}>
          {/* label-overline — global component class */}
          <span className="label-overline">What Makes Us Different</span>
          <h2
            className="text-white font-bold leading-[1.1] tracking-[-0.03em]"
            style={{ fontSize: 'clamp(1.9rem, 3.8vw, 3rem)' }}
          >
            Three Things We{' '}
            <span className="relative inline-block">
              <span className="text-accent-400">Never Compromise On</span>
              <span className="absolute -bottom-[3px] left-0 right-0 h-px bg-accent-400/35" />
            </span>
          </h2>
        </motion.div>

        {/*
          3-column editorial grid — md:divide-x creates the thin hairline
          separators from the global border token (white/5).
        */}
        <div className="grid grid-cols-1 md:grid-cols-3 md:divide-x divide-white/[0.05]">
          {PILLARS.map(({ num, title, body }, i) => (
            <motion.div
              key={num}
              className={[
                'relative py-8 md:py-0',
                i === 0 ? 'md:pr-10' : '',
                i === 1 ? 'md:px-10' : '',
                i === 2 ? 'md:pl-10' : '',
              ].join(' ')}
              {...fadeUp(0.1 + i * 0.1)}
            >
              {/* Large muted step number — purely decorative */}
              <span
                className="block font-mono font-bold text-white select-none mb-6 leading-none"
                style={{ fontSize: 'clamp(4rem, 8vw, 6rem)', opacity: 0.035, letterSpacing: '-0.04em' }}
              >
                {num}
              </span>

              <div className="space-y-3">
                <h3 className="text-white font-semibold tracking-tight" style={{ fontSize: '1.1rem' }}>
                  {title}
                </h3>
                {/* text-zinc-400 — breathable body text per design spec */}
                <p className="text-zinc-400 text-body-md leading-relaxed">{body}</p>
              </div>

              {/* Mobile hairline separator — hidden on last item */}
              {i < PILLARS.length - 1 && (
                <div className="mt-8 h-px bg-zinc-800/60 md:hidden" />
              )}
            </motion.div>
          ))}
        </div>

      </div>
      <div className="h-px bg-zinc-800/50" />
    </section>
  )
}
