<template>
  <div>
    <div class="grid grid-cols-3 gap-4 mt-3">
      <button
        @click="pay = true"
        class="block_button_kassa col-span-3 bg-green-400 hover:bg-green-500"
      >
        <span class="button_kassa !text-4xl" type="">Продажа</span>
      </button>
      <button class="block_button_kassa bg_kassa">
        <span class="button_kassa" type="">Возврат</span>
      </button>
      <button class="block_button_kassa bg_kassa">
        <span class="button_kassa" type="">Смена</span>
      </button>
      <button class="block_button_kassa bg_kassa">
        <span class="button_kassa" type="">X - отчет</span>
      </button>
      <button class="block_button_kassa bg_kassa">
        <span class="button_kassa" type="">Внесение</span>
      </button>
      <button class="block_button_kassa bg_kassa">
        <span class="button_kassa" type="">Изъятие</span>
      </button>
    </div>
    <div>
      <Dialog
        v-model:visible="pay"
        modal
        header="Продажа"
        :style="{ width: '60vw' }"
      >
        <div class="flex flex-col gap-12">
          <button
            @click="addProduct = true"
            class="w-full flex items-center justify-between border p-4 rounded-md"
          >
            <span class="w-full text-center" type="">
              Добавить товар / Услугу
            </span>
          </button>

          <div
            v-if="productToPay.length >= 1"
            class="flex flex-col bg-neutral-800"
          >
            <ClientOnly placeholder="Загрузка...">
              <DataTable
                :value="productToPay"
                class="rounded-t-md overflow-hidden w-full"
              >
                <Column
                  field="attributes.Name"
                  header="Наименование"
                  class="text-sm w-[50%]"
                ></Column>
                <Column
                  field="attributes.Price"
                  header="Цена ₽"
                  class="text-sm"
                ></Column>
                <Column field="id" header="Скидка %" class="text-sm">
                  <template #body="slotProps">
                    <div class="flex items-center gap-2 justify-start">
                      <input
                        type="number"
                        min="0"
                        max="20"
                        value="0"
                        class="w-16 p-2 bg-transparent border border-neutral-700 rounded-md"
                      />
                    </div>
                  </template>
                </Column>
                <Column field="id" header="Кол-во" class="text-sm">
                  <template #body="slotProps">
                    <div class="flex items-center gap-2 justify-start">
                      <input
                        type="number"
                        min="1"
                        :max="slotProps.data.attributes.Ostatki"
                        :key="slotProps.data"
                        value="1"
                        class="w-16 p-2 bg-transparent border border-neutral-700 rounded-md"
                        @change="addKol(slotProps.data, $event.target.value)"
                      />
                    </div>
                  </template>
                </Column>
                <Column field="id" class="text-sm w-[2%]">
                  <template #body="slotProps">
                    <div class="flex items-center gap-2 justify-end">
                      <button
                        @click="removeProductToPay(slotProps.data)"
                        class="p-2 flex items-center justify-center"
                      >
                        <IconsIDelete class="w-4 h-4" />
                      </button>
                    </div>
                  </template>
                </Column>
              </DataTable>
            </ClientOnly>
            <div class="p-4 flex justify-end text-right text-xl font-bold">
              Итого: {{ itogo }} ₽
            </div>
          </div>
          <div class="flex flex-col gap-6">
            <span>Выберите тип оплаты</span>
            <div
              class="flex items-center divide-x divide-neutral-500 rounded-md overflow-hidden border border-neutral-500"
            >
              <div
                @click="payType = !payType"
                class="p-4 cursor-pointer w-1/2 text-center flex items-center justify-center gap-2"
                :class="payType == true ? 'bg-neutral-700' : 'bg-transparent'"
              >
                Наличными
              </div>
              <div
                @click="payType = !payType"
                class="p-4 cursor-pointer w-1/2 text-center flex items-center justify-center gap-2"
                :class="payType == false ? 'bg-neutral-700' : 'bg-transparent'"
              >
                Картой
              </div>
            </div>
            <div class="flex items-center gap-12">
              <span class="p-float-label">
                <InputText id="username" v-model="inputMoney" class="w-full" />
                <label for="username">Внесено</label>
              </span>
              <span> Сдача : {{ inputMoney }} </span>
            </div>
            <span></span>
          </div>
        </div>
        <template #footer>
          <Button
            class="!bg-red-500 !text-white"
            label="Отмена"
            icon="pi pi-times"
            @click="pay = false"
            text
          />
          <Button
            class="!bg-green-500 !text-white"
            label="Оплатить"
            icon="pi pi-check"
            @click="pay = false"
            autofocus
          />
        </template>
      </Dialog>
      <Dialog
        v-model:visible="addProduct"
        modal
        header="Добавить Товар / Услугу"
        :style="{ width: '60vw' }"
      >
        <div class="flex flex-col gap-4">
          <div class="w-full flex items-center justify-between">
            <ClientOnly placeholder="Загрузка...">
              <DataTable
                :value="allProducts"
                stripedRows
                removableSort
                v-model:filters="filters"
                :globalFilterFields="['attributes.Name', 'attributes.ART']"
                class="rounded-t-md overflow-hidden w-full"
                paginator
                :rows="6"
                :rowsPerPageOptions="[6, 20, 50]"
              >
                <template #header>
                  <div class="flex justify-between w-full">
                    <InputText
                      v-model="filters['global'].value"
                      placeholder="Поиск по продукции"
                      class="w-full"
                    />
                  </div>
                </template>
                <Column
                  field="attributes.ART"
                  filterField="attributes.ART"
                  header="Арт"
                  style="width: 10%"
                  class="text-sm"
                ></Column>
                <Column
                  field="attributes.Name"
                  filterField="attributes.Name"
                  header="Наименование"
                  sortable
                  class="text-sm"
                ></Column>
                <Column
                  field="attributes.Price"
                  filterField="attributes.Price"
                  header="Цена"
                  sortable
                  class="text-sm"
                ></Column>
                <Column
                  field="attributes.Ostatki"
                  filterField="attributes.Ostatki"
                  header="Остатки"
                  sortable
                  class="text-sm"
                  style="width: 3%"
                ></Column>
                <Column field="id" style="width: 2%" class="text-sm">
                  <template #body="slotProps">
                    <div class="flex items-center gap-2 justify-end">
                      <div
                        v-if="slotProps.data.attributes.Active == true"
                        class="w-3 h-3 bg-green-500 rounded-full"
                      ></div>
                      <div v-else class="w-3 h-3 bg-red-500 rounded-full"></div>
                    </div>
                  </template>
                </Column>
                <Column
                  field="id"
                  header="Действия"
                  style="width: 8%"
                  class="text-sm"
                >
                  <template #body="slotProps">
                    <div class="flex items-center gap-2 justify-end">
                      <button
                        v-if="
                          slotProps.data.attributes.Active == true &&
                          insertProduct(slotProps.data) == 0
                        "
                        @click="addProductToPay(slotProps.data)"
                        class="p-2 bg-neutral-700 rounded-md flex items-center justify-center"
                      >
                        <IconsIPlus class="w-5 h-5" />
                      </button>

                      <button
                        v-else-if="
                          slotProps.data.attributes.Active == true &&
                          insertProduct(slotProps.data) >= 1
                        "
                        @click="removeProductToPay(slotProps.data)"
                        class="p-2 bg-neutral-700 rounded-md flex items-center justify-center"
                      >
                        <IconsIDelete class="w-4 h-4" />
                      </button>
                    </div>
                  </template>
                </Column>
              </DataTable>
            </ClientOnly>
          </div>
        </div>
        <template #footer>
          <Button
            class="!bg-green-500 !text-white"
            label="Готово"
            icon="pi pi-check"
            @click="addProduct = false"
            autofocus
          />
        </template>
      </Dialog>
    </div>
  </div>
