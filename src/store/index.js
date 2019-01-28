import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state:{
    // setting
    isSetting: false,
    // modal
    modalVisible: false,
    modalComponent: null,
    modalKey: null,
    // subModal
    subModalVisible: false,
    subModalComponent: null,
  },
  mutations: {
    setMode(state, val) {
      state.isSetting = val;
    },
    /**
     * modal
     * @param state
     * @param options {componentName:'ModalServiceList', componentKey:'cjh_testbed'}
     * options 객체에 필드를 추가할 수 있습니다.
     */
    showModal(state, options) {
      debugger
      state.modalVisible = true;
      state.modalComponent = options.componentName;
      state.modalKey = options.componentKey;
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
