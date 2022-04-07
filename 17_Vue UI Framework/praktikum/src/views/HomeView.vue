<template>
  <v-app>
    
    <v-app-bar
      color="primary"
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>App News</v-toolbar-title>

      <v-spacer></v-spacer>
      
      <v-text-field v-model = message></v-text-field>

      <v-btn icon @click="changeCategories(message)">
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      bottom
      temporary
      color="#2596be"
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
        
          <!-- <v-list-item>
            <v-list-item-title @click="changeCategories('Football')" class="newsItem">Football</v-list-item-title>
          </v-list-item>
            
          <v-list-item>
            <v-list-item-title @click="changeCategories('Car')"  class="newsItem">Car</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title @click="changeCategories('Technology')" class="newsItem">Technology</v-list-item-title>
          </v-list-item> -->

          <v-list-item v-for="(list, index) in category" :key="index">
            <v-list-item-title class="text-capitalize" @click="changeCategories(list)">{{ list }}</v-list-item-title>
          </v-list-item>

        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <div class="home">
    <h1>Berita Terkini</h1>
      <div class="container" v-for="(itemNews, index) in news" :key="index">
        <router-link :to="'/detail/id' + index">
          <div class="barNews">
              <v-img :src="itemNews.urlToImage" />
              <h1>{{ itemNews.title }}</h1>
              <p>{{ itemNews.description }}</p>
              <v-btn v-if="news[index].author === null"
                rounded
                class="text-capitalize"
              >
                Anonym
              </v-btn>

              <v-btn v-else
                rounded
                class="text-capitalize"
              >
                {{ itemNews.author }}
              </v-btn>
              <p> </p>
              <v-btn>Read More</v-btn>
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
      message: '',
      category: ["business", "entertainment", "general", "health", "science", "sports", "technology"]
    }),

    watch: {
      group () {
        this.drawer = false
      },
    },
    computed: {
      news(){
        return this.$store.state.listNews
      },
    },
    mounted() {
      this.$store.dispatch('fetchNews')
    },
    methods : {
      changeCategories(payload){
        this.$store.dispatch('changeCategories', payload)
        this.$store.dispatch('fetchNews')
      }
    }
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
