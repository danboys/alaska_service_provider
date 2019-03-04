<template>
  <div>
    <!-- 서비스 목록 설정 팝업 -->
    <div class="popup_wrap m-auto">
      <div class="popup">
        <div class="card card_modify_SP">
          <div class="card-header">
            <strong>서비스 목록 설정</strong>
            <button class="close close_w font-xl text-right" type="button" data-dismiss="alert" aria-label="Close" @click="hideModal">
              <span aria-hidden="true">×</span>
            </button>
          </div><!--//card-header-->

          <div class="card-body">
            <div v-for="(item, index) in serviceData">
              <!--odd-->
              <div v-if="index % 2 == 0" class="form-group row">
                <div class="col-sm-6 text-dark">
                  <span>{{item}}</span>
                </div>
                <a href="#" @click="modifyService(item)"><i class="fa fa-edit text-dark font-lg btn_edit "></i></a><!--수정 버튼-->
                <a href="#" @click="deleteService(item)"><i class="fa fa-trash text-dark font-lg btn_delete"></i></a><!--삭제 버튼-->
              </div>
              <!--even-->
              <div v-else class="form-group row">
                <div class="col-sm-6">
                  <span>{{item}}</span>
                </div>
                <a href="#" @click="modifyService(item)"><i class="fa fa-edit text-dark font-lg btn_edit "></i></a><!--수정 버튼-->
                <a href="#" @click="deleteService(item)"><i class="fa fa-trash text-dark font-lg btn_delete"></i></a><!--삭제 버튼-->
              </div>
            </div>


            <div class="mt-4"><a href="#" class="font-lg" @click="addService"><i class="fa fa-plus mr-1"></i>Add Service</a></div>
          </div><!--//card-body-->

          <!--버튼-->
          <div class="card-footer card-footer-bg-none text-right">
            <button class="btn btn-sm btn-primary" type="submit" @click="hideModal">닫기</button>
          </div>
          <!--//버튼-->

        </div>
      </div>
    </div>

    <sub-modal v-bind:target-service="targetService"></sub-modal>

  </div>
</template>

<script>
  import Vue from 'vue';
  import { mapMutations } from 'vuex';
  import SubModal from '../../containers/DefaultSubModal'

  export default {
    name: 'ModalServiceList',
    components: {
      SubModal
    },
    data: () => {
      return {
        targetValues : {},
        serviceData : [],
        componentName: null,
        targetService : {
          serviceName : ""
        }
      }
    },
    created() {
      console.log('ModalServiceList ::');
      console.log("this.$store.state.modalValues");
      console.log(this.$store.state.modalValues);
      Object.assign(this.targetValues, this.$store.state.modalValues);

      this.fetchFirebaseData();
      this.$EventBus.$on('updateService', () => {
        console.log('$EventBus.$on updateService:: ModalServiceList');
        this.fetchFirebaseData();
      });
    },
    methods: {
      ...mapMutations(['showSubModal', 'hideModal']),
      fetchFirebaseData() {
        console.log('fetchFirebaseData !!!!');
        firebase.database().ref('/provider/sp/'+this.targetValues.key).once('value')
          .then((data) => {
            /**
             * 전체 Database Object
             */
            this.serviceData = Object.keys(data.val());
            console.log('this.serviceData :: ');
            console.log(this.serviceData);

          })
          .catch((error) => {
            console.log(error)
          })
      },
      addService(){
        this.showSubModal('ModalServiceAdd');
      },
      modifyService(item){
        this.targetService.serviceName = item;
        this.showSubModal('ModalServiceModify');
      },
      deleteService(item){
        this.targetService.serviceName = item;
        this.showSubModal('ModalServiceDelete');
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

  /* 버튼 */
  .btn {
    margin-left: 4px;
  }
  .btn:first-child {
    margin-left: 0;
  }
</style>
