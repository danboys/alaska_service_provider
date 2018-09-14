<template>
  <b-row>
    <b-col cols="12">
      <b-card no-header>
        <template slot="header">
          {{ $route.query.spName }}
        </template>

        <b-tabs>
          <template v-for="item in spGroup($route.params.key)">
              <b-tab>
                <div slot="title" :data-tabtitle="item.key">
                  {{ item.key }}
                </div>
                <template v-if="item.key === 'image'">
                  <b-row v-for="(dItem, index) in spDetailList($route.params.key, item.key)">
                    <b-col>
                      <b-card v-if="typeof dItem.value === 'object'" :data-cardtitle="dItem.key">
                        <!--하위 object가 있으면 for-->
                        <div slot="header">
                          {{ dItem.key }}
                        </div>
                        <ul v-for="eItem in itemList(dItem.value)">
                          <li>{{eItem.key}} : {{eItem.value}}</li>
                        </ul>
                        <!--{{dItem.value}}-->
                      </b-card>
                      <b-card v-else="typeof dItem.value === 'object'" :data-cardtitle="dItem.key">
                        <!--하위 object가 없으면 바로 바인딩-->
                        <div slot="header">
                          {{ dItem.key }}
                        </div>
                        <div class="item_view"><a href="#">{{dItem.value}} <i class="fa fa-edit fa-lg"></i></a></div>
                      </b-card>
                    </b-col>
                  </b-row>
                </template>
                <template v-else="item.key === 'image'">
                  <b-row v-for="i in Math.ceil(spDetailList($route.params.key, item.key).length/2)">
                    <b-col md="6" v-for="(dItem, index) in spDetailList($route.params.key, item.key).slice((i-1)*2, i*2)">
                      <b-card v-if="typeof dItem.value === 'object'" :data-cardtitle="dItem.key">
                        <!--하위 object가 있으면 for-->
                        <div slot="header">
                          {{ dItem.key }}
                        </div>
                        <ul v-for="eItem in itemList(dItem.value)">
                          <li>{{eItem.key}} : {{eItem.value}}</li>
                        </ul>
                        <!--{{dItem.value}}-->
                      </b-card>
                      <b-card v-else="typeof dItem.value === 'object'" :data-cardtitle="dItem.key">
                        <!--하위 object가 없으면 바로 바인딩-->
                        <div slot="header">
                          {{ dItem.key }}
                        </div>
                        <div class="edit" data-path="setPath()">
                          <div class="item_view"><a href="#" v-on:click="openEditor">{{dItem.value}} <i class="fa fa-edit fa-lg"></i></a></div>
                          <div class="item_modify"><input type="text" :value="dItem.value" ref="value_input"><a href="#" v-on:click="closeEditor(dItem, $event)"><i class="fa fa-check-square-o fa-lg"></i></a></div>
                        </div>
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
</template>

<script>
import spData from './SpData'
export default {
  name: 'Sp',
  props: {
    caption: {
      type: String,
      default: 'SP 관리 목록'
    },
  },
  data: () => {
    return {
      oData: (routeKey) => {
        // var spData = eval(routeKey);
        const sp = spData.find( spData => spData.so.key.toString() === routeKey)
        // const spDetails = sp ? Object.entries(sp) : [['key', 'Not found']]
        return sp
      },
      items: (routeKey) => {
        // var spData = eval(routeKey);
        // const sp = spData.find( spData => spData.so.key.toString() === routeKey)
        const sp = this.oData(routeKey);
        const spDetails = sp ? Object.entries(sp) : [['key', 'Not found']]
        this.data.spDetails = spDetails;
        return spDetails.map(([key, value]) => {return {key: key, value: value}})
      },
      spGroup: (routeKey) => {
        const sp = spData.find( spData => spData.so.key.toString() === routeKey)
        const spList = Object.entries(sp)
        // console.log(spList);
        return spList.map(([key, value]) => {return {key: key}})
      },
      spDetailList: (routeKey, itemKey) => {
        const sp = spData.find( spData => spData.so.key.toString() === routeKey)
        const spList = Object.entries(sp[itemKey])
        // console.log(sp[itemKey]);
        // console.log(spList);
        return spList.map(([key, value]) => {return {key: key, value: value}})
      },
      itemList: (item) => {
        const itemEntry = Object.entries(item);
        // console.log(itemEntry);
        return itemEntry.map(([key, value]) => {return {key: key, value: value}})
      },
      fields: [
        {key: 'key'},
        {key: 'value'},
      ],
      selected: undefined
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1)
      // this.$router.replace({path: '/users'})
    },
    goExport() {
      let oData = JSON.stringify(this.oData(this.$route.params.key));
      var myWindow = window.open("data:text/html," + encodeURIComponent(oData),
        "_blank", "width=1400,height=700");
      myWindow.document.write(oData);
      myWindow.focus();
    },
    openEditor: function ($event) {
      console.log('openEditor ::');
      // console.log($event);
      // console.log($event.target);
      const targetEdit = $event.target.closest('.edit');
      // console.log('.edit');
      // console.log(targetEdit);
      targetEdit.classList.add("open");
    },
    closeEditor: function (dItem, $event) {
      const targetEdit = $event.target.closest('.edit');
      const targetValue = targetEdit.getElementsByTagName('input')[0].value;

      /**
       * save
       */
      console.log('update target ::');
      // console.log(targetEdit.getElementsByTagName('input')[0].value);
      // dItem.value = targetEdit.getElementsByTagName('input')[0].value;
      // console.log('data ::');
      // console.log(this.oData(this.$route.params.key));
      let oData = this.oData(this.$route.params.key);

      // tab key
      // console.log('tab key ::');
      var tabKey = document.querySelector('.tabs .nav-link.active div').dataset.tabtitle;
      // console.log(tabKey);

      // block key
      // console.log('block key ::');
      var blockKey = $event.target.closest('.card').dataset.cardtitle;
      // console.log(blockKey);

      // var editTarget = oData[tabKey][blockKey];
      console.log("editTarget ::");
      // console.log(editTarget);
      // editTarget = targetValue;
      oData[tabKey][blockKey] = targetValue;
      // console.log(editTarget);
      console.log("editTarget ::");


      /**
       * close
       */
      console.log('closeEditor ::');
      // console.log($event);
      // console.log($event.target);
      // const targetEdit = $event.target.closest('.edit');
      // console.log('.edit');
      // console.log(targetEdit);
      targetEdit.classList.remove("open");
    }
  },
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
  .item_view i{
    display: none;
  }
  .item_view a:hover i{
    display: inline-block;
  }
  .item_modify a{
    margin-left: 4px;
  }


</style>
