<template>
  <div>
    <!--히스토리 변경 내용 삭제 확인 팝업-->
    <div v-if="active == 0" :data-sequence-number="sequenceNumber" class="popup_wrap m-auto">
      <div class="popup">

        <div class="card card_delete">
          <div class="card-header">
            <strong>히스토리 삭제</strong>
            <button class="close close_w font-xl text-right" type="button" data-dismiss="alert" aria-label="Close" @click="hideSubModal">
              <span aria-hidden="true">×</span>
            </button>
          </div><!--//card-header-->

          <div class="card-body">
            <div class="row">
              <div class="col-sm-12">
                <div class="form-group">
                  <p class="help-block">
                    작성자 : {{comment.name}}<br/>
                    작성내용 : {{comment.message}}
                  </p>
                  <p class="help-block">히스토리를 삭제하시겠습니까?</p>
                </div>
              </div>
            </div>
          </div><!--//card-body-->

          <!--버튼-->
          <div class="card-footer card-footer-bg-none text-right">
            <button class="btn btn-sm btn-primary" type="submit" @click="check">확인</button>
            <button class="btn btn-sm btn-danger" type="reset" @click="hideSubModal">취소</button>
          </div>
          <!--//버튼-->

        </div><!--//card-->
      </div><!--//popup-->
    </div>

    <!--히스토리 변경 내용 삭제 피드백 팝업-->
    <div v-if="active == 1" :data-sequence-number="sequenceNumber" class="popup_wrap m-auto">
      <div class="popup">
        <div class="card card_modify">
          <div class="card-header">
            <strong>히스토리 삭제 완료</strong>
            <button class="close close_w font-xl text-right" type="button" data-dismiss="alert" aria-label="Close" @click="refresh">
              <span aria-hidden="true">×</span>
            </button>
          </div><!--//card-header-->

          <div class="card-body">
            <div class="row">
              <div class="col-sm-12">
                <div class="form-group">
                  <p class="help-block c_light_blue">히스토리가 삭제되었습니다.</p>
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
    name: 'ModalCommentDelete',
    props: ['targetComment'],
    data: () => {
      return {
        active : 0,
        maxActive : 2, // step count
        comment : {
          name : "",
          message : ""
        },
      }
    },
    created() {
      console.log('ModalCommentDelete ::');
      console.log('this.targetComment');
      console.log(this.targetComment);
      Object.assign(this.comment, this.targetComment)
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
        let key = this.comment.key;

        firebase.database().ref('history/'+ key).remove().then(()=>{
          console.log('%c히스토리 삭제 완료','color:blue');

          // 삭제 피드백 팝업
          this.next();

        }).catch((error) => {
          console.log('%c히스토리 삭제 중 에러가 발생하였습니다.','color:red');
          console.log(error);
        });
      },
      refresh() {
        // refresh
        console.log('$EventBus.$emit updateComment::');
        this.$EventBus.$emit('updateComment');
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
