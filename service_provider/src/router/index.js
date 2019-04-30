import Vue from 'vue'
import Router from 'vue-router'
import DefaultContainer from '@/containers/DefaultContainer'
import Dashboard from '@/views/Dashboard'
import Details from '@/views/details/Details'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/dashboard',
      name: 'Home',
      component: DefaultContainer,
      children: [
        {
          path: 'dashboard',
          name: 'Dashboard',
          component: Dashboard
        },
        {
          path: 'details',
          name: 'Details',
          component: Details
        },
      ]
    }

  ]
})
