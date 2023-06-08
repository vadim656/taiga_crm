<script setup>
import { FilterMatchMode } from 'primevue/api'
import { useConfirm } from 'primevue/useconfirm'
import { useToast } from 'primevue/usetoast'
import { watchDeep } from '@vueuse/core'
useHead({
  title: 'TAIGA CRM - Услуги'
})
definePageMeta({
  middleware: 'auth'
})

const confirm = useConfirm()
const toast = useToast()

// allProducts
const {
  pending: pendingServices,
  data: services,
  refresh: refreshServices
} = await useFetch('/api/entity/assortment?order=code,desc', {
  method: 'GET',
  headers: {
    Authorization: 'Basic YWRtaW5AbW1wY2FwaXRhbDE6ZjkzZWMzMmVlYQ=='
  }
})

// allGroups
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

const groupsAll = computed(() => groups.value?.rows ?? [])

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

// createProduct

const step = ref(1)

const createView = ref(false)

const createProduct = ref({
  name: '',
  group: {},
  type: '',
  price: 1,
  priceZakup: 1,
  priceMin: 1,
  img: '',
  art: '',
  izmerenie: '',
  prodolzhitelnost: ''
})

// type

const selectedType = ref()
const types = ref([
  { name: 'Товар', code: '1' },
  { name: 'Комплект / Услуга', code: '2' }
])

// ezmerenie
const selectedEzmerenie = ref()
const ezmerenies = ref([
  { name: 'Штука / Упаковка', code: '19f1edc0-fc42-4001-94cb-c9ec9c62ec10' },
  { name: 'Минута', code: 'e673f0ca-965d-4fa6-b419-e5dff6c26ba0' },
  { name: 'Миллилитр', code: '8e2eb543-99e9-4077-bc31-93b1359de9c4' },
  { name: 'Грамм', code: 'e1d65ea9-067b-4e22-bd4a-c0c745d6785e' }
])

//group

const selectedGroup = ref()

// complect

const complect = ref({
  name: '',
  productFolder: {
    meta: {
      href: '',
      metadataHref:
        'https://online.moysklad.ru/api/remap/1.2/entity/group/metadata',
      type: 'productfolder',
      mediaType: 'application/json'
    }
  },
  // discountProhibited: false,
  minPrice: {
    value: 1,
    currency: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
        type: 'currency',
        mediaType: 'application/json'
      }
    }
  },
  salePrices: [
    {
      value: 1,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      },
      priceType: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/804d661d-fc63-11ed-0a80-000d00187fdb',
          type: 'pricetype',
          mediaType: 'application/json'
        },
        id: '804d661d-fc63-11ed-0a80-000d00187fdb',
        name: 'Цена продажи',
        externalCode: 'cbcf493b-55bc-11d9-848a-00112f43529a'
      }
    }
  ]
})

//watchers

watchDeep(createProduct, obj => {
  complect.value.name = obj.name
})

watch(selectedType, e => {
  selectedEzmerenie.value = null
  console.log(e)
})
watch(selectedEzmerenie, e => {
  console.log(e)
})

watchDeep(createProduct, obj => {
  if (obj) {
    complect.value.productFolder.meta.href =
      'https://online.moysklad.ru/api/remap/1.2/entity/group/' + obj.group.id
  }
})

watch(selectedGroup, e => {
  if (e && e.id) {
  }
})
watch(createView, () => {
  if (createView.value == false) {
    selectedEzmerenie.value = null
    selectedGroup.value = {}
    selectedType.value = null
    createProduct.value.name = ''
    complect.value.name = ''
    complect.value.salePrices[0].value = 1
    complect.value.minPrice = 1
    createProduct.value.priceZakup = 1
    step.value = 1
  }
})

// createProductAdd

const createProductAdd = ref(false)

const dataAddProductArray = ref([])

watchDeep(dataAddProductArray, obj => {
  console.log('dataAddProductArray', obj)
})

