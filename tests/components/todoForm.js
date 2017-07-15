'use strict'

const shortid = require('shortid')
const spok = require('spok')
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
  const id = shortid.generate()
  let emitted = false

  function emit (todo, value) {
    emitted = true
    spok(t, value, {
      'todo': {
        'id': id,
        'todo': 'Destroy Capitalism'
      }
    })
  }

  todoForm._addTodo(event, emit, id)
  t.ok(emitted, 'event called back was emitted')
  t.end()
})
