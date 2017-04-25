const {HTMLElement} = window

class MnInput extends HTMLElement {
  constructor(self) {
    self = super(self)

    this.input = document.createElement('input')
    this._setCssClasses()
    this._setInput()
    this._setValue()

    return self
  }

  _setCssClasses() {
    this.classList.add('mn-input')
  }

  _setInput() {
    this.insertBefore(this.input, this.firstChild)
  }

  _setValue() {
    const value = this.getAttribute('value') || ''
    this.setAttribute('value', value)
  }

  get value() {
    return this.input.value
  }

  set value(value = '') {
    this.input.value = value
  }

  static get observedAttributes() {
    return ['value']
  }

  attributeChangedCallback(name, old, value) {
    this[name] = value
  }
}

window.MnInput = MnInput
window.customElements.define('mn-input', MnInput)

module.exports = MnInput
