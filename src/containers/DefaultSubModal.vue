<template>
  <div class="c-subModal">
    <component :is="component" v-if="visible" v-bind:target-provider="targetProvider" v-bind:target-service="targetService"/>
  </div>
</template>

<script>
  import Vue from 'vue';
  import { mapState } from 'vuex'

  export default {
    name: 'DefaultSubModal',
    props: ['targetProvider', 'targetService'],
    data() {
      return {
        component: null,
        oValues: null,
      }
    },
    mounted(){
      console.log("DefaultSubModal");
      if(this.targetProvider) {
        console.log("this.targetProvider");
        console.log(this.targetProvider);
      }
      if(this.targetService) {
        console.log("this.targetService");
        console.log(this.targetService);
      }
    },
    computed: {
      ...mapState({
        visible: 'subModalVisible',
        modalComponent: 'subModalComponent',
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
