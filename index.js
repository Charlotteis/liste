'use strict'

const choo = require('choo')
const nameStore = require('./stores/nameStore')
const main = require('./components/main')

const app = choo()

if (process.env.NODE_ENV !== 'production') {
  const log = require('choo-log')
  app.use(log())
}

app.use(nameStore)

app.route('/', main)

app.mount('body')
