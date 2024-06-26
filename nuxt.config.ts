import path from 'path'
import icons from './public/icons.js'

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
    "@nuxt/image",
    "@vite-pwa/nuxt"
  ],

  runtimeConfig: {
    public: {
      API_SERVER: process.env.API_SERVER,
    }
  },

  imports: {
    dirs: ['stores']
  },

  css: ['primeicons/primeicons.css'],

  primevue: {
    options: {
      unstyled: true
    },
    importPT: { from: path.resolve(__dirname, './presets/aura/') }
  },

  pwa: {
    // strategies: 'injectManifest',
    // srcDir: 'service-worker',
    // filename: 'sw.ts',
    // registerType: 'autoUpdate',
    manifest: {
      name: 'Xcelerate International',
      short_name: 'XcelerateInternational',
      theme_color: '#ffffff',
      icons: icons,
    },
    workbox: {
      // globPatterns: ['**/*.{js,css,html,png,svg,ico}'],
      navigateFallback: '/'
    },
    // injectManifest: {
    //   globPatterns: ['**/*.{js,css,html,png,svg,ico}'],
    // },
    // client: {
    //   installPrompt: true,
    //   // you don't need to include this: only for testing purposes
    //   // if enabling periodic sync for update use 1 hour or so (periodicSyncForUpdates: 3600)
    //   periodicSyncForUpdates: 20,
    // },
    devOptions: {
      enabled: false,
      // suppressWarnings: true,
      // navigateFallback: '/',
      // navigateFallbackAllowlist: [/^\/$/],
      type: 'module',
    },
  },

})