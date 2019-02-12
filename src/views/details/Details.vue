<template>
  <div>
    <div class="wrap" v-if="this.spCheck">
      <!--진입 경로-->
      <nav class="breadcrumb">
        <a class="breadcrumb-item" href="#">{{spName}}</a>
        <a class="breadcrumb-item" href="#">{{serviceName}}</a>
      </nav>
      <!--//진입 경로-->
      <div class="container setting">
        <!--서비스분류 카테고리 1개 단위-->
        <div v-for="(val1, key1) in depth1Data" v-if="Object.prototype.toString.call(val1) === '[object Object]'">
          <div class="title mb-1"><strong>{{key1}}</strong>
            <a href="#" class="btn_add font-lg text-white fa fa-plus mr-1" @click="ModalSettingAdd(key1,'object')"></a>
            <a href="#" class="btn_delete  fa fa-times font-lg" @click="ModalSettingDelete(key1,key1,val1,'object','btn')"></a>
            <a href="#" class="btn_edit  fa fa-edit" @click="ModalSettingModify(key1,key1,val1,'object','btn')"></a>
          </div>
          <div class="card p-3" id="Accordion" data-children=".item">
            <div class="item card p-2 mb-2" v-for="(val2,key2) in val1">
              <div class="position-relative">
                <a data-toggle="collapse" data-parent="#Accordion" :href="'#'+key2" aria-expanded="true" aria-controls="Accordion2" class="">
                  {{key2}}</a>
                <div v-if="key2 !== '' ">
                  <a href="#" class="edit_list fa fa-edit" @click="ModalSettingModify(key2,val2,key1)"></a>
                  <a href="#" class="delete_list fa fa-times font-lg" @click="ModalSettingDelete(key2,val2,key1,'object')"></a>
                </div>
              </div>
            </div>
          </div>
          <a href="#" class="text-white w-100 add_property" @click="ModalSettingAdd(key1,val1,'object','property')">
            <i class="fa fa-plus mr-1"></i>
            <span>ADD Property</span>
          </a>
        </div>

        <div v-else-if="Object.prototype.toString.call(val1) === '[object String]'">
          <div class="title mb-1"><strong>{{key1}}</strong>
            <a href="#" class="btn_delete  fa fa-times font-lg" @click="ModalSettingDelete(key1,key1,val1,'string','btn')"></a>
            <a href="#" class="btn_edit  fa fa-edit" @click="ModalSettingModify(key1,key1,val1,'string','btn')"></a>
          </div>
          <div class="card p-3" id="Accordion" data-children=".item">
            <div class="card p-2 mb-2 mt-2 position-relative collapse show" id="Accordion2" role="tabpanel" style="" >
              <a v-if="val1 !== '' " href="#" class="delete_list fa fa-times font-lg"  @click="ModalSettingDelete(key1,val1,key1,'string')"></a>
              <p class="mb-0">{{val1}}</p>
            </div>
          </div>
          <a href="#" class="text-white w-100 add_property" @click="ModalSettingAdd(key1,val1,'string','property')">
            <i class="fa fa-plus mr-1"></i>
            <span>ADD Property</span>
          </a>
        </div>
        <div v-else-if="Object.prototype.toString.call(val1) === '[object Boolean]'">
          <div class="title mb-1"><strong>{{key1}}</strong>
            <a href="#" class="btn_delete  fa fa-times font-lg" @click="ModalSettingDelete(key1,key1,val1,'boolean','btn')"></a>
            <a href="#" class="btn_edit  fa fa-edit" @click="ModalSettingModify(key1,key1,val1,'boolean','btn')"></a>
          </div>
          <div class="card p-3" id="Accordion" data-children=".item">
            <div class="card p-2 mb-2 mt-2 position-relative collapse show" id="Accordion2" role="tabpanel" style="" >
              <a v-if="val1 !== '' " href="#" class="delete_list fa fa-times font-lg"@click="ModalSettingDelete(key1,val1,key1,'boolean')" ></a>
              <p class="mb-0">{{val1}}</p>
            </div>
          </div>
          <a href="#" class="text-white w-100 add_property" @click="ModalSettingAdd(key1,val1,'boolean','property')">
            <i class="fa fa-plus mr-1"></i>
            <span>ADD Property</span>
          </a>
        </div>
        <div v-else >
          <div class="title mb-1"><strong>{{key1}}</strong>
            <a href="#" class="btn_add font-lg text-white fa fa-plus mr-1" @click="ModalSettingAdd(key1,'array')"></a>
            <a href="#" class="btn_delete  fa fa-times font-lg" @click="ModalSettingDelete(key1,key1,val1,'array','btn')"></a>
            <a href="#" class="btn_edit  fa fa-edit" @click="ModalSettingModify(key1,key1,val1,'array','btn')"></a>
          </div>
          <div class="card p-3" id="Accordion" data-children=".item">
            <div class="card p-2 mb-2 mt-2 position-relative collapse show" id="Accordion2" role="tabpanel" style="" v-for="(val2,key2) in val1"  >
              <a v-if="val2 !== '' " href="#" class="delete_list fa fa-times font-lg" @click="ModalSettingDelete(key1,val2,key2,'array')"></a>
              <p class="mb-0">{{val2}}</p>
            </div>
          </div>
          <a href="#" class="text-white w-100 add_property" @click="ModalSettingAdd(key1,val1,'array','property')">
            <i class="fa fa-plus mr-1"></i>
            <span>ADD Property</span>
          </a>
        </div>

      </div>
    </div>
    <div class="wrap" v-else>
      <!--진입 경로-->
      <nav class="breadcrumb">
        <a class="breadcrumb-item" href="#">{{spName}}</a>
        <a class="breadcrumb-item" href="#">{{serviceName}}</a>
      </nav>
      <!--진입 경로-->
      <div class="container">
        <!--서비스분류 카테고리 1개 단위-->
        <div v-for="(val1, key1) in depth1Data" v-if="Object.prototype.toString.call(val1) === '[object Object]'">
          <div class="title mb-1"><strong>{{key1}}</strong></div>
          <div class="card p-3" id="Accordion" data-children=".item">
            <div class="item card p-2 mb-2" v-for="(val2,key2) in val1">
              <div class="position-relative">
                <a data-toggle="collapse" data-parent="#Accordion" :href="'#'+key2" aria-expanded="true" aria-controls="Accordion2" class="">
                  {{key2}}</a>
                <!--툴팁-->
                <a href="#" class="q_mark fa fa-exclamation-circle"></a>
                <div class="tooltip_box">툴팁입니다<br>툴팁입니다</div>
                <!--툴팁-->
                <div class="card p-2 mb-2 mt-2 position-relative collapse " :id="key2" role="tabpanel" style="" >
                  <p class="mb-0">{{val2}}</p>
                  <a v-if="val2 !== '' " href="#" class="edit_list fa fa-edit" @click="modalServiceList(key2,val2,key1,'object')"></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-else-if="Object.prototype.toString.call(val1) === '[object String]'">
          <div class="title mb-1"><strong>{{key1}}</strong></div>
          <div class="card p-3" id="Accordion" data-children=".item">
            <div class="card p-2 mb-2 mt-2 position-relative collapse show" id="Accordion2" role="tabpanel" style="" >
              <p class="mb-0">{{val1}}</p>
              <a v-if="val1 !== '' " href="#" class="edit_list fa fa-edit" @click="modalServiceList(key1,val1,key1,'string')" ></a>
            </div>
          </div>
        </div>
        <div v-else-if="Object.prototype.toString.call(val1) === '[object Boolean]'">
          <div class="title mb-1"><strong>{{key1}}</strong></div>
          <div class="card p-3" id="Accordion" data-children=".item">
            <div class="card p-2 mb-2 mt-2 position-relative collapse show" id="Accordion2" role="tabpanel" style="" >
              <p class="mb-0">{{val1}}</p>
              <a v-if="val1 !== '' " href="#" class="edit_list fa fa-edit" @click="modalServiceList(key1,val1,key1,'boolean')"></a>
            </div>
          </div>
        </div>
        <div v-else >
          <div class="title mb-1"><strong>{{key1}}</strong></div>
          <div class="card p-3" id="Accordion" data-children=".item">
            <div class="card p-2 mb-2 mt-2 position-relative collapse show" id="Accordion2" role="tabpanel" style="" v-for="(val2,key2) in val1"  >
              <p class="mb-0">{{val2}}</p>
              <a v-if="val2 !== '' " href="#" class="edit_list fa fa-edit" @click="modalServiceList(key1,val2,key2,'array')"></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script >
  import { mapState, mapMutations } from 'vuex'
  import SubModal from '../../containers/DefaultSubModal'

  export default {
    name: 'Details',
    components: {
      SubModal
    },
    data:()=>{
      return {
        spName : null,
        serviceName : null,
        path : null,
        oData: {},
        depth1Data: [],
        spCheck : false
      }
    },
    created(){
      this.spName = this.$route.query.spName
      this.serviceName = this.$route.query.serviceName
      this.spCheck = $('.sidebar_depth2 .nav a').eq(0).hasClass('text-white')
      this.fetchFirebaseData();

    },
    updated(){
      if(this.spCheck === true){
        let index = $('.add_property').length -1
        $('.add_property:lt('+index+')').remove();
      }
    },
    computed: {
      ...mapState({
        isSetting: 'isSetting',
      }),
      sp () {
        return this.spCheck
      }
    },
    watch:{
      '$route.query'() {
        console.log('watch!!!')
        this.spName = this.$route.query.spName
        this.serviceName = this.$route.query.serviceName
        this.spCheck = $('.sidebar_depth2 .nav a').eq(0).hasClass('text-white')
        this.fetchFirebaseData();
      }
    },
    methods: {
      ...mapMutations([`showModal`,'showSubModal']),
      /**
       * firebase 연동
       */
      fetchFirebaseData() {
        console.log('Firebase Data');
        firebase.database().ref(`provider/sp/${this.spName}/${this.serviceName}`).once('value')
          .then((data) => {
            /**
             * 전체 Database Object
             */
            this.oData = data.val();
            this.depth1Data = data.val()
            console.log(this.depth1Data)
          })
          .catch((error) => {
            console.log(error)
          })
      },
      modalServiceList(name,value,key,type){
        this.showModal({
          componentName : 'ModalDetailsPopup',
          valueName : name,
          value : value,
          key: key,
          type :type
        });
      },
      ModalSettingAdd(key,value,type,divi){
        this.showModal({
          componentName : 'ModalSettingAdd',
          key: key,
          value : value,
          type :type,
          divi : divi
        });
      },
      ModalSettingModify(name,value,key,type,divi){
        this.showModal({
          componentName : 'ModalSettingModify',
          valueName : name,
          value : value,
          key: key,
          type :type,
          divi : divi
        });
      },
      ModalSettingDelete(name,value,key,type,divi){
        this.showModal({
          componentName : 'ModalSettingDelete',
          valueName : name,
          value : value,
          key: key,
          type :type,
          divi : divi
        });
      },

    }
  }
