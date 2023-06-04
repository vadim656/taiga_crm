<template>
  <div>
    <Toast position="bottom-right" />
    <!-- <ClientOnly placeholder="Загрузка...">
      <DataTable
        :value="counterpartyCom"
        stripedRows
        removableSort
        v-model:filters="filters"
        :globalFilterFields="['name']"
        class="rounded-t-md overflow-hidden"
        paginator
        :rows="10"
        :rowsPerPageOptions="[10, 20, 50]"
      >
        <template #header>
          <div class="flex justify-between">
            <div>
              <InputText
                v-model="filters['global'].value"
                placeholder="Поиск по клиентам"
              />
            </div>
            <ButtonsBDelete @click="addUserView = true" icon="plus" type="add"
              >Добавить</ButtonsBDelete
            >
          </div>
        </template>
        <Column
          field="name"
          filterField="name"
          header="ФИО"
          class="text-sm"
        ></Column>
        <Column
          field="created"
          filterField="created"
          header="Создан"
          class="text-sm"
        ></Column>
        <Column
          field="created"
          filterField="created"
          header="Дата рождения"
          class="text-sm"
        >
        </Column>
        <Column
          field="created"
          filterField="created"
          header="Заметки"
          style="width: 2%"
          class="text-sm"
        >
          <template #body="slotProps">
            <div class="flex items-center gap-2">2</div>
          </template>
        </Column>

        <Column
          field="created"
          filterField="created"
          header="Бонусы"
          style="width: 2%"
          class="text-sm"
        >
          <template #body="slotProps">
            <div class="flex items-center gap-2">1000</div>
          </template>
        </Column>
        <Column field="id" header="" style="width: 8%" class="text-sm">
          <template #body="slotProps">
            <div class="flex items-center gap-2">
              <button
                @click="editProduct(slotProps.data.id)"
                class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >
                <IconsIEdit />
              </button>
              <button>
                <IconsIDelete />
              </button>
            </div>
          </template>
        </Column>
      </DataTable>
    </ClientOnly> -->
    <!-- strapi -->
    <ClientOnly placeholder="Загрузка...">
      <DataTable
        :value="dataUsersData"
        stripedRows
        removableSort
        v-model:filters="filters"
        :globalFilterFields="['attributes.FIO']"
        class="rounded-t-md overflow-hidden"
        paginator
        :rows="10"
        :rowsPerPageOptions="[10, 20, 50]"
      >
        <template #header>
          <div class="flex justify-between">
            <div>
              <InputText
                v-model="filters['global'].value"
                placeholder="Поиск по клиентам"
              />
            </div>
            <ButtonsBDelete @click="addUserView = true" icon="plus" type="add"
              >Добавить</ButtonsBDelete
            >
          </div>
        </template>
        <Column
          field="attributes.FIO"
          filterField="attributes.FIO"
          header="ФИО"
          class="text-sm"
        ></Column>
        <Column
          field="attributes.createdAt"
          filterField="attributes.createdAt"
          header="Создан"
          class="text-sm"
        >
          <template #body="slotProps">
            <div class="flex items-center gap-2">
              {{ date(slotProps.data.attributes.createdAt) }}
            </div>
          </template>
        </Column>
        <Column
          field="attributes.DateRozhdenia"
          filterField="attributes.DateRozhdenia"
          header="Дата рождения"
          class="text-sm"
        >
          <template #body="slotProps">
            <div class="flex items-center gap-2">
              {{ date(slotProps.data.attributes.DateRozhdenia) }}
            </div>
          </template>
        </Column>
        <Column
          field="attributes.user_notes"
          filterField="attributes.user_notes"
          header="Заметки"
          style="width: 2%"
          class="text-sm"
        >
          <template #body="slotProps">
            <div class="flex items-center gap-2">
              {{ slotProps.data.attributes.user_notes.data.length }}
            </div>
          </template>
        </Column>

        <Column
          field="attributes.Bonus"
          filterField="attributes.Bonus"
          header="Бонусы"
          style="width: 2%"
          class="text-sm"
        >
          <!-- <template #body="slotProps">
            <div class="flex items-center gap-2">1000</div>
          </template> -->
        </Column>
        <!-- <Column field="id" header="" style="width: 8%" class="text-sm">
          <template #body="slotProps">
            <div class="flex items-center gap-2">
              <button
                @click="editProduct(slotProps.data.id)"
                class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >
                <IconsIEdit />
              </button>
              <button>
                <IconsIDelete />
              </button>
            </div>
          </template>
        </Column> -->
      </DataTable>
    </ClientOnly>
    <Dialog
      v-model:visible="addUserView"
      modal
      header="Добавить клиента"
      class="dark:bg-red-300"
      ><div class="py-2">
        <div class="grid grid-cols-2 gap-4">
          <span class="p-float-label col-span-2">
            <InputText id="username" v-model="userData.fio" class="w-full" />
            <label for="username">ФИО</label>
          </span>

          <span class="p-float-label">
            <InputMask
              v-model="userData.phone"
              date="phone"
              mask="+7(999) 999-99-99"
              placeholder="+7(999) 999-99-99"
            />

            <label for="username">Телефон</label>
          </span>
          <span class="p-float-label">
            <InputText id="username" v-model="userData.email" class="w-full" />
            <label for="username">Email</label>
          </span>
          <span class="p-float-label">
            <Calendar v-model="userData.dataRozh" inputId="birth_date" />
            <label for="birth_date">Дата рождения</label>
          </span>
          <span class="p-float-label">
            <InputText id="username" v-model="userData.bonus" class="w-full" />
            <label for="username">Бонусы</label>
          </span>
        </div>
      </div>

      <template #footer>
        <Button
          label="Отменить"
          icon="pi pi-times"
          @click="addUserView = false"
          text
          class="!bg-red-500 !text-white"
        />
        <Button
          label="Создать"
          icon="pi pi-check"
          @click="createUser()"
          autofocus
          class="!bg-green-500 !text-white"
        />
      </template>
    </Dialog>
  </div>
