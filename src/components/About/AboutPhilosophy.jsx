import { useRef } from 'react'
import {
  motion,
  useScroll, useSpring, useTransform, useInView,
} from 'framer-motion'

const ease = [0.19, 1, 0.22, 1]

/* ── Section data ─────────────────────────────────────────── */
const POINTS = [
  {
    id:          'why-we-exist',
    step:        '01',
    title:       'Why We Exist',
    body:        'Local businesses are the backbone of the GTA, but they are being underserved by generic agencies that treat every client the same and measure success in clicks, not customers.',
    nodeColor:   'bg-rose-500',
    nodeGlow:    'rgba(239,68,68,0.85)',
    borderColor: 'rgba(239,68,68,0.2)',
  },
  {
    id:          'system-gap',
    step:        '02',
    title:       'The System Gap',
    body:        "Most 'marketing' is just noise. We build customer acquisition engines that treat growth as a science, not a gamble — systems where every component has a defined role in moving a lead to a customer.",
    nodeColor:   'bg-amber-400',
    nodeGlow:    'rgba(251,191,36,0.85)',
    borderColor: 'rgba(251,191,36,0.2)',
  },
  {
    id:          'intentional',
    step:        '03',
    title:       'Intentional Partnerships',
    body:        "We only work with businesses ready for revenue-focused scale — not those looking for the cheapest option. The right fit isn't a client who needs marketing. It's a client ready to build a system.",
    /* accent token from global design system */
    nodeColor:   'bg-accent-400',
    nodeGlow:    'rgba(129,140,248,0.9)',
    borderColor: 'rgba(99,102,241,0.28)',
  },
]

/* ── Node positions in the left-column progress track ──────
   Each node sits at 0 / 50 / 100 % of the track height.
   Their glow activates when the corresponding right block
   enters view (via useInView in the parent).
   ─────────────────────────────────────────────────────────── */
const NODE_TOPS = ['top-0', 'top-1/2', 'bottom-0']

/* ══════════════════════════════════════════════════════════
   Component
   ══════════════════════════════════════════════════════════ */
