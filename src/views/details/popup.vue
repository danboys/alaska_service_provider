<template>
  <div class="popup_wrap m-auto">
    <div class="popup">

      <div class="card card_modify">
        <div class="card-header">
          <strong>server img</strong>
          <button class="close close_w font-xl text-right" type="button" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">×</span>
          </button>
        </div><!--//card-header-->

        <div class="card-body">
          <!--수정하기의 input 1칸-->
          <div class="row">
            <div class="col-sm-12">
              <div class="form-group">
                <label for="name" class="help-block c_light_blue">이미지 경로값을 입력해주세요.</label>
                <input class="form-control" id="name" type="text" placeholder="입력하세요">
                <small class="text-muted">ex) CJH: img/common/default_img/img_default_poster_220_316.png</small><!--description이 붙을 경우 추가-->
              </div>
            </div>
          </div>
          <!--//수정하기의 input 1칸-->
        </div><!--//card-body-->

        <!--버튼-->
        <div class="card-footer card-footer-bg-none text-right">
          <button class="btn btn-sm btn-primary" type="submit">
            <i class="fa fa-dot-circle-o"></i>저장</button>
          <button class="btn btn-sm btn-danger" type="reset">
            <i class="fa" @click="close"></i>취소</button>
        </div>
        <!--//버튼-->

      </div><!--//card-->
    </div><!--//popup-->
  </div>
</template>

<script>
  export default {
    name: "popup",
    methods:{
      close: function () {
        debugger
        console.log('-----')
        this.$emit('close');
      },
      save: function (key) {



        var database = firebase.database()

        console.log(key)
      }
    }
  }
</script>

<style scoped>
  /*팝업 공통*/
  .popup_wrap {
    width: 100%;
    height: 100vh;
    background: #e4e5e6;
    text-align: center;
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
