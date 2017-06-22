'use strict'

module.exports = (state, emitter) => {
  state.name = ''
  emitter.on('nameChange', (name) => {
    state.name = name
    emitter.emit('render')
  })
}
