import chai, {expect} from 'chai'
import MnForm from './form.class.js'
import '../input/input.class.js'
import '../number/number.class.js'
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

  test('should have input property', () => {
    expect(element).to.have.a.property('inputs')
    expect(element.inputs).to.be.an('array')
  })

  test('should have a setter/getter to disabled', () => {
    const input = document.createElement('mn-input')
    element.appendChild(input)
    input.connectedCallback()

    expect(element.disabled).to.be.false
    expect(input.disabled).to.be.false
    element.disabled = true
    expect(element.disabled).to.be.true
    expect(input.disabled).to.be.true
  })

  test('should have a setter/getter to readonly', () => {
    const input = document.createElement('mn-input')
    element.appendChild(input)
    input.connectedCallback()

    expect(element.readonly).to.be.false
    expect(input.disabled).to.be.false
    element.readonly = true
    expect(element.readonly).to.be.true
    expect(input.readonly).to.be.true
  })

  test('should have a getter to data', () => {
    const input = document.createElement('mn-input')
    const number = document.createElement('mn-number')
    element.appendChild(input)
    element.appendChild(number)
    input.connectedCallback()
    number.connectedCallback()
    input.name = 'username'
    input.value = 'lorem'
    number.name = 'number'

    expect(element.data).to.deep.equal({username: 'lorem', number: undefined})

    number.value = 10
    expect(element.data).to.deep.equal({username: 'lorem', number: 10})
  })

  test('should validate all inputs', () => {
    const input = document.createElement('mn-input')
    const number = document.createElement('mn-number')
    element.appendChild(input)
    element.appendChild(number)
    input.connectedCallback()
    number.connectedCallback()

    expect(element.validate()).to.be.true
    input.setAttribute('required', true)
    expect(element.validate()).to.be.false
    input.value = 'lorem'
    expect(element.validate()).to.be.true
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
