<script setup>
import { userInfo } from '@/store'
import { RouterLink } from 'vue-router'

const user = userInfo()

const role = ref('')

onMounted(() => {
  role.value = user.getInfo.role.description
})

const { onLogout } = useApollo()

let activeLink = ref(null)

const userMenu = ref(true)

function getToggle (x) {
  if (activeLink.value == x) {
    activeLink.value = null
  } else {
    activeLink.value = x
  }
}

const router = useRouter()

const getLink = link => {
  router.push('/' + link)
}

function logout () {
  setTimeout(() => {
    user.clearSession()
  }, 1000)
  onLogout()
  router.push('/login')
}
</script>
<template>
  <div class="relative overflow-x-auto inset-0">
    <nav
      class="fixed top-0 z-50 w-full bg-slate-800 border-b border-gray-200 dark:border-gray-700"
    >
      <div class="px-3 py-3 lg:px-5 lg:pl-3">
        <div class="flex items-center justify-between">
          <div class="flex items-center justify-start">
            <button
              type="button"
              class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            >
              <span class="sr-only">Open sidebar</span>
              <svg
                class="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clip-rule="evenodd"
                  fill-rule="evenodd"
                  d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                ></path>
              </svg>
            </button>
            <NuxtLink to="/" class="flex ml-2 md:mr-24">
              <img
                src="https://flowbite.com/docs/images/logo.svg"
                class="h-8 mr-3"
                alt="FlowBite Logo"
              />
              <span
                class="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white"
                >TAIGA</span
              >
            </NuxtLink>
          </div>
          <div class="flex items-center">
            <div class="flex items-center ml-3">
              <div class="flex items-center gap-2 text-white">
                <button @click="logout">Выйти</button>
                <button
                  type="button"
                  class="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                >
                  <img
                    class="w-8 h-8 rounded-full"
                    src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                    alt="user photo"
                  />
                </button>
                <span v-if="user"
                  >{{ user.getInfo.username }} || {{ role }}</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <aside
      id="logo-sidebar"
      class="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-slate-800 border-r border-gray-200 sm:translate-x-0 dark:border-gray-700"
      aria-label="Sidebar"
    >
      <div class="h-full px-3 pb-4 overflow-y-auto bg-slate-800">
        <ul class="space-y-2">
          <li>
            <button
              @click="getToggle(1)"
              type="button"
              class="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
            >
              <svg
                aria-hidden="true"
                class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
              </svg>
              <span class="flex-1 ml-3 text-left whitespace-nowrap"
                >Аналитика</span
              >
              <IconsIArrow :class="[activeLink == 1 ? 'rotate-180' : '']" />
            </button>
            <ul v-show="activeLink == 1" class="link-active">
              <li>
                <a href="#" class="link group">Products</a>
              </li>
              <li>
                <a href="#" class="link group">Billing</a>
              </li>
              <li>
                <a href="#" class="link group">Invoice</a>
              </li>
            </ul>
          </li>
          <li>
            <button
              @click="getLink('services')"
              type="button"
              class="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              aria-controls="dropdown-example"
              data-collapse-toggle="dropdown-example"
            >
              <svg
                aria-hidden="true"
                class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span
                class="flex-1 ml-3 text-left whitespace-nowrap"
                sidebar-toggle-item
                >Услуги</span
              >
            </button>
          </li>
          <li>
            <button
            @click="getToggle(3)"
              href="#"
              class="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
            >
              <svg
                class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                ></path>
              </svg>
              <span class="flex-1 ml-3 text-left whitespace-nowrap">Финансы</span>
              <IconsIArrow :class="[activeLink == 3 ? 'rotate-180' : '']" />
            </button>
            <ul v-show="activeLink == 3" class="link-active">
              <NuxtLink to="/finance/zp" class="link group">ЗП</NuxtLink>
              <NuxtLink to="/" class="link group">Расходы</NuxtLink>
              <NuxtLink to="/" class="link group">Ком-услуги</NuxtLink>
              <NuxtLink to="/" class="link group">Касса</NuxtLink>
            </ul>
          </li>

          <li>
            <button
              @click="getToggle(2)"
              type="button"
              class="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
            >
              <svg
                class="flex-shrink-0 w-6 h-6 transition duration-75 text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"
                ></path>
                <path
                  d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"
                ></path>
              </svg>
              <span class="flex-1 ml-3 text-left whitespace-nowrap"
                >Сотрудники</span
              >
              <IconsIArrow :class="[activeLink == 2 ? 'rotate-180' : '']" />
            </button>
            <ul v-show="activeLink == 2" class="link-active">
              <RouterLink to="/worker/master" class="link group"
                >Мастера</RouterLink
              >

              <RouterLink to="/worker/admins" class="link group"
                >Администраторы</RouterLink
              >
            </ul>
          </li>
          <li class="w-full">
            <button
              @click="getLink('calendar')"
              class="flex w-full justify-start items-center p-2 text-base font-normal rounded-lg text-white hover:bg-gray-700"
            >
              <IconsICalendar
                class="flex-shrink-0 w-6 h-6 transition duration-75 text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
              />
              <span class="ml-3">Календарь</span>
            </button>
          </li>
          <li>
            <a
              href="#"
              class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <svg
                aria-hidden="true"
                class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span class="flex-1 ml-3 whitespace-nowrap">Клиенты</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <svg
                aria-hidden="true"
                class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span class="flex-1 ml-3 whitespace-nowrap">Продукция</span>
            </a>
          </li>
        </ul>
      </div>
    </aside>
    <div
      class="p-4 sm:ml-64 mt-14 h-auto min-h-screen bg-white dark:bg-gray-900"
    >
      <slot />
    </div>
  </div>
</template>
<style>
.link {
  @apply flex items-center w-full p-2 text-base font-normal anime  pl-11 text-white hover:bg-gray-700;
}

.link-active {
  @apply space-y-2 bg-gray-600 mt-2 rounded-md overflow-hidden;
}
</style>
