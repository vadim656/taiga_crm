<script setup>
import { FilterMatchMode } from 'primevue/api'
useHead({
  title: 'TAIGA - Сертификаты'
})
definePageMeta({
  middleware: 'auth'
})

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
              <ButtonsBDelete @click="addProduct" icon="plus" type="add"
                >Добавить</ButtonsBDelete
              >
            </div>
          </template>
          <Column
            field="id"
            filterField="id"
            header="№ Сертификата"
            class="text-sm"
          ></Column>
          <Column field="id" filterField="id" header="Номинал" class="text-sm">
            <template #body="slotProps">
              <div class="flex items-center gap-2">
                <span class="font-bold"
                  >{{ initPrice(slotProps.data.salePrices[0].value) }} ₽</span
                >
              </div>
            </template>
          </Column>
          <Column field="id" filterField="id" header="Статус" class="text-sm">
            <template #body="slotProps">
              <div class="flex items-center gap-2">
                <span class="font-bold"
                  >{{ initPrice(slotProps.data.salePrices[0].value) }} ₽</span
                >
              </div>
            </template>
          </Column>
          <Column field="id" filterField="id" header="Действия" class="text-sm">
            <template #body="slotProps">
              <div class="flex items-center gap-2">
                <button @click="" class="text-sm btn-default-blue anime">
                  <IconsICheck />
                  Активировать
                </button>
                <button
                  @click="getSert(slotProps.data.id)"
                  class="text-sm btn-default anime"
                >
                  <IconsICog class="!w-4 !h-4" />
                  Действия
                </button>
              </div>
            </template>
          </Column>
        </DataTable>
      </ClientOnly>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
