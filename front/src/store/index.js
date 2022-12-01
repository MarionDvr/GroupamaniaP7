import { createStore } from 'vuex'

export default createStore({
  state: {
    isConnected: { type: Boolean }
  },
  getters: {
    getIsConnected(state) {
      return state.isConnected
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