export default function AboutPhilosophy() {
  const sectionRef = useRef(null)

  /* ── Scroll progress for the fill-line + glow orb ── */
  const { scrollYProgress } = useScroll({
    target:  sectionRef,
    offset:  ['start 0.9', 'end 0.1'],
  })
  const lineProgress = useSpring(scrollYProgress, { stiffness: 55, damping: 18 })
  const orbY          = useTransform(lineProgress, [0, 1], ['0%', '100%'])

  /* ── Per-block in-view detection ──────────────────────
     margin: '-38% 0px -38% 0px' means a block is "active"
     only when its center occupies the middle 24 % of the
     viewport — tight enough to avoid two blocks being
     active simultaneously at normal reading scroll speed.
     ─────────────────────────────────────────────────────── */
  const blockRef0 = useRef(null)
  const blockRef1 = useRef(null)
  const blockRef2 = useRef(null)

  const inView0 = useInView(blockRef0, { margin: '-38% 0px -38% 0px' })
  const inView1 = useInView(blockRef1, { margin: '-38% 0px -38% 0px' })
  const inView2 = useInView(blockRef2, { margin: '-38% 0px -38% 0px' })

  const blockRefs   = [blockRef0, blockRef1, blockRef2]
  const blockInView = [inView0,   inView1,   inView2]

  /* ── Derive the active index ──────────────────────────
     Give priority to the deepest (last) visible block
     so the transition follows the scroll direction.
     Fall back to 0 so the first point is lit on load.
     ─────────────────────────────────────────────────────── */
  const activeIndex = inView2 ? 2 : inView1 ? 1 : 0

  return (
    <section ref={sectionRef} className="bg-[#050505]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28">

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-20 lg:items-start">

          {/* ══════════════════════════════════════════════
              LEFT COLUMN — sticky, 40 % width
              ══════════════════════════════════════════════ */}
          <div className="lg:col-span-2 lg:sticky lg:top-[calc(68px+3rem)] lg:self-start">

            {/* Overline — global label-overline class */}
            <span className="label-overline block mb-7">Our Philosophy</span>

            {/* "The Why" — tracking-tighter per design spec */}
            <h2
              className="text-white font-extrabold tracking-tighter leading-[1.04]"
              style={{ fontSize: 'clamp(3rem, 5vw, 4.4rem)' }}
            >
              The{' '}
              <span className="text-accent-400">Why.</span>
            </h2>

            <p
              className="text-zinc-400 mt-5 leading-relaxed max-w-[18rem]"
              style={{ fontSize: '1rem', lineHeight: '1.78' }}
            >
              Why we exist, what problem we solve, and who we choose to work with.
            </p>

            {/* ── Progress track ── */}
            {/*
              Track height h-52 (208 px).
              Rail at left-[5px]; nodes at top / 50% / bottom.
              The glow orb rides lineProgress (spring of scrollYProgress).
            */}
            <div className="relative mt-12 h-52">

              {/* Rail background */}
              <div className="absolute left-[5px] top-0 bottom-0 w-px bg-zinc-800/60 overflow-hidden">
                {/* Fill — grows from top as user scrolls */}
                <motion.div
                  className="absolute inset-x-0 top-0"
                  style={{
                    height:     '100%',
                    scaleY:     lineProgress,
                    originY:    0,
                    background: 'linear-gradient(to bottom, rgba(99,102,241,0.28), rgba(129,140,248,0.95))',
                    boxShadow:  '0 0 6px 1px rgba(129,140,248,0.45)',
                  }}
                />
              </div>

              {/* Traveling glow orb — outside overflow:hidden */}
              <motion.div
                className="absolute w-2.5 h-2.5 rounded-full bg-accent-400 z-10"
                style={{
                  left:      '5px',
                  top:       orbY,
                  x:         '-50%',
                  boxShadow: '0 0 10px rgba(129,140,248,1), 0 0 22px rgba(99,102,241,0.65)',
                }}
              />

              {/* 3 node markers that mirror the active block */}
              {POINTS.map(({ step, nodeColor, nodeGlow }, i) => (
                <motion.div
                  key={step}
                  className={`absolute ${NODE_TOPS[i]} flex items-center gap-3`}
                  style={{
                    transform: i === 1 ? 'translateY(-50%)' : undefined,
                  }}
                  animate={{ opacity: i === activeIndex ? 1 : 0.25 }}
                  transition={{ duration: 0.45, ease: 'easeInOut' }}
                >
                  <div
                    className={`w-3 h-3 rounded-full ${nodeColor} border-2 border-[#050505] relative z-20 shrink-0`}
                    style={{
                      boxShadow: i === activeIndex
                        ? `0 0 10px ${nodeGlow}, 0 0 20px ${nodeGlow.replace('0.85', '0.35')}`
                        : 'none',
                      transition: 'box-shadow 0.45s ease-in-out',
                    }}
                  />
                  <span className="font-mono text-[0.6rem] text-ink-faint tracking-[0.18em] uppercase">
                    {step}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ══════════════════════════════════════════════
              RIGHT COLUMN — scrollable, 60 % width
              Each block is min-h-[60vh] on desktop so the
              sticky left column has room to "dwell."
              ══════════════════════════════════════════════ */}
          <div className="lg:col-span-3">
            {POINTS.map(({ id, step, title, body, borderColor }, i) => (
              <motion.div
                key={id}
                ref={blockRefs[i]}
                className="py-16 lg:py-0 lg:min-h-[60vh] lg:flex lg:items-center border-b border-white/[0.05] last:border-0"
                animate={{ opacity: i === activeIndex ? 1 : 0.28 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
              >
                <div className="w-full lg:py-12">

                  {/* Step counter — font-mono, design-system ink-faint */}
                  <span className="font-mono text-[0.6rem] tracking-[0.22em] text-ink-faint uppercase mb-6 block">
                    {step}
                  </span>

                  {/* Title — tracking-tighter per design spec */}
                  <h3
                    className="text-white font-bold tracking-tighter leading-[1.12] mb-6"
                    style={{ fontSize: 'clamp(1.7rem, 3vw, 2.35rem)' }}
                  >
                    {title}
                  </h3>

                  {/* Body — thin left accent border + text-zinc-400 */}
                  <div
                    className="border-l-2 pl-5"
                    style={{ borderColor }}
                  >
                    <p
                      className="text-zinc-400 leading-relaxed"
                      style={{ fontSize: '1.05rem', lineHeight: '1.85' }}
                    >
                      {body}
                    </p>
                  </div>

                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
      <div className="h-px bg-zinc-800/50" />
    </section>
  )
}
