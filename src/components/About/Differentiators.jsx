import { motion } from 'framer-motion'
import { Target, BarChart2, MapPin } from 'lucide-react'

const ease = [0.19, 1, 0.22, 1]

/* Per-state variants let each animation (enter vs. hover) own its own transition */
const cardVariants = {
  hidden:  { opacity: 0, y: 32 },
  visible: (i) => ({
    opacity: 1,
    y:       0,
    transition: { delay: 0.1 + i * 0.12, duration: 0.75, ease },
  }),
  hovered: {
    y:          -10,
    transition: { type: 'spring', stiffness: 260, damping: 22 },
  },
}

const CARDS = [
  {
    num:        '01',
    Icon:       Target,
    iconColor:  '#f43f5e',
    iconGlow:   'rgba(244,63,94,0.65)',
    iconBg:     'rgba(244,63,94,0.10)',
    iconBorder: 'rgba(244,63,94,0.20)',
    title:      'Not Random Marketing',
    body:       'We replace guesswork with architectural systems. Every campaign component has a defined role in moving a prospect to a paying customer.',
  },
  {
    num:        '02',
    Icon:       BarChart2,
    iconColor:  '#fbbf24',
    iconGlow:   'rgba(251,191,36,0.65)',
    iconBg:     'rgba(251,191,36,0.10)',
    iconBorder: 'rgba(251,191,36,0.20)',
    title:      'Strategy-First Architecture',
    body:       'Your P&L and market position dictate our design, not the other way around. Most agencies design first and strategize after. We reverse that.',
  },
  {
    num:        '03',
    Icon:       MapPin,
    iconColor:  '#818cf8',
    iconGlow:   'rgba(129,140,248,0.75)',
    iconBg:     'rgba(99,102,241,0.10)',
    iconBorder: 'rgba(129,140,248,0.22)',
    title:      'Local GTA DNA',
    body:       'Deep expertise in the Hamilton, Burlington, and Toronto business landscape. The tactics that win here are different, and we know them cold.',
  },
]

export default function Differentiators() {
  return (
    <section className="bg-[#050505]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28">

        {/* ── Header ── */}
        <motion.div
          className="mb-20 space-y-4 max-w-xl"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease }}
          viewport={{ once: true, margin: '-40px' }}
        >
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

        {/* ── Staggered 3-card grid ──────────────────────────────────────
            Card 2 (i === 1) drops md:mt-14 on desktop to break even columns.
            items-start prevents cards from stretching to equal height.
            ─────────────────────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-7 items-start">
          {CARDS.map(({ num, Icon, iconColor, iconGlow, iconBg, iconBorder, title, body }, i) => (
            <motion.div
              key={num}
              className={[
                'group relative overflow-hidden rounded-card border border-white/10',
                'bg-white/[0.03] backdrop-blur-glass p-7 lg:p-8 cursor-default',
                i === 1 ? 'md:mt-14' : '',
              ].join(' ')}
              style={{
                boxShadow: '0 1px 0 0 rgba(255,255,255,0.04) inset, 0 0 0 1px rgba(255,255,255,0.06)',
              }}
              variants={cardVariants}
              custom={i}
              initial="hidden"
              whileInView="visible"
              whileHover="hovered"
              viewport={{ once: true, margin: '-40px' }}
            >
              {/* Large muted background number — opacity-5 decorative */}
              <span
                aria-hidden
                className="absolute top-3 right-4 font-mono font-bold text-white select-none leading-none pointer-events-none"
                style={{ fontSize: 'clamp(5rem, 9vw, 7.5rem)', opacity: 0.05, letterSpacing: '-0.04em' }}
              >
                {num}
              </span>

              {/* Icon circle with soft glow halo */}
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center mb-7"
                style={{
                  background: iconBg,
                  border:     `1px solid ${iconBorder}`,
                  boxShadow:  `0 0 20px ${iconGlow}`,
                }}
              >
                <Icon className="w-5 h-5" style={{ color: iconColor }} strokeWidth={1.6} />
              </div>

              {/* Content */}
              <div className="space-y-3 relative z-10">
                <h3
                  className="text-white font-semibold tracking-tight leading-snug"
                  style={{ fontSize: '1.12rem' }}
                >
                  {title}
                </h3>
                <p
                  className="text-zinc-400 leading-relaxed"
                  style={{ fontSize: '0.98rem', lineHeight: '1.8' }}
                >
                  {body}
                </p>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
      <div className="h-px bg-zinc-800/50" />
    </section>
  )
}
