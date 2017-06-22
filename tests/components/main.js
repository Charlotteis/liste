'use strict'

const tap = require('tap')
const main = require('../../components/main')

tap.test('name updates', (t) => {
  const event = {target: { value: 'Charlotte' }}
  let emitted = false

  function emit (name, value) {
    emitted = true
    t.equal(value, event.target.value)
  }

  main._updateName(event, emit)
  t.ok(emitted, 'event called back was emitted')
  t.end()
})
