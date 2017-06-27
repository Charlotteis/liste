'use strict'

const choo = require('choo')

const todoStore = require('./stores/todoStore')
const todoForm = require('./components/todoForm')

const app = choo()

if (process.env.NODE_ENV !== 'production') {
  const log = require('choo-log')
  app.use(log())
}

app.use(todoStore)

app.route('/', todoForm)

// TODO: Find better mount.
app.mount('body')
