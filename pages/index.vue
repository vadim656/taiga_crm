<template>
  <div class="flex items-center justify-between w-full">
    <Toast position="bottom-right" />
    <TabView class="w-full">
      <TabPanel header="Записи">
        <div>
          <!-- <pre class="text-xs">{{ noteTime }}</pre> -->
          <CalendarDashboard
            @createEvent="createEvent"
            @clickEvent="clickEvent"
            @selectMasterCalendar="selectMasterCalendar"
            :key="UID()"
            :notes="allNotes"
          />
        </div>
      </TabPanel>
      <TabPanel header="Кабинеты">
        <div class="grid grid-cols-1 gap-4 w-full text-sm">
          <CabinetsCabinet
            class="blockT"
            v-for="cabinet in allNotesCabinets || []"
            :key="cabinet.id"
            :data="cabinet.attributes"
          />
          <!-- <pre class="text-xs">{{ allNotesCabinets }}</pre> -->
        </div>
      </TabPanel>
      <TabPanel header="Мастера">
        <p>3</p>
      </TabPanel>
    </TabView>
    <Dialog
      v-model:visible="editDay"
      modal
      header="Записи"
      class="w-full max-w-[800px]"
    >
      <div class="py-2 w-full">
        <div class="w-full flex flex-col gap-4">
          <Dropdown
            filter
            v-model="selectedServices"
            :options="allServices"
            showClear
            optionLabel="attributes.Name"
            placeholder="Выберите услугу"
            class="w-full md:w-14rem"
          >
            <template #value="slotProps">
              <div v-if="slotProps.value" class="flex align-items-center">
                <div>{{ slotProps.value.attributes.Name }}</div>
              </div>
            </template>
            <template #option="slotProps">
              <div class="flex items-center justify-between">
                <div>{{ slotProps.option.attributes.Name }}</div>
                <div class="flex flex-col items-end">
                  <span>{{ slotProps.option.attributes.UnitValue }} мин</span
                  ><span>{{ slotProps.option.attributes.Price }} ₽</span>
                </div>
              </div>
            </template>
          </Dropdown>
          <div class="grid grid-cols-3 gap-4 w-full">
            <Dropdown
              filter
              v-model="noteTimeCheked"
              :options="noteTimeFree"
              showClear
              optionLabel="name"
              placeholder="Время"
              class="w-full md:w-14rem"
            />
            <Dropdown
              filter
              v-model="master"
              :options="allMasters"
              showClear
              optionLabel="attributes.FIO"
              placeholder="Мастер"
              class="w-full md:w-14rem"
            />
            <Dropdown
              v-model="selectedCabinet"
              :options="allCabinet"
              showClear
              optionLabel="name"
              placeholder="Выберите кабинет"
              class="w-full md:w-14rem"
            />
            <span class="p-float-label">
              <InputText id="username" v-model="note.user" class="w-full" />
              <label for="username">Имя</label>
            </span>
            <span class="p-float-label">
              <InputText id="username" v-model="note.phone" class="w-full" />
              <label for="username">Телефон</label>
            </span>
            <div class="col-span-2">
              <span class="p-float-label">
                <InputText id="username" v-model="note.desc" class="w-full" />
                <label for="username">Примечания</label>
              </span>
            </div>
          </div>
        </div>
      </div>

      <template #footer>
        <div>
          <Button
            label="Отменить"
            icon="pi pi-times"
            @click="editDay = false"
            text
            class="!bg-red-500 !text-white"
          />
          <Button
            label="Создать"
            icon="pi pi-check"
            @click="handlerSendNote()"
            autofocus
            class="!bg-green-500 !text-white"
          />
        </div>
      </template>
    </Dialog>
    <Dialog
      v-model:visible="eventDayVisible"
      modal
      header="Запись"
      class="w-full max-w-[400px]"
    >
      <div class="py-2 w-full">
        <!-- <pre class="text-xs"> {{ eventDay }}</pre> -->
        <div class="py-2 w-full flex flex-col gap-4">
          <div class="grid grid-cols-2 gap-4">
            <div class="w-full flex flex-col gap-2">
              <span>Клиент: </span>
              <span class="font-bold">
                {{ eventDay.extendedProps.desc }} -
                {{ eventDay.extendedProps.phone }}</span
              >
            </div>

            <div class="w-full flex flex-col gap-2">
              <span>Мастер: </span>
              <span class="font-bold">{{
                eventDay.extendedProps.master.attributes.FIO
              }}</span>
            </div>
            <div class="w-full flex flex-col gap-2 col-span-2">
              <span>Примечание: </span>
              <p
                v-if="eventDay.extendedProps.viewNote.length"
                class="font-bold"
              >
                {{ eventDay.extendedProps.viewNote }}
              </p>
              <p v-else class="font-bold">Пусто...</p>
            </div>
          </div>

          <div class="w-full flex flex-col gap-2">
            <span>Услуга: </span>
            <span class="font-bold flex flex-col gap-2">
              <span class="p-2 rounded-md bg-neutral-700 text-center">{{
                eventDay.extendedProps.descOrder.Name
              }}</span>
              <span class="p-2 rounded-md bg-neutral-700 text-center">
                {{ eventDay.extendedProps.descOrder.Price }} ₽ /
                {{ eventDay.extendedProps.descOrder.UnitValue }} мин
              </span>

              <p
                v-if="eventDay.extendedProps.status == 'Ожидается'"
                class="bg-yellow-500 text-white text-sm gap-1 p-2 rounded-md my-1 text-center w-full"
              >
                {{ eventDay.extendedProps.status }}
              </p>
              <p
                v-else-if="eventDay.extendedProps.status == 'Завершен'"
                class="bg-green-500 text-white text-sm gap-1 p-2 rounded-md my-1 text-center w-full"
              >
                {{ eventDay.extendedProps.status }}
              </p>
              <p
                v-else-if="eventDay.extendedProps.status == 'Отменен'"
                class="bg-red-500 text-white text-sm gap-1 p-2 rounded-md my-1 text-center w-full"
              >
                {{ eventDay.extendedProps.status }}
              </p>
              <p
                v-else-if="eventDay.extendedProps.status == 'В работе'"
                class="bg-blue-500 text-white text-sm gap-1 p-2 rounded-md my-1 text-center w-full"
              >
                {{ eventDay.extendedProps.status }}
              </p>
            </span>
          </div>
          <div class="flex gap-4">
            <div class="w-full flex flex-col gap-2">
              <span>Начало / Окончание </span>
              <span class="font-bold"
                >{{ setTimeNote(eventDay.extendedProps.timeStart) }} -
                {{ setTimeNote(eventDay.extendedProps.timeEnd) }}</span
              >
            </div>
            <div class="w-full flex flex-col gap-2">
              <span>Кабинет: </span>
              <span class="font-bold"
                >{{ eventDay.extendedProps.cabinet.attributes.Name }}
              </span>
            </div>
          </div>
        </div>
      </div>

      <template #footer>
        <div>
          <Button
            label="Закрыть"
            icon="pi pi-times"
            @click="eventDayVisible = false"
            text
            class="!bg-neutral-500 !text-white"
          />
          <Button
            v-if="eventDay.extendedProps.status !== 'Завершен'"
            label="Отменить запись"
            icon="pi pi-check"
            @click="handlerDeleteNote(eventDay.extendedProps.idOrder)"
            class="!bg-red-500 !text-white"
          />
        </div>
      </template>
    </Dialog>
  </div>
