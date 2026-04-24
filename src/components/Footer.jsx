import { motion } from 'framer-motion'
import { MapPin, Zap, ArrowUpRight } from 'lucide-react'

const INDUSTRIES = [
  'Real Estate Agents',
  'Service Businesses',
  'Restaurants & Hospitality',
]

const COMPANY = [
  { label: 'About',       href: '#about' },
  { label: 'Our Work',    href: '#case-studies' },
  { label: 'Services',    href: '#services' },
  { label: 'Contact',     href: '#contact' },
]

const GTA_AREAS = ['Hamilton', 'Burlington', 'Oakville', 'Mississauga', 'Brampton', 'GTA Wide']

const ease = [0.19, 1, 0.22, 1]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-canvas relative overflow-hidden">
      {/* Top accent line */}
      <div className="h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

      {/* Ambient background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[220px] rounded-full bg-accent/[0.04] blur-[90px] pointer-events-none" />

      <div className="section pt-16 pb-10 relative z-10">

        {/* ── 4-Column Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 xl:gap-12">

          {/* Col 1: Brand + Tagline */}
          <motion.div
            className="space-y-5 sm:col-span-2 lg:col-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            viewport={{ once: true, margin: '-40px' }}
          >
            {/* Logo */}
            <a href="#" className="inline-flex items-baseline gap-0">
              <span className="text-white   font-extrabold tracking-[0.14em] text-[0.85rem] uppercase">Growth</span>
              <span className="text-accent-400 font-extrabold tracking-[0.14em] text-[0.85rem] uppercase ml-[0.4em]">Authority</span>
            </a>

            {/* Positioning statement */}
            <p className="text-ink-secondary text-body-md leading-relaxed max-w-[240px]">
              Building customer acquisition systems for the GTA&apos;s leading service businesses.
            </p>

            {/* Location tag */}
            <div className="inline-flex items-center gap-1.5 text-ink-muted border border-border rounded-full px-3 py-1.5">
              <MapPin className="w-3 h-3 text-accent-400 shrink-0" />
              <span className="text-caption">Hamilton &amp; the GTA</span>
            </div>
          </motion.div>

          {/* Col 2: Industries */}
          <motion.div
            className="space-y-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08, duration: 0.6, ease }}
            viewport={{ once: true, margin: '-40px' }}
          >
            <h4 className="text-white font-semibold text-[0.75rem] uppercase tracking-[0.12em]">
              Industries
            </h4>
            <ul className="space-y-3.5">
              {INDUSTRIES.map((item) => (
                <li key={item}>
                  <a
                    href="#industries"
                    className="group flex items-center gap-1.5 text-ink-secondary hover:text-white text-body-md transition-colors duration-150"
                  >
                    <span className="w-1 h-1 rounded-full bg-accent/50 group-hover:bg-accent-400 transition-colors shrink-0" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Col 3: Company */}
          <motion.div
            className="space-y-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.14, duration: 0.6, ease }}
            viewport={{ once: true, margin: '-40px' }}
          >
            <h4 className="text-white font-semibold text-[0.75rem] uppercase tracking-[0.12em]">
              Company
            </h4>
            <ul className="space-y-3.5">
              {COMPANY.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="group inline-flex items-center gap-1 text-ink-secondary hover:text-white text-body-md transition-colors duration-150"
                  >
                    {label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 translate-y-1 group-hover:opacity-60 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-200" />
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Col 4: Local Focus */}
          <motion.div
            className="space-y-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6, ease }}
            viewport={{ once: true, margin: '-40px' }}
          >
            <h4 className="text-white font-semibold text-[0.75rem] uppercase tracking-[0.12em]">
              Local Focus
            </h4>
            <p className="text-ink-secondary text-body-md leading-relaxed">
              Proudly serving growth-focused businesses across the Golden Horseshoe and Greater Toronto Area.
            </p>
            <div className="flex flex-wrap gap-2">
              {GTA_AREAS.map((area) => (
                <span
                  key={area}
                  className="text-caption text-ink-muted border border-border hover:border-accent/30 hover:text-ink-secondary rounded-full px-2.5 py-1 transition-colors duration-150 cursor-default"
                >
                  {area}
                </span>
              ))}
            </div>
          </motion.div>

        </div>

        {/* ── Bottom Bar ── */}
        <div className="mt-14 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-ink-muted text-caption order-2 sm:order-1">
            © {year} Growth Authority. All rights reserved.
          </p>

          {/* "Built for Performance" badge */}
          <motion.div
            className="order-1 sm:order-2 flex items-center gap-2 border border-border hover:border-accent/25 rounded-full px-4 py-1.5 transition-colors duration-200 group cursor-default"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Zap className="w-3 h-3 text-accent-400 group-hover:text-accent-300 transition-colors" />
            <span className="text-ink-muted group-hover:text-ink-secondary text-caption transition-colors">
              Built for Performance
            </span>
          </motion.div>
        </div>

      </div>
    </footer>
  )
}
