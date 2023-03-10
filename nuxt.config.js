export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Nuxt Ecommerce',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/main.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/vue-good-table', ssr: true }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxt/postcss8',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxt/http',
    '@nuxtjs/proxy',
    'primevue/nuxt',
    'cookie-universal-nuxt',
    'nuxt-socket-io'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: 'http://localhost:8000/',

  },
  http: {
    // proxy: true,
    // HTTP options here
    baseURL: 'http://localhost:8000/',
  },

  io: {
    sockets: [ // Required
      { // At least one entry is required
        name: 'home',
        url: 'http://localhost:8000',
        default: true,
      }, 
    ]
  },



  proxy: [
    // ['http://localhost:8000/', { ws: false }],
  ],
  primevue: {
    theme: 'md-light-indigo',
    ripple: true,
    components: ['InputText', 'Button', 'DataTable', 'Dialog', "Sidebar"],
    directives: ['Tooltip', 'Badge']
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ['primevue'],
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },

  }
}
