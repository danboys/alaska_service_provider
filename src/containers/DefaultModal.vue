<template>
  <div class="c-appMadal">
    <div v-if="visible" >
      <component :is="component"/>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue';
  import { mapState, mapMutations } from 'vuex'

  export default {
    name: 'DefaultModal',
    data() {
      return {
        component: null
      }
    },
    computed: {
      ...mapState({
        visible: 'modalVisible',
        modalComponent: 'modalComponent',
      }),
    },
    watch: {
      modalComponent(componentName) {
        // 방어로직
        if (!componentName) return;

        Vue.component(componentName, () => import(`../views/modal/${componentName}`));
        this.component = componentName;
      },
    },
    methods: {
      ...mapMutations(['hideModal']),
    },
  }
</script>

<style scoped>

</style>
