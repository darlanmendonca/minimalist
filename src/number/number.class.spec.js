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

  test('should format precision value', () => {
    element.value = 10
    expect(element.value).to.be.equal(10)
    expect(element.inputChild).to.have.value('10')

    element.setAttribute('precision', '3')
    expect(element.value).to.be.equal(10)
    expect(element.inputChild).to.have.value('10,000')

    element.value = 20
    expect(element.value).to.be.equal(20)
    expect(element.inputChild).to.have.value('20,000')
  })

  test('should format currency value', () => {
    element.value = 10
    expect(element.value).to.be.equal(10)
    expect(element.inputChild).to.have.value('10')

    element.setAttribute('currency', 'currency')
    expect(element.value).to.be.equal(10)
    expect(element.inputChild).to.have.value('10,00')

    element.value = 20
    expect(element.value).to.be.equal(20)
    expect(element.inputChild).to.have.value('20,00')

    element.setAttribute('currency', 'true')
    expect(element.value).to.be.equal(20)
    expect(element.inputChild).to.have.value('20,00')

    element.setAttribute('currency', 'false')
    expect(element.value).to.be.equal(20)
    expect(element.inputChild).to.have.value('20')

    element.setAttribute('precision', '3')
    expect(element.value).to.be.equal(20)
    expect(element.inputChild).to.have.value('20,000')
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
    expect(element.autofocus).to.be.undefined

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

  test('should toggle class has-value on set value', () => {
    expect(element).to.not.have.class('has-value')
    element.value = 'lorem'
    expect(element).to.not.have.class('has-value')
    element.value = ''
    expect(element).to.not.have.class('has-value')

    element.value = 0
    expect(element).to.have.class('has-value')

    element.value = 10
    expect(element).to.have.class('has-value')
  })

  test('should validate required', () => {
    element.validate()
    expect(element).to.not.have.class('invalid')
    expect(element).to.not.have.class('required')

    element.setAttribute('required', 'true')
    element.validate()
    expect(element).to.have.class('invalid')
    expect(element).to.have.class('required')

    element.value = 0
    element.validate()
    expect(element).to.not.have.class('invalid')
    expect(element).to.not.have.class('required')
  })

  test('should increment value on ArrowUp', () => {
    const ArrowUp = new Event('keydown')
    ArrowUp.key = 'ArrowUp'

    element.inputChild.dispatchEvent(ArrowUp)
    expect(element).to.have.value(1)
    element.inputChild.dispatchEvent(ArrowUp)
    expect(element).to.have.value(2)

    ArrowUp.shiftKey = true
    element.inputChild.dispatchEvent(ArrowUp)
    expect(element).to.have.value(12)
    element.inputChild.dispatchEvent(ArrowUp)
    expect(element).to.have.value(22)

    ArrowUp.shiftKey = false
    ArrowUp.altKey = true
    element.inputChild.dispatchEvent(ArrowUp)
    expect(element).to.have.value(22.1)
    element.inputChild.dispatchEvent(ArrowUp)
    expect(element).to.have.value(22.2)

    element.setAttribute('readonly', 'true')
    element.inputChild.dispatchEvent(ArrowUp)
    expect(element).to.have.value(22.2)

    element.setAttribute('readonly', 'false')
    element.inputChild.dispatchEvent(ArrowUp)
    expect(element).to.have.value(22.3)
  })

  test('should decrement value on ArrowDown', () => {
    const ArrowDown = new Event('keydown')
    ArrowDown.key = 'ArrowDown'

    element.inputChild.dispatchEvent(ArrowDown)
    expect(element).to.have.value(-1)
    element.inputChild.dispatchEvent(ArrowDown)
    expect(element).to.have.value(-2)

    ArrowDown.shiftKey = true
    element.inputChild.dispatchEvent(ArrowDown)
    expect(element).to.have.value(-12)
    element.inputChild.dispatchEvent(ArrowDown)
    expect(element).to.have.value(-22)

    ArrowDown.shiftKey = false
    ArrowDown.altKey = true
    element.inputChild.dispatchEvent(ArrowDown)
    expect(element).to.have.value(-22.1)
    element.inputChild.dispatchEvent(ArrowDown)
    expect(element).to.have.value(-22.2)

    element.setAttribute('readonly', 'true')
    element.inputChild.dispatchEvent(ArrowDown)
    expect(element).to.have.value(-22.2)

    element.setAttribute('readonly', 'false')
    element.inputChild.dispatchEvent(ArrowDown)
    expect(element).to.have.value(-22.3)
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
