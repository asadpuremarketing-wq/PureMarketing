import { motion } from 'framer-motion'
import { Calendar, ArrowRight, MapPin } from 'lucide-react'

const ease = [0.19, 1, 0.22, 1]

const fadeUp = (delay = 0) => ({
  initial:    { opacity: 0, y: 24 },
  whileInView:{ opacity: 1, y: 0 },
  transition: { delay, duration: 0.7, ease },
  viewport:   { once: true, margin: '-40px' },
})

export default function CTASection() {
  return (
    <section className="relative bg-[#050505] overflow-hidden">
      <div className="h-px bg-zinc-800/50" />

      {/* ── Atmosphere ── */}
      {/* Radial gradient draws the eye inward */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 50%, #0e0e0e 0%, #050505 70%)',
        }}
      />

      {/* Large Indigo glow blob — centered */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[380px] rounded-full bg-accent/[0.06] blur-[110px] pointer-events-none" />

      {/* Subtle dot grid */}
      <div className="absolute inset-0 bg-dot-grid opacity-[0.15] pointer-events-none" />

      {/* ── Content ── */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-32 sm:py-40 text-center">

        {/* Overline */}
        <motion.div {...fadeUp(0)}>
          <span className="label-overline mb-6 block">Let&apos;s Build Together</span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          className="text-white font-extrabold leading-[1.06] tracking-[-0.04em] text-balance"
          style={{ fontSize: 'clamp(2.2rem, 5.5vw, 4.5rem)' }}
          {...fadeUp(0.1)}
        >
          Ready to Build a Stronger{' '}
          <span className="relative inline-block">
            <span className="text-accent-400">Growth System</span>
            <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-accent-400/35" />
          </span>
          {' '}for Your Business?
        </motion.h2>

        {/* Supporting line */}
        <motion.p
          className="mt-7 text-ink-secondary text-body-lg max-w-xl mx-auto leading-relaxed"
          {...fadeUp(0.18)}
        >
          Stop running disconnected campaigns. Start building a system that compounds.
          One audit call — we&apos;ll show you exactly where the revenue gaps are.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          {...fadeUp(0.26)}
        >
          <a href="#contact" className="btn-signature">
            <Calendar className="w-4 h-4 shrink-0" />
            Book a Strategy Call
          </a>
          <a href="#contact" className="btn-ghost">
            Contact Us
            <ArrowRight className="w-4 h-4 shrink-0" />
          </a>
        </motion.div>

        {/* Trust micro-line */}
        <motion.div
          className="mt-8 flex items-center justify-center gap-2 text-ink-faint"
          {...fadeUp(0.33)}
        >
          <MapPin className="w-3 h-3 text-accent-400/60 shrink-0" />
          <span className="text-caption">
            No commitment &middot; 45-min session &middot; Serving Hamilton &amp; the GTA
          </span>
        </motion.div>

      </div>

      {/* Bottom gradient — blends into footer's bg-canvas (#0a0a0a) */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-canvas to-transparent pointer-events-none" />
    </section>
  )
}
