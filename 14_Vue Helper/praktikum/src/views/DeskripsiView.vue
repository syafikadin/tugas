<template>
    <div class="list">
        <router-link to="/"><button>Kembali</button></router-link>
        <h1>{{ toDoList[indexNumber] }}</h1>
        <p v-if="deskripsi[indexNumber] === ''">Belum Ada Deskripsi</p>
        <p v-else>{{ deskripsi[indexNumber] }}</p>
        <div v-if="modeEdit">
            <input type="text" v-model="newDeskripsi">
            <button @click="updateDeskripsi(newDeskripsi)">Simpan</button>
        </div>
        <div v-else>
            <button @click="getIndex(indexNumber, newDeskripsi)">Ubah Deskripsi</button>
        </div>
    </div>
</template>

<script>

export default {
    name: 'DeskripsiList',
    data() {
        return {
            newDeskripsi: "",
            modeEdit: false
        }
    },
    computed: {
        toDoList(){
            return this.$store.state.toDoList
        },
        indexNumber(){
            return this.$route.params.id.slice(2, 3)
        },
        deskripsi(){
            return this.$store.state.deskripsi
        }
    },
    methods: {
        getIndex(index, deskripsi){
            this.modeEdit = true
            this.newDeskripsi = deskripsi
            this.$store.dispatch('getIndex', index)
        },
        updateDeskripsi(index, deskripsi){
            this.$store.dispatch('updateDeskripsi', index, deskripsi)
            this.newDeskripsi= ""
            this.modeEdit = false
        }
    }
}
</script>

<style>
    button{
        width: 100px;
        height: 30px;
    }
</style>