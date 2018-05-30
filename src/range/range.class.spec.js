import chai, {expect, spy} from 'chai'
import MnRange from './range.class.js'

chai
  .use(require('chai-dom'))
  .use(require('chai-spies'))

let element

describe('mn-range', () => {
  beforeEach(createElement)

  test('should export a class', () => {
    expect(MnRange).to.be.a('function')
  })

  test('should instanciate using a constructor', () => {
    const element = new MnRange()
    expect(element).to.be.instanceof(MnRange)
  })

  test('should create element using method document.createElement', () => {
    const element = document.createElement('mn-range')
    expect(element).to.be.instanceof(MnRange)
  })

  test('should listen attribute changes', () => {
    expect(MnRange.observedAttributes).to.deep.equal([
      'value',
      'step',
      'min',
      'max',
    ])
  })

  test('should have css class .mn-range', () => {
    expect(element).to.have.class('mn-range')
  })

  test('should have a input child', () => {
    expect(element).to.have.a.property('inputChild')
    expect(element.inputChild).to.have.attribute('type', 'range')
  })

  test('should have a setter/getter to step', () => {
    element.step = 2
    expect(element.step).to.be.equal(2)
    element.step = undefined
    expect(element.step).to.be.undefined

    element.setAttribute('step', 3)
    expect(element.step).to.be.equal(3)
  })

  test('should have a setter/getter to min', () => {
    element.min = 0
    expect(element.min).to.be.equal(0)
    element.min = undefined
    expect(element.min).to.be.undefined

    element.setAttribute('min', '1')
    expect(element.min).to.be.equal(1)

  })

  test('should have a setter/getter to max', () => {
    element.max = 10
    expect(element.max).to.be.equal(10)
    element.max = undefined
    expect(element.max).to.be.undefined

    element.setAttribute('max', '20')
    expect(element.max).to.be.equal(20)
  })

  // test('should have a setter/getter to value', () => {
  //   element.value = 10
  //   expect(element.value).to.be.equal(10)
  //   element.value = undefined
  //   expect(element.value).to.be.equal('')

  //   element.setAttribute('value', 'ipsum')
  //   expect(element.value).to.be.equal('ipsum')
  // })
})

function createElement() {
  element = document.createElement('mn-range')
  document.body.appendChild(element)

  // fallback to closest
  Element.prototype.closest = function(s) {
    let matches = (this.document || this.ownerDocument).querySelectorAll(s)
    let i
    let el = this
    do {
        i = matches.length
        while (--i >= 0 && matches.item(i) !== el) {}
    } while ((i < 0) && (el = el.parentElement));
    return el
  }

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
