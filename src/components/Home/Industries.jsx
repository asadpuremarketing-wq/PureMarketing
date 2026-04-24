import { motion } from 'framer-motion'
import { Check, Wrench, Building2, UtensilsCrossed } from 'lucide-react'

const ease = [0.19, 1, 0.22, 1]

const INDUSTRIES = [
  {
    num:   '01',
    icon:  Wrench,
    label: 'Service Businesses',
    focus: ['Market Dominance', 'Lead Volume'],
    body:
      'We position service contractors as the unquestionable authority in their GTA niche — so the phone rings with pre-sold, high-intent leads.',
    list:  ['Booked Jobs', 'Local Authority', 'Optimized Conversion'],
  },
  {
    num:   '02',
    icon:  Building2,
    label: 'Real Estate Agents',
    focus: ['Personal Brand', 'Listing Presentation'],
    body:
      'We build personal brand ecosystems that attract buyers and sellers before your competition even gets the call.',
    list:  ['Brand Authority', 'Property Marketing', 'Client Trust'],
  },
  {
    num:   '03',
    icon:  UtensilsCrossed,
    label: 'Restaurants & Food',
    focus: ['Visual Pull', 'Customer Retention'],
    body:
      'We create digital identities that fill seats, grow repeat visits, and lock in local-search dominance.',
    list:  ['Brand Visibility', 'Digital Menu Authority', 'Social Proof'],
  },
]

export default function Industries() {
  return (
    <section className="bg-[#050505]">

      {/* Top rule — carries the visual thread from GrowthSystem */}
      <div className="h-px bg-zinc-800/50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-24">

        {/* ── Centered Header ── */}
        <motion.div
          className="text-center space-y-4 mb-20"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease }}
          viewport={{ once: true, margin: '-60px' }}
        >
          <span className="label-overline">Who We Serve</span>

          <h2
            className="text-white font-bold leading-[1.1] tracking-[-0.03em]"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}
          >
            Industries We{' '}
            <span className="relative inline-block">
              <span className="text-accent-400">Empower</span>
              <span className="absolute -bottom-[3px] left-0 right-0 h-px bg-accent-400/35" />
            </span>
          </h2>

          <p className="text-ink-secondary text-body-lg max-w-md mx-auto">
            Built for local businesses that want real growth — not just digital activity.
          </p>
        </motion.div>

        {/* ── Editorial 3-Column Layout ── */}
        {/*
          No card backgrounds. Columns share the #050505 canvas.
          Vertical thin dividers (divide-x) are the only separators.
          Large atmospheric numbers sit behind each column's text.
        */}
        <div
          className={[
            'grid grid-cols-1 lg:grid-cols-3',
            'divide-y divide-white/[0.05]',
            'lg:divide-y-0 lg:divide-x lg:divide-white/[0.05]',
          ].join(' ')}
        >
          {INDUSTRIES.map(({ num, icon: Icon, label, focus, body, list }, i) => (
            <motion.div
              key={num}
              className={[
                'relative py-10',
                'lg:px-10',
                // First column: flush left
                i === 0 ? 'lg:pl-0 lg:pr-10' : '',
                // Last column: flush right
                i === INDUSTRIES.length - 1 ? 'lg:pr-0 lg:pl-10' : '',
              ].join(' ')}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.12, duration: 0.65, ease }}
              viewport={{ once: true, margin: '-50px' }}
            >

              {/* ── Large editorial number — atmospheric backdrop ── */}
              <span
                className="absolute top-4 right-2 lg:right-0 font-black text-white leading-none select-none pointer-events-none tracking-tighter"
                style={{
                  fontSize:  'clamp(5.5rem, 11vw, 8.5rem)',
                  opacity:   0.028,
                  letterSpacing: '-0.06em',
                }}
                aria-hidden="true"
              >
                {num}
              </span>

              {/* ── Column content ── */}
              <div className="relative space-y-8">

                {/* Icon + overline */}
                <div className="flex items-center gap-2.5">
                  <Icon
                    className="text-ink-faint"
                    style={{ width: '0.85rem', height: '0.85rem' }}
                    strokeWidth={1.5}
                  />
                  <span className="text-[0.62rem] font-semibold uppercase tracking-[0.15em] text-ink-faint">
                    {label}
                  </span>
                </div>

                {/* Two-tier focus headline */}
                <div className="space-y-[2px]">
                  <h3
                    className="text-white font-bold leading-tight tracking-tight"
                    style={{ fontSize: 'clamp(1.45rem, 2.3vw, 1.8rem)' }}
                  >
                    {focus[0]}
                  </h3>
                  {/* Secondary keyword — muted, same size, stacked below */}
                  <h3
                    className="font-bold leading-tight tracking-tight"
                    style={{
                      fontSize: 'clamp(1.45rem, 2.3vw, 1.8rem)',
                      color: 'rgba(161,161,170,0.4)',
                    }}
                  >
                    {focus[1]}
                  </h3>
                </div>

                {/* Thin rule between headline and body */}
                <div className="h-px bg-white/[0.05] w-12" />

                {/* Description */}
                <p className="text-ink-secondary text-body-md leading-relaxed">
                  {body}
                </p>

                {/* Checklist */}
                <ul className="space-y-3.5">
                  {list.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <Check
                        className="text-accent-400 shrink-0"
                        style={{ width: '0.8rem', height: '0.8rem' }}
                        strokeWidth={2.8}
                      />
                      <span className="text-ink-secondary text-body-md">{item}</span>
                    </li>
                  ))}
                </ul>

              </div>
            </motion.div>
          ))}
        </div>

      </div>

      <div className="h-px bg-zinc-800/50" />
    </section>
  )
}
