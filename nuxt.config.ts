// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  srcDir: 'src',
  imports: {
    dirs: ['composables/**'],
  },
  experimental: { noScripts: true },
});