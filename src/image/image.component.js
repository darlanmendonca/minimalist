import Minimalist, {component, listen, setAttribute} from '../minimalist/minimalist.class.js'

@component('mn-image')
class Image extends Minimalist {
  static observedAttributes = [
    'src',
  ]

  beforeRender() {
    this.classList.add('mn-image')
  }

  render(props = {}) {
    return `
      <img ${setAttribute('src', props.src)} />
    `
  }

  @listen('mouseenter', 'img')
  @listen('mousemove', 'img')
  @listen('mouseup', 'img')
  rotate(event) {
    if (this.parentElement.tagName === 'A') {
      let bounds = this.getBoundingClientRect()
      let isTouchEvent = event.type.startsWith('touch')

      let clientX = isTouchEvent
        ? event.touches[0].clientX
        : event.clientX

      let clientY = isTouchEvent
        ? event.touches[0].clientY
        : event.clientY

      let percentX = (clientX - bounds.left) / bounds.width
      let percentY = (clientY - bounds.top) / bounds.height
      let angles = 20
      let rotateY = (angles * (-percentX * 2)) + angles
      let rotateX = (angles * (percentY * 2)) - angles
      this.style.transform = `
        scale(1.07)
        perspective(1000px)
        rotateY(${rotateY}deg)
        rotateX(${rotateX}deg)
      `
    }
  }

  @listen('mouseleave', 'img')
  @listen('mousedown', 'img')
  unsetRotate() {
    if (this.parentElement.tagName === 'A') {
      this.style.transform = ''
    }
  }
}

export default Image
