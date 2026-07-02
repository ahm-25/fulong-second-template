import type { Config } from 'tailwindcss'

export default {
  content: [
    "./app/components/**/*.{js,vue,ts}",
    "./app/layouts/**/*.vue",
    "./app/pages/**/*.vue",
    "./app/plugins/**/*.{js,ts}",
    "./app/app.vue",
    "./app/error.vue"
  ],
  theme: {
    extend: {
      colors: {
        background: '#F8FAFC',
        'stone-bg': '#F8FAFC',
        surface: '#FFFFFF',
        primary: '#1E3A8A',
        'primary-hover': '#3B82F6',
        secondary: '#3B82F6',
        'light-blue': '#DBEAFE',
        heading: '#0F172A',
        body: '#475569',
        border: '#E2E8F0',
        success: '#22C55E',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', '"Noto Naskh Arabic"', 'Georgia', 'serif'],
        sans: ['Cairo', 'Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        '20px': '20px',
        '24px': '20px',
        '3xl': '20px',
        '4xl': '20px',
      },
      boxShadow: {
        'stone': '0 10px 30px -5px rgba(15, 23, 42, 0.06)',
        'stone-hover': '0 20px 40px -10px rgba(15, 23, 42, 0.1)',
        'subtle': '0 4px 15px -2px rgba(15, 23, 42, 0.04)',
        'corporate': '0 10px 30px -5px rgba(15, 23, 42, 0.05), 0 4px 10px -2px rgba(15, 23, 42, 0.02)',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
      }
    },
  },
  plugins: [],
} satisfies Config
