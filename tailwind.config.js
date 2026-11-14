/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          cyan: '#00C2FF',
          blue: '#0070F3',
          purple: '#7C3AED',
          magenta: '#D946EF',
          navy: '#0A1128',
          slate: '#0F172A',
          dark: '#050814',
          subtle: '#F1F5F9',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'Outfit', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'glow-cyan': '0 0 25px -5px rgba(0, 194, 255, 0.4)',
        'glow-magenta': '0 0 25px -5px rgba(217, 70, 239, 0.4)',
        'glow-brand': '0 0 30px -5px rgba(124, 58, 237, 0.35)',
        'premium': '0 20px 40px -15px rgba(10, 17, 40, 0.07)',
        'glass': '0 8px 32px 0 rgba(15, 23, 42, 0.08)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'brand-gradient': 'linear-gradient(135deg, #00C2FF 0%, #7C3AED 50%, #D946EF 100%)',
        'brand-gradient-subtle': 'linear-gradient(135deg, rgba(0, 194, 255, 0.08) 0%, rgba(124, 58, 237, 0.08) 50%, rgba(217, 70, 239, 0.08) 100%)',
        'glass-card': 'linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(248, 250, 252, 0.7) 100%)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        }
      }
    },
  },
  plugins: [],
}
