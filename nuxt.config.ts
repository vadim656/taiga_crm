// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      charset: 'utf-16',
      viewport: 'width=device-width, initial-scale=1',
      title: 'CRM',
      meta: [
        // <meta name="description" content="My amazing site">
        { name: 'description', content: 'My amazing site.' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=PT+Sans+Caption:wght@400;700&display=swap'
        }
      ]
    }
  },
  runtimeConfig: {
    githubToken: process.env.GITHUB_TOKEN,
    public: {
      graphqlURL: 'http://localhost:1337/graphql',
      strapiURL: 'http://localhost:1337'
    }
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
    '@nuxtjs/apollo',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt'
  ],
  tailwindcss: {
    cssPath: '~/assets/css/input.css'
  },
  pinia: {
    autoImports: [
      // automatically imports `defineStore`
      'defineStore', // import { defineStore } from 'pinia'
      ['defineStore', 'definePiniaStore'] // import { defineStore as definePiniaStore } from 'pinia'
    ]
  },
  css: [
    'primevue/resources/themes/md-dark-indigo/theme.css',
    'primevue/resources/primevue.css',
    'primeicons/primeicons.css'
  ],
  apollo: {
    authType: 'Bearer',
    authHeader: 'Authorization',
    tokenStorage: 'cookie',
    clients: {
      default: {
        httpEndpoint: 'http://localhost:1337/graphql',
        httpLinkOptions: {
          credentials: 'include'
        }
      }
    }
  },
  build: {
    transpile: ['primevue']
  }
})
