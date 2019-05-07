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
import store from './store';
//import firebase from 'firebase'

import firebase from "firebase/app"
require("firebase/auth");
require("firebase/database");
require("firebase/firestore");
require("firebase/messaging");
require("firebase/functions");


let config = {
  apiKey: "AIzaSyCTasmR9mfQvGMN9LbMbb4ViQkwH41cmxU",
  authDomain: "alaska-service-provider.firebaseapp.com",
  databaseURL: "https://alaska-service-provider.firebaseio.com",
  projectId: "alaska-service-provider",
  storageBucket: "alaska-service-provider.appspot.com",
  messagingSenderId: "1048042695905"
};
let firebaseApp = firebase.initializeApp(config);

window.firebase=firebase;

Vue.use(BootstrapVue)

// EventBus
Vue.prototype.$EventBus = new Vue();



new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {
    App
  }
})
