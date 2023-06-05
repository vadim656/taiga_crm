<script setup>
import { FilterMatchMode } from 'primevue/api'
import { useConfirm } from 'primevue/useconfirm'
import { useToast } from 'primevue/usetoast'
import { v4 as uuidv4 } from 'uuid'
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
  return datestring.toString()
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
    description: `Основание документа:  ${document.value} // Дата документа: ${dateCom.value}`
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
</script>
<template>
  <div>
    <Toast position="bottom-right" />
    <ConfirmPopup></ConfirmPopup>

    <!-- <pre class="text-sm">{{ barcodes }}</pre> -->
    <!-- <pre class="text-xs">{{ groups.rows }}</pre> -->

    <ClientOnly placeholder="Загрузка...">
      <DataTable
        :value="barcodes"
        stripedRows
        removableSort
        v-model:filters="filters"
        :globalFilterFields="['name', 'pathName', 'barcode']"
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
                  slotProps.data.stock >= 2 ? 'text-green-400' : 'text-red-400'
                ]"
                >{{ slotProps.data.stock }}</span
              >
            </div>
          </template>
        </Column>

        <Column field="id" header="" class="text-sm">
          <template #body="slotProps">
            <div class="flex items-center gap-2">
              <button
                @click="prihodProductData(slotProps.data.id)"
                class="flex items-center gap-2 bg-green-600 rounded-md px-3 py-2"
              >
                <IconsIPlus class="w-5 h-5 text-white" /> Приход
              </button>
              <button
                @click="confirm1($event, slotProps.data.id)"
                class="flex items-center gap-2 bg-green-600 rounded-md px-3 py-2"
              >
                <IconsIPlus class="w-5 h-5 text-white" /> История
              </button>
            </div>
          </template>
        </Column>
      </DataTable>

      <!-- @page="pageEventProducts" -->
    </ClientOnly>

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
  </div>
</template>

<style lang="scss" scoped></style>
