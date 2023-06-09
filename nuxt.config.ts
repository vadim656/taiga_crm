// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  vite: {
    build: {
      target: "esnext",
    },
  },
  nitro: {
    esbuild: {
      options: {
        target: "esnext",
      },
    },
    prerender: {
      crawlLinks: true,
    },
  },
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title: "CRM TAIGA",
      meta: [{ name: "description", content: "CRM taiga salon" }],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Wix+Madefor+Display:wght@400;500;600;700&display=swap",
        },
      ],
    },
  },

  runtimeConfig: {
    public: {
      graphqlURL: "https://api.zhivayataiga.ru/graphql",
      strapiURL: "https://api.zhivayataiga.ru",
      skladToken: "ac4cefd7530e6a05d53170ae38d7267259bfd527",
    },
  },

  modules: [
    "@vueuse/nuxt",
    "@nuxtjs/apollo",
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
    "@nuxtjs/strapi",
    "dayjs-nuxt",
  ],

  dayjs: {
    locales: ["ru"],
    plugins: ["relativeTime", "utc", "timezone"],
    defaultLocale: "ru",
    defaultTimezone: "Russia/Moscow",
  },
  pinia: {
    autoImports: ["defineStore", ["defineStore", "definePiniaStore"]],
  },

  css: [
    "~/assets/css/main.css",
    "primevue/resources/themes/md-dark-indigo/theme.css",
    "primevue/resources/primevue.css",
    "primeicons/primeicons.css",
  ],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  components: {
    global: true,
    dirs: ["~/components"],
  },

  strapi: {
    url: "https://api.zhivayataiga.ru",
    prefix: "/api",
    version: "v4",
    cookie: {
      sameSite: "strict",
    },
    cookieName: "strapi_jwt",
  },

  apollo: {
    authType: "Bearer",
    authHeader: "Authorization",
    tokenStorage: "cookie",
    clients: {
      default: {
        httpEndpoint: "https://api.zhivayataiga.ru/graphql",
        httpLinkOptions: {
          credentials: "include",
        },
      },
    },
  },

  build: {
    transpile: ["primevue"],
  },
});
