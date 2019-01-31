<template>
  <div class="wrap">
    <nav class="breadcrumb">
      <router-link class="breadcrumb-item" to="/">Home</router-link>
    </nav>
    <div class="container">
      <div class="title font-2xl text-center text-dark mb-4">SPM 변경 사항</div>
      <div class="comment_board p-2">
        <small class="text-dark">*주요 변경 사항을 작성해주세요.</small>
        <div class="comment" v-for="item in historyData">
          <span class="c_name">{{item.name}}</span>
          <span class="c_content">
            {{item.message}}
            <a href="#" class="btn_delete" @click="deleteHistory(item)">X</a>
          </span>
          <span class="c_date">{{item.date}}</span>
        </div>

      </div><!--//notice_board-->

      <div class="write_board mt-3">
        <form class="input_text_wrap clearfix" action="">
          <div class="input_text input_name mr-1">
            <label class="mr-1" for="inputName">작성자명</label>
            <input v-model="comment.name" class="form-control" id="inputName" type="text" placeholder="작성자명" autocomplete="name">
          </div>
          <div class="input_text input_memo">
            <label class="mx-1" for="recentToDo">변경 내용</label>
            <input v-model="comment.message" class="form-control" id="recentToDo" type="text" placeholder="변경사항을 기록해주세요.">
          </div>
          <button class="btn btn-sm btn-primary btn_submit" type="button" @click="addHistory">작성</button>
        </form>
      </div>

      <sub-modal v-bind:target-comment="targetComment"></sub-modal>
    </div><!--//container-->
  </div>
</template>

<script>
  import { mapMutations } from 'vuex';
  import SubModal from '../containers/DefaultSubModal'
export default {
  name: 'dashboard',
  components: {
    SubModal
  },
  data: function () {
    return {
      historyData : [],
      comment:{
        name : '',
        message : '',
      },
      targetComment:{}
    }
  },
  create() {
    // data
    console.log('Dashboard create');
  },
  mounted(){
    console.log('Dashboard mounted');
    this.fetchFirebaseData();
    this.$EventBus.$on('updateComment', () => {
      console.log('$EventBus.$on updateComment:: Dashboard');
      this.fetchFirebaseData();
    });
  },
  methods: {
    ...mapMutations([`showSubModal`]),
    /**
     * firebase 연동
     */
    fetchFirebaseData() {
      console.log('fetchFirebaseData Dashboard !!!!');
      firebase.database().ref('history').once('value')
        .then((data) => {
          /**
           * 전체 Database Object
           */
          console.log(data.val());
          this.historyData = Object.values(data.val());
          console.log(this.historyData);
        })
        .catch((error) => {
          console.log(error);
          this.historyData = [];
        })
    },
    addHistory(){
      // key 설정
      if(this.comment.name && this.comment.message){
        const today = new Date();
        this.comment.date = today.getFullYear() + "-" +
          ("0" + (today.getMonth()+1)).slice(-2) + "-" +
          ("0" + today.getDate()).slice(-2);
        this.comment.key = today.getFullYear() +
          ("0" + (today.getMonth()+1)).slice(-2) +
          ("0" + today.getDate()).slice(-2) +
          ("0" + today.getHours()).slice(-2) +
          ("0" + today.getMinutes()).slice(-2) +
          ("0" + today.getSeconds()).slice(-2);
        console.log("this.comment");
        console.log(this.comment);

        // comment 추가
        firebase.database().ref('history').update({
          [this.comment.key]: this.comment
        }).then(() => {
          console.log('%ccomment 추가 완료','color:blue');
          this.fetchFirebaseData();
        }).catch((error) => {
          console.log('%ccomment 추가 중 에러가 발생하였습니다.','color:red');
          console.log(error);
        });
      }else{
        alert('작성자명과 변경 내용을 입력하세요.')
      }
    },
    deleteHistory(item){
      // key 설정
        // comment 추가
        // firebase.database().ref('history/' + key).remove().then(() => {
        //   console.log('%ccomment 삭제 완료','color:blue');
        //   this.fetchFirebaseData();
        // }).catch((error) => {
        //   console.log('%ccomment 삭제 중 에러가 발생하였습니다.','color:red');
        //   console.log(error);
        // });
      this.targetComment = item;
      this.showSubModal('ModalCommentDelete');
    },
  }
}
</script>

<style>
  /*사이드와 컨텐츠 관계:
    사이드가 접히는 경우에 따라 상위 div.main에 아래 클래스가 추가됩니다.
    1. 0개 닫혔을 경우 : side_show_03
    2. 1개 닫혔을 경우 : side_show_02
    3. 2개 닫혔을 경우 : side_show_01
    4. 3개 모두 닫혔을 경우 : side_show_none
    */
  /*사이드 닫히는 경우 콘텐츠 위치*/
  /*0개 닫혔을 경우*/
  .side_show_03 .wrap {
    margin-left: 600px;
  }
  /*1개 닫혔을 경우*/
  .side_show_02 .wrap {
    margin-left: 450px;
  }
  /*2개 닫혔을 경우*/
  .side_show_01 .wrap {
    margin-left: 300px;
  }
  /*3개 모두 닫혔을 경우*/
  .side_show_none .wrap {
    margin-left: 150px;
  }

  /* ▼ 아래부터 main.html 적용된 style */
  .container{
    width: 700px;
  }
  /*공통*/
  .clearfix:after {
    clear: both;
  }
  /*input_text*/
  .input_text_wrap {
    position: relative;
  }
  .input_name {
    width: 150px;
  }
  .input_memo {
    width: 450px;
  }
  .input_text {
    float: left;
  }
  .input_text input {
    height: 30px;
  }
  .input_text label {
    font-size: 0.8rem;
    color: #0c0e10;
  }
  .input_text_wrap .btn_submit {
    position: absolute;
    right: 20px;
    bottom: 2px;
  }

  /*코멘트 보드*/
  .comment_board {
    border: 1px solid #0a3544;
    height: 600px;
  }
  .comment {
    width: 100%;
    position: relative;
    padding-left: 55px;
    padding-right: 85px;
    /*overflow-y: scroll;*/
  }
  .comment span {
    color: #0c0e10;
  }
  .comment .c_name {
    width: 50px;
    height: 28px;
    position: absolute;
    left: 0;
    top: 0;
  }
  .comment .c_content {
    width: 100%;
  }
  .comment .c_date {
    width: 80px;
    height: 28px;
    position: absolute;
    top: 0;
    right: 0;
  }
  /*코멘트 삭제 버튼*/
  .btn_delete {
    color: red;
  }
  .btn_delete:hover {
    color: pink;
  }
</style>
