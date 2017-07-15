/* globals localStorage */

'use strict'

module.exports = (state, emitter) => {
  const todos = localStorage.getItem('todos') ? localStorage.getItem('todos').split(',') : []
  state.todos = todos || []
  emitter.on('addTodo', (todo) => {
    state.todos.push(todo)
    localStorage.setItem('todos', state.todos)
    emitter.emit('render')
  })
}
