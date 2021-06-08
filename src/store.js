import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  userName: '',
  sid:'',
  cid:'',
}

const mutations = {
  setUserName (state, val) {
    state.userName = val
  },
  setSid(state,val){
    state.sid = val
  },
  setCid(state,val){
    state.cid = val
  }
}

export default new Vuex.Store({
  state,
  mutations
})