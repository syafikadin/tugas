<template>
  <div id="app">

    <table width=100% border="1">
      <h1>Todo List</h1>
      <p v-if="toDoList.length == 0">Data Masih Kosong!</p>

      <!-- Tampil Data -->
      <ol>
        <li v-for="(list, index) in toDoList" :key="list">
          {{ list }}
          <button class="buttonHapus" v-on:click="deleteArray(index)">Hapus</button>
          <button class="buttonEdit" @click="showArray(index, list)">Edit</button>
        </li>
      </ol>

      <input type="text" v-model = message v-on:keyup.enter="addArray(message)" width="40%">

    <!-- Mode Input -->
      <div v-if="isEdit == false">
        <button v-on:click="addArray(message)" class="buttonUtama">Tambahkan</button>
      </div>

      <p v-if="toDoList.length >= 4">Hebat!</p>

    <!-- Mode Edit -->
      <div v-if="isEdit == true">
        <button @click="updateArray(message)">Perbarui</button>
        <button>Batal</button>
      </div>
    </table>

  </div>
</template>

<script>

export default {
  name: 'App',
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
  margin: 10px;
  color: rgb(15, 15, 83);
}

table{
  padding: 20px;
}


.buttonHapus{
  /* background-color: rgb(206, 80, 80); */
  /* color: white; */
}

.buttonEdit{
  /* background-color: rgb(46, 61, 196); */
  /* color: white; */
}

li button {
  margin-right: 10px;
  width: 50px;
  height: 30px;
}
</style>
