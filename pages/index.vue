<template>
  <div class="text-white">
    <div
      v-if="!loading"
      class="grid grid-cols-[1fr,1fr,1fr] grid-flow-row auto-rows-max gap-4 w-full h-full"
    >
      <div class="blockT flex flex-col gap-4">
        <div class="flex items-start justify-between">
          <span>Сделки</span>
          <Button
            icon="pi pi-plus"
            text
            raised
            rounded
            aria-label="Filter"
            class="!w-8 h-8"
            v-tooltip.left="'Провести сделку'"
            @click="createDeal()"
          />
        </div>
        <div class="flex flex-col gap-3 overflow-y-auto h-[400px] scrollbar">
          <DashboardDeal v-for="(deal, i) in 3" :key="i" :data="i + 1" />
        </div>
      </div>
      <div class="blockT flex flex-col gap-4">
        <div class="flex items-start justify-between">
          <span>Записи</span>
          <Button
            icon="pi pi-plus"
            text
            raised
            rounded
            aria-label="Filter"
            class="!w-8 h-8"
            v-tooltip.left="'Создать запись'"
          />
        </div>
        <div>
          <ClientOnly>
            <Calendar v-model="date" inline showWeek>
              <template #date="slotProps">
                <strong
                  v-if="slotProps.date.day > 10 && slotProps.date.day < 15"
                  class="text-green-500 relative text-sm"
                  >{{ slotProps.date.day }}
                  <span
                    class="text-[9px] text-gray-500 absolute -top-3 -right-[4px] text-right"
                    >20</span
                  ></strong
                >
                <template v-else>
                  <strong
                    v-if="slotProps.date.day > 10 && slotProps.date.day < 15"
                    class="text-sm"
                    >{{ slotProps.date.day }}</strong
                  >
                </template>
              </template>
            </Calendar>
          </ClientOnly>
        </div>
      </div>
      <div class="blockT flex flex-col gap-4">
        <div class="flex items-start justify-between">
          <span>Заметки</span>
          <Button
            icon="pi pi-plus"
            text
            raised
            rounded
            aria-label="Filter"
            class="!w-8 h-8"
            v-tooltip.left="'Создать заметку'"
          />
        </div>
        <div class="flex flex-col gap-3 overflow-y-auto h-[400px] scrollbar">
          <DashboardNotes v-for="(note, i) in 5" :key="i" />
        </div>
      </div>
      <div class="col-span-2 blockT flex flex-col gap-4">
        <div class="flex items-start justify-between">
          <span>Склад</span>
          <Button
            icon="pi pi-plus"
            text
            raised
            rounded
            aria-label="Filter"
            class="!w-8 h-8"
            v-tooltip.bottom="'Создать приход'"
          />
        </div>
        <div>sdsd</div>
      </div>
      <div class="col-span-1 blockT flex flex-col gap-4">
        <span>Всякая всячина</span>
        <div>sdsd</div>
      </div>
      <pre>{{ tokenSKLAD }}</pre>
    </div>

    <span v-else>Загрузка...</span>
    <pre>{{ dataProducts }} --- {{ dataProductsError }}</pre>
  </div>
  <Dialog
    v-model:visible="modalAddDeal"
    modal
    header="Провести оплату"
    class="dark:bg-red-300"
  >
    <div class="py-2 flex flex-col gap-6">
      <div>
        <span class="p-float-label">
          <MultiSelect
            v-model="selectedCities"
            :options="allProducts"
            filter
            optionLabel="Name"
            :maxSelectedLabels="3"
            class="w-full"
          />
          <label for="ms-cities">Товар / Услуга</label>
        </span>
      </div>
      <div class="grid grid-cols-2 gap-6">
        <Button
          class="!text-sm"
          icon="pi pi-credit-card"
          label="Оплата картой"
        />
        <Button
          class="!text-sm"
          icon="pi pi-money-bill"
          label="Оплата наличными"
        />
        <Button
          class="col-span-2 !text-sm"
          label="Смешанная оплата (по возможности не использовать)"
        />
      </div>
    </div>

    <template #footer>
      <Button
        @click="modalAddDeal = false"
        icon="pi pi-times"
        label="Отмена"
        class="!bg-red-400 !text-white"
      />
    </template>
  </Dialog>
</template>

<script setup>
import { useFetch, createFetch } from '@vueuse/core'
import { CREATE_DEAL } from '@/gql/query/DASHBOARD'
definePageMeta({
  middleware: 'auth'
})

const runtimeConfig = useRuntimeConfig()
const tokenSKLAD = runtimeConfig.public.skladToken

const loading = ref(true)
const date = ref()

const modalAddDeal = ref(false)

const createDeal = () => {
  modalAddDeal.value = true
  console.log('createDeal')
}

const { result: ProductsServices } = useQuery(CREATE_DEAL)

const allProducts = computed(() => {
  const data = [
    ...ProductsServices.value.products.data,
    ...ProductsServices.value.services.data
  ]
  const dataMap = data.map(x => x.attributes)

  return dataMap
})

onMounted(() => {
  setTimeout(() => {
    loading.value = false
  }, 500)
})

const selectedCities = ref()

// sklad

const { data: dataProducts, error: dataProductsError } = await useFetch(
  'https://online.moysklad.ru/api/remap/1.2/entity/retaildemand',
  {
    method: 'GET',
    mode: 'cors',
    initialCache: false,
    headers: {
      "Authorization": 'Bearer ac4cefd7530e6a05d53170ae38d7267259bfd527',
      "content-type": "application/json",
      "Access-Control-Allow-Origin": "*"
    },
    onResponse ({ request, response, options }) {
      console.log(response);
    }
  }

  // {
  //   headers: {
  //     Authorization: 'Bearer ac4cefd7530e6a05d53170ae38d7267259bfd527',
  //     'Access-Control-Allow-Origin': '*',
  //     'Access-Control-Allow-Credentials': 'true',
  //     'Access-Control-Allow-Headers': '*',
  //     'Access-Control-Expose-Headers': '*'
  //   }
  // }
)
</script>

<style>
.scrollbar::-webkit-scrollbar {
  display: none;
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
