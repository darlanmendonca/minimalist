const MnCheckbox = require('../checkbox/checkbox.class.js')
const evaluate = require('../../evaluate.js')

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
    super._setInput()
    this.input.setAttribute('type', 'radio')

    this.input.addEventListener('change', () => {
      this.options.forEach(option => {
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
      .map(option => evaluate(option.getAttribute('value')))

    return value[0]
  }

  set value(value) {
    this.options
    .forEach(option => {
      const check = value === option.getAttribute('value')
      check
        ? option.setAttribute('checked', '')
        : option.removeAttribute('checked')
      option.checked = check
    })
  }
}
