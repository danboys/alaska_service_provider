<template>
  <div>
    <!-- SP 목록 설정 팝업 -->
    <div class="popup_wrap m-auto">
      <div class="popup">
        <div class="card card_modify_SP">
          <div class="card-header">
            <strong>SP 목록 설정</strong>
            <button class="close close_w font-xl text-right" type="button" data-dismiss="alert" aria-label="Close" @click="hideModal">
              <span aria-hidden="true">×</span>
            </button>
          </div><!--//card-header-->

          <div class="card-body">
            <div v-for="(item, index) in providerData">
              <!--odd-->
              <div v-if="index % 2 == 0" class="form-group row bg-gray-500 font-weight-bold">
                <div class="col-sm-6 text-dark">
                  <span>{{item.spName}}</span>
                </div>
                <a href="#" @click="modifyProvider(item)"><i class="fa fa-edit text-dark font-lg btn_edit "></i></a><!--수정 버튼-->
                <a href="#" @click="deleteProvider(item)"><i class="fa fa-trash text-dark font-lg btn_delete"></i></a><!--삭제 버튼-->
              </div>
              <!--even-->
              <div v-else class="form-group row">
                <div class="col-sm-6">
                  <span>{{item.spName}}</span>
                </div>
                <a href="#" @click="modifyProvider(item)"><i class="fa fa-edit font-lg btn_edit "></i></a><!--수정 버튼-->
                <a href="#" @click="deleteProvider(item)"><i class="fa fa-trash font-lg btn_delete"></i></a><!--삭제 버튼-->
              </div>
            </div>


            <div class="mt-4"><a href="#" class="font-lg" @click="showSubModal('ModalProviderAdd')"><i class="fa fa-plus mr-1"></i>Add SP</a></div>
          </div><!--//card-body-->

          <!--버튼-->
          <div class="card-footer card-footer-bg-none text-right">
            <button class="btn btn-sm btn-primary" type="submit" @click="hideModal">닫기</button>
          </div>
          <!--//버튼-->

        </div>
      </div>
    </div>

    <sub-modal v-bind:target-provider="targetProvider"></sub-modal>


  </div>
</template>

<script>
  import Vue from 'vue';
  import { mapMutations } from 'vuex';
  import SubModal from '../../containers/DefaultSubModal'

  export default {
    name: 'ModalProviderList',
    components: {
      SubModal
    },
    data: () => {
      return {
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
      this.fetchFirebaseData();
      this.$EventBus.$on('update', () => {
        console.log('$EventBus.$on update:: ModalProviderList');
        this.fetchFirebaseData();
      });
    },
    methods: {
      ...mapMutations(['showSubModal', 'hideModal']),
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
      modifyProvider(item){
        this.targetProvider = item;
        this.showSubModal('ModalProviderModify');
      },
      deleteProvider(item){
        this.targetProvider = item;
        this.showSubModal('ModalProviderDelete');
      }
    },
  }
</script>

<style scoped>
  /*팝업 공통*/
  .popup_wrap {
    width: 100%;
    height: 100vh;
    background: rgba(0,0,0,0.3);
    text-align: center;

    /*사이드바 위로 보이도록 position, z-index 추가 */
    position: absolute;
    z-index: 9999;
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
    opacity: 1;
  }
  .close.close_w span {
    box-shadow: none;
  }
  .close.close_w:hover{
    color: pink !important;
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
  .card-footer.card-footer-bg-none {
    background: none;
    border-top: none;
  }
  .form-group.row {
    height: 36px;
    line-height: 36px;
    margin: 0;
  }
  .card_modify_SP .card-body .form-group {
    position: relative;
  }

  /*버튼*/
  .btn_edit{
    position: absolute;
    top: 0;
    right: 50px;
    width: 30px;
    height: 36px;
    line-height: 36px;
    text-align: center;
  }

  .btn_delete{
    position: absolute;
    top: 0;
    right: 18px;
    width: 30px;
    height: 36px;
    line-height: 36px;
    text-align: center;
  }
</style>
