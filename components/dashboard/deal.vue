<template>
  <div class="flex justify-between w-full items-center blockM p-2">
    <div class="p-2 flex flex-col gap-1.5">
      <span class="text-xs text-gray-400"># {{ props.data.sdelka }}</span>
      <span class="text-xs flex items-center gap-2"
        ><IconsITime class="w-4 h-4" /> {{ date }}</span
      >
    </div>
    <div class="flex cc text-sm">
      <span class="text-green-500" v-if="props.data.summ.cart > 0"
        >+ {{ (props.data.summ.cart * 0.01).toFixed(2) }} ₽</span
      >
      <span class="text-green-500" v-else-if="props.data.summ.nal > 0"
        >+ {{ (props.data.summ.nal * 0.01).toFixed(2) }} ₽</span
      >
      <span class="text-red-500" v-else> Не оплачен</span>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(['data'])

let options = {
  year: 'numeric',
  month: 'numeric',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric'
}

const date = computed(() => {
  const x = new Date(props.data.created)
  return x.toLocaleString('ru', options)
})
</script>

<style scoped></style>
