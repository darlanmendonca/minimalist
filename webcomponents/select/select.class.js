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
    this._setAttributeValue()
    super._setAttributeDisabled()
    super._setAttributeReadonly()
    super._setAttributeAutofocus()
    super._setAttributeAutocomplete()
    super._setAttributeSpellcheck()
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
      this.input.value
        ? this.value = this.value
        : this.value = undefined
      this.hide()
    })

    document.addEventListener('click', event => {
      const clickOutside = !event.target.closest('mn-select') && event.target !== this

      if (this.visible && clickOutside) {
        this.hide()
      }
    })
  }

  _setAttributeValue() {
    const selectedOption = this.querySelector('.option[selected]')
    const selectedValue = selectedOption
      ? selectedOption.getAttribute('value') || selectedOption.textContent
      : ''

    const value = this.getAttribute('value') || selectedValue
    this.value = value
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
      if (!this.keyboardNavigation) {
        this.removeFocusFromOption()
        option.classList.add('focus')
      }
    }))

    this.input.addEventListener('keydown', (event) => { // arrow navigate
      const arrowDown = event.key === 'ArrowDown'
      const arrowUp = event.key === 'ArrowUp'
      const latestOption = this.menu.querySelector('.option.focus')
      let nextOption

      if (arrowDown) {
        event.preventDefault()
        nextOption = latestOption
          ? latestOption.nextElementSibling
          : this.menu.querySelector('.option:first-child')
      } else if (arrowUp) {
        event.preventDefault()
        nextOption = latestOption
          ? latestOption.previousElementSibling
          : this.menu.querySelector('.option:last-child')
      }

      if (nextOption) {
        this.removeFocusFromOption()

        const top = nextOption.offsetTop
        const bottom = top + nextOption.clientHeight
        const scrollToTop = top < this.menu.scrollTop
        const scrollToBottom = bottom > this.menu.scrollTop + this.menu.clientHeight

        this.keyboardNavigation = true
        if (scrollToTop) {
          this.menu.scrollTop = top
        } else if (scrollToBottom) {
          this.menu.scrollTop = bottom - this.menu.clientHeight
        }

        nextOption.classList.add('focus')
        setTimeout(() => {
          delete this.keyboardNavigation
        }, 100)
      }
    })

    this.input.addEventListener('keydown', (event) => {
      const enter = event.key === 'Enter'

      if (enter) {
        event.preventDefault()
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
    this.removeFocusFromOption()
  }

  get visible() {
    return this.classList.contains('visible')
  }

  removeFocusFromOption() {
    const latest = this.menu.querySelector('.focus')
    latest
      ? latest.classList.remove('focus')
      : undefined
  }

  get value() {
    return evaluate(this.getAttribute('value')) || undefined
  }

  set value(value) {
    const attributeValue = this.getAttribute('value')
    const options = Array.from(this.menu.querySelectorAll('.option'))

    const option = options.filter(option => {
      return option.getAttribute('value') == value || option.textContent == value // eslint-disable-line eqeqeq
    })[0]

    if (value && option) {
      this.input.value = option.textContent
      this.input.dispatchEvent(new Event('change'))

      if (attributeValue !== value) {
        this.setAttribute('value', option.getAttribute('value') || value)
      }
    } else {
      this.input.value = ''
      this.removeAttribute('value')
      this.input.dispatchEvent(new Event('change'))
    }
  }
}

function evaluate(value) {
  try {
    value = value.trim()
    const isVariable = !value.startsWith('[')
      && !value.startsWith('{')
      && !value.startsWith('\'')
      && !value.startsWith('"')
      && !value.startsWith('`')
      && value !== 'true'
      && value !== 'false'
      && isNaN(value)

    return isVariable
        ? eval(`'${value}'`) // convert to string
        : eval(`(${value})`) // evaluate
  } catch (e) {
    return value
  }
}
