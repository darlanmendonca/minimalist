import chai, {expect} from 'chai'
import MnInput from './input.class.js'
import chaiDom from 'chai-dom'

chai.use(chaiDom)

let input

describe('mn-input (webcomponent)', () => {
  beforeEach(createElement)

  test('should export a class', () => {
    expect(MnInput).to.be.a('function')
  })

  test('should instanciate using a constructor', () => {
    const input = new MnInput()
    expect(input).to.be.instanceof(MnInput)
  })

  test('should create element using method document.createElement', () => {
    const input = document.createElement('mn-input')
    expect(input).to.be.instanceof(MnInput)
  })

  test('should have css class .mn-input', () => {
    expect(input).to.have.class('mn-input')
  })

  test('should listen attribute changes', () => {
    expect(MnInput.observedAttributes).to.deep.equal([
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
    expect(input).to.have.a.property('labelChild')
  })

  test('should have a input child', () => {
    expect(input).to.have.a.property('inputChild')
  })

  test('should have a setter/getter to label', () => {
    input.label = 'lorem'
    expect(input.label).to.be.equal('lorem')
    input.label = undefined
    expect(input.label).to.be.equal('')

    input.setAttribute('label', 'ipsum')
    expect(input.label).to.be.equal('ipsum')
  })

  test('should have a setter/getter to value', () => {
    input.value = 'lorem'
    expect(input.value).to.be.equal('lorem')
    input.value = undefined
    expect(input.value).to.be.equal('')

    input.setAttribute('value', 'ipsum')
    expect(input.value).to.be.equal('ipsum')
  })

  test('should have a setter/getter to name', () => {
    input.name = 'lorem'
    expect(input.name).to.be.equal('lorem')
    input.name = undefined
    expect(input.name).to.be.null

    input.setAttribute('name', 'ipsum')
    expect(input.name).to.be.equal('ipsum')
  })

  test('should have a setter/getter to placeholder', () => {
    input.placeholder = 'lorem'
    expect(input.placeholder).to.be.equal('lorem')

    input.setAttribute('placeholder', 'ipsum')
    expect(input.placeholder).to.be.equal('ipsum')
  })

  test('should have a setter/getter to disabled', () => {
    input.disabled = true
    expect(input.disabled).to.be.true
    input.disabled = false
    expect(input.disabled).to.be.false

    input.setAttribute('disabled', 'true')
    expect(input.disabled).to.be.true

    input.setAttribute('disabled', 'false')
    expect(input.disabled).to.be.false
  })

  test('should have a setter/getter to readonly', () => {
    input.readonly = true
    expect(input.readonly).to.be.true
    input.readonly = false
    expect(input.readonly).to.be.false

    input.setAttribute('readonly', 'true')
    expect(input.readonly).to.be.true

    input.setAttribute('readonly', 'false')
    expect(input.readonly).to.be.false
  })

  test('should have a setter/getter to maxlength', () => {
    input.maxlength = 10
    expect(input.maxlength).to.be.equal('10')
    input.maxlength = undefined
    expect(input.maxlength).to.be.equal('undefined')

    input.setAttribute('maxlength', '10')
    expect(input.maxlength).to.be.equal('10')
  })

  test('should have a setter/getter to autocapitalize', () => {
    input.autocapitalize = true
    expect(input.autocapitalize).to.be.equal('true')
    input.autocapitalize = false
    expect(input.autocapitalize).to.be.equal('false')
    input.autocapitalize = undefined
    expect(input.autocapitalize).to.be.equal('undefined')


    input.setAttribute('autocapitalize', 'true')
    expect(input.autocapitalize).to.be.equal('true')

    input.setAttribute('autocapitalize', 'false')
    expect(input.autocapitalize).to.be.equal('false')
  })

  test('should have a setter/getter to autofocus', () => {
    input.autofocus = true
    expect(input.autofocus).to.be.equal('true')
    input.autofocus = undefined
    expect(input.autofocus).to.be.null

    input.setAttribute('autofocus', 'true')
    expect(input.autofocus).to.be.equal('true')
  })

  test('should add/remove class focus while focus/blur element', () => {
    expect(input).to.not.have.class('focus')
    input.inputChild.focus()
    expect(input).to.have.class('focus')

    input.inputChild.blur()
    expect(input).to.not.have.class('focus')
  })
})

function createElement() {
  input = document.createElement('mn-input')
  document.body.appendChild(input)

  // fallback to connectedCallback
  input.connectedCallback()

  // fallback to attributeChangedCallback
  input.setAttribute = function(attribute, value) {
    HTMLFormElement.prototype.setAttribute.apply(this, arguments)
    this.attributeChangedCallback(attribute, this.label, value)
  }
}
