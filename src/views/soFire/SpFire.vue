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
                  <div v-if="getColumn(item.key) == 2">
                    <b-row v-for="i in Math.ceil(detailEntries(item.value).length/2)" :key="i">
                      <b-col v-for="(dItem, index) in detailEntries(item.value).slice((i-1)*2, i*2)" v-bind:key="dItem.key">
                        <b-card class="edit" :data-cardtitle="dItem.key">
                          <div slot="header">
                            {{ dItem.key }}
                            <div class="description">- {{getDesc(item.key, dItem.key)}}</div>
                          </div>
                          <!--<template v-if="Array.isArray(dItem.value)">-->
                          <template v-if="isDataType(item.key) == 'array'">
                            <!--값이 없을때-->
                            <div v-if="dItem.value == ''">
                              <ul class="item_view item_array">
                                <li>
                                  <div>
                                    <a href="#" v-on:click="openEditor">
                                      0 : <span class="add">추가 <i class="fa fa-plus-square-o fa-lg" style="display: inline-block;"></i></span>
                                    </a>
                                  </div>
                                </li>
                              </ul>
                              <div class="item_modify">
                                <input type="text" ref="value_input">
                                <a href="#" v-on:click="closeEditorArray(dItem, $event)"><i class="fa fa-check-square-o fa-lg"></i></a>
                              </div>
                            </div>
                            <!--값이 있을때-->
                            <div v-else="dItem.value == ''">
                              <ul class="item_view item_array">
                                <li v-for="(eItem, eindex) in detailEntries(dItem.value)">
                                  <div v-if="eindex != detailEntries(dItem.value).length-1"><a href="#" v-on:click="deleteItemPopup(dItem, eItem, $event)">{{eItem.key}} : {{eItem.value}} <i class="fa fa-window-close-o fa-lg"></i></a></div>
                                  <div v-else="eindex != detailEntries(dItem.value).length-1">
                                    <a href="#" v-on:click="deleteItemPopup(dItem, eItem, $event)">{{eItem.key}} : {{eItem.value}} <i class="fa fa-window-close-o fa-lg"></i></a><br>
                                    <a href="#" v-on:click="openEditor">
                                      {{eItem.key*1+1}} : <span class="add">추가 <i class="fa fa-plus-square-o fa-lg" style="display: inline-block;"></i></span>
                                    </a>
                                  </div>
                                </li>
                              </ul>
                              <div class="item_modify"><input type="text" ref="value_input"><a href="#" v-on:click="closeEditorArray(dItem, $event)"><i class="fa fa-check-square-o fa-lg"></i></a></div>
                            </div>
                          </template>
                          <template v-else="isDataType(item.key) == 'array'">
                            <template v-if="typeof dItem.value === 'object'">
                              <div>
                                <ul class="">
                                  <li v-for="(eItem, eindex) in detailEntries(dItem.value)">
                                    {{eItem.key}} :
                                    <a href="#" class="item_view" v-on:click="openEditorLine">
                                      <span v-if="eItem.value !== ''">{{eItem.value}}</span>
                                      <span v-else="eItem.value !== ''">값을 입력하세요.</span>
                                      <i class="fa fa-edit fa-lg ml-md-1"></i>
                                    </a>
                                    <div class="item_modify">
                                      <div class="description">{{getDesc(item.key, dItem.key, eItem.key)}}</div>
                                      <input type="text" :value="eItem.value" ref="value_input">
                                      <a href="#" v-on:click="closeEditorLine(eItem, $event)"><i class="fa fa-check-square-o fa-lg"></i></a>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </template>
                            <template v-else="typeof dItem.value === 'object'">
                              <div class="item_view"><a href="#" v-on:click="openEditor">
                                <span v-if="dItem.value !== ''">{{dItem.value}}</span>
                                <span v-else="dItem.value !== ''">값을 입력하세요. </span> <i class="fa fa-edit fa-lg ml-md-1"></i></a></div>
                              <div class="item_modify"><input type="text" :value="dItem.value" ref="value_input"><a href="#" v-on:click="closeEditor(dItem, $event)"><i class="fa fa-check-square-o fa-lg"></i></a></div>
                            </template>
                          </template>
                        </b-card>
                      </b-col>
                    </b-row>
                  </div>
                  <div v-else-if="getColumn(item.key) == 4">
                    <b-row v-for="i in Math.ceil(detailEntries(item.value).length/4)" :key="i">
                      <b-col v-for="(dItem, index) in detailEntries(item.value).slice((i-1)*4, i*4)" v-bind:key="dItem.key">
                        <b-card class="edit" :data-cardtitle="dItem.key">
                          <div slot="header">
                            {{ dItem.key }}
                            <div class="description">- {{getDesc(item.key, dItem.key)}}</div>
                          </div>
                          <!--todo isArray 대신 spConfig의 contentType별로 분기 예정-->
                          <!--<template v-if="Array.isArray(dItem.value)">-->
                          <template v-if="isDataType(item.key) == 'array'">
                            <!--값이 없을때-->
                            <div v-if="dItem.value == ''">
                              <ul class="item_view item_array">
                                <li>
                                  <div>
                                    <a href="#" v-on:click="openEditor">
                                      0 : <span class="add">추가 <i class="fa fa-plus-square-o fa-lg" style="display: inline-block;"></i></span>
                                    </a>
                                  </div>
                                </li>
                              </ul>
                              <div class="item_modify"><input type="text" ref="value_input"><a href="#" v-on:click="closeEditorArray(dItem, $event)"><i class="fa fa-check-square-o fa-lg"></i></a></div>
                            </div>
                            <!--값이 있을때-->
                            <div v-else="dItem.value == ''">
                              <ul class="item_view item_array">
                                <li v-for="(eItem, eindex) in detailEntries(dItem.value)">
                                  <div v-if="eindex != detailEntries(dItem.value).length-1"><a href="#" v-on:click="deleteItemPopup(dItem, eItem, $event)">{{eItem.key}} : {{eItem.value}} <i class="fa fa-window-close-o fa-lg"></i></a></div>
                                  <div v-else="eindex != detailEntries(dItem.value).length-1">
                                    <a href="#" v-on:click="deleteItemPopup(dItem, eItem, $event)">{{eItem.key}} : {{eItem.value}} <i class="fa fa-window-close-o fa-lg"></i></a><br>
                                    <a href="#" v-on:click="openEditor">
                                      {{eItem.key*1+1}} : <span class="add">추가 <i class="fa fa-plus-square-o fa-lg" style="display: inline-block;"></i></span>
                                    </a>
                                  </div>
                                </li>
                              </ul>
                              <div class="item_modify"><input type="text" ref="value_input"><a href="#" v-on:click="closeEditorArray(dItem, $event)"><i class="fa fa-check-square-o fa-lg"></i></a></div>
                            </div>
                          </template>
                          <template v-else="isDataType(item.key) == 'array'">
                            <template v-if="typeof dItem.value === 'object'">
                              <div>
                                <ul class="">
                                  <li v-for="(eItem, eindex) in detailEntries(dItem.value)">
                                    {{eItem.key}} :
                                    <a href="#" class="item_view" v-on:click="openEditorLine">
                                      <span v-if="eItem.value !== ''">{{eItem.value}}</span>
                                      <span v-else="eItem.value !== ''">값을 입력하세요.</span>
                                      <i class="fa fa-edit fa-lg ml-md-1"></i>
                                    </a>
                                    <div class="item_modify"><input type="text" :value="eItem.value" ref="value_input"><a href="#" v-on:click="closeEditorLine(eItem, $event)"><i class="fa fa-check-square-o fa-lg"></i></a></div>
                                  </li>
                                </ul>
                              </div>
                            </template>
                            <template v-else="typeof dItem.value === 'object'">
                              <div class="item_view"><a href="#" v-on:click="openEditor">
                                <span v-if="dItem.value !== ''">{{dItem.value}}</span>
                                <span v-else="dItem.value !== ''">값을 입력하세요. </span> <i class="fa fa-edit fa-lg ml-md-1"></i></a></div>
                              <div class="item_modify"><input type="text" :value="dItem.value" ref="value_input"><a href="#" v-on:click="closeEditor(dItem, $event)"><i class="fa fa-check-square-o fa-lg"></i></a></div>
                            </template>
                          </template>
                        </b-card>
                      </b-col>
                    </b-row>
                  </div>

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

    <!--SO 삭제 모달-->
    <b-modal title="Item 삭제" v-model="deleteItemPopupMode" @ok="deleteItem()">
      "{{deleteData.targetValue}}" 항목을 삭제하시겠습니까?
    </b-modal>

  </div>
