<script setup>
import { useToast } from 'primevue/usetoast'
import { v4 as uuidv4 } from 'uuid'
import gql from 'graphql-tag'
useHead({
  title: 'TAIGA CRM - История'
})
definePageMeta({
  middleware: 'auth'
})
const router = useRouter()

const toast = useToast()

const visible = ref(false)

const { result: allH } = useQuery(gql`
  query {
    historyPays {
      data {
        id
        attributes {
          dataJ
        }
      }
    }
  }
`)
const allHCom = computed(() => allH.value?.historyPays.data ?? [])

onMounted(() => {
  setTimeout(() => {
    visible.value = true
  }, 1000)
})
</script>
<template>
  <div>
    <Toast position="bottom-right" />
    <DataTable
      :value="allHCom"
      stripedRows
      class="rounded-t-md overflow-hidden"
      paginator
      :rows="10"
      :rowsPerPageOptions="[10, 20, 50]"
      filterDisplay="menu"
    >
      <Column header="UID" class="text-xs" sortable>
        <template #body="slotProps">
          <div class="flex items-center gap-2 text-xs">
            <pre class="">{{ slotProps.data.attributes.dataJ }}</pre>
          </div>
        </template>
      </Column>
      <!-- <Column header="Цена" class="text-xs" sortable>
        <template #body="slotProps">
          <div class="flex items-center gap-2">
            <span class="truncate"
              >{{ slotProps.data.attributes.Price }} ₽</span
            >
          </div>
        </template>
      </Column>
      <Column field="id" header="" class="text-sm">
        <template #body="slotProps">
          <div class="flex items-center justify-end gap-2">
            <button
              :key="slotProps.data.id"
              @click="addToProduct(slotProps.data)"
              class="flex items-center gap-2 bg-green-600 rounded-md p-2"
            >
              <IconsIArrow class="w-5 h-5 text-white -rotate-90" />
            </button>
          </div>
        </template>
      </Column> -->
    </DataTable>
  </div>
</template>

<style lang="scss" scoped></style>
