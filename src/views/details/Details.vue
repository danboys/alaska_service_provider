<template>
  <div class="wrap_container">
    <div>
      {{this.serviceName}}
    </div>
    <div>
      <ul>
        <li v-for="item in depth1Data">
          <div>{{item}}</div>
          <ul>
            <li v-for="item in depth2Data">
              {{item}}
              <ul>
                <li>
                  <span></span>
                  <span style="margin-left: 10px;"><a href="#" @click="showModal('ModalDetailsPopup')">수정하기</a></span>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </div>

  </div>

</template>



<script >
  import { mapMutations } from 'vuex'

  export default {
    name: 'Details',
    components: {
    },
    data:()=>{
      return {
        spName : null,
        serviceName : null,
        path : null,
        oData: {},
        depth1Data: [],
        depth2Data: [],
        depth3Data: [],
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
      ...mapMutations([`showModal`]),
      /**
       * firebase 연동
       */
      fetchFirebaseData() {
        console.log('fetchFirebaseData !!!!');
        firebase.database().ref('provider/sp/' + this.spName+'/'+this.serviceName).once('value')
          .then((data) => {
            /**
             * 전체 Database Object
             */
            this.oData = data.val();


            this.setDepth1Data(this.oData, "depth1Data");

            for(let i=0; i<Object.entries(data.val()).length; i++){
              this.resultData.push(Object.entries(data.val())[i][1])
            }

            console.log(this.resultData)
            console.log(Object.values(this.resultData))

            this.setDepth2Data(Object.entries(this.resultData), "depth2Data");

            for(let j=0; j<this.depth2Data.length; j++){
              this.resultData2.push(Object.entries(Object.entries(data.val())[0][1])[j][1])
            }
            console.log(this.resultData2)
            console.log(Object.values(this.resultData2))

            this.setDepth3Data(this.resultData2, "depth3Data");
          })
          .catch((error) => {
            console.log(error)
          })
      },
      /**
       * 데이터 가공
       */
      setDepth1Data: function (objectData, storeName) {
        // Object를 array로 변경
        let store = [];
        for (let key in objectData) {
          objectData[key]= key;
          store.push(objectData[key]);
        }
        // console.log(store);

        this[storeName] = store;
        console.log(this[storeName]);
      },
      setDepth2Data: function (objectData, storeName) {
        // Object를 array로 변경
        let store = [];
        for (let key in objectData[0][1]) {
          objectData[key]  = key;
          store.push(objectData[key]);
        }
        // console.log(store);

        this[storeName] = store;
        console.log(this[storeName]);
      },
      setDepth3Data: function (objectData, storeName) {
        // Object를 array로 변경
        let store = [];
        for (let key in objectData) {
          store.push(objectData[key]);
        }
        // console.log(store);

        this[storeName] = store;
        console.log(this[storeName]);
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
