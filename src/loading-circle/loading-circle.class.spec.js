import chai, {expect} from 'chai'
import MnLoadingCircle from './loading-circle.class.js'
import chaiDom from 'chai-dom'

chai.use(chaiDom)

let element

describe('mn-loading-circle', () => {
  beforeEach(createElement)

  test('should export a class', () => {
    expect(MnLoadingCircle).to.be.a('function')
  })

  test('should instanciate using a constructor', () => {
    const element = new MnLoadingCircle()
    expect(element).to.be.instanceof(MnLoadingCircle)
  })

  test('should create element using method document.createElement', () => {
    const element = document.createElement('mn-loading-circle')
    expect(element).to.be.instanceof(MnLoadingCircle)
  })

  test('should have css class .mn-loading-circle', () => {
    expect(element).to.have.class('mn-loading-circle')
  })

  test('should have a svg child', () => {
    expect(element).to.have.a.property('svgChild')
  })
})

function createElement() {
  element = document.createElement('mn-loading-circle')
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
