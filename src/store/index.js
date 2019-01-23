import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state:{
    modalVisible: false,
    modalComponent: null
  },
  mutations: {
    showModal(state, componentName) {
      state.modalVisible = true;
      state.modalComponent = componentName;
    },
    hideModal(state) {
      state.modalVisible = false;
    },
  }
})

export default store
