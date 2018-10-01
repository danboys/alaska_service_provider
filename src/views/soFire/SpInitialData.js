let SpInitialData = {
    service : {
      push : true, // 사업자 Push
      nvod : true, // NVOD 채널
      trigger : true, // 4방향 트리거
      simplePurchase : true, // VOD 간편결재ip
      multiPurchase : false, // 복합결재
      coinCharge : true, // TV코인 충전
      cjonePoint : true, // CJ One point
      hPoint : false, // H. point
      netflix : true, // 넷플릭스
      samsungApps : true, // 삼성 앱스
      previewDetail : true, // 본편미리보기
      seriesContinuous : true, // 시리즈 연속보기
      usbMedia : true, // 개인미디어
      favorite : true, // 즐겨찾기
      smartRecommend : true, // 스마트 추천
      androidApp : true, // TV앱
      tts : true, // TTS
      cjhCPA : true, // CJ Hello Smart App
      hcnCPA : false, // 현대 HCN Smart App
      kidsMode : true, // 키즈모드
      channelMode : true, // 채널모드 (키즈모드, 쉬운 사용 모드)
      pvr : true, // 녹화(PVR)
      cug : true, // CUG
      bills : false, // TV청구서
      cheonjiin : true, // 천지인
      cjhOSK : true, // CJH OSK
      hcnOSK : false, // HCN OSK
      pip : true, // PIP
      testLogSend : false // 로그 허용 여부
    },
    ip: {
      serverIpLiveBiz: "",
      "X-Client-App-Key": "9CQQR9V1UHJF87PMRUOD6JSLG4",
      flagBiz: "",
      token: "",

      serverIpLiveUi: "",
      flagUi: "",

      serverIpLiveData: "",
      serverIpLiveSearch: "",
      flagData: "",

      serverIpMGW: "",
      flagMgw: ""
    },
    stb: {
      ibcModel: [],
      energyModel: [],
      uhdStb: [],
      pvrStb: [],
      pvrRedStb: [],
      pvrSmartStb: [],
      pvrOcapStb: [],
      hyperStb: [],
      animationSettopBox: [],
      smartStb: []
    },
    channel : {
      channelDeleteList : ["176", "192", "193", "345", "349", "163", "181", "108", "443"],
      channelJoinList : ["103", "108", "163", "176", "181", "192", "193", "304", "317", "345", "349", "443", "492", "493"]
    },
    product : {
      limitProductB2B : ["VDCTSSXX100000000387","VDCTSSXX100000000385","VDCTSSXX100000000381","VDCTSSXX100000000380","VDCTSSXX100000000376","VDCTSSXX100000000375","VDCTSSXX100000000372","VDCTSSXX100000000370","VDCTSSXX100000000369","BDNNSSNM100000000394"],
      offlineAgreementPrd : ["CHNMSSXX100000002151","BDNNSSNM100000003572"]
    },
    category: {
      baseId: {
        vodChannel: "1006339", //가상채널(vod채널)
        audioChannel: "1006340", //오디오채널
        appGoogle: "1013012", //  TV 앱 7열 타입
        appNetflix: "1013013" // 넷플릭스 배너 타입
      }
    },
    text: {
      sBiTxt: "",
      sBiTel: ""
    },
    image: {
      image: {
        serverImg: '',
        serverLogo: '',
        serverThumbnail: ""
      },
      srcPath: {
        srcPath: ''
      },
      defaultImage: {
        defaultPoster: 'img/common/default_img/img_default_poster_220_316.png',
        defaultPosterSquare: 'img/common/default_img/img_default_poster_220_220.png',
        defaultPromotion: '',
        defaultThumbnail: 'img/common/default_img/img_default_thumbnail_355_200.png',
        defaultThumbnailLine: 'img/common/default_img/img_default_thumbnail_line.png',
        defaultChannelLogo: 'img/common/hello_logo.png'
      }
    }
  }
export default SpInitialData
