'use strict'

module.exports = (state, emitter) => {
  state.todos = state.todos || []
  emitter.on('addTodo', (todo) => {
    state.todos.push(todo)
    emitter.emit('render')
  })
}
