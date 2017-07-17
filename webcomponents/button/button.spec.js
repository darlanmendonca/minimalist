/* global describe, it, before, beforeEach */
const {expect, spy} = require('chai')
  .use(require('chai-dom'))
  .use(require('chai-style'))
  .use(require('chai-spies'))

let component

describe('mn-button (webcomponent)', () => {
  before(loadComponent)
  beforeEach(createComponent)

  describe('instance', () => {
    it('should work with a constructor', () => {
      const MnButton = window.customElements.get('mn-button')
      component = new MnButton()
      expect(component).to.be.instanceof(MnButton)
    })

    it('should work with document.createElement()', () => {
      const MnButton = window.customElements.get('mn-button')
      component = document.createElement('mn-button')
      expect(component).to.be.instanceof(MnButton)
    })
  })

  describe('component', () => {
    it('should have the .mn-button class', () => {
      expect(component).to.have.class('mn-button')
    })

    it('should have a tabindex attribute', () => {
      expect(component).to.have.attribute('tabindex', '0')
    })
  })

  describe('events', () => {
    it('should be focusable', () => {
      component.focus()
      expect(component).to.be.equal(document.activeElement)
    })

    it.skip('should click on press key Enter', () => {
      const click = spy.on(component, 'click')
      component.focus()
      const enter = new Event('keyup')
      enter.target = component

      component.addEventListener('click', (event) => {
        expect(event).to.have.property('data')

        expect(click).to.have.been.called()
      })

      document.dispatchEvent(enter)
    })

  })

  describe.skip('attribute submit', () => {
    it('should submit form', () => {

    })
  })
})

function loadComponent() {
  // require('minimalist').button
}

function createComponent() {
  component = document.createElement('mn-button')
  document.body.appendChild(component)
}
