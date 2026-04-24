import { motion } from 'framer-motion'
import { Globe, Video, Star, Target } from 'lucide-react'

const ease = [0.19, 1, 0.22, 1]

const PILLARS = [
  {
    num:   '01',
    icon:  Globe,
    title: 'High-Converting Website',
    body:  'Designed to turn GTA traffic into booked appointments.',
    detail:'Architecture, copy, and UX engineered around one outcome: qualified leads in your calendar.',
  },
  {
    num:   '02',
    icon:  Video,
    title: 'Authority Content',
    body:  'Video and creative that positions you as the local leader.',
    detail:'Short-form and long-form assets that build undeniable authority across every platform you need to own.',
  },
  {
    num:   '03',
    icon:  Star,
    title: 'Reputation Systems',
    body:  'Automated social proof to win the trust of every lead.',
    detail:'Structured review generation, response protocols, and reputation monitoring — running without you.',
  },
  {
    num:   '04',
    icon:  Target,
    title: 'Paid Growth',
    body:  'High-intent traffic campaigns focused on ROI, not just clicks.',
    detail:'Meta and Google campaigns built on conversion data — every dollar tracked from click to closed deal.',
  },
]

export default function GrowthSystem() {
  return (
    <section className="bg-[#050505]">

      {/* ── Section Header ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-14">
        <motion.div
          className="flex flex-col gap-5 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease }}
          viewport={{ once: true, margin: '-60px' }}
        >
          <span className="label-overline">The Solution</span>

          <h2
            className="text-white font-bold leading-[1.1] tracking-[-0.03em] text-balance"
            style={{ fontSize: 'clamp(1.9rem, 3.8vw, 3rem)' }}
          >
            A Complete Local{' '}
            <span className="relative inline-block">
              <span className="text-accent-400">Growth System</span>
              <span className="absolute -bottom-[3px] left-0 right-0 h-px bg-accent-400/35" />
            </span>
          </h2>

          <p className="text-ink-secondary text-body-lg max-w-xl">
            Instead of disconnected marketing tasks, we build the four pillars required for
            local market authority.
          </p>
        </motion.div>
      </div>

      {/* ── Gap-px Pillar Grid ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-zinc-800/50"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={{ visible: { transition: { staggerChildren: 0.09 } } }}
        >
          {PILLARS.map(({ num, icon: Icon, title, body, detail }) => (
            <motion.div
              key={num}
              className={[
                'group relative bg-[#050505] p-9 flex flex-col gap-6',
                'cursor-default transition-shadow duration-300 ease-out',
                'hover:shadow-[inset_0_0_0_1px_rgba(99,102,241,0.35),inset_0_0_48px_rgba(99,102,241,0.035)]',
              ].join(' ')}
              variants={{
                hidden:  { opacity: 0, y: 24 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
              }}
            >
              {/* Muted number */}
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

              {/* Primary copy */}
              <div className="space-y-2.5 pr-4">
                <h3
                  className="text-white font-semibold leading-snug tracking-tight"
                  style={{ fontSize: '1.05rem' }}
                >
                  {title}
                </h3>
                <p className="text-ink-secondary text-body-md leading-relaxed font-medium">
                  {body}
                </p>
              </div>

              {/* Detail line — revealed on hover */}
              <p
                className={[
                  'text-ink-muted text-[0.82rem] leading-relaxed border-t border-border pt-4',
                  'opacity-0 translate-y-2 transition-all duration-300 ease-out',
                  'group-hover:opacity-100 group-hover:translate-y-0',
                ].join(' ')}
              >
                {detail}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Bottom spacer-line */}
      <div className="h-px bg-zinc-800/50 mt-0" />
    </section>
  )
}
