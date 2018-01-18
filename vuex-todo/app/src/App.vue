<template>
  <div class="app">
    <form @submit.prevent='addTodo'>
      <input class='todo-input' type='text' placeholder='Enter a new Task' v-model='task' />
    </form>
    <todo-list />
  </div>
</template>

<script>
import store from './store'
import TodoList from './components/TodoList.vue'

export default {
  name: 'App',
  components: { TodoList },
  data: () => ({
    task: '',
    newId: 3
  }),
  methods: {
    addTodo: function () {
      this.$store.dispatch('addTodo', this)
      this.newId++
      this.task = ''
    }
  },
  store: store
}
</script>

<style>
.todo-input {
  width: 100%;
  padding: 0.5rem;
  font-size: 1rem;
  outline: none;
  border-radius: 0.25rem;
  border-style: none;
  border: solid 1px lightgray;
  box-sizing: border-box;
}
</style>
