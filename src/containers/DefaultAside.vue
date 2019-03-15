<template>
  <div>
    <div class="sidebar-fixed sidebar-lg-show _dep01" v-bind:class="{ 'sidebar-minimized': mode.minimizedDep01 }">
      <div class="sidebar sidebar_home"><!--사이드 메뉴가 home일 경우 sidebar_home class를 붙입니다.-->
        <nav class="sidebar-nav ps ps--active-y">
          <div class="nav-logo">
            <router-link href="#" class="btn-block icon_domfam" to="/" v-on:click.native="home"></router-link>
          </div>
          <ul class="nav">
            <li class="nav-item">
              <a href="#" class="nav-link" @click="selectMenu(false, $event)">
                <i class="nav-icon cui-list icon_w"></i>
                <span>SPM</span>
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link" @click="selectMenu(true, $event)">
                <i class="nav-icon cui-settings icon_w"></i>
                <span>SPM Setting</span>
              </a>
            </li>
          </ul>
          <!--<a class="nav-link btn btn_m btn-block btn-secondary" href="">-->
            <!--<i class="nav-icon cui-user icon_w"></i>로그인-->
          <!--</a>-->

          <a class="nav-link btn btn_m btn-block btn-secondary" href="#" @click="showModal({componentName : 'ModalExportProvider'})">
            <i class="nav-icon fa fa-share fa-lg icon_w"></i>내보내기
          </a>

          <!--<a class="nav-link btn btn_m btn-block btn-secondary" href="">
            <i class="nav-icon cui-cloud-upload icon_w"></i>가져오기
          </a>
          <a class="nav-link btn btn_m btn-block btn-secondary" href="">
            <i class="nav-icon cui-basket-loaded icon_w"></i>저장하기
          </a>-->

        </nav>

        <!--접기/펼치기 버튼-->
        <button class="sidebar-minimizer brand-minimizer _dep01" type="button" @click="sidebarToggle(1)"></button>
      </div>
    </div>
    <div class="sidebar-fixed sidebar-lg-show _dep02" v-bind:class="{ 'sidebar-minimized': mode.minimizedDep02 }">
      <div class="sidebar sidebar_depth sidebar_depth2">
        <!--사이드 메뉴가 뎁스메뉴일 경우 sidebar_depth class를 붙입니다. sidebar_depth2는 댑스2, sidebar_depth3는 댑스3로 left 조절-->
        <nav class="sidebar-nav ps ps--active-y">
          <!--설정 버튼-->
          <a v-if="isSetting" href="#" class="btn_admin text-white text-right font-lg p-1" @click="showModal({componentName : 'ModalProviderList'})">
            <i class="fa fa-cog"></i>
          </a>
          <h2 class="nav-item text-center nav-title-m have_border">
              <span class="nav-title">
                  <span class="font-sm">SP 목록</span>
                <!--<i class="nav-icon"></i>-->
              </span>
            <span class="nav-title-minimized ">
                <span class="font-sm">SP</span>
              </span>
          </h2>
          <ul class="nav">
            <li v-for="item in depth2Data" class="nav-item click_folder">
              <a class="nav-link" href="#" @click="selectProvider(item,$event)">
                <i class="nav-icon icon_w fa fa-folder"></i>
                <!--클릭될 경우  icon_w 와 fa-folder가 icon-y와 fa-folder-open로 교체 -->
                <span>{{item.spName}}</span>
              </a>
            </li>
          </ul>
        </nav>

        <!--접기/펼치기 버튼-->
        <button class="sidebar-minimizer brand-minimizer _dep02" type="button" @click="sidebarToggle(2)"></button>
      </div>
    </div>
    <div class="sidebar-fixed sidebar-lg-show _dep03" v-bind:class="{ 'sidebar-minimized': mode.minimizedDep03 }">
      <div class="sidebar sidebar_depth sidebar_depth3">
        <!--사이드 메뉴가 뎁스메뉴일 경우 sidebar_depth class를 붙입니다. sidebar_depth2는 댑스2, sidebar_depth3는 댑스3로 left 조절-->
        <nav class="sidebar-nav ps ps--active-y">
          <!--설정 버튼-->
          <a v-if="isSetting" href="#" class="btn_admin text-white text-right font-lg p-1" @click="modalServiceList">
            <i class="fa fa-cog"></i>
          </a>
          <h2 class="nav-item text-center nav-title-m have_border">
            <span class="nav-title">
                <span class="font-sm">{{selected.depth2.spName}} Service</span>
              <!--<i class="nav-icon"></i>-->
            </span>
            <span class="nav-title-minimized">
              <span class="font-sm">SV</span>
            </span>
          </h2>
          <ul class="nav">
            <li v-for="item in depth3Data" class="nav-item click_folder click_service">
              <router-link class="nav-link" href="#" :to="detailLink(item.name)" v-on:click.native="openNav('Dep03')" exact>
                <i class="nav-icon icon_w fa fa-file-text"></i><!--클릭될 경우  icon_w 가 icon-y로 교체 -->
                <span>{{item.name}}</span>
              </router-link>
            </li>
          </ul>
        </nav>

        <!--접기/펼치기 버튼-->
        <button class="sidebar-minimizer brand-minimizer _dep03" type="button" @click="sidebarToggle(3)"></button>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState, mapMutations } from 'vuex'
  export default {
    name: 'DefaultAside',
    components: {},
    data: () => {
      return {
        mode: {
          minimizedDep01: false,
          minimizedDep02: true,
          minimizedDep03: true,
        },
        selected: {
          depth2: {
            key : "cjh_livebed",
            spName : "CJH Livebed"
          },
        },
        oData: {},
        depth2Data: [],
        depth3Data: []
      }
    },
    created() {
      // data
      this.fetchFirebaseData();

      // EventBus
      this.$EventBus.$on('update', () => {
        console.log('$EventBus.$on update:: DefaultAside');
        this.fetchFirebaseData();
      });
      this.$EventBus.$on('updateService', () => {
        console.log('$EventBus.$on updateService:: DefaultAside');
        this.fetchFirebaseData();
      });
    },
    mounted(){
      // 모드 초기화
      this.mode = {
        minimizedDep01: false,
        minimizedDep02: true,
        minimizedDep03: true,
      };

      // container class 조절
      this.setClass();

      // 초기상태 메뉴 숨기기
      document.querySelector('._dep02').style.visibility = "hidden";
      document.querySelector('._dep03').style.visibility = "hidden";

    },
    computed: {
      ...mapState({
        isSetting: 'isSetting',
      }),
    },
    methods: {
      ...mapMutations([`showModal`, `setMode`]),
      /**
       * firebase 연동
       */
      fetchFirebaseData() {
        console.log('fetchFirebaseData !!!!');
        firebase.database().ref('provider').once('value')
          .then((data) => {
            /**
             * 전체 Database Object
             */
            this.oData = data.val();
            console.log('setDepthData 데이터 가공 시작 :: depth2Data');
            this.setDepth2Data(this.oData.so, "depth2Data");
            console.log('setDepthData 데이터 가공 시작 :: depth3Data');
            this.setDepth3Data(this.oData.sp[this.selected.depth2.key], "depth3Data");
          })
          .catch((error) => {
            console.log(error)
          })
      },

      /**
       * 데이터 가공
       */
      setDepth2Data: function (objectData, storeName) {
        // Object를 array로 변경
        let store = [];
        for (let key in objectData) {
          store.push(objectData[key]);
        }
        // console.log(store);
        this[storeName] = store;
        // console.log(this[storeName]);
      },
      setDepth3Data: function (objectData, storeName) {
        // Object를 array로 변경
        let store = [];
        for (let key in objectData) {
          objectData[key].name = key;
          store.push(objectData[key]);
        }
        // console.log(store);
        this[storeName] = store;
        console.log(this[storeName]);
      },

      /**
       * 대메뉴 선택
       */
      selectMenu: function(isSetting, $event){
        // class 설정
        const currentTarget = $event.currentTarget;
        const linkTarget = currentTarget.parentNode.parentNode;
        const link = linkTarget.getElementsByClassName('nav-link');

        // route 변경
        this.$router.replace('/');

        // nav-link active class 초기화
        for(let i=0;i<link.length;i++) {
          link[i].classList.remove("active");
        }
        // nav-link active
        currentTarget.classList.add("active");

        // 하위 메뉴 초기화
        this.resetActive('._dep02');

        // 하위 메뉴 show/hide
        document.querySelector('._dep02').style.visibility = "visible";
        document.querySelector('._dep03').style.visibility = "hidden";

        // 하위메뉴 오픈
        this.openNav('Dep01');
        this.openNav('Dep02');

        // 모드 변경
        this.setMode(isSetting);
      },

      /**
       * provider 선택
       */
      selectProvider: function(item, $event){
        const currentTarget = $event.currentTarget;
        const linkTarget = currentTarget.parentNode.parentNode;
        const link = linkTarget.getElementsByClassName('nav-link');

        // route 변경
        this.$router.replace('/');

        // nav-link active class 초기화
        for(let i=0;i<link.length;i++) {
          link[i].classList.remove("active");
        }
        // nav-link active
        currentTarget.classList.add("active");

        // icon
        const icon = linkTarget.getElementsByClassName('nav-icon');
        const currnetIcon = currentTarget.getElementsByClassName('nav-icon')[0];
        // icon class 초기화
        for(let i=0;i<icon.length;i++) {
          icon[i].classList.add("icon_w","fa-folder");
          icon[i].classList.remove("icon_y","fa-folder-open");
        }

        // icon open
        currnetIcon.classList.remove("icon_w","fa-folder");
        currnetIcon.classList.add("icon_y","fa-folder-open");

        this.selected.depth2 = item;
        console.log('selected.depth2 change :: ' + this.selected.depth2.key);
        this.setDepth3Data(this.oData.sp[this.selected.depth2.key], "depth3Data");

        // 하위 메뉴 show/hide
        document.querySelector('._dep03').style.visibility = "visible";

        // 하위 메뉴 오픈
        this.openNav('Dep02');
        this.openNav('Dep03');

      },

      /**
       * sidebar minimized
       */
      sidebarToggle: function (num) {
        console.log('sidebarToggle ::');
        console.log(num);

        // 기본 body에 들어가던 sidebar-minimized 제거
        document.body.classList.toggle('sidebar-minimized');

        // mode 변경
        this.mode['minimizedDep0' + num] = !this.mode['minimizedDep0' + num];

        // container class 조절
        this.setClass();

      },

      setClass(){
        /*
        사이드와 컨텐츠 관계:
        사이드가 접히는 경우에 따라 상위 div.main에 아래 클래스가 추가됩니다.
        1. 0개 닫혔을 경우 : side_show_03
        2. 1개 닫혔을 경우 : side_show_02
        3. 2개 닫혔을 경우 : side_show_01
        4. 3개 모두 닫혔을 경우 : side_show_none
        */
        console.log('setClass ::');
        let isFolding = {
          dep01 : this.mode.minimizedDep01 ? 1 : 0,
          dep02 : this.mode.minimizedDep02 ? 1 : 0,
          dep03 : this.mode.minimizedDep03 ? 1 : 0
        };
        let countFolding = isFolding.dep01 + isFolding.dep02 + isFolding.dep03;
        console.log(isFolding);
        console.log(countFolding);

        document.getElementsByClassName('main')[0].classList.remove('side_show_01', 'side_show_02', 'side_show_03', 'side_show_none');
        console.log(document.getElementsByClassName('main')[0].classList);

        switch(countFolding){
          case 0:
            document.getElementsByClassName('main')[0].classList.add('side_show_03');
            break;
          case 1:
            document.getElementsByClassName('main')[0].classList.add('side_show_02');
            break;
          case 2:
            document.getElementsByClassName('main')[0].classList.add('side_show_01');
            break;
          case 3:
            document.getElementsByClassName('main')[0].classList.add('side_show_none');
            break;
        }
      },

      /**
       * router link 설정
       */
      detailLink(serviceName) {
        let routeInfo = {
          path: 'details',
          query: {
            spName: this.selected.depth2.key,
            serviceName: serviceName
          }
        };
        return routeInfo
      },

      modalServiceList(){
        this.showModal({
          componentName : 'ModalServiceList',
          spName : this.selected.depth2.spName,
          key : this.selected.depth2.key
        });
      },
      resetActive(depth){
        let link = document.querySelector(depth).getElementsByClassName('nav-link');
        const icon = document.querySelector(depth).getElementsByClassName('nav-icon');

        // nav-link active class 초기화
        for(let i=0;i<link.length;i++) {
          link[i].classList.remove("active");
        }

        if(depth === '._dep01'){
          // 대메뉴 초기화
          // 초기상태 메뉴 숨기기
          document.querySelector('._dep02').style.visibility = "hidden";
          document.querySelector('._dep03').style.visibility = "hidden";
        }

        // icon class 초기화
        if(depth === '._dep02'){
          for(let i=0;i<icon.length;i++) {
            icon[i].classList.add("icon_w","fa-folder");
            icon[i].classList.remove("icon_y","fa-folder-open");
          }
        }
      },
      home(){
        this.resetActive('._dep01');
        this.resetActive('._dep02');
        // 모드 초기화
        this.mode = {
          minimizedDep01: false,
          minimizedDep02: true,
          minimizedDep03: true,
        };
        this.setClass();
      },
      openNav(depth){
        this.mode['minimized' + depth] = false;
        this.setClass();
      }
    }
  }
