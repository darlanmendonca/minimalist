import {component, listen, setAttribute, keydown} from '../minimalist/minimalist.class.js'
import InputText from '../input-text/input-text.component.js'

@component('mn-input-number')
class InputNumber extends InputText {
  static observedAttributes = [
    'label',
    'placeholder',
    'value',
    'name',
    'disabled',
    'readonly',
    'autofocus',
    'min',
    'max',
    'precision',
    'currency',
    'percentage',
  ]

  get validations() {
    return {
      required: super.validations.required,
      max: () => {
        return this.hasValue
          ? this.props.value > this.props.max
          : false
      },
      min: () => {
        return this.hasValue
          ? this.props.value < this.props.min
          : false
      },
    }
  }

  beforeRender() {
    super.beforeRender()
    this.classList.add('mn-input-number')
  }

  render(props = {}) {
    return `
      <label>${props.label || ''}</label>
      <input
        ${setAttribute('placeholder', props.placeholder)}
        ${setAttribute('value', props.value)}
        ${setAttribute('name', props.name)}
        ${setAttribute('disabled', props.disabled)}
        ${setAttribute('readonly', props.readonly)}
        ${setAttribute('autofocus', props.autofocus)}
        ${setAttribute('min', props.min)}
        ${setAttribute('max', props.max)}
      />
      <div class="mask"></div>
    `
  }

  evaluate(value = '') {
    try {
      value = eval(value.replace(/,/g, '.'))
    } catch (e) {
      return undefined
    }

    const isNumber = typeof value === 'number' && !isNaN(value)

    return isNumber
      ? value
      : undefined
  }

  @listen('change', 'input')
  @listen('blur', 'input')
  formatValue(event) {
    const value = this.evaluate(event.target.value)
    const isNumber = typeof value === 'number'

    event.target.value = isNumber
      ? String(value).replace(/\./g, ',')
      : ''

    if (isNumber) {
      const hasPrecision = this.hasAttribute('precision')
      const precision = this.getAttribute('precision') || 0

      switch (true) {
        case this.hasAttribute('currency'):
          event.target.value = value.toFixed(precision || 2).replace(/\./g, ',')
          break

        case hasPrecision:
          event.target.value = value.toFixed(precision).replace(/\./g, ',')
          break
      }
    }

    this.updateMask()
  }

  @listen('input', 'input')
  updateMask() {
    const input = this.querySelector('input')
    const mask = this.querySelector('.mask')
    const hasValue = input.value !== '' && !/^\s+$/.test(input.value)

    if (mask && this.hasAttribute('percentage')) {
      const text = hasValue
        ? `${input.value} %`
        : ''
      mask.textContent = text
    }
  }

  @keydown('ArrowUp', 'input:not([readonly])')
  @keydown('ArrowDown', 'input:not([readonly])')
  increment(event) {
    event.preventDefault()

    let step = this.hasAttribute('percentage')
      ? +this.getAttribute('step') / 100 || 1 / 100
      : +this.getAttribute('step') || 1

    step = event.shiftKey
      ? step * 10
      : event.altKey
        ? step / 10
        : step

    step = event.key === 'ArrowDown'
      ? step * -1
      : step

    step = this.hasAttribute('percentage')
      ? step * 100
      : step

    const previousValue = this.evaluate(event.target.value) || 0

    const precision = String(step).replace(/\d+\./, '').length
    const value = previousValue + step

    event.target.value = +(value).toFixed(precision)
    this.updateMask()
  }
}

export default InputNumber
