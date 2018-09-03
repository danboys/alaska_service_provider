<template>
  <div id="app">
    <spm-header></spm-header>
    <div id="wrapper">
      <spm-aside></spm-aside>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import spmHeader from './components/header.vue'
import spmAside from './components/aside.vue'

export default {
  name: 'App',
  components: {
    spmHeader,
    spmAside
  }
}
</script>

<style>
  @import "assets/css/lib/bootstrap.css";
  @import "css/sb-admin.css";
  @import "css/style.css";
#app {
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  /*-webkit-font-smoothing: antialiased;*/
  /*-moz-osx-font-smoothing: grayscale;*/
  /*text-align: center;*/
  /*color: #2c3e50;*/
  /*margin-top: 60px;*/
}
</style>
