const {HTMLElement} = window

class MnBackdrop extends HTMLElement {
  constructor() {
    self = super(self)
    return self
  }

  connectedCallback() {
    this.innerHTML = ''
    this.classList.add('mn-backdrop')

    document.addEventListener('keyup', () => {
      const esc = event.key === 'Escape'

      if (esc && this.isVisible) {
        this.hide()
      }
    })
  }

  show() {
    this.classList.add('visible')
  }

  hide() {
    this.classList.remove('visible')
  }

  get isVisible() {
    return this.classList.contains('visible')
  }
}

module.exports = MnBackdrop
