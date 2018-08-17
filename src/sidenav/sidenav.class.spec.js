import chai, {expect, spy} from 'chai'
import MnSidenav from './sidenav.class.js'
import MnButton from '../button/button.class.js'

chai
  .use(require('chai-dom'))
  .use(require('chai-spies'))

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

  test('should show sidenav', () => {
    element.show()

    expect(element).to.have.class('visible')
    expect(document.body).to.have.class('mn-sidenav-visible')
    expect(document.body).to.have.class('mn-backdrop-visible')
  })

  test('should hide sidenav', () => {
    element.show()
    element.hide()

    expect(element).to.not.have.class('visible')
    expect(document.body).to.not.have.class('mn-sidenav-visible')
    expect(document.body).to.not.have.class('mn-backdrop-visible')
  })

  test('should toggle visibility', () => {
    element.toggle()

    expect(element).to.have.class('visible')
    expect(document.body).to.have.class('mn-sidenav-visible')
    expect(document.body).to.have.class('mn-backdrop-visible')

    element.toggle()

    expect(element).to.not.have.class('visible')
    expect(document.body).to.not.have.class('mn-sidenav-visible')
    expect(document.body).to.not.have.class('mn-backdrop-visible')
  })

  test('should autofocus on event show', () => {
    const autofocus = spy.on(element, 'autofocus')
    element.dispatchEvent(new Event('show'))

    expect(autofocus).to.have.been.called()
    
    const input = document.createElement('input')
    input.setAttribute('autofocus', '')
    element.appendChild(input)

    element.autofocus()
    expect(document.activeElement).to.be.equal(input)
  })

  test('should show sidenav clicking in button', () => {
    const button = new MnButton()
    button.setAttribute('show-sidenav', 'customId')
    element.appendChild(button)
    const show = spy.on(element, 'show')
    button.click()

    expect(show).to.have.been.called()
  })

  test('should hide sidenav clicking in button', () => {
    const button = new MnButton()
    button.setAttribute('hide-sidenav', 'customId')
    element.appendChild(button)
    const hide = spy.on(element, 'hide')
    button.click()

    expect(hide).to.have.been.called()
  })

  test('should hide sidenav clicking outside', () => {
    const button = new MnButton()
    element.appendChild(button)

    const hide = spy.on(element, 'hide')

    element.show()
    button.click()
    element.click()

    expect(hide).to.not.have.been.called()

    document.body.click()

    expect(hide).to.have.been.called()
  })

  test('should toggle sidenav visibility clicking in button', () => {
    const button = new MnButton()
    button.setAttribute('toggle-sidenav', 'customId')
    element.appendChild(button)
    const toggle = spy.on(element, 'toggle')
    button.click()

    expect(toggle).to.have.been.called()
  })

  test('should hide sidenav when press Esc', () => {
    const esc = new Event('keyup')
    esc.key = 'Escape'

    const hide = spy.on(element, 'hide')
    element.show()
    document.dispatchEvent(esc)

    expect(hide).to.have.been.called()
  })
})

function createElement() {
  element = document.createElement('mn-sidenav')
  element.id = 'customId'
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
