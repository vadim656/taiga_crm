<script setup>
import { RouterLink } from 'vue-router'
import { userInfo, sessionInfo } from '@/store'
const store2 = sessionInfo()
const store = userInfo()
const dayjs = useDayjs()
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
  router.push('/auth/login')
}

const date = ref()
const date2 = dayjs(new Date()).format('DD/MM/YYYY ')
onMounted(() => {
  setInterval(() => {
    date.value = dayjs(new Date()).format('HH:mm:ss')
  }, 1000)
})
</script>
<template>
  <div class="relative overflow-x-auto inset-0">
    <nav class="fixed top-0 z-50 w-full bg-[#1E1E1E] border-b border-gray-700">
      <div class="px-3 py-3 lg:px-5 lg:pl-3">
        <div class="flex items-center justify-between">
          <div class="flex items-center justify-start">
            <NuxtLink to="/" class="flex ml-2 md:mr-24">
              <img
                src="https://flowbite.com/docs/images/logo.svg"
                class="h-8 mr-3"
                alt="FlowBite Logo"
              />
              <span
                class="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap"
                >TAIGA</span
              >
              <span
                class="bg-green-400 py-2 px-3 rounded-md text-gray-800 ml-12"
                >{{ store.role }}</span
              >
            </NuxtLink>
          </div>
          <div class="flex items-center gap-3">
            
            <div
              class="bg-gray-700 px-3 py-2 rounded-full flex items-center gap-3 text-sm mr-6"
            >
              <IconsICalendar />
              <b>5 записей</b>сегодня
            </div>
            <span class="text-sm font-bold text-gray-400">{{ date }}</span>
            <IconsIVopros />
            <IconsICog />
            <IconsINotification />
          </div>
        </div>
      </div>
    </nav>
    <aside
      id="logo-sidebar"
      class="fixed top-0 left-0 z-40 w-48 h-screen pt-20 transition-transform -translate-x-full bg-[#1E1E1E] border-r sm:translate-x-0 border-gray-700"
      aria-label="Sidebar"
    >
      <div
        class="flex flex-col justify-between h-full pb-4 overflow-y-auto bg-[#1E1E1E]"
      >
        <ul class="space-y-2 px-3">
          <li>
            <button
              @click="getLink('services')"
              type="button"
              class="flex items-center w-full p-2 text-sm font-normal text-white transition duration-75 rounded-lg group hover:bg-gray-700"
              aria-controls="dropdown-example"
              data-collapse-toggle="dropdown-example"
            >
              <svg
                aria-hidden="true"
                class="flex-shrink-0 w-6 h-6 transition duration-75 group-hover:text-[#1E1E1E] text-gray-400"
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
                >Товары / Услуги</span
              >
            </button>
          </li>
          <!-- <li class="w-full">
            <button
              @click="getLink('calendar')"
              class="flex w-full justify-start items-center p-2 text-sm font-normal rounded-lg  hover:bg-gray-700"
            >
              <IconsICalendar
                class="flex-shrink-0 w-6 h-6 transition duration-75 text-gray-400 group-hover:text-[#1E1E1E] "
              />
              <span class="ml-3">Календарь</span>
            </button>
          </li> -->
          <li>
            <button
              @click="getLink('clients')"
              class="flex w-full justify-start items-center p-2 text-sm font-normal rounded-lg hover:bg-gray-700"
            >
              <svg
                aria-hidden="true"
                class="flex-shrink-0 w-6 h-6 transition duration-75 text-gray-400 group-hover:text-[#1E1E1E] group-hover:"
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
              <span class="ml-3">Клиенты</span>
            </button>
          </li>
          <li>
            <button
              @click="getLink('stock')"
              class="flex w-full justify-start items-center p-2 text-sm font-normal rounded-lg hover:bg-gray-700"
            >
              <IconsICube
                class="flex-shrink-0 w-6 h-6 transition duration-75 text-gray-400 group-hover:text-[#1E1E1E] group-hover:"
              />
              <span class="ml-3">Склад</span>
            </button>
          </li>
          <li>
            <button
              @click="getLink('sertificats')"
              class="flex w-full justify-start items-center p-2 text-sm font-normal rounded-lg hover:bg-gray-700"
            >
              <IconsICube
                class="flex-shrink-0 w-6 h-6 transition duration-75 text-gray-400 group-hover:text-[#1E1E1E] group-hover:"
              />
              <span class="ml-3">Сертификаты</span>
            </button>
          </li>
          <li v-if="store.role == 'Admin'">
            <button
              @click="getToggle(1)"
              type="button"
              class="flex items-center w-full p-2 text-sm font-normal text-white transition duration-75 rounded-lg group hover:bg-gray-700"
            >
              <svg
                aria-hidden="true"
                class="w-6 h-6 transition duration-75 text-gray-400 group-hover:text-[#1E1E1E] group-hover:"
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

          <li v-if="store.role == 'Admin'">
            <button
              @click="getToggle(3)"
              href="#"
              class="flex items-center w-full p-2 text-sm font-normal text-text-white transition duration-75 rounded-lg group hover:bg-gray-700"
            >
              <svg
                class="flex-shrink-0 w-6 h-6 transition duration-75 text-gray-400 group-hover:text-[#1E1E1E]"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                ></path>
              </svg>
              <span class="flex-1 ml-3 text-left whitespace-nowrap"
                >Финансы</span
              >
              <IconsIArrow :class="[activeLink == 3 ? 'rotate-180' : '']" />
            </button>
            <ul v-show="activeLink == 3" class="link-active">
              <NuxtLink to="/finance/zp" class="link group">ЗП</NuxtLink>
              <NuxtLink to="/" class="link group">Расходы</NuxtLink>
              <NuxtLink to="/" class="link group">Ком-услуги</NuxtLink>
              <NuxtLink to="/" class="link group">Касса</NuxtLink>
              <NuxtLink to="/finance/prihod" class="link group"
                >Приходы</NuxtLink
              >
            </ul>
          </li>

          <li v-if="store.role == 'Admin'">
            <button
              @click="getToggle(2)"
              type="button"
              class="flex items-center w-full p-2 text-sm font-normal text-white transition duration-75 rounded-lg group hover:bg-gray-700"
            >
              <svg
                class="flex-shrink-0 w-6 h-6 transition duration-75 text-gray-400 group-hover:text-[#1E1E1E] group-hover:"
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
        </ul>
        <div class="bg-[#292929] px-3 py-2 flex cc">
          <div class="flex items-center w-full">
            <div class="flex items-center justify-between w-full gap-2 text-xs">
              {{ store.data.FIO }}

              <button
                @click="logout"
                class="bg-[#1E1E1E] p-2 rounded-md hover:drop-shadow-xl"
                v-tooltip.top="'Выйти из аккаунта'"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-5 h-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
                  />
                </svg>
              </button>

              <!-- <span v-if="user"
                  >{{ user.getInfo.username }} || {{ role }}</span
                > -->
            </div>
          </div>
        </div>
      </div>
    </aside>
    <div
      class="p-4 sm:ml-48 mt-14 h-auto min-h-[calc(100vh-3.5rem)] bg-[#1E1E1E]"
    >
      <slot />
    </div>
  </div>
</template>
<style>
.link {
  @apply flex items-center w-full p-2 text-sm font-normal anime  pl-4  hover:bg-gray-700;
}

.link-active {
  @apply space-y-2 bg-gray-600 mt-2 rounded-md overflow-hidden;
}
</style>
