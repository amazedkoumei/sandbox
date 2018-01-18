export const actions = {
  addTodo: (context, payload) => {
    context.commit('ADD_TODO', payload)
  },
  toggleTodo: (context, payload) => {
    context.commit('TOGGLE_TODO', payload)
  },
  deleteTodo: (context, payload) => {
    context.commit('DELETE_TODO', payload)
  }
}
