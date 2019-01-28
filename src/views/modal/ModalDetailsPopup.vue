<template>
  <div class="popup_wrap m-auto">
    <div class="popup">

      <div class="card card_modify">
        <div class="card-header">
          <strong></strong>
          <button class="close close_w font-xl text-right" type="button" data-dismiss="alert" aria-label="Close" @click="hideModal">
            <span aria-hidden="true">×</span>
          </button>
        </div><!--//card-header-->

        <div class="card-body">
          <!--수정하기의 input 1칸-->
          <div class="row">
            <div class="col-sm-12">
              <div class="form-group">
                <label for="name" class="help-block c_light_blue"></label>
                <input class="form-control" id="name" type="text" placeholder="입력하세요">
                <small class="text-muted">ex)</small><!--description이 붙을 경우 추가-->
              </div>
            </div>
          </div>
          <!--//수정하기의 input 1칸-->
        </div><!--//card-body-->

        <!--버튼-->
        <div class="card-footer card-footer-bg-none text-right">
          <button class="btn btn-sm btn-primary" type="submit" @click="save">
            <i class="fa fa-dot-circle-o"></i>저장</button>
          <button class="btn btn-sm btn-danger" type="reset" @click="hideModal">
            <i class="fa"></i>취소</button>
        </div>
        <!--//버튼-->

      </div><!--//card-->
    </div><!--//popup-->

    <div v-if="modal">
      <component :is="componentName"/>
    </div>

  </div>
</template>

<script>
  import Vue from 'vue';
  import { mapMutations } from 'vuex';


  export default {
    name: 'ModalDetailsPopup',
    data: () => {
      return {
        spName : null,
        serviceName : null,
        modal : false,
        targetProvider : {
          "flag" : "",
          "key" : "",
          "soCode" : null,
          "soName" : "",
          "spCode" : "",
          "spName" : ""
        },
        providerData : [],
        componentName: null
      }
    },
    created() {
      this.spName = this.$route.query.spName
      this.serviceName = this.$route.query.serviceName
      this.fetchFirebaseData();
    },
    watch : {

      componentName : () => {
        console.log(this.componentName);
        // 방어로직
        // if (!this.componentName) return;

        // Vue.component(this.componentName, () => import(`./${this.componentName}`));
        // this.component = componentName;
      },
    },
    methods: {

      ...mapMutations([
        'hideModal'
      ]),
      fetchFirebaseData() {

        console.log('fetchFirebaseData !!!!');
        firebase.database().ref('/provider/so').once('value')
          .then((data) => {
            /**
             * 전체 Database Object
             */
            this.providerData = Object.values(data.val());
            console.log('this.providerData :: ');
            console.log(this.providerData);

          })
          .catch((error) => {
            console.log(error)
          })
      },
      addProvider() {
        // sp 추가
        console.log('sp 추가');
        this.modal = true;
        this.componentName = 'ModalProviderAdd';
      },
      modifyProvider() {
        // sp 수정

      },
      deleteProvider(key) {
        // sp 삭제
        console.log('deleteProvider key ::' + key );

      },
      save(){

        firebase.database().ref(`provider/sp/${this.spName}/${this.serviceName}`).once('value')
          .then((data) => {
            /**
             * 전체 Database Object
             */
            this.oData = data.val();


            console.log(this.oData)
          })

      }
    },
  }
</script>

<style scoped>
  .popup_wrap {
    /*사이드바 위로 보이도록 position, z-index 추가 */
    position: absolute;
    z-index: 9999;

    width: 100%;
    height: 100vh;
    background: rgba(0,0,0,0.5);
    text-align: center;

    top: 0;
    left: 0;
  }
  .popup_wrap:after{
    content:"";
    display: inline-block;
    height: 100%;
    width: 0;
    vertical-align: middle;
  }
  .popup {
    width: 500px;
    min-height: 200px;
    display: inline-block;
    vertical-align: middle;
    text-align: left;
  }

  /*팝업 닫기 버튼*/
  .close.close_w {
    color: #fff;
    opacity: 1;
  }
  .close.close_w span {
    box-shadow: none;
  }
  .close.close_w:hover{
    color: #fff !important;
    opacity: 1 !important;
  }

  /*폰트 컬러*/
  .c_light_blue {
    color: #63c2de;
  }

  /*폼 변형*/
  .form-group {
    margin-bottom: 0;
  }
  .help-block:last-child {
    margin-bottom: 0;
  }
  .card-footer.card-footer-bg-none {
    background: none;
    border-top: none;
  }

</style>
