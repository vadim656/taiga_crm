<template>
  <div>
    <FullCalendar :options="calendarOptions">
      <template v-slot:eventContent="arg">
        <div
          class="flex flex-col gap-1 px-2 py-1 rounded-sm w-full !border-none h-full"
          :class="status(arg.event.extendedProps.status)"
        >
          <p class="text-gray-400 text-xs flex items-center gap-1">
            <IconsITime class="!w-3 !h-3" />
            {{ setTimeNote(arg.event.extendedProps.timeStart) }} -
            {{ setTimeNote(arg.event.extendedProps.timeEnd) }}
          </p>
          <p class="text-gray-400">{{ arg.event.title }}</p>
          <!-- <p
            class="text-gray-400 w-30 truncate"
            :title="arg.event.extendedProps.descOrder"
          >
            {{ arg.event.extendedProps.descOrder.Name }}
          </p> -->
          <!-- <p class="text-gray-400 text-xs flex items-center gap-1">
              <IconsIPhone class="!w-3 !h-3" />
              {{ arg.event.extendedProps.phone }}
            </p> -->

          <div class="flex flex-wrap">
            <p
              v-if="arg.event.extendedProps.status == 'Ожидается'"
              class="bg-yellow-600 text-white text-[10px] gap-1 px-2 py-1 rounded-md my-1 text-center"
            >
              {{ arg.event.extendedProps.status }}
            </p>
            <p
              v-else-if="arg.event.extendedProps.status == 'Завершен'"
              class="bg-green-600 text-white text-[10px] gap-1 px-2 py-1 rounded-md my-1 text-center"
            >
              {{ arg.event.extendedProps.status }}
            </p>
            <p
              v-else-if="arg.event.extendedProps.status == 'Отменен'"
              class="bg-red-600 text-white text-[10px] gap-1 px-2 py-1 rounded-md my-1 text-center"
            >
              {{ arg.event.extendedProps.status }}
            </p>
            <p
              v-else-if="arg.event.extendedProps.status == 'В работе'"
              class="bg-blue-600 text-white text-[10px] gap-1 px-2 py-1 rounded-md my-1 text-center"
            >
              {{ arg.event.extendedProps.status }}
            </p>
            <p
              v-else
              class="bg-neutral-600 text-white text-[10px] gap-1 px-2 py-1 rounded-md my-1 text-center"
            >
            Не выбран
            </p>
          </div>
        </div>
      </template>
    </FullCalendar>
  </div>
</template>

<script>
import FullCalendar from '@fullcalendar/vue3'
import interactionPlugin from '@fullcalendar/interaction'
import timeGridPlugin from '@fullcalendar/timegrid'
import dayGridPlugin from '@fullcalendar/daygrid'
import multiMonthPlugin from '@fullcalendar/multimonth'
import ruLocale from '@fullcalendar/core/locales/ru'

let options = {
  // year: 'numeric',
  // month: 'numeric',
  // day: 'numeric',
  hour: 'numeric',
  minute: 'numeric'
}

export default {
  components: {
    FullCalendar
  },
  props: {
    notes: Array
  },
  data () {
    return {
      calendarOptions: {
        plugins: [
          interactionPlugin,
          timeGridPlugin,
          multiMonthPlugin,
          dayGridPlugin
        ],
        // customButtons: {
        //   selectMaster: {
        //     text: 'Выбрать мастера',
        //     click: this.selectMasterSet
        //   }
        // },

        headerToolbar: {
          left: 'prev,next',
          center: 'title',
          right: 'dayGridMonth,testDay' // user can switch between the two
        },
        views: {
          testDay: {
            type: 'timeGrid',
            duration: { days: 1 },
            buttonText: 'Сегодня'
          }
        },
        initialView: 'dayGridMonth',
        nowIndicator: true,
        selectable: true,
        droppable: true,
        editable: true,
        locale: ruLocale,
        events: [],
        dateClick: this.handleDateClick,
        eventClick: this.handleEventClick,
        mouseEnterInfo: this.hoveringDate
      }
    }
  },
  methods: {
    // selectMasterSet: function () {
    //   this.$emit('selectMasterCalendar')
    // },
    handleDateClick: function (arg) {
      this.$emit('createEvent', arg.date)
      console.log('date click! ' + arg)
    },
    handleEventClick: function (arg) {
      this.$emit('clickEvent', arg.event)
      console.log('Event click! ' + arg)
    },
    setTimeNote: function (time) {
      const x = new Date(time)
      return x.toLocaleString('ru', options)
    },
    hoveringDate: function (arg) {
      console.log('hoveringDate! ' + arg)
    }
  },
  mounted () {
    const data = this.notes
    console.log(data)
    data.forEach(element => {
      const tS = element.attributes.Time
      const tE = element.attributes.TimeEnd
      const t = {
        title: element.attributes.FIO,
        date: element.attributes.Time,
        phone: element.attributes.Phone,
        timeStart: tS,
        timeEnd: tE,
        desc: element.attributes.FIO,
        idOrder: element.id,
        descOrder:
          element.attributes.tovary_i_uslugis?.data[0]?.attributes ||
          'Нет услуги',
        status: element.attributes.Status,
        master: element.attributes.users_permissions_user.data,
        cabinet: element.attributes.crm_cabinet.data,
        viewNote: element.attributes.Note
      }
      console.log('element', element)
      this.calendarOptions.events.push(t)
    })

    // console.log(this.notes)

    // this.calendarOptions.events.push()
  },
  setup () {
    const status = id => {
      if (id == 'Pending') {
        return 'bg-[#494D36]'
      } else if (id == 'Done') {
        return 'bg-[#384E3C]'
      } else if (id == 'Off') {
        return 'bg-[#493434]'
      } else {
        return 'bg-gray-700'
      }
    }

    return { status }
  }
}
</script>
<style>
.fc-timegrid-event-harness-inset .fc-timegrid-event,
.fc-timegrid-event.fc-event-mirror,
.fc-timegrid-more-link {
  box-shadow: none !important;
}

.fc-v-event {
  background-color: transparent !important;
  /* border: none !important; */
}

.fc .fc-daygrid-day.fc-day-today,
.fc .fc-timegrid-col.fc-day-today {
  margin: 4px !important;
  background-color: rgba(118, 118, 118, 0.15) !important;
  height: auto;
}

.fc .fc-timegrid-slot {
  height: 4.5em !important;
}
</style>
