import { motion } from 'framer-motion'
import { Monitor, FileText, Star, Megaphone } from 'lucide-react'

const ease = [0.19, 1, 0.22, 1]

const container = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.13, delayChildren: 0.15 } },
}
const chunk = {
  hidden:  { opacity: 0, y: 24, filter: 'blur(6px)' },
  visible: { opacity: 1, y: 0,  filter: 'blur(0px)', transition: { duration: 0.7, ease } },
}

const HEADLINE = [
  { text: 'Growth Systems ',  accent: true  },
  { text: 'Built to Help '                  },
  { text: 'Local Businesses '               },
  { text: 'Win More Customers.'             },
]

const VW = 500, VH = 500
const CTR = { x: 250, y: 250 }

const NODES = [
  { id: 'website', label: 'Website',  Icon: Monitor,   x: 250, y: 70  },
  { id: 'ads',     label: 'Ads',      Icon: Megaphone, x: 430, y: 250 },
  { id: 'reviews', label: 'Reviews',  Icon: Star,      x: 250, y: 430 },
  { id: 'content', label: 'Content',  Icon: FileText,  x: 70,  y: 250 },
]

export default function ServicesHero() {
  return (
    <section className="relative bg-[#050505] overflow-hidden">

      {/* Radial accent — sits behind the text column */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 65% 55% at 28% 40%, rgba(30,58,138,0.22) 0%, transparent 65%)',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center py-24 lg:py-28">

          {/* ── Left: Text ── */}
          <div className="text-center lg:text-left">

            <motion.span
              className="label-overline block mb-7"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease }}
            >
              Customer Acquisition Systems
            </motion.span>

            <motion.h1
              className="text-white font-extrabold tracking-tighter leading-[1.06] mb-8"
              style={{ fontSize: 'clamp(2.4rem, 5vw, 4.4rem)' }}
              variants={container}
              initial="hidden"
              animate="visible"
            >
              {HEADLINE.map(({ text, accent }, i) => (
                <motion.span key={i} variants={chunk} className={accent ? 'text-accent-400' : undefined}>
                  {text}
                </motion.span>
              ))}
            </motion.h1>

            <motion.p
              className="text-zinc-400 max-w-xl mx-auto lg:mx-0"
              style={{ fontSize: '1.05rem', lineHeight: '1.88' }}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.72, duration: 0.7, ease }}
            >
              We move beyond disconnected marketing deliverables. We architect integrated growth systems
              where every asset — from your website to your ad spend — works in synergy to drive revenue.
            </motion.p>

          </div>

          {/* ── Right: Integration Diagram ── */}
          <motion.div
            className="relative w-full max-w-sm mx-auto lg:max-w-[480px] aspect-square overflow-visible"
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9, duration: 0.85, ease }}
          >

            <svg
              viewBox={`0 0 ${VW} ${VH}`}
              className="absolute inset-0 w-full h-full overflow-visible"
              aria-hidden
            >
              <defs>
                <filter id="pGlow" x="-80%" y="-80%" width="260%" height="260%">
                  <feGaussianBlur stdDeviation="3.5" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {[48, 66, 86].map((r, j) => (
                <motion.circle
                  key={`ring-${j}`}
                  cx={CTR.x} cy={CTR.y} r={r}
                  fill="none"
                  stroke="rgba(99,102,241,0.22)"
                  strokeWidth="1"
                  animate={{ r: [r, r + 10, r], opacity: [0.22, 0.05, 0.22] }}
                  transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut', delay: j * 0.55 }}
                />
              ))}

              {NODES.map((n) => (
                <line
                  key={`line-${n.id}`}
                  x1={n.x} y1={n.y}
                  x2={CTR.x} y2={CTR.y}
                  stroke="rgba(129,140,248,0.12)"
                  strokeWidth="1.5"
                />
              ))}

              {NODES.map((n, i) => (
                <motion.circle
                  key={`pulse-${n.id}`}
                  cx={n.x} cy={n.y}
                  r={4}
                  fill="rgba(129,140,248,0.95)"
                  filter="url(#pGlow)"
                  animate={{
                    x:       [0,   CTR.x - n.x],
                    y:       [0,   CTR.y - n.y],
                    opacity: [0,   1, 0.85, 0  ],
                    r:       [2.5, 4,  4,   2  ],
                  }}
                  transition={{
                    duration:    1.9,
                    delay:       1.1 + i * 0.48,
                    repeat:      Infinity,
                    repeatDelay: 0.7,
                    ease:        'easeInOut',
                  }}
                />
              ))}
            </svg>

            {/* Center Revenue hub */}
            <div
              className="absolute"
              style={{
                left:      `${(CTR.x / VW) * 100}%`,
                top:       `${(CTR.y / VH) * 100}%`,
                transform: 'translate(-50%, -50%)',
              }}
            >
              <div
                className="w-[4.8rem] h-[4.8rem] rounded-full flex flex-col items-center justify-center border border-accent-400/45 bg-accent/[0.13]"
                style={{ boxShadow: '0 0 32px rgba(99,102,241,0.5), 0 0 64px rgba(99,102,241,0.18)' }}
              >
                <span className="text-accent-400 font-bold text-[0.82rem] tracking-tight leading-none">Revenue</span>
                <span className="text-accent-300/70 font-mono text-[0.55rem] tracking-[0.14em] uppercase mt-0.5">Hub</span>
              </div>
            </div>

            {/* Satellite nodes */}
            {NODES.map(({ id, label, Icon, x, y }) => (
              <div
                key={id}
                className="absolute"
                style={{
                  left:      `${(x / VW) * 100}%`,
                  top:       `${(y / VH) * 100}%`,
                  transform: 'translate(-50%, -50%)',
                }}
              >
                <div className="flex flex-col items-center gap-1.5">
                  <div className="w-11 h-11 rounded-full flex items-center justify-center border border-white/10 bg-white/[0.04] backdrop-blur-sm">
                    <Icon strokeWidth={1.5} style={{ width: '1.05rem', height: '1.05rem' }} className="text-white/65" />
                  </div>
                  <span className="text-white/55 text-[0.62rem] font-semibold tracking-[0.13em] uppercase whitespace-nowrap">
                    {label}
                  </span>
                </div>
              </div>
            ))}

          </motion.div>

        </div>
      </div>

      <div className="h-px bg-zinc-800/50" />
    </section>
  )
}
