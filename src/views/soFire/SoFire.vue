<template>
  <div>
    <!--SO view-->
    <b-row>
      <b-col cols="12">
        <transition name="slide">
          <b-card :header="caption">
            <b-table :hover="hover" :striped="striped" :bordered="bordered" :small="small" :fixed="fixed" responsive="sm" :items="items" :fields="fields" :current-page="currentPage" :per-page="perPage" @row-clicked="rowClicked">
              <template slot="id" slot-scope="data">
                <strong>{{data.item.id}}</strong>
              </template>
              <template slot="name" slot-scope="data">
                <strong>{{data.item.name}}</strong>
              </template>
              <template v-if="deleteMode == true" slot="delete" slot-scope="data">
                <a href="#"><i class="icons font-2xl d-block cui-circle-x"></i></a>
              </template>
            </b-table>
            <nav>
              <b-pagination size="sm" :total-rows="getRowCount(items)" :per-page="perPage" v-model="currentPage" prev-text="Prev" next-text="Next" hide-goto-end-buttons/>
            </nav>
            <template slot="footer">
              <div class="float-right"><b-button @click="deleteModal = true">Delete</b-button></div>
              <div class="float-right"><b-button @click="addModal = true" class="mr-xl-2">Add</b-button></div>
            </template>
          </b-card>
        </transition>
      </b-col>
    </b-row>

    <!--SO 추가 모달-->
    <b-modal title="SO 추가" v-model="addModal" @ok="addItem($event)">
      <form action="">
        <p>
          <label for="spName" class="mr-xl-2">SP Name :</label><br>
          <input type="text" name="spName" id="spName"/>
        </p>
        <p>
          <label for="soCode" class="mr-xl-2">SO Code :</label><br>
          <input type="text" name="soCode" id="soCode"/>
        </p>
        <p>
          <label for="soName" class="mr-xl-2">SO Name :</label><br>
          <input type="text" name="soName" id="soName"/>
        </p>
        <p>
          <label for="spCode" class="mr-xl-2">SP Code :</label><br>
          <input type="text" name="spCode" id="spCode"/>
        </p>
        <p>
          <label for="flag" class="mr-xl-2">Flag :</label><br>
          <input type="text" name="flag" id="flag"/>
        </p>
      </form>
    </b-modal>

    <!--SO 삭제 모달-->
    <b-modal title="SO 삭제" v-model="deleteModal" @ok="deleteItem($event)">
      <b-form-checkbox-group stacked id="basicCheckboxes" name="Checkboxes" :plain="true">
        <b-form-checkbox v-for="item in items" :value="item.key">{{item.spName}}</b-form-checkbox>
      </b-form-checkbox-group>
    </b-modal>
  </div>

</template>

<script>
import SpInitialData from './SpInitialData'

// console.log('firebase :::::');
// console.log(firebase);

export default {
  name: 'SoFire',
  // firebase:{
  //   soData : soFireRef
  // },
  props: {
    caption: {
      type: String,
      default: 'SoFire'
    },
    hover: {
      type: Boolean,
      default: true
    },
    striped: {
      type: Boolean,
      default: true
    },
    bordered: {
      type: Boolean,
      default: false
    },
    small: {
      type: Boolean,
      default: false
    },
    fixed: {
      type: Boolean,
      default: false
    }
  },
  data: () => {
    return {
      itemObj:{},
      items: [],
      fields: [
        // {key: 'id'},
        {key: 'spName'},
        {key: 'soCode'},
        {key: 'soName'},
        {key: 'spCode'},
        // {key: 'key'},
        {key: 'flag'},
        {key: 'registered'},
        // {key: 'delete'}
      ],
      currentPage: 1,
      perPage: 5,
      totalRows: 0,
      addModal: false,
      deleteModal : false
    }
  },
  computed: {

  },
  methods: {
    getBadge (status) {
      return status === 'Active' ? 'success'
        : status === 'Inactive' ? 'secondary'
          : status === 'Pending' ? 'warning'
            : status === 'Banned' ? 'danger' : 'primary'
    },
    fetchFirebaseData(){
      this.itemObj = {};
      this.items = [];

      console.log('fetchFirebaseData !!!!');
      firebase.database().ref('so').once('value')
        .then((data)=>{
          /**
           * 전체 Database Object
           */
          this.itemObj=data.val();
          // console.log('itemObj ::');
          // console.log(this.itemObj);
          /**
           * items array
           */
          for(let ikey in this.itemObj){
            // this.itemObj[ikey].status = true;
            this.items.push(this.itemObj[ikey]);
          }
          // console.log('items ::');
          // console.log(this.items);
        })
        .catch((error)=>{console.log(error)})
    },
    getRowCount (items) {
      return items.length
    },
    userLink (key) {
      return `soFire/${key.toString()}`
    },
    rowClicked (item) {
      const userLink = this.userLink(item.key);
      this.$router.push({path: userLink, query:{ spName:item.spName}})
    },
    addItem($event) {
      // console.log($event);
      const targetInput = $event.target.getElementsByTagName('input');
      const targetObj = {};
      /**
       * 입력항목 추가
       */
      for(let i=0; i<targetInput.length;i++){
        targetObj[targetInput[i].id] = targetInput[i].value;
        targetInput[i].value = "";
      }


      /**
       * key, Registered 추가
       */
      targetObj.key = targetObj.soName + "_" + targetObj.spCode;
      const today = new Date();
      targetObj.registered = today.getFullYear()+"/"+(today.getMonth()+1)+"/"+today.getDate();


      /**
       * SP Data 초기 세팅
       */
      let spObj = SpInitialData;
      spObj.so = targetObj;
      // console.log("SpInitialData +++ ");
      // console.log(spObj);
      //
      // console.log(targetObj);

      // SO 생성
      firebase.database().ref('so').update({
        [targetObj.key]: targetObj
      }).then((data) => {
        console.log('SO 추가 완료');
        // SP 생성
        firebase.database().ref('sp').update({
          [targetObj.key]: spObj
        }).then((data) => {
          console.log('SP 추가 완료 (Initial Data)');
          this.fetchFirebaseData();
        });
      });

      /**
       * 모달 닫기
       */
      this.addModal = false;
    },
    deleteItem($event) {
      // console.log($event);
      const targetInput = $event.target.getElementsByTagName('input');
      let targetKey = '';
      /**
       * 입력항목 추가
       */
      for(let i=0; i<targetInput.length;i++){
        if(targetInput[i].checked == true){
          targetKey = targetInput[i].value;
          targetInput[i].checked = false;
        }
      }

      console.log('삭제 targetKey :: ' + targetKey);

      if(targetKey){

        /**
         * DB에서 제거
         */
        // so db에서 삭제
        firebase.database().ref('so/'+targetKey).remove().then((data)=>{
          console.log('SO 삭제 완료');
          // sp db에서 삭제
          firebase.database().ref('sp/'+targetKey).remove().then((data)=>{
            console.log('SP 삭제 완료');
            this.fetchFirebaseData();
          });
        });

      }else{
        alert('데이터베이스에서 해당하는 SO 정보를 찾을 수 없습니다.');
      }

      /**
       * 모달 닫기
       */
      this.deleteModal = false;
    }
  },
  created(){
    this.fetchFirebaseData();
  }
}
</script>

<style scoped>
.card-body >>> table > tbody > tr > td {
  cursor: pointer;
  text-align: center;
}
.card-body >>> table > tbody > tr > td > a {
  text-decoration: none;
}
.card-body >>> table > thead > tr > th {
  text-align: center;
}
.modal_delete li{
  list-style: none;
}
</style>
