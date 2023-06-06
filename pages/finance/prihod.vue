<script setup>
import { FilterMatchMode } from 'primevue/api'
import { useConfirm } from 'primevue/useconfirm'
import { useToast } from 'primevue/usetoast'
import { v4 as uuidv4 } from 'uuid'
useHead({
  title: 'TAIGA CRM - Оприходования'
})
definePageMeta({
  middleware: 'auth'
})

const confirm = useConfirm()
const toast = useToast()

// allProducts
const {
  pending: pendingprihods,
  data: prihods,
  refresh: refreshprihods
} = await useFetch('/api/entity/enter', {
  method: 'GET',
  headers: {
    Authorization: 'Basic YWRtaW5AbW1wY2FwaXRhbDE6ZjkzZWMzMmVlYQ=='
  }
})

const {
  pending: pendingServices,
  data: services,
  refresh: refreshServices
} = await useFetch('/api/entity/assortment', {
  method: 'GET',
  headers: {
    Authorization: 'Basic YWRtaW5AbW1wY2FwaXRhbDE6ZjkzZWMzMmVlYQ=='
  }
})

const barcodes = computed(() => {
  const data = services.value.rows
  const dataBar = data.map(x => {
    if (x.barcodes.length) {
      if (x.barcodes[0].ean13) {
        const bar = x.barcodes[0].ean13
        return bar
      } else if (x.barcodes[0].code128) {
        const bar = x.barcodes[0].code128
        return bar
      }
      return x
    } else {
      return x
    }
  })
  for (const key in dataBar) {
    data[key].barcode = dataBar[key]
  }
  return data
})

const filters = ref()

