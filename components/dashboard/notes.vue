<template>
  <div class="flex flex-col gap-2 blockM p-2">
    <div class="flex items-center justify-between">
      <span class="text-xs text-gray-400">{{ date }}</span>

      <IconsIDelete @click="$emit('deleteNote')" class="cursor-pointer" />
    </div>

    <p class="text-sm">
      {{ props.data.attributes.Desc }}
    </p>
  </div>
</template>

<script setup>
const props = defineProps(['data'])

let options = {
  hour: 'numeric',
  minute: 'numeric',
  year: 'numeric',
  month: 'numeric',
  day: 'numeric'
}

const date = computed(() => {
  const x = new Date(props.data.attributes.createdAt)
  return x.toLocaleString('ru', options)
})
</script>

<style lang="scss" scoped></style>
