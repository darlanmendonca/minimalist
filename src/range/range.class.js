import MnComponent from '../component/component.class.js'

class MnRange extends MnComponent {
  connectedCallback() {
    super.empty()
    this.setStyle()
    super.setChildren('input', {type: 'range'})
    super.setChildren('span', {class: 'value'})
    this.setInputEvents()
    super.setAttributes()
  }

  static get observedAttributes() {
    return [
      'value',
      'step',
      'min',
      'max',
    ]
  }

  setStyle() {
    this.classList.add('mn-range')
  }

  setInputEvents() {
    this.inputChild.addEventListener('input', () => {
      const percent = (this.value / +this.max) * 100
      this.spanChild.style.left = `${percent}%`
      this.spanChild.textContent = this.value
    })

    this.value = +this.getAttribute('max') / 2 || this.getAttribute('value')
    this.inputChild.dispatchEvent(new Event('input'))
  }

  get value() {
    return this.inputChild.value
  }

  set value(value) {
    this.inputChild.value = value
    this.inputChild.dispatchEvent(new Event('input'))
  }

  get step() {
    return this.inputChild.step
      ? +this.inputChild.step
      : undefined
  }

  set step(value) {
    value
      ? this.inputChild.setAttribute('step', value)
      : this.inputChild.removeAttribute('step')
  }

  get min() {
    return this.inputChild.hasAttribute('min')
      ? +this.inputChild.getAttribute('min')
      : undefined
  }

  set min(value) {
    value !== undefined
      ? this.inputChild.setAttribute('min', value)
      : this.inputChild.removeAttribute('min')
  }

  get max() {
    return this.inputChild.hasAttribute('max')
      ? +this.inputChild.getAttribute('max')
      : undefined
  }

  set max(value) {
    value !== undefined
      ? this.inputChild.setAttribute('max', value)
      : this.inputChild.removeAttribute('max')
  }
}

window.customElements.define('mn-range', MnRange)

export default MnRange
