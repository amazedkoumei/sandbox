import Vue from 'vue'
import Vuex from 'vuex'
import { mutations } from './mutations'
import { actions } from './actions'

Vue.use(Vuex)

var state = {
  todos: [{
    id: 0,
    task: 'Buy food at the supermarket.',
    completed: false
  },
  {
    id: 1,
    task: 'Organize the living room.',
    completed: true
  },
  {
    id: 2,
    task: 'Read every class and tutorial on Sabe.io.',
    completed: false
  }]
}

var getters = {
  getTodos: state => state.todos
}

export default new Vuex.Store({
  state: state,
  getters: getters,
  mutations: mutations,
  actions: actions
})
