import { defineStore } from 'pinia'



export const userInfo = defineStore('session', {
  state: () => {
    return {
      info: {}
    }
  },
  actions: {
    
  },

  persist: {
    storage: persistedState.sessionStorage
  }
})
