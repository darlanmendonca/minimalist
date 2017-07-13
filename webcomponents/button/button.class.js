const {HTMLElement} = window

module.exports = class MnButton extends HTMLElement {
  constructor(self) {
    self = super(self)
    return self
  }

  connectedCallback() {
    this.setStyle()
  }

  setStyle() {
    this.classList.add('mn-button')
  }
}
