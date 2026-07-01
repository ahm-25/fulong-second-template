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
        background: '#F4F1EA',
        'stone-bg': '#F4F1EA',
        surface: '#FFFFFF',
        primary: '#B08B57',
        'primary-hover': '#9A774A',
        heading: '#2B2B2B',
        body: '#666666',
        'border-sand': '#E4DDD3',
        border: '#E4DDD3',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', '"Noto Naskh Arabic"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        '24px': '24px',
        '3xl': '24px',
        '4xl': '32px',
      },
      boxShadow: {
        'stone': '0 20px 40px -15px rgba(43, 43, 43, 0.07)',
        'stone-hover': '0 30px 60px -15px rgba(43, 43, 43, 0.12)',
        'subtle': '0 4px 20px -2px rgba(43, 43, 43, 0.04)',
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