</script>
<style>
  /*컨텐츠 영역*/
  .wrap {
    position: relative;
    width: 100%;
    height: 100%;
    margin: 0 auto;
  }
  .container {
    width: 700px;
  }

  /*리스트*/
  .item.card {
    position: relative;
  }
  .item.card > a:first-child {
    margin-right: 50px;
  }

  /*툴팁 마크*/
  .q_mark {
    position: absolute;
    top: 0.4rem;
    right: 1rem;
    width: 15px;
    height: 15px;
    display: block;
  }
  .q_mark:hover {
    color: pink;
  }

  /*툴팁박스*/
  .q_mark:hover + .tooltip_box {
    display: block;
  }
  .tooltip_box {
    display: none;
    min-width: 100px;
    background: #fff;
    position: absolute;
    bottom: 30px;
    right: -20px;
    font-size: 12px;
    color: #0a3544;
    padding: 0.2rem;
    -webkit-border-radius: 4px;
    border-radius: 4px;
  }
  .tooltip_box:after {
    content:"▼";
    color: #fff;
    display: inline-block;
    width: 5px;
    height: 5px;
    position: absolute;
    bottom: 1px;
    right: 45px;
  }

  /*수정 아이콘*/
  .edit_list {
    position: absolute;
    top: 0.7rem;
    right: 1rem;
  }

  /*리스트*/
  .item.card {
    position: relative;
  }
  .item.card > a:first-child {
    margin-right: 50px;
  }

  /*버튼 아이콘*/
  /*수정 버튼*/
  .setting .edit_list {
    position: absolute;
    top: 0.25rem;
    right: 1.7rem;
  }
  /*삭제 버튼*/
  .setting .delete_list {
    position: absolute;
    top: 0.2rem;
    right: 0.5rem;
  }

  /*플러스 버튼*/
  /*타이틀 영역*/
  .setting .title {
    position: relative;
  }

  .setting .title .btn_add {
    position: absolute;
    right: 5.0rem;
    top: 0.2rem;
  }
  .setting .title .btn_edit {
    position: absolute;
    right: 3.5rem;
    top: 0.3rem;
  }
  .setting .title .btn_delete {
    position: absolute;
    right: 2.1rem;
    top: 0.2rem;
    color: #20a8d8;
  }

  .setting .card .btn_add {
    position: absolute;
    top: 0.3rem;
    right: 3rem;
  }

  .add_property {
    height: 60px;
    line-height: 50px;
    text-align: center;
    display: block;
    border: 5px dashed #686b6e;
  }

  .add_property:hover {
    border-color: #20a8d8;
  }
  .add_property:hover i,
  .add_property:hover span {
    color: #20a8d8;
  }
  .add_property i,
  .add_property span {
    color: #686b6e;
  }

  /*공통*/
  a, i, span {
    text-decoration: none !important;
  }
  .container a:hover {
    color: pink;
  }
</style>
