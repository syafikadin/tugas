<template>
  <v-container>
    <!-- <h1 class="text-center mb-6">Welcome Bro</h1> -->
    <v-row>
      <v-col>
        <h2 class="text-center mb-4">My Todolist</h2>
        <h3>Filter :</h3>
        <div>
          <v-text-field v-model="inputId" label="Search By ID"></v-text-field>
        </div>
        <v-simple-table dark class="mt-6">
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">
                  ID
                </th>
                <th class="text-left">
                  Title
                </th>
                <th></th>
                <th></th>
                <th class="text-left">
                  isDone?
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-if="$apollo.loading">Loading ...</tr>
              <tr
                v-for="item in todoList"
                :key="item.id"
              >
                <td>{{ item.id }}</td>
                <td colspan="2">{{ item.title }}</td>
                <td></td>
                <td>{{ item.isDone }}</td>
                <td><v-btn small>Edit</v-btn></td>
                <td><v-btn small>Delete</v-btn></td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-col>
      
      <v-col class="createTodo">
        <h2 class="text-center">Create Todo</h2>
        <v-text-field label="Todo"></v-text-field>
        <v-text-field label="Title"></v-text-field>
        <v-btn block>Create</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import gql from 'graphql-tag'

export default {
  data(){
    return{
      todo: '',
      title: '',
      inputId: 3,
    }
  },

  apollo:{
    todoList(){
      if(this.inputId === ''){
        return {
          query: gql`
            query todoList {
              todoList {
              id
              title
              isDone
              }
            }
          `,
          update(data){
            return data.todoList;
          },
        }
      }

      else if(this.inputId === 3){
        return {
          query: gql`
            query todoList($id: Int){
              todoList(where: {id: {_eq: $id}}){
                id
                title
                isDone
              }
            }
          `,

          variables(){
            return {
              id: this.inputId
            }
          },

          update(data){
            return data.todoList;
          },
            
          }
        }
      }
  },


}
</script>