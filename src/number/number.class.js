import MnInput from '../input/input.class.js'

class MnNumber extends MnInput {
  connectedCallback() {
    super.empty()
    super.setStyle()
    this.setStyle()
    super.setChildren('label')
    super.setChildren('input')
    super.setInputEvents()
    this.setTransforms()
    this.setAttributes()
  }

  setStyle() {
    this.classList.add('mn-number')
  }

  static get observedAttributes() {
    return [
      'label',
      'value',
      'name',
      'placeholder',
      'disabled',
      'readonly',
      'autofocus',
      'currency',
      'precision',
    ]
  }

  attributeChangedCallback(name, old, value) {
    if(this.parentNode) {
      this[name] = value
      const attributeChangeTransform = ['currency', 'precision'].includes(name)
      if (attributeChangeTransform) {
        this.inputChild.dispatchEvent(new Event('change'))
      }
    }
  }

  get value() {
    const number = +this.inputChild.value.replace(/,/g, '.')
    const isNumber = this.inputChild.value && !Number.isNaN(number)
    return isNumber
      ? number
      : undefined
  }

  set value(value = '') {
    this.inputChild.value = value
    this.inputChild.dispatchEvent(new Event('change'))
    this.classList.toggle('has-value', this.hasValue)
  }

  setTransforms()  {
    const transform = () => {
      try {
        const value = eval(this.inputChild.value.replace(/,/g, '.'))
        const isNumber = typeof value === 'number'
        this.inputChild.value = isNumber
          ? String(value).replace(/\./g, ',')
          : ''

        const isCurrency = this.hasAttribute('currency')
          && this.getAttribute('currency') !== 'false'
        const precision = this.getAttribute('precision') || 0

        switch (true) {
          case isCurrency:
            this.inputChild.value = value.toFixed(precision || 2).replace(/\./g, ',')
            break

          default:
            // this.inputChild.value = precision
            //   ? value.toFixed(precision).replace(/\./g, ',')
            //   : String(value).replace(/\./g, ',')
            break
        }
      } catch (e) {
        this.inputChild.value = ''
      }
    }

    this.inputChild.addEventListener('change', transform)
    this.inputChild.addEventListener('blur', transform)
  }
}

window.customElements.define('mn-number', MnNumber)

export default MnNumber
