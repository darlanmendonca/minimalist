const MnInput = require('../input/input.class.js')

module.exports = class MnPassword extends MnInput {
  constructor(self) {
    self = super(self)
    return self
  }

  connectedCallback() {
    this.innerHTML = ''
    this.classList.add('mn-password')
    this._setType()
    this._setCssClasses()
    this._setInput()
    this._setType()
    this._setPlaceholder()
    this._setButton()
    this._setAttributeValue()
    this._setAttributeDisabled()
    this._setAttributeAutofocus()
  }

  static get observedAttributes() {
    return [
      'value',
      'name',
      'placeholder',
      'disabled',
    ]
  }

  _setType() {
    this.input
      ? this.input.setAttribute('type', 'password')
      : null
  }

  _setButton() {
    const button = document.createElement('button')
    button.setAttribute('type', 'button')
    button.setAttribute('tabindex', '-1')

    this.appendChild(button)
    this.button = button
    this.input.addEventListener('blur', () => {
      this.input.setAttribute('type', 'password')
      this.classList.remove('show-password')
      this.input.dispatchEvent(new Event('change'))
    })

    button.addEventListener('mousedown', event => {
      event.preventDefault()
    })

    button.addEventListener('click', () => {
      const toggledType = this.input.getAttribute('type') === 'password'
        ? 'text'
        : 'password'
      this.input.setAttribute('type', toggledType)
      this.classList.toggle('show-password')
      this.input.focus()
    })
  }
}
