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
  let htmlList = []
  for (const key in todos) {
    htmlList.push(html`
      <li data-id="${todos[key]['id']}">
        ${todos[key]['todo']}
        <button onclick=${(e) => deleteTodo(e, emit, todos[key]['id'])}>Delete</button>
      </li>`)
  }

  return htmlList
}

module.exports._deleteTodo = deleteTodo
function deleteTodo (e, emit, id) {
  emit('deleteTodo', id)
}
