<script setup>
import { onClickOutside } from '@vueuse/core'

const modalView = ref(false)
const modal = ref(null)

onClickOutside(modal, event => {
  modalView.value = false
})

defineExpose({
  modalView
})
</script>
<template>
  <div
    v-if="modalView"
    class="fixed top-0 left-0 right-0 z-50 flex items-center justify-center w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] md:h-full bg-gray-900 bg-opacity-80"
  >
    <div class="relative w-full h-full max-w-xl md:h-auto" ref="modal">
      <form class="relative rounded-lg shadow bg-gray-700">
        <div
          class="flex items-start justify-between p-4 border-b rounded-t border-gray-600"
        >
          <h3 class="text-xl font-semibold text-white">
            <slot name="title"></slot>
          </h3>
          <!-- close -->
          <button
            class="text-gray-400 bg-transparent hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center hover:bg-gray-600"
          >
            <svg
              class="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>

        <div class="p-6 space-y-6">
          <slot name="body"></slot>
        </div>

        <div
          class="flex items-center p-6 space-x-2 border-t rounded-b border-gray-600"
        >
          <slot name="footer"></slot>
        </div>
      </form>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
