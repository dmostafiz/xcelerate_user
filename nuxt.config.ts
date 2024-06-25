import path from 'path'

export default defineNuxtConfig({
  devtools: { enabled: false },
  future: {
    compatibilityVersion: 4,
  },
  modules: [
    'nuxt-primevue',
    "@nuxtjs/tailwindcss",
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    "@nuxt/image"
  ],
  runtimeConfig: {
    public: {
      API_SERVER: process.env.API_SERVER,
    }
  },

  imports: {
    dirs: ['stores']
  },

  primevue: {
    options: {
      unstyled: true
    },
    importPT: { from: path.resolve(__dirname, './presets/aura/') }
  },

})