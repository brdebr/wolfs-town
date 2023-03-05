// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/png', href: "/favicon-32x32.png", sizes: "32x32" },
        { rel: 'icon', type: 'image/png', href: "/favicon-96x96.png", sizes: "96x96" },
        { rel: 'icon', type: 'image/png', href: "/favicon-16x16.png", sizes: "16x16" },
      ],
    },
  },
  devServer: {
    port: 3030,
  },
  imports: {
    dirs: ['store'],
  },
  css: ['@/assets/global.scss'],
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-headlessui',
    '@vueuse/nuxt',
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
  tailwindcss: {
    configPath: './tailwind.js'
  },
  ssr: false,
});
