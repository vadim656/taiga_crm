<template>
  <div class="text-white">
    <span v-if="!visible">Загрузка... </span>
    <div v-else="">
      <pre>
          {{ admins }}
      </pre>
    </div>
  </div>
</template>

<script setup>
import ADMINS_USERS from '@/gql/query/ADMINS_USERS.gql'

const visible = ref(false)

const { data: admins } = await useAsyncQuery(ADMINS_USERS)

if (admins.value.usersPermissionsUsers) {
  visible.value = true
}
</script>
