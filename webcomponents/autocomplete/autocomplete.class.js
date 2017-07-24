// fetch('http://localhost:4000/houses').then(res => res.json()).then(res => console.log(res))

const MnSelect = require('../select/select.class.js')

module.exports = class MnPassword extends MnSelect {
  constructor(self) {
    self = super(self)
    return self
  }

  connectedCallback() {
    super.connectedCallback()
  }

  _setStyle() {
    super._setStyle()
    this.classList.add('mn-autocomplete')
  }

  _setInput() {
    super._setInput()
  }
}
