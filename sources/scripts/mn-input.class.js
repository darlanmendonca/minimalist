const {HTMLElement} = window

class MnInput extends HTMLElement {
  constructor(self) {
    self = super(self)

    this._setCssClasses()
    this._setInput()
    this._setAttributeValue()
    this._setAttributeAutocomplete()

    return self
  }

  _setCssClasses() {
    this.classList.add('mn-input')
  }

  _setInput() {
    this.input = document.createElement('input')
    this.insertBefore(this.input, this.firstChild)
  }

  _setAttributeValue() {
    const value = this.getAttribute('value') || ''
    this.setAttribute('value', value)
  }

  _setAttributeAutocomplete() {
    this.setAttribute('autocomplete', 'off')
  }

  static get observedAttributes() {
    return ['value']
  }

  attributeChangedCallback(name, old, value) {
    this[name] = value
  }

  get value() {
    return this.input.value
  }

  set value(value = '') {
    this.input.value = value
  }
}

window.MnInput = MnInput
console.info('set window.MnInput')
window.customElements.define('mn-input', MnInput)

module.exports = MnInput