</template>

<script>
import SpConfigData from './SpConfig'

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
      deleteData:{
        orgValue : null,
        targetValue : null,
        event : null
      },
      deleteItemPopupMode : false
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
    isDataType: function (key) {
      // console.log("isDataType == ");
      // console.log("key : " + key);
      // console.log("contentType : " + SpConfigData[key].contentType);
      return SpConfigData[key].contentType
    },
    getColumn: function (key) {
      // console.log("isDataType == ");
      // console.log("key : " + key);
      // console.log("contentType : " + SpConfigData[key].contentType);
      return SpConfigData[key].column
    },
    getDesc: function (tabKey, blockKey, objectKey) {
      // console.log(SpConfigData[tabKey]);
      // console.log(SpConfigData[tabKey].content);
      // console.log(SpConfigData[tabKey].content[blockKey]);
      // console.log(SpConfigData[tabKey].content[blockKey].description);
      if(objectKey){
        // console.log("objectKey :: "+objectKey);
        // console.log(SpConfigData[tabKey].content[blockKey][objectKey]);
      }

      let desc = '';
      if(objectKey){
        if(SpConfigData[tabKey].content[blockKey][objectKey]){
          desc = SpConfigData[tabKey].content[blockKey][objectKey].description;
        }
      } else if(SpConfigData[tabKey].content[blockKey].description){
        desc = SpConfigData[tabKey].content[blockKey].description;
      }

      return desc;

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
    /**
     * open
     */
    openEditor: function ($event) {
      console.log('openEditor ::');
      const targetEdit = $event.target.closest('.edit');
      if(document.querySelector('.edit.open') !== null){
        document.querySelector('.edit.open').classList.remove('open');
      }
      targetEdit.classList.add("open");
    },
    openEditorLine: function ($event) {
      console.log('openEditorLine ::');
      const targetEdit = $event.target.closest('li');
      if(document.querySelector('.edit li.open') !== null) {
        document.querySelector('.edit li.open').classList.remove('open');
      }
      targetEdit.classList.add("open");
    },
    /**
     * delete
     */
    deleteItemPopup: function (dItem, eItem, $event) {
      console.log('deleteItem ::');
      let orgValue = dItem.value;
      const targetValue = eItem.value;

      this.deleteData = {
        orgValue : orgValue,
        targetValue : targetValue,
        event : $event
      };

      this.deleteItemPopupMode = true;
    },
    deleteItem: function () {
      console.log('deleteItem ::');

      const $event = this.deleteData.event;
      let orgValue = this.deleteData.orgValue;
      let targetValue = this.deleteData.targetValue;

      orgValue.splice(orgValue.indexOf(targetValue),1);

      if(!orgValue.length){
        orgValue = "";
      }

      /**
       * update
       */
      console.log('update target ::');
      // tab key
      var tabKey = document.querySelector('.tabs .nav-link.active div').dataset.tabtitle;

      // block key
      var blockKey = $event.target.closest('.card').dataset.cardtitle;

      firebase.database().ref('sp/'+this.$route.params.key+'/'+tabKey).update({
        [blockKey]:orgValue
      }).then((data)=>{
        this.fetchFirebaseData();
      });

      this.deleteItemPopupMode = false;

    },
    /**
     * close
     */
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
      let targetEdit = $event.target.closest('.edit');
      const targetValue = targetEdit.getElementsByTagName('input')[0].value;
      let targetObj = null;

      if(targetValue.length){
        if(dItem.value.indexOf(targetValue) == -1){
          if(dItem.value == ''){
            dItem.value = [];
          }

          dItem.value.push(targetValue);

          let targetArray = dItem.value;
          targetObj = targetArray;

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
        }else{
          alert('이미 존재하는 항목이므로 추가할 수 없습니다.');
        }
      }

      // input 값 초기화
      targetEdit.getElementsByTagName('input')[0].value = "";

      /**
       * close
       */
      console.log('closeEditor ::');
      targetEdit.classList.remove("open");
    },

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
  .open .item_view.item_array{
    display: block;
  }
  .open .item_view.item_array .add{
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
    max-width: 500px;
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
  .edit .description {
    font-size: 12px;
    color: #666;
  }


</style>
