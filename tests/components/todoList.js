'use strict'

const tap = require('tap')
const todoList = require('../../components/todoList')

tap.test('can render task list html', (t) => {
  const todos = ['Destroy Capitalism', 'Learn Choo', 'Eat Pizza']
  const expectedHtml = '<li>Destroy Capitalism</li><li>Learn Choo</li><li>Eat Pizza</li>'
  const actualHtml = todoList._getTodos(todos)

  t.equal(expectedHtml, actualHtml)
  t.end()
})