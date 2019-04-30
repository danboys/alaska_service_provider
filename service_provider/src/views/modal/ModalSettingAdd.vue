<template>
  <div>
    <div v-if="active == 0" :data-sequence-number="sequenceNumber" class="popup_wrap m-auto">
      <div class="popup popup_400">
        <div class="card card_modify_SP">
          <div class="card-header">
            <strong v-if="targetValues.divi === 'property'">{{serviceName}} 하위 항목 추가</strong>
            <strong v-else>{{targetValues.key}} 하위 항목 추가</strong>
            <button class="close close_w font-xl text-right" type="button" data-dismiss="alert" aria-label="Close" @click="hideModal">
              <span aria-hidden="true">×</span>
            </button>
          </div><!--//card-header-->

          <div class="card-body">

            <div class="form-group mb-2">
              <label for="company">항목 명</label>
              <input class="form-control" id="company" type="text" placeholder="(ex.항목명)">
            </div>
            <div class="form-group mb-2">
              <div v-if="targetValues.type === 'boolean' && targetValues.divi === 'property'">
                <label for="company" class="mt-2 ">항목 설명</label>
                <textarea class="form-control text-area-height _textSub" id="company" type="text" placeholder="(ex.항목 설명)"></textarea>
                <label for="company">선택</label>
                <div class="input_box input_box_col2">
                  <div class="input_radio">
                    <input type="radio" id="true" name="contents_select" @click="serviceValueChecked(true)">
                    <label for="true">TRUE</label>
                  </div>
                  <div class="input_radio">
                    <input type="radio" id="false" name="contents_select" @click="serviceValueChecked(false)">
                    <label for="false">FALSE</label>
                  </div>
                </div>
              </div>
              <div v-else>
                <div v-if="targetValues.type != 'object' && targetValues.divi != 'property'">
                  <label for="company">항목 값</label>
                  <textarea class="form-control text-area-height" id="company" type="text" placeholder="(ex.항목 값)"></textarea>
                </div>
                <div v-if="targetValues.type === 'object' && targetValues.divi === 'btn'">
                  <label for="company" class="mt-2 ">항목 설명</label>
                  <textarea class="form-control text-area-height _textSub" id="company" type="text" placeholder="(ex.항목 설명)"></textarea>
                </div>
                <div v-if="targetValues.divi === 'property'">
                  <label for="company" class="mt-2 ">항목 설명</label>
                  <textarea class="form-control text-area-height _textSub" id="company" type="text" placeholder="(ex.항목 설명)"></textarea>
                </div>
                <div v-if="targetValues.type === 'object' && targetValues.divi === 'property'">
                  <div class="form-group mb-2">
                    <label for="company">하위 항목 명</label>
                    <input class="form-control _subName" id="company" type="text" placeholder="(ex.하위 항목 명)">
                  </div>
                  <label for="company" class="mt-2 ">하위 항목 값</label>
                  <textarea class="form-control text-area-height _subValue" id="company" type="text" placeholder="(ex.하위 항목 값)"></textarea>
                  <label for="company" class="mt-2 ">하위 항목 설명</label>
                  <textarea class="form-control text-area-height _subText" id="company" type="text" placeholder="(ex.하위 항목 설명)"></textarea>
                </div>
              </div>
            </div>


          </div><!--//card-body-->

          <!--버튼-->
          <div class="card-footer card-footer-bg-none text-right">
            <button class="btn btn-sm btn-primary" type="submit" @click="next()">저장</button>
            <button class="btn btn-sm btn-danger" type="reset" @click="hideModal">취소</button>
          </div>
          <!--//버튼-->

        </div><!--//card-->
      </div><!--//popup-->
    </div>
    <div v-if="active == 1" :data-sequence-number="sequenceNumber" class="popup_wrap m-auto">
      <div class="popup">

        <div class="card card_modify">
          <div class="card-header">
            <strong>컨텐츠 하위 항목 추가</strong>
            <button class="close close_w font-xl text-right" type="button" data-dismiss="alert" aria-label="Close" @click="hideModal">
              <span aria-hidden="true">×</span>
            </button>
          </div><!--//card-header-->

          <div class="card-body">
            <!--수정하기의 input 1칸-->
            <div class="row">
              <div class="col-sm-12">
                <div class="form-group">
                  <p class="help-block c_light_blue">추가하시겠습니까?</p>
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
            <strong>컨텐츠 하위 항목 추가</strong>
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
    <div v-if="active == 3" :data-sequence-number="sequenceNumber" class="popup_wrap m-auto">
      <div class="popup">

        <div class="card card_modify">
          <div class="card-header">
            <strong>컨텐츠 하위 항목 추가</strong>
            <button class="close close_w font-xl text-right" type="button" data-dismiss="alert" aria-label="Close" @click="hideModal">
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
  import SubModal from '../../containers/DefaultSubModal2'
  export default {
    name: "ModalSettingAdd",
    components: {
      SubModal
    },
    data: () => {
      return {
        targetValues : {},
        active : 0,
        maxActive : 4, // step count
        inputText:"",
        inputValue:"",
        subInputValue:"",
        defaultQuery :"",
        valueQuery :"",
        keyQuery:"",
        keyValueQuery:"",
        spValue:"",
        tooltipValue :"",
        subName : "",
        subValue  : "",
        subTootip  : "",

      }
    },
    created() {
      this.spName = this.$route.query.spName
      this.serviceName = this.$route.query.serviceName
      Object.assign(this.targetValues, this.$store.state.modalValues);
      console.log(this.targetValues);
      this.defaultQuery = `provider/sp/${this.spName}/${this.serviceName}`;
      this.valueQuery = `provider/sp/${this.spName}/${this.serviceName}/${this.targetValues.valueName}`;
      this.keyQuery = `provider/sp/${this.spName}/${this.serviceName}/${this.targetValues.key}`;
      this.keyValueQuery = `provider/sp/${this.spName}/${this.serviceName}/${this.targetValues.key}/${this.targetValues.valueName}`
    },
    computed:{
      sequenceNumber: function () {
        return this.active
      }
    },
    mounted(){
      this.active = 0;
    },
    watch : {
      componentName : () => {
        console.log(this.componentName);
      },
    },
    methods: {
      ...mapMutations([
        'hideModal'
      ]),
      serviceValueChecked(value){
        this.spValue = value
      },
      next() {
        if(this.active == 0 ){
          this.inputText = $('.form-group input').val()
          this.inputValue = $('.form-group textarea').val()
          this.tooltipValue = $('.form-group ._textSub').val()
          this.subName = $('.form-group ._subName').val()
          this.subValue = $('.form-group ._subValue').val()
          this.subTootip = $('.form-group ._subText').val()
          if(this.targetValues.divi=== "property" && this.targetValues.type === "object"){
            this.subInputValue = $('.form-group ._sub').val()
          }
        }
        if(this.active !== this.maxActive-1){
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

        if(this.targetValues.divi=== "property"){
          let inputText
          let inputValue
          let qurey
          qurey = this.defaultQuery
          inputText = this.inputText
          if(this.targetValues.type === "array"){
            inputValue = [this.inputValue]
          }else if(this.targetValues.type === "object"){
            let object ={[this.subName]:this.subValue}
            inputValue = object
          }else if(this.targetValues.type === "boolean"){
            inputValue = this.spValue
          }else{
            inputValue = this.inputValue
          }
          firebase.database().ref(qurey).update({
            [inputText] : inputValue
          }).then(() => {
            this.setTooltip();
          }).catch((error) => {
            console.log(error);
          });

        }else{
          if(this.targetValues.type === "array"){
            firebase.database().ref(this.keyQuery).once('value')
              .then((data) => {
                firebase.database().ref(this.keyQuery).update({
                  [data.val().length] : this.inputText
                }).then(() => {
                  // 추가 피드백 팝업
                  setTimeout(() => { this.next(); }, 1000);
                }).catch((error) => {
                  console.log(error);
                });
              })
              .catch((error) => {
                console.log(error)
              })
          }else{
            firebase.database().ref(this.keyQuery).update({
              [this.inputText] : this.inputValue
            }).then(() => {
              this.setTooltip();
            }).catch((error) => {
              console.log(error);
            });
          }
        }
      },
      setTooltip(){
        firebase.database().ref(`tooltip/${this.serviceName}`).update({
          [this.inputText] : this.tooltipValue
        }).then(() => {
          if(this.targetValues.divi=== "property" && this.targetValues.type === "object" ){
            firebase.database().ref(`tooltip/${this.serviceName}`).update({
              [this.subName] : this.subTootip
            }).then(() => {
              setTimeout(() => { this.next(); }, 1000);
            }).catch((error) => {
              console.log(error);
            });
          }else{
            setTimeout(() => { this.next(); }, 1000);
          }
        }).catch((error) => {
          console.log(error);
        });
      },
      refresh() {
        // refresh
        this.$EventBus.$emit('update');
        this.hideModal();
      },
    },
  }
</script>
<style scoped>
  /*팝업 공통*/
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
  .popup_400 {
    width: 400px;
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
  /*폼 변형*/
  .form-group {
    margin-bottom: 0;
  }
  .card-footer.card-footer-bg-none {
    background: none;
    border-top: none;
  }
  .card_modify_SP .card-body .form-group {
    position: relative;
  }
  /*textarea*/
  textarea.text-area-height {
    height: 100px;
  }

  /*추가*/
  /*input radio*/
  .input_box {
    position: relative;
  }
  .input_box_col2 .input_radio {
    width: 50%;
  }
  .input_radio {
    float: left;
  }

  .input_radio input {
    position: absolute;
    top: 5px;
  }
  .input_radio label {
    margin-left: 18px;
  }

  .input_radio label:hover {
    color: #63c2de;
  }
  .btn {
    margin-left: 4px;
  }
  .btn:first-child {
    margin-left: 0;
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
