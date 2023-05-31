<template>
  <div>
    <ClientOnly placeholder="Загрузка...">
      <DataTable
        :value="counterpartyCom"
        stripedRows
        removableSort
        v-model:filters="filters"
        :globalFilterFields="['name']"
        class="rounded-t-md overflow-hidden"
        paginator
        :rows="10"
        :rowsPerPageOptions="[10, 20, 50]"
      >
        <template #header>
          <div class="flex justify-between">
            <div>
              <InputText
                v-model="filters['global'].value"
                placeholder="Поиск по клиентам"
              />
            </div>
            <ButtonsBDelete @click="addProduct" icon="plus" type="add"
              >Добавить</ButtonsBDelete
            >
          </div>
        </template>
        <Column
          field="name"
          filterField="name"
          header="ФИО"
          class="text-sm"
        ></Column>
        <Column
          field="created"
          filterField="created"
          header="Создан"

          class="text-sm"
        ></Column>
        <Column
          field="created"
          filterField="created"
          header="Заметки"
          style="width: 2%"
          class="text-sm"
        >
        <template #body="slotProps">
            <div class="flex items-center gap-2">
            2
            </div>
          </template>
        </Column>
        <Column
          field="created"
          filterField="created"
          header="Бонусы"
          style="width: 2%"
          class="text-sm"
        >
        <template #body="slotProps">
            <div class="flex items-center gap-2">
            1000
            </div>
          </template>
        </Column>
        <Column field="id" header="" style="width: 8%" class="text-sm">
          <template #body="slotProps">
            <div class="flex items-center gap-2">
              <button
                @click="editProduct(slotProps.data.id)"
                class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >
                <IconsIEdit />
              </button>
              <button>
                <IconsIDelete />
              </button>
            </div>
          </template>
        </Column>
      </DataTable>
    </ClientOnly>
  </div>
</template>

<script setup>
import { FilterMatchMode } from 'primevue/api'

useHead({
  title: 'TAIGA CRM - Клиенты'
})
definePageMeta({
  middleware: 'auth'
})

const {
  pending: pendingСounterparty,
  data: counterparty,
  refresh: refreshСounterparty
} = await useFetch('api/entity/counterparty', {
  method: 'GET',
  headers: {
    Authorization: 'Basic YWRtaW5AbW1wY2FwaXRhbDE6ZjkzZWMzMmVlYQ=='
  }
})

const counterpartyCom = computed(() => {
  if (counterparty.value?.rows) {
    return counterparty.value.rows
  } else {
    return []
  }
})

const filters = ref({
  global: { value: null, matchMode: FilterMatchMode.CONTAINS },
  name: { value: null, matchMode: FilterMatchMode.CONTAINS }
})
</script>

<style lang="scss" scoped></style>
