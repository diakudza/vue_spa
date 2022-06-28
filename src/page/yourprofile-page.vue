<template>
  <div>
    <div class="wrap glass-box">
      <div>name: <input type="text" v-model="profile.name" placeholder="name"></div>
      <div>email:<input type="email" v-model="profile.email" placeholder="email"></div>
      <div>phone:<input type="tel" v-model="profile.phone" placeholder="phone"></div>
      <br>
      <button @click="putProfile">Update</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import store from "@/store";

export default {
  data() {
    return {
      profile: this.$store.state.user.profile
    }
  },
  methods: {
    goToMain() {
      if (!this.$store.state.user.isAuth) {
        this.$router.push('/')
      }
    },
    async putProfile() {
      await axios.put(`http://${store.state.main.host}/api/v1/profile`, {
            id: this.profile.id,
            name: this.profile.name,
            email: this.profile.email,
            phone: this.profile.phone
          },
          {headers: {Authorization: `Bearer ${store.state.user.token}`}})
      ;
    }
  },
  mounted() {
    this.goToMain()
  }
}
</script>

<style scoped>
.wrap {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}
</style>
