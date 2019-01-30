<template>
  <div>
    <!--SP 추가 팝업-->
    <div v-if="active == 0" :data-sequence-number="sequenceNumber" class="popup_wrap m-auto">
      <div class="popup popup_400">
        <div class="card card_modify_SP">
          <div class="card-header">
            <strong>SP 추가</strong>
            <button class="close close_w font-xl text-right" type="button" data-dismiss="alert" aria-label="Close" @click="hideSubModal()">
              <span aria-hidden="true">×</span>
            </button>
          </div><!--//card-header-->

          <div class="card-body">

            <div class="form-group mb-2">
              <label for="spName">SP Name</label>
              <small></small>
              <input type="text" v-model="provider.spName" class="form-control" id="spName" placeholder="(ex. CJH Livebed)">
            </div>
            <div class="form-group mb-2">
              <label for="soCode">SO Code</label>
              <!--<small>(ex. 43)</small>-->
              <input type="text" v-model="provider.soCode" class="form-control" id="soCode" placeholder="(ex. 43)">
            </div>
            <div class="form-group mb-2">
              <label for="soName">SO Name</label>
              <!--<small>(ex. cjh)</small>-->
              <input type="text" v-model="provider.soName" class="form-control" id="soName" placeholder="(ex. cjh)">
            </div>
            <div class="form-group mb-2">
              <label for="spCode">SP Code</label>
              <!--<small>(ex. livebed)</small>-->
              <input type="text" v-model="provider.spCode" class="form-control" id="spCode" placeholder="(ex. livebed)">
            </div>
            <div class="form-group">
              <label for="flag">Flag</label>
              <!--<small>(ex. CJHV)</small>-->
              <input type="text" v-model="provider.flag" class="form-control" id="flag" placeholder="(ex. CJHV)">
            </div>

          </div><!--//card-body-->

          <!--버튼-->
          <div class="card-footer card-footer-bg-none text-right">
            <button class="btn btn-sm btn-primary" type="submit" @click="next()">저장</button>
            <button class="btn btn-sm btn-danger" type="reset" @click="hideSubModal()">취소</button>
          </div>
          <!--//버튼-->

        </div><!--//card-->
      </div><!--//popup-->
    </div>

    <!--SP 추가 확인 팝업-->
    <div v-if="active == 1" :data-sequence-number="sequenceNumber" class="popup_wrap m-auto">
      <div class="popup">

        <div class="card card_modify">
          <div class="card-header">
            <strong>SP 추가</strong>
            <button class="close close_w font-xl text-right" type="button" data-dismiss="alert" aria-label="Close">
              <span aria-hidden="true">×</span>
            </button>
          </div><!--//card-header-->

          <div class="card-body">
            <!--수정하기의 input 1칸-->
            <div class="row">
              <div class="col-sm-12">
                <div class="form-group">
                  <p class="help-block c_light_blue">추가 하시겠습니까?</p>
                </div>
              </div>
            </div>
            <!--//수정하기의 input 1칸-->
          </div><!--//card-body-->

          <!--버튼-->
          <div class="card-footer card-footer-bg-none text-right">
            <button class="btn btn-sm btn-primary" type="submit" @click="check()">확인</button>
            <button class="btn btn-sm btn-danger" type="reset" @click="prev()">취소</button>
          </div>
          <!--//버튼-->

        </div><!--//card-->
      </div><!--//popup-->
    </div>

    <!--SP 추가 피드백 팝업-->
    <div v-if="active == 2" :data-sequence-number="sequenceNumber" class="popup_wrap m-auto">
      <div class="popup">

        <div class="card card_modify">
          <div class="card-header">
            <strong>SP 추가 완료</strong>
            <button class="close close_w font-xl text-right" type="button" data-dismiss="alert" aria-label="Close">
              <span aria-hidden="true">×</span>
            </button>
          </div><!--//card-header-->

          <div class="card-body">
            <!--수정하기의 input 1칸-->
            <div class="row">
              <div class="col-sm-12">
                <div class="form-group">
                  <p class="help-block c_light_blue">추가 완료되었습니다.</p>
                </div>
              </div>
            </div>
            <!--//수정하기의 input 1칸-->
          </div><!--//card-body-->

          <!--버튼-->
          <div class="card-footer card-footer-bg-none text-right">
            <button class="btn btn-sm btn-primary" type="reset" @click="refresh">
              <i class="fa"></i>닫기</button>
          </div>
          <!--//버튼-->

        </div><!--//card-->
      </div><!--//popup-->
    </div>
  </div>
</template>

<script>
  import { mapMutations } from 'vuex';

  export default {
    name: 'ModalProviderAdd',
    data: () => {
      return {
        active : 0,
        provider : {
          "flag" : "",
          "key" : "",
          "soCode" : null,
          "soName" : "",
          "spCode" : "",
          "spName" : ""
        },
      }
    },
    created() {

    },
    mounted(){
      this.active = 0;
      this.provider = {
        "flag" : "",
        "key" : "",
        "soCode" : null,
        "soName" : "",
        "spCode" : "",
        "spName" : ""
      }
    },
    computed:{
      sequenceNumber: function () {
        console.log('sequenceNumber change!!');
        return this.active
      }
    },
    methods: {
      ...mapMutations([
        'hideSubModal'
      ]),
      next() {
        if(this.active !==  2){
          this.active++;
        }
      },
      prev() {
        if(this.active !== 0){
          this.active--;
        }
      },
      check(){
        // key 설정
        const today = new Date();
        this.provider.key = `${this.provider.soName}_${this.provider.spCode}`;
        this.provider.update = today.getFullYear() + "-" +
          ("0" + (today.getMonth()+1)).slice(-2) + "-" +
          ("0" + today.getDate()).slice(-2) + "T" +
          ("0" + today.getHours()).slice(-2) + ":" +
          ("0" + today.getMinutes()).slice(-2) + ":" +
          ("0" + today.getSeconds()).slice(-2);
        console.log("this.provider");
        console.log(this.provider);

        // save 로직 구현
        // so 추가
        firebase.database().ref('provider/so').update({
          [this.provider.key]: this.provider
        }).then(() => {
          console.log('%cSO 추가 완료','color:blue')

          // provider_default 정보 가져오기
          firebase.database().ref('provider_default/sp').once('value')
            .then((data) => {
              console.log('%cprovider_default 정보 가져오기 완료 (Initial Data)','color:blue')
              let spData = data.val();
              delete this.provider.update;
              spData.so = this.provider;

              // SP 생성
              firebase.database().ref('provider/sp').update({
                [this.provider.key]: spData
              }).then((data) => {
                console.log('%cSP 추가 완료 (Initial Data)','color:blue')
                // 추가 피드백 팝업
                this.next();
              }).catch((error) => {
                console.log('%cSP 추가 중 에러가 발생하였습니다.','color:red');
                console.log(error)
              })

            })
            .catch((error) => {
              console.log('%cDefault SP 데이터를 가져오는 중 에러가 발생하였습니다.','color:red');
              console.log(error)
            })

        }).catch((error) => {
          console.log('%cSO 추가 중 에러가 발생하였습니다.','color:red');
          console.log(error);
        });

      },
      refresh() {
        // refresh
        console.log('$EventBus.$emit update::');
        this.$EventBus.$emit('update');
        this.hideSubModal();
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
