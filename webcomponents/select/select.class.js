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
      this.filter = undefined
    })

    this.input.addEventListener('blur', () => {
      this.input.value
        ? this.value = this.value
        : this.value = undefined
      this.hide()
    })

    this.input.addEventListener('input', event => {
      this.filter = this.input.value
      this.focusOption(this.menu.querySelector('.option:first-child:not(.hidden)'))
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
        option.innerHTML = child
          .textContent
          .split('')
          .map(char => `<span class="char" data-char="${char.toLowerCase()}">${char}</span>`)
          .join('')

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
        this.focusOption(option)
      }
    }))

    this.input.addEventListener('keydown', (event) => { // arrow navigate
      const arrowDown = event.key === 'ArrowDown'
      const arrowUp = event.key === 'ArrowUp'
      let nextOption

      const options = Array.from(this.menu.querySelectorAll('.option:not(.hidden)'))
      const currentOption = this.menu.querySelector('.option.focus')

      const currentIndex = Array.prototype.indexOf.call(options, currentOption)

      if (arrowDown) {
        event.preventDefault()
        nextOption = options[currentIndex + 1]
      } else if (arrowUp) {
        event.preventDefault()
        nextOption = options[currentIndex - 1]
      }

      if (nextOption) {
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

        this.focusOption(nextOption)
        setTimeout(() => {
          delete this.keyboardNavigation
        }, 100)
      }
    })

    this.input.addEventListener('keydown', event => {
      const esc = event.key === 'Escape'

      if (esc) {
        this.value = this.value
        this.filter = undefined
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
    this.focusOption(this.querySelector('.option:first-child'))
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

  focusOption(option) {
    this.removeOptionFocus()
    option
      ? option.classList.add('focus')
      : null
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

  set filter(value) {
    if (value) {
      this.classList.add('filtered')

      Array
        .from(this.menu.querySelectorAll('.option'))
        .forEach(option => {
          const matchOption = RegExp(value.split('').join('.*'), 'i').test(option.textContent)
          const lastMatches = Array.from(option.querySelectorAll('.match'))

          lastMatches.forEach(char => char.classList.remove('match'))

          if (matchOption) {
            option.classList.remove('hidden')

            value
              .split('')
              .forEach(char => {
                const selector = `span[data-char="${char.toLowerCase()}"]:not(.match)`
                const letter = option.querySelector(`.match ~ ${selector}`) || option.querySelector(selector)
                letter
                  ? letter.classList.add('match')
                  : null
              })

          } else {
            option.classList.add('hidden')
          }
        })
    } else {
      this.classList.remove('filtered')
      Array
        .from(this.querySelectorAll('.option.hidden'))
        .forEach(option => option.classList.remove('hidden'))
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
