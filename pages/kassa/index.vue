<template>
  <div>
    <div v-if="visible">
      <Toast position="bottom-right" />
      <div class="grid grid-cols-3 gap-4 mt-3">
        <button
          @click="pay = true"
          class="block_button_kassa col-span-3 bg-green-400 hover:bg-green-500"
        >
          <span class="button_kassa !text-4xl" type="">Продажа</span>
        </button>
        <button
          @click="getUrl('/kassa/vozvrat')"
          class="block_button_kassa bg_kassa"
        >
          <span class="button_kassa" type="">Возврат</span>
        </button>
        <div
          @click="openShift()"
          class="block_button_kassa bg_kassa flex-col gap-4"
        >
          <div
            class="button_kassa flex items-center justify-center gap-4"
            type=""
          >
            Открыть смену
          </div>
        </div>
        <div
          @click="closeShift()"
          class="block_button_kassa bg_kassa flex-col gap-4"
        >
          <div
            class="button_kassa flex items-center justify-center gap-4"
            type=""
          >
            Закрыть смену
          </div>
        </div>
        <button @click="XReport" class="block_button_kassa bg_kassa">
          <span class="button_kassa" type="">X - отчет</span>
        </button>
        <button
          @click="PaymentCashView = true"
          class="block_button_kassa bg_kassa"
        >
          <span class="button_kassa" type="">Внесение</span>
        </button>
        <button
          @click="DepositingCashView = true"
          class="block_button_kassa bg_kassa"
        >
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
              <DataTable
                :value="productToPay"
                class="rounded-t-md overflow-hidden w-full"
              >
                <Column
                  field="attributes.Name"
                  header="Наименование"
                  class="text-sm w-[40%]"
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
                        @change="setSkidka($event.target.value, slotProps.data)"
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
                        @change="addKol(slotProps.data.id, $event.target.value)"
                      />
                    </div>
                  </template>
                </Column>
                <Column header="Итого ₽" class="text-sm">
                  <template #body="slotProps">
                    <div class="flex items-center gap-2 justify-start">
                      {{ itogItem(slotProps.data) }}
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

              <div
                class="p-4 flex justify-end text-right text-xl font-bold gap-12"
              >
                <span class="hidden">{{ itogo }} </span>
                Итого: {{ itogoFixed }} ₽
              </div>
            </div>
            <div class="flex flex-col gap-6">
              <span>Клиент</span>
              <button
                @click="addClient"
                class="w-full flex items-center justify-between border p-4 rounded-md"
              >
                <span class="w-full text-center" type="">
                  Выбрать клиента
                </span>
              </button>
            </div>
            <div
              v-if="activeClient"
              class="w-full flex justify-between p-4 rounded-md bg-neutral-800"
            >
              <div class="flex flex-col gap-2">
                <span class="font-bold">{{ activeClient.attributes.FIO }}</span>
                <span>{{ activeClient.attributes.username }}</span>
                <span>{{ activeClient.attributes.email }}</span>
              </div>
              <div></div>
