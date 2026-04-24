import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const ease = [0.19, 1, 0.22, 1]

const INDUSTRIES = [
  {
    id:    'service',
    step:  '01',
    name:  'Service-Based Businesses',
    focus: 'Scaling through lead-volume and operational trust.',
  },
  {
    id:    'realestate',
    step:  '02',
    name:  'Real Estate Agents',
    focus: 'Building personal brand authority and listing dominance.',
  },
  {
    id:    'food',
    step:  '03',
    name:  'Restaurants & Food',
    focus: 'Capturing attention and driving high-frequency customer intent.',
  },
]

export default function AboutIndustries() {
  const [hovered, setHovered] = useState(null)

  return (
    <section className="bg-[#050505]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28">

        {/* ── Header ── */}
        <motion.div
          className="mb-16 space-y-4"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease }}
          viewport={{ once: true, margin: '-40px' }}
        >
          <span className="label-overline">Industries We Care About</span>
          <h2
            className="text-white font-bold leading-[1.1] tracking-[-0.03em]"
            style={{ fontSize: 'clamp(1.9rem, 3.8vw, 3rem)' }}
          >
            Focused. Intentional.{' '}
            <span className="text-accent-400">Dominant.</span>
          </h2>
        </motion.div>

        {/* ── Industry list ── */}
        <div>
          {INDUSTRIES.map(({ id, step, name, focus }, i) => (
            <motion.div
              key={id}
              className="relative border-t border-white/[0.06] overflow-hidden"
              onHoverStart={() => setHovered(i)}
              onHoverEnd={() => setHovered(null)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.1, duration: 0.65, ease }}
              viewport={{ once: true, margin: '-40px' }}
            >
              {/* Row background tint on hover */}
              <AnimatePresence>
                {hovered === i && (
                  <motion.div
                    key="bg"
                    className="absolute inset-0 bg-blue-500/[0.05] pointer-events-none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                  />
                )}
              </AnimatePresence>

              <div className="relative py-8 lg:py-10 flex items-start gap-6 lg:gap-10">

                {/* Step counter */}
                <span className="hidden sm:block font-mono text-[0.58rem] tracking-[0.2em] text-ink-faint uppercase mt-3 shrink-0 w-6">
                  {step}
                </span>

                {/* Industry name + expanding focus */}
                <div className="flex-1 min-w-0">
                  <motion.h3
                    className="text-white font-bold tracking-tighter leading-[1.05]"
                    style={{ fontSize: 'clamp(2.4rem, 5vw, 4.2rem)' }}
                    animate={{ opacity: hovered === i ? 1 : 0.7 }}
                    transition={{ duration: 0.3 }}
                  >
                    {name}
                  </motion.h3>

                  {/* Expanding strategic focus — AnimatePresence for smooth mount/unmount */}
                  <AnimatePresence>
                    {hovered === i && (
                      <motion.div
                        key="focus"
                        className="overflow-hidden"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.38, ease }}
                      >
                        <p
                          className="text-accent-400 font-medium pt-3 tracking-tight"
                          style={{ fontSize: 'clamp(1rem, 1.8vw, 1.15rem)' }}
                        >
                          {focus}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Right side: pill + arrow */}
                <div className="shrink-0 flex items-center gap-3 pt-2">

                  {/* Floating glassmorphism 'Priority Niche' pill */}
                  <AnimatePresence>
                    {hovered === i && (
                      <motion.div
                        key="pill"
                        className="hidden sm:flex items-center gap-2 bg-white/[0.06] backdrop-blur-xl border border-white/[0.09] rounded-full px-4 py-1.5"
                        initial={{ opacity: 0, scale: 0.86, x: 12 }}
                        animate={{ opacity: 1, scale: 1,    x: 0  }}
                        exit={{    opacity: 0, scale: 0.86, x: 12 }}
                        transition={{ duration: 0.28, ease }}
                      >
                        {/* Live pulse indicator */}
                        <span className="relative flex h-1.5 w-1.5 shrink-0">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-400 opacity-70" />
                          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent-400" />
                        </span>
                        <span className="text-white/75 text-[0.67rem] font-semibold tracking-[0.17em] uppercase">
                          Priority Niche
                        </span>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Arrow — nudges up-right on hover */}
                  <motion.div
                    animate={{
                      x:       hovered === i ?  4 : 0,
                      y:       hovered === i ? -4 : 0,
                      opacity: hovered === i ?  1 : 0.28,
                    }}
                    transition={{ duration: 0.3, ease }}
                  >
                    <ArrowUpRight className="w-8 h-8 text-accent-400" strokeWidth={1.5} />
                  </motion.div>
                </div>

              </div>
            </motion.div>
          ))}

          {/* Terminal border on final row */}
          <div className="border-t border-white/[0.06]" />
        </div>

        {/* ── Authority line ── */}
        <motion.p
          className="text-center text-zinc-500 mt-16 max-w-xl mx-auto leading-relaxed"
          style={{ fontSize: '0.9rem' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.35, duration: 0.8 }}
          viewport={{ once: true, margin: '-40px' }}
        >
          We only partner with businesses that prioritize growth over &ldquo;busy-work.&rdquo;
        </motion.p>

      </div>
      <div className="h-px bg-zinc-800/50" />
    </section>
  )
}
