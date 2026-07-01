// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/google-fonts'],
  css: ['~/assets/css/main.css'],
  googleFonts: {
    families: {
      'Cormorant+Garamond': {
        wght: [300, 400, 500, 600, 700],
        ital: [300, 400, 500, 600]
      },
      Inter: [300, 400, 500, 600],
      'Noto Naskh Arabic': [400, 500, 600, 700],
    },
    display: 'swap',
  },
  app: {
    head: {
      title: 'Atelier Sinai — Egyptian Architectural Stone & Granite',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Warm minimal luxury architectural stone. Handcrafted Egyptian marble and granite from the quarries of Sinai and Galala to luxury residences worldwide.' },
        { name: 'keywords', content: 'Egyptian marble, Sinai Pearl, Galala Beige, Nero Aswan, architectural stone, luxury stone, Scandinavian architecture, Salvatori style, Poliform style' }
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" rx="24" fill="%23B08B57"/><path d="M30 70 L50 30 L70 70 Z" fill="none" stroke="%23F4F1EA" stroke-width="6"/></svg>' }
      ]
    },
  },
})
