<template>
  <div>
    <!-- SP 목록 설정 팝업 -->
    <div class="popup_wrap m-auto">
      <div class="popup">
        <div class="card card_modify">
          <div class="card-header">
            <strong>SP 목록 설정</strong>
            <button class="close close_w font-xl text-right" type="button" data-dismiss="alert" aria-label="Close" @click="hideModal">
              <span aria-hidden="true">×</span>
            </button>
          </div><!--//card-header-->

          <div class="card-body">
            <!--수정하기의 input 1칸-->
            <div class="row">
              <div class="col-sm-12">
                <div class="form-group">
                  <ul>
                    <li v-for="item in providerData">{{item.spName}} <a href="#" @click="deleteProvider(item.key)"><i class="fa fa-trash" aria-hidden="true"></i></a></li>
                  </ul>
                </div>
                <div>
                  <a href="#" @click="showSubModal('ModalProviderAdd')"><i class="fa fa-plus" aria-hidden="true"></i> Add provider</a>
                </div>
              </div>
            </div>
          </div><!--//card-body-->

          <!--버튼-->
          <div class="card-footer card-footer-bg-none text-right">
            <button class="btn btn-sm btn-primary" @click="hideModal">
              <i class="fa"></i>닫기</button>
          </div>
          <!--//버튼-->

        </div><!--//card-->
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
      modifyProvider() {
        // sp 수정

      },
      deleteProvider(key) {
        // sp 삭제
        console.log('deleteProvider key ::' + key );

      },
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
