import { motion } from 'framer-motion'
import { Layers, Video, Star, Target } from 'lucide-react'

const ease = [0.19, 1, 0.22, 1]

const PAINS = [
  {
    num: '01',
    icon: Layers,
    title: 'The Conversion Gap',
    body: 'Your website looks professional but functions as a digital brochure, not a lead-generation tool.',
  },
  {
    num: '02',
    icon: Video,
    title: 'The Authority Void',
    body: 'Without high-end video and strategic content, you are just another commodity in a crowded local market.',
  },
  {
    num: '03',
    icon: Star,
    title: 'The Reputation Leak',
    body: 'A lack of managed social proof and reviews is costing you the trust factor before the first phone call.',
  },
  {
    num: '04',
    icon: Target,
    title: 'The Ad Spend Trap',
    body: 'Running traffic to an unoptimized funnel is the fastest way to burn capital without seeing a return on investment.',
  },
]

export default function PainPoints() {
  return (
    <section className="bg-[#050505]">

      {/* ── Section Header ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-14">
        <motion.div
          className="max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease }}
          viewport={{ once: true, margin: '-60px' }}
        >
          <span className="label-overline mb-5 block">The Real Problem</span>

          <h2
            className="text-white font-bold leading-[1.1] tracking-[-0.03em] text-balance"
            style={{ fontSize: 'clamp(1.9rem, 3.8vw, 3rem)' }}
          >
            Most Local Businesses Don&apos;t Have a <span className="text-ink-muted line-through decoration-ink-faint decoration-2">
              Marketing Problem
            </span>{' '}
            &mdash; They Have a{' '}
            <span className="relative inline-block">
              <span className="text-accent-400">System</span>
              {/* Hairline underline tied to accent */}
              <span className="absolute -bottom-[3px] left-0 right-0 h-px bg-accent-400/40" />
            </span>
            {' '}Problem.
          </h2>

          <p className="mt-5 text-ink-secondary text-body-lg max-w-xl">
            Scattered tactics don&apos;t build revenue. Every one of these gaps compounds silently
            until a competitor captures the market you should own.
          </p>
        </motion.div>
      </div>

      {/* ── Gap-px Feature Grid ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-0">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-zinc-800/50"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          {PAINS.map(({ num, icon: Icon, title, body }) => (
            <motion.div
              key={num}
              className={[
                'group relative bg-[#050505] p-9 flex flex-col gap-7',
                'cursor-default transition-shadow duration-300 ease-out',
                'hover:shadow-[inset_0_0_0_1px_rgba(99,102,241,0.35),inset_0_0_48px_rgba(99,102,241,0.035)]',
              ].join(' ')}
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
              }}
            >
              {/* Muted number — top-right */}
              <span
                className="absolute top-7 right-7 font-mono text-[0.62rem] tracking-[0.18em] text-ink-faint select-none"
                aria-hidden="true"
              >
                {num}
              </span>

              {/* Icon */}
              <div className="w-fit">
                <Icon
                  className="text-ink-muted group-hover:text-accent-400 transition-colors duration-300"
                  style={{ width: '1.15rem', height: '1.15rem' }}
                  strokeWidth={1.2}
                />
              </div>

              {/* Copy */}
              <div className="space-y-3 pr-6">
                <h3 className="text-white font-semibold leading-snug tracking-tight"
                  style={{ fontSize: '1.05rem' }}>
                  {title}
                </h3>
                <p className="text-ink-secondary text-body-md leading-relaxed">
                  {body}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Spacer to merge visually with next section */}
      <div className="h-px bg-zinc-800/50" />
    </section>
  )
}
