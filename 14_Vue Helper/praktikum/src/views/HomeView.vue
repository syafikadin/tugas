<template>
  <div class="home">
    <h1>To Do List</h1>
    <p v-if="toDoList.length == 0">Data Masih Kosong!</p>

    <table>
        <tr v-for="(list, index) in toDoList" :key="list">
            <td colspan="4" style="width: 200px;">{{ index + 1 }}. <router-link class="listItem" @click="getIndex(index,list)" :to="'/deskripsi/id' + index">{{ list }}</router-link></td>
            <td><button class="button buttonHapus" @click="deleteToDoList(index)">Hapus</button></td>
            <td><button class="button buttonEdit" @click="getIndex(index, list)">Edit</button></td>
        </tr>

        <tr>
            <td colspan="4"><input type="text" v-model="message" style="width: 400px;"></td>
            <td>
                <div v-if="modeEdit">
                    <button @click="updateIndex(message)">Perbarui</button>
                </div>

                <div v-else>
                    <button v-on:click="addToDoList(message)" class="buttonUtama">Tambahkan</button>
                </div>
            </td>
        </tr>
    </table>

    <p v-if="toDoList.length >= 4">Hebat!</p>

  </div>
</template>

<script>

export default {
    computed: {
        toDoList(){
            return this.$store.state.toDoList
        }
    },
    data(){
        return {
            message: "",
            modeEdit: false,
        }
    },
    methods: {
        addToDoList(){
            this.$store.dispatch('addToDoList', this.message)
            this.message = ''
        },
        deleteToDoList(message){
            this.$store.dispatch('deleteToDoList', message)
        },
        getIndex(index, message){
            this.modeEdit = true
            this.message = message
            this.$store.dispatch('getIndex', index)
        },
        updateIndex(index, message){
            this.$store.dispatch('updateIndex', index, message)
            this.message = ''
            this.modeEdit = false
        }
    },
}
</script>

<style>
*{
    color: #2c3e50;;
}

.listItem{
    text-decoration: none;
}

button{
    width: 80px;
    height: 30px;
}

</style>