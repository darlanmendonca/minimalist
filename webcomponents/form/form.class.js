const {HTMLElement} = window

module.exports = class MnForm extends HTMLElement {
  constructor() {
    self = super(self)
    return self
  }

  connectedCallback() {
    this._setStyle()
  }

  static get observedAttributes() {
    return []
  }

  attributeChangedCallback(name, old, value) {
    if (this.parentNode) {
      this[name] = value
    }
  }

  _setStyle() {
    this.classList.add('mn-form')
  }

  validate() {
    Array
      .from(this.querySelectorAll('.mn-input'))
      .filter(input => !input.disabled && !input.readOnly)
      .forEach(input => input.validate())

    const isInvalid = this.querySelectorAll('.mn-input.invalid').length
    console.log(`form ${isInvalid ? 'invalid' : 'valid'}`)
  }
}
