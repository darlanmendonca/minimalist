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
    this._setOptions()
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

  _setOptions() {
    const options = Array.from(this.querySelectorAll('.option'))

    options.forEach(option => option.addEventListener('mousedown', () => {
      const value = event.target.getAttribute('value') || event.target.textContent
      this.value = value
      this.hide()
    }))

    options.forEach(option => option.addEventListener('mousemove', () => {
      this.removeOptionFocus()
      option.classList.add('focus')
    }))

    this.input.addEventListener('keydown', (event) => { // arrow navigate
      const arrowDown = event.key === 'ArrowDown'
      const arrowUp = event.key === 'ArrowUp'
      const latestOption = this.menu.querySelector('.option.focus')
      let nextOption

      if (arrowDown) {
        nextOption = latestOption
          ? latestOption.nextElementSibling
          : this.menu.querySelector('.option:first-child')
      } else if (arrowUp) {
        nextOption = latestOption
          ? latestOption.previousElementSibling
          : this.menu.querySelector('.option:last-child')
      }

      if (nextOption) {
        this.removeOptionFocus()
        nextOption.classList.add('focus')

        const top = nextOption.offsetTop
        const bottom = top + nextOption.clientHeight
        const scrollToTop = top < this.menu.scrollTop
        const scrollToBottom = bottom > this.menu.scrollTop + this.menu.clientHeight

        if (scrollToTop) {
          this.menu.scrollTop = top
        } else if (scrollToBottom) {
          this.menu.scrollTop = bottom - this.menu.clientHeight
        }
      }
    })

    this.input.addEventListener('keydown', (event) => {
      const enter = event.key === 'Enter'

      if (enter) {
        const option = this.menu.querySelector('.option.focus')
        const value = option.getAttribute('value') || option.textContent
        this.value = value
        this.hide()
        this.input.blur()
      }
    })
  }

  show() {
    this.classList.add('visible')
    this.menu.scrollTop = 0
    document.body.classList.add('mn-select-visible')
    this.querySelector('.option:first-child').classList.add('focus')
  }

  hide() {
    this.classList.remove('visible')
    document.body.classList.remove('mn-select-visible')
    this.removeOptionFocus()
  }

  get visible() {
    return this.classList.contains('visible')
  }

  removeOptionFocus() {
    const latest = this.menu.querySelector('.focus')
    latest
      ? latest.classList.remove('focus')
      : undefined
  }

  set value(value) {
    this.input.value = value
    this.input.dispatchEvent(new Event('change'))
  }
}