<!-- 
              <div class="flex flex-col gap-2">
                <span class="font-bold">Бонусы</span>
                <span>{{ activeClient.attributes.Bonus }} ₽</span>
                <div>
                  <button type="" class="px-3 py-2 bg-green-500 text-white rounded-md">Списать</button>
                </div>
              </div> -->
            </div>
            <!-- <pre>{{ activeClient }}</pre> -->
            <div class="flex flex-col gap-6">
              <span>Тип оплаты</span>
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
                  :class="
                    payType == false ? 'bg-neutral-700' : 'bg-transparent'
                  "
                >
                  Картой
                </div>
              </div>
              <div class="grid grid-cols-2 gap-4">
                <div class="p-float-label my-4">
                  <Dropdown
                    v-model="selectedCupon"
                    inputId="dd-city"
                    :options="Cupons"
                    optionLabel="name"
                    class="w-1/2 text-sm"
                  />
                  <label for="dd-city">Выбрать купон</label>
                </div>
                <div v-if="payType == true" class="flex items-center gap-12">
                  <span class="p-float-label">
                    <InputText
                      id="username"
                      v-model="inputMoney"
                      class="w-full"
                    />
                    <label for="username">Внесено</label>
                  </span>
                  <span> Сдача : {{ sdacha }}</span>
                </div>
              </div>
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
              v-if="payType == true"
              class="!bg-green-500 !text-white"
              label="Оплатить"
              icon="pi pi-check"
              @click="getPay"
            />
            <Button
              v-else-if="payType == false"
              class="!bg-green-500 !text-white"
              label="Оплатить карта"
              icon="pi pi-check"
              @click="getPayCart"
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
                <!-- <Column
                  field="attributes.ART"
                  filterField="attributes.ART"
                  header="Арт"
                  style="width: 10%"
                  class="text-sm"
                ></Column> -->
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
            </div>
          </div>
          <template #footer>
            <Button
              class="!bg-green-500 !text-white"
              label="Готово"
              icon="pi pi-check"
              @click="addProduct = false"
            />
          </template>
        </Dialog>
        <Dialog
          v-model:visible="addClientView"
          modal
          header="Добавить Клиента"
          :style="{ width: '40vw' }"
        >
          <div class="flex flex-col gap-4">
            <div class="w-full flex items-center justify-between">
              <!-- <pre>{{ allUsers }}</pre> -->
              <DataTable
                :value="allUsers"
                stripedRows
                removableSort
                v-model:filters="filters"
                :globalFilterFields="['attributes.FIO', 'attributes.username']"
                class="rounded-t-md overflow-hidden w-full"
                paginator
                :rows="6"
                :rowsPerPageOptions="[6, 20, 50]"
              >
                <template #header>
                  <div class="flex justify-between w-full">
                    <InputText
                      v-model="filters['global'].value"
                      placeholder="Поиск по клиентам"
                      class="w-full"
                    />
                  </div>
                </template>

                <Column
                  field="attributes.FIO"
                  filterField="attributes.FIO"
                  header="ФИО"
                  class="text-sm"
                ></Column>
                <Column
                  field="attributes.username"
                  filterField="attributes.username"
                  header="Телефон"
                  class="text-sm"
                ></Column>
                <Column
                  field="attributes.user_records.data"
                  filterField="attributes.user_records.data"
                  header="Заказов"
                  class="text-sm"
                >
                  <template #body="slotProps">
                    <div class="flex items-center gap-2 justify-start">
                      {{ slotProps.data.attributes.user_records.data.length }}
                    </div>
                  </template>
                </Column>
                <Column header="" class="text-sm">
                  <template #body="slotProps">
                    <div class="flex items-center gap-2 justify-start">
                      <button @click="setClient(slotProps.data)" type="">
                        Выбрать
                      </button>
                    </div>
                  </template>
                </Column>
              </DataTable>
            </div>
          </div>
          <template #footer>
            <Button
              class="!bg-green-500 !text-white"
              label="Готово"
              icon="pi pi-check"
              @click="addClientView = false"
            />
          </template>
        </Dialog>
        <Dialog
          v-model:visible="PaymentCashView"
          modal
          header="Внесение наличных"
          :style="{ width: '30vw' }"
        >
          <div class="flex flex-col gap-12">
            <InputNumber
              v-model="PaymentCashValue"
              inputId="withoutgrouping"
              :useGrouping="false"
            />
          </div>
          <template #footer>
            <Button
              class="!bg-red-500 !text-white"
              label="Отмена"
              icon="pi pi-times"
              @click="PaymentCashView = false"
              text
            />
            <Button
              class="!bg-green-500 !text-white"
              label="Внести"
              icon="pi pi-check"
              @click="PaymentCash"
            />
          </template>
        </Dialog>
        <Dialog
          v-model:visible="DepositingCashView"
          modal
          header="Изъятие наличных"
          :style="{ width: '30vw' }"
        >
          <div class="flex flex-col gap-12">
            <InputNumber
              v-model="DepositingCashValue"
              inputId="withoutgrouping"
              :useGrouping="false"
            />
          </div>
          <template #footer>
            <Button
              class="!bg-red-500 !text-white"
              label="Отмена"
              icon="pi pi-times"
              @click="DepositingCashView = false"
              text
            />
            <Button
              class="!bg-green-500 !text-white"
              label="Изъять"
              icon="pi pi-check"
              @click="DepositingCash"
            />
          </template>
        </Dialog>
        <Dialog
          v-model:visible="sessionView"
          modal
          header="Закрытие смены"
          :style="{ width: '30vw' }"
        >
          <div class="flex flex-col gap-12">
            <span class="text-xl">В кассе {{ kktData }} ₽</span>
          </div>
          <template #footer>
            <Button
              class="!bg-red-500 !text-white"
              label="Отмена"
              icon="pi pi-times"
              @click="sessionView = false"
              text
            />
            <Button
              class="!bg-green-500 !text-white"
              label="Закрыть"
              icon="pi pi-check"
              @click="closeShift"
            />
          </template>
        </Dialog>
      </div>
    </div>

    <span v-else>Загрузка...</span>
    <pre>{{ storeUser.data.FIO }}</pre>
  </div>
</template>

