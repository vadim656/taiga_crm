<script setup>
import { ALL_RECORDS, ALL_RECORDS_FILTER } from '@/gql/query/CALENDAR'

const date = ref()

const test = new Date()

const test2 = computed(() => {
  if (date.value) {
    const date1 = new Date(date.value) 
  const date2 = date1.setDate(date1.getDate() + 1);
  return date2.toISOString()
  } else {
    return '0'
  }
})

const { result: AllServices } = useQuery(ALL_RECORDS)
const allRecords = computed(() => AllServices.value?.userRecords.data ?? [])

//day event
// const { result: DayServices } = useQuery(ALL_RECORDS_FILTER, () => {
//   DATE: date.value
// })
// const dayRecords = computed(() => DayServices.value?.userRecords.data ?? [])


</script>

<template>
  <div class="text-white">
   <pre v-if="date">{{ date.toISOString() }} -- {{ test2 }}</pre>
    <div class="grid grid-cols-[1fr,3fr] gap-4">
      <div
        class="divide-y divide-gray-500 p-3 flex flex-col bg-gray-700 rounded-md overflow-hidden h-full"
      >
        <div class="flex items-center justify-between w-full pt-2 pb-4">
          <span class="w-full text-center">Записи</span>
          <IconsIPlus class="w-5 h-5" />
        </div>
        <div>
          <pre class="text-sm">{{ allRecords }}</pre>
          
        </div>
      </div>
      <ClientOnly>
        <Calendar v-model="date" inline showWeek showTime hourFormat="24">
          <template #date="slotProps">
            <strong
              v-if="slotProps.date.day > 10 && slotProps.date.day < 15"
              class="text-green-500 relative text-sm"
              >{{ slotProps.date.day }}
              <span
                class="text-[9px] text-gray-500 absolute -top-3 -right-[4px] text-right"
                >20</span
              ></strong
            >
            <template v-else>
              <strong
                v-if="slotProps.date.day > 10 && slotProps.date.day < 15"
                class="text-sm"
                >{{ slotProps.date.day }}</strong
              >
            </template>
          </template>
        </Calendar>
        {{ date }}
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
            type="number"
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
