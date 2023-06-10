<template>
  <div class="w-full flex-col flex">
    <div
      class="text-xs px-2 w-full flex items-center justify-between gap-1 text-center bg-[#212121] p-2 rounded-md"
    >
      <div class="flex items-center gap-2">
        <IconsICalendar class="w-4 h-4" />{{ timeDay(props.data.DayCabinet) }}
      </div>
      <button @click="openCabinet">
        <IconsIArrow
          class="w-5 h-5"
          :class="[visible == true ? 'rotate-180' : '']"
        />
      </button>
    </div>
    <!-- <pre class="text-xs">{{ props.data }}</pre> -->
    <div v-if="visible" class="flex flex-col divide-y divide-gray-100/20 mb-4">
      <div
        v-for="day in props.data.user_records.data"
        class="bg-[#292929] py-3 flex items-center justify-between w-full"
      >
        <div class="flex gap-3 w-[70%]">
          <span class="text-xs flex items-center gap-1"
            ><IconsICalendar class="!w-4 !h-4" />
            {{ time(day.attributes.Time) }}
          </span>
          <div class="flex items-center gap-1">
            <IconsITime class="!w-4 !h-4" />
            <span class="text-xs"
              >{{ timeStart(day.attributes.Time) }} -
              {{ timeStart(day.attributes.TimeEnd) }}</span
            >
          </div>
        </div>
        <div class="flex gap-4 w-full">
          <span class="text-xs flex items-center gap-1 w-full"
            ><IconsIUser class="w-4 h-4" /> {{ day.attributes.Name }}</span
          >
          <div class="flex flex-col gap-1 pt-2 w-full">
            <div
              v-for="service in day.attributes.services.data"
              class="text-xs flex items-center gap-1 w-full"
            >
              <IconsICube class="!w-4 !h-4" /> {{ service.attributes.Name }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(['data'])
const dayjs = useDayjs()
const visible = ref(false)
function openCabinet (id) {
  console.log(id)
  visible.value = !visible.value
}
const timeDay = t => {
  return dayjs(t).format('DD.MM.YYYY')
}
const time = t => {
  return dayjs(t).format('DD.MM')
}
const timeStart = t => {
  return dayjs(t).format('HH:mm')
}
const timeEnd = t => {
  return dayjs(t).format('HH:mm')
}
</script>

<style lang="scss" scoped></style>
