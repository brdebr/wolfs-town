// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  imports: {
    dirs: ['store', 'types'],
  },
  modules: [
    '@nuxtjs/tailwindcss',
    [
      '@pinia/nuxt',
      {
        autoImports: [
          ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
          'storeToRefs', // import { storeToRefs } from 'pinia'
        ],
      },
    ],
  ],
  ssr: false,
});
