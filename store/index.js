import { defineStore } from 'pinia'

const queryMe = gql`
  query {
    me {
      id
      username
      calendar
      role {
        description
      }
    }
  }
`

export const userInfo = defineStore('session', {
  state: () => {
    return {
      info: {}
    }
  },
  actions: {
    async registerUser () {
      const { result: me, onResult } = await useQuery(queryMe)

      onResult(res => {
        this.info = res.data.me
      })
    },
    clearSession () {
      this.info = {}
    }
  },
  getters: {
    getInfo: state => state.info
  },
  persist: {
    storage: persistedState.sessionStorage
  }
})
