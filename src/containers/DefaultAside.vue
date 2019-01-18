<template>
  <div class="sidebar-fixed sidebar-lg-show pace-done">
    <div class="sidebar sidebar_home"><!--사이드 메뉴가 home일 경우 sidebar_home class를 붙입니다.-->
      <nav class="sidebar-nav ps ps--active-y">
        <div class="nav-logo">
          <a href="#" class="btn-block icon_domfam"></a>
        </div>
        <ul class="nav">
          <li class="nav-item">
            <a href="#" class="nav-link" @click="expandMenu()">
              <i class="nav-icon cui-list icon_w"></i>
              <span>SPM</span>
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link" @click="expandMenu()">
              <i class="nav-icon cui-settings icon_w"></i>
              <span>SPM Setting</span>
            </a>
          </li>
        </ul>
        <a class="nav-link btn btn_m btn-block btn-secondary" href="">
          <i class="nav-icon cui-user icon_w"></i>로그인
        </a>
        <a class="nav-link btn btn_m btn-block btn-secondary" href="">
          <i class="nav-icon cui-cloud-download icon_w"></i>내보내기
        </a>
        <a class="nav-link btn btn_m btn-block btn-secondary" href="">
          <i class="nav-icon cui-cloud-upload icon_w"></i>가져오기
        </a>
        <a class="nav-link btn btn_m btn-block btn-secondary" href="">
          <i class="nav-icon cui-basket-loaded icon_w"></i>저장하기
        </a>
      </nav>

      <!--접기/펼치기 버튼-->
      <button class="sidebar-minimizer brand-minimizer" type="button"></button>
    </div>
    <AsideDepth2/>
  </div>
</template>

<script>
  import AsideDepth2 from '@/views/aside/AsideDepth2'
export default {
  name: 'DefaultAside',
  components: {
    AsideDepth2
  },
  data:() => {
    return {
    }
  },
  methods:{
    /**
     * depth 펼치기
     */
    expandMenu: function () {
      console.log('메뉴 펼치기');

    },
    /**
     * depth 접기
     */
    fordingMenu: function () {
      console.log('메뉴 접기');

    },
    /**
     * router link 설정
     */
    // detailLink (key) {
    //   return `detail/${key.toString()}`
    // },
    // goToDetail (item) {
    //   const detailLink = this.detailLink(item.key);
    //   this.$router.push({path: userLink, query:{ spName:item.spName}})
    // },
  }
}
</script>

<style scoped>

  .sidebar.sidebar_home {
    background: #3A4158;
  }

  .sidebar .nav-logo .icon_domfam {
    padding: .75rem 1rem;
    font-size: 80%;
    font-weight: 700;
    color: #e4e7ea;
    text-transform: uppercase;
  }

  .icon_w{
    color: #ffffff !important;
  }

  .sidebar_home .nav{
    margin-bottom: -300px;
  }

  .btn.btn_m {
    width: 80%;
    padding: 0.52rem 1rem ;
    margin: .5rem auto 0;
  }

  .sidebar-minimized .btn.btn_m {
    width: 100%;
  }

  .nav-logo {
    height: 60px;
  }
  .icon_domfam {
    width: 100%;
    height: 100%;
    background: url(../assets/static/img/logo_domfam.png) no-repeat center;
  }

  .sidebar-minimized .icon_domfam {
    background-image: url(../assets/static/img/logo_domfam_mrk.png);
  }

  /*사이드바 뎁스 -공통*/
  .sidebar_depth {
    left: 199px;
    z-index: 9000;
  }

  .sidebar_depth .nav {
    padding-left: 6px;
    padding-right: 6px;
  }

  .sidebar-minimized .sidebar_depth .nav {
    padding-left: 0;
    padding-right: 0;
  }

  /*사이드바 뎁스2 메뉴*/
  .sidebar_depth2 {
    left: 199px;
    background: #3d4f64;
  }

  /*사이드바 뎁스3 메뉴*/
  .sidebar_depth3 {
    left: 398px;
    background: #50647c;
    z-index: 8000;
  }

  /*아이콘 컬러*/
  .icon_w{
    color: #ffffff !important;
  }
  .icon_y {
    color: #ff7061 !important;
  }

  /*사이드 나비 타이틀*/
  .nav-title-m {
    padding: 10px 0;
  }
  .nav-title-minimized {
    display: none;
  }
  .sidebar-minimized .sidebar .nav-title-minimized {
    display: block;
  }

  /*길이 줄이기*/
  .sidebar-minimized .sidebar_home {
    width: 50px;
  }
</style>
