<script setup>
import ALL_SERVICES from '~/gql/query/ALL_SERVICES.gql'
useHead({
  title: 'TAIGA CRM - Услуги'
})

const { result: services } = useQuery(ALL_SERVICES)

const dataModal = ref(null)

const modalEdit = ref(null)
const modalAdd = ref(null)
const edit = data => {
  dataModal.value = data
  modalEdit.value.modalView = true
}

function modalAddHandler () {
  modalAdd.value.modalView = true
}

let dataAddService = ref({
  name: '',
  price: null,
  status: true
})
</script>

<template>
  <div>
    <!-- <pre v-if="services && services.services.data">{{
      services.services.data
    }}</pre> -->
    <div class="shadow-md sm:rounded-lg">
      <div
        class="flex items-center justify-between p-4 bg-white dark:bg-gray-800"
      >
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
            class="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Поиск по услугам"
          />
        </div>

        <ButtonsBDelete @click="modalAddHandler" icon="plus" type="add"
          >Добавить</ButtonsBDelete
        >
      </div>
      <table
        class="w-full text-sm text-left text-gray-500 dark:text-gray-400"
        v-if="services && services.services.data"
      >
        <thead
          class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
        >
          <tr>
            <th scope="col" class="p-4">
              <div class="flex items-center">
                <input
                  id="checkbox-all-search"
                  type="checkbox"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label for="checkbox-all-search" class="sr-only"
                  >checkbox</label
                >
              </div>
            </th>
            <th scope="col" class="px-6 py-3">Название</th>
            <th scope="col" class="px-6 py-3">Цена</th>
            <th scope="col" class="px-6 py-3">Статус</th>
            <th scope="col" class="px-6 py-3 text-right">Действия</th>
          </tr>
        </thead>
        <tbody>
          <ServicesServiceRow
            v-for="item in services.services.data"
            :key="item.id"
            :data="item.attributes"
            @edit="edit(item)"
          />
        </tbody>
      </table>
      <span v-else>Загрузка...</span>

      <ModalsModalEdit ref="modalEdit">
        <template #title>
          <span v-if="dataModal"
            >Редактировать
            <span class="underline underline-offset-4">{{
              dataModal.attributes.Name
            }}</span>
          </span>
        </template>
        <template #body>
          <div class="grid grid-cols-2 gap-6">
            <InputsInputDef
              label="Название"
              id="name"
              placeholder="Массаж"
              v-model="dataAddService.name"
            />
          </div>
        </template>
        <template #footer> <ButtonsBDelete>Добавить</ButtonsBDelete></template>
      </ModalsModalEdit>
      <ModalsModalEdit ref="modalAdd">
        <template #title>
          <span>Добавить услугу</span>
        </template>
        <template #body>
          <div class="grid grid-cols-2 gap-6">
            <InputsInputDef
              label="Название"
              id="name"
              placeholder="Массаж"
              v-model="dataAddService.name"
            />
            <InputsInputDef
              label="Цена"
              id="price"
              type=number
              placeholder="100"
              v-model="dataAddService.price"
            />
          </div>
        </template>
        <template #footer> <ButtonsBDelete>Добавить</ButtonsBDelete></template>
      </ModalsModalEdit>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
