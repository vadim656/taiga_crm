<template>
  <div>
    <div class="text-white">
      <div
        v-if="!loading"
        class="grid grid-cols-[1fr,1fr,1fr] grid-flow-row auto-rows-max gap-4 w-full h-auto"
      >
        <div class="blockT flex flex-col gap-4">
          <div class="flex items-start justify-between">
            <span>Сделки</span>
            <!-- <Button
              icon="pi pi-plus"
              text
              raised
              rounded
              aria-label="Filter"
              class="!w-8 h-8"
              v-tooltip.left="'Провести сделку'"
              @click="createDeal()"
            /> -->
          </div>

          <div class="grid grid-cols-2 gap-4">
            <div class="flex flex-col justify-between gap-4 blockM p-4">
              <span class="text-sm text-center">Продаж</span
              ><span class="text-6xl font-bold text-center text-green-500">{{
                dashboad.sales.count
              }}</span>
            </div>
            <div class="flex flex-col justify-between gap-4 blockM p-4 text-sm">
              <span class="text-sm text-center">Финансы</span>
              <div class="flex justify-between text-center">
                <span>Доходы:</span>
                <span>{{ dashboad.money.income }} ₽</span>
              </div>
              <!-- <div class="flex justify-between text-center">
              <span>Расходы за период:</span>
              <span>{{ dashboad.money.outcome }} ₽</span>
            </div> -->
              <div class="flex justify-between text-center">
                <span>Дельта:</span>
                <span>{{ dashboad.money.todayMovement }} ₽</span>
              </div>
            </div>
            <span class="w-full col-span-2">Последние сделки</span>
            <div
              class="w-full col-span-2 flex flex-col gap-4 overflow-y-auto h-[440px] scrollbar"
            >
              <DashboardDeal
                v-for="(deal, i) in salesCom"
                :key="i"
                :data="deal"
              />
            </div>
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
              @click="modalAddNote = true"
            />
          </div>
          <div
            class="flex flex-col gap-3 overflow-y-auto h-[620px] scrollbar"
            v-if="userNotesCom.length !== 0"
          >
            <DashboardNotes
              v-for="note in userNotesCom"
              :key="note.id"
              :data="note"
              @deleteNote="deleteNote(note.id)"
            />
          </div>
          <span v-else>Заметок еще нет...</span>
        </div>
      </div>

      <span v-else>Загрузка...</span>
    </div>
    <Dialog
      v-model:visible="modalAddDeal"
      modal
      header="Провести оплату"
      class="bg-red-300"
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
            @click="oplataCart()"
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
    <Dialog
      v-model:visible="modalAddNote"
      modal
      header="Создать заметку"
      class="bg-red-300"
    >
      <div class="py-2 flex flex-col gap-6 w-full">
        <div>
          <textarea v-model="noteDesc" rows="5" cols="60" name="description">
            Опишите задачу...
         </textarea
          >
        </div>
      </div>

      <template #footer>
        <Button
          @click="createNote()"
          icon="pi pi-times"
          label="Сохранить"
          class="!bg-green-400 !text-white"
        />
        <Button
          @click="modalAddNote = false"
          icon="pi pi-times"
          label="Отмена"
          class="!bg-red-400 !text-white"
        />
      </template>
    </Dialog>
    <Toast position="bottom-right" />
  </div>
</template>

<script setup>
import {
  CREATE_DEAL,
  USER_NOTES,
  CREATE_USER_NOTES,
  DELETE_USER_NOTES
} from '@/gql/query/DASHBOARD'
import { userInfo } from '@/store'
import { useIntervalFn } from '@vueuse/core'

const storeUser = userInfo()
definePageMeta({
  middleware: 'auth'
})

import { useToast } from 'primevue/usetoast'
const toast = useToast()

const runtimeConfig = useRuntimeConfig()
const tokenSKLAD = runtimeConfig.public.skladToken

const loading = ref(true)
const date = ref()

const modalAddDeal = ref(false)
const modalAddNote = ref(false)

let noteDesc = ref('')

const createDeal = () => {
  modalAddDeal.value = true
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

//user notes

const { result: userNotes, refetch: userNotesRefetch } = useQuery(
  USER_NOTES,
  {
    ID: storeUser.data.id
  },
  {
    fetchPolicy: 'no-cache'
  }
)

const userNotesCom = computed(() => {
  return (
    userNotes.value?.usersPermissionsUser.data.attributes.user_notes.data ?? []
  )
})

const selectedCities = ref()

// sklad

const {
  pending: pendingDashboad,
  data: dashboad,
  refresh: refreshDashboard
} = await useFetch('/api/report/dashboard/week', {
  method: 'GET',
  headers: {
    Authorization: 'Basic YWRtaW5AbW1wY2FwaXRhbDE6ZjkzZWMzMmVlYQ=='
  }
})

const {
  pending: pendingSales,
  data: dashboadSales,
  refresh: refreshSales
} = await useFetch('/api/entity/retaildemand', {
  method: 'GET',
  headers: {
    Authorization: 'Basic YWRtaW5AbW1wY2FwaXRhbDE6ZjkzZWMzMmVlYQ=='
  }
})

const salesCom = computed(() => {
  const data = []
  const dataCom = dashboadSales.value.rows
  dataCom.forEach(e => {
    const eData = {
      created: e.moment,
      sdelka: e.name,
      summ: {
        cart: e.noCashSum,
        nal: e.cashSum
      },
      chec: e.externalCode
    }
    data.push(eData)
  })
  return data
})

// oplata
function oplataCart () {}

//note
const { mutate: createNoteR, onDone: createNoteDone } = useMutation(
  CREATE_USER_NOTES,
  () => ({
    variables: {
      ID: storeUser.data.id,
      DESC: noteDesc.value
    }
  })
)

const { mutate: deleteNoteR, onDone: deleteNoteDone } =
  useMutation(DELETE_USER_NOTES)

function createNote () {
  createNoteR()
  modalAddNote.value = false
  setTimeout(() => {
    toast.add({
      severity: 'success',
      summary: 'Успешно!',
      detail: 'Заметка создана',
      life: 2000
    })
  }, 500)
}

createNoteDone(() => {
  userNotesRefetch()
})

deleteNoteDone(() => {
  userNotesRefetch()
})

function deleteNote (id) {
  deleteNoteR({ ID: id })
  setTimeout(() => {
    toast.add({
      severity: 'success',
      summary: 'Успешно!',
      detail: 'Заметка удалена',
      life: 2000
    })
  }, 100)
}

//end
useIntervalFn(() => {
  refreshSales()
  refreshDashboard()
}, 10000)

onMounted(() => {
  setTimeout(() => {
    loading.value = false
  }, 500)
})
</script>

<style>
.scrollbar::-webkit-scrollbar {
  display: none;
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
