import MnComponent from '../component/component.class.js'

class MnButton extends MnComponent {
  connectedCallback() {
    this.setStyle()
    this.setEvents()
  }

  setStyle() {
    this.classList.add('mn-button')
  }

  setEvents() {
    this.setAttribute('tabindex', '0')
    this.addEventListener('click', () => this.blur())
  }
}

window.customElements.define('mn-button', MnButton)

export default MnButton
