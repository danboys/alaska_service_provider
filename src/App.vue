<template>
  <div id="app">
    <router-view></router-view>
    <app-modal></app-modal>
  </div>
</template>

<script>
  import AppModal from './containers/DefaultModal'
export default {
  name: 'app',
  components:{
    AppModal
  }
}
</script>

<style lang="scss">
  // CoreUI Icons Set
  @import '~@coreui/icons/css/coreui-icons.min.css';
  /* Import Font Awesome Icons Set */
  $fa-font-path: '~font-awesome/fonts/';
  @import '~font-awesome/scss/font-awesome.scss';
  /* Import Simple Line Icons Set */
  $simple-line-font-path: '~simple-line-icons/fonts/';
  @import '~simple-line-icons/scss/simple-line-icons.scss';
  /* Import Flag Icons Set */
  @import '~flag-icon-css/css/flag-icon.min.css';
  /* Import Bootstrap Vue Styles */
  @import '~bootstrap-vue/dist/bootstrap-vue.css';
  // Import Main styles for this application
  /*@import 'assets/scss/style';*/
  // Import style.css
  @import 'assets/css/style.css';
</style>
