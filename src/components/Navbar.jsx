import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Calendar, Menu, X } from 'lucide-react'

const NAV_LINKS = [
  { label: 'Home',         to: '/',              page: true  },
  { label: 'About',        to: '/about',          page: true  },
  { label: 'Services',     to: '/services',        page: true  },
  { label: 'Industries',   to: '/industries',     page: true  },
  { label: 'Contact',      to: '/contact',         page: true  },
]

export default function Navbar() {
  const [scrolled,    setScrolled]    = useState(false)
  const [mobileOpen,  setMobileOpen]  = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll while mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      <header
        className={[
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled
            ? 'bg-canvas/80 backdrop-blur-glass border-b border-white/[0.06] shadow-[0_1px_0_0_rgba(255,255,255,0.03)]'
            : 'bg-transparent',
        ].join(' ')}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[68px] flex items-center justify-between gap-8">

          {/* ── Logo ── */}
          <NavLink to="/" className="shrink-0 flex items-baseline gap-0 group" aria-label="Growth Authority">
            <span className="text-white   font-extrabold tracking-[0.14em] text-[0.85rem] uppercase transition-opacity duration-150 group-hover:opacity-80">
              Growth
            </span>
            <span className="text-accent-400 font-extrabold tracking-[0.14em] text-[0.85rem] uppercase ml-[0.4em] transition-opacity duration-150 group-hover:opacity-80">
              Authority
            </span>
          </NavLink>

          {/* ── Desktop Nav Links ── */}
          <div className="hidden md:flex items-center gap-7 flex-1 justify-center">
            {NAV_LINKS.map(({ label, to, page }) =>
              page ? (
                <NavLink
                  key={label}
                  to={to}
                  className={({ isActive }) => [
                    'relative text-[0.85rem] font-medium tracking-wide transition-colors duration-150 group py-1',
                    isActive ? 'text-white' : 'text-ink-secondary hover:text-white',
                  ].join(' ')}
                >
                  {label}
                  <span className="absolute bottom-0 left-0 h-px w-0 bg-accent-400 transition-all duration-300 group-hover:w-full" />
                </NavLink>
              ) : (
                <a
                  key={label}
                  href={to}
                  className="relative text-ink-secondary hover:text-white text-[0.85rem] font-medium tracking-wide transition-colors duration-150 group py-1"
                >
                  {label}
                  <span className="absolute bottom-0 left-0 h-px w-0 bg-accent-400 transition-all duration-300 group-hover:w-full" />
                </a>
              )
            )}
          </div>

          {/* ── Desktop CTA ── */}
          <div className="hidden md:flex shrink-0">
            <a href="#contact" className="btn-signature" style={{ padding: '0.6rem 1.25rem', fontSize: '0.85rem' }}>
              <Calendar className="w-3.5 h-3.5 shrink-0" />
              Book a Strategy Call
            </a>
          </div>

          {/* ── Mobile Hamburger ── */}
          <button
            className="md:hidden p-2 text-ink-secondary hover:text-white transition-colors"
            onClick={() => setMobileOpen(v => !v)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            <AnimatePresence mode="wait" initial={false}>
              {mobileOpen
                ? <motion.span key="x"  initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}><X    className="w-5 h-5" /></motion.span>
                : <motion.span key="hb" initial={{ rotate:  90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate:-90, opacity: 0 }} transition={{ duration: 0.15 }}><Menu className="w-5 h-5" /></motion.span>
              }
            </AnimatePresence>
          </button>

        </nav>
      </header>

      {/* ── Mobile Menu ── */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 z-40 bg-canvas/60 backdrop-blur-sm md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMobileOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              className="fixed top-[68px] inset-x-0 z-40 md:hidden bg-surface/95 backdrop-blur-glass border-b border-white/[0.07]"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.22, ease: [0.19, 1, 0.22, 1] }}
            >
              <div className="px-4 sm:px-6 py-6 flex flex-col gap-1">
                {NAV_LINKS.map(({ label, to, page }, i) =>
                  page ? (
                    <NavLink
                      key={label}
                      to={to}
                      className={({ isActive }) => [
                        'text-[1rem] font-medium py-3 border-b border-border last:border-0 transition-colors',
                        isActive ? 'text-white' : 'text-ink-secondary hover:text-white',
                      ].join(' ')}
                      onClick={() => setMobileOpen(false)}
                    >
                      <motion.span
                        className="block"
                        initial={{ opacity: 0, x: -14 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.045, duration: 0.25, ease: 'easeOut' }}
                      >
                        {label}
                      </motion.span>
                    </NavLink>
                  ) : (
                    <motion.a
                      key={label}
                      href={to}
                      className="text-ink-secondary hover:text-white text-[1rem] font-medium py-3 border-b border-border last:border-0 transition-colors"
                      initial={{ opacity: 0, x: -14 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.045, duration: 0.25, ease: 'easeOut' }}
                      onClick={() => setMobileOpen(false)}
                    >
                      {label}
                    </motion.a>
                  )
                )}

                <motion.div
                  className="pt-5"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.22, duration: 0.3 }}
                >
                  <a
                    href="#contact"
                    className="btn-signature w-full justify-center"
                    onClick={() => setMobileOpen(false)}
                  >
                    <Calendar className="w-4 h-4 shrink-0" />
                    Book a Strategy Call
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
