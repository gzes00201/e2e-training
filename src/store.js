import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    addCount (state, payload) {
      state.count += payload
    }
  },
  actions: {
    doAddCount ({ commit }, payload) {
      console.log(payload)
      commit('addCount', 10)
    }
  }
})
