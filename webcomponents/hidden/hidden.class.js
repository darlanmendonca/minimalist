const MnInput = require('../input/input.class.js')

module.exports = class MnPassword extends MnInput {
  constructor(self) {
    self = super(self)
    return self
  }

  connectedCallback() {
    this.innerHTML = ''
    this._setStyle()
    this._setInput()
    super.setChangeEvents()
    super._setAttributeValue()
    super._setAttributeName()
    super._setAttributeDisabled()
  }

  static get observedAttributes() {
    return [
      'value',
      'name',
      'disabled',
    ]
  }

  _setStyle() {
    super._setStyle()
    this.classList.add('mn-hidden')
  }

  _setInput() {
    super._setInput()
    this.input.setAttribute('type', 'hidden')
  }
}
