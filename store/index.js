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
      retailshift: 'zxczxc',
      sessionID: null
    }
  },
  actions: {
    activeRetail (id) {
      this.retailshift = id
    },
    openShift (id) {
      this.sessionID = id
    },
    closeShift () {
      console.log('this.sessionID = null');
    }
  },
  getters: {
    retailID: state => state.retailshift
  },
  persist: {
    storage: persistedState.localStorage
  }
})
