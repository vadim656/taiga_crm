<script setup>
import { FilterMatchMode } from 'primevue/api'
import { useConfirm } from 'primevue/useconfirm'
import { useToast } from 'primevue/usetoast'
import { v4 as uuidv4 } from 'uuid'
import { ALL_PRODUCTS, ALL_GROUPS } from '@/gql/STOCK'
useHead({
  title: 'TAIGA CRM - Услуги'
})
definePageMeta({
  middleware: 'auth'
})
const router = useRouter()

const confirm = useConfirm()
const toast = useToast()

// allProducts

const { result: allProducts } = useQuery(ALL_PRODUCTS)
const allProductsCom = computed(() => allProducts.value?.products.data ?? [])

const allProductsComService = computed(() => {
  return allProductsCom.value.filter(x => x.attributes.Type == true)
})

const { result: allGroups } = useQuery(ALL_GROUPS)
const allGroupsCom = computed(() => allGroups.value?.groups.data ?? [])

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

const initPrice = price => {
  const pre = price * 0.01
  const done = pre.toLocaleString('ru-RU')
  return done
}

// edit
const editView = ref(false)

const productDataAdd = ref()

function editProduct (data) {
  editView.value = true
  productDataAdd.value = data
  console.log('data', data)
}

async function deleteProduct (id) {
  let formData = {
    archived: true
  }
  await useFetch(() => `/api/entity/product/${id}`, {
    method: 'PUT',
    headers: {
      Authorization: 'Basic YWRtaW5AbW1wY2FwaXRhbDE6ZjkzZWMzMmVlYQ==',
      'Content-Type': 'application/json;charset=utf-8',
      Accept: 'application/json;charset=utf-8'
    },
    body: JSON.stringify(formData),
    credentials: 'omit'
  })
    .then(() => {
      toast.add({
        severity: 'info',
        summary: 'Успешно',
        detail: 'Товар помещен в архив',
        life: 2000
      })
      refreshServices()
    })
    .catch(err => {
      toast.add({
        severity: 'error',
        summary: 'Неудача',
        detail: 'Что то пошло не так',
        life: 2000
      })
    })
}

const confirm1 = (event, id) => {
  confirm.require({
    target: event.currentTarget,
    message: 'Вы уверены что хотите поместить в архив?',
    icon: 'pi pi-exclamation-triangle',
    accept: () => {
      deleteProduct(id)
    },
    reject: () => {
      toast.add({
        severity: 'error',
        summary: 'Отмена',
        detail: 'Действие отменено',
        life: 2000
      })
    }
  })
}

// prihod

const prihodProduct = ref(false)

const value2 = ref(1)
const idProduct = ref()

const dateDoc = ref()
const document = ref('')

const prihodProductData = id => {
  prihodProduct.value = true
  idProduct.value = id
  console.log('prihod', id)
}

let options = {
  hour: 'numeric',
  minute: 'numeric',
  year: 'numeric',
  month: 'numeric',
  day: 'numeric'
}

const dataCorrection = time => {
  const x = new Date(time)
  return x.toLocaleString('ru', options)
}

const dateCom = computed(() => {
  const d = new Date(dateDoc.value)
  var datestring =
    d.getDate() +
    '-' +
    (d.getMonth() + 1) +
    '-' +
    d.getFullYear() +
    ' ' +
    d.getHours() +
    ':' +
    d.getMinutes()
  return datestring
})

const dataProductPrihod = async () => {
  let enter = {
    name: uuidv4(),
    organization: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/organization/804b181a-fc63-11ed-0a80-000d00187fc7',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata',
        type: 'organization',
        mediaType: 'application/json'
      }
    },
    store: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/store/804c5356-fc63-11ed-0a80-000d00187fcf',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/store/metadata',
        type: 'store',
        mediaType: 'application/json'
      }
    },
    positions: [
      {
        quantity: value2.value,
        assortment: {
          meta: {
            href: `https://online.moysklad.ru/api/remap/1.2/entity/product/${idProduct.value}`,
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/product/metadata',
            type: 'product',
            mediaType: 'application/json'
          }
        }
      }
    ],
    description: `Дата документа: ${dateCom.value}`,
    reason: `Обновленная причина ${document.value}`
  }

  await useFetch('/api/entity/enter', {
    method: 'POST',
    headers: {
      Authorization: 'Basic YWRtaW5AbW1wY2FwaXRhbDE6ZjkzZWMzMmVlYQ==',
      'Content-Type': 'application/json;charset=utf-8',
      Accept: 'application/json;charset=utf-8'
    },
    body: JSON.stringify(enter),
    credentials: 'omit'
  })
    .then(() => {
      setTimeout(() => {
        prihodProduct.value = false
        toast.add({
          severity: 'info',
          summary: 'Успешно',
          detail: `Приход создан`,
          life: 2000
        })
      }, 500)
      refreshServices()
    })
    .catch(err => {
      console.log(err)
      toast.add({
        severity: 'error',
        summary: 'Неудача',
        detail: 'Что то пошло не так',
        life: 2000
      })
    })
}

