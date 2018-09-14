let spData = [
  {
    // id: 0,
    so: {
      soCode: "43",
      soName: "cjh",
      flag: "CJHV", // Log 등에 쓰이는 flag
      spCode: "livebed",
      spName: "CJH LIVEBED",
      key: "cjh_livebed" // soName + spCode
    },
    service: {
      push: true, // 사업자 Push
      nvod: true, // NVOD 채널
      trigger: true, // 4방향 트리거
      simplePurchase: true, // VOD 간편결재ip
      multiPurchase: false, // 복합결재
      coinCharge: true, // TV코인 충전
      cjonePoint: true, // CJ One point
      hPoint: false, // H. point
      netflix: true, // 넷플릭스
      samsungApps: true, // 삼성 앱스
      previewDetail: true, // 본편미리보기
      seriesContinuous: true, // 시리즈 연속보기
      usbMedia: true, // 개인미디어
      favorite: true, // 즐겨찾기
      smartRecommend: true, // 스마트 추천
      androidApp: true, // TV앱
      tts: true, // TTS
      cjhCPA: true, // CJ Hello Smart App
      hcnCPA: false, // 현대 HCN Smart App
      kidsMode: true, // 키즈모드
      channelMode: true, // 채널모드 (키즈모드, 쉬운 사용 모드)
      pvr: true, // 녹화(PVR)
      cug: true, // CUG
      bills: false, // TV청구서
      cheonjiin: true, // 천지인
      cjhOSK: true, // CJH OSK
      hcnOSK: false, // HCN OSK
      pip: true, // PIP
      testLogSend: false // 로그 허용 여부
    },
    ip: {
      serverIpLiveBiz: "http://10.10.78.66:18080/",
      "X-Client-App-Key": "9CQQR9V1UHJF87PMRUOD6JSLG4",
      flagBiz: "CJHV",
      token: "",

      serverIpLiveUi: "http://10.10.78.66:18080/",
      flagUi: "CJHV",

      serverIpLiveData: "http://10.10.78.66:18080/",
      serverIpLiveSearch: "http://10.10.78.66:18080/",
      flagData: "CJHV",

      serverIpMGW: "http://10.10.69.140:2080/",
      flagMgw: "CJHV"
    },
    stb: {
      ibcModel: ['SMTC3021X', 'SMTC5010X', 'SMTC5011X', 'SMTC5012X', 'UC1600X', 'UC2300X', 'UC1300X'],
      energyModel: ['SMTC5012X', 'UC1600X', 'UC2300X', 'GXCJ630CH', 'GXCJ545CL', 'UC3300', 'GX-CJ680CL'],
      uhdStb: ['GXCJ630CH', "GX-CJ680CL"],
      pvrStb: ['GXCJ545CL', 'GX-CJ680CL', 'UC3300', 'SX930CX'],
      pvrRedStb: ['GX-CJ680CL'],
      pvrSmartStb: ['SX930CX'],
      pvrOcapStb: ['GXCJ545CL', 'UC3300'],
      hyperStb: ['GXCJ630CH', 'GXCJ545CL', 'GX-CJ680CL', 'UC3300', 'SX930CX'],
      animationSettopBox: ["GX-CJ680CL", "UC3300", "GXCJ545CL", "GX-HC830CH"],
      smartStb: ["GX830H"]
    },
    channel: {
      channelDeleteList: ["176", "192", "193", "345", "349", "163", "181", "108", "443"],
      channelJoinList: ["103", "108", "163", "176", "181", "192", "193", "304", "317", "345", "349", "443", "492", "493"]
    },
    product: {
      limitProductB2B: ["VDCTSSXX100000000387", "VDCTSSXX100000000385", "VDCTSSXX100000000381", "VDCTSSXX100000000380", "VDCTSSXX100000000376", "VDCTSSXX100000000375", "VDCTSSXX100000000372", "VDCTSSXX100000000370", "VDCTSSXX100000000369", "BDNNSSNM100000000394"],
      offlineAgreementPrd: ["CHNMSSXX100000002151", "BDNNSSNM100000003572"]
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
      sBiTxt: "헬로 TV",
      sBiTel: "1855-1000"
    },
    image: {
      image: {
        serverImg: 'http://10.10.78.65:18080/',
        serverLogo: 'http://10.10.78.65:18080/',
        serverThumbnail: "http://10.10.18.71/image/"
      },
      srcPath: {
        srcPath: 'provider/cjh/'
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
  },
  {
    so : {
      soCode : "16",
      soName : "hcn",
      flag : "HCN", // Log 등에 쓰이는 flag
      spCode : "testbed",
      spName : "HCN TESTBED",
      key : "hcn_testbed" // soName + spCode
    },
    service : {
      push : false, // 사업자 Push
      nvod : false, // NVOD 채널
      trigger : false, // 4방향 트리거
      simplePurchase : false, // VOD 간편결재ip
      multiPurchase : false, // 복합결재
      coinCharge : false, // TV코인 충전
      cjonePoint : false, // CJ One point
      hPoint : false, // H. point
      netflix : false, // 넷플릭스
      samsungApps : false, // 삼성 앱스
      previewDetail : false, // 본편미리보기
      seriesContinuous : false, // 시리즈 연속보기
      usbMedia : false, // 개인미디어
      favorite : false, // 즐겨찾기
      smartRecommend : false, // 스마트 추천
      androidApp : false, // TV앱
      tts : false, // TTS
      cjhCPA : false, // CJ Hello Smart App
      hcnCPA : false, // 현대 HCN Smart App
      kidsMode : false, // 키즈모드
      channelMode : false, // 채널모드 (키즈모드, 쉬운 사용 모드)
      pvr : false, // 녹화(PVR)
      cug : false, // CUG
      bills : false, // TV청구서
      cheonjiin : false, // 천지인
      cjhOSK : false, // CJH OSK
      hcnOSK : false, // HCN OSK
      pip : false, // PIP
      testLogSend : false // 로그 허용 여부
    },
    ip : {
      serverIpLiveBiz : "http://192.168.137.31:45001/",
      "X-Client-App-Key" : "NEEBJF29F2KONAV6VCN4HTGTNC",
      flagBiz : "HCN",
      token : "",

      serverIpLiveUi : "http://192.168.137.31:45001/",
      flagUi : "HCN",

      serverIpLiveData : "http://192.168.137.31:45001/",
      serverIpLiveSearch : "http://192.168.137.31:45001/",
      flagData : "HCN",

      serverIpMGW : "http://192.168.137.31:45006/",
      flagMgw : "HCN"
    },
    stb : {
      ibcModel : ['SMTC3021X', 'SMTC5010X', 'SMTC5011X', 'SMTC5012X', 'UC1600X', 'UC2300X', 'UC1300X'],
      energyModel : ['SMTC5012X', 'UC1600X', 'UC2300X', 'GXCJ630CH', 'GXCJ545CL','UC3300','GX-CJ680CL'],
      uhdStb : ['GXCJ630CH',"GX-CJ680CL"],
      pvrStb : ['GXCJ545CL','GX-CJ680CL','UC3300','SX930CX'],
      pvrRedStb : ['GX-CJ680CL'],
      pvrSmartStb : ['SX930CX'],
      pvrOcapStb : ['GXCJ545CL','UC3300'],
      hyperStb : ['GXCJ630CH', 'GXCJ545CL','GX-CJ680CL','UC3300','SX930CX'],
      animationSettopBox : ["GX-CJ680CL","UC3300","GXCJ545CL","GX-HC830CH"],
      smartStb : ["GX830H"]
    },
    channel : {
      channelDeleteList : ["176", "192", "193", "345", "349", "163", "181", "108", "443"],
      channelJoinList : ["103", "108", "163", "176", "181", "192", "193", "304", "317", "345", "349", "443", "492", "493"]
    },
    product : {
      limitProductB2B : ["VDCTSSXX100000000387","VDCTSSXX100000000385","VDCTSSXX100000000381","VDCTSSXX100000000380","VDCTSSXX100000000376","VDCTSSXX100000000375","VDCTSSXX100000000372","VDCTSSXX100000000370","VDCTSSXX100000000369","BDNNSSNM100000000394"],
      offlineAgreementPrd : ["CHNMSSXX100000002151","BDNNSSNM100000003572"]
    },
    category : {
      baseId : {
        vodChannel : "1006339", //가상채널(vod채널)
        audioChannel: "1006340", //오디오채널
        appGoogle : "1013012", //  TV 앱 7열 타입
        appNetflix : "1013013" // 넷플릭스 배너 타입
      }
    },
    text : {
      sBiTxt : "에브리온 TV",
      sBiTel : "1855-1000"
    },
    image : {
      image : {
        serverImg : "http://192.168.137.31:45001/",
        serverLogo : "http://192.168.137.31:45001/",
        serverThumbnail : "http://192.168.137.31:45001/",
      },
      srcPath : {
        srcPath : 'provider/hcn/'
      },
      defaultImage : {
        defaultPoster : 'img/common/default_img/img_default_poster_220_316.png',
        defaultPosterSquare : 'img/common/default_img/img_default_poster_220_220.png',
        defaultPromotion : '',
        defaultThumbnail : 'img/common/default_img/img_default_thumbnail_355_200.png',
        defaultThumbnailLine : 'img/common/default_img/img_default_thumbnail_line.png',
        defaultChannelLogo : 'img/common/hello_logo.png'
      }
    }
  }
]
export default spData
