import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state:{
    priceOptionState: false
  },
  mutations:{
    priceOptionHide(state){
      state.priceOptionState = false
    },
    priceOptionShow(state){
      state.priceOptionState = false
    }
  }
})