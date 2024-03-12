// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', "@nuxt/image"],
  build: {
    transpile: ['gsap'],
  },
  // plugins: [
  //   // ssr: false to only include it on client-side
  //   { src: '~/plugins/gsap.js', ssr: false },
  // ],
})