<script setup>
import { FilterMatchMode } from 'primevue/api'
import { useToast } from 'primevue/usetoast'
import { ALL_PRODUCTS, UPDATE_SERT } from '@/gql/KASSA'
import { ALL_USER } from '@/gql/query/USERS'
import { v4 as uuidv4 } from 'uuid'
import { sessionInfo, userInfo } from '@/store'

useHead({
  title: 'TAIGA - Касса'
})
definePageMeta({
  middleware: 'auth',
  layout: 'default'
})
const visible = ref(false)
const router = useRouter()
const storeShift = sessionInfo()
const storeUser = userInfo()
const toast = useToast()

//shift
const sessionView = ref(false)

function sessionSwith () {
  if (storeShift.sessionID == '') {
    openShift()
  } else {
    sessionView.value = true
    GetDataKKT()
    // closeShift()
  }
}

function setSkidka (val, item) {
  console.log(item.id)
  const all = productToPay.value
  for (const product in all) {
    if (all[product].id == item.id) {
      all[product].discont = Number(val)
    }
  }
}

const itogItem = item => {
  const amount1 = item.attributes.Price * item.value
  const amount2 = amount1 - (amount1 / 100) * item.discont

  const all = productToPay.value
  for (const product in all) {
    if (all[product].id == item.id) {
      all[product].amount = amount2
    }
  }
  console.log('dis', item)
  return amount2.toFixed(2)
}

const selectedCupon = ref()
const Cupons = ref([
  { name: '500 ₽', code: '500' },
  { name: '1 000 ₽', code: '1000' },
  { name: '1 500 ₽', code: '1500' },
  { name: '2 000 ₽', code: '2000' },
  { name: '2 500 ₽', code: '2500' },
  { name: '3 000 ₽', code: '3000' },
  { name: '3 500 ₽', code: '3500' },
  { name: '4 000 ₽', code: '4000' },
  { name: '4 500 ₽', code: '4500' },
  { name: '5 000 ₽', code: '5000' }
])

watch(selectedCupon, newPrice => {
  if (newPrice.code == 'none') {
    console.log(newPrice.code)
  } else {
    itogoFixed.value = itogoFixed.value - newPrice.code
  }
})

