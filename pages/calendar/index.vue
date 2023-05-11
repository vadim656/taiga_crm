<script setup>
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import timeGridPlugin from '@fullcalendar/timegrid'
import ruLocale from '@fullcalendar/core/locales/ru'
import { createEventId } from '../calendar/event-utils'

const modalAddEvent = ref(null)

const eventModal = ref({
  name: '',
  data: ''
})

const { getEvents } = createEventId()



const id = ref(10)

const calendarOptions = reactive({
  plugins: [dayGridPlugin, interactionPlugin, timeGridPlugin],
  initialView: 'dayGridMonth',
  // dateClick: arg => {
  //   log('Clicked on: ' + arg.dateStr)
  // },
  selectable: true,
  locale: ruLocale,
  editable: true,
  selectable: true,
  select: arg => {
    id.value = id.value + 1

    const cal = arg.view.calendar
    cal.unselect()
    cal.addEvent({
      id: `${id.value}`,
      title: `New event ${id.value}`,
      start: arg.start,
      end: arg.end,
      allDay: true
    })
  },
  events: [],
  eventClick: arg => {
    console.log(arg.event.title)
  }
})

calendarOptions.events = getEvents

watch(getEvents, () => {
  calendarOptions.events = getEvents
  console.log('watch', getEvents);
})

const events = computed(() => {
  return calendarOptions
})
</script>

<template>
  <div class="text-white">
    <div class="grid grid-cols-[1fr,3fr] gap-4">
      <div
        v-if="calendarOptions"
        class="divide-y divide-gray-500 p-3 flex flex-col bg-gray-700 rounded-md overflow-hidden h-full"
      >
      <div class="flex items-center justify-between w-full pt-2 pb-4">
        <span class="w-full text-center ">Все события</span>
        <IconsIPlus class="w-5 h-5"/>
      </div>
        
        <CalendarEventDefault
          v-for="(item, i) in events.events"
          :key="i"
          :dataEvent="item"
        />
      </div>
      <ClientOnly placeholder="загрузка">
        <FullCalendar :options="calendarOptions" />
      </ClientOnly>
    </div>
    <ModalsModalEdit ref="modalAddEvent">
        <template #title>
          <span>Добавить услугу</span>
        </template>
        <template #body>
          <div class="grid grid-cols-2 gap-6">
            <InputsInputDef
              label="Название"
              id="name"
              placeholder="Массаж"
              v-model="eventModal.name"
            />
            <InputsInputDef
              label="Цена"
              id="price"
              type=number
              placeholder="100"
              v-model="eventModal.data"
            />
          </div>
        </template>
        <template #footer> <ButtonsBDelete>Добавить</ButtonsBDelete></template>
      </ModalsModalEdit>
  </div>
</template>

<style></style>
