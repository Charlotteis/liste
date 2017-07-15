'use strict'

const snap = require('assert-snapshot')
const tap = require('tap')

const todoList = require('../../components/todoList')

tap.test('todoList', (assert) => {
  const str = todoList(
    {
      todos: {
        '1': {
          'id': '12345',
          'todo': 'Destroy Capitalism'
        },
        '2': {
          'id': '23456',
          'todo': 'Learn Choo'
        },
        '3': {
          'id': '3',
          'todo': 'Eat Pizza'
        }
      }
    }
  ).toString()
  snap(assert, str)
  assert.end()
})
