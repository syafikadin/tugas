import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import createPersistateState from 'vuex-persistedstate'

Vue.use(Vuex)

const persistedState = createPersistateState({
  paths: ["listNews"]
})

export default new Vuex.Store({
  plugins: [persistedState],
  state: {
    listNews: []
  },
  mutations: {
    setListNews(state, payload){
      state.listNews = payload
    }
  },
  actions: {
    fetchNews(store){
      axios.get("https://newsapi.org/v2/everything?q=Apple&from=2022-03-29&sortBy=popularity&apiKey=c7d465fddb28475881ccd0ba8642c64b").then((response) => {
        console.log("response", response)
        store.commit("setListNews", response.data.articles)
      })
    }
  },
  modules: {
  }
})