async function openShift () {
  const data = {
    Command: 'OpenShift',
    InnKkm: '4217204110',
    NumDevice: 0,
    IdDevice: '',
    CashierName: storeUser.data.FIO,
    NotPrint: false,
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
      console.log('kkm', res.data.value.SessionNumber)
      storeShift.openShift(res.data.value.SessionNumber)
      toast.add({
        severity: 'info',
        summary: 'Успешно',
        detail: `Смена # ${res.data.value.SessionNumber} открыта`,
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

async function closeShift () {
  storeShift.closeShift()
  const data = {
    Command: 'CloseShift',
    InnKkm: '4217204110',
    NumDevice: 0,
    IdDevice: '',
    CashierName: storeUser.data.FIO,
    NotPrint: false,
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
    .then(() => {
      toast.add({
        severity: 'info',
        summary: 'Успешно',
        detail: `Смена закрыта`,
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
  const data = {
    ...product,
    value: 1,
    amount: product.attributes.Price,
    discont: 0
  }
  productToPay.value.push(data)
}
function removeProductToPay (product) {
  productToPay.value = productToPay.value.filter(x => x.id !== product.id)
}

function insertProduct (product) {
  return productToPay.value.filter(x => x.id == product.id).length
}

const productInCart = () => {}

function addKol (product, val) {
  for (let i = 0; i < productToPay.value.length; i++) {
    if (productToPay.value[i].id == product) {
      productToPay.value[i].value = Number(val)
    }
  }

  console.log(product, val)
}

const itogoFixed = ref(0)

const itogo = computed(() => {
  const data = productToPay.value.map(x => x.amount)

  const sumWithInitial = data.reduce((a, b) => a + b, 0)
  itogoFixed.value = sumWithInitial.toFixed(2)
  return sumWithInitial.toFixed(2)
})

const sdacha = computed(() => {
  const x = itogo.value
  return inputMoney.value - x
})

//pay
const inputMoney = ref(0)
const pay = ref(false)
const payType = ref(true)

const { mutate: updateSert, onDone: sertDone } = useMutation(UPDATE_SERT)

function getPay_CRM(data) {
    console.log('getPay_CRM', data);
    updateSert({
      ID: data
    })
}

function getPay_cart_CRM(data) {
    console.log('getPay_CRM', data);
    updateSert({
      ID: data
    })
}

async function getPay () {
  const prices = []
  const products = []
  productToPay.value.forEach(e => {
    const element = {
      Register: {
        Name: e.attributes.Name,
        Quantity: e.value,
        Price: Number(e.attributes.Price).toFixed(2),
        Amount: Number(e.amount).toFixed(2),
        Department: 0,
        Tax: -1,
        SignMethodCalculation: 4,
        SignCalculationObject: 4
      }
    }
    prices.push(prices.push(Number(e.amount)))
    products.push(element)
    getPay_CRM(e.id)
  })
  const sumWithInitial = prices.reduce((a, b) => a + b, 0)

  const data = {
    Command: 'RegisterCheck',
    InnKkm: '4217204110',
    NumDevice: 0,
    KktNumber: '',
    Timeout: 30,
    IdCommand: uuidv4(),
    IsFiscalCheck: true,
    TypeCheck: 0,
    NotPrint: false,
    NumberCopies: 0,
    CashierName: storeUser.data.FIO,
    TaxVariant: '',
    NumDeviceByProcessing: null,
    PrintSlipAfterCheck: false,
    PrintSlipForCashier: true,

    CheckStrings: [...products, { PrintText: { Text: '<<->>' } }],
    Cash: Number(sumWithInitial).toFixed(2)
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
      console.log('kkm', res.data.value)

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
async function getPayCart () {
  const prices = []
  const products = []
  productToPay.value.forEach(e => {
    const element = {
      Register: {
        Name: e.attributes.Name,
        Quantity: e.value,
        Price: Number(e.attributes.Price).toFixed(2),
        Amount: Number(e.amount).toFixed(2),
        Department: 0,
        Tax: -1,
        SignMethodCalculation: 4,
        SignCalculationObject: 4
      }
    }
    prices.push(Number(e.amount))
    products.push(element)
    getPay_cart_CRM(e.id)
  })
  const sumWithInitial = prices.reduce((a, b) => a + b, 0)

  const data = {
    Command: 'PayByPaymentCard',
    InnKkm: '4217204110',
    NumDevice: 0,
    KktNumber: '',
    Timeout: 30,
    IdCommand: uuidv4(),
    IsFiscalCheck: true,
    TypeCheck: 0,
    NotPrint: false,
    NumberCopies: 0,
    CashierName: storeUser.data.FIO,
    TaxVariant: '',
    NumDeviceByProcessing: null,
    PrintSlipAfterCheck: false,
    PrintSlipForCashier: true,
    CheckStrings: [...products, { PrintText: { Text: '<<->>' } }],
    Amount: Number(sumWithInitial).toFixed(2)
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
      console.log('kkm', res.data.value)

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

async function XReport () {
  const data = {
    Command: 'XReport',
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
      toast.add({
        severity: 'info',
        summary: 'Успешно',
        detail: `X-отчет успешно`,
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

// изъятие
const DepositingCashView = ref(false)
const DepositingCashValue = ref(0)

async function DepositingCash () {
  const data = {
    Command: 'PaymentCash',
    InnKkm: '4217204110',
    NumDevice: 0,
    IdDevice: '',
    CashierName: storeUser.data.FIO,
    Amount: DepositingCashValue.value.toFixed(2),
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
      DepositingCashView.value = false
      toast.add({
        severity: 'info',
        summary: 'Успешно',
        detail: `Изъятие ${DepositingCashValue.value.toFixed(2)}₽ успешно`,
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
//внесение
const PaymentCashView = ref(false)
const PaymentCashValue = ref(0)

async function PaymentCash () {
  const data = {
    Command: 'DepositingCash',
    InnKkm: '4217204110',
    NumDevice: 0,
    IdDevice: '',
    CashierName: storeUser.data.FIO,
    Amount: PaymentCashValue.value.toFixed(2),
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
      PaymentCashView.value = false
      toast.add({
        severity: 'info',
        summary: 'Успешно',
        detail: `Внесение ${PaymentCashValue.value.toFixed(2)}₽ успешно`,
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

//текущее состояние

const kktData = ref()

async function GetDataKKT () {
  const data = {
    Command: 'GetDataKKT',
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
      kktData.value = res.data.value
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

// add client

const { result: users } = useQuery(ALL_USER, null, {
  fetchPolicy: 'no-cache'
})

const allUsers = computed(() => users.value?.usersPermissionsUsers?.data ?? [])

const addClientView = ref(false)
function addClient () {
  addClientView.value = true
}

const activeClient = ref()

function setClient (data) {
  activeClient.value = data
  addClientView.value = false
  console.log(data)
}

//////

function getUrl (url) {
  router.push(url)
}
onMounted(() => {
  setTimeout(() => {
    visible.value = true
  }, 200)
})
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
