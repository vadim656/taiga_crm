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
    <Dialog v-model:visible="editDay" modal header="Записи" class=""
      ><div class="py-2 w-full">
        <!-- <pre class="text-xs"> {{ dataDay }}</pre> -->
        <div class="w-full flex flex-col gap-4">
          <span class="p-float-label">
            <InputText id="username" v-model="note.title" class="w-full" />
            <label for="username">Услуга</label>
          </span>
          <!-- <span class="p-float-label">
            <InputText id="username" v-model="note.title" class="w-full" />
            <label for="username">Телефон</label>
          </span>
          <span class="p-float-label">
            <InputText id="username" v-model="note.title" class="w-full" />
            <label for="username">Услуга</label>
          </span> -->

          <span class="p-float-label">
            <Calendar id="calendar-timeonly" v-model="note.time" timeOnly />
            <label for="username">Время</label>
          </span>
          <!-- <span class="p-float-label">
            <InputText id="username" v-model="note.title" class="w-full" />
            <label for="username">Цена</label>
          </span> -->
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
const toast = useToast()

const {
  result: getRole,
  onResult: getRoleRes,
  refetch: getRoleRef
} = useQuery(ALL_CLIENT_NOTES, null, {
  pollInterval: 2000
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

  // console.log({
  //   DATE: timer,
  //   NAME: note.value.title,
  // })
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
</script>
<style>
.block {
}
</style>
