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

const { mutate: createHistoryPay } = useMutation(gql`
  mutation createHistoryPay($DATA: JSON) {
    createHistoryPay(data: { dataJ: $DATA }) {
      data {
        id
      }
    }
  }
`)

async function vozvrat (ckeckData) {
  const dataC = {
    ...ckeckData.dataJ.dataCheck
  }
  dataC['IdCommand'] = uuidv4()
  dataC['TypeCheck'] = 1
  console.log(dataC)
  await useFetch(() => 'http://localhost:5894/Execute', {
    method: 'POST',
    headers: {
      Authorization: 'Basic QWRtaW46RHJvcGVzdHJva2UwMDEzIQ==',
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(dataC),
    credentials: 'omit'
  })
    .then(res => {
      console.log('kkm', res.data.value)
      createHistoryPay({
        DATA: {
          check: res.data.value,
          dataCheck: dataC
        }
      })
      toast.add({
        severity: 'info',
        summary: 'Успешно',
        detail: `Продажа успешно`,
        life: 4000
      })
    })
    .catch(err => {
      toast.add({
        severity: 'error',
        summary: 'Неудача',
        detail: 'Что то пошло не так',
        life: 4000
      })
    })
}

onMounted(() => {
  setTimeout(() => {
    visible.value = true
  }, 1000)
})
</script>
<template>
  <div>
    <Toast position="bottom-right" />
    <pre class="text-sm">{{ allHCom }}</pre>

    <DataTable
      :value="allHCom"
      stripedRows
      class="rounded-t-md overflow-hidden"
      paginator
      :rows="10"
      :rowsPerPageOptions="[10, 20, 50]"
      filterDisplay="menu"
    >
      <Column header="Чек" class="text-xs">
        <template #body="slotProps">
          <div class="flex items-center gap-2 text-xs">
            <span class="">{{
              slotProps.data.attributes.dataJ.check.CheckNumber
            }}</span>
          </div>
        </template>
      </Column>
      <Column header="Тип операции" class="text-xs">
        <template #body="slotProps">
          <div class="flex items-center gap-2">
            <span
              v-if="slotProps.data.attributes.dataJ.dataCheck.TypeCheck == 0"
              >Приход
            </span>
            <span
              v-else-if="
                slotProps.data.attributes.dataJ.dataCheck.TypeCheck == 1
              "
              >Возврат прихода</span
            >
          </div>
        </template>
      </Column>
      <Column header="Сумма" class="text-xs">
        <template #body="slotProps">
          <div class="flex items-center gap-2">
            <span>{{ slotProps.data.attributes.dataJ.dataCheck.Cash }} ₽ </span>
          </div>
        </template>
      </Column>
      <Column header="Смена" class="text-xs">
        <template #body="slotProps">
          <div class="flex items-center gap-2">
            <span
              >{{ slotProps.data.attributes.dataJ.check.SessionNumber }}
            </span>
          </div>
        </template>
      </Column>
      <Column class="text-xs">
        <template #body="slotProps">
          <div class="flex items-center gap-2">
            <button
              @click="vozvrat(slotProps.data.attributes)"
              class="p-2 bg-red-600 rounded-md"
            >
              Возврат
            </button>
          </div>
        </template>
      </Column>
      <!-- <Column field="id" header="" class="text-sm">
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
