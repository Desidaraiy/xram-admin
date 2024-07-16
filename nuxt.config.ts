export default defineNuxtConfig({
  devtools: { enabled: true },
  // buildModules: [],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  build: {
    transpile: ["chart.js"],
  },
  css: ["@/assets/css/main.css"],
  modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt"],
  plugins: ["~/plugins/route", "~/plugins/maska.ts"],
});
