import MnInput from '../input/input.class.js'

class MnPassword extends MnInput {
  connectedCallback() {
    super.empty()
    super.setStyle()
    this.setStyle()
    super.setChildren('label')
    super.setChildren('input')
    super.setChildren('button')
    this.setInput()
    super.setInputEvents()
    this.setVisibility()
    this.setAttributes()
  }

  setStyle() {
    this.classList.add('mn-password')
  }

  setInput() {
    this.inputChild.setAttribute('type', 'password')
  }

  setVisibility() {
    this.buttonChild.addEventListener('click', () => this.toggleVisibility())
  }

  toggleVisibility() {
    const isPassword = this.inputChild.getAttribute('type') === 'password'
    const type = isPassword
      ? 'text'
      : 'password'

    this.classList.toggle('show-password', isPassword)
    this.inputChild.setAttribute('type', type)
  }
}

window.customElements.define('mn-password', MnPassword)

export default MnPassword
