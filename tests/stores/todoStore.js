'use strict'

const EventEmitter = require('events').EventEmitter
const spok = require('spok')
const tap = require('tap')

const todoStore = require('../../stores/todoStore')

tap.test('should initialize empty state', (t) => {
  const emitter = new EventEmitter()
  const state = {}

  todoStore(state, emitter)
  spok(t, state, {
    todos: []
  })

  t.end()
})

tap.test('restores previous state', (t) => {
  const emitter = new EventEmitter()
  const state = {
    todos: ['Destroy Capitalism', 'Learn Choo', 'Eat Pizza']
  }

  todoStore(state, emitter)
  spok(t, state, {
    todos: ['Destroy Capitalism', 'Learn Choo', 'Eat Pizza']
  })

  t.end()
})

tap.test('addTodo', (t) => {
  const emitter = new EventEmitter()
  const state = {}

  todoStore(state, emitter)
  emitter.emit('DOMContentLoaded')

  emitter.emit('addTodo', 'Go Full Communism')
  spok(t, state.todos, ['Go Full Communism'])

  emitter.emit('addTodo', 'Change Name')
  spok(t, state.todos, ['Go Full Communism', 'Change Name'])

  t.end()
})
