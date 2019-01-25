<template>
  <div class="wrap">
    <!--진입 경로-->
    <nav class="breadcrumb">
      <a class="breadcrumb-item" href="#">Home</a>
      <a class="breadcrumb-item" href="#">Library</a>
      <a class="breadcrumb-item" href="#">Data</a>
      <span class="breadcrumb-item active">Bootstrap</span>
    </nav>
    <!--//진입 경로-->
    <div class="container">
      <!--서비스분류 카테고리 1개 단위-->
      <div v-for="(val1, key1) in depth1Data" v-if="typeof(val1) === 'object'">
        <div class="card p-3" id="Accordion" data-children=".item" style=""  >
          <div class="item card p-2 mb-2">
            <div class="position-relative">
              <a data-toggle="collapse" data-parent="#Accordion" :href="'#'+key1" aria-expanded="true" aria-controls="Accordion2">
                {{key1}}
              </a>
              <!--툴팁-->
              <a href="#" class="q_mark fa fa-exclamation-circle"></a>
              <div class="tooltip_box">툴팁<br>툴팁입니다</div>
              <!--//툴팁-->
              <div class="collapse card p-2 mb-2 mt-2 position-relative" :id="key1" role="tabpanel" >
                <div class="position-relative" v-for="(val2,key2) in val1">
                  <p class="mb-0">{{val2}}</p>
                  <a href="#" class="edit_list fa fa-edit"></a></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-else>
        <div class="card p-3" id="Accordion" data-children=".item" style=""  >
          <div class="item card p-2 mb-2">
            <div class="position-relative">
              <a data-toggle="collapse" data-parent="#Accordion" :href="'#'+key1" aria-expanded="true" aria-controls="Accordion2">
                {{key1}}
              </a>
              <!--툴팁-->
              <a href="#" class="q_mark  fa fa-exclamation-circle"></a>
              <div class="tooltip_box">툴팁<br>툴팁입니다</div>
              <!--//툴팁-->
              <div class="collapse card p-2 mb-2 mt-2 position-relative" :id="key1" role="tabpanel"  v-if="typeof(val1) === 'string'">
                <p class="mb-0">{{val1}}</p>
                <a href="#" class="edit_list fa fa-edit"></a>
              </div>
              <div class="collapse card p-2 mb-2 mt-2 position-relative" :id="key1" role="tabpanel"  v-else>
                <p class="mb-0">{{val2}}</p>
                <a href="#" class="edit_list fa fa-edit"></a>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div><!--//container-->
  </div><!--//wrap-->
  <!--<div class="wrap_container">
    <div>
      {{this.serviceName}}
    </div>
    <div>
      <ul>
        <li v-for="item in depth1Data">
          <div>{{item}}</div>
          <ul>
            <li v-for="item in depth2Data">
              {{item}}
              <ul>
                <li>
                  <span></span>
                  <span style="margin-left: 10px;"><a href="#" @click="showModal('ModalDetailsPopup')">수정하기</a></span>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </div>

  </div>-->

</template>



<script >
  import Vue from 'vue'
  import { mapMutations } from 'vuex'

  export default {
    name: 'Details',
    components: {
    },
    data:()=>{
      return {
        spName : null,
        serviceName : null,
        path : null,
        oData: {},
        depth1Data: [],
      }
    },
    created(){
      this.spName = this.$route.query.spName
      this.serviceName = this.$route.query.serviceName
      this.fetchFirebaseData();
    },
    methods: {
      ...mapMutations([`showModal`]),
      /**
       * firebase 연동
       */
      fetchFirebaseData() {
        console.log('firebase연동');
        firebase.database().ref(`provider/sp/${this.spName}/${this.serviceName}`).once('value')
          .then((data) => {
            /**
             * 전체 Database Object
             */
            this.oData = data.val();

            //let convert = require('object-array-converter');
            this.depth1Data = data.val()
            console.log(this.depth1Data)

          })
          .catch((error) => {
            console.log(error)
          })
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
</style>
