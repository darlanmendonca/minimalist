class MnInput extends window.HTMLElement {
  constructor(self) {
    super(self)
  }

  connectedCallback() {
    this.empty()
    this.setStyle()
    this.setChildren('label')
    this.setChildren('input')
    this.setInputEvents()
    this.setAttributes()
  }

  setInputEvents() {
    this.inputChild.addEventListener('focus', () => {
      this.classList.add('focus')
    })

    this.inputChild.addEventListener('blur', () => {
      this.classList.remove('focus')
      this.classList.toggle('has-value', this.hasValue)
    })
  }

  static get observedAttributes() {
    return [
      'label',
      'value',
      'name',
      'placeholder',
      'disabled',
      'readonly',
      'maxlength',
      'autocapitalize',
      'autofocus',
    ]
  }

  attributeChangedCallback(name, old, value) {
    if(this.parentNode) {
      this[name] = value
    }
  }

  setAttributes() {
    Array
      .from(this.attributes)
      .forEach(attr => {
        const observedAttr = this.constructor
          .observedAttributes
          .find(observed => observed === attr.name)

        if (observedAttr) {
          this[attr.name] = attr.value
        }
      })
  }

  empty() {
    this.innerHTML = ''
  }

  setChildren(name) {
    const children = document.createElement(name)
    this[`${name}Child`] = children
    this.appendChild(children)
  }

  setStyle() {
    this.classList.add('mn-input')
  }

  get label() {
    return this.labelChild.textContent
  }

  set label(value = '') {
    this.labelChild.textContent = value
  }

  get value() {
    return this.inputChild.value
  }

  get hasValue() {
    return !(this.value === undefined
      || this.value === null
      || this.value === ''
      || Array.isArray(this.value) && this.value.length === 0)
  }

  set value(value = '') {
    this.inputChild.value = value
    this.classList.toggle('has-value', this.hasValue)
  }

  get name() {
    return this.inputChild.getAttribute('name')
  }

  set name(value) {
    value
      ? this.inputChild.setAttribute('name', value)
      : this.inputChild.removeAttribute('name')
  }

  get placeholder() {
    return this.inputChild.getAttribute('placeholder')
  }

  set placeholder(value) {
    this.inputChild.setAttribute('placeholder', value)
  }

  get disabled() {
    return this.inputChild.disabled
  }

  set disabled(value) {
    this.inputChild.disabled = JSON.parse(value)
  }

  get readonly() {
    return this.inputChild.readOnly
  }

  set readonly(value) {
    this.inputChild.readOnly = JSON.parse(value)
  }

  get maxlength() {
    return this.inputChild.getAttribute('maxlength')
  }

  set maxlength(value) {
    this.inputChild.setAttribute('maxlength', value)
  }

  get autocapitalize() {
    return this.inputChild.getAttribute('autocapitalize')
  }

  set autocapitalize(value) {
    this.inputChild.setAttribute('autocapitalize', value)
  }

  get autofocus() {
    return this.inputChild.getAttribute('autofocus')
  }

  set autofocus(value) {
    value
      ? this.inputChild.setAttribute('autofocus', value)
      : this.inputChild.removeAttribute('autofocus')
  }
}

window.customElements.define('mn-input', MnInput)

export default MnInput
