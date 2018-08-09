import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import Router from 'vue-router'
import home from '@/components/home'

Vue.use(BootstrapVue);
Vue.use(Router);

export default new Router({
      routes: [
        {
          path: '/',
          name: 'home',
      component: home
    }
  ]
})
