// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({yarn
  devtools: { enabled: true },
  css: [
    "boosted/dist/css/boosted.min.css"
  ],
  modules: ['@pinia/nuxt'],
  plugins: [
    { src: "plugins/boosted.plugins.ts", mode:'client'}
  ],
})
