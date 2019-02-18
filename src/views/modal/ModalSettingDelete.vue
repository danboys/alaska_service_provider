<template>
  <div>
    <div v-if="active == 0" :data-sequence-number="sequenceNumber" class="popup_wrap m-auto">
      <div  class="popup">
        <div class="card card_delete">
          <div class="card-header">
            <strong v-if="this.serviceName === 'category' || this.serviceName=== 'image'" >{{targetValues.valueName}}</strong>
            <strong v-else>{{targetValues.value}}</strong>
            <button class="close close_w font-xl text-right" type="button" data-dismiss="alert" aria-label="Close" @click="hideModal">
              <span aria-hidden="true">×</span>
            </button>
          </div><!--//card-header-->
          <div class="card-body">
            <!--수정하기의 input 1칸-->
            <div class="row">
              <div class="col-sm-12">
                <div class="form-group">
                  <p class="help-block c_light_blue">삭제하시겠습니까?</p>
                  <p v-if="caution === true" class="help-block c_light_blue caution">* CAUTION * <br> 해당 카테고리의 하위 항목이 {{targetValues.valueName}} 한 개로 <br>
                    확인 버튼 클릭 시 해당 카테고리가 삭제됩니다. </p>
                </div>
              </div>
            </div>
            <!--//수정하기의 input 1칸-->
          </div><!--//card-body-->
          <!--버튼-->
          <div class="card-footer card-footer-bg-none text-right">
            <button class="btn btn-sm btn-primary" type="submit" @click="check()">
              <i class="fa fa-dot-circle-o"></i>확인</button>
            <button class="btn btn-sm btn-danger" type="reset" @click="hideModal">
              <i class="fa"></i>취소</button>
          </div>
          <!--//버튼-->
        </div><!--//card-->
      </div><!--//popup-->
    </div>
    <div v-if="active == 1" :data-sequence-number="sequenceNumber" class="popup_wrap m-auto">
      <div class="popup">

        <div class="card card_modify">
          <div class="card-header">
            <strong>컨텐츠 하위 항목 삭제</strong>
            <button class="close close_w font-xl text-right" type="button" data-dismiss="alert" aria-label="Close" @click="hideModal">
              <span aria-hidden="true">×</span>
            </button>
          </div><!--//card-header-->

          <div class="card-body">
            <!--수정하기의 input 1칸-->
            <div class="row">
              <div class="col-sm-12">
                <div class="form-group">
                  <p class="help-block c_light_blue">삭제 완료되었습니다.</p>
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
  import SubModal from '../../containers/DefaultSubModal'
  export default {
    name: "ModalSettingModify",
    components: {
      SubModal
    },
    data: () => {
      return {
        targetValues : {},
        active : 0,
        inputText:"",
        inputValue:"",
        defaultQuery :"",
        valueQuery :"",
        keyQuery:"",
        keyValueQuery:"",
        valueKeyQuery:"",
        caution: false
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
      this.valueKeyQuery =  `provider/sp/${this.spName}/${this.serviceName}/${this.targetValues.valueName}/${this.targetValues.key}`
      if(this.targetValues.divi === "btn"){
        this.lenghtCheck();
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
      next() {
        this.inputText = $('.form-group input').val()
        this.inputValue = $('.form-group textarea').val()
        if(this.active !==  1){
          this.active++;
        }
      },
      prev() {
        if(this.active !== 0){
          this.active--;
        }
      },
      lenghtCheck(){
        firebase.database().ref(this.defaultQuery).once('value')
          .then((data) => {
            if(Object.keys(data.val()).length === 1){
              this.caution = true
            }
          })
      },
      check(){
        let query
        if(this.targetValues.divi === "btn"){
          query = this.valueQuery
        }else{
          if(this.targetValues.type === "array"){
            query = this.valueKeyQuery
          }else if (this.targetValues.type === "object"){
            query = this.keyValueQuery
          }else{
            query = this.valueQuery
          }
        }
        firebase.database().ref(query).remove().then(() => {
          if(this.targetValues.divi !== "btn" && this.targetValues.type === "array"){
            firebase.database().ref(this.valueQuery).once('value')
              .then((data) => {
                if(data.val() === null){
                  this.next();
                }else{
                  this.resultData = $.grep(data.val(),function(n){ return n == " " || n; });
                  console.log(this.resultData);
                  firebase.database().ref(this.valueQuery).set(this.resultData).then(() => {
                    this.next();
                  }).catch((error) => {
                    console.log(error);
                  });
                }
              })
          }else{
            this.next();
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
  .form-group .caution {
    color: red;
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
  .btn {
    margin-left: 4px;
  }
  .btn:first-child {
    margin-left: 0;
  }
</style>