function addProductToArray (data) {
  const dataProduct = {
    name: data.name,
    volume: Number(data.volume),
    newVolume: Number(data.volume),
    weight: Number(data.weight),
    newWeight: Number(data.weight),
    assortment: {
      meta: {
        href: `http://online.moysklad.ru/api/remap/1.2/entity/product/${data.id}`,
        metadataHref:
          'http://online.moysklad.ru/api/remap/1.2/entity/product/metadata',
        type: 'product',
        mediaType: 'application/json'
      }
    },
    quantity: 1
  }
  dataAddProductArray.value.push(dataProduct)
  createProductAdd.value = false
}

function deleteProductInArray (i) {
  console.log(i)

  const newData = dataAddProductArray.value.filter(
    x => dataAddProductArray.value.indexOf(x) !== i
  )
  dataAddProductArray.value = newData
}

function checkKolVo (num, i) {
  console.log(num)
  dataAddProductArray.value[i].quantity = Number(num)
  if (dataAddProductArray.value[i].volume > 0) {
    dataAddProductArray.value[i].newVolume =
      num * dataAddProductArray.value[i].volume
  } else if (dataAddProductArray.value[i].weight > 0) {
    dataAddProductArray.value[i].newWeight =
      num * dataAddProductArray.value[i].weight
  }
}

function createProductChange () {
  complect.value.minPrice.value = Number(complect.value.minPrice.value * 100)
  complect.value.salePrices[0].value = Number(
    complect.value.salePrices[0].value * 100
  )
  if (selectedType.value.code == '2') {
    complect.value['components'] = []
    dataAddProductArray.value.forEach(x => {
      const data = {
        assortment: {
          ...x.assortment
        },
        quantity: x.quantity
      }
      complect.value.components.push(data)
    })

    createProductFinish()
  } else if (selectedType.value.code == '1') {
    complect.value['oum'] = {}
    complect.value.oum = {
      meta: {
        href: `https://online.moysklad.ru/api/remap/1.2/entity/uom/${selectedEzmerenie.value.code}`,
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/uom/metadata',
        type: 'uom',
        mediaType: 'application/json'
      }
    }
    complect.value['buyPrice'] = {}
    complect.value.buyPrice = {
      value: Number(createProduct.value.priceZakup * 100),
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json'
        }
      }
    }
    createProductFinish()
    console.log('create product', complect.value)
  }
}

