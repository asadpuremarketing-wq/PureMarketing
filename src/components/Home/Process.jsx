import { motion } from 'framer-motion'

const ease = [0.19, 1, 0.22, 1]

const STEPS = [
  {
    num:   '01',
    title: 'Audit',
    body:  'We examine your current digital footprint, identify conversion gaps, and map the exact revenue opportunities being left on the table.',
  },
  {
    num:   '02',
    title: 'Strategy',
    body:  'A custom growth roadmap built around your market position, competitors, and target audience — no generic playbooks.',
  },
  {
    num:   '03',
    title: 'Build',
    body:  'We deploy your website, content systems, and paid infrastructure with precision — every component engineered to perform from day one.',
  },
  {
    num:   '04',
    title: 'Scale',
    body:  'Once the system runs, we optimize relentlessly — testing, refining, and expanding into new channels as your market share grows.',
  },
]

export default function Process() {
  return (
    <section className="bg-[#050505]">
      <div className="h-px bg-zinc-800/50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-24">

        {/* ── Header ── */}
        <motion.div
          className="max-w-xl mb-20 space-y-4"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease }}
          viewport={{ once: true, margin: '-60px' }}
        >
          <span className="label-overline">How We Work</span>
          <h2
            className="text-white font-bold leading-[1.1] tracking-[-0.03em]"
            style={{ fontSize: 'clamp(1.9rem, 3.8vw, 3rem)' }}
          >
            A System Built in{' '}
            <span className="relative inline-block">
              <span className="text-accent-400">Four Stages</span>
              <span className="absolute -bottom-[3px] left-0 right-0 h-px bg-accent-400/35" />
            </span>
          </h2>
          <p className="text-ink-secondary text-body-lg">
            Every engagement follows the same structured path — so you always know
            where you are and what&apos;s coming next.
          </p>
        </motion.div>

        {/* ── Horizontal Timeline — desktop ── */}
        <div className="hidden md:block">
          <div className="relative">

            {/* Animated rail */}
            <motion.div
              className="absolute top-[11px] left-0 right-0 h-px bg-zinc-800/80"
              initial={{ scaleX: 0, originX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1.1, ease }}
              viewport={{ once: true, margin: '-80px' }}
            />

            {/* Steps */}
            <div className="grid grid-cols-4 gap-10">
              {STEPS.map(({ num, title, body }, i) => (
                <motion.div
                  key={num}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.12, duration: 0.6, ease }}
                  viewport={{ once: true, margin: '-60px' }}
                >
                  {/* Node on rail */}
                  <div className="relative z-10 w-[22px] h-[22px] rounded-full border border-zinc-700 bg-[#050505] flex items-center justify-center mb-8">
                    <span className="w-[7px] h-[7px] rounded-full bg-accent-400" />
                  </div>

                  {/* Content */}
                  <div className="space-y-3">
                    <span className="font-mono text-ink-faint text-[0.68rem] tracking-[0.18em] block">
                      {num}
                    </span>
                    <h3
                      className="text-white font-semibold tracking-tight"
                      style={{ fontSize: '1.05rem' }}
                    >
                      {title}
                    </h3>
                    <p className="text-ink-secondary text-body-md leading-relaxed">
                      {body}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </div>

        {/* ── Vertical Timeline — mobile ── */}
        <div className="md:hidden relative pl-8">

          {/* Vertical rail */}
          <motion.div
            className="absolute top-0 left-[10px] bottom-0 w-px bg-zinc-800/80"
            initial={{ scaleY: 0, originY: 0 }}
            whileInView={{ scaleY: 1 }}
            transition={{ duration: 1.1, ease }}
            viewport={{ once: true, margin: '-40px' }}
          />

          <div className="space-y-10">
            {STEPS.map(({ num, title, body }, i) => (
              <motion.div
                key={num}
                className="relative"
                initial={{ opacity: 0, x: -14 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1, duration: 0.55, ease }}
                viewport={{ once: true, margin: '-30px' }}
              >
                {/* Node */}
                <div className="absolute -left-[30px] top-0 z-10 w-5 h-5 rounded-full border border-zinc-700 bg-[#050505] flex items-center justify-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-400" />
                </div>

                <div className="space-y-2">
                  <span className="font-mono text-ink-faint text-[0.68rem] tracking-[0.18em] block">{num}</span>
                  <h3 className="text-white font-semibold" style={{ fontSize: '1.05rem' }}>
                    {title}
                  </h3>
                  <p className="text-ink-secondary text-body-md leading-relaxed">{body}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>

      <div className="h-px bg-zinc-800/50" />
    </section>
  )
}
