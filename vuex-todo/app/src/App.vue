<template>
  <div>
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
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
