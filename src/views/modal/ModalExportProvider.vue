<template>
  <div>
    <!--내보내기 리스트 팝업-->
    <div v-if="active === 0" class="popup_wrap m-auto">
      <div class="popup">
        <div class="card card_modify_SP">
          <div class="card-header">
            <strong>내보내기</strong>
            <button class="close close_w font-xl text-right" type="button" data-dismiss="alert" aria-label="Close" @click="hideModal">
              <span aria-hidden="true">×</span>
            </button>
          </div><!--//card-header-->

          <small class="pl-3 pt-3">* 내보내기할 Provider를 선택해주세요.</small>

          <div class="card-body">
            <div v-for="(item, index) in providerData">
              <!--odd-->
              <div v-if="index % 2 == 0" class="form-group row bg-gray-500 font-weight-bold">
                <div class="col-sm-6 text-dark input_radio">
                  <input :id="item.key" v-if="index == 0" type="radio" v-bind:value="item.key" name="export_sel" v-model="targetKey">
                  <input :id="item.key" v-else type="radio" v-bind:value="item.key" name="export_sel" v-model="targetKey">
                  <label :for="item.key">{{item.spName}}</label>
                </div>
              </div>
              <!--even-->
              <div v-else class="form-group row">
                <div class="col-sm-6 input_radio">
                  <input :id="item.key" type="radio" v-bind:value="item.key" name="export_sel" v-model="targetKey">
                  <label :for="item.key">{{item.spName}}</label>
                </div>
              </div>
            </div>
          </div><!--//card-body-->

          <!--버튼-->
          <div class="card-footer card-footer-bg-none text-right">
            <button class="btn btn-sm btn-primary" type="submit" @click="next">저장</button>
            <button class="btn btn-sm btn-danger" type="reset" @click="hideModal">취소</button>
          </div>
          <!--//버튼-->

        </div><!--//card-->
      </div><!--//popup-->
    </div>

    <!--내보내기 확인 팝업-->
    <div v-else-if="active === 1" class="popup_wrap m-auto">
      <div class="popup">
        <div class="card card_delete">
          <div class="card-header">
            <strong>내보내기</strong>
            <button class="close close_w font-xl text-right" type="button" data-dismiss="alert" aria-label="Close" @click="hideModal">
              <span aria-hidden="true">×</span>
            </button>
          </div><!--//card-header-->

          <div class="card-body">
            <!--수정하기의 input 1칸-->
            <div class="row">
              <div class="col-sm-12">
                <div class="form-group">
                  <p class="help-block c_light_blue">{{targetProvider.spName}} 파일을 다운로드 하시겠습니까?</p>
                  <p class="help-block">파일명 : serviceProvider_{{targetProvider.key}}.json</p>
                </div>
              </div>
            </div>
            <!--//수정하기의 input 1칸-->
          </div><!--//card-body-->

          <!--버튼-->
          <div class="card-footer card-footer-bg-none text-right">
            <button class="btn btn-sm btn-primary" type="submit"  @click="checkServer">확인</button>
            <button class="btn btn-sm btn-danger" type="reset" @click="hideModal">취소</button>
          </div>
          <!--//버튼-->

        </div><!--//card-->
      </div><!--//popup-->
    </div>

    <!--내보내기 진행 팝업-->
    <div v-if="active === 2" class="popup_wrap m-auto">
      <div class="popup">

        <div class="card card_delete">
          <div class="card-header">
            <strong>내보내기</strong>
            <button class="close close_w font-xl text-right" type="button" data-dismiss="alert" aria-label="Close" @click="hideModal()">
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

    <!--내보내기 피드백 팝업-->
    <div v-else-if="active === 3" class="popup_wrap m-auto">
      <div class="popup">
        <div class="card card_modify">
          <div class="card-header">
            <strong>내보내기</strong>
            <button class="close close_w font-xl text-right" type="button" data-dismiss="alert" aria-label="Close" @click="hideModal">
              <span aria-hidden="true">×</span>
            </button>
          </div><!--//card-header-->

          <div class="card-body">
            <!--수정하기의 input 1칸-->
            <div class="row">
              <div class="col-sm-12">
                <div class="form-group">
                  <p class="help-block">serviceProvider_{{targetProvider.spName}}.json</p>
                  <p class="help-block c_light_blue">파일이 다운로드 되었습니다.</p>
                </div>
              </div>
            </div>
            <!--//수정하기의 input 1칸-->
          </div><!--//card-body-->

          <!--버튼-->
          <div class="card-footer card-footer-bg-none text-right">
            <button class="btn btn-sm btn-primary" type="reset" @click="hideModal">닫기</button>
          </div>
          <!--//버튼-->

        </div><!--//card-->
      </div><!--//popup-->
    </div>

    <!--내보내기 실패 팝업-->
    <div v-else-if="active === 4" class="popup_wrap m-auto">
      <div class="popup">
        <div class="card card_modify">
          <div class="card-header">
            <strong>내보내기 실패</strong>
            <button class="close close_w font-xl text-right" type="button" data-dismiss="alert" aria-label="Close" @click="hideModal">
              <span aria-hidden="true">×</span>
            </button>
          </div><!--//card-header-->

          <div class="card-body">
            <!--수정하기의 input 1칸-->
            <div class="row">
              <div class="col-sm-12">
                <div class="form-group">
                  <p class="help-block">내보내기에 실패하였습니다.</p>
                  <p class="help-block c_light_blue">서버 연결을 확인해주세요. <a href="https://github.com/danboys/alaska_service_provider/tree/SPM-62/server#not-working" target="_blank">[확인방법]</a></p>
                </div>
              </div>
            </div>
            <!--//수정하기의 input 1칸-->
          </div><!--//card-body-->

          <!--버튼-->
          <div class="card-footer card-footer-bg-none text-right">
            <button class="btn btn-sm btn-primary" type="reset" @click="hideModal">닫기</button>
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
    name: 'ModalExportProvider',
    components: {
    },
    data: () => {
      return {
        targetKey: "",
        targetProvider:{

        },
        providerData : [],
        maxActive: 4,
        active: 0
      }
    },
    watch:{
      targetKey(key){
        for(let i=0;i<this.providerData.length;i++){
          if(this.providerData[i].key === key){
            this.targetProvider = this.providerData[i];
          }
        }
        console.log(this.targetProvider);
      }
    },
    created() {
      console.log('created ModalExportProvider');
      this.fetchFirebaseData();
    },
    mounted() {
      console.log('created ModalExportProvider');
      console.log();
      this.fetchFirebaseData();
    },

    methods: {
      ...mapMutations(['hideModal']),
      fetchFirebaseData() {
        console.log('fetchFirebaseData !!!!');
        firebase.database().ref('/provider/so').once('value')
          .then((data) => {
            /**
             * 전체 Database Object
             */
            this.providerData = Object.values(data.val());
            this.targetKey = this.providerData[0].key;
            console.log('this.providerData :: ');
            console.log(this.providerData);

            console.log('this.targetKey :: ');
            console.log(this.targetKey);

          })
          .catch((error) => {
            console.log(error)
          })
      },
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
      checkServer(){
        // progress popup
        this.next();

        var self = this;
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
          if (xmlhttp.readyState == XMLHttpRequest.DONE) {   // XMLHttpRequest.DONE == 4
            if (xmlhttp.status == 200) {
              console.log("서버 연결 확인!!");
              // 파일 다운로드 요청
              setTimeout(() => { self.exportProvider(); }, 1000);
            } else {
              if (xmlhttp.status == 400) {
                console.log('There was an error 400');
              } else {
                console.log('something else other than 200 was returned : ' + xmlhttp.status);
              }

              setTimeout(() => {
                // 서버연결 안되어있음. 내보내기 실패 팝업
                self.active = 4;
              }, 1000);
            }
          }
        };
        xmlhttp.open("GET", "http://127.0.0.1:3000/save", true);
        xmlhttp.send();
      },
      exportProvider(){
        window.open('http://127.0.0.1:3000/save/file/'+ this.targetProvider.key);
        this.next();
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

  /*input_radio*/
  .input_radio {
    position: relative;
    width: 498px;
    padding-left: 34px;
  }
  .input_radio input {
    position: absolute;
    top: 12px;
    left: 15px;
    cursor: pointer;
  }

  .input_radio label {
    margin-bottom: 0;
    width: 90%;
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
