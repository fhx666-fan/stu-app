import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  userName: ''
}

const mutations = {

  setUserName (state, val) {
    state.userName = val
  }
}

export default new Vuex.Store({
  state,
  mutations
})
