export default defineNuxtConfig({
  devtools: { enabled: true },

  // buildModules: [],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  vite: {
    server: {
      hmr: {
        clientPort: 3000,
      },
    },
  },

  build: {
    transpile: ["chart.js"],
  },

  css: ["@/assets/css/main.css"],
  modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt"],
  plugins: ["~/plugins/route", "~/plugins/maska.ts"],
  compatibilityDate: "2024-07-17",
});