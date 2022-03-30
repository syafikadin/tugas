<template>
    <div class="detail">
        <img :src="itemNews[indexNumber].urlToImage" alt="">
        <h1>{{ itemNews[indexNumber].title }}</h1>
        <p>{{ itemNews[indexNumber].author }}</p>
        <p>{{ itemNews[indexNumber].publishedAt }}</p>
        <p>{{ itemNews[indexNumber].description }}</p>
        <p>Lanjutkan baca ke: <a :href="itemNews[indexNumber].url">Sini</a></p>
        <router-link to="/" class="buttonBack"><button>Kembali</button></router-link>
    </div>
</template>

<script>
export default {
    name: 'DetailView',
    computed: {
        indexNumber(){
            return this.$route.params.id.slice(2)
        },
        itemNews(){
            return this.$store.state.listNews
        }
    },
    methods: {
        getIndex(){

        }
    }
}
</script>

<style scoped>

h1{
    text-align: center;
}

.detail{
    margin: 5px;
}

img{
    width: 100%;
    height: auto;
}

button{
    width: 80px;
    height: 30px;
}
</style>