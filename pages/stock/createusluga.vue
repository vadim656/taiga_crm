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
        <label for="username">Продолжительность</label>
      </span>
    </div>
    <!-- программа -->
    <div class="flex flex-col gap-4 border rounded-md p-4 border-neutral-500">
      <span>Программы</span>
      <div class="flex flex-col gap-4">
        <div class="flex flex-wrap gap-4">
          <div
            v-for="(item, i) in allProgramsCom"
            :key="i"
            class="bg-neutral-800 p-4 rounded-md flex items-center gap-2"
          >
            <span>{{ item }}</span>
            <IconsIDelete
              @click="deleteProgram(item)"
              class="w-5 h-5 cursor-pointer"
            />
          </div>
        </div>
        <div class="flex items-center gap-2">
          <div>
            <span class="p-float-label w-full">
              <InputText
                id="username"
                v-model="programmName"
                class="w-[400px]"
              />
              <label for="username">Добавить программу</label>
            </span>
          </div>
          <IconsIPlus @click="setProgramm" class="w-6 h-6 cursor-pointer" />
        </div>
      </div>
    </div>
    <!-- компоненты -->
    <div class="flex flex-col gap-4 border rounded-md p-4 border-neutral-500">
      <span>Компоненты</span>
      <div class="flex flex-col gap-4">
        <div class="flex flex-wrap gap-4">
          <div
            v-for="(item, i) in allComponentsCom"
            :key="i"
            class="bg-neutral-800 p-4 rounded-md flex items-center gap-2"
          >
            <span>{{ item }}</span>
            <IconsIDelete
              @click="deleteComponent(item)"
              class="w-5 h-5 cursor-pointer"
            />
          </div>
        </div>
        <div class="flex items-center gap-2">
          <div>
            <span class="p-float-label w-full">
              <InputText
                id="username"
                v-model="ComponentsName"
                class="w-[400px]"
              />
              <label for="username">Добавить программу</label>
            </span>
          </div>
          <IconsIPlus @click="setComponent" class="w-6 h-6 cursor-pointer" />
        </div>
      </div>
    </div>
    <!-- комната -->
    <div class="flex flex-col gap-4 border rounded-md p-4 border-neutral-500">
      Кабинеты
      <div class="grid grid-cols-4 gap-4">
        <div class="flex items-center">
          <Checkbox v-model="cabinet" inputId="1" name="1" value="1" />
          <label for="1" class="ml-2"> 1 - Хамам </label>
        </div>
        <div class="flex items-center">
          <Checkbox v-model="cabinet" inputId="2" name="2" value="2" />
          <label for="2" class="ml-2"> 2 - Стандартный </label>
        </div>
        <div class="flex items-center">
          <Checkbox v-model="cabinet" inputId="3" name="3" value="3" />
          <label for="3" class="ml-2"> 3 - Стандартный </label>
        </div>
        <div class="flex items-center">
          <Checkbox v-model="cabinet" inputId="4" name="4" value="4" />
          <label for="4" class="ml-2"> 4 - Ванна</label>
        </div>
        <div class="flex items-center">
          <Checkbox v-model="cabinet" inputId="5" name="5" value="5" />
          <label for="5" class="ml-2"> 5 - Стандартный</label>
        </div>
      </div>
    </div>
    <!-- мастера -->

    <div
      class="w-full grid grid-cols-2 divide-x divide-neutral-500 gap-4 border border-neutral-500 rounded-md"
    >
      <div class="p-4 flex flex-col gap-4">
        <span>Состав услуги</span>
        <div>
          <DataTable
            :value="allProductsCom"
            stripedRows
            :filters="filters"
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
                    :key="slotProps.data.id"
                    @click="addToProduct(slotProps.data)"
                    class="flex items-center gap-2 bg-green-600 rounded-md px-3 py-2"
                  >
                    Добавить
                    <IconsIArrow class="w-5 h-5 text-white -rotate-90" />
                  </button>
                </div>
              </template>
            </Column>
          </DataTable>
        </div>
      </div>
      <div class="p-4 flex flex-col gap-4">
        <span>Добавлено</span>
        <div v-if="allProductsComAddDone.length >= 1">
          <DataTable
            :value="allProductsComAddDone"
            stripedRows
            removableSort
            :filters="filters"
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
                    min="0.1"
                    step="0.1"
                    :max="slotProps.data.attributes.Ostatki"
                    :key="slotProps.data"
                    value="1"
                    class="w-16 p-2 bg-transparent border border-neutral-700 rounded-md"
                    @change="addKol(slotProps.data.id, $event.target.value)"
                  />
                  <span>{{ slotProps.data.valueKol }} мл</span>
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
        </div>
        <span v-else class="text-sm text-neutral-500 w-full text-center"
          >Пока пусто...</span
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import { FilterMatchMode } from 'primevue/api'
import { ALL_PRODUCTS, ALL_GROUPS, ALL_MASTERS } from '@/gql/STOCK'
useHead({
  title: 'Создание услуги'
})
definePageMeta({
  middleware: 'auth'
})

const cabinet = ref()

const masters = ref()

const { result: allM } = useQuery(ALL_MASTERS)
const allMasters = computed(() => allM.value?.usersPermissionsUsers?.data ?? [])

//programm

const allPrograms = ref([])
const allProgramsCom = computed(() => {
  return allPrograms.value
})

const programmName = ref('')

function setProgramm () {
  allPrograms.value.push(programmName.value)
  programmName.value = ''
}

function deleteProgram (item) {
  console.log(item)
  const data = allPrograms.value.filter(x => x !== item)
  allPrograms.value = data
}

//components

const allComponents = ref([])
const allComponentsCom = computed(() => {
  return allComponents.value
})

const ComponentsName = ref('')

function setComponent () {
  allComponents.value.push(ComponentsName.value)
  ComponentsName.value = ''
}

function deleteComponent (item) {
  console.log(item)
  const data = allComponents.value.filter(x => x !== item)
  allComponents.value = data
}

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
  const data = {
    ...item,
    valueKol: 1
  }
  allProductsComAdd.value.push(data)
}

function addKol (item, val) {
  allProductsComAddDone.value.forEach(element => {
    if (element.id == item) {
      console.log(element.attributes.Name)
    }
  })
  // allProductsComAdd.value[0].valueKol = val
  console.log(item, val)
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
const visible = ref(false)
onMounted(() => {
  setTimeout(() => {
    visible.value = true
  }, 1000);
  initFilters()
})
</script>

<style lang="scss" scoped></style>
