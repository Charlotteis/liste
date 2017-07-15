'use strict'

const EventEmitter = require('events').EventEmitter
const spok = require('spok')
const tap = require('tap')
const shortid = require('shortid')

const todoStore = require('../../stores/todoStore')

tap.test('should initialize empty state', (t) => {
  const emitter = new EventEmitter()
  const state = {}

  todoStore(state, emitter)
  spok(t, state, {
    todos: {}
  })

  t.end()
})

tap.test('restores previous state', (t) => {
  const emitter = new EventEmitter()
  const state = {
    todos: {
      '1': 'Destroy Capitalism',
      '2': 'Learn Choo',
      '3': 'Eat Pizza'
    }
  }

  todoStore(state, emitter)
  spok(t, state, {
    todos: {
      '1': 'Destroy Capitalism',
      '2': 'Learn Choo',
      '3': 'Eat Pizza'
    }
  })

  t.end()
})

tap.test('addTodo', (t) => {
  const emitter = new EventEmitter()
  const state = {}

  todoStore(state, emitter)
  emitter.emit('DOMContentLoaded')

  let id = shortid.generate()
  let todo = {
    'id': id,
    'todo': 'Go full communism'
  }

  let expectedTodos = {}
  expectedTodos[id] = {
    'id': id,
    'todo': 'Go full communism'
  }

  emitter.emit('addTodo', {todo})

  spok(t, state.todos, expectedTodos)

  id = shortid.generate()
  todo = {
    'id': id,
    'todo': 'Learn Choo'
  }

  expectedTodos[id] = {
    'id': id,
    'todo': 'Learn Choo'
  }

  emitter.emit('addTodo', {todo})
  spok(t, state.todos, expectedTodos)

  t.end()
})

tap.test('deleteTodo', (t) => {
  const emitter = new EventEmitter()
  const id = shortid.generate()
  const state = {
    todos: {}
  }

  state.todos[id] = {
    'id': id,
    'todo': 'Go full communism'
  }

  todoStore(state, emitter)
  emitter.emit('DOMContentLoaded')

  emitter.emit('deleteTodo', id)
  spok(t, state.todos, {})

  t.end()
})
