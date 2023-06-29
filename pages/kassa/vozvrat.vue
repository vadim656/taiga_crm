<template>
  <div>
    возврат
    <ClientOnly placeholder="Загрузка...">
      <DataTable
        :value="dataV.Сounters"
        class="rounded-t-md overflow-hidden w-full"
      >
        <Column
          field="ReceiptType"
          header="Наименование"
          class="text-sm w-[50%]"
        >
        
        </Column>
        <Column
          field="Sum"
          header="Сумма"
          class="text-sm w-[50%]"
        ></Column>
      </DataTable>
    </ClientOnly>
    <pre>{{ dataV }}</pre>
  </div>
</template>

<script setup>
import { v4 as uuidv4 } from 'uuid'
useHead({
  title: 'TAIGA - Возврат'
})
definePageMeta({
  middleware: 'auth'
})

const dataV = ref()

async function openShift () {
  const data = {
    Command: 'GetCounters',
    InnKkm: '4217204110',
    NumDevice: 0,
    IdDevice: '',
    IdCommand: uuidv4()
  }
  await useFetch(() => 'http://localhost:5894/Execute', {
    method: 'POST',
    headers: {
      Authorization: 'Basic QWRtaW46RHJvcGVzdHJva2UwMDEzIQ==',
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(data),
    credentials: 'omit'
  })
    .then(res => {
      dataV.value = res.data.value
      console.log('kkm', res.data.value)
    })
    .catch(err => {})
}

onMounted(() => {
  openShift()
})
</script>

<style lang="scss" scoped></style>
