import { motion } from 'framer-motion'
import { Lock, UserCheck, MapPin } from 'lucide-react'

const ease = [0.19, 1, 0.22, 1]
const vp = { once: true, margin: '-20px' }

const BADGES = [
  {
    Icon:  Lock,
    label: 'Confidentiality',
    text:  'Your business data is encrypted and private.',
  },
  {
    Icon:  UserCheck,
    label: 'Manual Review',
    text:  'No automated responses. Every inquiry is reviewed by the founder.',
  },
  {
    Icon:  MapPin,
    label: 'GTA Focused',
    text:  'Priority given to Hamilton, Burlington, and GTA-based entities.',
  },
]

export default function ContactSecurity() {
  return (
    <motion.section
      className="border-t border-white/[0.05] bg-[#050505]"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={vp}
      transition={{ duration: 0.6, ease }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/[0.05]">
          {BADGES.map(({ Icon, label, text }, i) => (
            <motion.div
              key={label}
              className="flex items-start gap-3 px-0 sm:px-8 first:pl-0 last:pr-0 py-5 sm:py-0"
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={vp}
              transition={{ delay: i * 0.1, duration: 0.5, ease }}
            >
              <Icon
                className="text-zinc-700 shrink-0 mt-px"
                style={{ width: '0.85rem', height: '0.85rem' }}
                strokeWidth={1.6}
              />
              <div>
                <p className="font-mono text-[0.6rem] font-semibold tracking-[0.18em] uppercase text-zinc-600 mb-1">
                  {label}
                </p>
                <p className="font-mono text-xs text-zinc-500 leading-relaxed">
                  {text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
