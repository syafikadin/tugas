<template>
    <ol>
        <li v-for="(list, index) in toDoList" :key="list">
            {{ list }}
            <button class="buttonHapus" v-on:click="deleteArray(index)">Hapus</button>
            <button class="buttonEdit" @click="showArray(index, list)">Edit</button>
        </li>
    </ol>
</template>

<script>
export default {
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
}
</script>

<style>

</style>