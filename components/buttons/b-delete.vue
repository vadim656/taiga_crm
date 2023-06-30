<script setup>
const props = defineProps({
  type: {
    default () {
      return 'def'
    }
  },
  icon: {
    default () {
      return ''
    }
  }
})

const bgButton = computed(() => {
  if (props.type == 'add') {
    return 'add'
  } else if (props.type == 'del') {
    return 'delete'
  } else if (props.type == 'def') {
    return 'default'
  }
})
</script>
<template>
  <div>
    <button type="button" :class="[bgButton]" class="flex cc gap-2">
      <IconsIPlus class="w-4 h-4" v-if="props.icon == 'plus'" />
      <IconsIEdit class="w-4 h-4" v-else-if="props.icon == 'edit'" />
      <IconsIDelete class="w-4 h-4" v-else-if="props.icon == 'del'" />
      <slot></slot>
    </button>
  </div>
</template>

<style scoped>
.delete {
  @apply text-white focus:ring-4  font-medium rounded-lg text-sm px-5 py-2.5 bg-red-600 hover:bg-red-500 focus:outline-none focus:ring-red-500 anime;
}
.add {
  @apply text-white focus:ring-4  font-medium rounded-lg text-sm px-5 py-2.5 bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-blue-800 anime;
}

.default {
  @apply py-2.5 px-5 text-sm font-medium  focus:outline-none  rounded-lg border  focus:z-10 focus:ring-4  focus:ring-gray-700 bg-gray-800 text-gray-400 border-gray-600 hover:text-white hover:bg-gray-700 anime;
}
</style>
