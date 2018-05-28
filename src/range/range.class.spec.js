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

  test('should have css class .mn-range', () => {
    expect(element).to.have.class('mn-range')
  })

  test('should have a input child', () => {
    expect(element).to.have.a.property('inputChild')
    expect(element.inputChild).to.have.attribute('type', 'range')
  })
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
