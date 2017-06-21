const MnInput = require('../input/input.class.js')
const MnActionSheet = require('../action-sheet/action-sheet.webcomponent.js')

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
    this._setActionSheet()
    this._setOptions()
    this._setAttributeValue()
    super._setAttributeDisabled()
    super._setAttributeReadonly()
    super._setAttributeAutofocus()
    super._setAttributeAutocomplete()
    super._setAttributeSpellcheck()
    this._setValidations()
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
      this.input.select()
      !this.input.hasAttribute('readonly')
        ? this.show()
        : undefined
      this.filter = undefined
    })

    this.input.addEventListener('blur', () => {
      const option = Array
        .from(this.menu.querySelectorAll('.option'))
        .filter(option => {
          const optionValue = option.getAttribute('value') || option.textContent
          return optionValue === this.getAttribute('value')
        })[0]

      if (this.input.value && option) {
        this.input.value = option.textContent
      } else {
        this.value = undefined
      }
      this.hide()
    })

    this.input.addEventListener('input', () => {
      this.filter = this.input.value
      this.focusOption(this.menu.querySelector('.option:not(.hidden)'))
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

  _setActionSheet() {
    const viewportWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
    if (viewportWidth < 768) {
      const actionSheet = new MnActionSheet()
      Array
        .from(this.querySelectorAll('.option'))
        .forEach(option => {
          const actionSheetOption = document.createElement('option')
          actionSheetOption.textContent = option.textContent
          actionSheet.appendChild(actionSheetOption)
        })
      this.actionSheet = actionSheet
      this.actionSheet.addEventListener('change', (event) => {
        const {index} = event.data
        const option = this.menu.querySelector(`.option:nth-child(${index + 1})`)
        this.value = option.textContent
        this.actionSheet.hide()
      })
      document.body.appendChild(this.actionSheet)
    }
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
        this.input.select()
        this.filter = undefined
      }
    })

    this.input.addEventListener('keydown', (event) => {
      const enter = event.key === 'Enter'

      if (enter) {
        const option = this.menu.querySelector('.option.focus')
        event.preventDefault()

        option
          ? this.value = option.getAttribute('value') || option.textContent
          : this.value = this.value

        this.hide()
        this.input.blur()
      }
    })
  }

  _setValidations() {
    super._setValidations()
    this.validations.required = () => this.value === undefined,
    delete this.validations.pattern
  }

  show() {
    this.classList.add('visible')
    this.menu.scrollTop = 0
    this.focusOption(this.querySelector('.option:first-child'))

    if (this.actionSheet) {
      this.input.blur()
      this.actionSheet.show()
    }
  }

  hide() {
    this.classList.remove('visible')
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
    return this.getAttribute('value')
      ? evaluate(this.getAttribute('value'))
      : undefined
  }

  set value(value) {
    const differentValue = this.getAttribute('value') !== value
    const option = Array
      .from(this.menu.querySelectorAll('.option'))
      .filter(option => {
        return option.getAttribute('value') == String(value) // eslint-disable-line eqeqeq
          || option.textContent == String(value) // eslint-disable-line eqeqeq
      })[0]

    const textNotApplied = option && this.input.value !== option.textContent

    if (differentValue || textNotApplied) {
      this.input.value = option
        ? option.textContent
        : ''

      const hasValue = value !== undefined && value !== null

      hasValue && option
        ? this.setAttribute('value', option.getAttribute('value') || option.textContent)
        :  this.removeAttribute('value')

      this.input.dispatchEvent(new Event('change'))
    }

    if (!this.hasAttribute('value')) {
      this.input.value = ''
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

          Array
            .from(option.querySelectorAll('.match'))
            .forEach(char => char.classList.remove('match'))

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
