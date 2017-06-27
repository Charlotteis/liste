'use strict'

const tap = require('tap')
const todoForm = require('../../components/todoForm')

tap.test('can add todo', (t) => {
  const event = {
    target: {
      todo: {
        value: 'Destroy Capitalism'
      }
    },
    preventDefault: () => {}
  }
  let emitted = false

  function emit (todo, value) {
    emitted = true
    t.equal(value, event.target.todo.value)
  }

  todoForm._addTodo(event, emit)
  t.ok(emitted, 'event called back was emitted')
  t.end()
})
