<template>
  <div class="header">
    <div>
      <button class="btn coloure-green" @click="addLine">Своя</button>
      <input class="input" type="text" v-model="valForTable">
    </div>
    <div>
      <button class="btn coloure-green brl" @click="getNews">Получить новости</button>
      <input class="input brr" type="text" v-model="textValue" @input="check">
    </div>
  </div>

  <TableList :table="table" @remove-record="removeRecord"/>

</template>

<script>

import TableList from "@/components/TableList";
import axios from "axios";
import store from "@/store";

export default {
  components: {TableList},

  data() {
    return {
      value: 0,
      textValue: 0,
      valForTable: '',
      table: [],
      info: ''
    }
  },
  // computed: {
  //   auth() {
  //     // eslint-disable-next-line vue/no-side-effects-in-computed-properties
  //     return this.isAuth = (this.login !== '') ? true : false
  //   }
  // },
  methods: {

    async getNews() {
      let count = (this.textValue == 0) ? 'all' : this.textValue;
      await axios.get(`http://${store.state.main.host}/api/v1/news`, {params: {count: count}})
          .then(response => (this.info = response));
      this.table = this.info.data
    },
    check() {
      if (isNaN(this.textValue)) {
        this.textValue = this.textValue.slice(0, -1)
        alert('только числа!!')
      }
    },
    addLine() {
      let date = new Date();
      let newString = {
        'id': Date.now(),
        'title': this.valForTable,
        'date': date.toLocaleString()
      }
      this.table.push(newString)
    },
    async removeRecord(id) {
      await axios.delete(`http://${store.state.main.host}/api/v1/news`,
          {
            params: {id: id},
            headers: { Authorization : `Bearer ${store.state.user.token}`}
          })
          .then(response => (this.info = response));
      for (let [key] in this.table) {
        if (this.table[key].id == id) {
          this.table.splice(key, 1);
        }
      }
    }
  }

}
</script>

<style>


.header {
  align-content: center;
  width: 90%;
  min-width: 320px;
  padding: 3px;
  border-bottom: 1px solid rgb(0, 0, 0, 10%);
  display: flex;
  justify-content: space-between;
}

</style>
