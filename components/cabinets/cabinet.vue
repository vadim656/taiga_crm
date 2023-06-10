<template>
  <div class="w-full">
    <div class="w-full flex justify-between items-center">
      <span class="font-bold">{{ props.data.Name }}</span>
      <button @click="openCabinet">
        <IconsIArrow
          class="w-5 h-5"
          :class="[visible == true ? 'rotate-180' : '']"
        />
      </button>
    </div>
    <div v-if="visible" class="flex flex-col mt-4 gap-3">
      <CabinetsRecord
        v-for="record in props.data.Time"
        :key="record.id"
        :data="record"
      />
    </div>
  </div>
</template>

<script setup>
const props = defineProps(['data'])
const visible = ref(false)
function openCabinet () {
  visible.value = !visible.value
}
</script>

<style lang="scss" scoped></style>
