<template>
  <div>
    <div class="sidebar-fixed sidebar-lg-show pace-done">
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
              <a class="nav-link" href="#" @click="goToDetail()">
                <i class="nav-icon icon_w fas fa-clipboard-list"></i><!--클릭될 경우  icon_w 가 icon-y로 교체 -->
                <span>SO</span>
              </a>
            </li>
            <li class="nav-item click_folder click_service">
              <a class="nav-link" href="#" @click="goToDetail()">
                <i class="nav-icon icon_w fas fa-clipboard-list"></i>
                <span>IP</span>
              </a>
            </li>
            <li class="nav-item click_folder click_service">
              <a class="nav-link" href="#" @click="goToDetail()">
                <i class="nav-icon icon_w fas fa-clipboard-list"></i>
                <span>Channel</span>
              </a>
            </li>
            <li class="nav-item click_folder click_service">
              <a class="nav-link" href="#" @click="goToDetail()">
                <i class="nav-icon icon_w fas fa-clipboard-list"></i>
                <span>Category</span>
              </a>
            </li>
            <li class="nav-item click_folder click_service">
              <a class="nav-link" href="#" @click="goToDetail()">
                <i class="nav-icon icon_w fas fa-clipboard-list"></i>
                <span>Image</span>
              </a>
            </li>
            <li class="nav-item click_folder click_service">
              <a class="nav-link" href="#" @click="goToDetail()">
                <i class="nav-icon icon_w fas fa-clipboard-list"></i>
                <span>123</span>
              </a>
            </li>
            <li class="nav-item click_folder click_service">
              <a class="nav-link" href="#" @click="goToDetail()">
                <i class="nav-icon icon_w fas fa-clipboard-list"></i>
                <span>987654</span>
              </a>
            </li>
          </ul>
        </nav>

        <!--접기/펼치기 버튼-->
        <button class="sidebar-minimizer brand-minimizer" type="button"></button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AsideDepth3',
  components: {
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
    detailLink (key) {
      // return `detail/${key.toString()}`
    },
    goToDetail (item) {
      // const detailLink = this.detailLink(item.key);
      const detailLink = 'details';
      this.$router.push({path: detailLink, query:{ spName:"cjh_livebed", serviceName:"so"}})
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
