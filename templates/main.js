'use strict'

const html = require('choo/html')

module.exports = (state, emit) => {
  return html`
    <body>
      <h1>Ich heiße... ${state.name}</h1>
      <label for='name'>Type your name!</label>
      <input type='text' id='name' oninput=${updateName} value=${state.name}/>
    </body>
  `

  function updateName (e) {
    const name = e.target.value
    emit('nameChange', name)
  }
}
