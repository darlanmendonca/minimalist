import MnComponent from '../component/component.class.js'

class Image extends MnComponent {
  connectedCallback() {
    super.empty()
    this.setStyle()
    super.setChildren('img')
    super.setAttributes()
  }

  static get observedAttributes() {
    return [
      'src',
    ]
  }

  setStyle() {
    this.classList.add('mn-image')
  }

  get src() {
    return this.imgChild.src || undefined
  }

  set src(value = '') {
    this.imgChild.src = value
  }
}

window.customElements.define('mn-image', Image)

export default Image
