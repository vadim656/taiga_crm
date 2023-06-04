// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // ssr: false,
  nitro: {
    devProxy: {
      '/api': {
        target: 'https://online.moysklad.ru/api/remap/1.2',
        changeOrigin: true,
        prependPath: true
      }
    },

    routeRules: {
      '/api/**': { proxy: 'https://online.moysklad.ru/api/remap/1.2/**' }
    }
  },

  // vite: {
  //   server: {
  //     hmr: {
  //       clientPort: 24600,
  //       port: 24600
  //     }
  //   }
  // },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'CRM TAIGA',
      meta: [{ name: 'description', content: 'CRM taiga salon' }],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Wix+Madefor+Display:wght@400;500;600;700&display=swap'
        }
      ]
    }
  },

  runtimeConfig: {
    public: {
      graphqlURL: 'https://api.zhivayataiga.ru/graphql',
      strapiURL: 'https://api.zhivayataiga.ru',
      skladToken: 'ac4cefd7530e6a05d53170ae38d7267259bfd527'
    }
  },

  modules: [
    '@vueuse/nuxt',
    '@nuxtjs/apollo',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    '@nuxtjs/strapi'
  ],

  pinia: {
    autoImports: ['defineStore', ['defineStore', 'definePiniaStore']]
  },

  css: [
    '~/assets/css/main.css',
    'primevue/resources/themes/md-dark-indigo/theme.css',
    'primevue/resources/primevue.css',
    'primeicons/primeicons.css'
  ],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },

  components: {
    global: true,
    dirs: ['~/components/global', '~/components']
  },

  strapi: {
    url: 'https://api.zhivayataiga.ru',
    prefix: '/api',
    version: 'v4',
    cookie: {
      sameSite: 'strict'
    },
    cookieName: 'strapi_jwt'
  },

  apollo: {
    authType: 'Bearer',
    authHeader: 'Authorization',
    tokenStorage: 'cookie',
    clients: {
      default: {
        httpEndpoint: 'https://api.zhivayataiga.ru/graphql',
        httpLinkOptions: {
          credentials: 'include'
        }
      }
    }
  },

  build: {
    transpile: ['primevue']
  },

  devtools: {
    enabled: true
  }
})
