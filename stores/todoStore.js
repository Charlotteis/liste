'use strict'

module.exports = (state, emitter) => {
  state.todos = state.todos || {}
  emitter.on('addTodo', ({todo}) => {
    state.todos[todo.id] = todo
    emitter.emit('render')
  })

  emitter.on('deleteTodo', (id) => {
    delete state.todos[id]
    emitter.emit('render')
  })
}
