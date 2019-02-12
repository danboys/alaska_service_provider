<template>
  <div>
    <!--SP 추가 팝업-->
    <div v-if="active == 0" :data-sequence-number="sequenceNumber" class="popup_wrap m-auto">

      <div v-if="this.serviceName === 'service' " class="popup">
        <div class="card card_modify">
          <div class="card-header">
            <strong>server img</strong>
            <button class="close close_w font-xl text-right" type="button" data-dismiss="alert" aria-label="Close" @click="hideModal">
              <span aria-hidden="true">×</span>
            </button>
          </div><!--//card-header-->
          <div class="card-body">
            <!--수정하기의 input 1칸-->
            <div class="row">
              <div class="col-sm-12">
                <div class="form-group">
                  <label for="name" class="help-block c_light_blue">값을 선택해주세요.</label>
                  <div class="input_box input_box_col2">
                    <div class="input_radio">
                      <input type="radio" id="true" name="contents_select" @click="serviceValueChecked(true)" v-bind="{ 'checked': checkValue.true }" >
                      <label for="true">TRUE</label>
                    </div>
                    <div class="input_radio">
                      <input type="radio" id="false" name="contents_select" @click="serviceValueChecked(false)" v-bind="{ 'checked': checkValue.false }">
                      <label for="false">FALSE</label>
                    </div>
                  </div>
                  <small class="text-muted">ex) true / false 선택해주세요</small><!--description이 붙을 경우 추가-->
                </div>
              </div>
            </div>
            <!--//수정하기의 input 1칸-->
          </div><!--//card-body-->
          <!--버튼-->
          <div class="card-footer card-footer-bg-none text-right">
            <button class="btn btn-sm btn-primary" type="submit" @click="next()">
              <i class="fa fa-dot-circle-o"></i>저장</button>
            <button class="btn btn-sm btn-danger" type="reset" @click="hideModal">
              <i class="fa"></i>취소</button>
          </div>
          <!--//버튼-->

        </div><!--//card-->

      </div><!--//popup-->
      <div v-else class="popup">

        <div class="card card_modify">
          <div class="card-header">
            <strong>{{targetValues.valueName}}</strong>
            <button class="close close_w font-xl text-right" type="button" data-dismiss="alert" aria-label="Close" @click="hideModal">
              <span aria-hidden="true">×</span>
            </button>
          </div><!--//card-header-->
          <div class="card-body">
            <!--수정하기의 input 1칸-->
            <div class="row">
              <div class="col-sm-12">
                <div class="form-group">
                  <label for="name" class="help-block c_light_blue">{{targetValues.valueName}}를 입력하세요</label>
                  <input class="form-control" id="name" type="text" placeholder="입력하세요">
                  <small class="text-muted">ex) {{targetValues.value}}</small><!--description이 붙을 경우 추가-->
                </div>
              </div>
            </div>
            <!--//수정하기의 input 1칸-->
          </div><!--//card-body-->
          <!--버튼-->
          <div class="card-footer card-footer-bg-none text-right">
            <button class="btn btn-sm btn-primary" type="submit" @click="next()">
              <i class="fa fa-dot-circle-o"></i>저장</button>
            <button class="btn btn-sm btn-danger" type="reset"  @click="hideModal">
              <i class="fa"></i>취소</button>
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
            <strong>{{targetValues.valueName}}</strong>
            <button class="close close_w font-xl text-right" type="button" data-dismiss="alert" aria-label="Close" @click="hideModal">
              <span aria-hidden="true">×</span>
            </button>
          </div><!--//card-header-->
          <div class="card-body">
            <!--수정하기의 input 1칸-->
            <div class="row">
              <div class="col-sm-12">
                <div class="form-group">
                  <p class="help-block" v-if="this.serviceName === 'service'">{{spValue}}</p>
                  <p class="help-block" v-else>{{inputText}}</p>
                  <p class="help-block c_light_blue">수정하시겠습니까?</p>
                </div>
              </div>
            </div>
            <!--//수정하기의 input 1칸-->
          </div><!--//card-body-->
          <!--버튼-->
          <div class="card-footer card-footer-bg-none text-right">
            <button class="btn btn-sm btn-primary" type="submit" @click="check()">
              <i class="fa fa-dot-circle-o"></i>확인</button>
            <button class="btn btn-sm btn-danger" type="reset" @click="prev()">
              <i class="fa"></i>취소</button>
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
            <strong>{{targetValues.valueName}}</strong>
            <button class="close close_w font-xl text-right" type="button" data-dismiss="alert" aria-label="Close" @click="hideModal">
              <span aria-hidden="true">×</span>
            </button>
          </div><!--//card-header-->

          <div class="card-body">
            <!--수정하기의 input 1칸-->
            <div class="row">
              <div class="col-sm-12">
                <div class="form-group">
                  <p class="help-block">{{inputText}}</p>
                  <p class="help-block c_light_blue">수정되었습니다.</p>
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

<script >
  import { mapMutations } from 'vuex';
  import SubModal from '../../containers/DefaultSubModal'
  export default {
    name: 'ModalDetailsPopup',
    components: {
      SubModal
    },
    data: () => {
      return {
        targetValues : {},
        active : 0,
        inputText:"",
        key : "",
        checkValue:{
          false : false,
          true : false
        },
        spValue:"",
        defaultQuery :"",
        valueQuery :"",
        keyQuery:"",
      }
    },
    created() {
      this.spName = this.$route.query.spName
      this.serviceName = this.$route.query.serviceName
      Object.assign(this.targetValues, this.$store.state.modalValues);
      this.defaultQuery = `provider/sp/${this.spName}/${this.serviceName}`;
      this.valueQuery = `provider/sp/${this.spName}/${this.serviceName}/${this.targetValues.valueName}`;
      this.keyQuery = `provider/sp/${this.spName}/${this.serviceName}/${this.targetValues.key}`;
      if(this.serviceName === 'service'){
        this.defaultChecked();
      }
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
      defaultChecked(){
        if(this.targetValues.value === true){
          this.checkValue.true = true
          this.spValue = true
        }else if (this.targetValues.value === false){
          this.checkValue.false = true
          this.spValue = false
        }
      },
      serviceValueChecked(value){
        this.spValue = value
      },
      next() {
        this.inputText = $('.form-group input').val()
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
        let query
        let key
        let inputText

        if(this.targetValues.type === "array"){
            query = this.valueQuery
            key = this.targetValues.key
            inputText = this.inputText
        }else if(this.targetValues.type === "object"){
          query = this.keyQuery
          key = this.targetValues.valueName
          inputText = this.inputText
        }else if (this.targetValues.type === "boolean"){
          query = this.defaultQuery
          key = this.targetValues.valueName
          inputText = this.spValue
        }else{
          query = this.defaultQuery
          key = this.targetValues.valueName
          inputText = this.inputText
        }
        firebase.database().ref(query).update({
          [key] : inputText
        }).then(() => {
          this.next();
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

</style>
