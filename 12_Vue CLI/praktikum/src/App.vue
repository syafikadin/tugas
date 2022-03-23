<template>
  <div id="app">
    <p v-if="toDoList.length == 0">Data Masih Kosong!</p>

    <ol>
      <li v-for="(list, index) in toDoList" :key="list">
        {{ list }}
        <button v-on:click="deleteArray(index)">Hapus</button>
        <button @click="showArray(index, list)">Edit</button>
      </li>
    </ol>

    <input type="text" v-model = message v-on:keyup.enter="addArray(message)">

    <div v-if="isEdit == false">
      <button v-on:click="addArray(message)">Tambahkan</button>
    </div>

    <p v-if="toDoList.length >= 4">Hebat!</p>

    <div v-if="isEdit == true">
      <button @click="updateArray(message)">Perbarui</button>
      <button>Batal</button>
    </div>

    <p>{{ indexKe }}</p>
    
  </div>
</template>

<script>
  export default{
    el: '#app',
    data() {
      return{
        message :"",
        toDoList : [],
        isEdit : false,
        indexKe : null
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
        if(this.toDoList.length == 0){
          this.isEdit = false
        }
        this.message = ""
      },

      showArray(index, message){
        this.message = message
        this.isEdit = true
        this.indexKe = index
      },

      updateArray(message){
        this.toDoList.splice(this.indexKe, 1, message)
        this.isEdit = false
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
