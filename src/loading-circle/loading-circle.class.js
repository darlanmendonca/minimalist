import MnComponent from '../component/component.class.js'

class MnLoadingCircle extends MnComponent {
  connectedCallback() {
    super.empty()
    this.setStyle()
    this.setSVG()
    super.setAttributes()
  }

  static get observedAttributes() {
    return []
  }

  setStyle() {
    this.classList.add('mn-loading-circle')
  }

  setSVG() {
    const svg = 'http://www.w3.org/2000/svg'
    const svgChild = document.createElementNS(svg, 'svg')
    svgChild.setAttribute('viewBox', '25 25 50 50')

    this.svgChild = svgChild
    this.appendChild(svgChild)

    const circle = document.createElementNS(svg, 'circle')
    circle.setAttribute('cx', 50)
    circle.setAttribute('cy', 50)
    circle.setAttribute('r', 20)
    this.svgChild.appendChild(circle)
  }
}

window.customElements.define('mn-loading-circle', MnLoadingCircle)

export default MnLoadingCircle
