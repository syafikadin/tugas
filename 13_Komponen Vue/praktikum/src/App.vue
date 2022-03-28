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

      <div v-if="isEdit">
        <button @click="updateArray(message)">Perbarui</button>
      </div>

      <div v-else>
        <button v-on:click="addArray(message)" class="buttonUtama">Tambahkan</button>
      </div>

      <p v-if="toDoList.length >= 4">Hebat!</p>

    </table>

  </div>
</template>

<script>

// import CompButtonTambah from '@components/CompButtonTambah.vue'

export default {
  name: 'App',
  components: {
    // CompButtonTambah
  },
  data() {
    return{
      message :"",
      newmessage : "",
      toDoList : [],
      isEdit : false,
      indexKe : null,
      listTes: []
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
      this.isEdit = true
      this.message = message
      this.indexKe = index
    },

    updateArray(message){
      this.toDoList.splice(this.indexKe, 1, message)
      this.isEdit = false
      this.message = ""
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

li button {
  margin-right: 10px;
  width: 50px;
  height: 30px;
}
</style>
