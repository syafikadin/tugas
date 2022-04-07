import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import createPersistateState from 'vuex-persistedstate'

Vue.use(Vuex)

const persistedState = createPersistateState({

})

export default new Vuex.Store({
  plugins: [persistedState],
  state: {
    listNews: [],
    categories: '',
    // category: ["business", "entertainment", "general", "health", "science", "sports", "technology"]
  },
  mutations: {
    setListNews(state, payload){
      state.listNews = payload
    },
    setCategories(state, payload){
      state.categories = payload
    }
  },
  actions: {
    changeCategories(store, payload){
      store.commit("setCategories", payload)
    },
    fetchNews(store){
      axios.get("https://newsapi.org/v2/everything?q=" + this.state.categories + "&apiKey=c7d465fddb28475881ccd0ba8642c64b").then((response) => {
        console.log("response", response)
        store.commit("setListNews", response.data.articles)
      })
    }
  },
  modules: {
  }
})
