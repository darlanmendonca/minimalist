const MnInput = require('../input/input.class.js')

module.exports = class MnSelect extends MnInput {
  constructor(self) {
    self = super(self)
    return self
  }

  connectedCallback() {
    this._setStyle()
    this._setInput()
    super._setPlaceholder()
    this._setMenu()
    // super._setAttributeValue()
    super._setAttributeDisabled()
    super._setAttributeReadonly()
    super._setAttributeAutofocus()
    // this._setValidations()
  }

  static get observedAttributes() {
    return [
      'value',
      'name',
      'placeholder',
      'disabled',
      'readonly',
      'autofocus',
    ]
  }

  _setStyle() {
    super._setStyle()
    this.classList.add('mn-select')
  }

  _setInput() {
    super._setInput()

    this.input.addEventListener('focus', () => {
      !this.input.hasAttribute('readonly')
        ? this.show()
        : undefined
    })

    this.input.addEventListener('blur', () => {
      this.hide()
    })

    document.addEventListener('click', event => {
      const clickOutside = !event.target.closest('mn-select') && event.target !== this

      if (this.visible && clickOutside) {
        this.hide()
      }
    })
  }

  _setMenu() {
    const menu = document.createElement('menu')
    menu.classList.add('mn-card')

    Array
      .from(this.querySelectorAll('option'))
      .forEach(child => {
        const option = document.createElement('div')
        option.classList.add('option')
        option.textContent = child.textContent

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
    document.body.classList.add('mn-select-visible')
  }

  hide() {
    this.classList.remove('visible')
    document.body.classList.remove('mn-select-visible')
  }

  get visible() {
    return this.classList.contains('visible')
  }
}
