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

    this.input.addEventListener('input', () => {
      this.classList.add('loading')
      const event = new Event('search')
      event.query = this.input.value
      this.removeOptions()
      this.dispatchEvent(event)
    })
  }

  createOption(text, value) {
    const option = document.createElement('option')
    option.textContent = text

    if (value !== undefined) {
      option.setAttribute('value', value)
    }

    this.appendChild(option)
  }

  removeOptions() {
    const options = this.querySelectorAll('option')
    Array
      .from(options)
      .forEach(option => this.removeChild(option))
  }
}
