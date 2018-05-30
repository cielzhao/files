import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
  priceOptionState: false, //价格区间输入部分的显示状态
  priceOptionState1: false //价格区间输入部分的显示状态
}

const mutations = {
  priceOptionHide(state){
    state.priceOptionState = false
  },
  priceOptionShow(state){
    state.priceOptionState = true
  },
  priceOptionHide1(state){
    state.priceOptionState1 = false
  },
  priceOptionShow1(state){
    state.priceOptionState1 = true
  }
}

//const actions = {
//priceOptionHide: ({ commit }) => commit('priceOptionHide'),
//priceOptionShow: ({ commit }) => commit('priceOptionShow'),
//}

export default new Vuex.Store({
  state,
  mutations
})