<template>
  <div class="header">

    <router-link class="btn" to="/">Home</router-link>
    <router-link class="btn" to="/news">News</router-link>
    <router-link class="btn" to="/feedback">Feedback</router-link>
    <router-link class="btn" v-show="$store.state.user.isAuth" to="/user">Users</router-link>

    <button v-show="$store.state.user.isAuth" class="btn coloure-green brl brr" @click="$emit('logOut')">{{ $store.state.user.profile.name }}</button>
    <button v-show="!$store.state.user.isAuth" class="btn coloure-green brl brr" @click="$emit('showLogin')">LOGIN</button>
  </div>
</template>

<script>
export default {
  name: 'Header-top',
}
</script>

<style scoped>

</style>
