<template>
  <div class="table " >
    <div v-for="val in table" :key="val.id" class="tr glass-box">
      <div class="table-title">
        <div class="title">{{ val.id }}</div>
        <div class="title">{{ val.title }}</div>
        <div class="">{{ val.created_at.slice(0,-11) }}</div>
      </div>
      <div class="">
        {{ val.text }}
      </div>
      <button v-show="$store.state.user.isAuth" class="btn coloure-green" @click="$emit('removeRecord', val.id)">удалить</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'table-list',
  props: {
    table: {
      type: Array
    },
  },
}
</script>

<style scoped>
.table {
  padding: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 10px;
}
.tr {
  display: flex;
  flex-direction: column;
  align-self: center;
  gap: 10px;
  min-width: 300px;
  max-width: 900px;
  justify-content: space-between;
  /*border: 1px solid purple;*/
  padding: 10px;
  /*border-radius: 5px;*/
}
.table-title {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.date {
  max-width: 200px;
}
.title {
  overflow: hidden;
  text-align: start;
}
button {
  align-self: end;
  border-radius: 0 0 5px 0;
}

</style>