async function createProductFinish () {
  const data = complect.value
  console.log('createProductFinish', data)
  if (selectedType.value.code == '2') {
    await useFetch(() => '/api/entity/bundle', {
      method: 'POST',
      headers: {
        Authorization: 'Basic YWRtaW5AbW1wY2FwaXRhbDE6ZjkzZWMzMmVlYQ==',
        'Content-Type': 'application/json;charset=utf-8',
        Accept: 'application/json;charset=utf-8'
      },
      body: JSON.stringify(data),
      credentials: 'omit'
    })
      .then(res => {
        if (res.data.value) {
          setTimeout(() => {
            createView.value = false
            step.value = 1
            toast.add({
              severity: 'info',
              summary: 'Успешно',
              detail: `Товар создан`,
              life: 2000
            })
            refreshServices()
          })
        } else {
          toast.add({
            severity: 'error',
            summary: 'Неудача',
            detail: 'Что то пошло не так',
            life: 2000
          })
        }
        console.log(res.data.value)
      })
      .catch(err => {
        console.log(err)
      })
  } else {
    console.log('222')
    await useFetch(() => '/api/entity/product', {
      method: 'POST',
      headers: {
        Authorization: 'Basic YWRtaW5AbW1wY2FwaXRhbDE6ZjkzZWMzMmVlYQ==',
        'Content-Type': 'application/json;charset=utf-8',
        Accept: 'application/json;charset=utf-8'
      },
      body: JSON.stringify(data),
      credentials: 'omit'
    })
      .then(res => {
        if (res.data.value) {
          setTimeout(() => {
            createView.value = false
            toast.add({
              severity: 'info',
              summary: 'Успешно',
              detail: `Товар создан`,
              life: 2000
            })
            refreshServices()
            step.value = 1
          })
        } else {
          toast.add({
            severity: 'error',
            summary: 'Неудача',
            detail: 'Что то пошло не так',
            life: 2000
          })
        }
        console.log(res.data.value)
      })
      .catch(err => {
        console.log(err)
      })
  }
}
</script>
<template>
  <div>
    <Toast position="bottom-right" />
    <ConfirmPopup></ConfirmPopup>
    <!-- <pre class="text-xs">{{ complect }}</pre> -->

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
            <ButtonsBDelete @click="createView = true" icon="plus" type="add"
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
          style="width: 13%"
          class="text-xs text-gray-400"
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
        <Column field="id" header="Тип" style="width: 10%" class="text-sm">
          <template #body="slotProps">
            <div class="flex items-center gap-2">
              <span
                v-if="slotProps.data.meta.type == 'product'"
                class="font-bold"
                >Товар</span
              >
              <span v-else class="font-bold">Услуга</span>
            </div>
          </template>
        </Column>
        <!-- <Column
          header="Остатки"
          field="stock"
          filterField="stock"
          sortable
          style="width: 2%"
          class="text-sm"
          ><template #body="slotProps">
            <div class="flex items-center gap-2">
              <span
                class="font-bold"
                :class="[
                  slotProps.data.stock >= 2 ? 'text-green-400' : 'text-red-400'
                ]"
                >{{ slotProps.data.stock }}</span
              >
            </div>
          </template>
        </Column> -->
        <Column field="archived" style="width: 1%" class="text-sm"
          ><template #body="slotProps">
            <div class="flex items-center gap-2">
              <span v-if="slotProps.data.archived == false" class="font-bold">
                <div class="rounded-full w-3 h-3 bg-green-400"></div>
              </span>
              <span v-else class="font-bold"
                ><div class="rounded-full w-3 h-3 bg-red-400"></div
              ></span>
            </div>
          </template>
        </Column>
        <Column field="id" header="" style="width: 4%" class="text-sm">
          <template #body="slotProps">
            <div class="flex items-center gap-2">
              <!-- <button
                @click="editProduct(slotProps.data)"
                class="font-medium hover:underline"
              >
                <IconsIEdit />
              </button> -->
              <button @click="confirm1($event, slotProps.data.id)">
                <IconsIArhive class="w-5 h-5 text-red-400" />
              </button>
            </div>
          </template>
        </Column>
      </DataTable>

      <!-- @page="pageEventProducts" -->
    </ClientOnly>
    <Dialog
      v-model:visible="createView"
      modal
      header="Создать товар"
      class="w-full max-w-[700px]"
      ><div class="py-2">
        <div v-show="step == 1" class="flex flex-col gap-4">
          <div class="grid grid-cols-2 gap-4">
            <Dropdown
              v-model="selectedType"
              :options="types"
              optionLabel="name"
              placeholder="Тип товара"
              class="w-full"
            >
            </Dropdown>

            <Dropdown
              v-model="createProduct.group"
              :options="groupsAll"
              filter
              optionLabel="name"
              placeholder="Группа"
              class="w-full"
            >
              <template #value="slotProps">
                <div v-if="slotProps.value" class="flex align-items-center">
                  <div>{{ slotProps.value.name }}</div>
                </div>
                <span v-else>
                  {{ slotProps.placeholder }}
                </span>
              </template>
              <template #option="slotProps">
                <div class="flex align-items-center">
                  <div>{{ slotProps.option.name }}</div>
                </div>
              </template>
            </Dropdown>
          </div>
          <!-- add product to complect -->
          <div v-if="selectedType && selectedType.code == '2'" class="blockT">
            <div class="flex flex-col divide-y divide-gray-500">
              <div
                v-for="(item, i) in dataAddProductArray"
                :key="i"
                class="px-2 py-2 flex items-center gap-2 justify-between"
              >
                <span class="text-xs w-[64%]">{{ item.name }}</span>

                <div class="flex gap-3 items-center w-36">
                  <input
                    step="0.01"
                    type="number"
                    @change="checkKolVo($event.target.value, i)"
                    :value="1"
                    min="0.01"
                    class="border border-gray-600 w-16 p-1.5 rounded-md"
                  />
                  <!-- v-model="dataAddProductArray[i].quantity" -->
                  <span v-if="item.volume > 0" class="text-xs text-gray-400"
                    >{{ item.newVolume.toFixed(1) }} мл.</span
                  >
                  <span
                    v-else-if="item.weight > 0"
                    class="text-xs text-gray-400"
                    >{{ item.newWeight.toFixed(1) }} гр.</span
                  >
                  <span v-else class="text-xs text-gray-400">шт.</span>
                </div>
                <button @click="deleteProductInArray(i)">
                  <IconsIDelete class="w-4 h-4" />
                </button>
                <!-- <pre class="text-xs">{{ item }}</pre> -->
              </div>
            </div>
            <button
              @click="createProductAdd = true"
              class="flex items-center gap-4 bg-gray-700 py-3 rounded-md justify-center w-full"
              :class="[dataAddProductArray.length >= 1 ? ' mt-4' : '']"
            >
              <IconsIPlus class="w-4 h-4" />
              <span class="text-xs">Добавить позицию</span>
            </button>
          </div>
          <div class="grid grid-cols-2 gap-4">
            <Dropdown
              v-if="selectedType && selectedType.code == '1'"
              v-model="selectedEzmerenie"
              :options="ezmerenies"
              optionLabel="name"
              placeholder="Единица измерения"
              class="w-full"
            >
            </Dropdown>
            <div v-if="selectedEzmerenie && selectedType.code == '1'" class="">
              <span
                v-if="
                  selectedEzmerenie.code ==
                  'e673f0ca-965d-4fa6-b419-e5dff6c26ba0'
                "
                class="p-float-label"
              >
                <InputText
                  id="username"
                  v-model="createProduct.prodolzhitelnost"
                  class="w-full"
                />
                <label for="username">Продолжительность</label>
              </span>
              <span
                v-else-if="
                  selectedEzmerenie.code ==
                  'e1d65ea9-067b-4e22-bd4a-c0c745d6785e'
                "
                class="p-float-label"
              >
                <InputText
                  id="username"
                  v-model="createProduct.prodolzhitelnost"
                  class="w-full"
                />
                <label for="username">Вес в граммах</label>
              </span>
              <span
                v-else-if="
                  selectedEzmerenie.code ==
                  '8e2eb543-99e9-4077-bc31-93b1359de9c4'
                "
                class="p-float-label"
              >
                <InputText
                  id="username"
                  v-model="createProduct.prodolzhitelnost"
                  class="w-full"
                />
                <label for="username">Обьем в миллилитрах</label>
              </span>
            </div>
          </div>

          <span class="p-float-label">
            <InputText
              id="username"
              v-model="createProduct.name"
              class="w-full"
            />
            <label for="username">Наименование</label>
          </span>
        </div>
        <div v-show="step == 2" class="grid grid-cols-1 gap-4">
          <span
            >Настройка цены
            {{ selectedType?.code == '1' ? 'Товар' : 'Комплект' }}</span
          >

          <div v-if="selectedType?.code == '1'" class="grid grid-cols-2 gap-4">
            <span class="p-float-label">
              <InputNumber
                id="ost"
                v-model="createProduct.priceZakup"
                class="w-full"
              />
              <label for="ost">Закупочная цена</label>
            </span>
            <span class="p-float-label">
              <InputNumber
                id="ost"
                v-model="complect.minPrice.value"
                class="w-full"
              />
              <label for="ost">Минимальная цена</label>
            </span>
            <span class="p-float-label">
              <InputNumber
                id="price"
                v-model="complect.salePrices[0].value"
                class="w-full"
              />
              <label for="price">Розничная цена</label>
            </span>
          </div>

          <div v-else class="grid grid-cols-2 gap-4">
            <span class="p-float-label">
              <InputNumber
                id="ost"
                v-model="complect.minPrice.value"
                class="w-full"
              />
              <label for="ost">Минимальная цена</label>
            </span>
            <span class="p-float-label">
              <InputNumber
                id="price"
                v-model="complect.salePrices[0].value"
                class="w-full"
              />
              <label for="price">Розничная цена</label>
            </span>
          </div>
        </div>

        <pre class="text-xs">{{}}</pre>
      </div>

      <template #footer>
        <div class="w-full flex justify-between">
          <Button
            label="Отменить"
            icon="pi pi-times"
            @click="createView = false"
            text
            class="!bg-red-500 !text-white"
          />
          <div class="flex justify-end gap-2">
            <Button
              v-if="step == 2"
              @click="step--"
              label="Назад"
              autofocus
              class="!bg-transparent !text-white"
            />
            <Button
              v-if="step == 1"
              @click="step++"
              label="Продолжить"
              icon="pi pi-check"
              autofocus
              class="!bg-green-500 !text-white"
            />
            <Button
              v-if="step == 2"
              label="Создать"
              icon="pi pi-check"
              @click="createProductChange()"
              autofocus
              class="!bg-green-500 !text-white"
            />
          </div>
        </div>
      </template>
    </Dialog>
    <Dialog
      v-model:visible="createProductAdd"
      modal
      header="Добавить товар в комплект/услугу"
      class="w-full max-w-[1000px]"
    >
      <div class="py-2">
        <div>
          <ClientOnly placeholder="Загрузка...">
            <DataTable
              :value="services.rows"
              stripedRows
              v-model:filters="filters"
              :globalFilterFields="['name', 'pathName']"
              class="rounded-t-md overflow-hidden"
              paginator
              :rows="8"
              :rowsPerPageOptions="[8, 20, 50]"
            >
              <template #header>
                <div class="flex justify-between w-full">
                  <InputText
                    v-model="filters['global'].value"
                    placeholder="Поиск по продукции"
                    class="w-full"
                  />
                </div>
              </template>
              <Column
                field="code"
                filterField="code"
                header="Арт"
                class="text-sm"
              ></Column>
              <Column
                field="name"
                filterField="name"
                header="Наименование"
                class="text-sm"
                sortable
              >
                <template #body="slotProps">
                  <div class="flex items-center gap-2">
                    <span class="truncate">{{ slotProps.data.name }}</span>
                  </div>
                </template></Column
              >
              <Column field="id" header="Цена" class="text-sm">
                <template #body="slotProps">
                  <div class="flex items-center gap-2">
                    <span class="font-bold"
                      >{{
                        initPrice(slotProps.data.salePrices[0].value)
                      }}
                      ₽</span
                    >
                  </div>
                </template>
              </Column>
              <Column class="text-sm">
                <template #body="slotProps">
                  <button
                    @click="addProductToArray(slotProps.data)"
                    class="flex items-center gap-2"
                  >
                    <span class="font-bold">Добавить</span>
                  </button>
                </template>
              </Column>
            </DataTable>

            <!-- @page="pageEventProducts" -->
          </ClientOnly>
        </div>
      </div>

      <template #footer>
        <Button
          label="Отменить"
          icon="pi pi-times"
          @click="createProductAdd = false"
          text
          class="!bg-red-500 !text-white"
        />
        <Button
          label="Добавить"
          icon="pi pi-check"
          @click="createProduct('sdfsdf')"
          autofocus
          class="!bg-green-500 !text-white"
        />
      </template>
    </Dialog>
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
  </div>
</template>

<style lang="scss" scoped></style>
