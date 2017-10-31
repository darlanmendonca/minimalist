const {HTMLElement} = window

module.exports = class MnList extends HTMLElement {
  constructor(self) {
    self = super(self)
    return self
  }

  connectedCallback() {
    this.setStyle()
  }

  setStyle() {
    this.classList.add('mn-list')
  }
}
