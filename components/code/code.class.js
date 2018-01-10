module.exports = class MnCode extends HTMLElement {
  constructor(self) {
    self = super(self)
    return self
  }

  connectedCallback() {
    this.setStyle()
  }

  setStyle() {
    this.classList.add('mn-code')
  }
}
