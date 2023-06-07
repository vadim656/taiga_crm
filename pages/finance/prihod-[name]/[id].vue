<template>
  <div class="flex flex-col gap-6">
    <ConfirmPopup></ConfirmPopup>
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
          <Column field="quantity" header="Количество" style="" class="text-sm">
            <template #body="slotProps">
              <div class="flex items-center gap-4">
                <input
                  type="number"
                  @change="www($event.target.value, slotProps.data.index)"
                  :id="slotProps.data.index"
                  :value="slotProps.data.quantity"
                  class="p-2 rounded-md bg-transparent border border-gray-600"
                />
              </div>
            </template>
          </Column>
          <Column field="price" header="Действия" style="" class="text-sm">
            <template #body="slotProps">
              <div class="flex items-center gap-4">
                <button class="btn-default-blue">Изменить количество</button>
                <button
                  @click="deletePosition($event, slotProps.data.id)"
                  class="btn-danger"
                >
                  Удалить позицию
                </button>
              </div>
            </template>
          </Column>
          <Column field="quantity" header="ID товара" style="" class="text-sm"
            ><template #body="slotProps">
              <div class="flex items-center gap-4">
               
                {{ slotProps.data.id }}
              </div>
            </template></Column
          >
        </DataTable>

        <!-- @page="pageEventProducts" -->
      </ClientOnly>
    </div>
    <div>
      <!-- <pre class="text-xs">{{ historyDataAll }}</pre> -->

      <button @click="updatePrihod" class="btn-default-blue">Сохранить</button>
    </div>
  </div>
</template>

<script setup>
import { useConfirm } from 'primevue/useconfirm'
const route = useRoute()
useHead({
  title: `TAIGA CRM - ${route.params.id}`
})
definePageMeta({
  middleware: 'auth'
})

const confirm = useConfirm()
const visible = ref(false)
const historyDataAll = ref()
const dataProducts = ref([])

const initPrice = price => {
  const pre = price * 0.01
  const done = pre.toLocaleString('ru-RU')
  return done
}

const data1 = ref()
const www = (num, id) => {
  historyDataAll.value[id].quantity = Number(num)
  console.log(id)
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
        index: products.indexOf(element),
        id: element.id,
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

const updatePrihod = async () => {
  let enter = {
    organization: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/organization/804b181a-fc63-11ed-0a80-000d00187fc7',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata',
        type: 'organization',
        mediaType: 'application/json'
      }
    },
    store: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/store/804c5356-fc63-11ed-0a80-000d00187fcf',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/store/metadata',
        type: 'store',
        mediaType: 'application/json'
      }
    },
    positions: historyDataAll.value
  }
  console.log(enter)
  await useFetch(`/api/entity/enter/${route.params.id}`, {
    method: 'PUT',
    headers: {
      Authorization: 'Basic YWRtaW5AbW1wY2FwaXRhbDE6ZjkzZWMzMmVlYQ==',
      'Content-Type': 'application/json;charset=utf-8',
      Accept: 'application/json;charset=utf-8'
    },
    body: JSON.stringify(enter),
    credentials: 'omit'
  })
    .then(() => {
      dataProducts.value = []
      downloadData()
    })
    .catch(err => {
      console.log(err)
    })
}

const deletePosition = (event, id) => {
  confirm.require({
    target: event.currentTarget,
    message: 'Вы уверены что хотите удалить позицию?',
    icon: 'pi pi-exclamation-triangle',
    accept: () => {
      console.log(id)
      deleteID(id)
    },
    reject: () => {
      toast.add({
        severity: 'error',
        summary: 'Отмена',
        detail: 'Действие отменено',
        life: 2000
      })
    }
  })
}

async function deleteID (id) {
  console.log(route.params.id, id);
  await useFetch(`/api/entity/enter/${route.params.id}/positions/${id}`, {
    method: 'DELETE',
    headers: {
      Authorization: 'Basic YWRtaW5AbW1wY2FwaXRhbDE6ZjkzZWMzMmVlYQ==',
      'Content-Type': 'application/json;charset=utf-8',
      Accept: 'application/json;charset=utf-8'
    }
  })
    .then(() => {
      dataProducts.value = []
      downloadData()
    })
    .catch(err => {
      console.log(err)
    })
}

onMounted(() => {
  setTimeout(() => {
    downloadData()
  }, 100)
})
</script>

<style lang="scss" scoped></style>
