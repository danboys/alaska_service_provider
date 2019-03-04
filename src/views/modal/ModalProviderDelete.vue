<template>
  <div>
    <!--SP 삭제 확인 팝업-->
    <div v-if="active === 0" :data-sequence-number="sequenceNumber" class="popup_wrap m-auto">
      <div class="popup">

        <div class="card card_delete">
          <div class="card-header">
            <strong>{{targetProvider.spName}}</strong>
            <button class="close close_w font-xl text-right" type="button" data-dismiss="alert" aria-label="Close" @click="hideSubModal()">
              <span aria-hidden="true">×</span>
            </button>
          </div><!--//card-header-->

          <div class="card-body">
            <div class="row">
              <div class="col-sm-12">
                <div class="form-group">
                  <p class="help-block c_light_blue">삭제하시겠습니까?</p>
                </div>
              </div>
            </div>
          </div><!--//card-body-->

          <!--버튼-->
          <div class="card-footer card-footer-bg-none text-right">
            <button class="btn btn-sm btn-primary" type="submit" @click="check()">확인</button>
            <button class="btn btn-sm btn-danger" type="reset" @click="hideSubModal()">취소</button>
          </div>
          <!--//버튼-->

        </div><!--//card-->
      </div><!--//popup-->
    </div>

    <!--SP 삭제 진행 팝업-->
    <div v-if="active === 1" :data-sequence-number="sequenceNumber" class="popup_wrap m-auto">
      <div class="popup">

        <div class="card card_delete">
          <div class="card-header">
            <strong>SP 삭제 진행</strong>
            <button class="close close_w font-xl text-right" type="button" data-dismiss="alert" aria-label="Close" @click="hideSubModal()">
              <span aria-hidden="true">×</span>
            </button>
          </div><!--//card-header-->

          <div class="card-body">
            <!--수정하기의 input 1칸-->
            <div class="sk-fading-circle loading">
              <div class="sk-circle1 sk-circle"></div>
              <div class="sk-circle2 sk-circle"></div>
              <div class="sk-circle3 sk-circle"></div>
              <div class="sk-circle4 sk-circle"></div>
              <div class="sk-circle5 sk-circle"></div>
              <div class="sk-circle6 sk-circle"></div>
              <div class="sk-circle7 sk-circle"></div>
              <div class="sk-circle8 sk-circle"></div>
              <div class="sk-circle9 sk-circle"></div>
              <div class="sk-circle10 sk-circle"></div>
              <div class="sk-circle11 sk-circle"></div>
              <div class="sk-circle12 sk-circle"></div>
            </div>
          </div><!--//card-body-->

        </div><!--//card-->
      </div><!--//popup-->
    </div>

    <!--SP 삭제 피드백 팝업-->
    <div v-if="active === 2" :data-sequence-number="sequenceNumber" class="popup_wrap m-auto">
      <div class="popup">

        <div class="card card_modify">
          <div class="card-header">
            <strong>SP 삭제 완료</strong>
            <button class="close close_w font-xl text-right" type="button" data-dismiss="alert" aria-label="Close" @click="hideSubModal()">
              <span aria-hidden="true">×</span>
            </button>
          </div><!--//card-header-->

          <div class="card-body">
            <div class="row">
              <div class="col-sm-12">
                <div class="form-group">
                  <p class="help-block c_light_blue">삭제 완료되었습니다.</p>
                </div>
              </div>
            </div>
          </div><!--//card-body-->

          <!--버튼-->
          <div class="card-footer card-footer-bg-none text-right">
            <button class="btn btn-sm btn-primary" type="reset" @click="refresh">닫기</button>
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
    name: 'ModalProviderDelete',
    props: ['targetProvider'],
    data: () => {
      return {
        active : 0,
        maxActive : 3, // step count
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
      console.log('ModalProviderDelete ::');
      console.log('this.targetProvider');
      console.log(this.targetProvider);
      Object.assign(this.provider, this.targetProvider)
    },
    mounted(){
      this.active = 0;
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
        if(this.active !==  this.maxActive-1){
          this.active++;
        }
      },
      prev() {
        if(this.active !== 0){
          this.active--;
        }
      },
      check(){
        // progress popup
        this.next();

        console.log("this.provider");
        console.log(this.provider);

        firebase.database().ref('provider/so/'+this.provider.key).remove().then(()=>{
          console.log('%cSO 삭제 완료','color:blue');
          firebase.database().ref('provider/sp/'+this.provider.key).remove().then(()=>{
            console.log('%cSP 삭제 완료','color:blue');
            // 추가 피드백 팝업
            setTimeout(() => { this.next(); }, 1000);
          }).catch((error) => {
            console.log('%cSP 삭제 중 에러가 발생하였습니다.','color:red');
            console.log(error);
          });
        }).catch((error) => {
          console.log('%cSO 삭제 중 에러가 발생하였습니다.','color:red');
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
  .help-block:last-child {
    margin-bottom: 0;
  }
  .card-footer.card-footer-bg-none {
    background: none;
    border-top: none;
  }

  /* progress */
  .loading {
    width: 28px;
    height: 28px;
  }

  .sk-fading-circle .sk-circle {
    margin: 0 auto;
  }

  /* 버튼 */
  .btn {
    margin-left: 4px;
  }
  .btn:first-child {
    margin-left: 0;
  }
</style>
