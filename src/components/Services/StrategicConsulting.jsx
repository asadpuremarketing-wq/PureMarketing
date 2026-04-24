import { motion } from 'framer-motion'
import { BarChart2, CheckCircle2, ArrowUpRight } from 'lucide-react'

const ease = [0.19, 1, 0.22, 1]

const FOCUSES = [
  'Marketing Audits',
  'Funnel Analysis',
  'Brand Positioning',
  'Growth Recommendations',
]

export default function StrategicConsulting() {
  return (
    <section className="bg-[#0a0a0a] py-24 lg:py-32">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          className="relative rounded-2xl border border-accent-400/25 overflow-hidden"
          style={{
            background: 'rgba(255,255,255,0.018)',
            boxShadow: '0 0 0 1px rgba(129,140,248,0.07), 0 0 80px rgba(99,102,241,0.13), inset 0 1px 0 rgba(255,255,255,0.04)',
          }}
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.75, ease }}
        >
          {/* Radial accent wash behind icon */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse 42% 65% at 8% 50%, rgba(99,102,241,0.11) 0%, transparent 62%)',
            }}
          />

          {/* Main content */}
          <div className="relative p-8 sm:p-10 lg:p-14 grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-10 lg:gap-16 items-center">

            {/* ── Icon column ── */}
            <div className="flex flex-row lg:flex-col items-center lg:items-start gap-5">
              <span className="label-overline">Pro</span>
              <div
                className="w-20 h-20 rounded-2xl flex items-center justify-center border border-accent-400/30 bg-accent/[0.10] shrink-0"
                style={{ boxShadow: '0 0 36px rgba(99,102,241,0.38), 0 0 72px rgba(99,102,241,0.10)' }}
              >
                <BarChart2 className="w-9 h-9 text-accent-400" strokeWidth={1.5} />
              </div>
            </div>

            {/* ── Content column ── */}
            <div className="text-center lg:text-left">
              <h2
                className="text-white font-bold tracking-tight mb-5"
                style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)' }}
              >
                Strategic Consulting &amp; Growth Support
              </h2>

              <p
                className="text-zinc-400 mb-8 max-w-2xl mx-auto lg:mx-0"
                style={{ fontSize: '1.0rem', lineHeight: '1.88' }}
              >
                For businesses that have the tools but lack the map. We provide the high-level oversight
                required to ensure your marketing budget isn&apos;t being wasted.
              </p>

              {/* Focus grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {FOCUSES.map((f, i) => (
                  <motion.div
                    key={f}
                    className="flex items-center gap-3 rounded-xl border border-white/[0.07] bg-white/[0.03] px-4 py-3"
                    initial={{ opacity: 0, x: -14 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.25 + i * 0.08, duration: 0.5, ease }}
                  >
                    <CheckCircle2 className="w-4 h-4 text-accent-400 shrink-0" />
                    <span className="text-zinc-300 text-sm font-medium">{f}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom CTA strip */}
          <div className="relative border-t border-white/[0.06] px-8 sm:px-10 lg:px-14 py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <p className="text-zinc-500 text-sm">
              Available as a standalone engagement or add-on to any system package.
            </p>
            <a
              href="#contact"
              className="shrink-0 flex items-center gap-1.5 text-accent-400 text-sm font-semibold hover:text-white transition-colors group"
            >
              Start a Consultation
              <ArrowUpRight
                className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </div>

        </motion.div>
      </div>
    </section>
  )
}
