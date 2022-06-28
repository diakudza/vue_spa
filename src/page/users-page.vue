<template>

  <div>
    <h3>List of users</h3>
    <table v-show="this.$store.state.main.usersList">
      <tr>
        <th>id</th>
        <th>name</th>
        <th>email</th>
        <th>created at</th>
      </tr>
      <tr v-for="item in this.$store.state.main.usersList" :key="item" class="border-bottom">
         <td>
          {{ item.id }}
        </td>
        <td>
          <router-link :to="{name: 'users', params: {id: item.id}} ">{{ item.name }}</router-link>
        </td>
        <td>
          {{ item.email }}
        </td>
        <td>
          {{ item.created_at }}
        </td>
      </tr>
    </table>

  </div>
</template>

<script>
import axios from "axios";
import store from "@/store";

export default {
  data() {
    return {

    }
  },
  methods: {
    goToMain() {
      if (!this.$store.state.user.isAuth) {
        this.$router.push('/')
      }
    },
    async getNews() {
      let count = (this.textValue == 0) ? 'all' : this.textValue;
      await axios.get(`http://${store.state.main.host}/api/v1/users`,
          {
            params: {count: count},
            headers: {Authorization: `Bearer ${store.state.user.token}`}
          })
          .then(response => (this.info = response));

      this.$store.commit('main/setUsersList', this.info.data)
    },
  },
  mounted() {
    this.goToMain()
    this.getNews()
  }
}
</script>

<style scoped>
 tr {
   background: rgba(132, 189, 189, 0.81);
   color: #fff;
 }
 tr:nth-child(1) {
   background: #666;
 }
 tr:nth-child(even) {
   background: rgba(102, 102, 102, 0.78);
 }
 .border-bottom {
  border-bottom: 1px solid rgba(0, 0, 0, 0.62);
}

</style>
