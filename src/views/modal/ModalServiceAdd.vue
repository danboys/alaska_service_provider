<template>
  <div>
    <!--Service 추가 팝업-->
    <div v-if="active === 0" :data-sequence-number="sequenceNumber" class="popup_wrap m-auto">
      <div class="popup">
        <div class="card card_modify_SP">
          <div class="card-header">
            <strong>서비스 분류 추가</strong>
            <button class="close close_w font-xl text-right" type="button" data-dismiss="alert" aria-label="Close" @click="hideSubModal()">
              <span aria-hidden="true">×</span>
            </button>
          </div><!--//card-header-->

          <div class="card-body">

            <div class="form-group mb-2">
              <label for="svName">Service Name</label>
              <input v-model="serviceName" class="form-control" id="svName" type="text" placeholder="추가할 서비스 분류명을 입력하세요.">
            </div>

          </div><!--//card-body-->

          <!--버튼-->
          <div class="card-footer card-footer-bg-none text-right">
            <button class="btn btn-sm btn-primary" type="submit" @click="next">저장</button>
            <button class="btn btn-sm btn-danger" type="reset" @click="hideSubModal">취소</button>
          </div>
          <!--//버튼-->

        </div><!--//card-->
      </div><!--//popup-->
    </div>

    <!--Service 추가 확인 팝업-->
    <div v-if="active === 1" :data-sequence-number="sequenceNumber" class="popup_wrap m-auto">
      <div class="popup">

        <div class="card card_modify">
          <div class="card-header">
            <strong>서비스 분류 추가</strong>
            <button class="close close_w font-xl text-right" type="button" data-dismiss="alert" aria-label="Close" @click="hideSubModal()">
              <span aria-hidden="true">×</span>
            </button>
          </div><!--//card-header-->

          <div class="card-body">
            <!--수정하기의 input 1칸-->
            <div class="row">
              <div class="col-sm-12">
                <div class="form-group">
                  <p class="help-block c_light_blue">{{serviceName}} 분류를 추가 하시겠습니까?</p>
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

    <!--Service 추가 진행 팝업-->
    <div v-if="active === 2" :data-sequence-number="sequenceNumber" class="popup_wrap m-auto">
      <div class="popup">

        <div class="card card_delete">
          <div class="card-header">
            <strong>서비스 분류 추가</strong>
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

    <!--Service 추가 피드백 팝업-->
    <div v-if="active === 3" :data-sequence-number="sequenceNumber" class="popup_wrap m-auto">
      <div class="popup">

        <div class="card card_modify">
          <div class="card-header">
            <strong>서비스 분류 추가</strong>
            <button class="close close_w font-xl text-right" type="button" data-dismiss="alert" aria-label="Close" @click="refresh()">
              <span aria-hidden="true">×</span>
            </button>
          </div><!--//card-header-->

          <div class="card-body">
            <!--수정하기의 input 1칸-->
            <div class="row">
              <div class="col-sm-12">
                <div class="form-group">
                  <p class="help-block c_light_blue">{{serviceName}} 분류 추가 완료되었습니다.</p>
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
    name: 'ModalServiceAdd',
    data: () => {
      return {
        active : 0,
        maxActive : 4, // step count
        serviceName : "",
      }
    },
    created() {
      console.log('ModalServiceAdd ::::::');
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
      check() {
        // progress popup
        this.next();

        // service 추가
        let serviceName = this.serviceName;
        let sp = 'sp';
        // provider_default update
        firebase.database().ref('provider_default/sp').update({
          [serviceName]: {[serviceName]: ''}
        }).then((data) => {
          console.log('%cprovider_default Service 추가 완료', 'color:blue');

          // sp 데이터 가져오기
          firebase.database().ref('provider/sp').once('value')
            .then((data) => {
              console.log('%cprovider/sp 조회 완료', 'color:blue');
              let spData = data.val();

              for (let key in spData) {
                spData[key][serviceName] = {[serviceName]: ''}
              }

              // sp update
              firebase.database().ref('provider').update({
                sp: spData
              }).then((data) => {
                console.log('%cprovider update 완료', 'color:blue');

                // 추가 피드백 팝업
                setTimeout(() => { this.next(); }, 1000);

              }).catch((error) => {
                console.log('%cprovider update 중 에러가 발생하였습니다.', 'color:red');
                console.log(error)
              })

              console.log('%cprovider/sp 조회 완료', 'color:blue');
            }).catch((error) => {
            console.log('%cprovider/sp 조회 중 에러가 발생하였습니다.', 'color:red');
            console.log(error)
          })

        }).catch((error) => {
          console.log('%cprovider_default Service 추가 중 에러가 발생하였습니다.', 'color:red');
          console.log(error)
        })
      },
      refresh() {
        // refresh
        console.log('$EventBus.$emit updateService::');
        this.$EventBus.$emit('updateService');
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

  /* progress */
  .loading {
    width: 28px;
    height: 28px;
  }

  .sk-fading-circle .sk-circle {
    margin: 0 auto;
  }
</style>
