import { useState } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2, ArrowRight } from 'lucide-react'

const ease = [0.19, 1, 0.22, 1]
const vp   = { once: true, margin: '-50px' }

const BENEFITS = [
  'Full Market Audit',
  'Revenue Roadmap',
  '30-Min Strategy Call',
]

const INDUSTRIES = ['Service', 'Real Estate', 'Food']

/* ── Floating-label input ────────────────────────────────────── */
function FloatInput({ label, name, type = 'text', value, onChange, required }) {
  const [focused, setFocused] = useState(false)
  const lifted = focused || value.length > 0

  return (
    <div className="relative pb-px">
      <label
        className={[
          'absolute left-0 pointer-events-none transition-all duration-200 select-none font-mono',
          lifted
            ? '-top-0.5 text-[0.56rem] text-accent-400 tracking-[0.16em] uppercase font-semibold'
            : 'top-3 text-zinc-600 text-xs tracking-wide',
        ].join(' ')}
      >
        {label}{required && <span className="ml-0.5 text-accent-400/50">*</span>}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className="w-full bg-transparent border-0 border-b border-white/[0.10] pt-5 pb-1.5 text-white text-sm focus:outline-none transition-colors duration-200"
      />
      <motion.span
        className="absolute bottom-0 left-0 h-px bg-accent-400 block"
        animate={{ width: focused ? '100%' : '0%' }}
        transition={{ duration: 0.26, ease: 'easeOut' }}
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
          'absolute left-0 pointer-events-none transition-all duration-200 select-none font-mono',
          lifted
            ? '-top-0.5 text-[0.56rem] text-accent-400 tracking-[0.16em] uppercase font-semibold'
            : 'top-3 text-zinc-600 text-xs tracking-wide',
        ].join(' ')}
      >
        {label}{required && <span className="ml-0.5 text-accent-400/50">*</span>}
      </label>
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        rows={3}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className="w-full bg-transparent border-0 border-b border-white/[0.10] pt-5 pb-2 text-white text-sm focus:outline-none resize-none transition-colors duration-200 leading-relaxed"
      />
      <motion.span
        className="absolute bottom-0 left-0 h-px bg-accent-400 block"
        animate={{ width: focused ? '100%' : '0%' }}
        transition={{ duration: 0.26, ease: 'easeOut' }}
      />
    </div>
  )
}

