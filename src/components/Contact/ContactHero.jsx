import { motion } from 'framer-motion'

const ease = [0.19, 1, 0.22, 1]

const container = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.18, delayChildren: 0.15 } },
}
const chunk = {
  hidden:  { opacity: 0, y: 36, filter: 'blur(8px)' },
  visible: { opacity: 1, y: 0,  filter: 'blur(0px)', transition: { duration: 0.8, ease } },
}

const HEADLINE = [
  { text: "Let's Talk " },
  { text: 'About '      },
  { text: 'Growth.',    accent: true },
]

export default function ContactHero() {
  return (
    <section className="relative bg-[#050505] overflow-hidden">

      {/* Top-down mesh gradient — blue-500/10 fade with grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: [
            'linear-gradient(to bottom, rgba(59,130,246,0.10) 0%, rgba(99,102,241,0.05) 28%, transparent 58%)',
            'repeating-linear-gradient(0deg, transparent, transparent 47px, rgba(255,255,255,0.016) 47px, rgba(255,255,255,0.016) 48px)',
            'repeating-linear-gradient(90deg, transparent, transparent 47px, rgba(255,255,255,0.016) 47px, rgba(255,255,255,0.016) 48px)',
          ].join(', '),
        }}
      />

      {/* Soft radial to anchor the eye at center-top */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 44% at 50% 0%, rgba(30,58,138,0.22) 0%, transparent 65%)',
        }}
      />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-28 text-center">

        {/* Headline — phrase stagger, massive size */}
        <motion.h1
          className="text-white font-extrabold tracking-tighter leading-[1.0] mb-8"
          style={{ fontSize: 'clamp(3.2rem, 8.5vw, 6.2rem)' }}
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {HEADLINE.map(({ text, accent }, i) => (
            <motion.span
              key={i}
              variants={chunk}
              className={accent ? 'text-accent-400' : undefined}
            >
              {text}
            </motion.span>
          ))}
        </motion.h1>

        {/* Subheadline — 2-line max */}
        <motion.p
          className="text-zinc-400 max-w-xl mx-auto"
          style={{ fontSize: '1.1rem', lineHeight: '1.82' }}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.72, ease }}
        >
          We only partner with businesses ready for revenue-focused systems.
          This is the start of your growth architecture.
        </motion.p>

        {/* Status Badge */}
        <motion.div
          className="inline-flex items-center gap-3 mt-10 rounded-full border border-emerald-400/25 px-5 py-2.5"
          style={{
            background:     'rgba(16,185,129,0.06)',
            backdropFilter: 'blur(14px)',
            boxShadow:      '0 0 0 1px rgba(52,211,153,0.08), 0 0 24px rgba(16,185,129,0.08)',
          }}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.65, ease }}
        >
          {/* Pulsing green dot */}
          <div className="relative w-2 h-2 shrink-0">
            <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-55" />
            <span className="relative block w-full h-full rounded-full bg-emerald-400" />
          </div>
          <span className="text-emerald-400/90 text-[0.68rem] font-mono tracking-[0.22em] uppercase">
            System Status: Accepting GTA Partners
          </span>
        </motion.div>

      </div>

      <div className="h-px bg-zinc-800/50" />
    </section>
  )
}
