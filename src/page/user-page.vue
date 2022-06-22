<template>
  <div>
    <h3>User profile page</h3>
    <input type="text" v-model="profile.name" placeholder="name">
    <input type="text" v-model="profile.email" placeholder="email">
    <input type="text" v-model="profile.phone" placeholder="phone">
    <button @click="putProfile">Update</button>
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

      })
      ;
    }
  },
  mounted() {
    this.goToMain()
  }
}
</script>

<style scoped>

</style>
