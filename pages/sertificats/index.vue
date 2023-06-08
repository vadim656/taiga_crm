<script setup>
import { FilterMatchMode } from 'primevue/api'
import { useToast } from 'primevue/usetoast'
useHead({
  title: 'TAIGA - Сертификаты'
})
definePageMeta({
  middleware: 'auth'
})
const toast = useToast()
const router = useRouter()

const filters = ref({
  global: { value: null, matchMode: FilterMatchMode.CONTAINS },
  id: { value: null, matchMode: FilterMatchMode.CONTAINS }
})

const initPrice = price => {
  const pre = price * 0.01
  const done = pre.toLocaleString('ru-RU')
  return done
}

const {
  pending: pendingServices,
  data: services,
  refresh: refreshServices
} = await useFetch('/api/entity/assortment?filter=pathname=Сертификаты', {
  method: 'GET',
  headers: {
    Authorization: 'Basic YWRtaW5AbW1wY2FwaXRhbDE6ZjkzZWMzMmVlYQ=='
  }
})

const allSertificats = computed(() => {
  return services.value.rows ?? []
})

const getSert = id => {
  router.push({
    path: '/sertificats/' + id
  })
  // window.open(routeData.href, '_blank')
}

const createSert = ref(false)
const sertNominal = ref()

const sertDataCreate = ref({
  name: 'Сертификат',
  // productFolder: 'Сертификаты',
  uom: {
    meta: {
      href: 'https://online.moysklad.ru/api/remap/1.2/entity/uom/19f1edc0-fc42-4001-94cb-c9ec9c62ec10',
      metadataHref:
        'https://online.moysklad.ru/api/remap/1.2/entity/uom/metadata',
      type: 'uom',
      mediaType: 'application/json'
    }
  },
  productFolder: {
    meta: {
      href: 'https://online.moysklad.ru/api/remap/1.2/entity/group/34360991-049e-11ee-0a80-142800172ed4',
      metadataHref:
        'https://online.moysklad.ru/api/remap/1.2/entity/group/metadata',
      type: 'productfolder',
      mediaType: 'application/json'
    }
  },
  salePrices: [
    {
      value: 10000.0,
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

const createSertData = async () => {
  const data = sertDataCreate.value
  data.salePrices[0].value = sertNominal.value * 100
  const lengthSerts = allSertificats.value.length + 1
  data.name = `Сертификат № ${lengthSerts}`
  console.log(data, lengthSerts)

  await useFetch('/api/entity/product', {
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
      setTimeout(() => {
        console.log('res', res.data.value)
        refreshServices()
        dataProductPrihodFinish(res.data.value)
        createSert.value = false
      }, 500)
    })
    .catch(err => {
      console.log(err)
    })
}

const dataProductPrihodFinish =  (data) => {
  const sert = data
  sert['description'] = 'Активация сертификата'
  sert['description'] = 'Активация сертификата'
  console.log(data);
  // await useFetch('/api/entity/enter', {
  //   method: 'POST',
  //   headers: {
  //     Authorization: 'Basic YWRtaW5AbW1wY2FwaXRhbDE6ZjkzZWMzMmVlYQ==',
  //     'Content-Type': 'application/json;charset=utf-8',
  //     Accept: 'application/json;charset=utf-8'
  //   },
  //   body: JSON.stringify(prihodDataPreFinish.value),
  //   credentials: 'omit'
  // })
  //   .then(() => {
  //     setTimeout(() => {
  //     }, 500)
  //     refreshServices()

  //   })
  //   .catch(err => {
  //     console.log(err)

  //   })
}

</script>
<template>
  <div>
    <!-- <pre class="text-xs"> {{ allSertificats }}</pre> -->
    <div>
      <ClientOnly placeholder="Загрузка...">
        <DataTable
          :value="allSertificats"
          stripedRows
          removableSort
          v-model:filters="filters"
          :globalFilterFields="['id']"
          class="rounded-t-md overflow-hidden"
        >
          <template #header>
            <div class="flex justify-between">
              <div>
                <InputText
                  v-model="filters['global'].value"
                  placeholder="Поиск по номеру"
                />
              </div>
              <ButtonsBDelete @click="createSert = true" icon="plus" type="add"
                >Добавить</ButtonsBDelete
              >
            </div>
          </template>
          <Column
            field="id"
            filterField="id"
            header="№ Сертификата"
            class="text-sm"
          >
            <template #body="slotProps">
              <div class="flex items-center gap-2">
                <span class="">{{
                  slotProps.data.id.slice(0, 8)
                }}</span>
              </div>
            </template>
          </Column>
          <Column
            field="id"
            filterField="id"
            header="Название сертификата"
            class="text-sm"
          >
            <template #body="slotProps">
              <div class="flex items-center gap-2">
                <span class="">{{
                  slotProps.data.name
                }}</span>
              </div>
            </template>
          </Column>
          <Column field="id" filterField="id" header="Номинал" class="text-sm">
            <template #body="slotProps">
              <div class="flex items-center gap-2">
                <span class="font-bold"
                  >{{ initPrice(slotProps.data.salePrices[0].value) }} ₽</span
                >
              </div>
            </template>
          </Column>
          <Column  header="Статус" class="text-sm">
            <template #body="slotProps">
              <div class="flex items-center gap-2">
                <span class="font-bold"
                  >{{ initPrice(slotProps.data.salePrices[0].value) }} ₽</span
                >
              </div>
            </template>
          </Column>
          <Column   class="text-sm">
            <template #body="slotProps">
              <div class="flex items-center gap-2 justify-end">
                <button @click="" class="text-sm btn-default-blue anime">
                  <IconsICheck />
                  Активировать
                </button>
                <button
                  @click="getSert(slotProps.data.id)"
                  class="text-sm btn-default anime"
                >
                  <IconsICog class="!w-4 !h-4" />
                  
                </button>
              </div>
            </template>
          </Column>
        </DataTable>
      </ClientOnly>
      <Dialog
        v-model:visible="createSert"
        modal
        header="Добавить сертификат"
        class="bg-red-300"
        ><div class="py-2">
          <span class="p-float-label">
            <InputNumber id="ost" v-model="sertNominal" class="w-full" />
            <label for="ost">Номинал</label>
          </span>
        </div>

        <template #footer>
          <Button
            label="Отменить"
            icon="pi pi-times"
            @click="createSert = false"
            text
            class="!bg-red-500 !text-white"
          />
          <Button
            label="Создать"
            icon="pi pi-check"
            @click="createSertData"
            autofocus
            class="!bg-green-500 !text-white"
          />
        </template>
      </Dialog>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
