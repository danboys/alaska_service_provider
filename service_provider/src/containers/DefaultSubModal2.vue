<template>
  <div class="c-subModal">
    <component :is="component" v-if="visible" v-bind:target-provider="targetProvider" v-bind:target-service="targetService" v-bind:target-comment="targetComment"/>
  </div>
</template>

<script>
  import Vue from 'vue';
  import { mapState } from 'vuex'

  export default {
    name: 'DefaultSubModal2',
    props: ['targetProvider', 'targetService', 'targetComment'],
    data() {
      return {
        component: null,
        oValues: null,
      }
    },
    mounted(){
      console.log("DefaultSubModal2");
      if(this.targetComment) {
        console.log("this.targetComment");
        console.log(this.targetComment);
      }
    },
    computed: {
      ...mapState({
        visible: 'subModal2Visible',
        modalComponent: 'subModal2Component',
      })
    },
    watch: {
      modalComponent(componentName) {
        // 방어로직
        if (!componentName) return;

        Vue.component(componentName, () => import(`../views/modal/${componentName}`));
        this.component = componentName;
      },
    }
  }
</script>

<style scoped>

</style>
