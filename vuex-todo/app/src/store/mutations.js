export const mutations = {
  ADD_TODO: (state, payload) => {
    var newTask = {
      id: payload.newId,
      task: payload.task,
      completed: false
    }
    state.todos.unshift(newTask)
  },
  TOGGLE_TODO: (state, payload) => {
    var item = state.todos.find(todo => todo.id === payload)
    item.completed = !item.completed
  },
  DELETE_TODO: (state, payload) => {
    var index = state.todos.findIndex(todo => todo.id === payload)
    state.todos.splice(index, 1)
  }
}
