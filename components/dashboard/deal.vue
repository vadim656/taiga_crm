<template>
  <div class="flex justify-between w-full items-center blockM p-2">
    <div class=" p-2 flex flex-col gap-1">
        <span class="text-xs"># {{ props.data }}</span>
        <span class="text-sm">Продажа маски</span>
    </div>
    <div class=" flex cc text-sm">
        1 000 ₽
    </div>
  </div>
 
</template>

<script setup>
const props = defineProps(['data'])

</script>

<style  scoped></style>
