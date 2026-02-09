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
  css: ["~/assets/css/main.css"],
  ogImage: {
    tailwindCss: "~/assets/css/main.css",
  },
  fonts: {
    defaults: {
      subsets: ['latin'],
    },
    families: [
      { name: 'Montserrat', weights: [400], global: true },
      {
        name: 'Merriweather',
        src: '/fonts/merriweather.ttf',
        global: true,
      },
    ],
  },
});
