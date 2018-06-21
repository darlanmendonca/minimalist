import chai, {expect} from 'chai'
import MnForm from './form.class.js'
import '../input/input.class.js'
import chaiDom from 'chai-dom'

chai.use(chaiDom)

let element

describe('mn-form', () => {
  beforeEach(createElement)

  test('should export a class', () => {
    expect(MnForm).to.be.a('function')
  })

  test('should instanciate using a constructor', () => {
    const element = new MnForm()
    expect(element).to.be.instanceof(MnForm)
  })

  test('should create element using method document.createElement', () => {
    const element = document.createElement('mn-form')
    expect(element).to.be.instanceof(MnForm)
  })

  test('should have css class .mn-form', () => {
    expect(element).to.have.class('mn-form')
  })

  test('should listen attribute changes', () => {
    expect(MnForm.observedAttributes).to.deep.equal([
      'disabled',
      'readonly',
    ])
  })

  test('should have a setter/getter to disabled', () => {
    expect(element.disabled).to.be.false
    element.disabled = true
    expect(element.disabled).to.be.true
  })
})

function createElement() {
  element = document.createElement('mn-form')
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
