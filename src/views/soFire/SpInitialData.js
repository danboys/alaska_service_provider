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
      "X-Client-App-Key": "",
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
      channelDeleteList : [],
      channelJoinList : []
    },
    product : {
      limitProductB2B : [],
      offlineAgreementPrd : []
    },
    category: {
      baseId: {
        vodChannel: "", //가상채널(vod채널)
        audioChannel: "", //오디오채널
        appGoogle: "", //  TV 앱 7열 타입
        appNetflix: "" // 넷플릭스 배너 타입
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
        defaultPoster: '',
        defaultPosterSquare: '',
        defaultPromotion: '',
        defaultThumbnail: '',
        defaultThumbnailLine: '',
        defaultChannelLogo: ''
      }
    }
  }
export default SpInitialData
