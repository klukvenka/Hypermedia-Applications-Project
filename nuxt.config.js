export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  //Add title, viewport and description based on lighthouse report
  head: {
    title: 'Hypercompany',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Hypercompany is an ICT company offering various products and services in Artificial Intelligence, Cloud Computing and Cybersecurity space.' }
    ],
    link: []
  },

  generate: {
    dir: 'dist'
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins

  //mmcc plugin
  plugins: [
    '~/plugins/mmcc.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  //Configure Server handler

  serverMiddleware: [
    {
      path: '/api',
      handler: '~/server/server.js',
    }
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  //Configure chatbot id with mmcc

  env: {
    configurationId: 'e8cdc118-3b2d-4f7b-8149-23d5ef2e8428',
  },
}
