<script setup>
import { userInfo } from '@/store'
import { USER_NOTES_COUNT } from '@/gql/query/DASHBOARD'
import { v4 as uuidv4 } from 'uuid'
const store = userInfo()
const route = useRoute()
const activeLink = ref(0)

function getToggle (x) {
  if (activeLink.value == x) {
    activeLink.value = 0
  } else {
    activeLink.value = x
  }
}

const dataDay = ref({
  start: '',
  end: ''
})

const enableQ = ref(false)

const { result: dayOrders, onResult: dateRes } = useQuery(
  USER_NOTES_COUNT,
  () => ({
    START: dataDay.value.start,
    END: dataDay.value.end
  }),
  () => ({
    enabled: enableQ.value
  }),
  {
    pollInterval: 5000
  }
)
const allDayCom = computed(() => dayOrders.value?.userRecords.data ?? [])

const router = useRouter()

const getLink = link => {
  router.push('/' + link)
}

const { logout: SLogout } = useStrapiAuth()
const { onLogout: LogoutAppolo } = useApollo()

function logout () {
  SLogout()
  LogoutAppolo()
  store.logout()

  router.push('/auth/login')
}
const visible = ref(false)


const kktData = ref()

const kktDataCOM = computed(() => {
  return kktData
})

async function GetDataKKT () {
  const data = {
    Command: 'GetDataKKT',
    InnKkm: '4217204110',
    NumDevice: 0,
    IdDevice: '',
    IdCommand: uuidv4()
  }
  await useFetch(() => 'http://localhost:5894/Execute', {
    method: 'POST',
    headers: {
      Authorization: 'Basic QWRtaW46RHJvcGVzdHJva2UwMDEzIQ==',
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(data),
    credentials: 'omit'
  })
    .then(res => {
      kktData.value = res.data.value
    })
    .catch(err => {
      toast.add({
        severity: 'error',
        summary: 'Неудача',
        detail: 'Что то пошло не так',
        life: 4000
      })
    })
}


onMounted(() => {
  const start = new Date()
  start.setHours(0, 0, 0)
  const d = new Date(start)
  d.setDate(d.getDate() + 1)
  d.setHours(0, 0, 0)
  dataDay.value.start = new Date(start)
  dataDay.value.end = d
  setTimeout(() => {
    visible.value = true
    enableQ.value = true
  }, 1000)
  setInterval(() => {
    GetDataKKT()
  }, 5000);
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
                >TAIGA
              </span>
              <span
                class="bg-green-400 py-2 px-3 rounded-md text-gray-800 ml-12"
                >{{
                  store.role.usersPermissionsUser.data.attributes.role.data
                    .attributes.name
                }}
                -- {{ route.name }}</span
              >
            </NuxtLink>
          </div>
          <div>Статус ККТ :{{ kktDataCOM }}</div>
          <div
            @click="getLink('')"
            class="flex items-center gap-3 cursor-pointer"
          >
            <div
              class="bg-gray-700 hover:bg-gray-600 anime px-3 py-2 rounded-full flex items-center gap-3 text-sm mr-6"
            >
              <IconsICalendar />

              <b>{{ allDayCom.length }} записей</b>сегодня
            </div>
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
              @click="getLink('kassa')"
              type="button"
              class="flex items-center w-full p-2 text-sm font-normal text-white transition duration-75 rounded-lg group hover:bg-gray-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="flex-shrink-0 w-6 h-6 transition duration-75 text-gray-400 group-hover:text-gray-300"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"
                />
              </svg>

              <span
                class="flex-1 ml-3 text-left whitespace-nowrap"
                sidebar-toggle-item
                >Кассир</span
              >
            </button>
          </li>
          <li>
            <button
              @click="getLink('clients')"
              class="flex w-full justify-start items-center p-2 text-sm font-normal rounded-lg hover:bg-gray-700"
            >
              <svg
                aria-hidden="true"
                class="flex-shrink-0 w-6 h-6 transition duration-75 text-gray-400 group-hover:text-gray-300"
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
                class="flex-shrink-0 w-6 h-6 transition duration-75 text-gray-400 group-hover:text-gray-300"
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
                class="flex-shrink-0 w-6 h-6 transition duration-75 text-gray-400 group-hover:text-gray-300"
              />
              <span class="ml-3">Сертификаты</span>
            </button>
          </li>
          <li
            v-if="
              store.role.usersPermissionsUser.data.attributes.role.data
                .attributes.name == 'Admin'
            "
          >
            <button
              @click="getToggle(1)"
              type="button"
              class="flex items-center w-full p-2 text-sm font-normal text-white transition duration-75 rounded-lg group hover:bg-gray-700"
            >
              <svg
                aria-hidden="true"
                class="w-6 h-6 transition duration-75 text-gray-400 group-hover:text-gray-300 "
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
          <li
            v-if="
              store.role.usersPermissionsUser.data.attributes.role.data
                .attributes.name == 'Admin'
            "
          >
            <button
              @click="getToggle(3)"
              href="#"
              class="flex items-center w-full p-2 text-sm font-normal text-text-white transition duration-75 rounded-lg group hover:bg-gray-700"
            >
              <IconsIMoney
                class="flex-shrink-0 w-6 h-6 transition duration-75 text-gray-400 group-hover:text-gray-300"
              />

              <span class="flex-1 ml-3 text-left whitespace-nowrap"
                >Финансы</span
              >
              <IconsIArrow :class="[activeLink == 3 ? 'rotate-180' : '']" />
            </button>
            <ul v-show="activeLink == 3" class="link-active">
              <NuxtLink to="/finance/zp" class="link group">ЗП</NuxtLink>
              <NuxtLink to="/" class="link group">Расходы</NuxtLink>
              <NuxtLink to="/" class="link group">Ком-услуги</NuxtLink>
              <!-- <NuxtLink to="/" class="link group">Касса</NuxtLink> -->
              <NuxtLink to="/finance/prihod" class="link group"
                >Приходы</NuxtLink
              >
            </ul>
          </li>

          <li
            v-if="
              store.role.usersPermissionsUser.data.attributes.role.data
                .attributes.name == 'Admin'
            "
          >
            <button
              @click="getToggle(2)"
              type="button"
              class="flex items-center w-full p-2 text-sm font-normal text-white transition duration-75 rounded-lg group hover:bg-gray-700"
            >
              <IconsIUsers
                class="flex-shrink-0 w-6 h-6 transition duration-75 text-gray-400 group-hover:text-gray-300"
              />

              <span class="flex-1 ml-3 text-left whitespace-nowrap"
                >Сотрудники</span
              >
              <IconsIArrow :class="[activeLink == 2 ? 'rotate-180' : '']" />
            </button>
            <ul v-show="activeLink == 2" class="link-active">
              <NuxtLink to="/worker/master" class="link group"
                >Мастера</NuxtLink
              >

              <NuxtLink to="/worker/admins" class="link group"
                >Администраторы</NuxtLink
              >
              <NuxtLink to="/worker/admins" class="link group"
                >Прочие</NuxtLink
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
