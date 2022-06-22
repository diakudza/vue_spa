<template>
  <div class="back" @click.self="$emit('showModal')">
    <div class="box glass-box">
      <button class="btn coloure-green" @click="$emit('showModal')">X</button>
      <input type="text" v-model="email" name="email" placeholder="email">
      <input type="text" v-model="password" name="password" placeholder="password">
      <p v-show="loginFail">Не верный логин или пароль</p>
      <button class="btn bottom coloure-green" @click="$emit('logIn', { email: this.email, password: this.password})">LOGIN</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'modal-login',
  data() {
    return {
      email: '',
      password: '',
      loginFail: false,
    }
  },
  methods: {}
}
</script>

<style scoped>
.bottom {
  align-self: flex-end;
}
.box {
  padding: 10px;
  align-self: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 300px;
  height: 100px;
}

.back {
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: fixed;
  left: 0px;
  right: 0px;
  top: 0px;
  bottom: 0px;
  /*background: rgb(0, 0, 0, 70%);*/
  backdrop-filter: blur(5px);
}
.box-enter-active {
  animation: box 0.5s;
}
.box-leave-active {
  animation: box 0.5s reverse;
}

@keyframes box {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}
</style>
