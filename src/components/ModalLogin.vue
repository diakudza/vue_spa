<template>
  <div class="back" @click.self="$emit('showModal')" >
    <div class="box">
      <p>
        {{ value*212 }}
      </p>
      <button @click="$emit('showModal')">UP</button></div>
  </div>
</template>

<script>
export default {
  name: 'modal-test',
  props: {
    value: Number
  },
  methods: {
    showModal() {

    }
  }
}
</script>

<style>
.box {
  padding: 10px;
  align-self: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 300px;
  height: 200px;
  background: #b88a8a;
  border-radius: 10px;
  box-shadow: black;
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
  /*background: red;*/
  background: rgb(0, 0, 0, 70%);
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
