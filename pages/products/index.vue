<script setup>
import { FilterMatchMode } from 'primevue/api'
import { ALL_PRODUCTS } from '@/gql/query/PRODUCT'
definePageMeta({
  middleware: 'auth'
})

const pageStart = ref(1)
const { result: products } = useQuery(
  ALL_PRODUCTS,
  () => ({
    PAGE: pageStart.value,
    PAGE_SIZE: 10
  }),
  {
    fetchPolicy: 'no-cache'
  }
)

const dataProductsMeta = computed(
  () => products.value?.products.meta.pagination.total ?? 1
)

const dataProductsData = computed(() => products.value?.products.data ?? [])

const pageEventProducts = page => {
  pageStart.value = page.page + 1
}

const filters = ref({
  global: { value: null, matchMode: FilterMatchMode.CONTAINS },
  'attributes.Name': { value: null, matchMode: FilterMatchMode.CONTAINS },
  'attributes.ART': { value: null, matchMode: FilterMatchMode.CONTAINS }
})

// edit
const modalEdit = ref(null)

const editProduct = id => {
  modalEdit.value.modalView = true
}

//create product
const modalAdd = ref(false)

const productDataAdd = ref({
  name: 'Маска для лица',
  price: 100,
  art: 'werre',
  ostatki: 1,
  status: true,
  desc: ''
})

function addProduct () {
  modalAdd.value = true
}

function buy (id) {}

function createProduct (text) {
  console.log(text)
  modalAdd.value = false
}
</script>
<template>
  <div>
    <div>
      <ClientOnly placeholder="Загрузка...">
        <DataTable
          :value="dataProductsData"
          stripedRows
          removableSort
          v-model:filters="filters"
          :globalFilterFields="['attributes.Name', 'attributes.ART']"
          class="rounded-t-md overflow-hidden"
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
            field="attributes.ART"
            filterField="attributes.ART"
            header="Арт"
            style="width: 10%"
            class="text-sm"
          ></Column>
          <Column
            field="attributes.Name"
            filterField="attributes.Name"
            header="Наименование"
            sortable
            class="text-sm"
          ></Column>
          <Column
            field="attributes.Price"
            filterField="attributes.Price"
            header="Цена"
            sortable
            class="text-sm"
          ></Column>
          <Column
            field="attributes.Ostatki"
            filterField="attributes.Ostatki"
            header="Остатки"
            sortable
            class="text-sm"
          ></Column>
          <Column
            field="attributes.Rating"
            filterField="attributes.Rating"
            header="Рейтинг"
            sortable
            class="text-sm"
          ></Column>
          <Column field="id" header="Статус" style="width: 6%" class="text-sm">
            <template #body="slotProps">
              <div class="flex items-center gap-2 justify-end">
                <div
                  v-if="slotProps.data.attributes.Active == true"
                  class="w-3 h-3 bg-green-500 rounded-full"
                ></div>
                <div v-else class="w-3 h-3 bg-red-500 rounded-full"></div>
              </div>
            </template>
          </Column>
          <Column
            field="id"
            header="Действия"
            style="width: 8%"
            class="text-sm"
          >
            <template #body="slotProps">
              <div class="flex items-center gap-2 justify-end">
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
        <Paginator
          :rows="10"
          :totalRecords="dataProductsMeta"
          :rowsPerPageOptions="[10, 20, 50]"
          @page="pageEventProducts"
          class="rounded-b-md overflow-hidden"
        ></Paginator>
      </ClientOnly>
    </div>
    <Dialog
      v-model:visible="modalAdd"
      modal
      header="Добавить товар"
      class="dark:bg-red-300"
      ><div class="py-2">
        <div class="grid grid-cols-1 gap-4">
          <span class="p-float-label">
            <InputText
              id="username"
              v-model="productDataAdd.name"
              class="w-full"
            />
            <label for="username">Наименование</label>
          </span>
          <div class="grid grid-cols-2 gap-4">
            <span class="p-float-label">
              <InputNumber
                id="price"
                v-model="productDataAdd.price"
                class="w-full"
              />
              <label for="price">Цена</label>
            </span>
            <span class="p-float-label">
              <InputNumber
                id="ost"
                v-model="productDataAdd.ostatki"
                class="w-full"
              />
              <label for="ost">Остатки</label>
            </span>
          </div>

          <span class="p-float-label">
            <InputText id="art" v-model="productDataAdd.art" class="w-full" />
            <label for="art">Артикул</label>
          </span>
          <div class="flex justify-between items-center gap-2 mt-2">
            <span>Статус</span>
            <InputSwitch v-model="productDataAdd.status" />
          </div>
        </div>
      </div>

      <template #footer>
        <Button
          label="Отменить"
          icon="pi pi-times"
          @click="modalAdd = false"
          text
          class="!bg-red-500 !text-white"
        />
        <Button
          label="Создать"
          icon="pi pi-check"
          @click="createProduct('sdfsdf')"
          autofocus
          class="!bg-green-500 !text-white"
        />
      </template>
    </Dialog>
  </div>
</template>

<style></style>
