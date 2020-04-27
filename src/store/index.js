import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user:{}
  },
  mutations: {
    saveUser(state,payload){
      state.user=payload
      console.log(state.user);
    }
  },
  actions: {
  },
  modules: {
  }
})
