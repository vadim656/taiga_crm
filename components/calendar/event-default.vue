<template>
  <div class="text-white w-full py-3  flex flex-col gap-1">
    <span> {{ props.dataEvent.title }}</span>
    <span class="text-gray-500"> {{ props.dataEvent.date }}</span>
  </div>
</template>

<script setup>
const props = defineProps(['dataEvent'])
</script>
