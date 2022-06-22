<template>
  <div class="body">
    <HeaderTop @show-login="showLoginModal" @log-out="logout"/>
    <router-view></router-view>
    <ModalLogin @show-modal="showLoginModal" @log-in="doLogin" v-show="showModal"/>
  </div>
</template>

<script>

import HeaderTop from '@/components/Header'
import ModalLogin from "@/components/ModalLogin";
import axios from "axios";
import store from "../../../../../home/user/work/vuetest/src/store";
// import {mapState} from "vuex";

export default {
  components: {ModalLogin, HeaderTop},
  data() {
    return {
      showModal: false,
    }
  },
  methods: {
    showLoginModal() {
      this.showModal = !this.showModal
    },
    async doLogin(data) {

      await axios.post(`http://${store.state.main.host}/api/v1/login`, {email: data.email, password: data.password})
          .then(response => (this.info = response))
          .catch(function (error) {
            console.log(error.response.data.errors)
          });
      if (this.info.data.login == 'true') {
        this.$store.commit('user/setIsAuth', true)
        this.$store.commit('user/setEmail', this.info.data.profile.email)
        this.$store.commit('user/setLogin', this.info.data.profile.login)
        this.$store.commit('user/setProfile', this.info.data.profile)
        this.$store.commit('user/loginFail', false)
        this.showModal = false
      } else {
        this.$store.commit('user/loginFail',true)
      }
    },
    async logout() {
      await axios.post(`http://${store.state.main.host}/api/v1/logout`)
          .then(response => (this.info = response));
      this.$store.commit('user/setLogin', '')
      this.$store.commit('user/setProfile', [])
      this.$store.commit('user/setEmail', '')
      this.$store.commit('user/setIsAuth', false)
    },
  }
}
</script>

<style>
* {
  margin: 0px;
  padding: 0px;
  text-align: center;
}

.body {
  flex-direction: column;
  align-items: center;
  display: flex;
}

.input {
  border: 1px inset;
  height: 100%;
  outline: 0;
  max-width: 50px;
}

.btn {
  border: none;
  color: white;
  padding: 5px 5px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
}

.coloure-green {
  background: rgba(12, 179, 28, 0.5);
}

.glass-box {
  background: rgba(12, 179, 28, 0.25);
  box-shadow: 0 8px 20px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(12.5px);
  -webkit-backdrop-filter: blur(12.5px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
}

.brl {
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
}

.brr {
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
}
</style>
