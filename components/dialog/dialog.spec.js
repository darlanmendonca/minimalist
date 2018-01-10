/* global describe, it, beforeEach */
const {expect, spy} = require('chai')
  .use(require('chai-dom'))
  .use(require('chai-style'))
  .use(require('chai-spies'))

let dialog
let component

describe('mn-dialog (webcomponent)', () => {
  beforeEach(createComponent)
  beforeEach(setPageObject)

  describe('instance', () => {
    it('should work with a constructor', () => {
      const MnDialog = window.customElements.get('mn-dialog')
      component = new MnDialog()
      expect(component).to.be.instanceof(MnDialog)
    })

    it('should work with document.createElement()', () => {
      const MnDialog = window.customElements.get('mn-dialog')
      component = document.createElement('mn-dialog')
      expect(component).to.be.instanceof(MnDialog)
    })
  })

  describe('component', () => {
    it('should have the .mn-dialog class', () => {
      expect(component).to.have.class('mn-dialog')
    })

    it('should contain a .mn-card child', () => {
      expect(component.querySelectorAll('.mn-card')).to.have.length(1)
    })

    it('should have a backdrop into body', () => {
      expect(document.body).to.have.class('mn-backdrop')
    })
  })

  describe('method open', () => {
    it('should display dialog', () => {
      component.open()
      expect(component).to.have.class('visible')
      expect(document.body).to.have.class('mn-dialog-visible')
    })

    it('should display backdrop', () => {
      component.open()
      expect(document.body).to.have.class('mn-backdrop-visible')
    })

    it('should be called on click in button with open-dialog attribute', () => {
      const open = spy.on(component, 'open')
      dialog.buttonOpen.click()

      expect(open).to.have.been.called()
    })

    it('should scroll to top', () => {
      dialog.scroll(300)
      component.open()
      expect(component.scrollTop).to.equal(0)
    })
  })

  describe('method close', () => {
    it('should hide dialog', () => {
      component.open()
      component.close()
      expect(component).to.not.have.class('visible')
      expect(document.body).to.not.have.class('mn-dialog-visible')
    })

    it('should hide backdrop', () => {
      component.open()
      component.close()
      expect(document.body).to.not.have.class('mn-backdrop-visible')
    })

    it('should be called on click in button with close-dialog attribute', () => {
      const close = spy.on(component, 'close')
      component.open()
      dialog.buttonClose.click()

      expect(close).to.have.been.called()
    })

    it('should be called when press ESC', () => {
      const close = spy.on(component, 'close')
      component.open()
      dialog.pressEsc()

      expect(close).to.have.been.called()
    })
  })

  describe('method toggle', () => {
    it('should display dialog if not visible', () => {
      const open = spy.on(component, 'open')
      component.toggle()
      expect(open).to.have.been.called()
    })

    it('should hide dialog if visible', () => {
      const close = spy.on(component, 'close')
      component.open()
      component.toggle()
      expect(close).to.have.been.called()
    })

    it('should be called on click in button with toggle-dialog attribute', () => {
      const toggle = spy.on(component, 'toggle')
      dialog.buttonToggle.click()
      dialog.buttonToggle.click()

      expect(toggle).to.have.been.called.twice
    })
  })
})

function createComponent() {
  component = document.createElement('mn-dialog')
  component.id = 'menu'

  Array(100)
    .fill(null)
    .forEach(() => {
      const div = document.createElement('div')
      div.textContent = 'test'
      component.appendChild(div)
    })

  document.body.appendChild(component)
}

function setPageObject() {
  const DialogPageObject = require('./dialog.po.js')
  dialog = new DialogPageObject(component)
}
