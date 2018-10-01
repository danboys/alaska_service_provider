<template>
  <div>
    <b-row>
      <b-col cols="12">
        <b-card no-header>
          <template slot="header">
            {{ $route.query.spName }}
          </template>

          <b-tabs>
            <template v-for="item in items">
              <b-tab>
                <div slot="title" :data-tabtitle="item.key">
                  {{ item.key }}
                </div>
                <template>
                  <b-row v-for="i in Math.ceil(detailEntries(item.value).length/2)" :key="i">
                    <b-col v-for="(dItem, index) in detailEntries(item.value).slice((i-1)*2, i*2)" v-bind:key="dItem.key">
                      <b-card class="edit" :data-cardtitle="dItem.key">
                        <div slot="header">
                          {{ dItem.key }}
                        </div>
                        <template v-if="Array.isArray(dItem.value)">
                          <div>
                            <!--<div class="item_view"><a href="#" v-on:click="openEditor">{{dItem.value}} <i class="fa fa-edit fa-lg"></i></a></div>-->
                            <!--<div class="item_modify"><input type="text" :value="dItem.value" ref="value_input"><a href="#" v-on:click="closeEditor(dItem, $event)"><i class="fa fa-check-square-o fa-lg"></i></a></div>-->
                            <ul class="item_view">
                              <li v-for="(eItem, eindex) in detailEntries(dItem.value)">
                                <div v-if="eindex != detailEntries(dItem.value).length-1">{{eItem.key}} : {{eItem.value}}</div>
                                <div v-else="eindex == detailEntries(dItem.value).length-1">
                                  {{eItem.key}} : {{eItem.value}}<br>
                                  <a href="#" v-on:click="openEditor">
                                    .......
                                    <i class="fa fa-edit fa-lg"></i>
                                  </a>
                                </div>
                              </li>
                            </ul>
                            <div class="item_modify"><input type="text" :value="dItem.value.toString()" ref="value_input"><a href="#" v-on:click="closeEditorArray(dItem, $event)"><i class="fa fa-check-square-o fa-lg"></i></a></div>
                          </div>
                        </template>
                        <template v-else="Array.isArray(dItem.value)">
                          <template v-if="typeof dItem.value === 'object'">
                            <div>
                              <ul class="">
                                <li v-for="(eItem, eindex) in detailEntries(dItem.value)">
                                  {{eItem.key}} :
                                  <a href="#" class="item_view" v-on:click="openEditorLine">
                                    <span v-if="eItem.value !== ''">{{eItem.value}}</span>
                                    <span v-else="eItem.value !== ''">값을 입력하세요.</span>
                                    <i class="fa fa-edit fa-lg"></i>
                                  </a>
                                  <div class="item_modify"><input type="text" :value="eItem.value" ref="value_input"><a href="#" v-on:click="closeEditorLine(eItem, $event)"><i class="fa fa-check-square-o fa-lg"></i></a></div>
                                </li>
                              </ul>
                            </div>
                          </template>
                          <template v-else="typeof dItem.value === 'object'">
                            <div class="item_view"><a href="#" v-on:click="openEditor">
                              <span v-if="dItem.value !== ''">{{dItem.value}}</span>
                              <span v-else="dItem.value !== ''">값을 입력하세요. </span> <i class="fa fa-edit fa-lg"></i></a></div>
                            <div class="item_modify"><input type="text" :value="dItem.value" ref="value_input"><a href="#" v-on:click="closeEditor(dItem, $event)"><i class="fa fa-check-square-o fa-lg"></i></a></div>
                          </template>
                        </template>
                      </b-card>
                    </b-col>
                  </b-row>
                </template>
              </b-tab>
            </template>
          </b-tabs>

          <!--</ul>-->
          <template slot="footer">
            <div class="float-left"><b-button @click="goBack" class="">Back</b-button></div>
            <div class="float-right"><b-button @click="goExport" class="">Export</b-button></div>
          </template>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: 'SpFire',
  props: {
    caption: {
      type: String,
      default: 'SP 관리 목록'
    },
  },
  data: () => {
    return {
      oData:{},
      items:[],
      fields: [
        {key: 'key'},
        {key: 'value'},
      ],
      selected: undefined,
    }
  },
  methods: {
    fetchFirebaseData(){
      console.log('fetchFirebaseData !!!!');
      firebase.database().ref('sp').once('value')
        .then((data)=>{
          /**
           * route key oData object
           */
          this.oData = data.val()[this.$route.params.key]
          // console.log('this.oData ::');
          // console.log(this.oData);

          /**
           * route key items array
           */
          this.items = Object.entries(this.oData).map(([key, value]) => {return {key: key, value: value}});
          // console.log('this.items ::');
          // console.log(this.items);

        })
        .catch((error)=>{console.log(error)})
    },
    /**
     * dataset
     */
    detailEntries(obj){
      // console.log(obj);
      return Object.entries(obj).map(([key, value]) => {return {key: key, value: value}});
    },
    goBack() {
      this.$router.go(-1)
      // this.$router.replace({path: '/users'})
    },
    goExport() {
      let oData = JSON.stringify(this.oData);
      var myWindow = window.open("data:text/html," + encodeURIComponent(oData),
        "_blank", "width=1400,height=700");
      myWindow.document.write(oData);
      myWindow.focus();
    },
    openEditor: function ($event) {
      console.log('openEditor ::');
      const targetEdit = $event.target.closest('.edit');
      targetEdit.classList.add("open");
    },
    openEditorLine: function ($event) {
      console.log('openEditorLine ::');
      const targetEdit = $event.target.closest('li');
      targetEdit.classList.add("open");
    },
    closeEditor: function (dItem, $event) {
      const targetEdit = $event.target.closest('.edit');
      const targetValue = targetEdit.getElementsByTagName('input')[0].value;

      /**
       * update
       */
      console.log('update target ::');
      // tab key
      var tabKey = document.querySelector('.tabs .nav-link.active div').dataset.tabtitle;

      // block key
      var blockKey = $event.target.closest('.card').dataset.cardtitle;

      firebase.database().ref('sp/'+this.$route.params.key+'/'+tabKey).update({
        [blockKey]:targetValue
      }).then((data)=>{
        this.fetchFirebaseData();
      });

      /**
       * close
       */
      console.log('closeEditor ::');
      targetEdit.classList.remove("open");
    },
    closeEditorLine: function (eItem, $event) {
      const targetEdit = $event.target.closest('li');
      const targetValue = targetEdit.getElementsByTagName('input')[0].value;

      /**
       * update
       */
      console.log('update target ::');
      // tab key
      var tabKey = document.querySelector('.tabs .nav-link.active div').dataset.tabtitle;

      // block key
      var blockKey = $event.target.closest('.card').dataset.cardtitle;

      firebase.database().ref('sp/'+this.$route.params.key+'/'+tabKey+'/'+blockKey).update({
        [eItem.key]:targetValue
      }).then((data)=>{
        this.fetchFirebaseData();
      });

      /**
       * close
       */
      console.log('closeEditor ::');
      targetEdit.classList.remove("open");
    },
    closeEditorArray: function (dItem, $event) {
      const targetEdit = $event.target.closest('.edit');
      const targetValue = targetEdit.getElementsByTagName('input')[0].value;
      let targetObj = null;

      if(targetValue.length){
        let targetArray = targetValue.split(',');
        targetObj = targetArray;
      }

      console.log(targetObj);

      /**
       * update
       */
      console.log('update target ::');
      // tab key
      var tabKey = document.querySelector('.tabs .nav-link.active div').dataset.tabtitle;

      // block key
      var blockKey = $event.target.closest('.card').dataset.cardtitle;

      firebase.database().ref('sp/'+this.$route.params.key+'/'+tabKey).update({
        [blockKey]:targetObj
      }).then((data)=>{
        this.fetchFirebaseData();
      });

      /**
       * close
       */
      console.log('closeEditor ::');
      targetEdit.classList.remove("open");
    }
  },
  created(){
    this.fetchFirebaseData();
  }
}
</script>

<style scoped>
  a{
    text-decoration: none;
  }
  ul {
    list-style: none; /* Remove list bullets */
    padding: 0;
    margin: 0;
  }
  .open .item_view{
    display: none;
  }
  .item_modify{
    display: none;
  }
  .open .item_modify{
    display: block;
  }
  .item_modify input{
    width: 100%;
  }
  .item_view i{
    display: none;
  }
  .item_view a:hover i{
    display: inline-block;
  }
  a.item_view:hover i{
    display: inline-block;
  }
  .item_modify a{
    margin-left: 4px;
  }


</style>
