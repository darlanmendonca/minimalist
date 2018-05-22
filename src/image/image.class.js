import MnComponent from '../component/component.class.js'

class MnImage extends MnComponent {
  connectedCallback() {
    super.empty()
    this.setStyle()
    super.setChildren('img')
    this.setPerspective()
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

  setPerspective() {
    this.addEventListener('mouseenter', applyPerspective)
    this.addEventListener('mousemove', applyPerspective)
    this.addEventListener('mouseleave', removePerspective)

    function applyPerspective(event) {
      const hasPerspective = this.getAttribute('perspective') === 'true'

      if (hasPerspective) {
        const bounds = this.getBoundingClientRect()
        const {clientX, clientY} = event

        const percentX = (clientX - bounds.left) / bounds.width
        const percentY = (clientY - bounds.top) / bounds.height
        const angles = 20
        const rotateY = (angles * (-percentX * 2)) + angles
        const rotateX = (angles * (percentY * 2)) - angles

        this.style.transform = `
          scale(1.07)
          perspective(1000px)
          rotateY(${rotateY}deg)
          rotateX(${rotateX}deg)
        `
      }
    }

    function removePerspective() {
      this.style.transform = ''
    }
  }

  get src() {
    return this.imgChild.src || undefined
  }

  set src(value = '') {
    this.imgChild.src = value
  }
}

window.customElements.define('mn-image', MnImage)

export default MnImage
