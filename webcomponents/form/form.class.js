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
    return [
      'name',
    ]
  }

  attributeChangedCallback(name, old, value) {
    this[name] = value
  }

  _setStyle() {
    this.classList.add('mn-form')
  }

  validate() {
    this.classList.add('submitted')

    this.inputs
      .filter(input => !input.hasAttribute('disabled') && !input.hasAttribute('readonly'))
      .forEach(input => input.validate())

    const isInvalid = this.querySelectorAll('.mn-input.invalid').length
    console.log(`form ${isInvalid ? 'invalid' : 'valid'}`)
  }

  get inputs() {
    return Array.from(this.querySelectorAll('.mn-input'))
  }

  get data() {
    const data = {}

    this.inputs
      .forEach(input => {
        const name = input.getAttribute('name')

        if (name) {
          data[name] = input.value
        }
      })

    return data
  }

  set name(name) {
    if (name && typeof name === 'string') {
      window[name] = this
    }
  }
}
