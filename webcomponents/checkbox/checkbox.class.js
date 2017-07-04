const {HTMLElement} = window

module.exports = class MnCheckbox extends HTMLElement {
  constructor(self) {
    self = super(self)
    return self
  }

  connectedCallback() {
    this._setStyle()
    this._setLabel()
    this._setInput()
    this._setCustomInput()
    this._setAttributeChecked()
  }

  static get observedAttributes() {
    return [
      'value',
      'name',
      'disabled',
      'readonly',
      'autofocus',
      'checked',
    ]
  }

  attributeChangedCallback(name, old, value) {
    if (this.parentNode && this.input) {
      this[name] = value
    }
  }

  _setStyle() {
    this.classList.add('mn-checkbox')
  }

  _setLabel() {
    this.label = document.createElement('label')
    this.appendChild(this.label)
  }

  _setInput() {
    this.input = document.createElement('input')
    this.input.setAttribute('type', 'checkbox')
    this.label.appendChild(this.input)
  }

  _setCustomInput() {
    const input = document.createElement('div')
    input.classList.add('input')

    const vector = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
    vector.innerHTML = `
      <g
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
        stroke-linecap="round"
        stroke-linejoin="round">
          <g
            x="50%" y="50%"
            transform="translate(5, 5)"
            stroke-width="2">
              <polyline
                points="12.3825 0.581533333 3.653 10.3935333 0.273722222 6.7386"></polyline>
          </g>
      </g>
    `
    input.appendChild(vector)
    this.label.appendChild(input)
  }

  _setAttributeChecked() {
    this.checked = this.hasAttribute('checked')
  }

  set checked(value) {
    this.input.checked = value
  }
}
