'use strict'

const shortid = require('shortid')
const tap = require('tap')
const todoList = require('../../components/todoList')

tap.test('render task list html', (t) => {
  const todo = {
    '1234': {
      id: '1234',
      todo: 'Destroy Capitalism'
    }
  }
  const expectedHtml = '<li data-id="1234">Destroy Capitalism<button>Delete</button></li>'
  const actualHtml = todoList._getTodos(todo, {}).toString().replace(/\n\s+/g, '')

  t.equal(actualHtml, expectedHtml)
  t.end()
})

tap.test('can delete todo', (t) => {
  const event = {
    preventDefault: () => {}
  }
  const id = shortid.generate()
  let emitted = false

  function emit () {
    emitted = true
  }

  todoList._deleteTodo(event, emit, id)
  t.ok(emitted, 'event called back was emitted')
  t.end()
})
