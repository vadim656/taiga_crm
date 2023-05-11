<script setup>
import { MASTERS_USERS } from '@/gql/query/MASTERS_USERS'

const { result: masters } = useQuery(MASTERS_USERS, null, {
  pollInterval: 2000
})

const dataMasters = computed(() => {
  return masters.value?.usersPermissionsUsers.data
})

const selectedProduct = ref()

const search = ref('')

</script>
<template>
  <div class="text-white">
    <div
      class="flex items-center justify-between p-4 bg-white dark:bg-gray-800"
    >
      <span class="p-input-icon-left">
        <i class="pi pi-search" />
        <InputText v-model="search" placeholder="Поиск по мастерам" />
      </span>

      <ButtonsBDelete @click="modalAddHandler" icon="plus" type="add"
        >Добавить</ButtonsBDelete
      >
    </div>
    <ClientOnly placeholder="loading...">
      <DataTable
        v-model:selection="selectedProduct"
        dataKey="id"
        :value="dataMasters"
        class="w-full"
      >
        <Column selectionMode="multiple"></Column>
        <Column field="attributes.FIO" header="ФИО"></Column>
        <Column field="attributes.Zapisi" header="Записи"></Column>
        <Column
          field="attributes.user_status.data.attributes.Name"
          header="Статус"
        ></Column>
        <Column
          field="attributes.user_status.data.attributes.Name"
          header="Действия"
        ></Column>
      </DataTable>
    </ClientOnly>

    <div>
      <pre>
        {{ dataMasters }}
    </pre
      >
    </div>
  </div>
</template>
