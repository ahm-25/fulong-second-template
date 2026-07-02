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
      Cairo: [300, 400, 500, 600, 700],
    },
    display: 'swap',
  },
  app: {
    head: {
      title: 'Fulong',
      htmlAttrs: {
        dir: 'rtl',
        lang: 'ar'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'أحجار معمارية فاخرة وبسيطة. رخام وجرانيت مصري مصنوع يدوياً من محاجر سيناء والجلالة إلى المشاريع السكنية الفاخرة حول العالم.' },
        { name: 'keywords', content: 'رخام مصري، لؤلؤة سيناء، جلالة بيج، أسوان أسود، أحجار معمارية، أحجار فاخرة، عمارة إسكندنافية، طراز سالفاتوري، طراز بوليفورم' }
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" rx="24" fill="%23B08B57"/><path d="M30 70 L50 30 L70 70 Z" fill="none" stroke="%23F4F1EA" stroke-width="6"/></svg>' }
      ]
    },
  },
})
