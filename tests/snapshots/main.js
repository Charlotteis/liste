'use strict'

const snap = require('assert-snapshot')
const tap = require('tap')

const main = require('../../components/main')

tap.test('main component', (assert) => {
  const str = main({name: 'Charlotte'}).toString()
  snap(assert, str)
  assert.end()
})
