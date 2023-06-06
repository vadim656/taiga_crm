<template>
  <div>
    <div class="p-3 my-4">Приход № {{ route.params.id }}</div>
    <div v-if="!visible">Загрузка...</div>
    <div v-else>
      <!-- <pre>{{ dataProducts }}</pre> -->
      <ClientOnly placeholder="Загрузка...">
        <DataTable
          :value="dataProducts"
          removableSort
          class="rounded-t-md overflow-hidden"
        >
          <Column
            field="name"
            header="Название"
            style=""
            class="text-sm"
          ></Column>
          <Column field="price" header="Цена" style="" class="text-sm">
            <template #body="slotProps">
              {{ initPrice(slotProps.data.price) }}</template
            >
          </Column>
          <Column
            field="quantity"
            header="Количество"
            style=""
            class="text-sm"
          ></Column>
        </DataTable>

        <!-- @page="pageEventProducts" -->
      </ClientOnly>
    </div>
    <div></div>
  </div>
</template>

<script setup>
const route = useRoute()
useHead({
  title: `TAIGA CRM - ${route.params.id}`
})
definePageMeta({
  middleware: 'auth'
})
const visible = ref(false)
const historyDataAll = ref()
const dataProducts = ref([])

const initPrice = price => {
  const pre = price * 0.01
  const done = pre.toLocaleString('ru-RU')
  return done
}

async function downloadData () {
  await useFetch(`/api/entity/enter/${route.params.id}/positions`, {
    method: 'GET',
    headers: {
      Authorization: 'Basic YWRtaW5AbW1wY2FwaXRhbDE6ZjkzZWMzMmVlYQ=='
    }
  })
    .then(res => {
      historyDataAll.value = res.data.value.rows
      downloadDataPrihod(res.data.value.rows)
      setTimeout(() => {
        visible.value = true
      }, 200)
    })
    .catch(err => {
      console.log(err)
    })
}

async function downloadDataPrihod (data) {
  const products = data

  await Promise.all(
    products.map(async element => {
      const url = element.assortment.meta.href.replace(
        'https://online.moysklad.ru/api/remap/1.2/entity/product/',
        ''
      )
      const x = {
        name: '',
        price: element.price,
        quantity: element.quantity
      }
      await useFetch(`/api/entity/product/${url}`, {
        method: 'GET',
        headers: {
          Authorization: 'Basic YWRtaW5AbW1wY2FwaXRhbDE6ZjkzZWMzMmVlYQ=='
        }
      })
        .then(res => {
          x.name = res.data.value.name
          dataProducts.value.push(x)
        })
        .catch(err => {
          console.log(err)
        })
    })
  )
}

onMounted(() => {
  setTimeout(() => {
    downloadData()
  }, 100)
})
</script>

<style lang="scss" scoped></style>
