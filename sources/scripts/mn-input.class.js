const {HTMLElement} = window

class MnInput extends HTMLElement {
  constructor(self) {
    self = super(self)

    this.input = document.createElement('input')

    this._setCssClasses()
    this._setInput()

    return self
  }

  _setCssClasses() {
    this.classList.add('mn-input')
  }

  _setInput() {
    this.insertBefore(this.input, this.firstChild)
  }
}

window.MnInput = MnInput
window.customElements.define('mn-input', MnInput)

module.exports = MnInput
