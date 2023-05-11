<script setup>
import ALL_PARTNERS from '~/gql/query/ALL_PARTNERS.gql'
import ADD_PARTNER from '~/gql/mutation/ADD_PARTNER.gql'
useHead({
  title: 'TAIGA CRM - Партнеры'
})

const { result: partners } = useQuery(ALL_PARTNERS)

// add partner
const fio = ref('')
const phone = ref('')
const active = ref(true)

const variables = {
  PHONE: phone,
  FIO: fio,
  ACTIVE: active
}

const { mutate: addPartner } = useMutation(ADD_PARTNER, { variables })

// modalEdit

const dataModal = ref(null)
const modals = ref(null)
const edit = data => {
  dataModal.value = data
  modals.value.modalView = true
}

// modalAdd
const modalsAdd = ref(null)
const add = () => {
  modalsAdd.value.modalView = true
}
</script>
<template>
  <div class="rounded-md bg-slate-800 text-white">
    <div class="shadow-md sm:rounded-lg">
      <div class="flex items-center justify-between p-4">
        <div class="relative">
          <div
            class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
          >
            <svg
              class="w-5 h-5 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
          <input
            type="text"
            id="table-search-users"
            class="block p-2 pl-10 text-sm border  rounded-lg w-80 dark:border-gray-600 dark:placeholder-gray-400 text-white"
            placeholder="Поиск по парнерам"
          />
        </div>
        <div>
          <ButtonsBDelete @click="add">Добавить</ButtonsBDelete>
        </div>
      </div>
      <table
        class="w-full text-sm text-left text-gray-500 dark:text-gray-400"
        v-if="partners && partners.partners.data"
      >
        <thead class="text-xs text-gray-700 uppercase dark: dark:text-gray-400">
          <tr>
            <th scope="col" class="p-4">
              <div class="flex items-center">
                <input
                  id="checkbox-all-search"
                  type="checkbox"
                  class="w-4 h-4 text-blue-600 bg-gray-100  rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark: dark:border-gray-600"
                />
                <label for="checkbox-all-search" class="sr-only"
                  >checkbox</label
                >
              </div>
            </th>
            <th scope="col" class="px-6 py-3">ФИО</th>
            <th scope="col" class="px-6 py-3">Телефон</th>
            <th scope="col" class="px-6 py-3">Статус</th>
            <th scope="col" class="px-6 py-3 text-right">Действия</th>
          </tr>
        </thead>
        <tbody>
          <PartnersPartnerRow
            v-for="item in partners.partners.data"
            :key="item.attributes.UID"
            :data="item.attributes"
            @edit="edit(item)"
          />
        </tbody>
      </table>
      <span v-else>Загрузка...</span>

      <ModalsModalEdit ref="modals" key="edit">
        <template #title>
          <span v-if="dataModal"
            >Редактировать
            <span class="underline underline-offset-4">{{
              dataModal.attributes.FIO
            }}</span>
          </span>
        </template>
        <template #body>
          <div class="grid grid-cols-6 gap-6">
            <div class="col-span-6 sm:col-span-3">
              <label
                for="first-name"
                class="block mb-2 text-sm font-medium text-white"
                >ФИО</label
              >
              <input
                type="text"
                name="first-name"
                id="first-name"
                class="shadow-sm border  text-sm rounded-lg block w-full p-2.5 bg-gray-600 border-gray-500 dark:placeholder-gray-400 text-white"
                placeholder="Bonnie"
                required=""
              />
            </div>
            <div class="col-span-6 sm:col-span-3">
              <label
                for="last-name"
                class="block mb-2 text-sm font-medium text-white"
                >Телефон</label
              >
              <input
                type="text"
                name="last-name"
                id="last-name"
                class="shadow-sm border  text-sm rounded-lg block w-full p-2.5 bg-gray-600 border-gray-500 dark:placeholder-gray-400 text-white"
                placeholder="Green"
                required=""
              />
            </div>
            <div class="col-span-6 sm:col-span-3">
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-white"
                >Активность</label
              >
              <DropdownsDropDefault />
            </div>

            <div class="col-span-6 sm:col-span-3">
              <label
                for="company"
                class="block mb-2 text-sm font-medium text-white"
                >Компания</label
              >
              <input
                type="number"
                name="company"
                id="company"
                class="shadow-sm border  text-sm rounded-lg block w-full p-2.5 bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 text-white"
                placeholder="123456"
                required=""
              />
            </div>
          </div>
        </template>
        <template #footer> <ButtonsBDelete>Добавить</ButtonsBDelete></template>
      </ModalsModalEdit>
      <ModalsModalEdit ref="modalsAdd" key="add">
        <template #title>
          <span>Добавить партнера </span>
        </template>
        <template #body>
          <div class="grid grid-cols-6 gap-6">
            <div class="col-span-6 sm:col-span-3">
              <label
                for="first-name"
                class="block mb-2 text-sm font-medium text-white"
                >ФИО</label
              >
              <input
                type="text"
                name="first-name"
                id="first-name"
                class="shadow-sm border  text-sm rounded-lg block w-full p-2.5 bg-gray-600 border-gray-500 dark:placeholder-gray-400 text-white"
                placeholder="Иван"
                required=""
                v-model="fio"
              />
            </div>
            <div class="col-span-6 sm:col-span-3">
              <label
                for="last-name"
                class="block mb-2 text-sm font-medium text-white"
                >Телефон</label
              >
              <input
                type="text"
                name="last-name"
                id="last-name"
                class="shadow-sm border  text-sm rounded-lg block w-full p-2.5 bg-gray-600 border-gray-500 dark:placeholder-gray-400 text-white"
                placeholder="Green"
                required=""
                v-model="phone"
              />
            </div>
            <div class="col-span-6 sm:col-span-3">
              <div class="flex items-center mb-4">
                <label
                  for="default-checkbox"
                  class="ml-2 text-sm font-medium dark:text-gray-300"
                  >Активный</label
                >
                <DropdownsDropDefault />
              </div>
            </div>

            <div class="col-span-6 sm:col-span-3">
              <label
                for="company"
                class="block mb-2 text-sm font-medium text-white"
                >Компания</label
              >
              <input
                type="number"
                name="company"
                id="company"
                class="shadow-sm border  text-sm rounded-lg block w-full p-2.5 bg-gray-600 border-gray-500 dark:placeholder-gray-400 text-white"
                placeholder="123456"
                required=""
              />
            </div>
          </div>
        </template>
        <template #footer>
          <ButtonsBDelete @click="addPartner"
            >Добавить</ButtonsBDelete
          ></template
        >
      </ModalsModalEdit>
    </div>
  </div>
</template>

<style scoped></style>
