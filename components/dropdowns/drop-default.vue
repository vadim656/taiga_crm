<template>
  <div
    @click="selectView = !selectView"
    class="border w-full bg-gray-600 border-gray-500 rounded-md relative p-2.5 text-sm"
  >
    <div class="flex items-center justify-between">
      <span>{{ select }}</span>
      <IconsIArrow />
    </div>
    <Transition  name="dropdown">
      <div
        v-if="selectView"
        class="border flex flex-col divide-y divide-gray-500 w-full bg-gray-600 border-gray-500 rounded-md overflow-hidden absolute top-12 left-0 text-sm"
      >
        <span
          v-for="(item, i) in selectData"
          :key="i"
          class="p-2.5 bg-gray-600 hover:bg-gray-700 anime cursor-pointer"
          @click="selectHAndler(item)"
          >{{ item }}</span
        >
      </div>
    </Transition>
  </div>
</template>

<script setup>
const select = ref('Выберите')

const selectView = ref(false)

const selectData = ref(['Да', 'Нет'])

function selectHAndler (x) {
  select.value = x
}
</script>

<style  scoped>
.dropdown-enter-active,
.dropdown-leave-active {
  transition: opacity 0.3s ease;
}

.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
}

</style>
