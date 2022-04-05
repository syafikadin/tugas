<template>
  <v-app>

    <v-app-bar
      color="primary"
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>App News</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
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
        
          <v-list-item v-for="(itemNews, index) in news" :key="index">
            <router-link :to="'/detail/id' + index">
              <v-container>
                <v-img :src="itemNews.urlToImage" width="30px" height="30px"/>
                <v-list-item-title class="newsItem">{{ itemNews.title.slice(0, 30) }}</v-list-item-title>
              </v-container>
            </router-link>
          </v-list-item>

        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>



    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
  export default {
    
    data: () => ({
      drawer: false,
      group: null,
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
    }
  }
</script>

<style scoped>
  .newsItem{
    color: white;
    text-decoration: none;
  }

</style>