</template>

<script setup>
import { FilterMatchMode } from 'primevue/api'
import { useConfirm } from 'primevue/useconfirm'
import { useToast } from 'primevue/usetoast'

import { CREATE_USER, ALL_USER } from '@/gql/query/USERS.js'

const confirm = useConfirm()
const toast = useToast()
useHead({
  title: 'TAIGA CRM - Клиенты'
})
definePageMeta({
  middleware: 'auth'
})

const addUserView = ref(false)

const userData = ref({
  fio: '',
  dataRozh: '',
  bonus: 0,
  email: '',
  phone: ''
})

const phoneCom = computed(() => {
  return userData.value.phone.replace(/ /g, '').replace(/[^0-9]/g, '')
})

const {
  pending: pendingСounterparty,
  data: counterparty,
  refresh: refreshСounterparty
} = await useFetch('api/entity/counterparty', {
  method: 'GET',
  headers: {
    Authorization: 'Basic YWRtaW5AbW1wY2FwaXRhbDE6ZjkzZWMzMmVlYQ=='
  }
})

const counterpartyCom = computed(() => {
  if (counterparty.value?.rows && counterparty.value.rows) {
    return counterparty.value.rows
  } else {
    return []
  }
})

const filters = ref({
  global: { value: null, matchMode: FilterMatchMode.CONTAINS },
  name: { value: null, matchMode: FilterMatchMode.CONTAINS }
})

// create user

const { mutate: createUserStrapi } = useMutation(CREATE_USER)

async function createUser () {
  console.log(userData.value)

  const data = {
    name: userData.value.fio,
    phone: phoneCom.value,
    email: userData.value.email
  }

  await useFetch(() => '/api/entity/counterparty', {
    method: 'POST',
    headers: {
      Authorization: 'Basic YWRtaW5AbW1wY2FwaXRhbDE6ZjkzZWMzMmVlYQ==',
      'Content-Type': 'application/json;charset=utf-8',
      Accept: 'application/json;charset=utf-8'
    },
    body: JSON.stringify(data),
    credentials: 'omit'
  })
    .then(res => {
      createUserStrapi({
        USERNAME: phoneCom.value,
        EMAIL: userData.value.email,
        FIO: userData.value.fio,
        BONUS: userData.value.bonus,
        UID_SKLAD: res.data.value.id,
        DATER: userData.value.dataRozh
      })
      refreshСounterparty()
      setTimeout(() => {
        addUserView.value = false
        toast.add({
          severity: 'info',
          summary: 'Успешно',
          detail: `Клиент № ${res.data.value.id} создан`,
          life: 2000
        })
      }, 1000)
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

const { result: users } = useQuery(ALL_USER, null, {
  fetchPolicy: 'no-cache'
})

const dataUsersData = computed(
  () => users.value?.usersPermissionsUsers.data ?? []
)

let options = {
  year: 'numeric',
  month: 'numeric',
  day: 'numeric'
}

const date = q => {
  const x = new Date(q)
  return x.toLocaleString('ru', options)
}
</script>

<style lang="scss" scoped></style>
