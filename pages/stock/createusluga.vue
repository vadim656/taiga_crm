<template>
  <div class="grid grid-cols-1 gap-4 pt-2">
    <div class="flex items-center justify-between">
      <span class="text-xl w-full mb-4">Создание услуги</span>
      <button
        @click="modalViewHistoryOpen(slotProps.data.id)"
        class="flex items-center gap-2 bg-blue-600 rounded-md px-3 py-2 text-sm"
      >
        <IconsIPlus class="w-5 h-5 text-white" /> Сохранить
      </button>
    </div>

    <span class="p-float-label">
      <InputText id="username" v-model="dataProduct.name" class="w-full" />
      <label for="username">Название</label>
    </span>
    <span class="p-float-label">
      <InputText id="username" v-model="dataProduct.desc" class="w-full" />
      <label for="username">Описание</label>
    </span>
    <div class="flex gap-4">
      <span class="p-float-label">
        <InputText id="username" v-model="dataProduct.price" />
        <label for="username">Цена продажи</label>
      </span>
      <span class="p-float-label">
        <InputText id="username" v-model="dataProduct.time" />
        <label for="username">Длительность</label>
      </span>
    </div>
    <div class="w-full grid grid-cols-2 gap-4">
      <div class="border border-neutral-500 p-4 rounded-md flex flex-col gap-4">
        <span>Все товары</span>
        <div>
          <ClientOnly placeholder="Загрузка...">
            <DataTable
              :value="allProductsCom"
              stripedRows
              v-model:filters="filters"
              :globalFilterFields="[
                'attributes.Name',
                'attributes.group.data.attributes.Name'
              ]"
              class="rounded-t-md overflow-hidden"
              paginator
              :rows="10"
              :rowsPerPageOptions="[10, 20, 50]"
              filterDisplay="menu"
            >
              <template #header>
                <div class="flex justify-between gap-4">
                  <InputText
                    v-model="filters['global'].value"
                    placeholder="Поиск по товарам"
                    class="w-full"
                  />
                </div>
              </template>
              <Column
                field="attributes.group.data.attributes.Name"
                filterField="attributes.group.data.attributes.Name"
                header="Наименование"
                class="text-xs"
                sortable
              >
                <template #body="slotProps">
                  <div class="flex items-center gap-2 text-xs">
                    <span class="">{{ slotProps.data.attributes.Name }}</span>
                  </div>
                </template>
              </Column>
              <Column
                field="attributes.Price"
                filterField="attributes.Price"
                header="Цена"
                class="text-xs"
                sortable
              >
                <template #body="slotProps">
                  <div class="flex items-center gap-2">
                    <span class="truncate"
                      >{{ slotProps.data.attributes.Price }} ₽</span
                    >
                  </div>
                </template>
              </Column>
              <Column field="id" header="" class="text-sm">
                <template #body="slotProps">
                  <div class="flex items-center justify-end gap-2">
                    <button
                      @click="addToProduct(slotProps.data)"
                      class="flex items-center gap-2 bg-green-600 rounded-md px-3 py-2"
                    >
                      <IconsIPlus class="w-5 h-5 text-white" /> Добавить
                    </button>
                  </div>
                </template>
              </Column>
            </DataTable>
          </ClientOnly>
        </div>
      </div>
      <div class="border border-neutral-500 p-4 rounded-md flex flex-col gap-4">
        <span>Добавлено</span>
        <div v-if="allProductsComAddDone.length >= 1">
          <ClientOnly placeholder="Загрузка...">
            <DataTable
              :value="allProductsComAddDone"
              stripedRows
              removableSort
              v-model:filters="filters"
              :globalFilterFields="[
                'attributes.Name',
                'attributes.group.data.attributes.Name'
              ]"
              class="rounded-t-md overflow-hidden"
            >
              <Column
                field="attributes.group.data.attributes.Name"
                filterField="attributes.group.data.attributes.Name"
                header="Наименование"
                class="text-sm"
              >
                <template #body="slotProps">
                  <div class="flex items-center gap-2 text-xs">
                    <span class="">{{ slotProps.data.attributes.Name }}</span>
                  </div>
                </template>
              </Column>
              <Column
                field="attributes.Price"
                filterField="attributes.Price"
                header="Кол-во"
                class="text-xs"
              >
                <template #body="slotProps">
                  <div class="flex items-center gap-2">
                    <input
                      type="number"
                      min="1"
                      step="0.1"
                      :max="slotProps.data.attributes.Ostatki"
                      :key="slotProps.data"
                      value="1"
                      class="w-16 p-2 bg-transparent border border-neutral-700 rounded-md"
                      @change="addKol(slotProps.data.id, $event.target.value)"
                    />
                  </div>
                </template>
              </Column>
              <Column field="id" header="" class="text-sm">
                <template #body="slotProps">
                  <div class="flex items-center justify-end gap-2">
                    <button
                      @click="deleteProduct(slotProps.data)"
                      class="px-2 py-2"
                    >
                      <IconsIDelete class="w-4 h-4" />
                    </button>
                  </div>
                </template>
              </Column>
            </DataTable>
          </ClientOnly>
        </div>
        <span v-else>Пока пусто...</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { FilterMatchMode } from 'primevue/api'
import { ALL_PRODUCTS, ALL_GROUPS } from '@/gql/STOCK'
useHead({
  title: 'Создание услуги'
})
definePageMeta({
  middleware: 'auth'
})
const dataProduct = ref({
  name: '',
  price: '',
  desc: '',
  time: '',
  active: true,
  img: ''
})

const allProductsComAdd = ref([])
const allProductsComAddDone = computed(() => allProductsComAdd.value ?? [])

const { result: allProducts } = useQuery(ALL_PRODUCTS)
const allProductsCom = computed(() => allProducts.value?.products.data ?? [])

function addToProduct (item) {
  allProductsComAdd.value.push(item)
}

function deleteProduct (item) {
  allProductsComAdd.value = allProductsComAdd.value.filter(
    x => x.id !== item.id
  )
}

const filters = ref()

const initFilters = () => {
  filters.value = {
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    'attributes.Name': { value: null, matchMode: FilterMatchMode.CONTAINS },
    'attributes.group.data.attributes.Name': {
      value: null,
      matchMode: FilterMatchMode.IN
    }
  }
}

initFilters()
</script>

<style lang="scss" scoped></style>
