import { defineStore, acceptHMRUpdate } from 'pinia'



export const userInfo = defineStore('user', {
  state: () => {
    return {
      data: {},
      role: ''
    }
  },
  actions: {
    setUserId(data) {
      this.data = data
    },
    setUserRole(role) {
      this.role = role
    },

    logout() {
      this.data = {}
    }
  },
  getters: {
    userID: state => state.id
  },
  persist: {
    storage: persistedState.localStorage
  }
})

export const sessionInfo = defineStore('session', {
  state: () => {
    return {
      retailshift: 'zxczxc',
      sessionID: ''
    }
  },
  actions: {
    activeRetail(id) {
      this.retailshift = id
    },
    openShift(id) {
      this.sessionID = id
    },
    closeShift() {
      console.log('this.sessionID = ничего');
    }
  },
  getters: {
    retailID: state => state.retailshift
  },
  persist: {
    storage: persistedState.localStorage
  }
})


if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(userInfo, import.meta.hot))
  import.meta.hot.accept(acceptHMRUpdate(sessionInfo, import.meta.hot))
}
