import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state:{
    show: true
  },
  mutations:{
    changeBannerState(state){
      state.show = false
    }
  }
})