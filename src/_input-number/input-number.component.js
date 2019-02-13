import Minimalist, {component, listen, setAttribute} from '../minimalist/minimalist.class.js'
import InputText from '../_input-text/input-text.component.js'

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
          ? this.value > +this.getAttribute('max')
          : false
      },
      min: () => {
        return this.hasValue
          ? this.value < +this.getAttribute('min')
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

  @listen('change', 'input')
  evaluate(event) {
    try {
      const value = eval(event.target.value.replace(/,/g, '.'))
      const isNumber = typeof value === 'number'
      event.target.value = isNumber
        ? String(value).replace(/\./g, ',')
        : ''

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
    } catch (e) {
      event.target.value = ''
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
}

export default InputNumber
