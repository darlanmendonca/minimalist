const MnCheckbox = require('../checkbox/checkbox.class.js')
const evaluate = require('evaluate-string')

module.exports = class MnRadio extends MnCheckbox {
  constructor(self) {
    self = super(self)
    return self
  }

  connectedCallback() {
    this.innerHTML = ''
    this._setStyle()
    super._setLabel()
    this._setInput()
    this._setCustomInput()
    this._setForm()
    this.checked = this.hasAttribute('checked')
    this.disabled = this.hasAttribute('disabled')
    this.readonly = this.hasAttribute('readonly')
    this.name = this.hasAttribute('name')
    this._setValidations()
  }

  _setStyle() {
    this.classList.add('mn-radio')
  }

  _setInput() {
    this.input = document.createElement('input')
    this.input.setAttribute('type', 'radio')
    this.label.appendChild(this.input)

    this.input.addEventListener('change', () => {
      this.checked
        ? this.setAttribute('checked', '')
        : this.removeAttribute('checked')

      this.options.forEach(option => {
        if (option !== this) {
          option.removeAttribute('checked')
        }

        option.form && option.form.classList.contains('submitted')
          ? option.validate()
          : null
      })
    })
  }

  _setCustomInput() {
    const input = document.createElement('div')
    input.classList.add('input')

    this.label.appendChild(input)
  }

  _setValidations() {
    this.validations = {
      required: () => !this.value,
    }
  }

  get options() {
    const name = this.getAttribute('name')
      ? `[name="${this.getAttribute('name')}"]`
      : ':not([name])'

    return Array.from(this.form.querySelectorAll(`.mn-radio${name}`))
  }

  get value() {
    const value = this
      .options
      .filter(option => option.checked)
      .map(option => evaluate(option.getAttribute('value')) || option.getAttribute('placeholder'))

    return value[0]
  }

  set value(value) {
    console.log('receiving', value)
    this.options.forEach(option => {
      option.removeAttribute('checked')
    })

    const option = this.options.find(option => evaluate(option.getAttribute('value')) === value)
    console.log('found', option)
    option.setAttribute('checked', '')
  }
}
