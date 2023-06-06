<template>
  <div class="flex items-center justify-between w-full">
    <Toast position="bottom-right" />
    <TabView class="w-full">
      <TabPanel header="Даты">
        <div>
          <!-- <pre class="text-xs">{{ allNotes }}</pre> -->
          <CalendarDashboard
            @createEvent="createEvent"
            :key="UID"
            :notes="allNotes"
          />
        </div>
      </TabPanel>
      <TabPanel header="Кабинеты">
        <div class="grid grid-cols-5 gap-4 w-full">
          <div class="blockT">Кабинет: 1</div>
          <div class="blockT">Кабинет: 2</div>
          <div class="blockT">Кабинет: 3</div>
          <div class="blockT">Кабинет: 4</div>
          <div class="blockT">Кабинет: 5</div>
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
      ><div class="py-2 w-full">
        <!-- <pre class="text-xs"> {{ dataDay }}</pre> -->
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
          <!-- <span class="p-float-label">
            <InputText id="username" v-model="note.title" class="w-full" />
            <label for="username">Телефон</label>
          </span>
          <span class="p-float-label">
            <InputText id="username" v-model="note.title" class="w-full" />
            <label for="username">Услуга</label>
          </span> -->
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
              <label for="username">ФИО</label>
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
  </div>
</template>
<script setup>
import { CREATE_CLIENT_NOTE, ALL_CLIENT_NOTES } from '../gql/query/DASHBOARD'
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
} = await useFetch('/api/entity/assortment', {
  method: 'GET',
  headers: {
    Authorization: 'Basic YWRtaW5AbW1wY2FwaXRhbDE6ZjkzZWMzMmVlYQ=='
  }
})

const allCabinet = ref([
  { name: '1', code: '1' },
  { name: '2', code: '2' },
  { name: '3', code: '3' },
  { name: '4', code: '4' },
  { name: '5', code: '5' }
])

const fio = ref('')

const allServices = computed(() => {
  return services.value?.rows ?? []
})

const {
  result: getRole,
  onResult: getRoleRes,
  refetch: getRoleRef
} = useQuery(ALL_CLIENT_NOTES, null, {
  pollInterval: 2000
},{
  fetchPolicy: 'cache-and-network',
})

const allNotes = computed(() => {
  return getRole.value?.userRecords.data ?? []
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

function createEvent (params) {
  // UID.value = uuidv4()
  dataDay.value = params
  editDay.value = true
  console.log(params)
}

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
