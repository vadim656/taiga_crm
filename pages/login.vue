<template>
  <div class="w-full h-full flex flex-col gap-12 items-center justify-center">
    <span class="uppercase text-2xl font-bold">Живая тайга</span>
    <div class="flex flex-col gap-4 items-center justify-center">
      <InputMask
        id="pin"
        v-model="userLogin"
        mask="9 9 9 9 9 9"
        placeholder="9 9 9 9 9 9"
        class="w-[100px] text-center"
      />
      <span v-if="error" class="text-red-400 text-sm">{{ error }}</span>
      <pre class="text-xs text-green-400 leading-8">{{
        addRetail.rows[0].id
      }}</pre>
    </div>
  </div>
</template>

<script setup>
import { sessionInfo, userInfo } from '@/store'

const store = sessionInfo()
const storeUser = userInfo()
definePageMeta({
  layout: 'login'
})

const userLogin = ref('')
const router = useRouter()
const jwt = ref()

const user = useStrapiUser()

const { login } = useStrapiAuth()
const { onLogin: LoginApollo } = useApollo()

const { pending, data: addRetail } = await useFetch('/api/entity/retailshift', {
  method: 'GET',
  headers: {
    Authorization: 'Basic YWRtaW5AdmFmb3VyMjAxNjM6NGY1NjIwMzViNA=='
  },
  pick: ['rows']
})

const pin = computed(() => {
  return userLogin.value.replace(/ /g, '').replaceAll('_', '')
})

watch(pin, x => {
  if (x.length == 6) {
    onLogin()
    console.log(x)
  }
})

const error = ref('')
// const router = useRouter()
const onLogin = async () => {
  await login({
    identifier: pin.value,
    password: pin.value
  })
    .then(res => {
      console.log(res.user._object.$sstrapi_user)
      jwt.value = res.jwt
      LoginApollo(res.jwt)
      storeUser.setUserId(res.user._object.$sstrapi_user)
      store.activeRetail(addRetail.value.rows[0].id)
      setTimeout(() => {
        router.push('/')
      }, 500)
    })

    .catch(err => {
      if (err.error.message == 'Invalid identifier or password') {
        error.value = 'Неправильный PIN'
        userLogin.value = ''
      }
      console.log(err.error.message)
    })
}
</script>

<style lang="scss" scoped></style>
