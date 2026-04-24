import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'

const ease = [0.19, 1, 0.22, 1]

const container = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.18 } },
}
const chunk = {
  hidden:  { opacity: 0, y: 28, filter: 'blur(8px)' },
  visible: { opacity: 1, y: 0,  filter: 'blur(0px)', transition: { duration: 0.75, ease } },
}

const HEADLINE = [
  { text: "Let's Talk " },
  { text: 'About '      },
  { text: 'Growth.',    accent: true },
]

const CONTACT_DETAILS = [
  { Icon: Mail,    label: 'Email',       value: 'hello@growthauthority.ca'  },
  { Icon: Phone,   label: 'Phone',       value: '+1 (905) 000-0000'         },
  { Icon: MapPin,  label: 'Location',    value: 'Hamilton & GTA, Ontario'   },
  { Icon: Clock,   label: 'Response',    value: 'Within 24 hours'           },
]

export default function ContactHero() {
  return (
    <section className="relative bg-[#050505] overflow-hidden">

      {/* Radial accent — anchored behind text column */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 65% 55% at 28% 40%, rgba(30,58,138,0.22) 0%, transparent 65%)',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center py-24 lg:py-28">

          {/* ── Left: Copy ── */}
          <div className="text-center lg:text-left">

            <motion.span
              className="label-overline block mb-7"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease }}
            >
              Contact
            </motion.span>

            <motion.h1
              className="text-white font-extrabold tracking-tighter leading-[1.04] mb-8"
              style={{ fontSize: 'clamp(2.6rem, 5.5vw, 4.8rem)' }}
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

            <motion.p
              className="text-zinc-400 max-w-lg mx-auto lg:mx-0"
              style={{ fontSize: '1.05rem', lineHeight: '1.88' }}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.72, duration: 0.7, ease }}
            >
              We only partner with businesses ready for revenue-focused systems.
              Fill out the intake form below — this is the start of your growth architecture.
            </motion.p>

            {/* Status badge */}
            <motion.div
              className="inline-flex items-center gap-3 mt-9 rounded-full border border-emerald-400/25 px-5 py-2.5"
              style={{
                background:     'rgba(16,185,129,0.06)',
                backdropFilter: 'blur(14px)',
                boxShadow:      '0 0 0 1px rgba(52,211,153,0.08), 0 0 24px rgba(16,185,129,0.08)',
              }}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.92, duration: 0.65, ease }}
            >
              <div className="relative w-2 h-2 shrink-0">
                <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-55" />
                <span className="relative block w-full h-full rounded-full bg-emerald-400" />
              </div>
              <span className="text-emerald-400/90 text-[0.68rem] font-mono tracking-[0.22em] uppercase">
                System Status: Accepting GTA Partners
              </span>
            </motion.div>

          </div>

          {/* ── Right: Contact Details Card ── */}
          <motion.div
            className="flex items-center justify-center lg:justify-end"
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.35, duration: 0.9, ease }}
          >
            <div
              className="w-full max-w-sm rounded-2xl border border-white/[0.08] overflow-hidden"
              style={{ background: 'rgba(255,255,255,0.025)', backdropFilter: 'blur(24px)' }}
            >
              {/* Card header */}
              <div className="px-6 py-5 border-b border-white/[0.06]">
                <p className="text-white font-semibold text-sm tracking-tight">Direct Contact</p>
                <p className="text-zinc-600 text-[0.68rem] mt-0.5 tracking-[0.1em] uppercase font-semibold">
                  Growth Authority
                </p>
              </div>

              {/* Detail rows */}
              <div className="divide-y divide-white/[0.05]">
                {CONTACT_DETAILS.map(({ Icon, label, value }, i) => (
                  <motion.div
                    key={label}
                    className="flex items-center gap-4 px-6 py-4"
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.55 + i * 0.09, duration: 0.55, ease }}
                  >
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                      style={{ background: 'rgba(99,102,241,0.10)', border: '1px solid rgba(129,140,248,0.18)' }}
                    >
                      <Icon style={{ width: '0.85rem', height: '0.85rem' }} className="text-accent-400" strokeWidth={1.6} />
                    </div>
                    <div>
                      <p className="text-zinc-600 text-[0.6rem] font-semibold tracking-[0.12em] uppercase">{label}</p>
                      <p className="text-white text-sm font-medium mt-0.5">{value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Footer */}
              <div className="px-6 py-4 border-t border-white/[0.06]" style={{ background: 'rgba(99,102,241,0.04)' }}>
                <p className="text-zinc-600 text-[0.65rem] leading-relaxed">
                  Your information is kept strictly confidential. We respond within 24 hours.
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      <div className="h-px bg-zinc-800/50" />
    </section>
  )
}
