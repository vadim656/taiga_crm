<script>
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from "@fullcalendar/interaction";

export default {
  components: {
    FullCalendar
  },
  data() {
    return {
      calendarOptions: {
        plugins: [interactionPlugin, dayGridPlugin, timeGridPlugin],
        initialView: 'timeGridPlugin',
        nowIndicator: true,
        editable: true,
        initialEvents: [
          { title: 'nice event', start: new Date() }
        ]
      }
    }
  }
}
</script>

<template>
  <div class="text-white">
    
    <div class="w-full gap-4">

    
        <FullCalendar :options="calendarOptions"  />
      
    </div>
  </div>
</template>

<style></style>
