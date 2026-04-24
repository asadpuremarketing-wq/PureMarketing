import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle2, ArrowRight } from 'lucide-react'

const ease = [0.19, 1, 0.22, 1]
const vp = { once: true, margin: '-40px' }

/* ── Left column data ────────────────────────────────────────── */
const NEXT_STEPS = [
  {
    num: '01',
    title: 'Manual Footprint Audit',
    desc: 'We analyze your current online presence, competitor landscape, and market position across the GTA.',
  },
  {
    num: '02',
    title: 'Market Gap Analysis',
    desc: 'We identify specific revenue opportunities your competitors are missing in your local market.',
  },
  {
    num: '03',
    title: 'Revenue Roadmap Draft',
    desc: 'You receive a custom growth architecture outline before we discuss partnership terms.',
  },
]

/* ── Industry chips ──────────────────────────────────────────── */
const INDUSTRIES = ['Service Business', 'Real Estate', 'Restaurant & Food', 'Other']

/* ── Floating-label input ────────────────────────────────────── */
function FloatInput({ label, name, type = 'text', value, onChange, required }) {
  const [focused, setFocused] = useState(false)
  const lifted = focused || value.length > 0

  return (
    <div className="relative pb-px">
      <label
        className={[
          'absolute left-0 pointer-events-none transition-all duration-200 select-none',
          lifted
            ? '-top-0.5 text-[0.62rem] text-accent-400 tracking-[0.12em] uppercase font-semibold'
            : 'top-3 text-zinc-500 text-sm',
        ].join(' ')}
      >
        {label}{required && <span className="ml-0.5 text-accent-400/60">*</span>}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className="w-full bg-transparent border-0 border-b border-white/[0.12] pt-6 pb-2 text-white text-sm focus:outline-none transition-colors duration-200 autofill:bg-transparent"
      />
      {/* Animated accent underline */}
      <motion.span
        className="absolute bottom-0 left-0 h-px bg-accent-400 block"
        animate={{ width: focused ? '100%' : '0%' }}
        transition={{ duration: 0.28, ease: 'easeOut' }}
      />
    </div>
  )
}

/* ── Floating-label textarea ─────────────────────────────────── */
function FloatTextarea({ label, name, value, onChange, required }) {
  const [focused, setFocused] = useState(false)
  const lifted = focused || value.length > 0

  return (
    <div className="relative pb-px">
      <label
        className={[
          'absolute left-0 pointer-events-none transition-all duration-200 select-none',
          lifted
            ? '-top-0.5 text-[0.62rem] text-accent-400 tracking-[0.12em] uppercase font-semibold'
            : 'top-3 text-zinc-500 text-sm',
        ].join(' ')}
      >
        {label}{required && <span className="ml-0.5 text-accent-400/60">*</span>}
      </label>
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        rows={4}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className="w-full bg-transparent border-0 border-b border-white/[0.12] pt-6 pb-2 text-white text-sm focus:outline-none resize-none transition-colors duration-200 leading-relaxed"
      />
      <motion.span
        className="absolute bottom-0 left-0 h-px bg-accent-400 block"
        animate={{ width: focused ? '100%' : '0%' }}
        transition={{ duration: 0.28, ease: 'easeOut' }}
      />
    </div>
  )
}

/* ── Success state ───────────────────────────────────────────── */
function SuccessState() {
  return (
    <motion.div
      className="py-24 text-center"
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.55, ease }}
    >
      <motion.div
        className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-7 border border-accent-400/30 bg-accent/[0.10]"
        style={{ boxShadow: '0 0 40px rgba(99,102,241,0.3)' }}
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.55, ease }}
      >
        <CheckCircle2 className="w-7 h-7 text-accent-400" strokeWidth={1.4} />
      </motion.div>
      <h3 className="text-white font-bold tracking-tighter mb-3" style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)' }}>
        Session Initiated
      </h3>
      <p className="text-zinc-400 max-w-sm mx-auto text-sm leading-relaxed">
        We review every submission personally and will reach out within 24 hours
        to begin your growth architecture.
      </p>
    </motion.div>
  )
}

