import chai, {expect} from 'chai'
import MnSidenav from './sidenav.class.js'

chai.use(require('chai-dom'))

let element

describe('sidenav', () => {
  beforeEach(createElement)

  test('should export a class', () => {
    expect(MnSidenav).to.be.a('function')
  })

  test('should instanciate using a constructor', () => {
    const element = new MnSidenav()
    expect(element).to.be.instanceof(MnSidenav)
  })

  test('should create element using method document.createElement', () => {
    const element = document.createElement('mn-sidenav')
    expect(element).to.be.instanceof(MnSidenav)
  })

  test('should have css class .mn-sidenav', () => {
    expect(element).to.have.class('mn-sidenav')
  })

  test('should have css class .mn-card', () => {
    expect(element).to.have.class('mn-card')
  })
})

function createElement() {
  element = document.createElement('mn-sidenav')
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
