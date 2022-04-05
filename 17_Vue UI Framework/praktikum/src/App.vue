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
        
          <v-list-item>
            <v-list-item-title @click="changeCategories('Football')" class="newsItem">Football</v-list-item-title>
          </v-list-item>
            
          <v-list-item>
            <v-list-item-title @click="changeCategories('Car')"  class="newsItem">Car</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title @click="changeCategories('Technology')" class="newsItem">Technology</v-list-item-title>
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
      message: ''
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
  .newsItem{
    color: white;
    text-decoration: none;
  }

</style>