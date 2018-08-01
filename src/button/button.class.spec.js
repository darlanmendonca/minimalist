import chai, {expect, spy} from 'chai'
import MnButton from './button.class.js'

chai
  .use(require('chai-dom'))
  .use(require('chai-spies'))

let element

describe('button', () => {
  beforeEach(createElement)

  test('should export a class', () => {
    expect(MnButton).to.be.a('function')
  })

  test('should instanciate using a constructor', () => {
    const element = new MnButton()
    expect(element).to.be.instanceof(MnButton)
  })

  test('should create element using method document.createElement', () => {
    const element = document.createElement('mn-button')
    expect(element).to.be.instanceof(MnButton)
  })

  test('should have css class .mn-button', () => {
    expect(element).to.have.class('mn-button')
  })

  test('should have a tabindex', () => {
    expect(element).to.have.attribute('tabindex', '0')
  })

  test('should blur on click', () => {
    const blur = spy.on(element, 'blur')
    element.click()

    expect(blur).to.have.been.called()
  })
})

function createElement() {
  element = document.createElement('mn-button')
  document.body.appendChild(element)

  // fallback to closest
  Element.prototype.closest = function(s) {
    let matches = (this.document || this.ownerDocument).querySelectorAll(s)
    let i
    let el = this
    do {
        i = matches.length
        while (--i >= 0 && matches.item(i) !== el) {}
    } while ((i < 0) && (el = el.parentElement))
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
