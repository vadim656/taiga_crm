<template>
  <div class="w-full h-full flex flex-col gap-12 items-center justify-center">
    <span class="uppercase text-2xl font-bold">Живая тайга</span>
    <!-- {{ route.name }} -->
    <div class="flex flex-col gap-4 items-center justify-center">
      <div class="flex gap-2 w-full justify-center">
        <input
          type="password"
          minlength="1"
          maxlength="1"
          required
          v-for="(item, i) in 6"
          @input="setPin($event.target.value, i)"
          :key="i"
          class="w-8 h-14 rounded-md text-center text-xl font-bold"
          ref="inputRefs"
        />
      </div>
      <span v-if="error" class="text-red-400 text-sm">{{ error }}</span>
      <span class="text-xs text-green-400 leading-8 text-center">
        Смена открыта {{ addRetail.rows[0].created }}</span
      >
    </div>
  </div>
</template>

<script setup>
import { sessionInfo, userInfo } from '@/store'
import { watchDeep } from '@vueuse/core'
const store = sessionInfo()
const storeUser = userInfo()
definePageMeta({
  layout: 'login'
})

const userLogin = ref('')
const router = useRouter()
const route = useRoute()
const jwt = ref()

const user = useStrapiUser()

const { login } = useStrapiAuth()
const { onLogin: LoginApollo } = useApollo()

const enabled = ref(false)
const idUser = ref()
const { result: getRole, onResult: getRoleRes } = useQuery(
  gql`
    query getRole($ID: ID) {
      usersPermissionsUser(id: $ID) {
        data {
          attributes {
            role {
              data {
                attributes {
                  name
                }
              }
            }
          }
        }
      }
    }
  `,
  () => ({
    ID: idUser.value
  }),
  () => ({
    enabled: enabled.value
  })
)

const { pending, data: addRetail } = await useFetch('/api/entity/retailshift', {
  method: 'GET',
  headers: {
    Authorization: 'Basic YWRtaW5AbW1wY2FwaXRhbDE6ZjkzZWMzMmVlYQ=='
  }
})

const pin = computed(() => {
  return userLogin.value.replace(/ /g, '').replaceAll('_', '')
})

const view = ref(false)

watch(pin, x => {
  if (view.value == true && x.length == 6 && route.name == 'auth-login') {
    onLogin()
  }
})

const error = ref('')

let pinDone = ref('')

// const router = useRouter()
const onLogin = async () => {
  if (view.value == true && route.name == 'auth-login') {
    await login({
      identifier: pinDone.value,
      password: pinDone.value
    })
      .then(res => {
        // console.log(res.user._object.$sstrapi_user)
        jwt.value = res.jwt
        LoginApollo(res.jwt)
        idUser.value = res.user._object.$sstrapi_user.id
        enabled.value = true

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
      })
  }
}

getRoleRes(queryResult => {
  storeUser.setUserRole(
    queryResult.data?.usersPermissionsUser.data.attributes.role.data.attributes
      .name
  )
})

const inputRefs = ref([])

onMounted(() => {
  setTimeout(() => {
    view.value = true
    inputRefs.value[0].focus()
  }, 500)
})

function setPin (target, pin) {
  if (pin + 1 !== inputRefs.value.length) {
    inputRefs.value[pin].value = target
    inputRefs.value[pin + 1].focus()
  } else {
    let pinCode = ''
    inputRefs.value.forEach(e => {
      console.log('forEach', e.value)
      pinDone.value = pinDone.value + e.value
    })
    onLogin()
  }
}
</script>

<style lang="scss" scoped></style>
