<template>
  <div>
    <ClientOnly>
      <FullCalendar :options="calendarOptions">
        <template v-slot:eventContent="arg">
          <div
            class="flex flex-col gap-1  px-2 py-1 rounded-sm w-full !border-none"
            :class="status(arg.event.extendedProps.status)"
          >
            <p class="text-gray-400">{{ arg.event.title }}</p>
            <!-- <p class="text-gray-400 text-xs flex items-center gap-1">
              <IconsIPhone class="!w-3 !h-3" />
              {{ arg.event.extendedProps.phone }}
            </p> -->
            <p class="text-gray-400 text-xs flex items-center gap-1">
              <IconsITime class="!w-3 !h-3" />
              {{ arg.event.extendedProps.timeStart }} -
              {{ arg.event.extendedProps.timeEnd }}
            </p>
          </div>
        </template>
      </FullCalendar>
    </ClientOnly>
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
        headerToolbar: {
          left: 'prev,next',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay' // user can switch between the two
        },
        initialView: 'dayGridMonth',
        nowIndicator: true,
        selectable: true,
        droppable: true,
        editable: true,
        locale: ruLocale,
        events: [],
        dateClick: this.handleDateClick,
        eventClick: this.handleEventClick
      }
    }
  },
  methods: {
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
    }
  },
  mounted () {
    const data = this.notes
    data.forEach(element => {
      const t = {
        title: element.attributes.Name,
        date: element.attributes.Time,
        phone: element.attributes.Phone,
        timeStart: '10:00',
        timeEnd: '12:00',
        desc: this.setTimeNote(element.attributes.Time),
        status : element.attributes.Status
      }
      this.calendarOptions.events.push(t)
    })

    // console.log(this.notes)

    // this.calendarOptions.events.push()
  },
  setup() {
    const status = (id) => {
      if (id == 'Pending') {
        return 'bg-[#494D36]'
      } else if (id == 'Done') {
        return 'bg-[#384E3C]'
      } else if(id == 'Off') {
        return 'bg-[#493434]'
      } else {
        return 'bg-gray-700'
      }
    }

    return {status}
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
  border: none !important;
}

.fc .fc-daygrid-day.fc-day-today,
.fc .fc-timegrid-col.fc-day-today {
  background-color: rgba(118, 118, 118, 0.15) !important;
}
</style>
