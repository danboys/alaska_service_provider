<template>
  <!--<div class="sidebar-fixed sidebar-lg-show pace-done">-->
  <div class="sidebar-fixed sidebar-lg-show">
    <div class="sidebar sidebar_home"><!--사이드 메뉴가 home일 경우 sidebar_home class를 붙입니다.-->
      <nav class="sidebar-nav ps ps--active-y">
        <div class="nav-logo">
          <router-link href="#" class="btn-block icon_domfam" to="/"></router-link>
        </div>
        <ul class="nav">
          <li class="nav-item">
            <a href="#" class="nav-link" @click="showDepth2()">
              <i class="nav-icon cui-list icon_w"></i>
              <span>SPM</span>
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link" @click="showDepth2()">
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
      <button class="sidebar-minimizer brand-minimizer" type="button" @click="sidebarToggle"></button>
    </div>
    <div v-if="mode.isDepth2" class="sidebar-fixed sidebar-lg-show pace-done">
      <div class="sidebar sidebar_depth sidebar_depth2"><!--사이드 메뉴가 뎁스메뉴일 경우 sidebar_depth class를 붙입니다. sidebar_depth2는 댑스2, sidebar_depth3는 댑스3로 left 조절-->
        <nav class="sidebar-nav ps ps--active-y">
          <ul class="nav">
            <li class="nav-item text-center nav-title-m">
              <span class="nav-title">
                  <span class="font-sm">SP 목록</span>
                  <i class="nav-icon"></i>
              </span>
              <span class="nav-title-minimized ">
                <span class="font-sm">SP</span>
              </span>
            </li>
            <li class="nav-item click_folder">
              <a class="nav-link" href="#" @click="showDepth3()">
                <i class="nav-icon icon_w fa fa-folder"></i><!--클릭될 경우  icon_w 와 fa-folder가 icon-y와 fa-folder-open로 교체 -->
                <span>CJH TESTbed</span>
              </a>
            </li>
            <li class="nav-item click_folder">
              <a class="nav-link" href="#" @click="showDepth3()">
                <i class="nav-icon icon_w fa fa-folder"></i>
                <span>CJH LIVEbed</span>
              </a>
            </li>
            <li class="nav-item click_folder">
              <a class="nav-link" href="#" @click="showDepth3()">
                <i class="nav-icon icon_w fa fa-folder"></i>
                <span>일이삼사오육칠팔구십일이삼사오육칠팔구십</span>
              </a>
            </li>
            <li class="nav-item click_folder">
              <a class="nav-link" href="#" @click="showDepth3()">
                <i class="nav-icon icon_w fa fa-folder"></i>
                <span>bbbbbbbbbb</span>
              </a>
            </li>
          </ul>
        </nav>

        <!--접기/펼치기 버튼-->
        <button class="sidebar-minimizer brand-minimizer" type="button" @click="sidebarToggle"></button>
      </div>
    </div>
    <div v-if="mode.isDepth3" class="sidebar-fixed sidebar-lg-show pace-done">
      <div class="sidebar sidebar_depth sidebar_depth3"><!--사이드 메뉴가 뎁스메뉴일 경우 sidebar_depth class를 붙입니다. sidebar_depth2는 댑스2, sidebar_depth3는 댑스3로 left 조절-->
        <nav class="sidebar-nav ps ps--active-y">
          <ul class="nav">
            <li class="nav-item text-center nav-title-m">
            <span class="nav-title">
                <span class="font-sm">서비스 목록</span>
                <i class="nav-icon"></i>
            </span>
              <span class="nav-title-minimized">
              <span class="font-sm">SV</span>
            </span>
            </li>
            <li class="nav-item click_folder click_service">
              <router-link class="nav-link" href="#" :to="detailLink('so')">
                <i class="nav-icon icon_w fa fa-file-text"></i><!--클릭될 경우  icon_w 가 icon-y로 교체 -->
                <span>SO</span>
              </router-link>
            </li>
            <li class="nav-item click_folder click_service">
              <router-link class="nav-link" href="#" :to="detailLink('ip')">
                <i class="nav-icon icon_w fa fa-file-text"></i>
                <span>IP</span>
              </router-link>
            </li>
            <li class="nav-item click_folder click_service">
              <router-link class="nav-link" href="#" :to="detailLink('channel')">
                <i class="nav-icon icon_w fa fa-file-text"></i>
                <span>Channel</span>
              </router-link>
            </li>
            <li class="nav-item click_folder click_service">
              <router-link class="nav-link" href="#" :to="detailLink('category')">
                <i class="nav-icon icon_w fa fa-file-text"></i>
                <span>Category</span>
              </router-link>
            </li>
            <li class="nav-item click_folder click_service">
              <router-link class="nav-link" href="#" :to="detailLink('image')">
                <i class="nav-icon icon_w fa fa-file-text"></i>
                <span>Image</span>
              </router-link>
            </li>
          </ul>
        </nav>

        <!--접기/펼치기 버튼-->
        <button class="sidebar-minimizer brand-minimizer" type="button" @click="sidebarToggle"></button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DefaultAside',
  components: {
  },
  data:() => {
    return {
      mode : {
        isDepth2 : false,
        isDepth3 : false
      },
      selected : {
        depth2 : "cjh_livebed"
      }
    }
  },
  methods:{
    /**
     * depth 접기
     */
    fordingMenu: function () {
      console.log('메뉴 접기');

    },
    /**
     * router link 설정
     */
    detailLink (serviceName) {
      let routeInfo = {
        path:'details',
        query:{
          spName:this.selected.depth2,
          serviceName:serviceName
        }
      };
      return routeInfo
    },
    showDepth2 () {
      this.mode.isDepth2 = true;
    },
    showDepth3 () {
      this.mode.isDepth3 = true;
    },
    goToDetail (serviceName) {
      // const detailLink = this.detailLink(item.key);
      console.log('goToDetail ::');
      const detailLink = 'details';
      this.$router.push({path: detailLink, query:{ spName:this.selected.depth2, serviceName:serviceName}})
    },
    sidebarToggle : function (e) {
      console.log('sidebarToggle () 실행')
      e.preventDefault();

    },
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
  .sidebar-minimized .sidebar_home,
  .sidebar-minimized .sidebar_depth2,
  .sidebar-minimized .sidebar_depth3 {
    width: 50px;
  }
  .sidebar-minimized .sidebar_depth2 {
    left: 50px;
  }
  .sidebar-minimized .sidebar_depth3 {
    left: 100px;
  }
</style>
