<script setup>
import { FilterMatchMode } from 'primevue/api'
useHead({
  title: 'TAIGA CRM - Услуги'
})
definePageMeta({
  middleware: 'auth'
})

// allProducts
const {
  pending: pendingServices,
  data: services,
  refresh: refreshServices
} = await useFetch('/api/entity/product', {
  method: 'GET',
  headers: {
    Authorization: 'Basic YWRtaW5AbW1wY2FwaXRhbDE6ZjkzZWMzMmVlYQ=='
  }
})
// allPGroups
const {
  pending: pendingGroups,
  data: groups,
  refresh: refreshGroups
} = await useFetch('/api/entity/productfolder', {
  method: 'GET',
  headers: {
    Authorization: 'Basic YWRtaW5AbW1wY2FwaXRhbDE6ZjkzZWMzMmVlYQ=='
  }
})

const filters = ref()

const initFilters = () => {
  filters.value = {
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    name: { value: null, matchMode: FilterMatchMode.CONTAINS },
    pathName: { value: null, matchMode: FilterMatchMode.IN }
  }
}

initFilters()

const initPrice = price => {
  const pre = price * 0.01
  const done = pre.toLocaleString('ru-RU')
  return done
}
</script>
<template>
  <div>
    <!-- <pre class="text-xs">{{ groups.rows }}</pre> -->

    <ClientOnly placeholder="Загрузка...">
      <DataTable
        :value="services.rows"
        stripedRows
        removableSort
        v-model:filters="filters"
        :globalFilterFields="['name', 'pathName']"
        class="rounded-t-md overflow-hidden"
        paginator
        :rows="10"
        :rowsPerPageOptions="[10, 20, 50]"
        filterDisplay="menu"
      >
        <template #header>
          <div class="flex justify-between">
            <div>
              <InputText
                v-model="filters['global'].value"
                placeholder="Поиск по продукции"
              />
            </div>
            <ButtonsBDelete @click="addProduct" icon="plus" type="add"
              >Добавить</ButtonsBDelete
            >
          </div>
        </template>
        <Column
          field="code"
          filterField="code"
          header="Арт"
          style="width: 2%"
          class="text-sm"
        ></Column>
        <Column
          field="name"
          filterField="name"
          header="Наименование"
          style="width: 50%"
          class="text-sm"
          sortable
        >
          <template #body="slotProps">
            <div class="flex items-center gap-2">
              <span class="truncate">{{ slotProps.data.name }}</span>
            </div>
          </template></Column
        >
        <Column
          header="Группа"
          field="pathName"
          filterField="pathName"
          sortable
          style="width: 6%"
          class="text-sm"
        >
         
        </Column>

        <Column field="id" header="Цена" style="width: 10%" class="text-sm">
          <template #body="slotProps">
            <div class="flex items-center gap-2">
              <span class="font-bold"
                >{{ initPrice(slotProps.data.salePrices[0].value) }} ₽</span
              >
            </div>
          </template>
        </Column>
        <Column
          field="code"
          filterField="code"
          header="Остатки"
          style="width: 2%"
          class="text-sm"
        ></Column>
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

      <!-- @page="pageEventProducts" -->
    </ClientOnly>
  </div>
</template>

<style lang="scss" scoped></style>
