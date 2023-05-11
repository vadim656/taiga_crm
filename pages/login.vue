<script setup>
import { userInfo } from '@/store'
const { onLogin } = useApollo()
definePageMeta({
  layout: 'login'
})

const store = userInfo()

const isLoading = ref(false)
const router = useRouter()

const identifier = ref('')
const password = ref('')

const loginQuery = gql`
  mutation ($identifier: String!, $password: String!) {
    login(input: { identifier: $identifier, password: $password }) {
      jwt
    }
  }
`
const { mutate: login, onDone } = useMutation(loginQuery, () => ({
  variables: {
    identifier: identifier.value,
    password: password.value
  }
}))
onDone(result => {
  onLogin(result.data.login.jwt)
  store.registerUser()
  setTimeout(() => {
    router.push('/')
  }, 500)
})
</script>
<template>
  <main class="flex cc h-full min-h-screen bg-gray-900">
    <div class="p-4">
      <div class="flex flex-col gap-4">
        <div class="form auth-form">
          <div class="">
            <header class="form-header">
              <h3 class="text-3xl mb-4">Sign In</h3>
            </header>
            <section class="input-section">
              <div class="form-control">
                <InputsInputDef
                  label="Login"
                  id="login"
                  placeholder=""
                  v-model="identifier"
                />
              </div>
              <div class="form-control">
                <InputsInputDef
                  label="Password"
                  id="Password"
                  placeholder=""
                  v-model="password"
                />
              </div>
              <div>
                <button
                  @click="login"
                  :disabled="isLoading"
                  class="p-4 bg-red-400"
                >
                  {{ isLoading ? '...' : 'Sign in' }}
                </button>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
