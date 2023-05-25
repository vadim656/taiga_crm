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
    }
  },
  vite: {
    server: {
      proxy: {
        '/api': {
          target: 'https://online.moysklad.ru/api/remap/1.2',
          changeOrigin: true
        }
      }
    }
  },
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
          href: 'https://fonts.googleapis.com/css2?family=Wix+Madefor+Display:wght@400;500;600;700&display=swap'
        }
      ]
    }
  },
  runtimeConfig: {
    githubToken: process.env.GITHUB_TOKEN,
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
    // 'nuxt-security'
    // '@nuxt-alt/proxy'
  ],
  // security: {
  //   corsHandler: {
  //     origin: '*',
  //     methods: '*',
  //   },
  //   headers: {
  //     "Access-Control-Allow-Origin": '*'
  //   }
  // },

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
  }
})
