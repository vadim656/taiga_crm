<script setup>
import { userInfo } from '@/store'

const session = userInfo()
const router = useRouter()
const route = useRoute()

watchEffect(() => {
  if (session === null && route.path !== '/login') {
    console.log('watch session')
    router.push('/login')
  }
})
</script>
<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<style>


.page-enter-active,
.page-leave-active {
  transition: all 0.2s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
