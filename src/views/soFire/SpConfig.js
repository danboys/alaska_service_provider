let SpConfigData = {
    so : {
      contentType : "string",
      column : 2,
      content: {
        flag: {
          description: 'log 등에서 쓰이는 flag (ex. CJHV)'
        },
        key: {
          description: 'key (ex. cjh_livebed 자동으로 생성)'
        },
        soCode: {
          description: '사업자별 SO Code (ex. 43)'
        },
        soName: {
          description: 'SO Name (ex. cjh)'
        },
        spCode: {
          description: 'SP Code (ex. livebed)'
        },
        spName: {
          description: 'SP Name (ex. CJH LIVEBED)'
        }
      },
    },
    service : {
      contentType : "boolean",
      column : 4,
      content: {
        push: {
          description: '사업자 Push'
        },
        nvod: {
          description: 'NVOD 채널'
        },
        trigger: {
          description: '4방향 트리거'
        },
        simplePurchase: {
          description: 'VOD 간편결제'
        },
        multiPurchase: {
          description: '복합결제'
        },
        coinCharge: {
          description: 'TV코인 충전'
        },
        cjonePoint: {
          description: 'CJ One point'
        },
        hPoint: {
          description: 'H. point'
        },
        netflix: {
          description: '넷플릭스'
        },
        samsungApps: {
          description: '삼성 앱스'
        },
        previewDetail: {
          description: '본편미리보기'
        },
        seriesContinuous: {
          description: '시리즈 연속보기'
        },
        usbMedia: {
          description: '개인미디어'
        },
        favorite: {
          description: '즐겨찾기'
        },
        smartRecommend: {
          description: '스마트 추천'
        },
        androidApp: {
          description: 'TV앱'
        },
        tts: {
          description: 'TTS'
        },
        cjhCPA: {
          description: 'CJ Hello Smart App'
        },
        hcnCPA: {
          description: '현대 HCN Smart App'
        },
        kidsMode: {
          description: '키즈모드'
        },
        channelMode: {
          description: '쉬운 사용 모드'
        },
        pvr: {
          description: '녹화(PVR)'
        },
        cug: {
          description: 'CUG'
        },
        bills: {
          description: 'TV청구서'
        },
        cheonjiin: {
          description: '천지인'
        },
        cjhOSK: {
          description: 'CJH OSK'
        },
        hcnOSK: {
          description: 'HCN OSK'
        },
        pip: {
          description: 'PIP'
        },
        testLogSend: {
          description: '로그 허용 여부'
        }
      },
    },
    ip: {
      contentType : "string",
      column : 2,
      content : {
        serverIpLiveBiz: {
          description: 'Biz P/F IP 주소 (ex. http://10.10.78.66:18080/)'
        },
        "X-Client-App-Key": {
          description: 'APP 키 (ex. 9CQQR9V1UHJF87PMRUOD6JSLG4)'
        },
        flagBiz: {
          description: 'Biz P/F flag (ex. CJHV)'
        },
        token: {
          description: 'SIT 배포용 슈퍼토큰 (ex. S3246LHN99FH7C18S0BAH3LSAO)'
        },
        serverIpLiveUi: {
          description: 'UI P/F IP 주소 (ex. http://10.10.78.66:18080/)'
        },
        flagUi: {
          description: 'UI P/F flag (ex. CJHV)'
        },
        serverIpLiveData: {
          description: 'DATA P/F IP 주소 (ex. http://10.10.78.66:18080/)'
        },
        serverIpLiveSearch: {
          description: 'DATA P/F IP 주소 (ex. http://10.10.78.66:18080/)'
        },
        flagData: {
          description: 'DATA P/F flag (ex. CJHV)'
        },
        serverIpMGW: {
          description: 'MGW P/F IP 주소 (ex. http://10.10.69.140:2080/)'
        },
        flagMgw: {
          description: 'MGW P/F flag (ex. CJHV)'
        }
      }
    },
    stb: {
      contentType : "array",
      column : 2,
      content : {
        ibcModel: {
          description: '광고 노출 모델'
        },
        energyModel: {
          description: '절전모드 모델'
        },
        uhdStb: {
          description: 'UHD 모델'
        },
        pvrStb: {
          description: 'PVR 녹화 모델'
        },
        pvrRedStb: {
          description: 'PVR RED 모델'
        },
        pvrSmartStb: {
          description: 'PVR SMART 모델'
        },
        pvrOcapStb: {
          description: 'PVR OCAP 모델'
        },
        hyperStb: {
          description: 'Hyper 모델'
        },
        animationSettopBox: {
          description: '애니메이션 모델'
        },
        smartStb: {
          description: 'HCN Smart 모델'
        }
      }
    },
    channel : {
      contentType : "array",
      column : 2,
      content : {
        channelDeleteList: {
          description: '지움채널 목록 : 성인 관련 채널을 최근시청 채널등에서 지우기 위한 목록'
        },
        channelJoinList: {
          description: '유료채널 목록 : 채널편성표 등에서 유료채널 “₩” 노출하기 위한 목록'
        }
      }
    },
    product : {
      contentType : "array",
      column : 2,
      content : {
        limitProductB2B: {
          description: 'B2B 구매 불가 상품 : B2B일 경우 구매 불가 처리'
        },
        offlineAgreementPrd: {
          description: '오프라인 약정 상품 목록 : 가입내역에서 오프라인 약정 상품은 노출하지 않음'
        }
      }
    },
    category: {
      contentType : "string",
      column : 2,
      content : {
        baseId: {
          description: 'baseId 구분 값',
          vodChannel: {
            description: '가상 채널 baseId : 채널편성표 하위 카테고리에서 가상 채널을 구분하기 위한 baseId 값'
          },
          audioChannel: {
            description: '오디오 채널 baseId : 채널편성표 하위 카테고리에서 오디오 채널을 구분하기 위한 baseId 값'
          }
        }
      }
    },
    text: {
      contentType : "string",
      column : 2,
      content : {
        sBiTxt: {
          description: 'BI Text (ex. 헬로 TV)'
        },
        sBiTel: {
          description: 'BI Tel Text 고객센터 번호 (ex. 1855-1000)'
        }
      }
    },
    image: {
      contentType : "string",
      column : 2,
      content: {
        image : {
          description: '이미지 URL 정보',
          serverImg: {
            description: 'Biz P/F Image Server URL (ex. Poster 등)'
          },
          serverLogo: {
            description: 'Biz P/F LOGO Server URL (ex. 채널 LOGO 등)'
          },
          serverThumbnail: {
            description: 'Biz P/F Thumbnail Server URL (ex. 채널 썸네일 등)'
          }
        },
        srcPath: {
            description: 'provider 이미지 경로',
            srcPath: {
              description: 'provider Image 경로 (ex. provider/cjh/)'
            }
        },
        defaultImage: {
          description: '디폴트 이미지',
          defaultPoster: {
            description: 'Default Poster 이미지 (ex. img/common/default_img/img_default_poster_220_316.png)'
          },
          defaultPosterSquare: {
            description: 'Default Square 이미지 (ex. img/common/default_img/img_default_poster_220_220.png)'
          },
          defaultPromotion: {
            description: ''
          },
          defaultThumbnail: {
            description: 'Default Thumbnail 이미지 (ex. img/common/default_img/img_default_thumbnail_355_200.png)'
          },
          defaultThumbnailLine: {
            description: '반투명 Default Thumbnail 이미지 (ex. img/common/default_img/img_default_thumbnail_line.png) '
          },
          defaultChannelLogo: {
            description: 'Default Channel Logo 이미지 (ex. img/common/hello_logo.png)'
          }
        }
      },
    }
  };
export default SpConfigData
