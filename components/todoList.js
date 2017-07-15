'use strict'

const html = require('choo/html')

module.exports = (state, emit) => {
  if (state.todos) {
    return html`
      <ul>
        ${getTodos(state.todos, emit)}
      </ul>
    `
  }
}

module.exports._getTodos = getTodos
function getTodos (todos, emit) {
  let html = []
  for (const key in todos) {
    html.push(html`
      <li data-id='${key}'>
        ${todos[key].todo}
        <button onclick=${(e) => deleteTodo(e, emit, key)}>Delete</button>
      </li>`)
  }

  return html
}

module.exports._deleteTodo = deleteTodo
function deleteTodo (e, emit, id) {
  emit('deleteTodo', id)
}
