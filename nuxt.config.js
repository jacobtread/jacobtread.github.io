const description = "I am a small time developer from 🥝 New Zealand with a lot of free time on my hands. I spent my days developing web applications mostly 🕹️ Dashboards and similar applications. But I do accasionally dip my feet into the world desktop applications with Kotlin and Java. But I do perfer to use Web techologies such as Typescript and VueJS";

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Jacobtread | Web Developer',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
      {
        property: 'og:type',
        content: 'website'
      },
      {
        property: 'og:title',
        content: 'Jacobtread'
      },
      {
        property: 'og:description',
        content: description
      },
      {
        property: 'og:url',
        content: 'https://jacobtread.github.io/'
      },
      {
        property: 'og:image',
        content: 'https://jacobtread.github.io/img/jacobtread.png'
      },
      {
        hid: 'author',
        name: 'author',
        content: 'Jacobtread'
      },
      {
        hid: 'description',
        name: 'description',
        content: description
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content: 'developer,jacobtread,jacob,programming,software'
      },
      { name: 'theme-color', content: '#ff6875' }
    ],
    link: [
      { rel: 'shortcut icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'apple-touch-icon', type: 'image/x-icon', href: '/apple-touch-icon.png', sizes: '180x180' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon-32x32.png', sizes: '32x32' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon-16x16.png', sizes: '16x16' },
      { rel: 'manifest', href: '/site.webmanifest', sizes: '16x16' },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/scss/global.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    '@nuxtjs/svg'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
  ],

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {

  }

}
