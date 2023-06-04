<template>
  <tr class="bg-white bg-gray-800 hover:bg-gray-50 hover:bg-gray-600">
    <td class="w-4 p-4">
      <div class="flex items-center">
        <input
          id="checkbox-table-search-3"
          type="checkbox"
          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-blue-600 ring-offset-gray-800 focus:ring-offset-gray-800 focus:ring-2 bg-gray-700 border-gray-600"
        />
        <label for="checkbox-table-search-3" class="sr-only">checkbox</label>
      </div>
    </td>
    <th
      scope="row"
      class="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap text-white"
    >
      <div class="">
        <div class="text-base font-semibold">{{ props.data.Name }}</div>
      </div>
    </th>
    <td class="px-6 py-4">{{ props.data.Price }}</td>
    <td class="px-6 py-4">
      <div class="flex items-center" v-if="props.data.Active !== true">
        <div class="h-2.5 w-2.5 rounded-full bg-red-500 mr-2"></div>
      </div>
      <div class="flex items-center" v-else>
        <div class="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div>
      </div>
    </td>
    <td class="px-6 py-4 text-right flex items-center gap-2 justify-end">
      <!-- Modal toggle -->
      <button
        @click="$emit('edit')"
        class="font-medium text-blue-600 text-blue-500 hover:underline"
      >
        <IconsIEdit/>
      </button>
      <button>
        <IconsIDelete/>
      </button>
    </td>
  </tr>
</template>

<script setup>
const props = defineProps(['data'])
</script>
