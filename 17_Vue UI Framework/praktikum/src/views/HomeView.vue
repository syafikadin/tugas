<template>
  <v-app>
    <div class="home">
    <h1>Berita Terkini</h1>
      <div class="container" v-for="(itemNews, index) in news" :key="index">
        <router-link :to="'/detail/id' + index">
          <div class="barNews">
              <v-img :src="itemNews.urlToImage" />
              <p><b>{{ itemNews.author }}</b></p>
              <p v-if="news[index].author === null"><b>Anonym</b></p>
              <p><b>{{ itemNews.title }}</b></p>
              <p>{{ itemNews.publishedAt  }}</p>
          </div>
        </router-link>
      </div> 
    </div>
  </v-app>
</template>

<script>

export default {
  data: () => ({
      drawer: false,
      group: null,
      message: ''
    }),
  name: 'HomeView',
  computed: {
    news(){
      return this.$store.state.listNews
    },
  },
  mounted() {
    this.$store.dispatch('fetchNews')
  },
}
</script>

<style scoped>

*{
  margin: 0;
  padding: 0;
}

h1{
  text-align: center;
}

.home{
  width: 95%;
  padding: 25px;
  margin: 20px auto;
}

.barNews{
  background-color: rgb(123, 195, 197);
  margin: 20px 0;
  padding: 20px;
}

a{
  text-decoration: none;
  color: rgb(3, 43, 44);
}

p{
  margin: 10px 0;
}
</style>
