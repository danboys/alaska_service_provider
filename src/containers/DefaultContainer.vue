<template>
  <div class="app">
    <div class="app-body">
      <main class="main">
        <!--좌측 aside 메뉴-->
        <DefaultAside/>
        <!--페이지 이동 시 바인딩될 영역-->
        <router-view></router-view>
      </main>
    </div>
  </div>
</template>

<script>
import nav from '@/_nav'
import DefaultAside from './DefaultAside'

export default {
  name: 'full',
  components: {
    DefaultAside,
  },
  data () {
    return {
      nav: nav.items
    }
  },
  computed: {
    name () {
      return this.$route.name
    },
    list () {
      return this.$route.matched.filter((route) => route.name || route.meta.label )
    }
  }
}
</script>

<style scoped>
  .sidebar {
    margin-left: -200px!important;
  }
  .app-body .main, .app-footer{
    margin-left: 0!important;
  }

  @media screen and (max-width: 1000px){
    .app-body {
      margin-top: 0;
      min-width: 800px !important;
    }
  }
</style>
