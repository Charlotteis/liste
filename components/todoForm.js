'use strict'

const html = require('choo/html')

const todoList = require('./todoList')
const shortid = require('shortid')

module.exports = (state, emit) => {
  return html`
    <body>
      <h1>What shall we do?</h1>
      <form action='' onsubmit=${(e) => addTodo(e, emit)}>
        <label for='todo'>Todo</label>
        <input type='text' id='todo' value=''/>
        <button type='submit'>Add todo</button>
      </form>
      ${todoList(state, emit)}
    </body>
  `
}

module.exports._addTodo = addTodo
function addTodo (e, emit, id = shortid.generate()) {
  e.preventDefault()
  const todo = {
    'id': id,
    'todo': e.target.todo.value
  }
  emit('addTodo', {todo})
}
