/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      // ── Color Tokens ──────────────────────────────────────────────
      colors: {
        // Base surfaces
        canvas:  '#0a0a0a',
        surface: {
          DEFAULT: '#111111',
          raised:  '#161616',
          overlay: '#1c1c1c',
        },
        border: {
          DEFAULT:  '#1e1e1e',
          subtle:   '#161616',
          emphasis: '#2a2a2a',
        },

        // Primary accent — Electric Indigo
        accent: {
          50:      '#eef2ff',
          100:     '#e0e7ff',
          200:     '#c7d2fe',
          300:     '#a5b4fc',
          400:     '#818cf8',
          500:     '#6366f1',
          600:     '#4f46e5',
          700:     '#4338ca',
          DEFAULT: '#6366f1',
        },

        // Secondary accent — Strategic Gold
        gold: {
          400:     '#e8c84a',
          500:     '#d4af37',
          600:     '#b8972e',
          DEFAULT: '#d4af37',
        },

        // Ink (text)
        ink: {
          primary:   '#ffffff',
          secondary: '#a1a1aa',
          muted:     '#71717a',
          faint:     '#3f3f46',
        },
      },

      // ── Typography ────────────────────────────────────────────────
      fontFamily: {
        sans:    ['"Plus Jakarta Sans"', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      fontSize: {
        // Hero / Display
        'display-xl': ['clamp(4rem,9vw,8rem)',   { lineHeight: '1.02', letterSpacing: '-0.045em', fontWeight: '800' }],
        'display-lg': ['clamp(3rem,6.5vw,6rem)', { lineHeight: '1.05', letterSpacing: '-0.04em',  fontWeight: '700' }],
        'display-md': ['clamp(2.25rem,4.5vw,4rem)', { lineHeight: '1.08', letterSpacing: '-0.03em', fontWeight: '700' }],
        // Section headings
        'heading-lg': ['clamp(1.75rem,3vw,2.5rem)', { lineHeight: '1.15', letterSpacing: '-0.025em', fontWeight: '600' }],
        'heading-md': ['clamp(1.25rem,2vw,1.75rem)', { lineHeight: '1.25', letterSpacing: '-0.015em', fontWeight: '600' }],
        // Body
        'body-lg': ['1.125rem', { lineHeight: '1.75', letterSpacing: '-0.005em' }],
        'body-md': ['1rem',     { lineHeight: '1.7',  letterSpacing: '-0.003em' }],
        // Labels & captions
        'label':   ['0.8125rem', { lineHeight: '1.4', letterSpacing: '0.08em', fontWeight: '600' }],
        'caption': ['0.75rem',   { lineHeight: '1.4', letterSpacing: '0.05em' }],
      },

      // ── Spacing ───────────────────────────────────────────────────
      spacing: {
        section: 'clamp(5rem,10vw,9rem)',
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
      },

      // ── Radii ─────────────────────────────────────────────────────
      borderRadius: {
        card:      '0.75rem',
        btn:       '0.375rem',
        'btn-pill': '9999px',
      },

      // ── Backdrop ─────────────────────────────────────────────────
      backdropBlur: {
        glass: '24px',
      },

      // ── Shadows ───────────────────────────────────────────────────
      boxShadow: {
        // Cards
        card:
          '0 1px 0 0 rgba(255,255,255,0.04) inset, 0 0 0 1px rgba(255,255,255,0.06)',
        'card-hover':
          '0 1px 0 0 rgba(255,255,255,0.06) inset, 0 0 0 1px rgba(99,102,241,0.3), 0 8px 32px -4px rgba(99,102,241,0.12)',

        // Buttons
        'btn-accent':
          '0 0 0 1px rgba(99,102,241,0.5), 0 4px 16px -2px rgba(99,102,241,0.35)',
        'btn-accent-hover':
          '0 0 0 1px rgba(99,102,241,0.7), 0 6px 24px -2px rgba(99,102,241,0.45)',

        // Glows (accent/decorative)
        'glow-accent': '0 0 80px -10px rgba(99,102,241,0.4)',
        'glow-gold':   '0 0 80px -10px rgba(212,175,55,0.28)',
      },

      // ── Animation ─────────────────────────────────────────────────
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.19,1,0.22,1)',
      },
      keyframes: {
        'fade-up': {
          '0%':   { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.55s cubic-bezier(0.19,1,0.22,1) forwards',
        'fade-in': 'fade-in 0.4s ease-out forwards',
      },
    },
  },
  plugins: [],
}
