import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

const persistedstate = createPersistedState({
  paths: ["toDoList", "deskripsi"]
})

export default new Vuex.Store({
  plugins: [persistedstate],

  state: {
    toDoList: [],
    indexNumber: null,
    deskripsi: []
  },

  mutations: {
    setAddToDoList(state, payload){
      state.toDoList.push(payload)
      state.deskripsi.push('')
    },
    setDeleteToDoList(state, payload){
      state.toDoList.splice(payload, 1)
      state.deskripsi.splice(payload, 1)
    },
    setNumberIndex(state, payload){
      state.indexNumber = payload
    },
    setUpdateIndex(state, payload){
      state.toDoList.splice(state.indexNumber, 1, payload)
    },
    setUpdateDeskripsi(state, payload){
        state.deskripsi.splice(state.indexNumber, 1, payload)
    }
  },

  actions: {
    addToDoList(store, payload){
      store.commit('setAddToDoList', payload)
    },
    deleteToDoList(store, payload){
      store.commit('setDeleteToDoList', payload)
    },
    getIndex(store, payload){
      store.commit('setNumberIndex', payload)
    },
    updateIndex(store, payload){
      store.commit('setUpdateIndex', payload)
    },
    updateDeskripsi(store, payload){
      store.commit('setUpdateDeskripsi', payload)
    }
  }
})
