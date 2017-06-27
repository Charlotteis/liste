'use strict'

const snap = require('assert-snapshot')
const tap = require('tap')

const todoForm = require('../../components/todoForm')

tap.test('todoForm', (assert) => {
  const str = todoForm(
    {todos: ['Destroy Capitalism', 'Learn Choo', 'Eat Pizza']}
  ).toString()
  snap(assert, str)
  assert.end()
})
