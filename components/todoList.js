'use strict'

const html = require('choo/html')

module.exports = (state, emit) => {
  if (state.todos) {
    return html`
      <ul>
        ${getTodos(state.todos)}
      </ul>
    `
  }
}

module.exports._getTodos = getTodos
function getTodos (todos) {
  return todos.map((todo) => {
    return html`<li>${todo}</li>`
  })
}
