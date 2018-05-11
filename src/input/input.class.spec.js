import chai, {expect} from 'chai'
import Input from './input.class.js'
import chaiDom from 'chai-dom'

chai.use(chaiDom)

let element

describe('mn-input', () => {
  beforeEach(createElement)

  test('should export a class', () => {
    expect(Input).to.be.a('function')
  })

  test('should instanciate using a constructor', () => {
    const element = new Input()
    expect(element).to.be.instanceof(Input)
  })

  test('should create element using method document.createElement', () => {
    const element = document.createElement('mn-input')
    expect(element).to.be.instanceof(Input)
  })

  test('should have css class .mn-input', () => {
    expect(element).to.have.class('mn-input')
  })

  test('should listen attribute changes', () => {
    expect(Input.observedAttributes).to.deep.equal([
      'label',
      'value',
      'name',
      'placeholder',
      'disabled',
      'readonly',
      'maxlength',
      'autocapitalize',
      'autofocus',
    ])
  })

  test('should have a label child', () => {
    expect(element).to.have.a.property('labelChild')
  })

  test('should have a input child', () => {
    expect(element).to.have.a.property('inputChild')
  })

  test('should have a setter/getter to label', () => {
    element.label = 'lorem'
    expect(element.label).to.be.equal('lorem')
    element.label = undefined
    expect(element.label).to.be.equal('')

    element.setAttribute('label', 'ipsum')
    expect(element.label).to.be.equal('ipsum')
  })

  test('should have a setter/getter to value', () => {
    element.value = 'lorem'
    expect(element.value).to.be.equal('lorem')
    element.value = undefined
    expect(element.value).to.be.equal('')

    element.setAttribute('value', 'ipsum')
    expect(element.value).to.be.equal('ipsum')
  })

  test('should have a setter/getter to name', () => {
    element.name = 'lorem'
    expect(element.name).to.be.equal('lorem')
    element.name = undefined
    expect(element.name).to.be.null

    element.setAttribute('name', 'ipsum')
    expect(element.name).to.be.equal('ipsum')
  })

  test('should have a setter/getter to placeholder', () => {
    element.placeholder = 'lorem'
    expect(element.placeholder).to.be.equal('lorem')

    element.setAttribute('placeholder', 'ipsum')
    expect(element.placeholder).to.be.equal('ipsum')
  })

  test('should have a setter/getter to disabled', () => {
    element.disabled = true
    expect(element.disabled).to.be.true
    element.disabled = false
    expect(element.disabled).to.be.false

    element.setAttribute('disabled', 'true')
    expect(element.disabled).to.be.true

    element.setAttribute('disabled', 'false')
    expect(element.disabled).to.be.false
  })

  test('should have a setter/getter to readonly', () => {
    element.readonly = true
    expect(element.readonly).to.be.true
    element.readonly = false
    expect(element.readonly).to.be.false

    element.setAttribute('readonly', 'true')
    expect(element.readonly).to.be.true

    element.setAttribute('readonly', 'false')
    expect(element.readonly).to.be.false
  })

  test('should have a setter/getter to maxlength', () => {
    element.maxlength = 10
    expect(element.maxlength).to.be.equal('10')
    element.maxlength = undefined
    expect(element.maxlength).to.be.equal('undefined')

    element.setAttribute('maxlength', '10')
    expect(element.maxlength).to.be.equal('10')
  })

  test('should have a setter/getter to autocapitalize', () => {
    element.autocapitalize = true
    expect(element.autocapitalize).to.be.equal('true')
    element.autocapitalize = false
    expect(element.autocapitalize).to.be.equal('false')
    element.autocapitalize = undefined
    expect(element.autocapitalize).to.be.equal('undefined')


    element.setAttribute('autocapitalize', 'true')
    expect(element.autocapitalize).to.be.equal('true')

    element.setAttribute('autocapitalize', 'false')
    expect(element.autocapitalize).to.be.equal('false')
  })

  test('should have a setter/getter to autofocus', () => {
    element.autofocus = true
    expect(element.autofocus).to.be.equal('true')
    element.autofocus = undefined
    expect(element.autofocus).to.be.null

    element.setAttribute('autofocus', 'true')
    expect(element.autofocus).to.be.equal('true')
  })

  test('should setup attributes on add it to dom', () => {
    element = document.createElement('mn-input')
    element.setAttribute('label', 'lorem')
    element.setAttribute('placeholder', 'ipsum')
    element.setAttribute('value', 'dolor')
    document.body.appendChild(element)

    expect(element.label).to.be.equal('lorem')
    expect(element.placeholder).to.be.equal('ipsum')
    expect(element.value).to.be.equal('dolor')
  })

  test('should toggle class focus on focus/blur element', () => {
    expect(element).to.not.have.class('focus')
    element.inputChild.focus()
    expect(element).to.have.class('focus')

    element.inputChild.blur()
    expect(element).to.not.have.class('focus')
  })

  test('should toggle class has-value on set value', () => {
    expect(element).to.not.have.class('has-value')
    element.value = 'lorem'
    expect(element).to.have.class('has-value')
    element.value = ''
    expect(element).to.not.have.class('has-value')
  })

  test('should validate required', () => {
    element.validate()
    expect(element).to.not.have.class('invalid')
    expect(element).to.not.have.class('required')

    element.setAttribute('required', 'true')
    element.validate()
    expect(element).to.have.class('invalid')
    expect(element).to.have.class('required')

    element.value = 'lorem'
    element.validate()
    expect(element).to.not.have.class('invalid')
    expect(element).to.not.have.class('required')
  })
})

function createElement() {
  element = document.createElement('mn-input')
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