</template>
<script setup>
import {
  CREATE_CLIENT_NOTE,
  ALL_CLIENT_NOTES,
  ALL_CABINETS_NOTES,
  DELETE_CLIENT_NOTE
} from '@/gql/query/DASHBOARD'
import { ALL_PRODUCTS, ALL_MASTERS } from '@/gql/STOCK'
import { v4 as uuidv4 } from 'uuid'
import { useToast } from 'primevue/usetoast'

useHead({
  title: 'TAIGA CRM - Главная'
})
definePageMeta({
  middleware: 'auth',
  layout: 'default'
})

let options = {
  // year: 'numeric',
  // month: 'numeric',
  // day: 'numeric',
  hour: 'numeric',
  minute: 'numeric'
}

function setTimeNote (time) {
  const x = new Date(time)
  return x.toLocaleString('ru', options)
}

const visible = ref(false)
const toast = useToast()
const route = useRoute()
const selectedServices = ref()

const allCabinet = ref([
  { name: '1 - Хамам', code: '1' },
  { name: '2 - Стандартный', code: '2' },
  { name: '3 - Стандартный', code: '3' },
  { name: '4 - Ванна', code: '4' },
  { name: '5 - Стандартный', code: '5' }
])

const { result: allProducts } = useQuery(ALL_PRODUCTS)
const allProductsCom = computed(() => allProducts.value?.products.data ?? [])

const allServices = computed(() => {
  return allProductsCom.value.filter(x => x.attributes.Type == true)
})

const {
  result: getRole,
  onResult: getRoleRes,
  refetch: getRoleRef
} = useQuery(
  ALL_CLIENT_NOTES,
  null,
  {
    pollInterval: 5000
  },
  {
    fetchPolicy: 'cache-and-network'
  }
)

const allNotes = computed(() => {
  return getRole.value?.userRecords.data ?? []
})

const {
  result: getCabinetsNotes,
  onResult: getCabinetsNotesRes,
  refetch: getCabinetsNotesRef
} = useQuery(
  ALL_CABINETS_NOTES,
  null,
  {
    pollInterval: 15000
  },
  {
    fetchPolicy: 'cache-and-network'
  }
)

const allNotesCabinets = computed(() => {
  return getCabinetsNotes.value?.crmCabinets.data ?? []
})

