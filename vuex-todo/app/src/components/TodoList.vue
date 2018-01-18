<template>
  <ul class="tasks">
    <li v-for="todo in todos" :key="todo.id"
      :class="{completed: todo.completed}"
      class="task"
      @click="toggleTodo(todo.id)"
      @dblclick="deleteTodo(todo.id)">{{todo.task}}</li>
  </ul>
</template>

<script>
export default {
  name: 'todo-list',
  computed: {
    todos () {
      return this.$store.getters.getTodos
    }
  },
  methods: {
    toggleTodo: function (id) {
      this.$store.dispatch('toggleTodo', id)
    },
    deleteTodo: function (id) {
      this.$store.dispatch('deleteTodo', id)
    }
  }
}
</script>
