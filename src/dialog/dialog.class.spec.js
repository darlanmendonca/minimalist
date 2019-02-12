import chai, {expect, spy} from 'chai'
import MnDialog from './dialog.class.js'
import MnButton from '../_button/button.component.js'

chai
  .use(require('chai-dom'))
  .use(require('chai-spies'))

let element

describe('dialog', () => {
  beforeEach(createElement)

  test('should export a class', () => {
    expect(MnDialog).to.be.a('function')
  })

  test('should instanciate using a constructor', () => {
    const element = new MnDialog()
    expect(element).to.be.instanceof(MnDialog)
  })

  test('should create element using method document.createElement', () => {
    const element = document.createElement('mn-dialog')
    expect(element).to.be.instanceof(MnDialog)
  })

  test('should have css class .mn-dialog', () => {
    expect(element).to.have.class('mn-dialog')
  })

  test('should open dialog', () => {
    element.open()

    expect(element).to.have.class('visible')
    expect(document.body).to.have.class('mn-dialog-visible')
    expect(document.body).to.have.class('mn-backdrop-visible')
  })

  test('should hide dialog', () => {
    element.open()
    element.close()

    expect(element).to.not.have.class('visible')
    expect(document.body).to.not.have.class('mn-dialog-visible')
    expect(document.body).to.not.have.class('mn-backdrop-visible')
  })

  test('should toggle visibility', () => {
    element.toggle()

    expect(element).to.have.class('visible')
    expect(document.body).to.have.class('mn-dialog-visible')
    expect(document.body).to.have.class('mn-backdrop-visible')

    element.toggle()

    expect(element).to.not.have.class('visible')
    expect(document.body).to.not.have.class('mn-dialog-visible')
    expect(document.body).to.not.have.class('mn-backdrop-visible')
  })

  test('should autofocus on event open after 200 milliseconds', () => {
    const autofocus = spy.on(element, 'autofocus')
    element.dispatchEvent(new Event('open'))

    setTimeout(() => {
      expect(autofocus).to.have.been.called()

      const input = document.createElement('input')
      input.setAttribute('autofocus', '')
      element.appendChild(input)

      element.autofocus()
      expect(document.activeElement).to.be.equal(input)
    }, 200)
  })

  test('should open dialog clicking in button', () => {
    const button = new MnButton()
    button.setAttribute('open-dialog', 'customId')
    element.appendChild(button)
    const open = spy.on(element, 'open')
    button.click()

    expect(open).to.have.been.called()
  })

  test('should close dialog clicking in button', () => {
    const button = new MnButton()
    button.setAttribute('close-dialog', 'customId')
    element.appendChild(button)
    const close = spy.on(element, 'close')
    button.click()

    expect(close).to.have.been.called()
  })

  test('should close dialog clicking outside', () => {
    const button = new MnButton()
    element.appendChild(button)

    const close = spy.on(element, 'close')

    // click inside dialog
    element.open()
    button.click()
    element.querySelector('.mn-section').click()
    expect(close).to.not.have.been.called()

    // click outside, in mn-backrop
    element.click()
    expect(close).to.have.been.called()
  })

  test('should toggle dialog visibility clicking in button', () => {
    const button = new MnButton()
    button.setAttribute('toggle-dialog', 'customId')
    element.appendChild(button)
    const toggle = spy.on(element, 'toggle')
    button.click()

    expect(toggle).to.have.been.called()
  })

  test('should close dialog when press Esc', () => {
    const esc = new Event('keyup')
    esc.key = 'Escape'

    const close = spy.on(element, 'close')
    element.open()
    document.dispatchEvent(esc)

    expect(close).to.have.been.called()
  })
})

function createElement() {
  document.body.innerHTML = ''
  element = document.createElement('mn-dialog')
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
