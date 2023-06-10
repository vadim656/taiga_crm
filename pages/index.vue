<template>
  <div class="flex items-center justify-between w-full">
    <Toast position="bottom-right" />
    <TabView class="w-full">
      <TabPanel header="Даты">
        <div>
          <!-- <pre class="text-xs">{{ noteTime }}</pre> -->
          <CalendarDashboard
            @createEvent="createEvent"
            @clickEvent="clickEvent"
            :key="UID"
            :notes="allNotes"
          />
        </div>
      </TabPanel>
      <TabPanel header="Кабинеты">
        <div class="grid grid-cols-1 gap-4 w-full text-sm">
          <CabinetsCabinet
            class="blockT"
            v-for="cabinet in allNotesCabinets"
            :key="cabinet.id"
            :data="cabinet.attributes"
          />
          <!-- <pre class="text-xs">{{ allNotesCabinets }}</pre> -->
        </div>
      </TabPanel>
      <TabPanel header="Сводка">
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
            optionLabel="name"
            placeholder="Выберите услугу"
            class="w-full md:w-14rem"
          />
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
              <InputText id="username" v-model="note.user" class="w-full" />
              <label for="username">Телефон</label>
            </span>
            <div class="col-span-2">
              <span class="p-float-label">
                <InputText id="username" v-model="note.user" class="w-full" />
                <label for="username">Примечания</label>
              </span>
            </div>
          </div>
        </div>
      </div>

      <template #footer>
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
      </template>
    </Dialog>
    <Dialog
      v-model:visible="eventDay"
      modal
      header="Запись"
      class="w-full max-w-[800px]"
    >
      <div class="py-2 w-full">
        <pre class="text-xs"> {{ eventDay }}</pre>
        <div class="py-2 w-full">
          <div class="w-full flex flex-col gap-4">
            <Dropdown
              filter
              v-model="selectedServices"
              :options="allServices"
              showClear
              optionLabel="name"
              placeholder="Выберите услугу"
              class="w-full md:w-14rem"
            />
            <div class="grid grid-cols-3 gap-4 w-full">
              <span class="p-float-label">
                <Calendar
                  id="calendar-timeonly"
                  v-model="note.time"
                  timeOnly
                  class="w-full"
                />
                <label for="username">Время</label>
              </span>
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
                <InputText id="username" v-model="note.user" class="w-full" />
                <label for="username">Телефон</label>
              </span>
              <div class="col-span-2">
                <span class="p-float-label">
                  <InputText id="username" v-model="note.user" class="w-full" />
                  <label for="username">Примечания</label>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <template #footer>
        <Button
          label="Отменить"
          icon="pi pi-times"
          @click="eventDay = false"
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
      </template>
    </Dialog>
  </div>
</template>
<script setup>
import {
  CREATE_CLIENT_NOTE,
  ALL_CLIENT_NOTES,
  ALL_CABINETS_NOTES
} from '../gql/query/DASHBOARD'
import { v4 as uuidv4 } from 'uuid'
import { useToast } from 'primevue/usetoast'

useHead({
  title: 'TAIGA CRM - Главная'
})
definePageMeta({
  middleware: 'auth'
})

const toast = useToast()

const selectedServices = ref()
const selectedCabinet = ref()
const {
  pending: pendingServices,
  data: services,
  refresh: refreshServices
} = await useFetch('/api/entity/bundle', {
  method: 'GET',
  headers: {
    Authorization: 'Basic YWRtaW5AbW1wY2FwaXRhbDE6ZjkzZWMzMmVlYQ=='
  }
})

const allCabinet = ref([
  { name: '1 - Хамам', code: '1' },
  { name: '2 - Стандартный', code: '2' },
  { name: '3 - Стандартный', code: '3' },
  { name: '4 - Ванна', code: '4' },
  { name: '5 - Стандартный', code: '5' }
])

const fio = ref('')

const allServices = computed(() => {
  return services.value?.rows ?? []
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
    pollInterval: 5000
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

const note = ref({
  title: '',
  time: '',
  user: '',
  service: '',
  price: ''
})

const noteTimeCheked = ref()
const noteTime = reactive([
  { name: '10:00', code: '' },
  { name: '10:30', code: '' },
  { name: '11:00', code: '' },
  { name: '11:30', code: '' },
  { name: '12:00', code: '' },
  { name: '12:30', code: '' },
  { name: '13:00', code: '' },
  { name: '13:30', code: '' },
  { name: '14:00', code: '' },
  { name: '14:30', code: '' },
  { name: '13:30', code: '' },
  { name: '15:00', code: '' },
  { name: '15:30', code: '' },
  { name: '16:00', code: '' },
  { name: '16:30', code: '' },
  { name: '17:00', code: '' },
  { name: '17:30', code: '' },
  { name: '18:00', code: '' },
  { name: '18:30', code: '' },
  { name: '19:00', code: '' },
  { name: '19:30', code: '' },
  { name: '20:00', code: '' },
  { name: '20:30', code: '' },
  { name: '21:00', code: '' },
  { name: '21:30', code: '' }
])

const noteTimeFree = computed(() => {
  return noteTime
})

const eventDay = ref(false)

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
  if (eventDay.value == false) {
    eventDay.value = null
  }
})

const userNotes = ref([])

const { mutate: sendNote, onDone: sendNoteDone } =
  useMutation(CREATE_CLIENT_NOTE)

const UID = ref()

function handlerSendNote () {
  let minutes = new Date(note.value.time)
  let h1 = minutes.getHours()
  let m1 = minutes.getMinutes()
  let timer = new Date(dataDay.value)

  timer.setHours(h1)
  timer.setMinutes(m1)

  sendNote({
    DATE: timer,
    NAME: note.value.title
  })
}

sendNoteDone(() => {
  editDay.value = false
  toast.add({
    severity: 'info',
    summary: 'Успешно',
    detail: 'Запись создана',
    life: 2000
  })
  getRoleRef()
})

getRoleRes(() => {
  UID.value = uuidv4()
})

onMounted(() => {
  UID.value = uuidv4()
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