/* ── Main ────────────────────────────────────────────────────── */
export default function ContactForm() {
  const [form, setForm] = useState({ name: '', business: '', email: '', phone: '', link: '', challenge: '' })
  const [industry, setIndustry] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  const handleSubmit = (e) => { e.preventDefault(); setSubmitted(true) }

  return (
    <section className="relative bg-[#050505] pb-28 lg:pb-36">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 lg:pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] gap-12 lg:gap-16 items-start">

          {/* ── Left (40%): Sticky Briefing ── */}
          <div className="lg:sticky lg:top-[88px] lg:self-start">

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={vp}
              transition={{ duration: 0.65, ease }}
            >
              <span className="label-overline block mb-5">The Process</span>
              <h2
                className="text-white font-extrabold tracking-tighter leading-[1.04] mb-5"
                style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)' }}
              >
                Strategy<br />Briefing.
              </h2>
              <p className="text-zinc-400 text-sm leading-relaxed mb-8">
                Every partnership begins with a structured analysis. Here's what happens after
                you submit your intake below.
              </p>
            </motion.div>

            {/* 1px-gap-grid: What happens next */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={vp}
              transition={{ delay: 0.1, duration: 0.65, ease }}
            >
              <p className="text-zinc-600 text-[0.68rem] font-semibold tracking-[0.14em] uppercase mb-3">
                What Happens Next
              </p>
              <div className="grid gap-px bg-zinc-800/50 rounded-xl overflow-hidden border border-white/[0.06]">
                {NEXT_STEPS.map((step, i) => (
                  <motion.div
                    key={step.num}
                    className="bg-[#090909] px-5 py-5 flex items-start gap-4"
                    initial={{ opacity: 0, x: -14 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={vp}
                    transition={{ delay: 0.15 + i * 0.09, duration: 0.55, ease }}
                  >
                    <span className="text-accent-400 font-mono text-xs font-bold shrink-0 mt-0.5">
                      {step.num}
                    </span>
                    <div>
                      <p className="text-white text-sm font-semibold mb-1">{step.title}</p>
                      <p className="text-zinc-500 text-xs leading-relaxed">{step.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Footer note */}
            <motion.p
              className="text-zinc-600 text-xs mt-6 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={vp}
              transition={{ delay: 0.38, duration: 0.55, ease }}
            >
              We respond within 24 hours. Your information is kept strictly confidential.
            </motion.p>

          </div>

          {/* ── Right (60%): The Portal ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={vp}
            transition={{ duration: 0.7, ease }}
          >
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  className="rounded-2xl border border-white/10"
                  style={{ background: 'rgba(10,10,10,0.80)', backdropFilter: 'blur(20px)' }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4, ease }}
                >
                  <SuccessState />
                </motion.div>
              ) : (
                <motion.div
                  key="form"
                  className="rounded-2xl border border-white/10"
                  style={{ background: 'rgba(10,10,10,0.80)', backdropFilter: 'blur(20px)' }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4, ease }}
                >
                  <form onSubmit={handleSubmit} className="p-8 sm:p-10 lg:p-12">

                    {/* ── Contact details ── */}
                    <p className="text-zinc-600 text-[0.68rem] font-semibold tracking-[0.14em] uppercase mb-7">
                      Contact Details
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-7">
                      <FloatInput label="Full Name" name="name" value={form.name} onChange={handleChange} required />
                      <FloatInput label="Business Name" name="business" value={form.business} onChange={handleChange} required />
                      <FloatInput label="Email Address" name="email" type="email" value={form.email} onChange={handleChange} required />
                      <FloatInput label="Phone Number" name="phone" type="tel" value={form.phone} onChange={handleChange} required />
                      <div className="sm:col-span-2">
                        <FloatInput label="Website / Social Link" name="link" value={form.link} onChange={handleChange} />
                      </div>
                    </div>

                    {/* ── Industry ── */}
                    <div className="mt-10">
                      <p className="text-zinc-600 text-[0.68rem] font-semibold tracking-[0.14em] uppercase mb-4">
                        Industry
                      </p>
                      <div className="flex flex-wrap gap-2.5">
                        {INDUSTRIES.map((ind) => (
                          <button
                            key={ind}
                            type="button"
                            onClick={() => setIndustry(ind)}
                            className={[
                              'rounded-full border px-4 py-2 text-[0.78rem] font-medium tracking-wide transition-all duration-200',
                              industry === ind
                                ? 'border-accent-400/50 bg-accent/[0.11] text-accent-400'
                                : 'border-white/[0.08] bg-transparent text-zinc-500 hover:text-white hover:border-white/[0.2]',
                            ].join(' ')}
                            style={
                              industry === ind
                                ? { boxShadow: '0 0 18px rgba(99,102,241,0.28)' }
                                : {}
                            }
                          >
                            {ind}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* ── Revenue challenge ── */}
                    <div className="mt-10">
                      <div className="flex items-center justify-between mb-1">
                        <p className="text-zinc-600 text-[0.68rem] font-semibold tracking-[0.14em] uppercase">
                          Revenue Challenge
                        </p>
                        <p className="text-zinc-700 text-[0.6rem] italic">
                          Be as specific as possible regarding your revenue goals.
                        </p>
                      </div>
                      <FloatTextarea
                        label="Describe your biggest growth challenge"
                        name="challenge"
                        value={form.challenge}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    {/* ── Submit ── */}
                    <div className="mt-10">
                      <motion.button
                        type="submit"
                        className="w-full rounded-xl py-5 text-white font-bold text-[0.72rem] tracking-[0.22em] uppercase"
                        style={{
                          background: 'linear-gradient(135deg, rgba(79,70,229,0.95) 0%, rgba(99,102,241,0.92) 100%)',
                          boxShadow: '0 0 0 1px rgba(129,140,248,0.15), 0 4px 24px rgba(0,0,0,0.5)',
                        }}
                        whileHover={{
                          boxShadow: '0 0 0 1px rgba(129,140,248,0.45), 0 0 55px rgba(99,102,241,0.52), 0 4px 24px rgba(0,0,0,0.5)',
                        }}
                        transition={{ duration: 0.22 }}
                      >
                        Initiate Strategy Session
                        <ArrowRight className="inline-block w-3.5 h-3.5 ml-2.5" />
                      </motion.button>
                    </div>

                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