// history

const modalViewHistory = ref(false)

const historyData = ref()

const modalViewHistoryOpen = async id => {
  console.log('prihod history', id)
  await useFetch(
    `/api/entity/enter?filter=assortment=https://online.moysklad.ru/api/remap/1.2/entity/product/${id}`,
    {
      method: 'GET',
      headers: {
        Authorization: 'Basic YWRtaW5AbW1wY2FwaXRhbDE6ZjkzZWMzMmVlYQ==',
        'Content-Type': 'application/json;charset=utf-8',
        Accept: 'application/json;charset=utf-8'
      }
    }
  )
    .then(res => {
      historyData.value = res.data.value.rows
      modalViewHistory.value = true
    })
    .catch(err => {
      console.log(err)
    })
}

const modalViewHistoryOne = ref(false)

const historyDataOne = ref()

const modalViewHistoryOpenOne = (name, id) => {
  const routeData = router.resolve({
    path: '/finance/prihod-' + name + '/' + id
  })
  window.open(routeData.href, '_blank')
}

function getProduct (id) {
  router.push('/stock/product/' + id)
}

function getURL(url) {
  router.push(url)
  
}
</script>
<template>
  <div>
    <Toast position="bottom-right" />
    <ConfirmPopup></ConfirmPopup>
    <TabView class="w-full">
      <TabPanel header="Услуги">
        <ClientOnly placeholder="Загрузка...">
          <DataTable
            :value="allProductsComService"
            stripedRows
            removableSort
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
                  placeholder="Поиск по услугам"
                  class="w-full"
                />

                <ButtonsBDelete @click="getURL('/stock/createusluga')" icon="plus" type="add"
                  >Добавить</ButtonsBDelete
                >
              </div>
            </template>
            <Column
              field="attributes.group.data.attributes.Name"
              filterField="attributes.group.data.attributes.Name"
              header="Наименование"
              style="width: 30%"
              class="text-sm"
              sortable
            >
              <template #body="slotProps">
                <div class="flex items-center gap-2">
                  <span class="">{{ slotProps.data.attributes.Name }}</span>
                </div>
              </template>
            </Column>
            <Column
              field="attributes.group.data.attributes.Name"
              filterField="attributes.group.data.attributes.Name"
              header="Группа"
              class="text-sm"
              sortable
            >
              <template #body="slotProps">
                <div class="flex items-center gap-2">
                  <span class="truncate"
                    >{{ slotProps.data.attributes.group.data.attributes.Name }}
                  </span>
                </div>
              </template>
            </Column>
            <Column
              field="attributes.Unit"
              filterField="attributes.Unit"
              header="Длительность"
              class="text-sm"
              sortable
            >
              <template #body="slotProps">
                <div class="flex items-center gap-2">
                  <span
                    v-if="slotProps.data.attributes.Unit == 'Millilitr'"
                    class=""
                    >Мл.
                  </span>
                  <span
                    v-else-if="slotProps.data.attributes.Unit == 'Shtuka'"
                    class=""
                    >Шт.
                  </span>
                  <span
                    v-else-if="slotProps.data.attributes.Unit == 'Gramm'"
                    class=""
                    >Гр.
                  </span>
                  <span
                    v-else-if="slotProps.data.attributes.Unit == 'Minuta'"
                    class=""
                    >Мин.
                  </span>
                </div>
              </template>
            </Column>
            <Column
              field="attributes.Price"
              filterField="attributes.Price"
              header="Цена"
              class="text-sm"
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
                <div class="flex items-center gap-2">
                  <button
                    @click="getProduct(slotProps.data.id)"
                    v-tooltip.left="'Редактировать'"
                    class="flex items-center gap-2 p2-3 py-2"
                  >
                    <IconsIEdit class="w-5 h-5 text-blue-600" />
                  </button>
                  <button
                    @click="modalViewHistoryOpen(slotProps.data.id)"
                    class="flex items-center gap-2 bg-green-600 rounded-md px-3 py-2"
                  >
                    <IconsIPlus class="w-5 h-5 text-white" /> История
                  </button>
                </div>
              </template>
            </Column>
          </DataTable>
        </ClientOnly>
      </TabPanel>
      <TabPanel header="Товары">
        <ClientOnly placeholder="Загрузка...">
          <DataTable
            :value="allProductsCom"
            stripedRows
            removableSort
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
                  placeholder="Поиск по услугам"
                  class="w-full"
                />

                <ButtonsBDelete @click="addProduct" icon="plus" type="add"
                  >Добавить</ButtonsBDelete
                >
              </div>
            </template>
            <Column
              field="attributes.group.data.attributes.Name"
              filterField="attributes.group.data.attributes.Name"
              header="Наименование"
              style="width: 30%"
              class="text-sm"
              sortable
            >
              <template #body="slotProps">
                <div class="flex items-center gap-2">
                  <span class="">{{ slotProps.data.attributes.Name }}</span>
                </div>
              </template>
            </Column>
            <Column
              field="attributes.group.data.attributes.Name"
              filterField="attributes.group.data.attributes.Name"
              header="Группа"
              class="text-sm"
              sortable
            >
              <template #body="slotProps">
                <div class="flex items-center gap-2">
                  <span class="truncate"
                    >{{ slotProps.data.attributes.group.data.attributes.Name }}
                  </span>
                </div>
              </template>
            </Column>
            <Column
              field="attributes.Unit"
              filterField="attributes.Unit"
              header="Ед."
              class="text-sm"
              sortable
            >
              <template #body="slotProps">
                <div class="flex items-center gap-2">
                  <span
                    v-if="slotProps.data.attributes.Unit == 'Millilitr'"
                    class=""
                    >Мл.
                  </span>
                  <span
                    v-else-if="slotProps.data.attributes.Unit == 'Shtuka'"
                    class=""
                    >Шт.
                  </span>
                  <span
                    v-else-if="slotProps.data.attributes.Unit == 'Gramm'"
                    class=""
                    >Гр.
                  </span>
                  <span
                    v-else-if="slotProps.data.attributes.Unit == 'Minuta'"
                    class=""
                    >Мин.
                  </span>
                </div>
              </template>
            </Column>
            <Column
              field="attributes.purchasePrice"
              filterField="attributes.purchasePrice"
              header="Закупка"
              class="text-sm"
              sortable
            >
              <template #body="slotProps">
                <div class="flex items-center gap-2">
                  <span class="truncate"
                    >{{ slotProps.data.attributes.purchasePrice }} ₽</span
                  >
                </div>
              </template>
            </Column>
            <Column
              field="attributes.Price"
              filterField="attributes.Price"
              header="Цена"
              class="text-sm"
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
            
            <Column
              header="Остатки"
              field="attributes.Ostatki"
              filterField="attributes.Ostatki"
              sortable
              class="text-sm"
              ><template #body="slotProps">
                <div class="flex items-center gap-2">
                  <span
                    class="font-bold"
                    :class="[
                      slotProps.data.attributes.Ostatki >= 2
                        ? 'text-green-400'
                        : 'text-red-400'
                    ]"
                    >{{ slotProps.data.attributes.Ostatki }}</span
                  >
                </div>
              </template>
            </Column>

            <Column field="id" header="" class="text-sm">
              <template #body="slotProps">
                <div class="flex items-center gap-2">
                  <button
                    @click="modalViewHistoryOpen(slotProps.data.id)"
                    class="flex items-center gap-2 bg-green-600 rounded-md px-3 py-2"
                  >
                    <IconsIPlus class="w-5 h-5 text-white" /> История
                  </button>
                </div>
              </template>
            </Column>
          </DataTable>
        </ClientOnly>
      </TabPanel>
      <TabPanel header="Группы">
        <ClientOnly placeholder="Загрузка...">
          <DataTable
            :value="allGroupsCom"
            stripedRows
            removableSort
            v-model:filters="filters"
            :globalFilterFields="['attributes.Name', 'attributes']"
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
                  placeholder="Поиск по услугам"
                  class="w-full"
                />

                <ButtonsBDelete @click="addProduct" icon="plus" type="add"
                  >Добавить</ButtonsBDelete
                >
              </div>
            </template>
            <Column
              field="attributes.Name"
              filterField="attributes.Name"
              header="Наименование"
              style="width: 30%"
              class="text-sm"
              sortable
            >
              <template #body="slotProps">
                <div class="flex items-center gap-2">
                  <span class="">{{ slotProps.data.attributes.Name }}</span>
                </div>
              </template>
            </Column>
            <Column field="id" header="Товаров / Услуг" class="text-sm">
              <template #body="slotProps">
                <div class="flex items-center gap-2">
                  <span>{{
                    slotProps.data.attributes.products.data.length
                  }}</span>
                </div>
              </template>
            </Column>
          </DataTable>
        </ClientOnly>
      </TabPanel>
    </TabView>

    <Dialog
      v-model:visible="editView"
      modal
      header="Редактировать товар"
      class="bg-red-300"
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
                :useGrouping="false"
                id="price"
                v-model="productDataAdd.salePrices[0].value"
                class="w-full"
              />
              <label for="price">Цена</label>
            </span>
            <span class="p-float-label">
              <InputNumber
                id="ost"
                v-model="productDataAdd.stock"
                class="w-full"
              />
              <label for="ost">Остатки</label>
            </span>
          </div>

          <span class="p-float-label">
            <InputText
              id="art"
              v-model="productDataAdd.barcodes[0].ean13"
              class="w-full"
            />
            <label for="art">Артикул</label>
          </span>
          <div class="flex justify-between items-center gap-2 mt-2">
            <span>Статус</span>
            <!-- <InputSwitch v-model="productDataAdd.status" /> -->
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
    <Dialog
      v-model:visible="prihodProduct"
      modal
      header="Приход товара"
      class="bg-red-300"
      ><div class="py-2">
        <div class="grid grid-cols-1 gap-4">
          <InputNumber
            v-model="value2"
            inputId="minmax-buttons"
            mode="decimal"
            showButtons
            :min="1"
            :max="1000"
          />
          <span class="p-float-label w-full">
            <InputText id="username" v-model="document" class="w-full" />
            <label for="username">На основании документа</label>
          </span>
          <span class="p-float-label w-full">
            <Calendar v-model="dateDoc" inputId="birth_date" class="w-full" />
            <label for="birth_date">Дата документа</label>
          </span>
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
          v-if="document.length >= 5 && dateDoc"
          label="Сохранить"
          icon="pi pi-check"
          @click="dataProductPrihod()"
          autofocus
          class="!bg-green-500 !text-white"
        />
      </template>
    </Dialog>
    <Dialog
      v-model:visible="modalViewHistory"
      modal
      header="Приход товара история"
      class="bg-red-300 w-full max-w-[900px]"
    >
      <div class="py-2">
        <div class="flex flex-col gap-4">
          <ClientOnly placeholder="Загрузка...">
            <DataTable
              :value="historyData"
              removableSort
              class="rounded-t-md overflow-hidden"
            >
              <Column field="name" header="№ прихода" style="" class="text-sm">
                <!-- <template #body="slotProps">
              <div class="flex items-center gap-4">
              <pre>{{ slotProps.data }}</pre>
               
              </div>
            </template> -->
              </Column>
              <Column
                field="created"
                header="Дата создания"
                style=""
                class="text-sm"
              >
                <template #body="slotProps">
                  {{ dataCorrection(slotProps.data.created) }}</template
                >
              </Column>
              <Column
                field="positions.meta.size"
                header="Всего позиций"
                style=""
                class="text-sm"
              >
              </Column>
              <Column style="width: 2%" class="text-sm">
                <template #body="slotProps">
                  <button
                    @click="
                      modalViewHistoryOpenOne(
                        slotProps.data.name,
                        slotProps.data.id
                      )
                    "
                  >
                    Подробнее
                  </button></template
                >
              </Column>
            </DataTable>

            <!-- @page="pageEventProducts" -->
          </ClientOnly>
        </div>
        <!-- <pre class="text-sm"> {{ historyData }}</pre> -->
      </div>
      <template #footer>
        <Button
          label="Отменить"
          icon="pi pi-times"
          @click="modalViewHistory = false"
          text
          class="!bg-red-500 !text-white"
        />
        <Button
          v-if="document.length >= 5 && dateDoc"
          label="Сохранить"
          icon="pi pi-check"
          @click="dataProductPrihod()"
          autofocus
          class="!bg-green-500 !text-white"
        />
      </template>
    </Dialog>
    <Dialog
      v-model:visible="modalViewHistoryOne"
      modal
      header="Приход товара история"
      class="bg-red-300"
    >
      <div class="py-2">
        <ClientOnly placeholder="Загрузка...">
          <DataTable
            :value="historyData"
            removableSort
            class="rounded-t-md overflow-hidden"
          >
            <Column field="name" header="№ прихода" style="" class="text-sm">
            </Column>
            <Column
              field="positions.meta.size"
              header="Всего позиций"
              style=""
              class="text-sm"
            >
            </Column>
          </DataTable>

          <!-- @page="pageEventProducts" -->
        </ClientOnly>

        <div class="flex flex-col gap-4">
          <div
            @click="modalViewHistoryOpenOne(item.id)"
            v-for="item in historyDataOne"
            class="border p-2"
          >
            <pre>{{ item }}</pre>
          </div>
        </div>
      </div>
    </Dialog>
  </div>
</template>

<style lang="scss" scoped></style>
