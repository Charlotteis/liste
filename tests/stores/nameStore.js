'use strict'

const EventEmitter = require('events').EventEmitter
const spok = require('spok')
const tap = require('tap')

const nameStore = require('../../stores/nameStore')

tap.test('should initialize empty state', (t) => {
  const emitter = new EventEmitter()
  const state = {}

  nameStore(state, emitter)
  spok(t, state, {
    name: ''
  })

  t.end()
})

tap.test('restores previous state', (t) => {
  const emitter = new EventEmitter()
  const state = {
    name: 'Charlotte'
  }

  nameStore(state, emitter)
  spok(t, state, {
    name: 'Charlotte'
  })

  t.end()
})

tap.test('nameChange', (t) => {
  const emitter = new EventEmitter()
  const state = {}

  nameStore(state, emitter)
  emitter.emit('DOMContentLoaded')

  emitter.emit('nameChange', 'Charlotte')
  spok(t, state.name, 'Charlotte')

  emitter.emit('nameChange', 'James')
  spok(t, state.name, 'James')

  t.end()
})
