<template>
  <div class="wrap">대시보드 입니다. 대시보드 입니다.대시보드 입니다.대시보드 입니다.대시보드 입니다.대시보드 입니다.대시보드 입니다.대시보드 입니다.대시보드 입니다.</div>
</template>

<script>

export default {
  name: 'dashboard',
  components: {

  },
  data: function () {
    return {

    }
  },
  methods: {

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
</style>
