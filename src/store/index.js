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
    modalValues: null,
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
     * @param options ex.{componentName:'ModalServiceList', key:'cjh_livebed', spName :'CJH Livebed'}
     * componentName만 필수이고 나머지 값들은 필요한 필드를 추가하여 사용한다.
     */
    showModal(state, options) {
      state.modalVisible = true;
      state.modalComponent = options.componentName;
      state.modalValues = options;
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
