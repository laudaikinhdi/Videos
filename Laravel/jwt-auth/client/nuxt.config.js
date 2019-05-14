import pkg from './package'

export default {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {rel: 'stylesheet', href: "https://use.fontawesome.com/releases/v5.8.2/css/all.css"}
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  router: {
    middleware: [
      'clearValidationErrors'
    ]
  },

  /*
  ** Global CSS
  */
  css: [
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    './plugins/mixins/validation.js',
    './plugins/mixins/user.js',
    './plugins/axios.js',
  ],

  env: {
    baseUrl: process.env.BASE_URL || 'http://127.0.0.1:8000/api/'
  },

  auth: {
    strategies: {
      local: {
        endpoints:{
          login: {
            url: 'auth/login', method: 'post', propertyName: 'token'
          },
          user: {
            url: 'me', method: 'get', propertyName: 'data'
          },
          logout: {
            url: 'auth/logout', method: 'get'
          }
        }
      }
    },
    redirect: {
      login: '/auth/login',
      home: '/'
    },
    plugins: [
      './plugins/auth'
    ]
  },

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
    '@nuxtjs/auth',
  ],

  bootstrapVue: {
    bootstrapCSS: true, // Or `css: false`
    bootstrapVueCSS: true // Or `bvCSS: false`
  },

  axios: {
    // proxy: true, // Can be also an object with default options
    baseURL: 'http://localhost:8000/api'
  },

  // proxy: {
  //   '/api/': 'http://localhost:8000/',
  // },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */

    extractCSS: true,
    extend(config, ctx) {
    }
  }
}
