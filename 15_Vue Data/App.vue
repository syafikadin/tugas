<template>
  <div id="app">
    <h1>News Terkini</h1>
    <ol>
      <div class="barNews">
        <li v-for="(itemNews, index) in news" :key="index">
          <img :src="itemNews.urlToImage">
          <p>{{ itemNews.author }}</p>
          <p v-if="news[index].author === null">Anonym</p>
          
          <p>{{ itemNews.title  }}</p>
          
          <p>{{ itemNews.publishedAt  }}</p>
          <br><br>
          <!-- {{ itemNews.title }} -->
        </li>
      </div>
    </ol>
  </div>
</template>

<script>

export default {
  name: 'App',
  computed: {
    news(){
      return this.$store.state.listNews
    },
  },
  mounted() {
    this.$store.dispatch('fetchNews')
  }
}
</script>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}

.barNews{
  /* background-color: rgb(166, 182, 212);*/
}

li{
  list-style: none;
}
</style>
