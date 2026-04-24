import { motion } from 'framer-motion'
import { ArrowUpRight, ArrowRight } from 'lucide-react'

const ease = [0.19, 1, 0.22, 1]

const PROJECTS = [
  {
    num:      '01',
    category: 'Web Design',
    title:    'Rapid Flow Plumbing',
    tagline:  'High-converting local service website — tripled booked jobs in 90 days.',
    gradient: 'from-[#0d0d18] via-zinc-900 to-[#050505]',
    accent:   'rgba(99,102,241,0.5)',
    bars:     [20, 35, 28, 48, 40, 62, 54, 74, 68, 85, 78, 100],
  },
  {
    num:      '02',
    category: 'Brand Identity',
    title:    'The Hartley Group',
    tagline:  'Personal brand ecosystem positioning a premium Oakville real estate agent.',
    gradient: 'from-[#14100a] via-zinc-900 to-[#050505]',
    accent:   'rgba(212,175,55,0.5)',
    bars:     [25, 40, 32, 52, 44, 60, 58, 72, 66, 82, 75, 96],
  },
  {
    num:      '03',
    category: 'Video + Brand',
    title:    'Nomo Ramen',
    tagline:  'Visual identity and short-form content launch for a Burlington restaurant.',
    gradient: 'from-[#0e0f0d] via-zinc-900 to-[#050505]',
    accent:   'rgba(52,211,153,0.45)',
    bars:     [18, 30, 25, 42, 38, 56, 50, 68, 62, 80, 72, 94],
  },
]

function ProjectCard({ project, index }) {
  const { num, category, title, tagline, gradient, accent, bars } = project

  return (
    <motion.div
      className="group relative aspect-[3/2] overflow-hidden rounded-card cursor-pointer"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.12, duration: 0.65, ease }}
      viewport={{ once: true, margin: '-40px' }}
    >
      {/* ── Placeholder Visual ── */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient}`}>

        {/* Dot grid */}
        <div className="absolute inset-0 bg-dot-grid opacity-[0.18]" />

        {/* Simulated nav / header */}
        <div className="absolute top-6 left-6 right-6">
          <div className="flex items-center justify-between mb-2.5">
            <div className="h-1.5 w-16 rounded-full bg-white/10" />
            <div className="flex gap-1.5">
              {[1, 2, 3].map(k => (
                <div key={k} className="h-1.5 w-8 rounded-full bg-white/[0.07]" />
              ))}
            </div>
          </div>
          <div className="h-px bg-white/[0.05]" />
        </div>

        {/* Simulated hero content */}
        <div className="absolute top-[52px] left-6 right-6 space-y-2.5">
          <div className="h-4 w-[55%] rounded-sm bg-white/[0.1]" />
          <div className="h-2.5 w-[40%] rounded-sm bg-white/[0.06]" />
          <div className="mt-3 h-7 w-20 rounded-sm flex items-center justify-center"
               style={{ background: accent.replace('0.5', '0.25') }}>
            <div className="h-1.5 w-10 rounded-full" style={{ background: accent }} />
          </div>
        </div>

        {/* Animated bar chart */}
        <div className="absolute bottom-[28px] left-6 right-6">
          <div className="flex items-end gap-[3px] h-10">
            {bars.map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-[2px] transition-all duration-700"
                style={{
                  height:          `${h}%`,
                  backgroundColor: i >= 9 ? accent : accent.replace(/[\d.]+\)$/, '0.12)'),
                }}
              />
            ))}
          </div>
        </div>

        {/* Scale inner on group hover */}
        <div className="absolute inset-0 transition-transform duration-500 ease-out group-hover:scale-[1.03]" />
      </div>

      {/* ── Project number (always visible) ── */}
      <div className="absolute top-4 left-4 z-10">
        <span className="font-mono text-[0.6rem] tracking-[0.18em] text-ink-faint">
          {num}
        </span>
      </div>

      {/* ── Hover Overlay ── */}
      <div
        className={[
          'absolute inset-0 z-20',
          'bg-canvas/88 backdrop-blur-[3px]',
          'flex flex-col justify-end p-6',
          'opacity-0 group-hover:opacity-100',
          'transition-opacity duration-300',
        ].join(' ')}
      >
        <div className="space-y-2">
          <span className="label-overline text-[0.62rem]">{category}</span>
          <h3
            className="text-white font-semibold leading-snug tracking-tight"
            style={{ fontSize: '1.1rem' }}
          >
            {title}
          </h3>
          <p className="text-ink-secondary text-[0.82rem] leading-relaxed">{tagline}</p>
        </div>

        <div className="mt-4 flex items-center gap-1.5 text-accent-400 text-[0.8rem] font-medium">
          <span>View Project</span>
          <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={2} />
        </div>
      </div>

      {/* Arrow icon — top right, revealed on hover */}
      <div className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <ArrowUpRight className="w-3.5 h-3.5 text-accent-400" strokeWidth={2} />
      </div>
    </motion.div>
  )
}

export default function Portfolio() {
  return (
    <section className="bg-[#050505]">
      <div className="h-px bg-zinc-800/50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-24">

        {/* ── Header ── */}
        <motion.div
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease }}
          viewport={{ once: true, margin: '-60px' }}
        >
          <div className="space-y-4">
            <span className="label-overline">Selected Work</span>
            <h2
              className="text-white font-bold leading-[1.1] tracking-[-0.03em]"
              style={{ fontSize: 'clamp(1.9rem, 3.8vw, 3rem)' }}
            >
              Built,{' '}
              <span className="relative inline-block">
                <span className="text-accent-400">Launched</span>
                <span className="absolute -bottom-[3px] left-0 right-0 h-px bg-accent-400/35" />
              </span>
              , Proven
            </h2>
          </div>

          <p className="text-ink-muted text-[0.8rem] tracking-wide max-w-[240px] sm:text-right">
            Hover each project to see the story behind the result.
          </p>
        </motion.div>

        {/* ── Gallery Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.num} project={project} index={i} />
          ))}
        </div>

        {/* ── CTA below gallery ── */}
        <motion.div
          className="mt-10 flex justify-center"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6, ease }}
          viewport={{ once: true, margin: '-30px' }}
        >
          <a href="#contact" className="btn-ghost">
            View Full Portfolio
            <ArrowRight className="w-4 h-4 shrink-0" />
          </a>
        </motion.div>

      </div>

      <div className="h-px bg-zinc-800/50" />
    </section>
  )
}
