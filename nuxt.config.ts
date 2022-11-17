// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  srcDir: 'src',
  imports: {
    dirs: ['composables/**'],
  },
  css: ['~/assets/css/tailwind.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    [
      '@nuxtjs/google-fonts',
      {
        families: { Abel: true, 'Noto+Sans+JP': true },
        download: true,
        inject: true,
      },
    ],
  ],
});
