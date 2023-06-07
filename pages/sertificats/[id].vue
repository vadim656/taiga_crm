<template>
  <div class="flex flex-col gap-12">
    <div>
      <button @click="router.go(-1)" class="text-sm btn-default anime">
        <IconsIArrow class="!w-4 !h-4 rotate-90" />
        Назад
      </button>
    </div>
    <span> Cертификат № {{ route.params.id }}</span>
    <!-- <pre class="text-sm">{{ ostatok.rows[0].quantity }}</pre> -->
    <div class="w-full grid grid-cols-3 gap-4">
      <div class="blockT flex flex-col gap-4">
        <span>Номинал: </span>
        <span class="text-xl font-bold">
          {{ initPrice(allSertificats.salePrices[0].value) }}</span
        >
      </div>
      <div class="blockT flex flex-col gap-4" @click="spisanieView = true">
        <span>Остаток: </span>
        <span class="text-xl font-bold">
          {{
            initPrice(
              ostatok.rows[0].quantity * allSertificats.salePrices[0].value
            )
          }}
          из {{ initPrice(allSertificats.salePrices[0].value) }}</span
        >
      </div>
      <div class="blockT">Дата создания: ---</div>
      <div class="blockT">Срок действия: ---</div>
    </div>
    <Dialog
      v-model:visible="spisanieView"
      modal
      header="Списание сертификата"
      class="bg-red-300 w-full max-w-[400px]"
      ><div class="py-2 w-full">
        <div class="w-full">
          <InputNumber
            v-model="summSpisania"
            inputId="minmax"
            :useGrouping="false"
            :min="0"
            :max="Number(allSertificats.salePrices[0].value * 0.01)"
          />
        </div>

        {{ summSpisania }}
        {{ spisanieData.positions[0].quantity }}
      </div>

      <template #footer>
        <Button
          label="Закрыть"
          icon="pi pi-times"
          @click="spisanieView = false"
          text
          class="!bg-red-500 !text-white"
        />
        <Button
          label="Продолжить"
          icon="pi pi-check"
          @click="spisanie"
          text
          class="!bg-green-500 !text-white"
        />
      </template>
    </Dialog>
  </div>
</template>

<script setup>
const route = useRoute()
const router = useRouter()
import { v4 as uuidv4 } from 'uuid'
import { useToast } from 'primevue/usetoast'
const toast = useToast()
const {
  pending: pendingServices,
  data: services,
  refresh: refreshServices
} = await useFetch(`/api/entity/product/${route.params.id}`, {
  method: 'GET',
  headers: {
    Authorization: 'Basic YWRtaW5AbW1wY2FwaXRhbDE6ZjkzZWMzMmVlYQ=='
  }
})

const {
  pending: pendingOstatok,
  data: ostatok,
  refresh: refreshOstatok
} = await useFetch(`/api/entity/assortment?filter=id=${route.params.id}`, {
  method: 'GET',
  headers: {
    Authorization: 'Basic YWRtaW5AbW1wY2FwaXRhbDE6ZjkzZWMzMmVlYQ=='
  }
})

const allSertificats = computed(() => {
  return services.value ?? {}
})

const initPrice = price => {
  const pre = price * 0.01
  const done = pre.toLocaleString('ru-RU')
  return done
}

const spisanieView = ref(false)

const summSpisania = ref()
const summ = ref()

const spisanieData = ref({
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
  positions: [
    {
      quantity: 0,
      price: Number(allSertificats.value.salePrices[0].value),
      assortment: {
        meta: {
          href: `https://online.moysklad.ru/api/remap/1.2/entity/product/${route.params.id}`,
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/product/metadata',
          type: 'product',
          mediaType: 'application/json'
        }
      }
    }
  ]
})

const spisanie = async () => {
  console.log(spisanieData.value)
  const x1 = Number(allSertificats.value.salePrices[0].value * 0.01)
  const x2 = summSpisania.value / x1
  spisanieData.value.positions[0].quantity = x2
  await useFetch(`/api/entity/loss`, {
    method: 'POST',
    headers: {
      Authorization: 'Basic YWRtaW5AbW1wY2FwaXRhbDE6ZjkzZWMzMmVlYQ==',
      'Content-Type': 'application/json;charset=utf-8',
      Accept: 'application/json;charset=utf-8'
    },
    body: JSON.stringify(spisanieData.value),
    credentials: 'omit'
  })
    .then(() => {
      setTimeout(() => {
        spisanieView.value = false
        toast.add({
          severity: 'info',
          summary: 'Успешно',
          detail: `Списание создано`,
          life: 500
        })
        refreshOstatok()
      }, 1000)
      refreshServices()
    })
    .catch(err => {
      console.log(err)
      toast.add({
        severity: 'error',
        summary: 'Неудача',
        detail: 'Что то пошло не так',
        life: 2000
      })
    })
}
</script>
