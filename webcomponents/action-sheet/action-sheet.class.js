const {HTMLElement} = window

module.exports = class MnActionSheet extends HTMLElement {
  constructor() {
    self = super(self)
    return self
  }

  connectedCallback() {
    this._setStyle()
    this._setMenu()
    this._setCancel()
  }

  static get observedAttributes() {
    return []
  }

  attributeChangedCallback(name, old, value) {
    if (this.parentNode) {
      this[name] = value
    }
  }

  _setStyle() {
    this.classList.add('mn-action-sheet')
    document.body.classList.add('mn-backdrop')
  }

  _setMenu() {
    const menu = document.createElement('menu')
    menu.classList.add('mn-card')

    Array
      .from(this.querySelectorAll('option'))
      .forEach((child, index) => {
        const option = document.createElement('div')
        option.classList.add('option')
        option.innerHTML = child.textContent

        option.addEventListener('click', () => {
          const changeEvent = new Event('change')
          changeEvent.data = {index}
          this.dispatchEvent(changeEvent)
        })

        Array
          .from(child.attributes)
          .forEach(attr => option.setAttribute(attr.name, attr.value))

        child.parentNode.removeChild(child)
        menu.appendChild(option)
      })

    this.appendChild(menu)
    this.menu = menu
  }

  _setCancel() {
    const button = document.createElement('button')

    button.addEventListener('click', () => {
      this.hide()
    })

    document.addEventListener('touchmove', () => {
      const clickOutside = event.target === this
      this.touchmove = true
      if (clickOutside) {
        event.preventDefault()
      }
    })

    document.addEventListener('touchend', (event) => {
      const clickOutside = event.target === this && !this.touchmove
      if (clickOutside) {
        this.hide()
      }
      delete this.touchmove
    })

    this.button = button
    this.appendChild(this.button)
  }

  show() {
    this.menu.scrollTop = 0
    this.classList.add('visible')
    document.body.classList.add('mn-backdrop-visible')
    document.body.classList.add('mn-action-sheet-visible')
  }

  hide() {
    this.classList.remove('visible')
    document.body.classList.remove('mn-backdrop-visible')
    document.body.classList.remove('mn-action-sheet-visible')
  }
}
