<script setup>
import { FilterMatchMode } from 'primevue/api'
import { useToast } from 'primevue/usetoast'
import {ALL_SERT, CREATE_SERT} from '@/gql/SERTS'
import { v4 as uuidv4 } from 'uuid'
useHead({
  title: 'TAIGA - Сертификаты'
})
definePageMeta({
  middleware: 'auth'
})
const toast = useToast()
const router = useRouter()

const { result: S1, refetch :S1RE } = useQuery(ALL_SERT)
const allSerts = computed(() => S1.value?.products?.data ?? [])


const { mutate: sendSert } = useMutation(CREATE_SERT)

const filters = ref({
  global: { value: null, matchMode: FilterMatchMode.CONTAINS },
  id: { value: null, matchMode: FilterMatchMode.CONTAINS }
})

const initPrice = price => {
  const pre = price
  const done = pre.toLocaleString('ru-RU')
  return done
}

function createSertData() {
  sendSert({
    NAME: `Сертификат ${uuidv4()}`,
    PRICE: Number(sertNominal.value)
  })
  setTimeout(() => {
    S1RE()
  }, 500);
 
}

const allSertificats = computed(() => {
  return services.value.rows ?? []
})

const getSert = id => {
  router.push({
    path: '/sertificats/' + id
  })
}

const createSert = ref(false)
const sertNominal = ref()


</script>
<template>
  <div>
    <!-- <pre class="text-xs"> {{ allSertificats }}</pre> -->
    <div>
      <ClientOnly placeholder="Загрузка...">
        <DataTable
          :value="allSerts"
          stripedRows
          removableSort
          v-model:filters="filters"
          :globalFilterFields="['id']"
          class="rounded-t-md overflow-hidden"
        >
          <template #header>
            <div class="flex justify-between">
              <div>
                <InputText
                  v-model="filters['global'].value"
                  placeholder="Поиск по номеру"
                />
              </div>
              <ButtonsBDelete @click="createSert = true" icon="plus" type="add"
                >Добавить</ButtonsBDelete
              >
            </div>
          </template>
          <Column
            field="id"
            filterField="id"
            header="№ Сертификата"
            class="text-sm"
          >
            <template #body="slotProps">
              <div class="flex items-center gap-2">
                <span class="">{{
                  slotProps.data.id.slice(0, 8)
                }}</span>
              </div>
            </template>
          </Column>
          <Column
            field="id"
            filterField="id"
            header="Название сертификата"
            class="text-sm"
          >
            <template #body="slotProps">
              <div class="flex items-center gap-2">
                <span class="">{{
                  slotProps.data.attributes.Name
                }}</span>
              </div>
            </template>
          </Column>
          <Column field="id" filterField="id" header="Номинал" class="text-sm">
            <template #body="slotProps">
              <div class="flex items-center gap-2">
                <span class="font-bold"
                  >{{ initPrice(slotProps.data.attributes.Price) }} ₽</span
                >
              </div>
            </template>
          </Column>
          <Column  header="Статус" class="text-sm">
            <template #body="slotProps">
              <div class="flex items-center gap-2">
                <span class="font-bold"
                  >{{ initPrice(slotProps.data.attributes.Price) }} ₽</span
                >
              </div>
            </template>
          </Column>
          <Column   class="text-sm">
            <template #body="slotProps">
              <div class="flex items-center gap-2 justify-end">
                <button @click="" class="text-sm btn-default-blue anime">
                  <IconsICheck />
                  Активировать
                </button>
                <button
                  @click="getSert(slotProps.data.id)"
                  class="text-sm btn-default anime"
                >
                  <IconsICog class="!w-4 !h-4" />
                  
                </button>
              </div>
            </template>
          </Column>
        </DataTable>
      </ClientOnly>
      <Dialog
        v-model:visible="createSert"
        modal
        header="Добавить сертификат"
        class="bg-red-300"
        ><div class="py-2">
          <span class="p-float-label">
            <InputNumber id="ost" v-model="sertNominal" class="w-full" />
            <label for="ost">Номинал</label>
          </span>
        </div>

        <template #footer>
          <Button
            label="Отменить"
            icon="pi pi-times"
            @click="createSert = false"
            text
            class="!bg-red-500 !text-white"
          />
          <Button
            label="Создать"
            icon="pi pi-check"
            @click="createSertData"
            autofocus
            class="!bg-green-500 !text-white"
          />
        </template>
      </Dialog>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
