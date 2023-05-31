import { defineStore } from 'pinia'

export const userInfo = defineStore('user', {
  state: () => {
    return {
      data: {},
      role: ''
    }
  },
  actions: {
    setUserId (data) {
      this.data = data
    },
    setUserRole (role) {
      this.role = role
    }
  },
  getters: {
    userID: state => state.id
  },
  persist: {
    storage: persistedState.sessionStorage
  }
})

export const sessionInfo = defineStore('session', {
  state: () => {
    return {
      retailshift: 'zxczxc'
    }
  },
  actions: {
    activeRetail (id) {
      this.retailshift = id
    }
  },
  getters: {
    retailID: state => state.retailshift
  },
  persist: {
    storage: persistedState.sessionStorage
  }
})
