const MnInput = require('../input/input.class.js')

module.exports = class MnEmail extends MnInput {
  constructor(self) {
    self = super(self)
    return self
  }

  connectedCallback() {
    super.connectedCallback()
    this.classList.add('mn-email')
    this.input.setAttribute('type', 'email')
    this.setAttribute('pattern', this.getAttribute('pattern') || '^.+@.+$')
  }
}
