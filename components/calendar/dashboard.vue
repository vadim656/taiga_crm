<template>
  <div>
    <ClientOnly>
      <FullCalendar :options="calendarOptions">
        <template v-slot:eventContent="arg">
          <div
            class="flex flex-col !bg-gray-700 p-2 rounded-sm w-full !border-none"
          >
            <p class="text-gray-400 text-xs">
              {{ arg.event.extendedProps.desc }}
            </p>
            <p class="text-gray-400">{{ arg.event.title }},</p>
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
        dateClick: this.handleDateClick
      }
    }
  },
  methods: {
    handleDateClick: function (arg) {
      this.$emit('createEvent', arg.date)
      console.log('date click! ' + arg)
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
        desc: this.setTimeNote(element.attributes.Time)
      }
      this.calendarOptions.events.push(t)
      console.log('tut', element)
    })

    // console.log(this.notes)

    // this.calendarOptions.events.push()
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