/* ── Main ────────────────────────────────────────────────────── */
export default function CTASection() {
  const [form, setForm]         = useState({ name: '', email: '', business: '', phone: '', link: '', challenge: '' })
  const [industry, setIndustry] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  const handleSubmit = (e) => { e.preventDefault(); setSubmitted(true) }

  return (
    <section className="relative bg-[#050505] overflow-hidden">
      <div className="h-px bg-zinc-800/50" />

      {/* Deep radial glow behind form column */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 50% 80% at 74% 50%, rgba(37,99,235,0.15) 0%, transparent 65%)',
        }}
      />
      <div className="absolute inset-0 bg-dot-grid opacity-[0.09] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 lg:py-36">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* ── Left: Authority Hook ── */}
          <div>

            <motion.span
              className="label-overline block mb-6"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={vp}
              transition={{ duration: 0.55, ease }}
            >
              Let&apos;s Build Together
            </motion.span>

            <motion.h2
              className="text-white font-extrabold tracking-tighter leading-[1.03] mb-7"
              style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.6rem)' }}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={vp}
              transition={{ delay: 0.08, duration: 0.7, ease }}
            >
              Ready to Architect<br />
              <span className="text-accent-400">Your Growth System?</span>
            </motion.h2>

            <motion.p
              className="text-zinc-400 leading-relaxed mb-10"
              style={{ fontSize: '0.97rem', lineHeight: '1.90' }}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={vp}
              transition={{ delay: 0.15, duration: 0.65, ease }}
            >
              Stop buying marketing tasks. Start investing in a revenue engine
              designed for your specific local market.
            </motion.p>

            {/* Benefits */}
            <div className="space-y-3.5">
              {BENEFITS.map((b, i) => (
                <motion.div
                  key={b}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -14 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={vp}
                  transition={{ delay: 0.22 + i * 0.10, duration: 0.55, ease }}
                >
                  <div
                    className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                    style={{ background: 'rgba(99,102,241,0.12)', border: '1px solid rgba(129,140,248,0.25)' }}
                  >
                    <CheckCircle2
                      className="text-accent-400"
                      style={{ width: '0.65rem', height: '0.65rem' }}
                      strokeWidth={2.5}
                    />
                  </div>
                  <span className="text-zinc-300 text-sm font-medium">{b}</span>
                </motion.div>
              ))}
            </div>

          </div>

          {/* ── Right: Intake Portal ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={vp}
            transition={{ delay: 0.20, duration: 0.78, ease }}
          >
            <div
              className="rounded-2xl border border-white/[0.10] overflow-hidden"
              style={{ background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(24px)' }}
            >
              {submitted ? (

                <div className="px-8 py-16 text-center">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-5 border border-accent-400/30 bg-accent/[0.10]"
                    style={{ boxShadow: '0 0 32px rgba(99,102,241,0.28)' }}
                  >
                    <CheckCircle2 className="w-5 h-5 text-accent-400" strokeWidth={1.4} />
                  </div>
                  <h3 className="text-white font-bold tracking-tighter mb-2 text-xl">
                    Session Initiated
                  </h3>
                  <p className="text-zinc-500 text-sm leading-relaxed max-w-xs mx-auto">
                    We review every submission personally and will reach out within 24 hours.
                  </p>
                </div>

              ) : (

                <form onSubmit={handleSubmit} className="p-7 sm:p-8 lg:p-9">

                  <p className="font-mono text-[0.58rem] font-semibold tracking-[0.18em] uppercase text-zinc-600 mb-7">
                    Strategy Session Intake
                  </p>

                  {/* Row 1: Name + Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-6 mb-6">
                    <FloatInput label="Full Name"     name="name"  value={form.name}  onChange={handleChange} required />
                    <FloatInput label="Email Address" name="email" type="email" value={form.email} onChange={handleChange} required />
                  </div>

                  {/* Row 2: Business + Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-6 mb-6">
                    <FloatInput label="Business Name" name="business" value={form.business} onChange={handleChange} required />
                    <FloatInput label="Direct Line"   name="phone"   type="tel" value={form.phone}    onChange={handleChange} required />
                  </div>

                  {/* Row 3: Website / Social */}
                  <div className="mb-8">
                    <FloatInput label="Website / Social Link" name="link" value={form.link} onChange={handleChange} />
                  </div>

                  {/* Industry chips */}
                  <div className="mb-7">
                    <p className="font-mono text-[0.56rem] font-semibold tracking-[0.16em] uppercase text-zinc-700 mb-3">
                      Industry
                    </p>
                    <div className="flex gap-2">
                      {INDUSTRIES.map((ind) => (
                        <button
                          key={ind}
                          type="button"
                          onClick={() => setIndustry(ind)}
                          className={[
                            'rounded-full border px-3.5 py-1.5 text-[0.7rem] font-medium tracking-wide transition-all duration-200',
                            industry === ind
                              ? 'border-accent-400/50 bg-accent/[0.11] text-accent-400'
                              : 'border-white/[0.07] bg-transparent text-zinc-600 hover:text-white hover:border-white/[0.18]',
                          ].join(' ')}
                          style={industry === ind ? { boxShadow: '0 0 14px rgba(99,102,241,0.28)' } : {}}
                        >
                          {ind}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Growth challenge textarea */}
                  <div className="mb-8">
                    <FloatTextarea
                      label="What is your biggest growth challenge right now?"
                      name="challenge"
                      value={form.challenge}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  {/* Submit */}
                  <motion.button
                    type="submit"
                    className="relative w-full rounded-xl py-4 text-white font-bold text-[0.68rem] tracking-[0.22em] uppercase overflow-hidden"
                    style={{
                      background:  'linear-gradient(135deg, rgba(79,70,229,0.95) 0%, rgba(99,102,241,0.92) 100%)',
                      boxShadow:   '0 0 20px rgba(59,130,246,0.30), 0 0 0 1px rgba(129,140,248,0.15), 0 4px 24px rgba(0,0,0,0.5)',
                    }}
                    whileHover={{
                      boxShadow: '0 0 36px rgba(59,130,246,0.45), 0 0 0 1px rgba(129,140,248,0.45), 0 0 55px rgba(99,102,241,0.38), 0 4px 24px rgba(0,0,0,0.5)',
                    }}
                    transition={{ duration: 0.22 }}
                  >
                    <span className="relative flex items-center justify-center gap-2.5">
                      Initiate Strategy Session
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </motion.button>

                  {/* Reassurance */}
                  <p className="text-center font-mono text-zinc-700 text-[0.58rem] mt-4 tracking-wide leading-relaxed">
                    🔒 Your data is secure. We manually review all GTA inquiries within 24 hours.
                  </p>

                </form>

              )}
            </div>
          </motion.div>

        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-canvas to-transparent pointer-events-none" />
    </section>
  )
}