</script>

<style scoped>

  .sidebar.sidebar_home {
    background: #3A4158;
  }

  .sidebar_home .nav {
    margin-bottom: -128px;
  }

  .sidebar .nav-logo .icon_domfam {
    padding: .75rem 1rem;
    font-size: 80%;
    font-weight: 700;
    color: #e4e7ea;
    text-transform: uppercase;
  }

  .icon_w {
    color: #ffffff !important;
  }

  /*사이드바 홈 버튼 4개일 경우*/
/*  .sidebar_home .nav {
    margin-bottom: -300px;
  }*/

  .btn.btn_m {
    width: 80%;
    padding: 0.52rem 1rem;
    margin: .5rem auto 0;
  }

  .sidebar-minimized .btn.btn_m {
    width: 100%;
    padding-left: 0;
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
  .icon_w {
    color: #ffffff !important;
  }

  .nav-link.active .icon_w {
    color: #ff7061 !important;
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

  /*사이드 네비 폴딩 조절*/
  .sidebar-minimized .sidebar_home,
  .sidebar-minimized .sidebar_depth2,
  .sidebar-minimized .sidebar_depth3 {
    width: 50px;

  }

  .sidebar {
    transition: margin-left 0.25s, margin-right 0.25s, width 0.25s, flex 0.25s, -webkit-box-flex 0.25s, -ms-flex 0.25s, left 0.25s;
  }

  .sidebar-minimized + ._dep02 .sidebar {
    left: 50px;
  }

  .sidebar-minimized + ._dep02 + ._dep03 .sidebar,
  ._dep02.sidebar-minimized + ._dep03 .sidebar {
    /*left: 250px;*/
    left: 249px;  /* border 1px 확인 필요*/
  }

  .sidebar-minimized + ._dep02.sidebar-minimized + ._dep03 .sidebar {
    left: 100px;
  }

  /* 서비스 목록 첫글자 대문자로 변경 */
  .click_service {
    text-transform: uppercase;
  }

  /*설정 버튼*/
  .sidebar-minimized .btn_admin {
    text-align: center !important;
  }

  /*타이틀 라인*/
  .sidebar_depth .sidebar-nav .have_border  {
    margin: 0 5% 5px;
    border-bottom: 1px solid #fff;
  }
  .sidebar_depth li.have_border {
    padding-top: 32px;
  }
  .sidebar_depth .btn_admin + li.have_border {
    padding-top: 0;
  }
  .sidebar_depth .nav .have_border .nav-title {
    padding: 0;
  }

  html:not([dir=rtl]) .sidebar {
    margin-left: 0;
  }
  html:not([dir=rtl]) .sidebar-lg-show .sidebar,
  html:not([dir=rtl]) .sidebar-show .sidebar {
      margin-left: 0;
  }
  .sidebar-fixed .sidebar {
    position: fixed;
    z-index: 1019;
    width: 200px;
    height: 100vh;
  }
  .sidebar-fixed .app-header+.app-body .sidebar {
    height: calc(100vh - 55px);
  }
  .sidebar-minimized .sidebar {
    width: 50px;
  }
  .sidebar-minimized .sidebar .nav {
    width: 50px;
  }
  .sidebar-minimized .sidebar .sidebar-nav {
    overflow: visible;
    width: 50px;
  }

  .sidebar-minimized .sidebar .nav-item {
    width: 50px;
    overflow: hidden;
  }
  .sidebar-minimized .sidebar .sidebar-minimizer {
    position: fixed;
    bottom: 0;
    width: 50px;
    height: 50px;
    background-color: #24282c;
  }
  .sidebar-minimized .sidebar .sidebar-minimizer::before {
    width: 100%;
    -webkit-transform: rotate(-180deg);
    transform: rotate(-180deg);
  }

  .sidebar-minimized .sidebar .d-minimized-none, .sidebar-minimized .sidebar .nav-divider, .sidebar-minimized .sidebar .nav-label, .sidebar-minimized .sidebar .nav-title, .sidebar-minimized .sidebar .sidebar-footer, .sidebar-minimized .sidebar .sidebar-form, .sidebar-minimized .sidebar .sidebar-header {
    display: none;
  }
  .sidebar-minimized .sidebar .nav-link {
    position: relative;
    padding-left: 0;
    margin: 0;
    white-space: nowrap;
    border-left: 0;
  }
  .sidebar-minimized .sidebar .nav-link .nav-icon {
    display: block;
    float: left;
    width: 50px;
    font-size: 18px;
  }

  .sidebar-minimizer {
    display: block;
  }

  .sidebar-minimized .sidebar .sidebar-minimizer::before {
    width: 100%;
    -webkit-transform: rotate(-180deg);
    transform: rotate(-180deg);
  }

  @media screen and (max-width: 992px){
      .sidebar-minimized .sidebar_home .nav{
        margin-bottom: -190px;
      }
  }

  /*추가 02/22*/
  .btn_admin {
    display: block;
  }
  .sidebar-nav {
    padding-bottom: 95px;
  }
  .sidebar-nav .nav{
    overflow-y: auto;
    height: 100%;
    display: block;
  }
  .sidebar-nav .nav::-webkit-scrollbar {
    width: 0;
    background: transparent;
  }

</style>
