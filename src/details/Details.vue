<template>
  <div class="wrap_container">
    <div>
      {{this.serviceName}}
    </div>
    <div>
      <ul>
        <li  v-for="item in depth2Data">
          <div>{{item.name}}</div>
          <ul>
            <li>
              srcPath
              <ul>
                <li>
                  <span>img/common/default_img/img_default_poster_220_316.png</span>
                  <span style="margin-left: 10px;"><a href="#" @click="showPopup(item.name)">수정하기</a></span>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <popup
      v-show="isPopupVisible"
      @close="closePopup"/>
  </div>

</template>



<script >
  import popup from './popup';
  export default {
    name: 'Details',
    components: {
      popup
    },
    data:()=>{
      return {
        spName : null,
        serviceName : null,
        path : null,
        oData: {},
        depth2Data: [],
        resultData:[],
        resultData2:[],
        isPopupVisible : false,
        data : null
      }
    },
    created(){
      this.spName = this.$route.query.spName
      this.serviceName = this.$route.query.serviceName
      this.fetchFirebaseData();
    },

    methods: {

      /**
       * firebase 연동
       */
      fetchFirebaseData() {
        console.log('fetchFirebaseData !!!!');
        firebase.database().ref('provider/sp/' + this.spName).once('value')
          .then((data) => {
            /**
             * 전체 Database Object
             */
            this.oData = data.val();

            console.log('setDepthData 데이터 가공 시작 :: depth2Data');
            this.setDepth2Data(this.oData[this.serviceName], "depth2Data");

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
          objectData[key].name = key;
          store.push(objectData[key]);
        }
        // console.log(store);
        this[storeName] = store;
        console.log(this[storeName]);
      },
      showPopup: function (key) {

        this.data = key
        this.isPopupVisible = true
      },
      closePopup: function () {

        this.isPopupVisible = false
      }
    }
  }

</script>




<style scoped>
  .wrap_container{
    position: absolute;
    right: 0;
    top: 0;
    width: calc(100% - 600px);

  }
</style>
