import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  modules: [
    "nuxt-og-image",
    "@nuxt/fonts", // required
  ],
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  vite: {
    plugins: [tailwindcss()],
  },
  css: ['~/assets/css/main.css'],
  ogImage: {
    defaults: {
      renderer: 'takumi'
    },
    tailwindCss: '~/assets/css/main.css',
  }
});
