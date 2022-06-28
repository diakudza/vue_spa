<template>
  <div>
    <div class="wrap glass-box">
      <div>name: <input type="text" v-model="this.name" placeholder="name"></div>
      <div>email:<input type="email" v-model="this.email" placeholder="email"></div>
      <div>phone:<input type="tel" v-model="this.phone" placeholder="phone"></div>
      <div>created at:<input type="data" v-model="this.created_at" placeholder="created_at"></div>
      <div>avatar:<input type="text" v-model="this.avatar" placeholder="avatar"></div>
      <br>
<!--      <button @click="putProfile">Update</button>-->
    </div>
  </div>
</template>

<script>
import axios from "axios";
import store from "@/store";

export default {
  data() {
    return {
      id: this.$route.params.id,
      name: '',
      email: '',
      phone: '',
      created_at: '',
      avatar: '',
    }
  },
  methods: {
    goToMain() {
      if (!this.$store.state.user.isAuth) {
        this.$router.push('/')
      }
    },
    async putProfile(){
      await axios.get(`http://${store.state.main.host}/api/v1/user/${this.id}`,
          {headers: {Authorization: `Bearer ${store.state.user.token}`}})
          .then(response => (this.info = response));
      console.log(this.info)
      this.name = this.info.data.name
      this.email = this.info.data.email
      this.phone = this.info.data.phone
      this.created_at = this.info.data.created_at
      this.avatar = this.info.data.avatar
    }

  },
   mounted(){
    this.goToMain()
    this.putProfile()
  }
}
</script>

<style scoped>

</style>
