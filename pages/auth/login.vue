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
      <pre class="text-xs text-green-400 leading-8">
      Смена открыта {{ addRetail.rows[0].created }}</pre
      >
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
  if (view.value == true && x.length == 6) {
    onLogin()
  }
})

const error = ref('')

// const router = useRouter()
const onLogin = async () => {
  if (view.value == true) {
    await login({
      identifier: pin.value,
      password: pin.value
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
onMounted(() => {
  setTimeout(() => {
    view.value = true
  }, 500)
})
</script>

<style lang="scss" scoped></style>
