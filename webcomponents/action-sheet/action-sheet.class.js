const {HTMLElement} = window

module.exports = class MnActionSheet extends HTMLElement {
  constructor() {
    self = super(self)
    return self
  }

  connectedCallback() {
    this._setStyle()
    this._setMenu()
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
  }

  _setMenu() {
    const menu = document.createElement('menu')
    menu.classList.add('mn-card')

    Array
      .from(this.querySelectorAll('option'))
      .forEach(child => {
        const option = document.createElement('div')
        option.classList.add('option')
        option.innerHTML = child.textContent

        Array
          .from(child.attributes)
          .forEach(attr => option.setAttribute(attr.name, attr.value))

        child.parentNode.removeChild(child)
        menu.appendChild(option)
      })

    this.appendChild(menu)
    this.menu = menu
  }

  show() {
    this.classList.add('visible')
    document.body.classList.add('mn-backdrop')
    document.body.classList.add('mn-backdrop-visible')
    document.body.classList.add('mn-action-sheet-visible')
  }

  hide() {
    this.classList.remove('visible')
    document.body.classList.remove('mn-backdrop')
    document.body.classList.remove('mn-backdrop-visible')
    document.body.classList.remove('mn-action-sheet-visible')
  }
}
