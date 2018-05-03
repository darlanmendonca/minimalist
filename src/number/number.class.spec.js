import chai, {expect} from 'chai'
import MnNumber from './number.class.js'
import chaiDom from 'chai-dom'

chai.use(chaiDom)

let element

describe('mn-number', () => {
  beforeEach(createElement)

  test('should export a class', () => {
    expect(MnNumber).to.be.a('function')
  })

  test('should instanciate using a constructor', () => {
    const element = new MnNumber()
    expect(element).to.be.instanceof(MnNumber)
  })

  test('should create element using method document.createElement', () => {
    const element = document.createElement('mn-number')
    expect(element).to.be.instanceof(MnNumber)
  })

  test('should have css class .mn-number', () => {
    expect(element).to.have.class('mn-number')
  })

  test('should listen attribute changes', () => {
    expect(MnNumber.observedAttributes).to.deep.equal([
      'label',
      'value',
      'name',
      'placeholder',
      'disabled',
      'readonly',
      'autofocus',
      'currency',
      'precision',
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
    expect(element.value).to.be.undefined
    expect(element.inputChild).to.have.value('')

    element.value = undefined
    expect(element.value).to.be.undefined
    expect(element.inputChild).to.have.value('')

    element.value = null
    expect(element.value).to.be.undefined
    expect(element.inputChild).to.have.value('')

    element.value = 0
    expect(element.value).to.be.equal(0)
    expect(element.inputChild).to.have.value('0')

    element.value = '1'
    expect(element.value).to.be.equal(1)
    expect(element.inputChild).to.have.value('1')

    element.setAttribute('value', 'ipsum')
    expect(element.value).to.be.undefined
    expect(element.inputChild).to.have.value('')

    element.setAttribute('value', 10)
    expect(element.value).to.be.equal(10)
    expect(element.inputChild).to.have.value('10')
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

  test('should have a setter/getter to autofocus', () => {
    element.autofocus = true
    expect(element.autofocus).to.be.equal('true')
    element.autofocus = undefined
    expect(element.autofocus).to.be.null

    element.setAttribute('autofocus', 'true')
    expect(element.autofocus).to.be.equal('true')
  })

  test('should setup attributes on add it to dom', () => {
    element = document.createElement('mn-number')
    element.setAttribute('label', 'lorem')
    element.setAttribute('placeholder', 'ipsum')
    element.setAttribute('value', '10')
    document.body.appendChild(element)

    expect(element.label).to.be.equal('lorem')
    expect(element.placeholder).to.be.equal('ipsum')
    expect(element.value).to.be.equal(10)
  })

  test('should toggle class focus on focus/blur element', () => {
    expect(element).to.not.have.class('focus')
    element.inputChild.focus()
    expect(element).to.have.class('focus')

    element.inputChild.blur()
    expect(element).to.not.have.class('focus')
  })

  test.skip('should toggle class has-value on set value', () => {
    expect(element).to.not.have.class('has-value')
    element.value = 'lorem'
    expect(element).to.have.class('has-value')
    element.value = ''
    expect(element).to.not.have.class('has-value')
  })
})

function createElement() {
  element = document.createElement('mn-number')
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
