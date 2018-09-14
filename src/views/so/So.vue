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
          <template slot="status" slot-scope="data">
            <b-badge :variant="getBadge(data.item.status)">{{data.item.status}}</b-badge>
          </template>
        </b-table>
        <nav>
          <b-pagination size="sm" :total-rows="getRowCount(items)" :per-page="perPage" v-model="currentPage" prev-text="Prev" next-text="Next" hide-goto-end-buttons/>
        </nav>
      </b-card>
      </transition>
    </b-col>
  </b-row>
</template>

<script>
import soData from './SoData'
export default {
  name: 'So',
  props: {
    caption: {
      type: String,
      default: 'So'
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
      items: soData.filter((user) => user.id < 42),
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
    getBadge (status) {
      return status === 'Active' ? 'success'
        : status === 'Inactive' ? 'secondary'
          : status === 'Pending' ? 'warning'
            : status === 'Banned' ? 'danger' : 'primary'
    },
    getRowCount (items) {
      return items.length
    },
    userLink (key) {
      return `so/${key.toString()}`
    },
    rowClicked (item) {
      const userLink = this.userLink(item.key)
      this.$router.push({path: userLink, query:{ spName:item.spName}})
    }

  }
}
</script>

<style scoped>
.card-body >>> table > tbody > tr > td {
  cursor: pointer;
}
</style>
