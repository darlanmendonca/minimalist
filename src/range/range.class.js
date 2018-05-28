import MnComponent from '../component/component.class.js'

class MnRange extends MnComponent {
  connectedCallback() {
    super.empty()
    this.setStyle()
    super.setChildren('input', {type: 'range'})
    super.setAttributes()
  }

  setStyle() {
    this.classList.add('mn-range')
  }
}

window.customElements.define('mn-range', MnRange)

export default MnRange
