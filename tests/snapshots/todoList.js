'use strict'

const snap = require('assert-snapshot')
const tap = require('tap')

const todoList = require('../../components/todoList')

tap.test('todoList', (assert) => {
  const str = todoList(
    {todos: ['Destroy Capitalism', 'Learn Choo', 'Eat Pizza']}
  ).toString()
  snap(assert, str)
  assert.end()
})
