const {HTMLElement} = window

module.exports = class MnButton extends HTMLElement {
  constructor(self) {
    self = super(self)
    return self
  }

  connectedCallback() {
    this.setStyle()
    this.setButton()
  }

  setStyle() {
    this.classList.add('mn-button')
  }

  setButton() {
    this.setAttribute('tabindex', '0')
    this.addEventListener('click', () => this.blur())

    document.addEventListener('keyup', (event) => {
      if (event.target === this && event.key === 'Enter') {
        this.click()
      }
    })
  }
}
