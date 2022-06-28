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

if (localStorage.getItem('token') === "undefined" ) {
  localStorage.clear();
}

const token = localStorage.getItem('token')

export default {

  components: {ModalLogin, HeaderTop},
  data() {
    return {
      showModal: false,
    }
  },

  methods: {
    async showLoginModal() {
      if (token != undefined) {
        await axios.get(`http://${store.state.main.host}/api/v1/me`,
            {
              headers: {
                Authorization: `Bearer ${token}`
              }
            })
            .then(response => (this.info = response))
            .catch(function (error) {
              console.log(error.response.data.errors)
            });
        this.fillUserStore(this.info.data)
      } else {
        this.showModal = !this.showModal
      }
    },
    async doLogin(data) {
      await axios.post(`http://${store.state.main.host}/api/v1/login`, {email: data.email, password: data.password})
          .then(response => (this.info = response))
          .catch(function (error) {
            console.log(error.response.data.errors)
            store.commit('user/setLoginFail', error.response.data.errors)
          });
      if (this.info.data.login == 'true') {
        this.fillUserStore(this.info.data)
        this.showModal = false
      } else {
        store.commit('user/setLoginFail', true)
      }
    },
    async logout() {
      await axios.post(`http://${store.state.main.host}/api/v1/logout`)
          .then(response => (this.info = response));
      this.clearUserStore();
      this.$router.push('/')
    },
    fillUserStore(data) {
      this.$store.commit('user/setIsAuth', true)
      this.$store.commit('user/setEmail', data.profile.email)
      this.$store.commit('user/setLogin', data.profile.login)
      this.$store.commit('user/setProfile', data.profile)
      this.$store.commit('user/setLoginFail', false)
      this.$store.commit('user/setToken', data.token)
      localStorage.setItem('token', data.token);
    },
    clearUserStore() {
      this.$store.commit('user/setLogin', '')
      this.$store.commit('user/setProfile', [])
      this.$store.commit('user/setEmail', '')
      this.$store.commit('user/setIsAuth', false)
      this.$store.commit('user/setToken', '')
      localStorage.removeItem('token');
      localStorage.clear();

    }

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

.wrap {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
}

</style>
