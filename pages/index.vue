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
            v-for="cabinet in allNotesCabinets || []"
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
              optionLabel="attributes.Name"
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
        <div>
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
        </div>
      </template>
    </Dialog>
  </div>
</template>
<script setup>
import {
  CREATE_CLIENT_NOTE,
  ALL_CLIENT_NOTES,
  ALL_CABINETS_NOTES
} from '@/gql/query/DASHBOARD'
import { ALL_PRODUCTS, ALL_GROUPS } from '@/gql/STOCK'
import { v4 as uuidv4 } from 'uuid'
import { useToast } from 'primevue/usetoast'

useHead({
  title: 'TAIGA CRM - Главная'
})
definePageMeta({
  middleware: 'auth',
  layout: 'default'
})

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

const noteTimeFree = computed(() => {
  return noteTime.value
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
  if (
    eventDay.value == false &&
    visible.value == true &&
    route.name == 'index'
  ) {
    eventDay.value = true
  }
})

const { mutate: sendNote, onDone: sendNoteDone } =
  useMutation(CREATE_CLIENT_NOTE)

const UID = ref()

function handlerSendNote () {
  let time = noteTimeCheked.value
  let minutes = new Date(note.value.time)
  let h1 = time.split(':')
  let m1 = minutes.getMinutes()
  let timer = new Date(dataDay.value)

  timer.setHours(Number(h1[0]))
  timer.setMinutes(m1)
  console.log('timer', timer)
  console.log('time', time.name)
  // sendNote({
  //   DATE: timer,
  //   NAME: note.value.title
  // })
}

sendNoteDone(() => {
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

getRoleRes(() => {
  UID.value = uuidv4()
})

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
