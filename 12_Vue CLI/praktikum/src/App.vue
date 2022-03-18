<template>
  <div id="app">
    <p v-if="toDoList.length == 0">Data Masih Kosong!</p>
    <ol>
      <li v-for="(list, index) in toDoList" :key="list">
        {{ list }} <button v-on:click="deleteArray(index)">Hapus</button>
      </li>
    </ol>
    <input type="text" v-model = message v-on:keyup.enter="addArray(message)">
        <button v-on:click="addArray(message)">Tambahkan</button>
        <p v-if="toDoList.length >= 4">Hebat!</p>
  </div>
</template>

<script>
  export default{
    el: '#app',
    data() {
      return{
        message :"",
        toDoList : []
      }
    },
    methods: {
      addArray(message){
        if (message == "") {
          alert("Data yang anda masukkan kosong. Isi dengan benar!")
        }
        else{
          this.toDoList.push(message)
          this.message = ""
        }
      },

      deleteArray(message){
        this.toDoList.splice(message, 1)
      }
    }
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  margin-top: 60px;
}
</style>
