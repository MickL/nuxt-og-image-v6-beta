// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "nuxt-og-image",
    "@nuxt/fonts", // required
  ],
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  ogImage: {
    defaults: {
      renderer: 'takumi'
    }
  }
});
