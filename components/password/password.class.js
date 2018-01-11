const MnInput = require('../input/input.class.js')

module.exports = class MnPassword extends MnInput {
  constructor(self) {
    self = super(self)
    return self
  }

  connectedCallback() {
    this.innerHTML = ''
    this.setStyle()
    this.setInput()
    super.setChangeEvents()
    super.setPlaceholder()
    this._setVisibilityButton()
    super.setAttributeValue()
    super.setAttributeName()
    super.setAttributeDisabled()
    super.setAttributeReadonly()
    super.setAttributeAutofocus()
    super.setValidations()
  }

  static get observedAttributes() {
    return [
      'value',
      'name',
      'placeholder',
      'disabled',
      'readonly',
      'autofocus',
    ]
  }

  setStyle() {
    super.setStyle()
    this.classList.add('mn-password')
  }

  setInput() {
    super.setInput()
    this.input.setAttribute('type', 'password')
  }

  _setVisibilityButton() {
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