const editDay = ref(false)

const dataDay = ref()

const master = ref()

const { result: allM } = useQuery(ALL_MASTERS)
const allMasters = computed(() => allM.value?.usersPermissionsUsers?.data ?? [])

const note = ref({
  title: '',
  time: '',
  user: '',
  service: '',
  price: '',
  phone: '',
  desc: ''
})

const noteTimeCheked = ref()
const noteTime = ref([
  { name: '10:00', code: '1' },
  { name: '10:30', code: '2' },
  { name: '11:00', code: '3' },
  { name: '11:30', code: '4' },
  { name: '12:00', code: '5' },
  { name: '12:30', code: '6' },
  { name: '13:00', code: '7' },
  { name: '13:30', code: '8' },
  { name: '14:00', code: '9' },
  { name: '14:30', code: '10' },
  { name: '13:30', code: '11' },
  { name: '15:00', code: '12' },
  { name: '15:30', code: '13' },
  { name: '16:00', code: '15' },
  { name: '16:30', code: '16' },
  { name: '17:00', code: '17' },
  { name: '17:30', code: '18' },
  { name: '18:00', code: '19' },
  { name: '18:30', code: '20' },
  { name: '19:00', code: '21' },
  { name: '19:30', code: '22' },
  { name: '20:00', code: '23' },
  { name: '20:30', code: '24' },
  { name: '21:00', code: '25' },
  { name: '21:30', code: '26' }
])

const selectedCabinet = ref()

const noteTimeFree = computed(() => {
  return noteTime.value
})

const eventDayVisible = ref(false)
const eventDay = ref()
function createEvent (params) {
  // UID.value = uuidv4()
  dataDay.value = params
  editDay.value = true
  console.log(params)
}

const eventView = ref()

function clickEvent (event) {
  eventView.value = true
  eventDay.value = event
  console.log(event)
}

watch(eventDay, () => {
  if (
    eventDayVisible.value == false &&
    visible.value == true &&
    route.name == 'index'
  ) {
    eventDayVisible.value = true
  }
})

const { mutate: sendNote, onDone: sendNoteDone } =
  useMutation(CREATE_CLIENT_NOTE)

function UID (params) {
  return uuidv4()
}

function handlerSendNote () {
  // start
  let time1 = noteTimeCheked.value
  let h1 = String(time1.name).split(':')[0]
  let m1 = String(time1.name).split(':')[1]
  let timer1 = new Date(dataDay.value)
  timer1.setHours(Number(h1))
  timer1.setMinutes(Number(m1))
  // end

  let timer2 = new Date(dataDay.value)
  let valueService = selectedServices.value.attributes.UnitValue

  let hourService = parseInt(valueService / 60)

  let minService = Number(valueService - hourService * 60)

  timer2.setHours(Number(hourService) + Number(h1))
  timer2.setMinutes(Number(minService) + Number(m1))

  const servicesInNote = []
  servicesInNote.push(Number(selectedServices.value.id))
  // console.log('valueService', ` ${minService}`)
  // console.log('start', timer1)
  // console.log('end', timer2)
  const noteData = {
    DATE: timer1,
    NOTE: note.value.desc,
    DATEEND: timer2,
    SERVICES: servicesInNote,
    FIO: note.value.user,
    PHONE: note.value.phone,
    CABINET: Number(selectedCabinet.value.code),
    MASTER: Number(master.value.id)
  }
  console.log('note', noteData)

  sendNote({
    DATE: timer1,
    NOTE: note.value.desc,
    DATEEND: timer2,
    SERVICES: servicesInNote,
    FIO: note.value.user,
    PHONE: note.value.phone,
    CABINET: Number(selectedCabinet.value.code),
    MASTER: Number(master.value.id)
  })
}

sendNoteDone(res => {
  console.log(res)
  editDay.value = false
  toast.add({
    severity: 'info',
    summary: 'Успешно',
    detail: 'Запись создана',
    life: 2000
  })

  getRoleRef()
})

const { mutate: deleteNote, onDone: deleteNoteDone } =
  useMutation(DELETE_CLIENT_NOTE)

function handlerDeleteNote (id) {
  const idOrder = Number(id)
  deleteNote({
    ID: idOrder
  })
  eventDayVisible.value = false
  toast.add({
    severity: 'info',
    summary: 'Успешно',
    detail: 'Запись удалена',
    life: 2000
  })
}

deleteNoteDone(() => {
  console.log('delete', id)
})

getRoleRes(() => {
  UID.value = uuidv4()
})

function selectMasterCalendar() {
  console.log('rabotaet');
}

onMounted(() => {
  UID.value = uuidv4()
  setTimeout(() => {
    visible.value = true
  }, 500)
})
onUnmounted(() => {
  note.value = {
    title: '',
    time: '',
    user: '',
    service: '',
    price: ''
  }
})




</script>
<style>
.block {
}
</style>
