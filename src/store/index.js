import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state:{
    // modal
    modalVisible: false,
    modalComponent: null,
    // subModal
    subModalVisible: false,
    subModalComponent: null,
  },
  mutations: {
    /**
     * modal
     * @param state
     * @param componentName
     */
    showModal(state, componentName) {
      state.modalVisible = true;
      state.modalComponent = componentName;
    },
    hideModal(state) {
      state.modalVisible = false;
      state.modalComponent = null;
    },
    /**
     * subModal
     * @param state
     * @param componentName
     */
    showSubModal(state, componentName) {
      state.subModalVisible = true;
      state.subModalComponent = componentName;
    },
    hideSubModal(state) {
      state.subModalVisible = false;
      state.subModalComponent = null;
    },
  }
})

export default store