const initFilters = () => {
  filters.value = {
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    name: { value: null, matchMode: FilterMatchMode.CONTAINS },
    pathName: { value: null, matchMode: FilterMatchMode.IN },
    barcode: { value: null, matchMode: FilterMatchMode.CONTAINS }
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

let options = {
  hour: 'numeric',
  minute: 'numeric',
  year: 'numeric',
  month: 'numeric',
  day: 'numeric'
}

const dateCom = x => {
  const d = new Date(x)
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
  return datestring.toString()
}

const buttonLoad = ref(false)
const modalView = ref(false)

const fffDATA = ref([])

const fff = async data => {
  console.log(data)
  await useFetch(
    '/api/entity/product' +
      data.replace(
        'https://online.moysklad.ru/api/remap/1.2/entity/product',
        ''
      ),
    {
      method: 'GET',
      headers: {
        Authorization: 'Basic YWRtaW5AbW1wY2FwaXRhbDE6ZjkzZWMzMmVlYQ=='
      }
    }
  )
    .then(res => {
      fffDATA.value.push(res.data.value)
      console.log(res.data.value)
    })
    .catch(err => {
      console.log('err2', err)
    })
  buttonLoad.value = true
  setTimeout(() => {
    modalView.value = true
    buttonLoad.value = false
  }, 400)
}

const numPrihod = async data => {
  fffDATA.value = []
  await useFetch(
    '/api/entity/enter' +
      data.positions.meta.href.replace(
        'https://online.moysklad.ru/api/remap/1.2/entity/enter',
        ''
      ),
    {
      method: 'GET',
      headers: {
        Authorization: 'Basic YWRtaW5AbW1wY2FwaXRhbDE6ZjkzZWMzMmVlYQ=='
      }
    }
  )
    .then(res => {
      console.log('get 1 prihod')
      res.data.value.rows.forEach(element => {
        fff(element.assortment.meta.href)
      })
    })
    .catch(err => {
      console.log('err1', err)
    })
}

const prihodView = ref(false)

const selectedCities = ref()
const selectedProduct = ref([])

const value2 = ref()

const reusePrice = id => {
  console.log('price', id)
}

const reuseQt = id => {
  console.log('qt', id)
}

function isInArray (name) {
  if (selectedProduct.value.some(e => e.name === name)) {
    return true
  }
  return false
}

const reusePriveVal = ref()
const reuseQtVal = ref()

function selectedProductFunc (data) {
  const dataItem = {
    quantity: Number(reuseQtVal.value),
    price: Number(reusePriveVal.value * 100),
    assortment: {
      meta: {
        href: `https://online.moysklad.ru/api/remap/1.2/entity/product/${data.id}`,
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/product/metadata',
        type: 'product',
        mediaType: 'application/json'
      }
    }
  }
  toast.add({
    severity: 'info',
    summary: 'Успешно',
    detail: `Товар ${data.name} добавлен`,
    life: 3000
  })
  selectedProduct.value.push(dataItem)
}

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
    positions: selectedProduct.value
    // description: `Основание документа:  ${document.value} // Дата документа: ${dateCom.value}`
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
        prihodView.value = false
        toast.add({
          severity: 'info',
          summary: 'Успешно',
          detail: `Приход создан`,
          life: 2000
        })
      }, 500)
      refreshServices()
      refreshprihods()
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
</script>
<template>
  <div>
    <Toast position="bottom-right" />
    <ConfirmPopup></ConfirmPopup>
    <!-- <pre class="text-xs">{{ groups.rows }}</pre> -->

    <ClientOnly placeholder="Загрузка...">
      <DataTable
        :value="prihods.rows"
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
            <ButtonsBDelete @click="prihodView = true" icon="plus" type="add"
              >Создать приход</ButtonsBDelete
            >
          </div>
        </template>
        <Column
          field="name"
          filterField="name"
          header="UID"
          style="width: 10%"
          class="text-sm"
        >
          <template #body="slotProps">
            <div class="flex items-center gap-2">
              <span class="font-bold">{{
               slotProps.data.name.slice(0,8)
              }}</span>
            </div>
          </template>
        </Column>
        <Column
          field="created"
          filterField="created"
          header="Создан"
          style="width: 15%"
          class="text-sm"
        >
          <template #body="slotProps">
            <div class="flex items-center gap-2">
              <span class="font-bold">{{
                dateCom(slotProps.data.created)
              }}</span>
            </div>
          </template>
        </Column>
        <Column
          field="sum"
          filterField="sum"
          header="Сумма"
          style="width: 8%"
          class="text-sm"
        >
          <template #body="slotProps">
            <div class="flex items-center gap-2">
              <span>{{ initPrice(slotProps.data.sum) }} ₽</span>
            </div>
          </template>
        </Column>
        <Column
          field="description"
          filterField="description"
          header="Описание"
          class="text-sm"
        ></Column>
        <Column field="id" header="" style="width: 2%" class="text-sm">
          <template #body="slotProps">
            <div class="flex items-center gap-2">
              <Button
                type="button"
                label="Товары"
                icon="pi pi-search"
                :loading="buttonLoad"
                @click="numPrihod(slotProps.data)"
                class="!text-sm"
              />
            </div>
          </template>
        </Column>
      </DataTable>

      <!-- @page="pageEventProducts" -->
    </ClientOnly>
    <Dialog
      v-model:visible="modalView"
      modal
      header="Приход товара"
      class="bg-red-300 w-full"
      ><div class="py-2">
        <div class="grid grid-cols-1 gap-6 w-full">
          <div
            v-for="item in fffDATA"
            class="text-sm border border-gray-600 rounded-md p-4 grid grid-cols-[4fr,1fr,1fr]"
          >
            <span class="">{{ item.name }} </span>
            <span>Закупка: {{ initPrice(item.buyPrice.value)  }} ₽</span>
            <span>Цена продажи: {{ initPrice(item.salePrices[0].value) }} ₽</span>
          </div>
        </div>
      </div>

      <template #footer>
        <Button
          label="Закрыть"
          icon="pi pi-times"
          @click="modalView = false"
          text
          class="!bg-red-500 !text-white"
        />
      </template>
    </Dialog>
    <Dialog
      v-model:visible="prihodView"
      modal
      header="Приход товара"
      class="bg-red-300 w-full mx-10"
      ><div class="py-2 w-full">
        <div class="w-full">
          <ClientOnly placeholder="Загрузка...">
            <DataTable
              :value="barcodes"
              stripedRows
              removableSort
              v-model:filters="filters"
              :globalFilterFields="['name', 'pathName', 'barcode']"
              class="rounded-t-md overflow-hidden"
              paginator
              :rows="6"
              dataKey="barcode"
              filterDisplay="menu"
            >
              <template #header>
                <div class="flex justify-between gap-6">
                  <div>
                    <InputText
                      v-model="filters['global'].value"
                      placeholder="Поиск по продукции"
                    />
                  </div>
                </div>
              </template>

              <Column
                field="barcode"
                filterField="barcode"
                header="Арт"
                style="width: 2%"
                class="text-sm"
              >
                <template #body="slotProps">
                  <div class="flex items-center gap-2">
                    <span class="" v-if="slotProps.data.barcode">{{
                      slotProps.data.barcode
                    }}</span>
                    <span class="text-red-400" v-else>Нет кода</span>
                  </div>
                </template>
              </Column>
              <Column
                field="name"
                filterField="name"
                header="Наименование"
                style="width: 30%"
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
                header="Остатки"
                field="stock"
                filterField="stock"
                sortable
                style="width: 6%"
                class="text-sm"
                ><template #body="slotProps">
                  <div class="flex items-center gap-2">
                    <span
                      class="font-bold"
                      :class="[
                        slotProps.data.stock >= 2
                          ? 'text-green-400'
                          : 'text-red-400'
                      ]"
                      >{{ slotProps.data.stock }}</span
                    >
                  </div>
                </template>
              </Column>
              <Column
                field="id"
                header="Цена"
                style="width: 10%"
                class="text-sm"
              >
                <template #body="slotProps">
                  <input
                    type="number"
                    :id="slotProps.data.id"
                    @change="reusePriveVal = $event.target.value"
                    class="border border-gray-500 p-2 w-24 bg-transparent rounded-md"
                  />
                </template>
              </Column>
              <Column
                field="id"
                header="Кол-во"
                style="width: 4%"
                class="text-sm"
              >
                <template #body="slotProps">
                  <div class="flex items-center gap-4">
                    <input
                      type="number"
                      :id="slotProps.data.id"
                      @change="reuseQtVal = $event.target.value"
                      class="border border-gray-500 p-2 w-20 bg-transparent rounded-md"
                    />
                    <button @click="selectedProductFunc(slotProps.data)">
                      Добавить
                    </button>
                  </div>
                </template>
              </Column>
            </DataTable>
          </ClientOnly>
          <!-- <pre class="text-sm"> {{ selectedProduct }}</pre> -->
        </div>
      </div>

      <template #footer>
        <Button
          label="Закрыть"
          icon="pi pi-times"
          @click="prihodView = false"
          text
          class="!bg-red-500 !text-white"
        />
        <Button
          label="Сохранить"
          icon="pi pi-check"
          @click="dataProductPrihod"
          text
          class="!bg-green-500 !text-white"
        />
      </template>
    </Dialog>
  </div>
</template>

<style lang="scss" scoped></style>
