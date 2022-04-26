<template>
  <v-container>
    <!-- <h1 class="text-center mb-6">Welcome Bro</h1> -->
    <v-row>
      <v-col>
        <h2 class="text-center mb-4">My Todolist</h2>
        <h3>Filter :</h3>
        <div>
          <v-text-field v-model="inputId" label="Search By ID" type="number"></v-text-field>
        </div>
        <v-simple-table dark class="mt-6">
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-center">
                  ID
                </th>
                <th class="text-center">
                  Title
                </th>
                <th></th>
                <th></th>
                <th class="text-center">
                  Status?
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-if="$apollo.loading">Loading ...</tr>
              <tr
                v-for="item in todoList" :key="item.id"
              >
                <td>{{ item.id }}</td>
                <td colspan="2">{{ item.title }}</td>
                <td></td>                
                <td>{{ item.isDone ? 'Sudah' : 'Belum' }}</td>
                <td><v-btn small @click="changeModeEdit(item.id)">Edit</v-btn></td>
                <td><v-btn small @click="deleteTodo(item.id)">Delete</v-btn></td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-col>
      
      <v-col class="createTodo">
        <h2 class="text-center mt-11">Create Todo</h2>
        <form @submit.prevent="createTodo">
          <v-text-field v-model="newTitle" label="Title" required></v-text-field>
          <v-btn block type="submit">Create</v-btn>
        </form>
        <div v-if="modeEdit === true">
          <h2 class="text-center mt-16">Edit Todo</h2>
          <form @submit.prevent="updateTodo">
            <v-text-field v-model="editTitle" label="Title Baru" required></v-text-field>
            <v-radio-group v-model="editStatus" row>
              <v-radio label="Sudah" :value="true"></v-radio>
              <v-radio label="Belum" :value="false"></v-radio>
            </v-radio-group>
            <v-btn block type="submit">Update</v-btn>
          </form>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import gql from 'graphql-tag'

export default {
  data(){
    return{
      newTitle: '',
      inputId: '',
      indexId: '',
      modeEdit: false,
      editTitle: '',
      editStatus: false
    }
  },

  apollo:{
    todoList: {
      query(){
        if(this.inputId === '0' || this.inputId === ''){
          return gql`
              query todoList {
                todoList {
                  id
                  title
                  isDone
                }
              }
            `
        } else {
          return gql`
              query todoList($id: Int){
                todoList(where: {id: {_eq: $id}}){
                  id
                  title
                  isDone
                }
              }
            `
          }
      },
      variables(){
        if (this.inputId === '0' || this.inputId === '') {
          return{}
        } else {
          return {
            id: this.inputId
          }
        }
      },

      update(data){
        return data.todoList;
      },
    }
  },
  methods: {
    createTodo() {
      this.$apollo.mutate({
        mutation: gql`
          mutation createTodo($title: String) {
            insert_todoList(objects: {title: $title}) {
              returning {
                id
                isDone
                title
              }
            }
          }
        `,
        variables: {
          title: this.newTitle
        }
      })
      this.newTitle = ''
    },

    changeModeEdit(inputId) {
      this.modeEdit = true
      this.indexId = inputId
    }, 

    deleteTodo(inputId){
      this.$apollo.mutate({
        mutation: gql`
          mutation deleteTodo($id: Int!) {
            delete_todoList(where: {id: {_eq: $id}}) {
              returning {
                id
                isDone
                title
              }
            }
          }
        `,
        variables: {
          id: inputId
        }
      })
    },

    updateTodo(){
      this.$apollo.mutate({
        mutation: gql`
          mutation MyMutation($_eq: Int!, $isDone: Boolean, $title: String) {
            update_todoList(where: {id: {_eq: $_eq}}, _set: {isDone: $isDone, title: $title}) {
              returning {
                id
                isDone
                title
              }
            }
          }
        `,
        variables: {
          _eq: this.indexId,
          title: this.editTitle,
          isDone: this.editStatus
        }
      })
      this.modeEdit = false
    }


  }

}
</script>