</template>

<script setup>
import { FilterMatchMode } from 'primevue/api'
import { ALL_PRODUCTS } from '@/gql/KASSA'
useHead({
  title: 'TAIGA - Касса'
})
definePageMeta({
  middleware: 'auth'
})

//product
const { result: P1 } = useQuery(ALL_PRODUCTS)
const allProducts = computed(() => P1.value?.products?.data ?? [])

const productToPay = ref([])
const addProduct = ref(false)
const filters = ref({
  global: { value: null, matchMode: FilterMatchMode.CONTAINS },
  'attributes.Name': { value: null, matchMode: FilterMatchMode.CONTAINS },
  'attributes.ART': { value: null, matchMode: FilterMatchMode.CONTAINS }
})

function addProductToPay (product) {
  productToPay.value.push(product)
}
function removeProductToPay (product) {
  productToPay.value = productToPay.value.filter(x => x !== product)
}

function insertProduct (product) {
  return productToPay.value.filter(x => x == product).length
}

function addKol(product, val) {
    console.log(product, val);
}

const itogo = computed(() => {
  const allItemsPrice = productToPay.value.map(x => x.attributes.Price)
  const sumWithInitial = allItemsPrice.reduce((a, b) => a + b, 0)
  return sumWithInitial.toFixed(2)
})

//pay
const inputMoney = ref(0)
const pay = ref(true)
const payType = ref(true)
</script>

<style scoped>
.block_button_kassa {
  @apply p-4 rounded-md  anime flex items-center justify-center h-40 cursor-pointer;
}

.bg_kassa {
  @apply bg-neutral-700 hover:bg-neutral-600 anime;
}

.button_kassa {
  @apply text-xl font-bold;
}
</style>
