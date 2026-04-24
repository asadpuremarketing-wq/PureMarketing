import { motion } from 'framer-motion'

const ease = [0.19, 1, 0.22, 1]

export default function Manifesto() {
  return (
    <section className="bg-[#050505]">
      <div className="h-px bg-zinc-800/50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-24">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* ── Left: Headline ── */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, ease }}
            viewport={{ once: true, margin: '-60px' }}
          >
            <span className="label-overline block mb-6">Why Growth Authority</span>

            <h2
              className="text-white font-extrabold leading-[1.04] tracking-[-0.04em]"
              style={{ fontSize: 'clamp(2.6rem, 5vw, 4.5rem)' }}
            >
              More Than
              <br />
              Marketing
              <br />
              <span className="relative inline-block">
                Services
                {/* Hairline accent underline */}
                <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-accent-400/40" />
              </span>
              <span className="text-accent-400">.</span>
            </h2>
          </motion.div>

          {/* ── Right: Operator's Manifesto ── */}
          <motion.div
            className="space-y-7"
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1, duration: 0.75, ease }}
            viewport={{ once: true, margin: '-60px' }}
          >
            {/* Thin vertical left-rail — typographic accent */}
            <div className="border-l-2 border-accent/25 pl-6 space-y-5">
              <p className="text-white text-[1.15rem] leading-[1.8] font-medium">
                We do not believe in disconnected marketing deliverables. Every part of the
                system must work together — from the message to the traffic — so the business
                grows with structure, not guesswork.
              </p>

              <p className="text-ink-secondary text-body-lg leading-relaxed">
                Our approach is{' '}
                <strong className="text-white font-semibold">Revenue-Focused</strong>{' '}
                by design. Every strategy we execute carries a deliberate{' '}
                <strong className="text-white font-semibold">Business Intent</strong>{' '}
                — to make your local operation the undeniable authority in its market, with
                systems that outlast any single campaign.
              </p>
            </div>

            {/* Quiet separator */}
            <div className="w-10 h-px bg-white/[0.08]" />

            {/* Two stripped-back proof lines */}
            <div className="space-y-2">
              {[
                'No retainer contracts built on deliverables you can\'t track.',
                'Every engagement starts with a growth audit, not a proposal.',
              ].map((line) => (
                <p key={line} className="text-ink-muted text-body-md flex items-start gap-2.5">
                  <span className="mt-[0.45em] w-1 h-1 rounded-full bg-accent-400/60 shrink-0" />
                  {line}
                </p>
              ))}
            </div>
          </motion.div>

        </div>

      </div>

      <div className="h-px bg-zinc-800/50" />
    </section>
  )
}
