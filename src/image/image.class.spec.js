import chai, {expect} from 'chai'
import MnImage from './image.class.js'
import chaiDom from 'chai-dom'

chai.use(chaiDom)

let element

describe('mn-image', () => {
  beforeEach(createElement)

  test('should export a class', () => {
    expect(MnImage).to.be.a('function')
  })

  test('should instanciate using a constructor', () => {
    const element = new MnImage()
    expect(element).to.be.instanceof(MnImage)
  })

  test('should create element using method document.createElement', () => {
    const element = document.createElement('mn-image')
    expect(element).to.be.instanceof(MnImage)
  })

  test('should have css class .mn-image', () => {
    expect(element).to.have.class('mn-image')
  })

  test('should listen attribute changes', () => {
    expect(MnImage.observedAttributes).to.deep.equal([
      'src',
    ])
  })

  test('should have a img child', () => {
    expect(element).to.have.a.property('imgChild')
  })

  test('should have a setter/getter to src', () => {
    element.src = 'lorem'
    expect(element.src).to.be.equal('lorem')
    element.src = undefined
    expect(element.src).to.be.undefined

    element.setAttribute('src', 'ipsum')
    expect(element.src).to.be.equal('ipsum')
  })

  test('should apply and remove perspective on mouse events', () => {
    expect(element.style).to.not.have.property('transform')
    element.setAttribute('perspective', 'true')

    element.dispatchEvent(new Event('mouseenter'))
    expect(element.style).to.have.property('transform')

    element.dispatchEvent(new Event('mousemove'))
    expect(element.style).to.have.property('transform')

    element.dispatchEvent(new Event('mouseleave'))
    expect(element.style).to.not.have.property('transform')
  })
})

function createElement() {
  element = document.createElement('mn-image')
  document.body.appendChild(element)

  // fallback to connectedCallback
  document.body.appendChild = function(element) {
    HTMLFormElement.prototype.appendChild.apply(this, arguments)
    if (element.connectedCallback) {
      element.connectedCallback()
    }
  }

  // fallback to attributeChangedCallback
  element.setAttribute = function(attribute, value) {
    HTMLFormElement.prototype.setAttribute.apply(this, arguments)
    this.attributeChangedCallback(attribute, this.label, value)
  }
}
