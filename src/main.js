// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'core-js/es6/promise'
import 'core-js/es6/string'
import 'core-js/es7/array'
// import cssVars from 'css-vars-ponyfill'
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import App from './App'
import router from './router'
import Firebase from 'firebase'

let config = {
  apiKey: "AIzaSyAIFkpFW9m-vWqzXlUaGvu9idWcn2r32c0",
  authDomain: "sptest-822cd.firebaseapp.com",
  databaseURL: "https://sptest-822cd.firebaseio.com",
  projectId: "sptest-822cd",
  storageBucket: "sptest-822cd.appspot.com",
  messagingSenderId: "315486298175"
};
let firebaseApp = Firebase.initializeApp(config);

window.firebase=Firebase;

Vue.use(BootstrapVue)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App
  }
})
