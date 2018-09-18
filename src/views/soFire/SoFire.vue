<template>
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
          <tr>마지막줄</tr>
        </b-table>
        <nav>
          <b-pagination size="sm" :total-rows="getRowCount(items)" :per-page="perPage" v-model="currentPage" prev-text="Prev" next-text="Next" hide-goto-end-buttons/>
          <!--<div class="float-right"><b-button @click="addSo" class="">Add</b-button></div>-->
        </nav>
      </b-card>
      </transition>
    </b-col>
  </b-row>
</template>

<script>
// import soData from './SoData'

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
        {key: 'registered'}
      ],
      currentPage: 1,
      perPage: 5,
      totalRows: 0
    }
  },
  computed: {

  },
  methods: {
    fetchFirebaseData(){
      console.log('fetchFirebaseData !!!!');
      firebase.database().ref('so').once('value')
        .then((data)=>{
          /**
           * 전체 Database Object
           */
          this.itemObj=data.val();
          console.log('itemObj ::');
          console.log(this.itemObj);
          /**
           * items array
           */
          for(let ikey in this.itemObj){
            this.items.push(this.itemObj[ikey]);
          }
          console.log('items ::');
          console.log(this.items);
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
    // addSo () {}
  },
  created(){
    this.fetchFirebaseData();
  }
}
</script>

<style scoped>
.card-body >>> table > tbody > tr > td {
  cursor: pointer;
}
</style>
